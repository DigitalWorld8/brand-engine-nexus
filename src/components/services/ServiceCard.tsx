
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import CardHeaderCustom from './card/CardHeader';
import CardFooter from './card/CardFooter';

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

interface ServiceCardProps {
  category: ServiceCategory;
  onClick: () => void;
  isMobile?: boolean;
  isActive?: boolean;
}

const ServiceCard = ({ category, onClick, isMobile = false, isActive = false }: ServiceCardProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  // Reset animation state when isActive changes
  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
      setIsPulsing(true);
      
      // Reset pulsing after a short delay
      const timer = setTimeout(() => {
        setIsPulsing(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
      setIsPulsing(false);
    }
  }, [isActive]);
  
  const handleClick = () => {
    setHasClicked(true);
    setIsPulsing(true);
    
    // Reset pulsing after animation completes
    setTimeout(() => {
      setIsPulsing(false);
    }, 2000);
    
    onClick();
  };
  
  return (
    <Card 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "h-full transition-all duration-500 cursor-pointer group overflow-hidden border border-gray-100",
        isMobile 
          ? "border-l-4 border-l-transparent hover:border-l-brand-primary rounded-xl"
          : "border-t-4 border-t-transparent hover:border-t-brand-primary hover:-translate-y-1 rounded-2xl shadow-md hover:shadow-lg",
        isActive && "border-t-brand-primary shadow-lg -translate-y-1 bg-white",
        isPulsing && "pulse-active"
      )}
    >
      <div className="p-6">
        <CardHeaderCustom
          title={category.title}
          description={category.description}
          icon={category.icon}
          color={category.color}
          isActive={isActive}
          isHovered={isHovered}
          shouldAnimate={shouldAnimate}
        />
      </div>
      
      <CardContent className="pb-4">
        <CardFooter 
          isActive={isActive}
          isHovered={isHovered}
          servicesCount={category.services.length}
        />
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
