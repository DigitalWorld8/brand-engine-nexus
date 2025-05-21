
import React from 'react';
import { cn } from '@/lib/utils';

const IndustriesCTA = () => {
  return (
    <div className="mt-16 text-center animate-optimized">
      <p className="text-lg text-gray-600 mb-8 transform-gpu transition-all duration-300">
        Don't see your industry? We work with businesses of all types and sizes.
      </p>
      <a 
        href="#contact" 
        className={cn(
          "inline-flex items-center px-8 py-3 rounded-lg",
          "bg-brand-accent-blue hover:bg-brand-accent-blue/90 text-white font-medium",
          "transform-gpu transition-all duration-300 hover:scale-105",
          "hover:shadow-lg"
        )}
        onMouseEnter={(e) => {
          e.currentTarget.style.animation = "subtle-attention 1s infinite";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animation = "none";
        }}
      >
        Get in Touch
      </a>
    </div>
  );
};

export default IndustriesCTA;
