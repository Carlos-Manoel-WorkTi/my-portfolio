import React from 'react';
import './project.css';
import { getInfAll } from '@/app/api/firebaseStorage';

import OptionTypeProject from './components/optionTypeProject/optionTypeProject';
import Footer from '@/components/footer/Footer';
import NavBottom from '@/components/navBottom/NavBottom';




const Slide = React.lazy(() => import('./components/slide/Slide'));

export const dynamic = 'force-dynamic';

export default async function Project() {
  const projects = await getInfAll();

  const projectsFiltered = projects.filter((item) => {
    return [
      'TKK Flow',
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
