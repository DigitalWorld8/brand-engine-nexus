
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
  
  // Reduce particle count and increase performance optimizations on mobile
  const actualCount = isMobile ? Math.floor(count / 2) : count;
  // Reduce particle size on mobile
  const actualSize: [number, number] = isMobile ? [Math.max(3, size[0] - 1), Math.max(5, size[1] - 2)] : size;
  // Increase animation speed slightly on mobile for better visual effect
  const actualSpeed: [number, number] = isMobile ? [speed[0] * 1.2, speed[1] * 1.2] : speed;

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear existing particles
    containerRef.current.innerHTML = '';
    
    // Create particles
    for (let i = 0; i < actualCount; i++) {
      const particle = document.createElement('div');
      
      // Random properties
      const randomSize = Math.floor(Math.random() * (actualSize[1] - actualSize[0]) + actualSize[0]);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomDelay = Math.random() * 5;
      const randomDuration = Math.random() * (actualSpeed[1] - actualSpeed[0]) + actualSpeed[0];
      const randomOpacity = Math.random() * 0.5 + 0.1;
      
      // Apply styles
      particle.className = 'particle absolute rounded-full';
      
      // Select animation type based on device - simpler animations for mobile
      const animationTypes = isMobile 
        ? ['particle-floating', 'particle-pulsing'] // Simplified for mobile
        : ['particle-floating', 'particle-pulsing', 'particle-rotating'];
      
      const randomAnimation = animationTypes[Math.floor(Math.random() * animationTypes.length)];
      
      particle.classList.add(randomAnimation);
      
      // Add mobile-specific optimizations
      if (isMobile) {
        particle.classList.add('mobile-optimized');
      }
      
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
  }, [actualCount, colors, actualSize, actualSpeed, isMobile]);

  return <div ref={containerRef} className={containerClassName} />;
};

export default DecorativeParticles;
