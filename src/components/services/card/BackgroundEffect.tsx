
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BackgroundEffectProps {
  isActive: boolean;
  isHovered: boolean;
}

const BackgroundEffect = ({ isActive, isHovered }: BackgroundEffectProps) => {
  return (
    <motion.div 
      className={cn(
        "absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-tr from-transparent to-brand-light-gray/50",
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isActive || isHovered ? { 
        scale: isHovered ? 1.2 : 1, 
        opacity: 1,
        x: isHovered ? -10 : 0,
        y: isHovered ? -10 : 0,
      } : {}}
      transition={{ duration: 0.5 }}
    />
  );
};

export default BackgroundEffect;
