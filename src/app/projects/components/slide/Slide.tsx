'use client';

import React, { useEffect, useState } from 'react';
import './slide.css';
import { useTheme } from 'next-themes';
import Loading from '../../feed/loading';
import { ListBgsType } from "@/types/types"; 

export default function Slide({ list }: { list: ListBgsType }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState<number>(0);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const { resolvedTheme } = useTheme();
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width after the component mounts

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Pre-load all images
    list.forEach((item, index) => {
      const currentItem = item[Object.keys(item)[0]];
      const link = resolvedTheme === 'dark' ? currentItem.link_bg_dark : currentItem.link_bg_light;
      const img = new Image();
      img.src = link;
      img.onload = () => setPreloadedImages(prev => ({ ...prev, [index]: true }));
    });
  }, [list, resolvedTheme]);

  useEffect(() => {
    const currentItem = list[currentIndex];
    const key = Object.keys(currentItem)[0];
    const { link_bg_light, link_bg_dark } = currentItem[key];
    
    const isDarkMode = resolvedTheme === 'dark';
    const newBackgroundImage = isDarkMode
      ? `linear-gradient(
           to right, 
           ${width <= 580 
             ? "rgba(16, 14, 14, 0.76) 25%, #000000a8" 
             : "rgba(10, 16, 22, 0) 15%, transparent"}
         ), 
         url("${link_bg_dark}")`
      : `linear-gradient(
           to right, 
           ${width <= 580 
             ? "rgba(16, 14, 14, 0.76) 25%, #000000a8" 
             : "rgb(10, 16, 22) 15%, transparent"}
         ), 
         url("${link_bg_light}")`;

    // Check if the image is preloaded
    if (preloadedImages[currentIndex]) {
      setBackgroundImage(newBackgroundImage);
      setIsBgLoaded(true);
      setTimeout(() => setIsAuto(true), 3000);
    } else {
      // Load image if not preloaded
      const img = new Image();
      img.src = isDarkMode ? link_bg_dark : link_bg_light;
      img.onload = () => {
        setBackgroundImage(newBackgroundImage);
        setIsBgLoaded(true);
        setTimeout(() => setIsAuto(true), 3000);
      };
    }
  }, [width, resolvedTheme, currentIndex, list, preloadedImages]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isAuto) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % list.length);
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAuto, list.length]);

  const handlePrevious = () => {
    setIsAuto(false); 
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : list.length - 1));
  };

  const handleNext = () => {
    setIsAuto(false); 
    setCurrentIndex(prevIndex => (prevIndex + 1) % list.length);
  };

  const currentItem = list[currentIndex];
  const key = Object.keys(currentItem)[0];
  const { title, description, color } = currentItem[key];

  return (
    <>
      <div className="container-slide" style={{ backgroundImage }} >
      {!isBgLoaded && <Loading />}
        <div id='dg' className="slide-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div id='container-btn'>
          <button id='btn-ctt' style={{ backgroundColor: color }}>
            Entrar em contato
          </button>
        </div>

        <div className='w-full relative flex justify-between container-btns'>
          <button id='btn-bk' className='absolute' onClick={handlePrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none" viewBox="0 0 331 331">
              <rect width="331" height="331" x="331" y="331" fill="#19161670" rx="165.5" transform="rotate(-180 331 331)"></rect>
              <path fill="#E5E5E5" d="M142.345 175.292l78.06 77.923a13.793 13.793 0 0019.585 0 13.795 13.795 0 000-19.446l-68.269-68.959 68.269-68.268a13.794 13.794 0 000-19.447 13.8 13.8 0 00-9.792-4.137 13.794 13.794 0 00-9.793 4.137l-78.06 77.923a13.793 13.793 0 000 20.274z"></path>
              <path fill="#F6F1F1" d="M87.345 175.292l78.06 77.923a13.793 13.793 0 0019.585 0 13.795 13.795 0 000-19.446l-68.269-68.959 68.269-68.268a13.794 13.794 0 000-19.447 13.8 13.8 0 00-9.792-4.137 13.794 13.794 0 00-9.793 4.137l-78.06 77.923a13.794 13.794 0 000 20.274z"></path>
            </svg>
          </button>
          <button id='btn-fwd' className='absolute' onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="none" viewBox="0 0 331 331">
              <rect width="331" height="331" fill="#191616" rx="165.5"></rect>
              <path fill="#E5E5E5" d="M188.656 155.708l-78.061-77.923a13.796 13.796 0 00-15.096-3.02c-1.681.7-3.206 1.727-4.489 3.02a13.792 13.792 0 000 19.446l68.269 68.958-68.269 68.269a13.79 13.79 0 000 19.446 13.79 13.79 0 009.793 4.138 13.804 13.804 0 009.792-4.138l78.061-77.923a13.8 13.8 0 004.44-10.137 13.797 13.797 0 00-4.44-10.136z"></path>
              <path fill="#F6F1F1" d="M243.656 155.708l-78.061-77.923a13.796 13.796 0 00-15.096-3.02 13.786 13.786 0 00-4.488 3.02 13.791 13.791 0 000 19.446l68.268 68.958-68.268 68.269a13.79 13.79 0 000 19.446 13.79 13.79 0 009.792 4.138 13.804 13.804 0 009.792-4.138l78.061-77.923a13.8 13.8 0 004.44-10.137 13.797 13.797 0 00-4.44-10.136z"></path>
            </svg>
          </button>
        </div>
      <div className='container-slides-total'>

          {list.map((_, i) => (
            <span key={i} className={`total_slides ${currentIndex === i ? "currentSlideActive" : ""}`}></span>
          ))}
      </div>
      </div>
    </>
  );
}
