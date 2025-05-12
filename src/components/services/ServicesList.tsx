
import React from 'react';
import ServiceCard from './ServiceCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
}

const ServicesList = ({ serviceCategories, onServiceClick }: ServicesListProps) => {
  return (
    <>
      {/* Desktop view - Interactive cards with hover effects */}
      <div className="hidden lg:grid grid-cols-3 gap-8 mb-16">
        {serviceCategories.map((category, index) => (
          <ServiceCard 
            key={index}
            category={category}
            onClick={() => onServiceClick(category)}
          />
        ))}
      </div>

      {/* Mobile/Tablet view - Enhanced Carousel */}
      <div className="lg:hidden mb-16">
        <Carousel className="w-full">
          <CarouselContent>
            {serviceCategories.map((category, index) => (
              <CarouselItem key={index} className="md:basis-1/2 p-1">
                <ServiceCard 
                  category={category}
                  onClick={() => onServiceClick(category)}
                  isMobile={true}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-3">
            <CarouselPrevious className="relative static transform-none h-10 w-10 rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white" />
            <CarouselNext className="relative static transform-none h-10 w-10 rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default ServicesList;
