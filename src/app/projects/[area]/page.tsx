import Footer from '@/components/footer/Footer';
import React from 'react';
import './style.css'
import { fetchProjects } from '../page';

export default  async function Page({ params }: { params: { area: string } }) {
  const projects = await fetchProjects();
  projects.map((project, index) => {
    console.log(`--------------`);
    
    // Para cada projeto, iterar sobre as chaves
    Object.keys(project).forEach((key) => {
      console.log(project[key].area);
    });
  });
  
  return (
    <>
      <div id='headerArea'>
        <h2 id='titleArea'>{params.area}</h2>
        <div id='searchProject'>
          <input type="text" placeholder='Digite sua pesquisa aqui...'/>
          <button type="submit"><svg id='iconSearch' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17.029 16.5295L19.5 19.0005" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></button>
        </div>
      </div>
      <main id='containerArea'>
      <div id="containerProject">
      {projects.map((project, index) => (
        Object.keys(project).map((key) => (
          project[key].area === params.area ? (
            <div key={`${index}-${key}`} className='blockProject'>
              {project[key].area}
            </div>
          ) : null
        ))
      ))}
    </div>


      </main>
      <Footer />
    </>
  );
}
