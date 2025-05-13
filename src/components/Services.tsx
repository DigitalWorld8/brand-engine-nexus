
import React from 'react';
import ServicesHeader from './services/ServicesHeader';
import ServicesList from './services/ServicesList';
import ServicesCallToAction from './services/ServicesCallToAction';
import ServicesBackgroundElements from './services/ServicesBackgroundElements';
import ServicesDecorative from './services/ServicesDecorative';
import { motion } from 'framer-motion';
import { useServicesInteraction } from '@/hooks/useServicesInteraction';
import { serviceCategories } from '@/data/serviceCategories';

const Services = () => {
  const { activeService, isAnimating, isInView, handleServiceClick } = useServicesInteraction();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  return (
    <motion.section 
      id="services" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-brand-light-gray/20 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Elements */}
      <ServicesDecorative isInView={isInView} />
      
      {/* Background Elements */}
      <ServicesBackgroundElements 
        activeService={Boolean(activeService)} 
        isAnimating={isAnimating} 
      />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ServicesHeader />
        </motion.div>

        {/* Service Categories with enhanced inline display */}
        <ServicesList 
          serviceCategories={serviceCategories} 
          onServiceClick={handleServiceClick}
          activeServiceId={activeService?.title} 
        />

        {/* Call to Action with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-violet/10 to-transparent blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute -bottom-5 right-10 w-16 h-16 rounded-full bg-gradient-to-tl from-brand-accent-blue/10 to-transparent blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          <ServicesCallToAction />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
