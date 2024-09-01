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
        "DuoWord is an innovative app designed to teach English through the immersive combination of music, interactive stories, and a personalized word-saving system.",
      color: "cornflowerblue",
    },
  },
  {
    p2: {
      title: "Planets Cards",
      link_bg_light: "/bg_project/plLight.png",
      link_bg_dark: "/bg_project/plDark.png",
      description:
        "Planets Cards is a captivating memory game that challenges players to match pairs of cards featuring beautifully illustrated planets from our solar system.",
      color: "#d33030",
    },
  },
];

export async function GET() {
  return NextResponse.json(ListBgs);
}
