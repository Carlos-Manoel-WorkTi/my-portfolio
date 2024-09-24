'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Stars = ({bg, total = 10000}:{bg:string,total:number}) => {
  const [adjustedTotal, setAdjustedTotal] = useState(total);

  const mainStyle: React.CSSProperties = {
    backgroundImage: `url("${bg}")`,
  };

  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para ajustar o total com base na largura da tela
    const adjustTotalStars = () => {
      if (window.innerWidth < 600) {
        setAdjustedTotal(300);
      } else if (window.innerWidth < 800) {
        setAdjustedTotal(1000);
      } else {
        setAdjustedTotal(total);
      }
    };

    // Ajustar o total na inicialização
    adjustTotalStars();

    // Cena
    const scene = new THREE.Scene();

    // Câmera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 500;

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    // Geometria e material das estrelas
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = adjustedTotal; // Número ajustado de estrelas
    const starVertices = [];
    const starSizes = [];

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;

      starVertices.push(x, y, z);

      const size = Math.random() * 0.5 + 0.1;
      starSizes.push(size);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      adjustTotalStars(); // Ajustar o total de estrelas ao redimensionar
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, [adjustedTotal, total]);

  return <div style={mainStyle} ref={mountRef} className="fixed inset-0 z-1" />;
};

export default Stars;
