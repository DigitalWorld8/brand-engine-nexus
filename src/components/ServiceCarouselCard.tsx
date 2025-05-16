
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => (
  <motion.div 
    className="py-3"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ x: 5, transition: { duration: 0.2 } }}
  >
    <h4 className="text-base md:text-lg font-semibold mb-1">{title}</h4>
    <p className="text-sm md:text-base text-gray-600 mb-2">{description}</p>
    <Button variant="outline" size="sm" className="text-xs mt-1 bg-white hover:bg-brand-primary hover:text-white">
      Learn more
      <ArrowRight className="ml-1 h-3 w-3" />
    </Button>
  </motion.div>
);

interface ServiceCarouselCardProps {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  services: ServiceItemProps[];
  isSelected: boolean;
}

const ServiceCarouselCard = ({ 
  icon: Icon, 
  color, 
  title, 
  description,
  services,
  isSelected
}: ServiceCarouselCardProps) => {
  return (
    <Card 
      className={cn(
        "service-card h-full transition-all duration-500 group border-t-4 overflow-hidden",
        isSelected 
          ? "border-t-brand-primary shadow-xl scale-[1.02]" 
          : "border-t-transparent shadow-lg hover:shadow-xl hover:border-t-brand-primary/50 hover:scale-[1.01]"
      )}
    >
      <CardHeader>
        <div className="flex items-start">
          <motion.div 
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${color}`}
            whileHover={{ rotate: 5 }}
            animate={isSelected ? { rotate: [0, 360], transition: { duration: 1.5, repeat: 0 } } : {}}
          >
            <Icon className="h-7 w-7 text-white" />
          </motion.div>
        </div>
        <motion.div whileHover={{ x: 3, transition: { duration: 0.2 } }}>
          <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
          <CardDescription className="mt-2 text-gray-600">{description}</CardDescription>
        </motion.div>
      </CardHeader>
      
      <CardContent className={cn(
        "p-0 transition-all duration-500",
        isSelected ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 pb-6 space-y-2">
          {services.map((service, idx) => (
            <ServiceItem 
              key={idx} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCarouselCard;
