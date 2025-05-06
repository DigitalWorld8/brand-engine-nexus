
import React from 'react';
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

  return (
    <div className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} transition-colors duration-500`}>
      {/* Left and right purple side edges with dynamic width */}
      <div className={`${getSideEdgeClasses()} side-edge-left`}></div>
      <div className={`${getSideEdgeClasses()} side-edge-right`}></div>
      
      {/* Top curved border - visible only when at the top */}
      <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
      
      <div className={`content-container ${isScrolled ? 'w-full rounded-none' : ''} transition-all duration-500 z-10 relative`}>
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isInitialView ? '80px' : '0' 
          }} 
          className="min-h-screen transition-all duration-700 page-reveal"
        >
          <Navbar />
          <div 
            className={`transform-gpu transition-all duration-700 relative ${
              isInitialView ? 'blur-effect' : ''
            }`}
            style={{
              transform: `scale(${scaleFactor})`,
              transformOrigin: 'center top',
              marginBottom: isInitialView ? '-8vh' : '0',
              marginTop: isInitialView ? '20vh' : '0',
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll */}
            {isInitialView && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${0.2 + (scaleFactor - 0.85) * 5})`,
                  backdropFilter: `blur(${8 - (scaleFactor - 0.85) * 50}px)`,
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
