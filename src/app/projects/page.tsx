import React from 'react';
import './project.css';
import Slide from './components/slide/Slide';

type ProjectItem = {
  title: string;
  link_bg_light: string;
  link_bg_dark: string;
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
      link_bg_light: '/bg_project/duoLight.png',
      link_bg_dark: '/bg_project/duoDark.png',
      description: 'DuoWord is an innovative app designed to teach English through the immersive combination of music, interactive stories, and a personalized word-saving system.',
      color:"cornflowerblue"
    },
  },
  {
    p2: {
      title: 'Planets Cards',
      link_bg_light: '/bg_project/plc.png',
      link_bg_dark: '/bg_project/plc.png',
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
        <h2>section 2</h2>
    </section>
  </main>
)}
