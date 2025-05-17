
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
  opacityFactor
}) => {
  const {
    sideEdgeState,
    getSideEdgeClasses,
    isScrollingUp
  } = useSideEdgeAnimation();
  const [isReady, setIsReady] = useState(false);
  const isMobile = useIsMobile();

  // Eliminate all initial animation delays
  useEffect(() => {
    setIsReady(true);
  }, []);

  // Determine if we should skip animations for reverse scrolling
  const skipAnimations = !isInitialView && isScrollingUp;

  return (
    <div 
      className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} ${isReady ? 'ready' : 'pre-animation'}`}
      style={{
        willChange: 'background-color',
        transform: 'translateZ(0)'
      }}
    >
      {/* Left and right purple side edges with dynamic width - hidden on mobile */}
      {!isMobile && (
        <>
          <div className={`${getSideEdgeClasses()} side-edge-left`}></div>
          <div className={`${getSideEdgeClasses()} side-edge-right`}></div>
        </>
      )}
      
      {/* Top curved border - visible only when at the top and not on mobile */}
      {!isMobile && <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'}`}></div>}
      
      {/* The navbar is now outside the content-container since it's fixed positioned */}
      <div>
        <Navbar />
      </div>
      
      <div 
        className={`content-container ${isScrolled || isMobile ? 'w-full rounded-none' : ''} z-10 relative`}
        style={{
          willChange: 'width, border-radius',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isMobile ? '60px' : isScrolled ? '64px' : '100px',
            marginBottom: isMobile ? '70px' : '0',
            transition: skipAnimations ? 'none' : 'opacity 0.05s cubic-bezier(0.16, 1, 0.3, 1), margin-top 0.05s cubic-bezier(0.16, 1, 0.3, 1), margin-bottom 0.05s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'opacity, margin-top, margin-bottom',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div 
            className={`transform-gpu relative no-layout-shift ${isInitialView && !isMobile ? 'blur-effect' : ''}`} 
            style={{
              transform: isReady || isMobile ? `scale(${isMobile ? 1 : scaleFactor})` : 'scale(1)',
              transformOrigin: 'center top',
              marginBottom: isInitialView && !isMobile ? '0' : '0',
              marginTop: isMobile ? '0' : isInitialView ? '16vh' : '6vh',
              transition: skipAnimations ? 'none' : 'transform 0.05s cubic-bezier(0.16, 1, 0.3, 1), margin-top 0.05s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform, margin-top',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll with smoother transitions */}
            {isInitialView && !isMobile && <div 
              className="absolute inset-0 z-10 pointer-events-none" 
              style={{
                backgroundColor: `rgba(255, 255, 255, ${0.1 + (scaleFactor - 0.85) * 3})`,
                backdropFilter: `blur(${4 - (scaleFactor - 0.85) * 25}px)`,
                transition: skipAnimations ? 'none' : 'backdrop-filter 0.05s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.05s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'backdrop-filter, background-color',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }} 
            />}
            
            {children}
          </div>
          
          {/* Show scroll indicator only on desktop */}
          {!isMobile && <ScrollIndicator />}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
