
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobileDevice = useIsMobile();
  const iconControls = useAnimation();
  const bgShapeControls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Reset animation state when isActive changes
  useEffect(() => {
    if (isActive) {
      setShouldAnimate(true);
      
      // Sequence of animations for the active card
      const sequence = async () => {
        await iconControls.start({ 
          rotate: 360,
          scale: [1, 1.2, 1],
          transition: { duration: 1.5 }
        });
        
        // Subtle continuous animation after initial animation
        iconControls.start({
          y: [0, -3, 0],
          transition: { 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        });
      };
      
      sequence();
      
      // Animate background shape for active card
      bgShapeControls.start({
        scale: 1,
        opacity: 0.8,
        x: -10,
        y: -10,
        transition: { duration: 0.5 }
      });
    } else {
      setShouldAnimate(false);
      
      // Reset animations
      iconControls.stop();
      iconControls.set({ rotate: 0, scale: 1, y: 0 });
      
      bgShapeControls.start({
        scale: 0.8,
        opacity: 0,
        x: 0,
        y: 0,
        transition: { duration: 0.3 }
      });
    }
  }, [isActive, iconControls, bgShapeControls]);
  
  // Handle hover enter with sequential animations
  const handleHoverStart = () => {
    setIsHovered(true);
    
    // Only run hover animations if card is not already active
    if (!isActive) {
      iconControls.start({
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 }
      });
      
      bgShapeControls.start({
        scale: 1.2,
        opacity: 0.6,
        x: -10,
        y: -10,
        transition: { duration: 0.4 }
      });
    }
  };
  
  // Handle hover exit with smooth animations
  const handleHoverEnd = () => {
    setIsHovered(false);
    
    // Only reset if not active
    if (!isActive) {
      iconControls.start({
        scale: 1,
        rotate: 0,
        transition: { duration: 0.3 }
      });
      
      bgShapeControls.start({
        scale: 0.8,
        opacity: 0,
        x: 0,
        y: 0,
        transition: { duration: 0.3 }
      });
    }
  };
  
  return (
    <Card 
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className={cn(
        "h-full transition-all duration-500 cursor-pointer group overflow-hidden border border-gray-100",
        isMobile 
          ? "border-l-4 border-l-transparent hover:border-l-brand-primary rounded-lg"
          : "border-t-4 border-t-transparent hover:border-t-brand-primary hover:-translate-y-1 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg",
        isActive && "border-t-brand-primary shadow-lg -translate-y-1 bg-white"
      )}
    >
      <CardHeader className="relative pb-2 sm:pb-3 px-4 sm:px-6">
        <motion.div 
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 ${category.color}`}
          animate={iconControls}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`icon-${isActive}-${shouldAnimate}-${isHovered}`}
              initial={false}
            >
              <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white transition-transform" />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <CardTitle className="text-lg sm:text-xl md:text-2xl relative z-10 group-hover:text-brand-primary transition-colors">
          {category.title}
        </CardTitle>
        <CardDescription className="mt-1 sm:mt-2 text-gray-600 relative z-10 text-sm sm:text-base">
          {category.description}
        </CardDescription>
        
        {/* Animated background shape with improved animation */}
        <motion.div 
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-tr from-transparent to-brand-light-gray/50"
          animate={bgShapeControls}
          initial={{ scale: 0.8, opacity: 0 }}
        />
      </CardHeader>
      
      <CardContent className="pb-3 sm:pb-4 px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center text-brand-primary font-medium text-sm sm:text-base"
            animate={isHovered ? { x: 3 } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-1 sm:mr-2">Explore services</span>
            <motion.div 
              className={cn(
                "w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transform", 
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
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Badge variant="outline" className="text-xs bg-white">
              {category.services.length} solutions
            </Badge>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
