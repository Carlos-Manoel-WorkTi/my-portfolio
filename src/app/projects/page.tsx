import React from 'react';
import './project.css';
import { ListBgsType, ProjectItem } from '@/types/types';

import OptionTypeProject from './components/optionTypeProject/optionTypeProject';
import Footer from '@/components/footer/Footer';
import NavBottom from '@/components/navBottom/NavBottom';




const Slide = React.lazy(() => import('./components/slide/Slide'));

export default async function Project() {

  async function fetchProjects(): Promise<ProjectItem[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
      cache: 'no-store',
    });
    console.log("Chegou aqui");
    
  
    if (!res.ok) {
      throw new Error('Failed to fetch projects');
    } 
    
    return res.json();
  }
  const projects = await fetchProjects();

  const projectsFiltered = projects.filter((item) => {
    return [
      'DuoWord',
      'Decode',
      'Planets Cards',
      'Talk Learning',
      'Tec Notícias',
    ].includes(item.title);
  });
  
  return (
    <>
      <main id="project">
          <Slide list={projectsFiltered} />
        <section className="container-opt">
          <OptionTypeProject list={projects}/>
        </section>
      </main>
      <NavBottom place='projects'/>
      <div className="navBottomFooter">
        <Footer />
      </div>
      
    </>
    
  );
}
