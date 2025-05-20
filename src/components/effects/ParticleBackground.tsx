
import React, { useEffect, useRef, useState } from 'react';
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
  const animationRef = useRef<number>();
  
  // Skip particles on mobile for performance
  if (isMobile) {
    return null;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];

    // Set canvas dimensions to match window with device pixel ratio adjustment
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Scale canvas CSS size for proper display
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Scale context to match DPR
      ctx.scale(dpr, dpr);
    };

    // Initialize canvas size
    setCanvasSize();
    
    // Throttled resize handler
    let resizeTimeout: number;
    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(() => {
        setCanvasSize();
        // Recreate particles after resize
        particles = [];
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);

    // Optimized Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 1; // Slightly smaller for better performance
        this.speedX = Math.random() * 0.2 - 0.1; // Reduced speed
        this.speedY = Math.random() * 0.2 - 0.1; // Reduced speed
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges with minimal calculation
        if (this.x > window.innerWidth) this.x = 0;
        else if (this.x < 0) this.x = window.innerWidth;
        if (this.y > window.innerHeight) this.y = 0;
        else if (this.y < 0) this.y = window.innerHeight;
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop with requestAnimationFrame timing optimization
    const animate = () => {
      // Clear only what's needed for better performance
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Use a single globalAlpha and fillStyle setting outside the loop for better performance
      ctx.fillStyle = particleColor;
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
    };
  }, [particleColor, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{
        transform: 'translate3d(0,0,0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    />
  );
};

export default ParticleBackground;
