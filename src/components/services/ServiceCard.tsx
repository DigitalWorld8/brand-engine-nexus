
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
}

const ServiceCard = ({ category, onClick, isMobile = false }: ServiceCardProps) => {
  const Icon = category.icon;
  
  return (
    <Card 
      onClick={onClick}
      className={cn(
        "h-full transition-all duration-300 hover:shadow-xl cursor-pointer group overflow-hidden",
        isMobile 
          ? "border-t-4 border-t-transparent hover:border-t-brand-primary"
          : "border-t-4 border-t-transparent hover:border-t-brand-primary hover:scale-[1.03]"
      )}
    >
      <CardHeader className="relative">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${category.color} group-hover:rotate-3`}>
          <Icon className="h-7 w-7 text-white transition-transform group-hover:scale-110" />
        </div>
        <CardTitle className="text-xl md:text-2xl relative z-10">{category.title}</CardTitle>
        <CardDescription className="mt-2 text-gray-600 relative z-10">{category.description}</CardDescription>
        
        {/* Interactive background element */}
        <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-tr from-transparent to-brand-light-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center text-brand-primary font-medium">
            <span>Explore services</span>
            <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-xs text-gray-400">{category.services.length} solutions</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
