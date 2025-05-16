
import React from 'react';
import { motion } from 'framer-motion';
import { CardTitle, CardDescription } from "@/components/ui/card";
import IconAnimation from './IconAnimation';
import BackgroundEffect from './BackgroundEffect';
import ActiveHighlight from './ActiveHighlight';

interface CardHeaderProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  isActive: boolean;
  isHovered: boolean;
  shouldAnimate: boolean;
}

const CardHeader = ({ title, description, icon, color, isActive, isHovered, shouldAnimate }: CardHeaderProps) => {
  return (
    <div className="relative pb-3">
      <IconAnimation 
        Icon={icon}
        isHovered={isHovered}
        shouldAnimate={shouldAnimate}
        color={color}
      />
      
      <motion.div
        animate={isHovered ? { x: 3 } : { x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <CardTitle className="text-xl md:text-2xl relative z-10 group-hover:text-brand-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="mt-2 text-gray-600 relative z-10 text-base">
          {description}
        </CardDescription>
      </motion.div>
      
      <BackgroundEffect isActive={isActive} isHovered={isHovered} />
      <ActiveHighlight isActive={isActive} />
    </div>
  );
};

export default CardHeader;
