
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => (
  <div className="py-3">
    <h4 className="text-base md:text-lg font-semibold mb-1">{title}</h4>
    <p className="text-sm md:text-base text-gray-600">{description}</p>
  </div>
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
          <div 
            className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${color}`}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription className="mt-2 text-gray-600">{description}</CardDescription>
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
