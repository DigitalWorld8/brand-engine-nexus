
import React from 'react';
import { motion } from 'framer-motion';

interface ActiveHighlightProps {
  isActive: boolean;
}

const ActiveHighlight = ({ isActive }: ActiveHighlightProps) => {
  if (!isActive) return null;
  
  return (
    <motion.div
      className="absolute inset-0 bg-brand-primary/5 rounded-xl pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.5, 0] }}
      transition={{ duration: 2, repeat: 1 }}
    />
  );
};

export default ActiveHighlight;
