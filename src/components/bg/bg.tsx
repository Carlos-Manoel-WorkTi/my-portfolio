'use client'
import React, { useEffect, useState } from 'react';
import "./bg.css";

export default function Bg() {
  const [offsetY, setOffsetY] = useState(0);
 
  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5); // Ajuste o fator de velocidade conforme necessário
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='container-bg'>
      <div id="bg" style={{ transform: `translateY(${offsetY}px);` }}></div>
      <span id='star1'></span>
      <span id='star2'></span>
      <span id='star3'></span>
      <span id='star4'></span>
    </div>
  );
}
