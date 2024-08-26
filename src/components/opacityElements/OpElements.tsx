'use client';

import React, { useRef, useState, useEffect, ReactNode } from 'react';
import 'animate.css';

interface OpElementsProps {
  children: ReactNode;
  enterAnimation: string;
  exitAnimation: string;
  threshold?: number;
}

const OpElements: React.FC<OpElementsProps> = ({ children, enterAnimation, exitAnimation, threshold = 0.1 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animationClass, setAnimationClass] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isAnimating) {
            setAnimationClass(enterAnimation);
            setIsAnimating(true);
          }
        } else {
          if (isAnimating) {
            setAnimationClass(exitAnimation);
            setIsAnimating(false);
          }
        }
      },
      {
        rootMargin: '0px',
        threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [enterAnimation, exitAnimation, threshold, isAnimating]);

  return (
    <div ref={ref} className={`animate__animated ${animationClass}`}>
      {children}
    </div>
  );
};

export default OpElements;
