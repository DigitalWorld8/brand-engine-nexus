
import React, { useEffect, useRef } from 'react';
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
  const particlesRef = useRef<Particle[]>([]);
  const isVisibleRef = useRef(true);
  
  // Skip particles on mobile for performance
  if (isMobile) {
    return null;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

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
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.15 - 0.075; // Reduced speed
        this.speedY = Math.random() * 0.15 - 0.075; // Reduced speed
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Efficient edge handling
        if (this.x > window.innerWidth) this.x = 0;
        else if (this.x < 0) this.x = window.innerWidth;
        if (this.y > window.innerHeight) this.y = 0;
        else if (this.y < 0) this.y = window.innerHeight;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Set canvas dimensions with device pixel ratio adjustment
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      
      // Scale context to match DPR
      ctx.scale(dpr, dpr);
      ctx.fillStyle = particleColor;
    };

    // Initialize canvas size
    setCanvasSize();
    
    // Create particles only once
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    }

    // Throttled resize handler
    let resizeTimeout: number;
    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(() => {
        setCanvasSize();
        // Reset particles on resize
        particlesRef.current = [];
        for (let i = 0; i < particleCount; i++) {
          particlesRef.current.push(new Particle());
        }
      }, 200);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });

    // Visibility change detection for performance
    const handleVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Optimized animation loop
    const animate = () => {
      if (isVisibleRef.current) {
        // Clear only the needed area
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particlesRef.current.forEach(particle => {
          particle.update();
          particle.draw(ctx);
        });
      }
      
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
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
    };
  }, [particleColor, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 transform-gpu"
      style={{
        backfaceVisibility: 'hidden'
      }}
    />
  );
};

export default ParticleBackground;
