
import React, { useEffect } from 'react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { usePageMount } from '@/hooks/usePageMount';
import PageLayout from '@/components/layout/PageLayout';
import PageContent from '@/components/layout/PageContent';
import Banner from '@/components/Banner';
import ParallaxEffect from '@/components/effects/ParallaxEffect';

const Index = () => {
  const {
    isInitialView,
    scrollProgress,
    isScrolled,
    hasScrolled,
    initialScrollBuffer,
    isScrollingUp,
    initialScrollOccurred
  } = useNavbarScroll();
  
  const {
    mounted,
    showBanner,
    handleBannerClick,
    opacityFactor,
    animationComplete
  } = usePageMount();

  // Add class to body when scrolling up to disable animations
  useEffect(() => {
    if (isScrollingUp) {
      document.body.classList.add('scrolling-up');
    } else {
      document.body.classList.remove('scrolling-up');
    }
  }, [isScrollingUp]);

  // Scale factor that increases as user scrolls (85% to 100%)
  // Create a more noticeable visual response to initial scroll attempts
  const scaleFactor = isInitialView 
    ? Math.max(0.85, 0.85 + (initialScrollBuffer / 1000)) 
    : 1;
  
  return (
    <>
      {/* Show Banner if enabled */}
      <Banner onBannerClick={handleBannerClick} visible={showBanner} />
      
      <PageLayout 
        isScrolled={isScrolled}
        isInitialView={isInitialView}
        scaleFactor={scaleFactor}
        opacityFactor={opacityFactor}
      >
        {/* Use ParallaxEffect to add depth to the page content */}
        <ParallaxEffect speed={0.3} direction="up">
          <PageContent isInitialView={isInitialView} />
        </ParallaxEffect>
      </PageLayout>
    </>
  );
};

export default Index;
