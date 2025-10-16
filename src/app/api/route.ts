// src/app/api/projects/route.ts
import { NextResponse } from "next/server";
import { getInfAll, getInfByName } from "../firebaseStorage";
import { ProjectItem } from "@/types/types";

// Domínio permitido (ou use "*")
const ALLOWED_ORIGIN = "https://portfolio-carlos-mcmc7dddy-carlos-manoel-worktis-projects.vercel.app";

function corsHeaders(origin: string | null) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// OPTIONS — necessário para preflight
export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

// GET — lista todos os projetos
export async function GET(req: Request) {
  const origin = req.headers.get("origin");
  const data = await getInfAll();
  const response = NextResponse.json(data);
  Object.entries(corsHeaders(origin)).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

// POST — busca projeto por título
export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const { title } = await req.json();
  const project: ProjectItem | null = await getInfByName(title);

  const response = project
    ? NextResponse.json(project)
    : NextResponse.json({ message: "Projeto não encontrado" }, { status: 404 });

  Object.entries(corsHeaders(origin)).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}
