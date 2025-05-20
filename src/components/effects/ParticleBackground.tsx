
import React, { useEffect, useRef, useMemo, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ParticleBackgroundProps {
  particleColor?: string;
  particleCount?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleColor = 'rgba(27, 20, 100, 0.2)',
  particleCount = 15
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(true);
  const requestRef = useRef<number>();
  
  // Skip particles on mobile for performance
  if (isMobile) {
    return null;
  }

  // Watch for visibility changes to pause animations when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];

    // Set canvas dimensions to match window and account for device pixel ratio
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Scale canvas back down with CSS
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Scale drawing operations
      ctx.scale(dpr, dpr);
    };

    // Initialize canvas size
    setCanvasSize();
    
    // Use ResizeObserver for more efficient resize handling
    const resizeObserver = new ResizeObserver(() => {
      if (isVisible) {
        setCanvasSize();
      }
    });
    
    resizeObserver.observe(document.body);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      colorAlpha: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.colorAlpha = this.opacity;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges with buffer to prevent popping
        const buffer = this.size * 2;
        if (this.x > canvas.width + buffer) this.x = -buffer;
        else if (this.x < -buffer) this.x = canvas.width + buffer;
        if (this.y > canvas.height + buffer) this.y = -buffer;
        else if (this.y < -buffer) this.y = canvas.height + buffer;
      }

      draw() {
        if (!ctx) return;
        const color = particleColor.replace(/[\d\.]+\)$/g, `${this.colorAlpha})`);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles only once
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop using requestAnimationFrame
    const animate = () => {
      if (!isVisible) {
        // Don't animate when not visible to save resources
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [particleColor, particleCount, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    />
  );
};

export default ParticleBackground;
