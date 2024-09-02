// src/app/api/projects/route.ts

import { NextResponse } from 'next/server';
import { ListBgsType } from '@/types/types';

const ListBgs:ListBgsType = [
  {
    p1: {
      title: "DuoWord",
      link_bg_light: "/bg_project/duoLight.png",
      link_bg_dark: "/bg_project/duoDark.png",
      description:
        "DuoWord é um aplicativo inovador projetado para ensinar inglês através da imersiva combinação de música, histórias interativas e um sistema personalizado de salvamento de palavras.",
      color: "cornflowerblue",
    },
  },
  {
    p2: {
      title: "Planets Cards",
      link_bg_light: "/bg_project/plLight.png",
      link_bg_dark: "/bg_project/plDark.png",
      description:
      "Planets Cards é um jogo de memória cativante que desafia os jogadores a combinar pares de cartas com planetas lindamente ilustrados do nosso sistema solar.",
      color: "#d33030",
    },
  },
];

export async function GET() {
  return NextResponse.json(ListBgs);
}
