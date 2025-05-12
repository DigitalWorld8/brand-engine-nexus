
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
        "rounded-lg shadow-sm",
        "p-4 active:scale-98 transition-all duration-150",
        "flex flex-col justify-between group cursor-pointer h-full",
        bgColor
      )}
      onClick={onClick}
    >
      <div>
        <h4 className="text-base font-medium text-white">{title}</h4>
        <p className="text-xs text-white text-opacity-90 mt-1">{description}</p>
      </div>
      
      <div className="flex justify-end mt-2">
        <ChevronRight 
          className={cn(
            "h-5 w-5 text-white opacity-80 group-hover:opacity-100 transition-all",
            "group-hover:translate-x-0.5"
          )} 
        />
      </div>
    </div>
  );
};

export default MobileServiceCategoryItem;
