
import React from 'react';
import { cn } from '@/lib/utils';
import { ElementType } from 'react';

interface IndustryHeaderProps {
  icon: ElementType;
  color: string;
  name: string;
  description: string;
}

const IndustryHeader = ({ icon: Icon, color, name, description }: IndustryHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
      <div className={cn(
        `w-16 h-16 rounded-2xl flex items-center justify-center ${color} shadow-lg`,
        "transform-gpu transition-all duration-300",
        "hover:scale-110"
      )}>
        <Icon className="h-8 w-8 text-white animate-subtle-attention" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 transition-all duration-300 transform-gpu">
          {name}
        </h3>
        <p className="text-gray-600 text-lg transition-all duration-300 transform-gpu">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IndustryHeader;
