
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useSideEdgeAnimation } from '@/hooks/useSideEdgeAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

type PageLayoutProps = {
  children: React.ReactNode;
  isScrolled: boolean;
  isInitialView: boolean;
  scaleFactor: number;
  opacityFactor: number;
  scrollLocked?: boolean;
};

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  isScrolled,
  isInitialView,
  scaleFactor,
  opacityFactor
}) => {
  const {
    sideEdgeState,
    getSideEdgeClasses,
    isScrollingUp
  } = useSideEdgeAnimation();
  const [isReady, setIsReady] = useState(false);
  const isMobile = useIsMobile();

  // Add a small delay before applying animations to ensure DOM is ready
  // Skip delay on mobile devices
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, isMobile ? 0 : 10);
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Determine if we should skip animations for reverse scrolling
  const skipAnimations = !isInitialView && isScrollingUp;

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div 
      className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} ${isReady ? 'ready' : 'pre-animation'}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Left and right purple side edges with dynamic width - hidden on mobile */}
      {!isMobile && (
        <>
          <motion.div 
            className={`${getSideEdgeClasses()} side-edge-left`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          ></motion.div>
          
          <motion.div 
            className={`${getSideEdgeClasses()} side-edge-right`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          ></motion.div>
        </>
      )}
      
      {/* Top curved border - visible only when at the top and not on mobile */}
      {!isMobile && (
        <motion.div 
          className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        ></motion.div>
      )}
      
      {/* The navbar is now outside the content-container since it's fixed positioned */}
      <Navbar />
      
      <motion.div 
        className={`content-container ${isScrolled || isMobile ? 'w-full rounded-none' : ''} z-10 relative`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 30,
          delay: 0.2
        }}
      >
        <motion.div 
          style={{
            opacity: opacityFactor,
            marginTop: isMobile ? '60px' : isScrolled ? '64px' : '100px',
            marginBottom: isMobile ? '70px' : '0',
            transition: skipAnimations ? 'none' : 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }} 
        >
          <motion.div 
            className={`transform-gpu relative no-layout-shift ${isInitialView && !isMobile ? 'blur-effect' : ''}`} 
            style={{
              transform: isReady || isMobile ? `scale(${isMobile ? 1 : scaleFactor})` : 'scale(1)',
              transformOrigin: 'center top',
              marginBottom: isInitialView && !isMobile ? '0' : '0',
              marginTop: isMobile ? '0' : isInitialView ? '16vh' : '6vh',
              transition: skipAnimations ? 'none' : 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: isMobile ? 1 : scaleFactor }}
            transition={{ 
              type: "spring",
              stiffness: 150,
              damping: 20,
              delay: 0.3
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll with smoother transitions */}
            {isInitialView && !isMobile && (
              <motion.div 
                className="absolute inset-0 z-10 pointer-events-none" 
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${0.1 + (scaleFactor - 0.90) * 3})`,
                  backdropFilter: `blur(${4 - (scaleFactor - 0.90) * 30}px)`,
                  transition: skipAnimations ? 'none' : 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  willChange: 'backdrop-filter, background-color'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
            
            {children}
          </motion.div>
          
          {/* Show scroll indicator only on desktop */}
          {!isMobile && <ScrollIndicator />}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PageLayout;
