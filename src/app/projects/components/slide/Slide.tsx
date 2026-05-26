'use client';

import React, { useEffect, useState } from 'react';
import './slide.css';
import { useTheme } from 'next-themes';
import Loading from '../../../../components/feed/loading';
import { ProjectItem } from "@/types/types"; 

interface SlideProps {
  list: ProjectItem[];
}

function getValidImageUrl(url?: string | null) {
  if (!url || url === 'none') {
    return null;
  }

  return url;
}

function getImageCandidates(item: ProjectItem, theme?: string) {
  const themedImage = theme === 'dark' ? item.link_bg_dark : item.link_bg_light;
  const oppositeThemedImage = theme === 'dark' ? item.link_bg_light : item.link_bg_dark;
  const candidates = [
    themedImage,
    item.cover,
    oppositeThemedImage,
    ...(item.images ?? []),
  ]
    .map(getValidImageUrl)
    .filter((url): url is string => Boolean(url));

  return Array.from(new Set(candidates));
}

export default function Slide({ list }: SlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState<number>(0);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const { resolvedTheme } = useTheme();
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  // Atualiza largura da tela
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Atualiza background
  useEffect(() => {
    if (!list[currentIndex]) return;

    const item = list[currentIndex];
    const candidates = getImageCandidates(item, resolvedTheme);

    const gradient = width <= 580
      ? "rgba(16, 14, 14, 0.76) 25%, #000000a8"
      : resolvedTheme === 'dark'
        ? "rgba(10, 16, 22, 0) 15%, transparent"
        : "rgb(10, 16, 22) 15%, transparent";

    let cancelled = false;
    let autoTimer: ReturnType<typeof setTimeout>;

    setIsBgLoaded(false);

    const showBackground = (url?: string) => {
      if (cancelled) return;

      setBackgroundImage(
        url
          ? `linear-gradient(to right, ${gradient}), url("${url}")`
          : `linear-gradient(to right, ${gradient})`
      );
      setIsBgLoaded(true);
      autoTimer = setTimeout(() => setIsAuto(true), 3000);
    };

    const loadCandidate = (index: number) => {
      const candidate = candidates[index];

      if (!candidate) {
        showBackground();
        return;
      }

      const img = new Image();
      img.onload = () => showBackground(candidate);
      img.onerror = () => loadCandidate(index + 1);
      img.src = candidate;
    };

    loadCandidate(0);

    return () => {
      cancelled = true;
      clearTimeout(autoTimer);
    };
  }, [currentIndex, width, resolvedTheme, list]);

  // Auto slide
  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % list.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAuto, list.length]);

  const handlePrevious = () => {
    setIsAuto(false);
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : list.length - 1));
  };

  const handleNext = () => {
    setIsAuto(false);
    setCurrentIndex(prev => (prev + 1) % list.length);
  };

  if (!list[currentIndex]) return null;

  const { title, description, color } = list[currentIndex];

  return (
    <div className="container-slide" style={{ backgroundImage }}>
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
        <button id='btn-bk' className='absolute' onClick={handlePrevious}>{"<"}</button>
        <button id='btn-fwd' className='absolute' onClick={handleNext}>{">"}</button>
      </div>

      <div className='container-slides-total'>
        {list.map((item, i) => (
          <span
            key={i}
            className={`total_slides ${currentIndex === i ? "currentSlideActive" : ""}`}
            onClick={() => setCurrentIndex(i)}
            style={{ background: currentIndex === i ? item.color : "white" }}
          />
        ))}
      </div>
    </div>
  );
}
