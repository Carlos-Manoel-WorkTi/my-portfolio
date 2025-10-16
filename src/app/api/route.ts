import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getInfAll, getInfByName } from "./firebaseStorage";
import { ProjectItem } from "@/types/types";

export async function POST(req: Request, res: NextApiResponse) {

  const headers = {
    "Access-Control-Allow-Origin": "https://portfolio-carlos-five.vercel.app", // para produção, coloque só seu domínio
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (req.method === "OPTIONS") {
    return new NextResponse(null, { headers, status: 200 });
  }

  const title = await req.json();
  // Procurando o projeto pelo título
  const project:ProjectItem | null = await getInfByName(title.title);

  if (project) {
    return NextResponse.json(project ); // Retornando o projeto encontrado
  } else {
    return NextResponse.json(
      { message: "Projeto não encontrado" },
      { status: 404 }
    ); // Retornando erro 404 se não encontrado
  }
}

export async function GET() {
  return NextResponse.json(await getInfAll());
}