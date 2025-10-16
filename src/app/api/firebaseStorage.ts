// src/app/api/firebaseStorage.ts
import { db } from "@/config/firebase";
import { ProjectItem } from "@/types/types";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

/**
 * Busca todos os projetos do Firestore
 */
export const getInfAll = async (): Promise<ProjectItem[]> => {
  console.log("📡 [getInfAll] Iniciando busca de todos os projetos...");

  if (!db) {
    console.error("❌ [getInfAll] Firestore (db) não inicializado corretamente.");
    return [];
  }

  try {
    console.log("📁 [getInfAll] Acessando coleção: 'projects'");
    const colRef = collection(db, "projects");

    const snapshot = await getDocs(colRef);
    console.log(`📄 [getInfAll] ${snapshot.size} documentos encontrados.`);

    const projects: ProjectItem[] = snapshot.docs.map((d) => ({
      id: d.id,
      ...(d.data() as ProjectItem),
    }));

    // console.log("✅ [getInfAll] Projetos carregados:", projects);
    return projects;
  } catch (err) {
    console.error("🔥 [getInfAll] Erro ao buscar projetos:", err);
    return [];
  }
};

/**
 * Busca um projeto específico pelo nome (id do doc)
 */
export const getInfByName = async (name: string): Promise<ProjectItem | null> => {
  console.log("📡 [getInfByName] Iniciando busca de projeto:", name);

  if (!db) {
    console.error("❌ [getInfByName] Firestore (db) não inicializado corretamente.");
    return null;
  }

  if (!name || typeof name !== "string") {
    console.error("❌ [getInfByName] Nome inválido recebido:", name);
    return null;
  }

  try {
    console.log("📁 [getInfByName] Tentando acessar doc em 'projects/'", name);
    const docRef = doc(db, "projects", name);

    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.warn("⚠️ [getInfByName] Documento não encontrado:", name);
      return null;
    }

    const data = docSnap.data() as ProjectItem;
    console.log("✅ [getInfByName] Documento encontrado:", data);
    return { ...data };
  } catch (err) {
    console.error("🔥 [getInfByName] Erro ao buscar projeto:", err);
    return null;
  }
};
