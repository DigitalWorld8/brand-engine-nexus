
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}

const ServiceFeature = ({ icon: Icon, title, description, gradient }: ServiceFeatureProps) => {
  return (
    <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-accent-blue/20 group">
      <div className="mb-5">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r",
          gradient,
          "group-hover:scale-110 transition-transform duration-300"
        )}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceFeature;
