
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ParticleBackgroundProps {
  particleColor?: string;
  particleCount?: number;
}

interface ParticleType {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  update: () => void;
  draw: () => void;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleColor = 'rgba(27, 20, 100, 0.2)',
  particleCount = 15
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  // Skip particles on mobile for performance
  if (isMobile) {
    return null;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: ParticleType[] = [];
    let lastTime = 0;

    // Set canvas dimensions to match window
    const setCanvasSize = () => {
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    setCanvasSize();
    
    // Optimize resize handler with debounce
    let resizeTimeout: number | null = null;
    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(() => {
        setCanvasSize();
      }, 200);
    };
    window.addEventListener('resize', handleResize);

    // Particle class
    class Particle implements ParticleType {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.2 - 0.1; // Reduced speed for smoother motion
        this.speedY = Math.random() * 0.2 - 0.1; // Reduced speed for smoother motion
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop with frame timing
    const animate = (timestamp: number) => {
      // Calculate time delta between frames to maintain consistent speed
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;
      
      // Only clear and redraw at ~60fps (16.7ms per frame) to avoid overloading the GPU
      if (deltaTime < 33) { // ~30fps minimum to maintain smoothness
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
    };
  }, [particleColor, particleCount]);

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
