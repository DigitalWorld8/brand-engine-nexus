
import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { ServiceCategory } from '@/types/services.types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ServiceCarouselViewProps {
  serviceCategories: ServiceCategory[];
  onServiceClick: (service: ServiceCategory) => void;
  activeServiceId?: string;
}

const ServiceCarouselView = ({ 
  serviceCategories, 
  onServiceClick, 
  activeServiceId 
}: ServiceCarouselViewProps) => {
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);
  const touchTimeout = useRef<number | null>(null);
  
  const handleTouchStart = useCallback((index: number) => {
    setTouchedIndex(index);
  }, []);
  
  const handleTouchEnd = useCallback(() => {
    // Use setTimeout to create a small delay before removing the touch effect
    if (touchTimeout.current) {
      window.clearTimeout(touchTimeout.current);
    }
    
    touchTimeout.current = window.setTimeout(() => {
      setTouchedIndex(null);
      touchTimeout.current = null;
    }, 150);
  }, []);
  
  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (touchTimeout.current) {
        window.clearTimeout(touchTimeout.current);
      }
    };
  }, []);
  
  return (
    <Carousel className="w-full transform-gpu">
      <CarouselContent>
        {serviceCategories.map((category, index) => (
          <CarouselItem 
            key={index} 
            className="sm:basis-1/1 md:basis-1/2 p-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
              className={`transform-gpu ${touchedIndex === index ? "touch-active" : ""}`}
              style={{
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              <ServiceCard 
                category={category}
                onClick={() => onServiceClick(category)}
                isMobile={true}
                isActive={category.title === activeServiceId}
              />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-6 gap-3">
        <CarouselPrevious 
          className="relative static transform-none rounded-full border-brand-primary/20 text-brand-primary 
                    hover:bg-brand-primary hover:text-white transition-colors active:scale-95 touch-ripple-effect" 
        />
        <CarouselNext 
          className="relative static transform-none rounded-full border-brand-primary/20 text-brand-primary 
                    hover:bg-brand-primary hover:text-white transition-colors active:scale-95 touch-ripple-effect" 
        />
      </div>
    </Carousel>
  );
};

export default ServiceCarouselView;
