
import React from 'react';
import { motion } from 'framer-motion';

interface ServicesBackgroundElementsProps {
  activeService: boolean;
  isAnimating?: boolean;
  interactionCount?: number;
}

const ServicesBackgroundElements = ({ 
  activeService, 
  isAnimating = false, 
  interactionCount = 0 
}: ServicesBackgroundElementsProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient blobs with enhanced animations */}
      <motion.div 
        className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-brand-accent-blue/10 to-brand-primary/5 blur-3xl opacity-70"
        animate={{ 
          scale: activeService ? [1, 1.1, 1.05] : 1,
          opacity: activeService ? [0.7, 0.9, 0.7] : 0.7,
          x: isAnimating ? [0, 5, 0] : 0
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
          scale: activeService ? [1, 1.15, 1] : 1,
          opacity: activeService ? [0.7, 0.85, 0.7] : 0.7,
          y: isAnimating ? [0, -5, 0] : 0
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
          opacity: activeService ? [0.05, 0.15, 0.05] : 0.05,
          scale: isAnimating ? [1, 1.05, 1] : 1
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary via-transparent to-transparent blur-3xl"></div>
      </motion.div>
      
      {/* Animated floating particles that respond to interactions */}
      <motion.div 
        className="absolute top-20 left-40 w-3 h-3 rounded-full bg-brand-primary/20" 
        animate={{ 
          y: [0, -10, 0], 
          opacity: activeService ? [0.3, 0.7, 0.3] : [0.2, 0.4, 0.2],
          scale: interactionCount > 0 ? [1, 1.2, 1] : 1
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
          opacity: activeService ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3],
          scale: isAnimating ? [1, 1.5, 1] : 1
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
          opacity: activeService ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2],
          x: isAnimating ? [0, 10, 0] : 0
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Light grid lines with interaction response */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
        animate={{ 
          opacity: activeService ? [0.2, 0.3, 0.2] : 0.2,
          backgroundSize: isAnimating ? ["40px 40px", "42px 42px", "40px 40px"] : "40px 40px"
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      {/* Reactive particles that appear on interaction */}
      {interactionCount > 0 && (
        <>
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-brand-accent-blue/40"
            initial={{ x: "50%", y: "50%", scale: 0 }}
            animate={{ 
              x: ["50%", "30%"], 
              y: ["50%", "30%"], 
              scale: [0, 1, 0.8],
              opacity: [0, 0.8, 0]
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-brand-primary/40"
            initial={{ x: "50%", y: "50%", scale: 0 }}
            animate={{ 
              x: ["50%", "60%"], 
              y: ["50%", "70%"], 
              scale: [0, 0.8, 0],
              opacity: [0, 0.7, 0]
            }}
            transition={{ duration: 1.7, ease: "easeOut", delay: 0.1 }}
          />
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-brand-accent-violet/40"
            initial={{ x: "50%", y: "50%", scale: 0 }}
            animate={{ 
              x: ["50%", "70%"], 
              y: ["50%", "40%"], 
              scale: [0, 0.5, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </>
      )}
      
      {/* Animation burst when transitioning */}
      {isAnimating && (
        <motion.div 
          className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-brand-primary"
          initial={{ scale: 0.1, opacity: 1 }}
          animate={{ scale: 20, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )}
    </div>
  );
};

export default ServicesBackgroundElements;
