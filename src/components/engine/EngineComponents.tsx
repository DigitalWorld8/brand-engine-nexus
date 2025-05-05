
import React from 'react';
import { Cylinder, Cog, CircuitBoard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnginePartProps {
  className?: string;
  delay?: number;
  rotate?: boolean;
  size?: number;
  type: 'gear' | 'piston' | 'circuit';
  color?: string;
}

export const EnginePart: React.FC<EnginePartProps> = ({
  className,
  delay = 0,
  rotate = true,
  size = 36,
  type,
  color = "#9b87f5"
}) => {
  const getIcon = () => {
    switch (type) {
      case 'gear':
        return <Cog className="h-full w-full" />; // Changed from Gears to Cog
      case 'piston':
        return <Cylinder className="h-full w-full" />;
      case 'circuit':
        return <CircuitBoard className="h-full w-full" />;
      default:
        return <Cog className="h-full w-full" />; // Changed from Gears to Cog
    }
  };
  
  return (
    <div 
      className={cn(
        "engine-part absolute transition-all duration-1000",
        "opacity-0 transform translate-y-8 scale-95",
        "shadow-lg rounded-full p-1",
        "bg-gradient-to-tr from-white/80 to-white/40 backdrop-blur-sm",
        "border border-white/20",
        rotate && "engine-rotate",
        "will-change-transform",
        className
      )}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        transitionDelay: `${delay}ms`,
        color: color
      }}
      data-engine-part="true"
    >
      {getIcon()}
    </div>
  );
};

export const EngineAssembly: React.FC<{className?: string}> = ({className}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Main gear */}
      <EnginePart
        type="gear"
        size={68}
        className="right-12 bottom-20"
        color="#9b87f5"
      />
      
      {/* Secondary gears */}
      <EnginePart
        type="gear"
        size={42}
        className="right-4 bottom-8"
        delay={200}
        color="#596ae9"
      />
      
      <EnginePart
        type="gear"
        size={36}
        className="right-24 bottom-2"
        delay={400}
        color="#09a4d5"
      />
      
      {/* Pistons */}
      <EnginePart
        type="piston"
        size={52}
        className="left-16 bottom-16"
        delay={300}
        color="#7E69AB"
      />
      
      {/* Circuit */}
      <EnginePart
        type="circuit"
        size={60}
        className="left-4 bottom-4"
        delay={600}
        color="#6E59A5"
        rotate={false}
      />
      
      {/* Secondary circuit */}
      <EnginePart
        type="circuit"
        size={34}
        className="left-20 top-6"
        delay={800}
        color="#09a4d5"
        rotate={false}
      />
    </div>
  );
};
