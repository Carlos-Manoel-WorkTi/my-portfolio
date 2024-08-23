"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  info: string; // Informação adicional a ser exibida ao lado da imagem
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 1; // Exibe uma imagem principal por vez
  const containerWidth = 70; // Porcentagem da largura do contêiner da imagem
  const infoWidth = 30; // Porcentagem da largura do contêiner de informações

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-100 overflow-hidden flex">
      {/* Contêiner da Imagem */}
      <div
        className="flex-shrink-0"
        style={{ width: `${containerWidth}%` }}
      >
        <Image
          src={items[currentIndex].src}
          alt={items[currentIndex].alt}
          width={150}
          height={200}
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Contêiner de Informações */}
      <div
        className="flex-shrink-0 bg-gray-100 p-4 text-black"
        style={{ width: `${infoWidth}%` }}
      >
        <h2 className="text-xl font-semibold mb-2">Informações</h2>
        <p>{items[currentIndex].info}</p>
      </div>

      {/* Botões de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
