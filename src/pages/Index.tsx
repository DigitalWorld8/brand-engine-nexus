
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Industries from '@/components/Industries';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CTABanner from '@/components/cta/CTABanner';
import ScrollIndicator from '@/components/ScrollIndicator';
import Banner from '@/components/Banner';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const Index = () => {
  const {
    isInitialView,
    scrollProgress,
    isScrolled,
    hasScrolled,
    initialScrollBuffer
  } = useNavbarScroll();
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scale factor that increases as user scrolls (90% to 100%)
  // Create a more noticeable visual response to initial scroll attempts
  const scaleFactor = isInitialView 
    ? Math.max(0.9, 0.9 + (initialScrollBuffer / 1000)) 
    : 1;
  const opacityFactor = mounted ? 1 : 0;
  
  const handleBannerClick = () => {
    setShowBanner(false);
    // Scroll to the hero section
    window.scrollTo({
      top: window.innerHeight * 0.1, // Scroll slightly down to show the hero
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} transition-colors duration-500`}>
      {/* Show Banner if enabled */}
      <Banner onBannerClick={handleBannerClick} visible={showBanner} />
      
      {/* Top curved border - visible only when at the top */}
      <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
      
      <div className={`content-container ${isScrolled ? 'w-full rounded-none' : 'w-[90%] rounded-t-[3rem]'} transition-all duration-500`}>
        <div 
          style={{
            opacity: opacityFactor
          }} 
          className="min-h-screen transition-all duration-700"
        >
          <Navbar />
          <div 
            className={`transform-gpu transition-all duration-700 relative ${
              isInitialView ? 'blur-effect' : ''
            }`}
            style={{
              transform: `scale(${scaleFactor})`,
              transformOrigin: 'center top',
              marginBottom: isInitialView ? '-5vh' : '0'
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll */}
            {isInitialView && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${0.2 + (initialScrollBuffer / 400)})`,
                  backdropFilter: `blur(${8 - initialScrollBuffer / 20}px)`,
                }}
              />
            )}
            
            {/* Only key elements are clearly visible initially */}
            <div className={`relative z-20 ${isInitialView ? 'key-content' : ''}`}>
              <Hero />
            </div>
            
            {/* The rest of the content that should be more blurred initially */}
            <div className={isInitialView ? 'blur-content' : ''}>
              <Services />
              <CTABanner 
                variant="gradient" 
                title="Ready for Innovative Solutions?" 
                subtitle="Discover how our cutting-edge approaches can transform your business operations and drive growth in today's competitive landscape." 
                tags={["Strategy", "Innovation", "Results", "Support"]} 
                primaryButtonText="Schedule a Consultation" 
                secondaryButtonText="Explore Services" 
              />
              <Industries />
              <About />
              <Testimonials />
              <FAQ />
              <CTABanner 
                variant="purple-dots" 
                title="Let's Build Something Amazing" 
                subtitle="Join the ranks of our successful clients who have experienced remarkable growth through our partnership and expertise." 
                tags={["Partnership", "Excellence", "Growth", "Success"]} 
                primaryButtonText="Start Your Journey" 
                secondaryButtonText="View Case Studies" 
              />
              <Portfolio />
              <Contact />
              <Footer />
            </div>
          </div>
          
          {/* Show scroll indicator */}
          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
};

export default Index;
