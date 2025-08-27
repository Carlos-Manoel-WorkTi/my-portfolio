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
import Agric from "./Agric";
import Lumo from "./Lumo";

const ListBgs: ListBgsType = [
  {
    p1: {
      title: "DuoWord",
      area: "fullstack",
      link_bg_light: "/bg_project/duoLight.png",
      link_bg_dark: "/bg_project/duoDark.png",
      cover: "/bg_project/duoWord/cover.png",
      description:
        "DuoWord foi projetado para ensinar inglês através da imersiva combinação de música, histórias interativas e um sistema personalizado de salvamento de palavras.",
      color: "cornflowerblue",
      date: "2024",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel" ],
    },
  },
  {
    p2: {
      title: "Planets Cards",
      area: "fullstack",
      link_bg_light: "/bg_project/plLight.png",
      link_bg_dark: "/bg_project/plDark.png",
      cover: "/bg_project/planetsCards/cover.png",
      description:
        "Planets Cards é um jogo de memória que desafia os jogadores a combinar pares de cartas sobre planetas.",
      color: "#d33030",
      date: "2024",
      technologies: ["JavaScript", "Bootstrap", "PHP", "WAMP", "Vercel" ],
      
    },
  },
  {
    p3: {
      title: "Decode",
      area: "front-end",
      link_bg_light: "/bg_project/DecLight.png",
      link_bg_dark: "/bg_project/DecDark.png",
      cover: "/bg_project/decode/cover.png",
      description:
        "O 'Decode' é um app para cifrar e decifrar textos de forma simples e rápida.",
      color: "#7a27d8",
      date: "2023",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel" ],
    },
  },
  {
    p4: {
      title: "Talk Learning",
      area: "front-end",
      link_bg_light: "/bg_project/TalkLight.png",
      link_bg_dark: "/bg_project/TalkDark.png",
      cover: "/bg_project/talkLearning/cover.png",
      description:
        "O 'Talk Learning' é um app onde uma IA ensina inglês por meio de conversas interativas e personalizadas.",
      color: "#48d330",
      date: "2023",
            technologies: ["React", "TypeScript", "Tailwind CSS", "StyledComponents", "Vercel" ],
    },
  },
  {
    p5: {
      title: "Tec Notícias",
      area: "front-end",
      link_bg_light: "/bg_project/TecLight.png",
      link_bg_dark: "/bg_project/TecDark.png",
      cover: "/bg_project/tecNoticias/cover.png",
      description:
        "O projeto 'TEC Notícias' é um site de notícias sobre tecnologia, com o objetivo de oferecer informações atualizadas e acessíveis sobre o setor.",
      color: "rgb(155, 90, 229)",
      date: "2023",
            technologies: ["VLibras", "TypeScript", "BootStrap", "Vercel" ],
    },
  },
  {
    p6: {
  title: "Agric",
  area: "front-end",
  link_bg_light: "/bg_project/AgricLight.png",
  link_bg_dark: "/bg_project/AgricDark.png",
  cover: "/bg_project/agric/cover.png",
  description:
    "Agric é uma plataforma moderna de gerenciamento agrícola com interface intuitiva e suporte a tema claro e escuro. Ela oferece funcionalidades como controle de terras, culturas, finanças, estatísticas e integração com assistente IA.",
  color: "rgb(81 137 72)",
  date: "2025",
        technologies: ["React", "TypeScript", "Tailwind CSS", "NextAu", "Vercel", "Shadow CDN" ],
},

  },
  {
    p7: {
  title: "Lumo",
  area: "fullstack",
  link_bg_light: "/bg_project/AgricLight.png",
  link_bg_dark: "/bg_project/AgricDark.png",
  cover: "/bg_project/lumo/cover.png",
  description:
    "Lumo é um assistente virtual com IA generativa, criado para oferecer conversas naturais, produtivas e personalizadas diretamente no navegador.",
  color: "#236bd8",
  date: "2025",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenIA", "NextAuth.js", "Vercel" ],
},

  },
  {
    p8: {
  title: "Nag",
  area: "backend",
  link_bg_light: "/bg_project/nag/bgNag.png",
  link_bg_dark: "/bg_project/nag/bgNag.png",
  cover: "/bg_project/nag/cover.png",
  description:
    "Nag é um chatbot inteligente para WhatsApp, desenvolvido para atuar como atendente virtual e assistente multifuncional. Ele permite baixar vídeos e músicas, extrair áudios, realizar pesquisas na internet, gerar figurinhas e muito mais.",
  color: "#25D366", // verde WhatsApp
  date: "2025",
  technologies: [
    "Baileys",
    "Flask",
    "TypeScript",
    "Python",
    "Selenium",
    "BeautifulSoup",
    "FFmpeg",
    "Node.js"
  ],
}},{
  p9: {
  title: "FireBurg",
  area: "frontend",
  link_bg_light: "/bg_project/FireBurgLight.png",
  link_bg_dark: "/bg_project/FireBurgDark.png",
  cover: "/bg_project/fireBurg/cover.png",
  description:
    "FireBurg é um site moderno para divulgação de um restaurante, focado em performance e experiência do usuário. O projeto foi construído com Vite, React, Shadcn e Tailwind CSS, trazendo animações fluidas, responsividade e integração com formulários de contato e menus interativos.",
  color: "#E63946", // tom vermelho "burguer flame"
  date: "2025",
  technologies: [
    "Vite",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "Radix UI",
    "React Router",
    "Zod"
  ],
},
},{
  p10: {
  title: "Nova Reveal",
  area: "frontend",
  link_bg_light: "/bg_project/NovaRevealLight.png",
  link_bg_dark: "/bg_project/NovaRevealDark.png",
  cover: "/bg_project/novaReveal/cover.png",
  description:
    "Nova Reveal é uma landing page interativa construída com foco em animações suaves e experiência do usuário. Utiliza scroll reveal para destacar seções como portfólio, depoimentos e benefícios, além de navegação com rolagem suave para âncoras internas.",
  color: "#7C3AED", // Roxo vibrante para dar vibe moderna
  date: "2025",
  technologies: [
    "Vite",
    "React",
    "TypeScript",
    "Shadcn/UI",
    "Tailwind CSS",
    "Radix UI"
  ],
},

},
{
  p11: {
  title: "Primeon",
  area: "frontend",
  link_bg_light: "/bg_project/PrimeonLight.png",
  link_bg_dark: "/bg_project/PrimeonDark.png",
  cover: "/bg_project/primeon/cover.png",
  description:
    "Primeon é uma landing page de ecommerce premium construída com React, Vite e Shadcn/UI. O projeto destaca produtos de alto padrão com efeitos de parallax, animações reveal e experiência de navegação fluida.",
  color: "#8B5CF6", // roxo elegante, premium vibe
  date: "2025",
  technologies: [
    "Vite",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "Radix UI",
    "Lucide React",
  ],
},

},
{
  p12: {
  title: "GameUp",
  area: "fullstack",
  link_bg_light: "/bg_project/GameUpLight.png",
  link_bg_dark: "/bg_project/GameUpDark.png",
  cover: "/bg_project/gameUp/cover.png",
  description:
    "GameUp é uma plataforma de mini-games multiplayer em tempo real, com lobby interativo, sistema de pronto, modo solo e suporte a diversos jogos rápidos. Desenvolvido com React, Vite e Shadcn/UI no frontend, e Express + Socket.IO no backend para comunicação em tempo real.",
  color: "#e76225", // verde vibrante gamer
  date: "2025",
  technologies: [
    "Vite",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/UI",
    "Radix UI",
    "Zustand",
    "Zod",
    "React Query",
    "Socket.IO",
    "Express",
    "Node.js"
  ],
},

},{
  p13: {
  title: "tvz_guide",
  area: "backend",
  link_bg_light: "/bg_project/tvzGuideLight.png",
  link_bg_dark: "/bg_project/tvzGuideDark.png",
  cover: "/bg_project/tvz_guide/cover.png",
  description:
    "tvz_guide é uma API que lista os horários dos programas de TV do dia, obtidos através de web scraping com Cheerio. O backend foi construído em Node.js com Express, fornecendo dados atualizados de forma simples e acessível para consumo em aplicações externas.",
  color: "#1d72b8", // azul representando tecnologia e confiança
  date: "2024",
  technologies: [
    "Node.js",
    "Express",
    "Cheerio",
    "Node-Fetch"
  ],
},

},
{
  p14: {
  title: "Encontre seu GitHub",
  area: "frontend",
  link_bg_light: "/bg_project/githubFinderLight.png",
  link_bg_dark: "/bg_project/githubFinderDark.png",
  cover: "/bg_project/githubFinder/cover.png",
  description:
    "Encontre seu GitHub é uma aplicação frontend desenvolvida em React que permite adicionar repositórios do GitHub a uma lista personalizada e visualizar detalhes de cada repositório, incluindo informações sobre o perfil do usuário. A aplicação é simples, intuitiva e prática para explorar projetos no GitHub de forma rápida.",
  color: "#24292e", // cor inspirada no GitHub
  date: "2022",
  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "CSS",
    "Vite"
  ],
},

},{
  p15: {
  title: "Conversor de Moedas",
  area: "backend",
  link_bg_light: "/bg_project/currencyConverterLight.png",
  link_bg_dark: "/bg_project/currencyConverterDark.png",
  cover: "/bg_project/currencyConverter/cover.png",
  description:
    "Conversor de Moedas é um aplicativo simples em Java que permite converter entre diferentes moedas utilizando as taxas de câmbio mais recentes. Ele consome a API v6.exchangerate-api e utiliza a biblioteca GSON para manipulação de dados JSON, garantindo precisão e facilidade no processamento dos valores.",
  color: "#1abc9c", // verde água, remetendo a dinheiro e finanças
  date: "2024",
  technologies: [
    "Java",
    "GSON",
    "Exchangerate-API"
  ],
},

},{
  p16: {
  title: "java_poster",
  area: "backend",
  link_bg_light: "/bg_project/javaPosterLight.png",
  link_bg_dark: "/bg_project/javaPosterDark.png",
  cover: "/bg_project/javaPoster/cover.png",
  description:
    "java_poster é uma aplicação backend desenvolvida em Java com Spring Boot, que permite postagens e gerenciamento de comentários. O sistema conta com autenticação via Spring Security e JWT, integração com banco PostgreSQL, versionamento de banco com Flyway, e validações de dados. Os posts podem ser categorizados em diferentes tópicos, como tecnologia, ciência, música, entre outros.",
  color: "#f39c12", // laranja vibrante para representar dinamismo e interação
  date: "2024",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JPA / Hibernate",
    "Flyway",
    "PostgreSQL",
    "JWT",
    "Lombok"
  ],
},

},{
  p17: {
  title: "booksjava",
  area: "backend",
  link_bg_light: "/bg_project/booksJavaLight.png",
  link_bg_dark: "/bg_project/booksJavaDark.png",
  cover: "/bg_project/booksJava/cover.png",
  description:
    "desafio-booksjava é uma aplicação backend desenvolvida em Java com Spring Boot, que gerencia informações de livros. O sistema utiliza PostgreSQL para persistência de dados, Jackson Databind para manipulação de JSON, e JPA para o mapeamento objeto-relacional. Ideal para estudos e demonstração de integração entre API REST, banco de dados e serialização de dados.",
  color: "#8e44ad", // roxo para remeter a conhecimento/livros
  date: "2024",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "Jackson Databind",
    "PostgreSQL"
  ],
},

},{
  p18: {
  title: "TVZ",
  area: "fullstack",
  link_bg_light: "/bg_project/tvzLight.png",
  link_bg_dark: "/bg_project/tvzDark.png",
  cover: "/bg_project/tvz/cover.png",
  description:
    "TVZ é um aplicativo de streaming que oferece canais de TV ao vivo e conteúdos sob demanda, com interface intuitiva e funcionalidades como favoritos e notificações. Desenvolvido com Next.js para frontend e backend, com versão em React Native permitindo acesso a todos os formatos de transmissão. Autenticação via JSON Web Tokens (JWT) e integração com APIs de provedores de conteúdo.",
  color: "#e74c3c", // vermelho vibrante, chamativo e tecnológico
  date: "2024",
  technologies: [
    "Next.js",
    "React",
    "React Native",
    "HLS.js",
    "Styled Components",
    "JWT",
    "APIs",
    "Node.js"
  ],
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
  preview: string | null;
};

// Mapeamento de títulos para constantes
const projectMap: Record<string, ProjectData> = {
  DuoWord: DuoWord,
  Decode: Decode,
  'Planets%20Cards': PlanetsCards,
  'Talk%20Learning': TalkingLearning,
  'Tec%20Not%C3%ADcias': TecNoticias,
  Agric: Agric,
  Lumo: Lumo  
  
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