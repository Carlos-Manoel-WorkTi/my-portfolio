// src/app/project/page.tsx

import React from 'react';
import './project.css';
import { ListBgsType } from '@/types/types';

import OptionTypeProject from './components/optionTypeProject/optionTypeProject';

// Função para buscar projetos
async function fetchProjects(): Promise<ListBgsType> {
  const res = await fetch('http://localhost:3000/api/projects', {
    cache: 'no-store', // Opcional, para garantir que os dados sejam sempre atualizados
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  } 

  return res.json();
}


const Slide = React.lazy(() => import('./components/slide/Slide'));

export default async function Project() {
  const projects = await fetchProjects();

  return (
    <main id="project">
        <Slide list={projects} />
      <section className="container-opt">
  
        <OptionTypeProject/>
      </section>
    </main>
  );
}
