
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceCategory {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  services: ServiceItem[];
  image?: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface ServicePanelProps {
  category: ServiceCategory;
  onClick: () => void;
}

const ServicePanel = ({ category, onClick }: ServicePanelProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { icon: Icon, color, title, description, services, image, cta } = category;

  // Generate a gradient based on the color
  const getGradient = () => {
    switch (color) {
      case 'bg-[#1b1464]':
        return 'from-[#1b1464]/90 to-[#1b1464]/60';
      case 'bg-[#596ae9]':
        return 'from-[#596ae9]/90 to-[#596ae9]/60';
      case 'bg-[#09a4d5]':
        return 'from-[#09a4d5]/90 to-[#09a4d5]/60';
      default:
        return 'from-brand-primary/90 to-brand-primary/60';
    }
  };

  return (
    <div
      className="relative h-[400px] md:h-[500px] overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background Image/Color */}
      <div className="absolute inset-0 bg-gray-800 overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover opacity-60 transition-transform duration-700 scale-100",
              isHovered && "scale-110"
            )}
          />
        )}
        {/* Overlay with color from category */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b opacity-60",
          getGradient()
        )}></div>
      </div>

      {/* Panel Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        {/* Icon and Title */}
        <div>
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500",
            color,
            isHovered ? "scale-110" : "scale-100"
          )}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">{title}</h3>
        </div>

        {/* Description and Call-to-Action - Always visible but transforms on hover */}
        <div className={cn(
          "transition-all duration-500 transform",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-90"
        )}>
          <p className="mb-6">{description}</p>
          {cta && (
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black group"
            >
              <span>{cta.text}</span>
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>

        {/* Services List - Only visible on hover */}
        <div className={cn(
          "absolute inset-0 p-8 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end",
          "transition-all duration-500 transform",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}>
          <h4 className="font-semibold text-lg mb-3">Our Services Include:</h4>
          <ul className="space-y-1">
            {services.slice(0, 4).map((service, idx) => (
              <li key={idx} className="flex items-center group/item">
                <ChevronRight className="h-3 w-3 mr-2 opacity-70 group-hover/item:opacity-100" />
                <span className="text-sm md:text-base group-hover/item:translate-x-1 transition-transform">
                  {service.title}
                </span>
              </li>
            ))}
            {services.length > 4 && (
              <li className="text-sm text-white/80 mt-2">+ {services.length - 4} more services</li>
            )}
          </ul>
        </div>

        {/* Bottom Bar Indicator */}
        <div className={cn(
          "absolute bottom-0 left-0 h-1 bg-white transition-all duration-700",
          isHovered ? "w-full" : "w-0"
        )}></div>
      </div>
    </div>
  );
};

export default ServicePanel;
