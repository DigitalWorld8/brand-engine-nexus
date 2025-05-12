
import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileServiceCategoryItem from './MobileServiceCategoryItem';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
    <div className="bg-gray-50 py-4">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent className="px-2">
          {serviceCategories.map((category) => (
            <CarouselItem key={category.id} className="basis-1/3 sm:basis-1/3 pl-2 pr-2">
              <MobileServiceCategoryItem 
                title={category.title}
                description={category.description}
                color={category.color}
                bgColor={category.bgColor}
                onClick={onServiceSelect}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MobileServiceMenu;
