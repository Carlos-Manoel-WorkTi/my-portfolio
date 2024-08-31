'use client'; // Adicione esta linha no topo do arquivo

import React, { useEffect, useState } from 'react';
import './slide.css';


type ProjectItem = {
  title: string;
  link_bg: string;
  description: string;
  color:string;
};

type ListItem = {
  [key: string]: ProjectItem;
};


type ListBgsType = ListItem[];


type SlideProps = {
  list: ListBgsType;
};


export default function Slide({ list}: SlideProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : list.length - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex < list.length - 1 ? prevIndex + 1 : 0
        );
    };

    const currentItem = list[currentIndex];
    const key = Object.keys(currentItem)[0];
    const { title, link_bg, description,color } = currentItem[key];

    const backgroundImage = `linear-gradient(to right, ${ width <= 580 ? "rgb(16 14 14 / 76%) 25% , #000000a8)" : " rgb(9 9 11) 25% ,transparent)" }, url(${link_bg})`;
 


    return (
      <>
        <div className="container-slide" style={{ backgroundImage: backgroundImage }}>
          <div id='dg' className="slide-content">
            <h2 >{title}</h2>
            <p >{description}</p>
          </div>
          <div id='container-btn'>
            <button id='btn-ctt' style={{ backgroundColor: color }}>
              Entrar em contato
            </button>
          </div>

          <div className='w-full relative flex justify-between'>
            <button id='btn-bk' className='absolute' onClick={handlePrevious}>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
            </svg>
            </button>
            <button id='btn-fwd' className='absolute'  onClick={handleNext}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
          <div className="current-slide-show">
            {list.map((item, index) => (
              <span key={index} className='total_slides' />
            ))}
          </div>
          </div>
        
      </>
    );
  }
  


