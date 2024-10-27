// app/[project]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import './style.css';
import { log } from 'console';
import Link from 'next/link';
import Loading from '@/components/feed/loading';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';

type ProjectPageProps = {
  params: {
    project: string;
  };
};

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

async function fetchProjects(projectF: string): Promise<ProjectData | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: projectF }), 
    // O título do projeto que você deseja buscar
  });
  console.log(JSON.stringify({ title: projectF }));

  if (!res.ok) {
    console.error('Failed to fetch project data');
    return null;
  }

  return res.json(); // Retorne o JSON diretamente
}


export default function ProjectPage({ params }: ProjectPageProps) {
  const { project } = params;
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    async function loadData() {
      console.log(project);
      
      const data = await fetchProjects(project);
      console.log(data);
      setProjectData(data);
      
    }
    loadData();
  }, [project]);

  if (!projectData) return <Loading/>;

  return (
    <>
      <div id="subHeader">
        <h2 id="title_project">{projectData.title}</h2>
        <div>
          <button>Compartilhar</button>
        </div>
      </div>
      <div id="containerText">
        <div id='moreInf'>
          <p id='date-project'>Data: {projectData.date}</p>
          <Link href={projectData.link} target="_blank" id='link-project'>Visitar Projeto</Link>
        </div>
        <div id="context">
          <p>{projectData.description}</p>
          <p>Contexto: {projectData.context}</p>
        </div>
        <div style={{display: 'flex', gap: '40px', marginTop: '40px'}}>
          <Image
          src={projectData.link_bg_light}alt={projectData.title}width={500}  height={500}/>
          <Image
          src={projectData.link_bg_dark}alt={projectData.title}width={500}  height={500}/>

        </div>
      </div>
      <Footer/>
    </>
  );
}
