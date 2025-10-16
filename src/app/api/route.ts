// src/pages/api/projects.ts
import { NextResponse } from "next/server";
import { getInfAll, getInfByName } from "./firebaseStorage";
import { ProjectItem } from "@/types/types";

export async function GET() {
  const projects = await getInfAll();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { title } = await req.json();
  const project: ProjectItem | null = await getInfByName(title);

  if (project) {
    return NextResponse.json(project);
  } else {
    return NextResponse.json({ message: "Projeto não encontrado" }, { status: 404 });
  }
}
