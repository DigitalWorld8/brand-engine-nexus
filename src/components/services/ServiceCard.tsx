
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
}

interface ServiceCardProps {
  category: ServiceCategory;
  onClick: () => void;
  isMobile?: boolean;
  isActive?: boolean;
}

const ServiceCard = ({ category, onClick, isMobile = false, isActive = false }: ServiceCardProps) => {
  const Icon = category.icon;
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Reset animation state when isActive changes
  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);
  
  return (
    <Card 
      onClick={onClick}
      className={cn(
        "h-full transition-all duration-500 cursor-pointer group overflow-hidden border border-gray-100",
        isMobile 
          ? "border-l-4 border-l-transparent hover:border-l-brand-primary rounded-xl"
          : "border-t-4 border-t-transparent hover:border-t-brand-primary hover:-translate-y-1 rounded-2xl shadow-md hover:shadow-lg",
        isActive && "border-t-brand-primary shadow-lg -translate-y-1 bg-white"
      )}
    >
      <CardHeader className="relative pb-3">
        <motion.div 
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${category.color}`}
          whileHover={{ 
            scale: 1.05,
            rotate: 5,
            transition: { duration: 0.2 }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`icon-${isActive}-${shouldAnimate}`}
              animate={shouldAnimate ? { 
                rotate: [0, 360],
                transition: { duration: 1.5, repeat: 0 }
              } : {}}
              onAnimationComplete={() => {
                if (shouldAnimate) {
                  setShouldAnimate(false);
                }
              }}
            >
              <Icon className="h-8 w-8 text-white transition-transform" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <CardTitle className="text-xl md:text-2xl relative z-10 group-hover:text-brand-primary transition-colors">
          {category.title}
        </CardTitle>
        <CardDescription className="mt-2 text-gray-600 relative z-10 text-base">
          {category.description}
        </CardDescription>
        
        {/* Animated background shape */}
        <motion.div 
          className={cn(
            "absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-tr from-transparent to-brand-light-gray/50",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isActive ? { scale: 1, opacity: 1 } : {}}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-brand-primary font-medium">
            <span className="mr-2">Explore services</span>
            <motion.div 
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transform", 
                isActive ? "bg-brand-primary text-white" : "bg-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white"
              )}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-3 w-3" />
            </motion.div>
          </div>
          <Badge variant="outline" className="text-xs bg-white">
            {category.services.length} solutions
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
