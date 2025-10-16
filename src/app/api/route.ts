// src/pages/api/projects.ts
import { NextResponse } from "next/server";
import { getInfAll, getInfByName } from "./firebaseStorage";
import { ProjectItem } from "@/types/types";

// Seu domínio de produção
const ALLOWED_ORIGIN = "https://portfolio-carlos-five.vercel.app";

const headers = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// OPTIONS (preflight) request
export async function OPTIONS() {
  return new Response(null, { headers });
}

// GET — lista todos os projetos
export async function GET() {
  return NextResponse.json(await getInfAll(), { headers });
}

// POST — busca projeto por título
export async function POST(req: Request) {
  const title = await req.json();
  const project: ProjectItem | null = await getInfByName(title.title);

  if (project) {
    return NextResponse.json(project, { headers });
  } else {
    return NextResponse.json(
      { message: "Projeto não encontrado" },
      { status: 404, headers }
    );
  }
}
