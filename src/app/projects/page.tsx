import React from 'react';
import './project.css';
import { ListBgsType } from '@/types/types';

import OptionTypeProject from './components/optionTypeProject/optionTypeProject';
import Footer from '@/components/footer/Footer';
import NavBottom from '@/components/navBottom/NavBottom';




const Slide = React.lazy(() => import('./components/slide/Slide'));

export default async function Project() {
  async function fetchProjects(): Promise<ListBgsType> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
      cache: 'no-store',
    });
  
  
    if (!res.ok) {
      throw new Error('Failed to fetch projects');
    } 
  
    return res.json();
  }
  const projects = await fetchProjects();

  return (
    <>
      <main id="project">
          <Slide list={projects} />
        <section className="container-opt">
          <OptionTypeProject/>
        </section>
      </main>
      <NavBottom place='projects'/>
      <div className="navBottomFooter">
        <Footer />
      </div>
      
    </>
    
  );
}
