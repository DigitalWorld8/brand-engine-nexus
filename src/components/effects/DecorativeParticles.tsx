
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ParticleProps {
  count?: number;
  colors?: string[];
  size?: [number, number]; // [min, max]
  speed?: [number, number]; // [min, max]
  containerClassName?: string;
}

const DecorativeParticles: React.FC<ParticleProps> = ({ 
  count = 8, 
  colors = ['#9b87f5', '#0EA5E9', '#8B5CF6'],
  size = [4, 10],
  speed = [20, 40],
  containerClassName = 'absolute inset-0 overflow-hidden pointer-events-none'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Reduce particle count on mobile for performance
  const actualCount = isMobile ? Math.floor(count / 2) : count;

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear existing particles
    containerRef.current.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < actualCount; i++) {
      const particle = document.createElement('div');
      
      // Random properties
      const randomSize = Math.floor(Math.random() * (size[1] - size[0]) + size[0]);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomDelay = Math.random() * 5;
      const randomDuration = Math.random() * (speed[1] - speed[0]) + speed[0];
      const randomOpacity = Math.random() * 0.5 + 0.1;
      
      // Apply styles
      particle.className = 'particle absolute rounded-full';
      
      // Select random animation type
      const animationTypes = ['particle-floating', 'particle-pulsing', 'particle-rotating'];
      const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
      
      particle.classList.add(randomAnimation);
      
      Object.assign(particle.style, {
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        backgroundColor: randomColor,
        left: `${randomX}%`,
        top: `${randomY}%`,
        opacity: randomOpacity.toString(),
        animationDelay: `${randomDelay}s`,
        animationDuration: `${randomDuration}s`,
        transform: 'translateZ(0)',
        willChange: 'transform, opacity'
      });
      
      containerRef.current.appendChild(particle);
    }
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [actualCount, colors, size, speed, isMobile]);

  return <div ref={containerRef} className={containerClassName} />;
};

export default DecorativeParticles;
