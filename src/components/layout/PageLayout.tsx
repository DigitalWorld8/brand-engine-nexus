
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useSideEdgeAnimation } from '@/hooks/useSideEdgeAnimation';

type PageLayoutProps = {
  children: React.ReactNode;
  isScrolled: boolean;
  isInitialView: boolean;
  scaleFactor: number;
  opacityFactor: number;
};

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  isScrolled,
  isInitialView,
  scaleFactor,
  opacityFactor,
}) => {
  const { sideEdgeState, getSideEdgeClasses } = useSideEdgeAnimation();
  const [isReady, setIsReady] = useState(false);
  const [contentRendered, setContentRendered] = useState(false);

  // Add a small delay before applying animations to ensure DOM is ready
  useEffect(() => {
    // Small initial delay to prevent flashing
    const preRenderTimer = setTimeout(() => {
      setContentRendered(true);
      
      // Then add a small additional delay for smooth transition effects
      const readyTimer = setTimeout(() => {
        setIsReady(true);
      }, 150);
      
      return () => clearTimeout(readyTimer);
    }, 50);
    
    return () => clearTimeout(preRenderTimer);
  }, []);

  return (
    <div 
      className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} 
        transition-colors duration-500 
        ${contentRendered ? 'content-rendered' : 'pre-animation'} 
        ${isReady ? 'ready' : ''}`}
      style={{
        visibility: contentRendered ? 'visible' : 'hidden',
        opacity: contentRendered ? 1 : 0,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      {/* Left and right purple side edges with dynamic width */}
      <div className={`${getSideEdgeClasses()} side-edge-left`}></div>
      <div className={`${getSideEdgeClasses()} side-edge-right`}></div>
      
      {/* Top curved border - visible only when at the top */}
      <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
      
      {/* The navbar is now outside the content-container since it's fixed positioned */}
      <Navbar />
      
      <div className={`content-container ${isScrolled ? 'w-full rounded-none' : ''} transition-all duration-500 z-10 relative`}>
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isScrolled ? '64px' : '100px', // Reduced margin to move content higher
            transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), margin-top 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
          }} 
          className={`min-h-screen page-reveal ${isReady ? '' : 'no-animation'}`}
        >
          <div 
            className={`transform-gpu transition-all duration-700 relative no-layout-shift ${
              isInitialView ? 'blur-effect' : ''
            }`}
            style={{
              transform: isReady ? `scale(${scaleFactor})` : 'scale(1)',
              transformOrigin: 'center top',
              marginBottom: isInitialView ? '0' : '0',
              marginTop: isInitialView ? '16vh' : '6vh', // Reduced margin top to position content higher
              transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), margin-top 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll with smoother transitions */}
            {isInitialView && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none transform-gpu"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${0.1 + (scaleFactor - 0.85) * 3})`,
                  backdropFilter: `blur(${4 - (scaleFactor - 0.85) * 25}px)`,
                  transition: 'backdrop-filter 0.7s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              />
            )}
            
            {children}
          </div>
          
          {/* Show scroll indicator */}
          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
