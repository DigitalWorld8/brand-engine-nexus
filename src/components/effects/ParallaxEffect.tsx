
import React, { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Higher number = more effect (1-5 recommended)
  direction?: 'up' | 'down';
  className?: string;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 1,
  direction = 'up',
  className = ''
}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isMobile = useIsMobile();
  
  // Skip parallax on mobile for performance
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Calculate if element is in viewport
    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
      );
    };
    
    // Throttle scroll handling for performance
    let ticking = false;
    const directionMultiplier = direction === 'up' ? -1 : 1;
    
    const updateParallax = () => {
      if (!element) return;
      
      // Only update when element is in view
      if (isInViewport(element)) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how far through the element we've scrolled (0-1)
        const elementScrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        
        // Calculate parallax offset based on direction and speed
        const parallaxOffset = elementScrollProgress * speed * 15 * directionMultiplier;
        
        // Use requestAnimationFrame for smoother transforms
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        
        animationRef.current = requestAnimationFrame(() => {
          setOffset(parallaxOffset);
        });
      }
      ticking = false;
    };
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, direction]);

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ 
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.02s linear', // Almost no transition for frame-perfect tracking
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
