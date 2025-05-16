
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Button 
        size="lg" 
        className="bg-brand-primary text-white hover:bg-brand-accent-blue group transition-all duration-300 px-8 py-6 text-lg shadow-lg hover:shadow-xl"
      >
        <span>Check All Our Services</span>
        <motion.div
          className="ml-2 inline-block"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
        >
          <ArrowRight className="h-5 w-5" />
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ServicesCTA;
