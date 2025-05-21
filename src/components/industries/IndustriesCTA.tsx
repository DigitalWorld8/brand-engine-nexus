
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import DecorativeParticles from '@/components/effects/DecorativeParticles';
import { ArrowRight } from 'lucide-react';

const IndustriesCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-16 text-center relative overflow-hidden rounded-2xl p-10 bg-gradient-to-tr from-brand-primary/5 to-brand-accent-blue/10 animate-optimized">
      {/* Decorative particles in the background */}
      <DecorativeParticles 
        count={12}
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
            "bg-brand-accent-blue hover:bg-brand-accent-blue/90 text-white font-medium",
            "transform-gpu transition-all duration-300 hover:scale-105",
            "hover:shadow-lg relative overflow-hidden group"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Button content with micro-interactions */}
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-4px]">
            Get in Touch
          </span>
          
          <ArrowRight 
            className={cn(
              "h-5 w-5 transition-all duration-300 relative z-10",
              isHovered ? "translate-x-1 animate-hint-right" : ""
            )}
          />
          
          {/* Animated background */}
          <span 
            className="absolute inset-0 bg-gradient-to-r from-brand-accent-blue to-brand-accent-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transform: 'translateZ(0)',
              willChange: 'opacity'
            }}
          />
          
          {/* Animated glow effect */}
          <span 
            className={cn(
              "absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              "bg-gradient-to-r from-brand-accent-blue/60 to-brand-accent-violet/60 blur-md"
            )}
            style={{
              transform: 'translateZ(0)',
              willChange: 'opacity',
              zIndex: -1
            }}
          />
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
