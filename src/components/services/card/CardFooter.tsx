
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface CardFooterProps {
  isActive: boolean;
  isHovered: boolean;
  servicesCount: number;
}

const CardFooter = ({ isActive, isHovered, servicesCount }: CardFooterProps) => {
  return (
    <div className="flex justify-between items-center">
      <motion.div 
        className="flex items-center text-brand-primary font-medium"
        animate={isHovered ? { x: 3 } : { x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.span 
          className="mr-2"
          animate={isHovered ? { x: 2 } : { x: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          Explore services
        </motion.span>
        <motion.div 
          className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center transform", 
            isActive ? "bg-brand-primary text-white" : "bg-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white"
          )}
          animate={isHovered ? { 
            scale: 1.2, 
            x: 5,
          } : { scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowRight className="h-3 w-3" />
        </motion.div>
      </motion.div>
      <motion.div
        animate={isHovered ? { 
          scale: 1.1,
          y: isHovered ? -2 : 0
        } : { 
          scale: 1,
          y: 0
        }}
        transition={{ duration: 0.2 }}
      >
        <Badge 
          variant="outline" 
          className={cn(
            "text-xs bg-white transition-colors",
            isActive && "bg-brand-primary/5"
          )}
        >
          {servicesCount} solutions
        </Badge>
      </motion.div>
    </div>
  );
};

export default CardFooter;
