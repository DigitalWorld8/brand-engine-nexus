
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileServiceCategoryItemProps {
  title: string;
  description: string;
  color: string;
  bgColor: string;
  onClick?: () => void;
}

const MobileServiceCategoryItem = ({ 
  title, 
  description, 
  color,
  bgColor,
  onClick
}: MobileServiceCategoryItemProps) => {
  return (
    <div 
      className={cn(
        "rounded-lg mb-0 shadow-sm",
        "p-4 active:scale-98 transition-all duration-150",
        "flex items-center justify-between group cursor-pointer",
        bgColor
      )}
      onClick={onClick}
    >
      <div className="flex-1">
        <h4 className={`text-base font-medium text-white`}>{title}</h4>
        <p className="text-xs text-white text-opacity-90 mt-1">{description}</p>
      </div>
      
      <ChevronRight 
        className={cn(
          "h-5 w-5 text-white opacity-80 group-hover:opacity-100 transition-all",
          "group-hover:translate-x-0.5"
        )} 
      />
    </div>
  );
};

export default MobileServiceCategoryItem;
