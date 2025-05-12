
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

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
        "h-full transition-all duration-500 cursor-pointer group overflow-hidden",
        isMobile 
          ? "border-l-4 border-l-transparent hover:border-l-brand-primary rounded-xl"
          : "border-t-4 border-t-transparent hover:border-t-brand-primary hover:-translate-y-2 rounded-2xl"
      )}
    >
      <CardHeader className="relative pb-6">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 ${category.color} group-hover:rotate-3`}>
          <Icon className="h-8 w-8 text-white transition-transform group-hover:scale-110" />
        </div>
        <CardTitle className="text-2xl md:text-2xl relative z-10 group-hover:text-brand-primary transition-colors">
          {category.title}
        </CardTitle>
        <CardDescription className="mt-3 text-gray-600 relative z-10 text-base">
          {category.description}
        </CardDescription>
        
        {/* Animated background shape */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-tr from-transparent to-brand-light-gray/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </CardHeader>
      
      <CardContent className="pb-6">
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center text-brand-primary font-medium">
            <span className="mr-2">Explore services</span>
            <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center transform group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
          <Badge variant="outline" className="text-xs bg-white">
            {category.services.length} solutions
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
