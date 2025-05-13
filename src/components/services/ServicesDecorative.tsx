
import React from 'react';
import { motion } from 'framer-motion';

interface ServicesDecorativeProps {
  isInView: boolean;
}

const ServicesDecorative: React.FC<ServicesDecorativeProps> = ({ isInView }) => {
  return (
    <>
      {/* Animated Path SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,100 Q300,150 600,100 T1200,150" 
            stroke="rgba(27, 20, 100, 0.05)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path 
            d="M0,200 Q300,250 600,200 T1200,250" 
            stroke="rgba(9, 164, 213, 0.05)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
      </div>
      
      {/* Floating animated circles */}
      <motion.div 
        className="absolute -top-10 -right-20 w-40 h-40 rounded-full bg-brand-accent-blue/5"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-40 -left-20 w-60 h-60 rounded-full bg-brand-primary/5"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Animated corner accent */}
      <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-brand-primary/10 to-transparent rounded-tl-[100%]"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />
      </div>
    </>
  );
};

export default ServicesDecorative;
