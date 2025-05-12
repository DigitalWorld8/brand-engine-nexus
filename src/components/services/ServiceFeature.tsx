
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ServiceFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  badges?: string[];
}

const ServiceFeature = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient,
  badges = [] 
}: ServiceFeatureProps) => {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-brand-accent-blue/20 group hover:-translate-y-1">
      <div className="mb-6 relative">
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br",
          gradient,
          "group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
        )}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-brand-light-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-brand-light-gray/50 text-brand-primary border-brand-primary/10 font-medium"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}
      
      <div className="h-1 w-0 bg-gradient-to-r from-brand-primary to-brand-accent-blue mt-4 group-hover:w-20 transition-all duration-500 rounded-full" />
    </div>
  );
};

export default ServiceFeature;
