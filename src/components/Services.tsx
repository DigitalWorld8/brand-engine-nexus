
import React from 'react';
import ServicesHeader from './services/ServicesHeader';
import ServicesList from './services/ServicesList';
import ServicesCallToAction from './services/ServicesCallToAction';
import ServicesBackgroundElements from './services/ServicesBackgroundElements';
import ServicesDecorative from './services/ServicesDecorative';
import { motion } from 'framer-motion';
import { useServicesInteraction } from '@/hooks/useServicesInteraction';
import { serviceCategories } from '@/data/serviceCategories';
import { useIsMobile } from '@/hooks/use-mobile';

const Services = () => {
  const { activeService, isAnimating, isInView, interactionCount, handleServiceClick } = useServicesInteraction();
  const isMobile = useIsMobile();

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
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white via-brand-light-gray/20 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative Elements - hide some on mobile */}
      {!isMobile && <ServicesDecorative isInView={isInView} />}
      
      {/* Background Elements with microinteractions */}
      <ServicesBackgroundElements 
        activeService={Boolean(activeService)} 
        isAnimating={isAnimating}
        interactionCount={interactionCount}
      />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10"
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
          className="mb-8 sm:mb-12"
        >
          <ServicesHeader />
        </motion.div>

        {/* Service Categories with enhanced microinteractions */}
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
          {/* Decorative elements with microinteractions - simplified on mobile */}
          {!isMobile ? (
            <>
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
              
              {/* New microinteraction element that responds to service selection */}
              {activeService && (
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-primary/5 blur-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 2, 0], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5 }}
                />
              )}
            </>
          ) : (
            <motion.div 
              className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent-violet/10 to-transparent blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          )}
          
          <ServicesCallToAction />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
