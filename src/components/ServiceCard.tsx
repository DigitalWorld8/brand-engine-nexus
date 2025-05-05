
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EnginePart } from './engine/EngineComponents';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  onClick: () => void;
  index: number;
}

const ServiceCard = ({ icon: Icon, color, title, description, onClick, index }: ServiceCardProps) => {
  const engineTypes = ['gear', 'piston', 'circuit'] as const;
  
  return (
    <div 
      className="animate-fade-in-up cursor-pointer relative"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={onClick}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03] border-t-4 border-t-transparent hover:border-t-brand-primary group overflow-hidden">
        <CardHeader className="relative">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${color} group-hover:rotate-3`}>
            <Icon className="h-7 w-7 text-white transition-transform group-hover:scale-110" />
          </div>
          <CardTitle className="text-xl md:text-2xl relative z-10">{title}</CardTitle>
          <CardDescription className="mt-2 text-gray-600 relative z-10">{description}</CardDescription>
          
          {/* Interactive background elements - engine parts */}
          <EnginePart 
            type={engineTypes[index % 3]}
            size={28}
            className="opacity-0 absolute bottom-2 right-2 group-hover:opacity-100 engine-part-glow"
            rotate={true}
            color={color}
          />
          
          {/* Interactive background element */}
          <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-tr from-transparent to-brand-light-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ServiceCard;
