
import React from 'react';
import { motion } from 'framer-motion';

interface ServicesBackgroundElementsProps {
  activeService: boolean;
  isAnimating?: boolean;
}

const ServicesBackgroundElements = ({ activeService, isAnimating = false }: ServicesBackgroundElementsProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient blobs with enhanced animations */}
      <motion.div 
        className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-brand-accent-blue/10 to-brand-primary/5 blur-3xl opacity-70"
        animate={{ 
          scale: activeService ? [1, 1.1, 1.05] : [1, 1.02, 1],
          opacity: activeService ? [0.7, 0.9, 0.7] : [0.7, 0.75, 0.7],
          x: activeService ? [0, -10, 0] : 0
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-brand-accent-violet/10 to-brand-primary/5 blur-3xl opacity-70"
        animate={{ 
          scale: activeService ? [1, 1.15, 1] : [1, 1.05, 1],
          opacity: activeService ? [0.7, 0.85, 0.7] : [0.7, 0.75, 0.7],
          x: activeService ? [0, 10, 0] : 0
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "reverse", 
          delay: 1
        }}
      />
      
      {/* Center glow that intensifies when service is selected */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96"
        animate={{ 
          opacity: activeService ? [0.05, 0.15, 0.05] : [0.03, 0.06, 0.03]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary via-transparent to-transparent blur-3xl"></div>
      </motion.div>
      
      {/* Animated floating particles with improved animation sequence */}
      <motion.div 
        className="absolute top-20 left-40 w-3 h-3 rounded-full bg-brand-primary/20" 
        animate={{ 
          y: [0, -10, 0], 
          x: activeService ? [0, 5, 0] : 0,
          opacity: activeService ? [0.3, 0.7, 0.3] : [0.2, 0.4, 0.2],
          scale: activeService ? [1, 1.2, 1] : [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute top-40 right-40 w-2 h-2 rounded-full bg-brand-accent-blue/30"
        animate={{ 
          y: [0, -7, 0], 
          x: activeService ? [0, -5, 0] : 0,
          opacity: activeService ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3],
          scale: activeService ? [1, 1.3, 1] : [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          repeatType: "reverse",
          delay: 0.5
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-1/3 w-4 h-4 rounded-full bg-brand-secondary/20"
        animate={{ 
          y: [0, -15, 0], 
          x: activeService ? [0, 10, 0] : 0,
          opacity: activeService ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2],
          scale: activeService ? [1, 1.3, 1] : [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Enhanced light grid lines with movement */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
        animate={{ 
          opacity: activeService ? [0.2, 0.3, 0.2] : [0.1, 0.2, 0.1],
          x: activeService ? [0, -5, 0] : 0,
          y: activeService ? [0, -5, 0] : 0
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      {/* Animation burst when transitioning - improved with multiple elements */}
      {isAnimating && (
        <>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-brand-primary"
            initial={{ scale: 0.1, opacity: 1 }}
            animate={{ scale: 20, opacity: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-accent-blue"
            initial={{ scale: 0.1, opacity: 1 }}
            animate={{ scale: 15, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-secondary"
            initial={{ scale: 0.1, opacity: 1 }}
            animate={{ scale: 10, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </>
      )}
    </div>
  );
};

export default ServicesBackgroundElements;
