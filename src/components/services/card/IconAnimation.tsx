
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IconAnimationProps {
  Icon: React.ElementType;
  isHovered: boolean;
  shouldAnimate: boolean;
  color: string;
}

const IconAnimation = ({ Icon, isHovered, shouldAnimate, color }: IconAnimationProps) => {
  return (
    <motion.div 
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${color} relative`}
      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Micro-ripple effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white opacity-30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={`icon-${shouldAnimate}-${isHovered}`}
          animate={shouldAnimate ? { 
            rotate: [0, 360],
            transition: { duration: 1.5, repeat: 0 }
          } : isHovered ? {
            y: [0, -5, 0],
            transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
          } : {}}
        >
          <Icon className="h-8 w-8 text-white transition-transform" />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default IconAnimation;
