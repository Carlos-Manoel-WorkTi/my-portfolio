// src/app/api/projects/route.ts
import { NextResponse } from "next/server";
import { getInfAll, getInfByName } from "./firebaseStorage";
import { ProjectItem } from "@/types/types";

const defaultAllowedOrigins = [
  "https://portfolio-carlos-five.vercel.app",
  "https://portfolio-carlos-mcmc7dddy-carlos-manoel-worktis-projects.vercel.app",
];

const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? defaultAllowedOrigins.join(","))
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

function corsHeaders(origin: string | null) {
  const allowedOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function GET(req: Request) {
  const origin = req.headers.get("origin");
  const data = await getInfAll();
  const response = NextResponse.json(data);
  Object.entries(corsHeaders(origin)).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

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
