"use client";

import Footer from '@/components/footer/Footer';
import React, { useState, useEffect } from 'react';
import './style.css';
import { ListBgsType} from '@/types/types';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NavBottom from '@/components/navBottom/NavBottom';

export default function Page() {

  async function fetchProjects(): Promise<ListBgsType> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
      cache: 'no-store',
    });
  
  
    if (!res.ok) {
      throw new Error('Failed to fetch projects');
    } 
  
    return res.json();
  }
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const area = searchParams.toString().replace('=','');
 
  const [projects, setProjects] = useState<ListBgsType>([]);
  const [currentProject, setCurrentProject] = useState<string>(area || "Todos");

  
  useEffect(() => {
    async function loadProjects() {
      const fetchedProjects: ListBgsType = await fetchProjects();
      setProjects(fetchedProjects);
    }
    loadProjects();
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      router.push(`?${selectedValue}`);
      setCurrentProject(selectedValue); 
      event.target.value = ""; 
      
    }
  };

  return (
    <>
      <div id='headerArea'>
        <div id='containerOpt'>
          <h2 id='titleArea'>{currentProject}</h2>
          <select name="" id="selectOpt" onChange={handleSelectChange} defaultValue="">
            <option value="" disabled hidden></option>
            <option value="Todos">Todos</option>
            <option value="fullstack">Fullstack</option>
            <option value="front-end">Front End</option>
            <option value="back-end">Back End</option>
          </select>
        </div>
        <div id='searchProject'>
          <input type="text" placeholder='Digite sua pesquisa aqui...' />
          <button type="submit">
            <svg id='iconSearch' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.029 16.5295L19.5 19.0005" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <main id='containerArea'>
        <div id="containerProject">
          {currentProject === "Todos" ? (
            projects.map((project, projectIndex) =>
              Object.keys(project).map((key, keyIndex) => (
                // console.log(project[key].area),
                
                <Link href={`/projects/area/${project[key].title}`} key={`${projectIndex}-${keyIndex}`} className='blockProject' style={{borderColor: project[key].color}}>
                  {/* style={{ backgroundImage: `url(${project[key].link_bg_light})`}} */}
                  <Image src={project[key].link_bg_dark} alt="Imagem de fundo" width={300} height={300} className="bgProject" priority/>
                  <div className="infProject">
                    <h4 className='nameProject' >{project[key].title}</h4>
                    <span className='dateProject'>{project[key].date}</span>
                    <span className='areaProject' style={{color: project[key].color}}>{project[key].area}</span>
                  </div>
                 
                </Link>
              ))
            )
          ) : (
            projects.map((project, projectIndex) =>
              Object.keys(project).map((key, keyIndex) => (
                project[key].area === currentProject ? (
                  <Link href={`/projects/area/${project[key].title}`} key={`${projectIndex}-${keyIndex}`} className='blockProject' style={{borderColor: project[key].color}}>
                  {/* style={{ backgroundImage: `url(${project[key].link_bg_light})`}} */}
                  <Image src={project[key].link_bg_dark} alt="Imagem de fundo" width={300} height={300} className="bgProject" priority/>
                  <div className="infProject">
                    <h4 className='nameProject' >{project[key].title}</h4>
                    <span className='dateProject'>{project[key].date}</span>
                    <span className='areaProject' style={{color: project[key].color}}>{project[key].area}</span>
                  </div>
                 
                </Link>
                ) : null
              ))
            )
          )}
        </div>
      </main>
      <NavBottom place='projects'/>
      <div className="navBottomFooter">
        <Footer />
      </div>
    </>
  );
}
