
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
          transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }} // Reduced from 0.3s to 0.15s
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-brand-primary/95 via-brand-secondary/95 to-brand-accent-violet/95 text-white backdrop-blur-sm cursor-pointer"
          onClick={onBannerClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="max-w-4xl px-6 text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.02, duration: 0.15, ease: [0.22, 1, 0.36, 1] }} // Reduced delay from 0.05s to 0.02s and duration from 0.3s to 0.15s
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="relative">
                  Empower Your Brand 
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></span>
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-light-gray">
                  with Digital Innovation
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl mb-12 font-medium text-white/90"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.15, ease: [0.22, 1, 0.36, 1] }} // Reduced delay from 0.1s to 0.05s and duration from 0.3s to 0.15s
            >
              Transform ideas into scalable experiences through smart branding, marketing, and automation solutions
            </motion.p>
            
            <motion.div
              className={cn(
                "flex flex-col items-center mt-16",
                "transition-all duration-150", // Reduced from 200ms to 150ms
                isHovered ? "transform scale-110" : ""
              )}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.07, duration: 0.15, ease: [0.22, 1, 0.36, 1] }} // Reduced delay from 0.15s to 0.07s and duration from 0.3s to 0.15s
            >
              <div className="text-xl font-medium mb-4">Click to Explore</div>
              
              <div className={cn(
                "relative flex items-center justify-center",
                "transition-all duration-150", // Reduced from 200ms to 150ms
                isHovered ? "transform translate-y-2" : ""
              )}>
                <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md"></div>
                <div className="relative bg-white/10 border border-white/30 p-4 w-16 h-16 rounded-full flex items-center justify-center animate-subtle-bounce">
                  <ArrowDown 
                    className="h-8 w-8 text-white" 
                    strokeWidth={2.5} 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;
