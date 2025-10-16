"use client";

import Footer from "@/components/footer/Footer";
import React, { useState, useEffect } from "react";
import { ListBgsType, ProjectItem } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NavBottom from "@/components/navBottom/NavBottom";

export default function Page() {
  async function fetchProjects(): Promise<ProjectItem[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
      cache: "no-store",
    });
    
    if (!res.ok) throw new Error("Failed to fetch projects");
    const data = await res.json(); // ✅ lê uma vez
    console.log("📦 Dados recebidos:", data);
    return data;
  }

  const searchParams = useSearchParams();
  const router = useRouter();
  const area = searchParams.toString().replace("=", "");

  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [currentProject, setCurrentProject] = useState<string>(area || "Todos");
  const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  async function loadProjects() {
    try {
      const fetchedProjects:ProjectItem[] = await fetchProjects();
      setProjects(fetchedProjects);

    } catch (error) {
      console.error("❌ Erro ao carregar projetos:", error);
    }
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

  const filteredProjects = projects.filter(
    (item) =>
      (currentProject === "Todos" || item.area === currentProject) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header / Search */}
      <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">{currentProject}</h2>
          <select
            onChange={handleSelectChange}
            defaultValue=""
            className="rounded-lg bg-zinc-800 px-3 py-2 text-sm text-white outline-none"
          >
            <option value="" disabled hidden>
              Filtrar
            </option>
            <option value="Todos">Todos</option>
            <option value="fullstack">Fullstack</option>
            <option value="front-end">Front End</option>
            <option value="back-end">Back End</option>
          </select>
        </div>

        <div className="flex w-full max-w-md items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 md:w-auto">
          <input
            type="text"
            placeholder="Digite sua pesquisa aqui..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
          />
          <button type="submit" className="text-white">
            <svg
              className="h-5 w-5"
              viewBox="0 -0.5 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.029 16.5295L19.5 19.0005"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Grid de Projetos */}
      <main className="px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((item, index) => (
          <Link
            href={`/projects/area/${item.title}`}
            key={index}
            className="group relative overflow-hidden rounded-2xl border-2 border-transparent shadow-md transition-transform duration-300 hover:-translate-y-2 h-[300px]"
            style={{
              borderColor: item.color,
            }}
          >
            {/* Imagem preenchendo todo o card */}
            <Image
              src={
                item.cover
                  ?  item.cover
                  : item.link_bg_light
              }
              alt={item.title}
              width={600}
              height={300}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />

            {/* Gradiente para destacar informações */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col gap-2">
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>

              {/* Linha com data e área */}
              <div className="flex justify-between text-sm text-gray-300">
                <span>{item.date}</span>
                <span style={{ color: item.color }}>{item.area}</span>
              </div>

              {item.description && (
                <p className="text-sm text-gray-200 truncate">{item.description}</p>
              )}

              {item.area && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-gray-700/70 px-2 py-1 text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}

        </div>
      </main>

      <NavBottom place="projects" />
      <div className="navBottomFooter pt-8">
        <Footer />
      </div>
    </>
  );
}
