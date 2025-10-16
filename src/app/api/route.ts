import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getInfAll, getInfByName } from "./firebaseStorage";
import { ProjectItem } from "@/types/types";

const headers = {
  "Access-Control-Allow-Origin": "https://portfolio-carlos-five.vercel.app", // para produção, coloque só seu domínio
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, { headers });
}

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

export async function GET() {
  return NextResponse.json(await getInfAll(), { headers });
}