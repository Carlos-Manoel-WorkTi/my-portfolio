// src/app/api/firebaseStorage.ts
import { fallbackProjects, getFallbackProjectByName } from "@/data/projects";
import { ProjectItem } from "@/types/types";

type FirestoreValue = {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: number;
  booleanValue?: boolean;
  nullValue?: null;
  arrayValue?: { values?: FirestoreValue[] };
  mapValue?: { fields?: Record<string, FirestoreValue> };
};

type FirestoreDocument = {
  name: string;
  fields?: Record<string, FirestoreValue>;
};

const FIRESTORE_BASE_URL = "https://firestore.googleapis.com/v1";

function getFirebaseRestUrl(path: string) {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

  if (!projectId || !apiKey) {
    return null;
  }

  return `${FIRESTORE_BASE_URL}/projects/${projectId}/databases/(default)/documents/${path}?key=${apiKey}`;
}

function readFirestoreValue(value: FirestoreValue): unknown {
  if ("stringValue" in value) return value.stringValue ?? "";
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return value.doubleValue;
  if ("booleanValue" in value) return value.booleanValue;
  if ("nullValue" in value) return null;

  if (value.arrayValue) {
    return (value.arrayValue.values ?? []).map(readFirestoreValue);
  }

  if (value.mapValue) {
    return readFirestoreFields(value.mapValue.fields ?? {});
  }

  return undefined;
}

function readFirestoreFields(fields: Record<string, FirestoreValue>) {
  return Object.entries(fields).reduce<Record<string, unknown>>((acc, [key, value]) => {
    acc[key] = readFirestoreValue(value);
    return acc;
  }, {});
}

function parseProjectDocument(document: FirestoreDocument): ProjectItem {
  const id = decodeURIComponent(document.name.split("/").pop() ?? "");

  return {
    id,
    ...(readFirestoreFields(document.fields ?? {}) as Omit<ProjectItem, "id">),
  };
}

function mergeProjectsWithFallback(projects: ProjectItem[]): ProjectItem[] {
  const remoteByTitle = new Map(projects.map((project) => [project.title, project]));
  const fallbackTitles = new Set(fallbackProjects.map((project) => project.title));

  const knownProjects = fallbackProjects.map(
    (fallbackProject) => remoteByTitle.get(fallbackProject.title) ?? fallbackProject
  );
  const remoteOnlyProjects = projects.filter(
    (project) => !fallbackTitles.has(project.title)
  );

  return [...knownProjects, ...remoteOnlyProjects];
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Firestore REST failed with ${response.status}`);
  }

  return response.json();
}

export const getInfAll = async (): Promise<ProjectItem[]> => {
  const url = getFirebaseRestUrl("projects");

  if (!url) {
    return fallbackProjects;
  }

  try {
    const data = await fetchJson<{ documents?: FirestoreDocument[] }>(url);
    const projects = (data.documents ?? []).map(parseProjectDocument);

    return projects.length > 0 ? mergeProjectsWithFallback(projects) : fallbackProjects;
  } catch (err) {
    console.error("[getInfAll] Erro ao buscar projetos no Firestore:", err);
    return fallbackProjects;
  }
};

export const getInfByName = async (name: string): Promise<ProjectItem | null> => {
  if (!name || typeof name !== "string") {
    console.error("[getInfByName] Nome inválido recebido:", name);
    return null;
  }

  const url = getFirebaseRestUrl(`projects/${encodeURIComponent(name)}`);

  if (!url) {
    return getFallbackProjectByName(name);
  }

  try {
    const document = await fetchJson<FirestoreDocument>(url);
    return parseProjectDocument(document);
  } catch (err) {
    console.error("[getInfByName] Erro ao buscar projeto no Firestore:", err);
    return getFallbackProjectByName(name);
  }
};
