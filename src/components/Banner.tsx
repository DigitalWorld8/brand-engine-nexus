
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

interface BannerProps {
  onBannerClick: () => void;
  visible: boolean;
}

const Banner: React.FC<BannerProps> = ({ onBannerClick, visible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { hasScrolled, initialScrollBuffer } = useNavbarScroll();
  
  // Enhanced banner interaction - respond to scroll attempts
  useEffect(() => {
    // Hide banner when user has scrolled past threshold
    if (hasScrolled && visible && initialScrollBuffer > 50) {
      onBannerClick();
    }
  }, [hasScrolled, visible, onBannerClick, initialScrollBuffer]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-brand-primary/95 via-brand-secondary/95 to-brand-accent-violet/95 text-white backdrop-blur-sm cursor-pointer"
          onClick={onBannerClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="max-w-4xl px-6 text-center">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                damping: 20, 
                stiffness: 150, 
                delay: 0.1 
              }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Empower Your Brand 
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-1 bg-white/50"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1, originX: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  ></motion.span>
                </motion.span>
                <motion.span 
                  className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-light-gray"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  with Digital Innovation
                </motion.span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl mb-12 font-medium text-white/90"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                damping: 20, 
                stiffness: 150, 
                delay: 0.2 
              }}
            >
              Transform ideas into scalable experiences through smart branding, marketing, and automation solutions
            </motion.p>
            
            <motion.div
              className={cn(
                "flex flex-col items-center mt-16",
                "transition-all duration-300",
                isHovered ? "scale-110" : ""
              )}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                damping: 20, 
                stiffness: 150, 
                delay: 0.3 
              }}
            >
              <motion.div 
                className="text-xl font-medium mb-4"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Click to Explore
              </motion.div>
              
              <motion.div 
                className="relative flex items-center justify-center"
                whileHover={{ y: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-white opacity-20 blur-md"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                <motion.div 
                  className="relative bg-white/10 border border-white/30 p-4 w-16 h-16 rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowDown 
                    className="h-8 w-8 text-white" 
                    strokeWidth={2.5} 
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;
