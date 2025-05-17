
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useSideEdgeAnimation } from '@/hooks/useSideEdgeAnimation';
import { useIsMobile } from '@/hooks/use-mobile';
import BackToTop from '@/components/BackToTop';
import ParticleBackground from '@/components/effects/ParticleBackground';

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
    // Set ready immediately to prevent any delay in animations
    setIsReady(true);
    
    return () => {};
  }, [isMobile]);

  // Determine if we should skip animations for reverse scrolling
  const skipAnimations = !isInitialView && isScrollingUp;

  return (
    <div 
      className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} ${isReady ? 'ready' : 'pre-animation'}`}
    >
      {/* Particle background effect */}
      <ParticleBackground />
      
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
      
      <div className={`content-container ${isScrolled || isMobile ? 'w-full rounded-none' : ''} z-10 relative`}>
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isMobile ? '60px' : isScrolled ? '64px' : '100px',
            marginBottom: isMobile ? '70px' : '0',
            transition: skipAnimations ? 'none' : 'opacity 0.08s cubic-bezier(0.22, 1, 0.36, 1), margin-top 0.08s cubic-bezier(0.22, 1, 0.36, 1), margin-bottom 0.08s cubic-bezier(0.22, 1, 0.36, 1)'
          }} 
          className="move it to top a bit"
        >
          <div className={`transform-gpu relative no-layout-shift ${isInitialView && !isMobile ? 'blur-effect' : ''}`} style={{
            transform: isReady || isMobile ? `scale(${isMobile ? 1 : scaleFactor})` : 'scale(1)',
            transformOrigin: 'center top',
            marginBottom: isInitialView && !isMobile ? '0' : '0',
            marginTop: isMobile ? '0' : isInitialView ? '16vh' : '6vh',
            transition: skipAnimations ? 'none' : 'transform 0.08s cubic-bezier(0.22, 1, 0.36, 1), margin-top 0.08s cubic-bezier(0.22, 1, 0.36, 1)'
          }}>
            {/* Add overlay div that controls the blur opacity based on scroll with smoother transitions */}
            {isInitialView && !isMobile && <div className="absolute inset-0 z-10 pointer-events-none" style={{
              backgroundColor: `rgba(255, 255, 255, ${0.1 + (scaleFactor - 0.85) * 3})`,
              backdropFilter: `blur(${4 - (scaleFactor - 0.85) * 25}px)`,
              transition: skipAnimations ? 'none' : 'backdrop-filter 0.08s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.08s cubic-bezier(0.22, 1, 0.36, 1)',
              willChange: 'backdrop-filter, background-color'
            }} />}
            
            {children}
          </div>
          
          {/* Show scroll indicator only on desktop */}
          {!isMobile && <ScrollIndicator />}
        </div>
      </div>
      
      {/* Back to top button */}
      <BackToTop />
    </div>
  );
};

export default PageLayout;
