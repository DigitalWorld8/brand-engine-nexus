
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
  const [isHovered, setIsHovered] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  // Reset animation state when isActive changes
  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
      setIsPulsing(true);
      
      // Reset pulsing after a short delay
      const timer = setTimeout(() => {
        setIsPulsing(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
      setIsPulsing(false);
    }
  }, [isActive]);
  
  const handleClick = () => {
    setHasClicked(true);
    setIsPulsing(true);
    
    // Reset pulsing after animation completes
    setTimeout(() => {
      setIsPulsing(false);
    }, 2000);
    
    onClick();
  };
  
  return (
    <Card 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "h-full transition-all duration-500 cursor-pointer group overflow-hidden border border-gray-100",
        isMobile 
          ? "border-l-4 border-l-transparent hover:border-l-brand-primary rounded-xl"
          : "border-t-4 border-t-transparent hover:border-t-brand-primary hover:-translate-y-1 rounded-2xl shadow-md hover:shadow-lg",
        isActive && "border-t-brand-primary shadow-lg -translate-y-1 bg-white",
        isPulsing && "pulse-active"
      )}
    >
      <CardHeader className="relative pb-3">
        <motion.div 
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${category.color} relative`}
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Micro-ripple effect on hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-white opacity-30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
          
          <AnimatePresence mode="wait">
            <motion.div
              key={`icon-${isActive}-${shouldAnimate}-${isHovered}`}
              animate={shouldAnimate ? { 
                rotate: [0, 360],
                transition: { duration: 1.5, repeat: 0 }
              } : isHovered ? {
                y: [0, -5, 0],
                transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
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
        
        <motion.div
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <CardTitle className="text-xl md:text-2xl relative z-10 group-hover:text-brand-primary transition-colors">
            {category.title}
          </CardTitle>
          <CardDescription className="mt-2 text-gray-600 relative z-10 text-base">
            {category.description}
          </CardDescription>
        </motion.div>
        
        {/* Animated background shape with reactive behavior */}
        <motion.div 
          className={cn(
            "absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-tr from-transparent to-brand-light-gray/50",
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isActive || isHovered ? { 
            scale: isHovered ? 1.2 : 1, 
            opacity: 1,
            x: isHovered ? -10 : 0,
            y: isHovered ? -10 : 0,
          } : {}}
          transition={{ duration: 0.5 }}
        />
        
        {/* Subtle highlight on active service */}
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-brand-primary/5 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: 1 }}
          />
        )}
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center text-brand-primary font-medium"
            animate={isHovered ? { x: 3 } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span 
              className="mr-2"
              animate={isHovered ? { x: 2 } : { x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              Explore services
            </motion.span>
            <motion.div 
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transform", 
                isActive ? "bg-brand-primary text-white" : "bg-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white"
              )}
              animate={isHovered ? { 
                scale: 1.2, 
                x: 5,
              } : { scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-3 w-3" />
            </motion.div>
          </motion.div>
          <motion.div
            animate={isHovered ? { 
              scale: 1.1,
              y: isHovered ? -2 : 0
            } : { 
              scale: 1,
              y: 0
            }}
            transition={{ duration: 0.2 }}
          >
            <Badge 
              variant="outline" 
              className={cn(
                "text-xs bg-white transition-colors",
                isActive && "bg-brand-primary/5"
              )}
            >
              {category.services.length} solutions
            </Badge>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
