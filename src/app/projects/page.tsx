import React from 'react';
import './project.css';
import Slide from './components/slide/Slide';

type ProjectItem = {
  title: string;
  link_bg: string;
  description: string;
  color:string;
};

// Definindo o tipo para a lista de itens de projeto
type ListItem = {
  [key: string]: ProjectItem;
};

// Tipo para a lista de projetos
type ListBgsType = ListItem[];

const ListBgs: ListBgsType = [
  {
    p1: {
      title: 'DuoWord',
      link_bg: '/bg_project/bgDuoH.png',
      description: 'DuoWord is an innovative app designed to teach English through the immersive combination of music, interactive stories, and a personalized word-saving system.',
      color:"cornflowerblue"
    },
  },
  {
    p2: {
      title: 'Planets Cards',
      link_bg: '/bg_project/plc.png',
      description: 'Planets Cards is a captivating memory game that challenges players to match pairs of cards featuring beautifully illustrated planets from our solar system. ',
      color:"red"
    },
  },
];

export default function Project() {
  return (
  <main>
  
    <Slide list={ListBgs} />
    <section className='container-opt'> 

    </section>
  </main>
)}
