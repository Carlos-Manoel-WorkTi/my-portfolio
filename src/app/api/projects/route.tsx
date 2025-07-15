// src/app/api/projects/route.ts

import { NextResponse } from "next/server";
import { ListBgsType } from "@/types/types";
import DuoWord from "./DuoWord";
import { NextApiRequest, NextApiResponse } from "next";
import { log } from "console";
import Decode from "./Decode";
import PlanetsCards from "./Planets Cards";
import TalkingLearning from "./Talking Learning";
import TecNoticias from "./Tec Noticias";

const ListBgs: ListBgsType = [
  {
    p1: {
      title: "DuoWord",
      area: "fullstack",
      link_bg_light: "/bg_project/duoLight.png",
      link_bg_dark: "/bg_project/duoDark.png",
      description:
        "DuoWord foi projetado para ensinar inglês através da imersiva combinação de música, histórias interativas e um sistema personalizado de salvamento de palavras.",
      color: "cornflowerblue",
      date: "2024",
    },
  },
  {
    p2: {
      title: "Planets Cards",
      area: "fullstack",
      link_bg_light: "/bg_project/plLight.png",
      link_bg_dark: "/bg_project/plDark.png",
      description:
        "Planets Cards é um jogo de memória que desafia os jogadores a combinar pares de cartas sobre planetas.",
      color: "#d33030",
      date: "2024",
    },
  },
  {
    p3: {
      title: "Decode",
      area: "front-end",
      link_bg_light: "/bg_project/DecLight.png",
      link_bg_dark: "/bg_project/DecDark.png",
      description:
        "O 'Decode' é um app para cifrar e decifrar textos de forma simples e rápida.",
      color: "#7a27d8",
      date: "2023",
    },
  },
  {
    p4: {
      title: "Talk Learning",
      area: "front-end",
      link_bg_light: "/bg_project/TalkLight.png",
      link_bg_dark: "/bg_project/TalkDark.png",
      description:
        "O 'Talk Learning' é um app onde uma IA ensina inglês por meio de conversas interativas e personalizadas.",
      color: "#48d330",
      date: "2023",
    },
  },
  {
    p5: {
      title: "Tec Notícias",
      area: "front-end",
      link_bg_light: "/bg_project/TecLight.png",
      link_bg_dark: "/bg_project/TecDark.png",
      description:
        "O projeto 'TEC Notícias' é um site de notícias sobre tecnologia, com o objetivo de oferecer informações atualizadas e acessíveis sobre o setor.",
      color: "rgb(155, 90, 229)",
      date: "2023",
    },
  },
  {
    p6: {
  title: "Agric",
  area: "front-end",
  link_bg_light: "/bg_project/AgricLight.png",
  link_bg_dark: "/bg_project/AgricDark.png",
  description:
    "Agric é uma plataforma moderna de gerenciamento agrícola com interface intuitiva e suporte a tema claro e escuro. Ela oferece funcionalidades como controle de terras, culturas, finanças, estatísticas e integração com assistente IA.",
  color: "rgb(81 137 72)",
  date: "2025",
},

  }
];


type ProjectData = {
  title: string;
  area: string;
  link_bg_light: string;
  link_bg_dark: string;
  description: string;
  color: string;
  date: string;
  link: string;
  github: string;
  context: string;
};

// Mapeamento de títulos para constantes
const projectMap: Record<string, ProjectData> = {
  DuoWord: DuoWord,
  Decode: Decode,
  'Planets%20Cards': PlanetsCards,
  'Talk%20Learning': TalkingLearning,
  'Tec%20Not%C3%ADcias': TecNoticias,
  
};

export async function POST(req: Request, res: NextApiResponse) {

  const title = await req.json();
  // Procurando o projeto pelo título
  const project = projectMap[title.title] || DuoWord;

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
  return NextResponse.json(ListBgs);
}