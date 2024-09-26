'use client';
import React from "react";
import Link from "next/link";
import "./InfField.css";

type ButtonData = {
  text: string;
  className: string;
  isLink?: boolean; // Adiciona uma propriedade opcional para diferenciar o botão de link
};

const buttonData: ButtonData[] = [
  { text: "CURRICULO", className: "curriculo" },
  { text: "PROJETOS", className: "projetos", isLink: true }, // Adiciona isLink para Projetos
  { text: "HABILIDADES", className: "habilidades" },
  { text: "IDIOMAS", className: "idiomas" },
  { text: "CERTIFICADOS", className: "certificados" },
];

export default function InfField() {
  // Função para fazer scroll suave até a seção
  const handleScroll = (className: string) => {
    const section = document.getElementById(`s_${className}`);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Define o efeito suave
        block: "start",     // Alinha a seção ao topo da página
      });
    }
  };

  return (
    <section id="container_Inf_buttons_about">
      {buttonData.map((button, index) => (
        button.isLink ? (
          <Link 
            key={index} 
            href="/projects" 
            className={`uiverse ${button.className}`}
          >
            <div className="button_section">
              {button.text}
            </div>
          </Link>
        ) : (
          <button 
            key={index} 
            className={`uiverse ${button.className}`} 
            onClick={() => handleScroll(button.className)} // Rolagem suave para as seções
          >
            <div className="button_section">
              {button.text}
            </div>
          </button>
        )
      ))}
    </section>
  );
}
