
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import DecorativeParticles from '@/components/effects/DecorativeParticles';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const IndustriesCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="mt-16 text-center relative overflow-hidden rounded-2xl p-10 bg-gradient-to-tr from-brand-primary/5 to-brand-accent-blue/10 animate-optimized">
      {/* Decorative particles in the background */}
      <DecorativeParticles 
        count={isMobile ? 8 : 12}
        colors={['#9b87f580', '#0EA5E950', '#8B5CF640']}
        size={[5, 12]}
        speed={[25, 45]}
      />
      
      <div className="relative z-10">
        <p className="text-lg text-gray-600 mb-8 transform-gpu transition-all duration-300">
          Don't see your industry? We work with businesses of all types and sizes.
        </p>
        
        <a 
          href="#contact" 
          className={cn(
            "inline-flex items-center px-8 py-4 rounded-lg gap-2",
            "bg-brand-accent-blue text-white font-medium",
            "transform-gpu transition-all duration-300 hover:scale-105",
            "hover:shadow-lg active:shadow-inner active:scale-95",
            "touch-ripple-effect relative overflow-hidden group"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsTouched(true)}
          onTouchEnd={() => {
            setIsTouched(false);
            // Trigger a brief hover effect on touch end to show animation
            setIsHovered(true);
            setTimeout(() => setIsHovered(false), 300);
          }}
        >
          {/* Button content with micro-interactions */}
          <span className={cn(
            "relative z-10 transition-transform duration-300",
            (isHovered || isTouched) ? "translate-x-[-4px]" : ""
          )}>
            Get in Touch
          </span>
          
          <ArrowRight 
            className={cn(
              "h-5 w-5 transition-all duration-300 relative z-10",
              (isHovered || isTouched) ? "translate-x-1 animate-hint-right" : ""
            )}
          />
          
          {/* Animated background */}
          <span 
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-brand-accent-blue to-brand-accent-violet",
              (isHovered || isTouched) ? "opacity-100" : "opacity-0",
              "transition-opacity duration-300"
            )}
            style={{
              transform: 'translateZ(0)',
              willChange: 'opacity'
            }}
          />
          
          {/* Animated glow effect */}
          <span 
            className={cn(
              "absolute -inset-px rounded-lg",
              (isHovered || isTouched) ? "opacity-100" : "opacity-0",
              "bg-gradient-to-r from-brand-accent-blue/60 to-brand-accent-violet/60 blur-md",
              "transition-opacity duration-300"
            )}
            style={{
              transform: 'translateZ(0)',
              willChange: 'opacity',
              zIndex: -1
            }}
          />
          
          {/* Touch ripple effect (mobile only) */}
          {isTouched && isMobile && (
            <span className="absolute inset-0 bg-white/20 touch-ripple animate-touch-ripple rounded-lg" />
          )}
        </a>
        
        {/* Decorative floating element */}
        <div 
          className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-brand-accent-blue/10 animate-float" 
          style={{ animationDelay: '0.5s' }}
        />
        <div 
          className="absolute -top-6 -left-2 w-16 h-16 rounded-full bg-brand-accent-violet/10 animate-float" 
          style={{ animationDelay: '1.2s' }}
        />
      </div>
    </div>
  );
};

export default IndustriesCTA;
