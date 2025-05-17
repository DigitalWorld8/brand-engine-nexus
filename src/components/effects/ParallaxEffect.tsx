
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
  const isMobile = useIsMobile();
  
  // Skip parallax on mobile for performance
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only update when element is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate how far through the element we've scrolled (0-1)
        const elementScrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        
        // Calculate parallax offset based on direction and speed
        const directionMultiplier = direction === 'up' ? -1 : 1;
        const parallaxOffset = elementScrollProgress * speed * 20 * directionMultiplier;
        
        setOffset(parallaxOffset);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div 
      ref={elementRef} 
      className={className}
      style={{ 
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.05s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;
