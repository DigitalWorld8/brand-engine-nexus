
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useSideEdgeAnimation } from '@/hooks/useSideEdgeAnimation';
import { useIsMobile } from '@/hooks/use-mobile';

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
  opacityFactor,
  scrollLocked = false
}) => {
  const {
    sideEdgeState,
    getSideEdgeClasses
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
  
  // Apply scroll lock class directly to both body and wrapper for immediate effect
  useEffect(() => {
    if (scrollLocked && !isMobile) {
      document.body.classList.add('scroll-locked');
      // Force scroll position to top
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove('scroll-locked');
    }
    
    // Log scroll lock state for debugging
    console.log('Scroll locked state:', scrollLocked);
    
    return () => {
      // Cleanup
      document.body.classList.remove('scroll-locked');
    };
  }, [scrollLocked, isMobile]);

  return (
    <div 
      className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} ${isReady ? 'ready' : 'pre-animation'} ${scrollLocked ? 'scroll-locked' : 'animations-complete'}`}
    >
      {/* Left and right purple side edges with dynamic width - hidden on mobile */}
      {!isMobile && (
        <>
          <div className={`${getSideEdgeClasses()} side-edge-left pointer-events-enabled`}></div>
          <div className={`${getSideEdgeClasses()} side-edge-right pointer-events-enabled`}></div>
        </>
      )}
      
      {/* Top curved border - visible only when at the top and not on mobile */}
      {!isMobile && <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'}`}></div>}
      
      {/* The navbar is now outside the content-container since it's fixed positioned */}
      <div className="pointer-events-enabled">
        <Navbar />
      </div>
      
      <div className={`content-container ${isScrolled || isMobile ? 'w-full rounded-none' : ''} z-10 relative ${scrollLocked ? 'pointer-events-enabled' : ''}`}>
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isMobile ? '60px' : isScrolled ? '64px' : '100px',
            marginBottom: isMobile ? '70px' : '0',
            transition: 'opacity 0.2s cubic-bezier(0.33, 1, 0.68, 1), margin-top 0.15s cubic-bezier(0.33, 1, 0.68, 1), margin-bottom 0.15s cubic-bezier(0.33, 1, 0.68, 1)'
          }} 
          className="move it to top a bit"
        >
          <div className={`transform-gpu relative no-layout-shift ${isInitialView && !isMobile ? 'blur-effect' : ''}`} style={{
          transform: isReady || isMobile ? `scale(${isMobile ? 1 : scaleFactor})` : 'scale(1)',
          transformOrigin: 'center top',
          marginBottom: isInitialView && !isMobile ? '0' : '0',
          marginTop: isMobile ? '0' : isInitialView ? '16vh' : '6vh',
          transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1), margin-top 0.2s cubic-bezier(0.33, 1, 0.68, 1)'
        }}>
            {/* Add overlay div that controls the blur opacity based on scroll with smoother transitions */}
            {isInitialView && !isMobile && <div className="absolute inset-0 z-10 pointer-events-none" style={{
            backgroundColor: `rgba(255, 255, 255, ${0.1 + (scaleFactor - 0.85) * 3})`,
            backdropFilter: `blur(${4 - (scaleFactor - 0.85) * 25}px)`,
            transition: 'backdrop-filter 0.2s cubic-bezier(0.33, 1, 0.68, 1), background-color 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
            willChange: 'backdrop-filter, background-color'
          }} />}
            
            {children}
          </div>
          
          {/* Show scroll indicator only on desktop and when scrolling is allowed */}
          {!isMobile && !scrollLocked && <ScrollIndicator />}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
