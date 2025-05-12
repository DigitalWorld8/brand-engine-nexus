
import React from 'react';
import ServiceCard from './ServiceCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceCategory {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

interface ServicesListProps {
  serviceCategories: ServiceCategory[];
  onServiceClick: (service: ServiceCategory) => void;
  activeServiceId?: string;
}

const ServicesList = ({ serviceCategories, onServiceClick, activeServiceId }: ServicesListProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      {/* Desktop view - Grid layout with animated cards */}
      <motion.div 
        className="hidden lg:grid grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {serviceCategories.map((category, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ServiceCard 
              category={category}
              onClick={() => onServiceClick(category)}
              isActive={category.title === activeServiceId}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile/Tablet view - Enhanced Carousel */}
      <div className="lg:hidden mb-16">
        <Carousel className="w-full">
          <CarouselContent>
            {serviceCategories.map((category, index) => (
              <CarouselItem key={index} className="md:basis-1/2 p-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
            <CarouselPrevious className="relative static transform-none rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white" />
            <CarouselNext className="relative static transform-none rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default ServicesList;
