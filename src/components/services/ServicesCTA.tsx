
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CTAButton from './cta/CTAButton';

const ServicesCTA = () => {
  return (
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <CTAButton icon="arrow">
        Check All Our Services
      </CTAButton>
    </motion.div>
  );
};

export default ServicesCTA;
