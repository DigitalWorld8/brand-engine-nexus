
import React from 'react';
import { cn } from '@/lib/utils';

interface IndustryExamplesProps {
  examples: string[];
}

const IndustryExamples = ({ examples }: IndustryExamplesProps) => {
  return (
    <div className="mt-10">
      <h4 className="font-semibold text-lg mb-4">We work with:</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {examples.map((example, index) => (
          <div 
            key={index} 
            className={cn(
              "bg-gray-50 rounded-xl p-5 text-center",
              "transform-gpu transition-all duration-300",
              "hover:shadow-md hover:bg-gray-100 hover:scale-105",
              "animate-optimized"
            )}
            style={{
              animationName: "quick-pop",
              animationDuration: "0.5s",
              animationDelay: `${index * 75}ms`,
              animationFillMode: "both",
              transitionDelay: `${index * 50}ms`,
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          >
            <p className="font-medium">{example}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryExamples;
