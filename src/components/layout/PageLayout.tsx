
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

  // Add a small delay before applying animations to ensure DOM is ready
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50); // Reduced from 100ms to 50ms for faster initialization
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} transition-colors duration-300 ${isReady ? 'ready' : 'pre-animation'}`}>
      {/* Left and right purple side edges with dynamic width */}
      <div className={`${getSideEdgeClasses()} side-edge-left`}></div>
      <div className={`${getSideEdgeClasses()} side-edge-right`}></div>
      
      {/* Top curved border - visible only when at the top */}
      <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}></div>
      
      {/* The navbar is now outside the content-container since it's fixed positioned */}
      <Navbar />
      
      <div className={`content-container ${isScrolled ? 'w-full rounded-none' : ''} transition-all duration-300 z-10 relative`}>
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isScrolled ? '64px' : '100px', 
            transition: 'opacity 0.5s ease-out, margin-top 0.3s ease-out' // Reduced from 0.7s and 0.5s
          }} 
          className={`min-h-screen page-reveal ${isReady ? '' : 'no-animation'}`}
        >
          <div 
            className={`transform-gpu transition-all duration-500 relative no-layout-shift ${
              isInitialView ? 'blur-effect' : ''
            }`}
            style={{
              transform: isReady ? `scale(${scaleFactor})` : 'scale(1)',
              transformOrigin: 'center top',
              marginBottom: isInitialView ? '0' : '0',
              marginTop: isInitialView ? '16vh' : '6vh',
              transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), margin-top 0.5s cubic-bezier(0.22, 1, 0.36, 1)' // Reduced from 0.7s
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll with smoother transitions */}
            {isInitialView && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${0.1 + (scaleFactor - 0.85) * 3})`,
                  backdropFilter: `blur(${4 - (scaleFactor - 0.85) * 25}px)`,
                  transition: 'backdrop-filter 0.5s ease-out, background-color 0.5s ease-out' // Reduced from 0.7s
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
