
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { ServiceCategory } from '@/types/services.types';
import ServiceListItem from './ServiceListItem';
import ServiceCarouselView from './ServiceCarouselView';
import ServiceDetailsView from './ServiceDetailsView';
import ServicesCTA from './ServicesCTA';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="mb-16">
      {/* Desktop view - Grid layout with animated cards */}
      <motion.div 
        className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
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
      </motion.div>

      {/* Mobile/Tablet view - Enhanced Carousel with microinteractions */}
      <div className="lg:hidden">
        <ServiceCarouselView 
          serviceCategories={serviceCategories}
          onServiceClick={handleServiceClick}
          activeServiceId={activeServiceId}
        />
      </div>
      
      {/* Service details section with enhanced microinteractions */}
      <ServiceDetailsView expandedService={expandedService} />
      
      {/* Main CTA button */}
      <ServicesCTA />
    </div>
  );
};

export default ServicesList;
