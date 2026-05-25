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
    const mountNode = mountRef.current;

    if (!mountNode) {
      return;
    }

    const adjustTotalStars = () => {
      let nextTotal = total;

      if (window.innerWidth < 600) {
        nextTotal = 300;
      } else if (window.innerWidth < 800) {
        nextTotal = 1000;
      }

      setAdjustedTotal((currentTotal) => (currentTotal === nextTotal ? currentTotal : nextTotal));
    };

    adjustTotalStars();

    // Cena
    const scene = new THREE.Scene();

    // Câmera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.z = 500;

    // Renderizador
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountNode.appendChild(renderer.domElement);

    // Geometria e material das estrelas
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = adjustedTotal;
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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId = 0;

    const animate = () => {
      if (!prefersReducedMotion) {
        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      adjustTotalStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }

      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, [adjustedTotal, total]);

  return <div style={mainStyle} ref={mountRef} className="fixed inset-0 z-1" />;
};

export default Stars;
