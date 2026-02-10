'use client';
import "./style.css"
import React from 'react'

export default function Curriculo() {

  const BaixarCurriculo = () => {
    const link = document.createElement("a");
    link.href = "/about/curriculo-carlos.pdf";
    link.download = "Carlos-Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="s_curriculo">
      <h2 id="subTitleCurriculo">CURRICULO</h2>
      <p id="text-cr">Baixe meu currículo clicando aqui:</p>

      <div id="container_button_curriculo">
        <button className="button_cr" type="button" onClick={BaixarCurriculo}>
          <span className="button__text">Download</span>
          <span className="button__icon">
            {/* SVG mantido */}
          </span>
        </button>
      </div>
    </section>
  )
}
