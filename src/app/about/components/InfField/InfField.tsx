import "./InfField.css";
import React from "react";

const buttonData = [
  { text: "CURRICULO", className: "curriculo" },
  { text: "CERTIFICADOS", className: "certificados" },
  { text: "HABILIDADES", className: "habilidades" },
  { text: "IDIOMAS", className: "idiomas" },
  { text: "PROJETOS", className: "projetos" },
];

export default function InfField() {
  return (
    <section id="container_Inf_buttons_about">
      {buttonData.map((button, index) => (
        <button key={index} className={`uiverse ${button.className}`}>
          <div className="button_section">
            <span>{button.text}</span>
          </div>
        </button>
      ))}
    </section>
  );
}
