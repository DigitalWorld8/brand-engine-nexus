
import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileServiceCategoryItem from './MobileServiceCategoryItem';

interface MobileServiceMenuProps {
  onServiceSelect?: () => void;
}

// Define our service structure
interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

const MobileServiceMenu = ({ onServiceSelect }: MobileServiceMenuProps) => {
  // Define our simplified service categories with brand colors
  const serviceCategories: ServiceCategory[] = [
    {
      id: "digital",
      title: "Digital Services",
      description: "AI Solutions & Digital Transformation",
      color: "text-[#1b1464]",
      bgColor: "bg-[#1b1464]",
      icon: <Code className="h-5 w-5 text-white" />
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "SEO & Social Media",
      color: "text-[#596ae9]",
      bgColor: "bg-[#596ae9]", 
      icon: <Globe className="h-5 w-5 text-white" />
    },
    {
      id: "design",
      title: "Design & Branding",
      description: "Brand Identity & Visual Design",
      color: "text-[#09a4d5]",
      bgColor: "bg-[#09a4d5]",
      icon: <Palette className="h-5 w-5 text-white" />
    }
  ];

  return (
    <div className="bg-gray-50 flex flex-col h-full">
      <div className="p-4">
        <div className="grid grid-cols-1 gap-3">
          {serviceCategories.map((category) => (
            <MobileServiceCategoryItem 
              key={category.id}
              title={category.title}
              description={category.description}
              color={category.color}
              bgColor={category.bgColor}
              onClick={onServiceSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileServiceMenu;
