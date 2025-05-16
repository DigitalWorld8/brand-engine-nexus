
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { ServiceCategory } from '@/types/services.types';

interface ServiceListItemProps {
  category: ServiceCategory;
  index: number;
  onServiceClick: (service: ServiceCategory) => void;
  isActive: boolean;
  hoveredItemIndex: number | null;
  setHoveredItemIndex: (index: number | null) => void;
}

const ServiceListItem = ({ 
  category, 
  index, 
  onServiceClick, 
  isActive,
  hoveredItemIndex,
  setHoveredItemIndex
}: ServiceListItemProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={cardVariants}
      onMouseEnter={() => setHoveredItemIndex(index)}
      onMouseLeave={() => setHoveredItemIndex(null)}
      className={hoveredItemIndex !== null && hoveredItemIndex !== index ? "opacity-90 scale-[0.98] transition-all" : ""}
    >
      <ServiceCard 
        category={category}
        onClick={() => onServiceClick(category)}
        isActive={isActive}
      />
    </motion.div>
  );
};

export default ServiceListItem;
