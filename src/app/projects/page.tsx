import React from 'react';
import './project.css';
import { ProjectItem } from '@/types/types';
import { headers } from 'next/headers';

import OptionTypeProject from './components/optionTypeProject/optionTypeProject';
import Footer from '@/components/footer/Footer';
import NavBottom from '@/components/navBottom/NavBottom';




const Slide = React.lazy(() => import('./components/slide/Slide'));

export default async function Project() {
  const getBaseUrl = async () => {
    const configuredUrl = process.env.NEXT_PUBLIC_API_URL;

    if (configuredUrl) {
      return configuredUrl.replace(/\/$/, '');
    }

    const headersList = await headers();
    const host = headersList.get('host') ?? 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    return `${protocol}://${host}`;
  };

  async function fetchProjects(): Promise<ProjectItem[]> {
    const res = await fetch(`${await getBaseUrl()}/api`, {
      cache: 'no-store',
    });
  
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
