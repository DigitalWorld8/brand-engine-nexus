
import React, { useEffect } from 'react';
import ServicesHeader from './services/ServicesHeader';
import ServicesList from './services/ServicesList';
import ServicesCallToAction from './services/ServicesCallToAction';
import ServicesBackgroundElements from './services/ServicesBackgroundElements';
import ServicesDecorative from './services/ServicesDecorative';
import { motion, useAnimation } from 'framer-motion';
import { useServicesInteraction } from '@/hooks/useServicesInteraction';
import { serviceCategories } from '@/data/serviceCategories';
import { useIsMobile } from '@/hooks/use-mobile';

const Services = () => {
  const { activeService, isAnimating, isInView, isTransitioning, handleServiceClick } = useServicesInteraction();
  const isMobile = useIsMobile();
  const controls = useAnimation();

  // Use an effect to animate when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants with improved timing and easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
        when: "beforeChildren",
        ease: "easeOut"
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 10
      } 
    }
  };

  return (
    <motion.section 
      id="services" 
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white via-brand-light-gray/20 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative Elements - hide some on mobile */}
      {!isMobile && <ServicesDecorative isInView={isInView} />}
      
      {/* Background Elements with enhanced animation logic */}
      <ServicesBackgroundElements 
        activeService={Boolean(activeService)} 
        isAnimating={isAnimating} 
      />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Section Header with improved spring animation */}
        <motion.div
          variants={childVariants}
          className="mb-8 sm:mb-12"
        >
          <ServicesHeader />
        </motion.div>

        {/* Service Categories with enhanced interactions */}
        <motion.div
          variants={childVariants}
          className={isTransitioning ? "transition-opacity duration-300" : ""}
        >
          <ServicesList 
            serviceCategories={serviceCategories} 
            onServiceClick={handleServiceClick}
            activeServiceId={activeService?.title} 
          />
        </motion.div>

        {/* Call to Action with staggered animation */}
        <motion.div
          variants={childVariants}
          className="relative"
        >
          {/* Decorative elements - simplified on mobile */}
          {!isMobile ? (
            <>
              <motion.div 
                className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-violet/10 to-transparent blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: activeService ? [0, -5, 0] : 0,
                  y: activeService ? [0, -5, 0] : 0
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
                  opacity: [0.2, 0.5, 0.2],
                  x: activeService ? [0, 5, 0] : 0,
                  y: activeService ? [0, 5, 0] : 0
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
            </>
          ) : (
            <motion.div 
              className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent-violet/10 to-transparent blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: activeService ? [0, 3, 0] : 0,
                y: activeService ? [0, -3, 0] : 0
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
