
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { ServiceCategory } from '@/types/services.types';
import ServiceListItem from './ServiceListItem';
import ServiceCarouselView from './ServiceCarouselView';
import ServiceDetailsView from './ServiceDetailsView';
import ServicesCTA from './ServicesCTA';
import useScrollReveal from '@/hooks/useScrollReveal';

interface ServicesListProps {
  serviceCategories: ServiceCategory[];
  onServiceClick: (service: ServiceCategory) => void;
  activeServiceId?: string;
}

const ServicesList = ({ serviceCategories, onServiceClick, activeServiceId }: ServicesListProps) => {
  const [expandedService, setExpandedService] = useState<ServiceCategory | null>(null);
  const [previousActiveId, setPreviousActiveId] = useState<string | undefined>(undefined);
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  // Enhanced reveal animation for the grid
  const { ref, className: revealClass } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "-50px",
    duration: 0.5,
  });

  // Track active service changes to properly handle animations
  useEffect(() => {
    if (activeServiceId !== previousActiveId) {
      setPreviousActiveId(activeServiceId);
      
      // Find the expanded service based on active ID
      const active = serviceCategories.find(cat => cat.title === activeServiceId);
      if (active) {
        setExpandedService(active);
      } else {
        setExpandedService(null);
      }
    }
  }, [activeServiceId, previousActiveId, serviceCategories]);

  const handleServiceClick = (category: ServiceCategory) => {
    if (expandedService?.title === category.title) {
      setExpandedService(null);
    } else {
      setExpandedService(category);
    }
    onServiceClick(category);
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200
      }
    }
  };

  return (
    <div className="mb-16">
      {/* Desktop view - Grid layout with enhanced animations */}
      <div ref={ref} className={`hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 grid-reveal ${revealClass}`}>
        {serviceCategories.map((category, index) => (
          <ServiceListItem 
            key={index}
            category={category}
            index={index}
            onServiceClick={handleServiceClick}
            isActive={category.title === activeServiceId}
            hoveredItemIndex={hoveredItemIndex}
            setHoveredItemIndex={setHoveredItemIndex}
          />
        ))}
      </div>

      {/* Mobile/Tablet view - Enhanced Carousel with microinteractions */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            damping: 25,
            stiffness: 200
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <ServiceCarouselView 
            serviceCategories={serviceCategories}
            onServiceClick={handleServiceClick}
            activeServiceId={activeServiceId}
          />
        </motion.div>
      </div>
      
      {/* Service details section with enhanced animations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={expandedService ? { opacity: 1, y: 0 } : { opacity: 0, height: 0 }}
        transition={{ 
          type: "spring",
          damping: 25,
          stiffness: 200
        }}
      >
        <ServiceDetailsView expandedService={expandedService} />
      </motion.div>
      
      {/* Main CTA button with modern animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          damping: 25,
          stiffness: 200,
          delay: 0.2
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <ServicesCTA />
      </motion.div>
    </div>
  );
};

export default ServicesList;
