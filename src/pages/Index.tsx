
import React from 'react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { usePageMount } from '@/hooks/usePageMount';
import PageLayout from '@/components/layout/PageLayout';
import PageContent from '@/components/layout/PageContent';
import Banner from '@/components/Banner';

const Index = () => {
  const {
    isInitialView,
    scrollProgress,
    isScrolled,
    hasScrolled,
    initialScrollBuffer
  } = useNavbarScroll();
  
  const {
    mounted,
    showBanner,
    handleBannerClick,
    opacityFactor
  } = usePageMount();

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
        <PageContent isInitialView={isInitialView} />
      </PageLayout>
    </>
  );
};

export default Index;
