'use client';
import "./style.css"

import React from 'react'

export default function Curriculo() {
  const BaixarCurriculo = () =>{
    alert("baixado")
  }
  return (
    <section id="s_curriculo">
      <h2 id="subTitleCurriculo">CURRICULO</h2>
      <p id="text-cr">Baixe meu curriculo clicando aqui:</p>
      <div id="container_button_curriculo">
        <button className="button_cr" type="button" onClick={BaixarCurriculo}>
            <span className="button__text">Download</span>
            <span className="button__icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 35 35"
                id="bdd05811-e15d-428c-bb53-8661459f9307"
                data-name="Layer 2"
                className="svg"
            >
                <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z" />
                <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z" />
                <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
            </svg>
            </span>
        </button>
      </div>
    </section>
  )
}
