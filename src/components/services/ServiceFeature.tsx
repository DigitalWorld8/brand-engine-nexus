
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
    <div className="bg-white rounded-xl shadow-sm p-6 transform transition-all hover:shadow-md hover:-translate-y-1 duration-300">
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-r ${gradient}`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceFeature;
