
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
  icon: React.ReactNode;
}

const MobileServiceMenu = ({ onServiceSelect }: MobileServiceMenuProps) => {
  // Define our simplified service categories
  const serviceCategories: ServiceCategory[] = [
    {
      id: "digital",
      title: "Digital Services",
      description: "AI Solutions, Digital Transformation & Automation",
      color: "text-[#1b1464]",
      icon: <Code className="h-5 w-5 text-white" />
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "SEO, Content Writing & Social Media",
      color: "text-[#596ae9]",
      icon: <Globe className="h-5 w-5 text-white" />
    },
    {
      id: "design",
      title: "Design & Branding",
      description: "Brand Identity, Logos & Visual Design",
      color: "text-[#09a4d5]",
      icon: <Palette className="h-5 w-5 text-white" />
    }
  ];

  return (
    <div className="bg-gray-50 h-full flex flex-col">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-6">Our Services</h3>
        
        <div>
          {serviceCategories.map((category) => (
            <MobileServiceCategoryItem 
              key={category.id}
              title={category.title}
              description={category.description}
              color={category.color}
              onClick={onServiceSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileServiceMenu;
