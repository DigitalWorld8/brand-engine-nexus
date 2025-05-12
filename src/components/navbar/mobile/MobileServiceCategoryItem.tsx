
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileServiceCategoryItemProps {
  title: string;
  description: string;
  color: string;
  onClick?: () => void;
}

const MobileServiceCategoryItem = ({ 
  title, 
  description, 
  color = "text-brand-primary",
  onClick
}: MobileServiceCategoryItemProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-sm border border-gray-100",
        "p-3 active:scale-98 transition-all duration-150",
        "flex items-center justify-between group cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="flex-1">
        <h4 className={`font-medium ${color}`}>{title}</h4>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
      
      <ChevronRight 
        className={cn(
          "h-4 w-4 opacity-50 group-hover:opacity-100 transition-all",
          `${color} group-hover:translate-x-1`
        )} 
      />
    </div>
  );
};

export default MobileServiceCategoryItem;
