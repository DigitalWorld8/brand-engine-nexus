
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
    
    // Add class to body when mounted to control blur effects
    if (mounted) {
      document.body.classList.add('page-loaded');
    }
    
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, [mounted]);

  // Scale factor that increases as user scrolls (85% to 100%)
  // Create a more noticeable visual response to initial scroll attempts
  const scaleFactor = isInitialView 
    ? Math.max(0.85, 0.85 + (initialScrollBuffer / 1000)) 
    : 1;
  const opacityFactor = mounted ? 1 : 0;
  
  const handleBannerClick = () => {
    setShowBanner(false);
    // Scroll to the hero section
    window.scrollTo({
      top: window.innerHeight * 0.05,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} transition-colors duration-1000`}>
      {/* Left and right purple side edges */}
      <div className="side-edge side-edge-left"></div>
      <div className="side-edge side-edge-right"></div>
      
      {/* Show Banner if enabled */}
      <Banner onBannerClick={handleBannerClick} visible={showBanner} />
      
      {/* Top curved border - visible only when at the top */}
      <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}></div>
      
      <div className={`content-container ${isScrolled ? 'w-full rounded-none' : ''} transition-all duration-1000 ease-smooth z-10 relative`} 
           style={{
             marginTop: isInitialView ? '80px' : '0',
             transition: 'margin-top 1000ms cubic-bezier(0.65, 0, 0.35, 1)'
           }}>
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isInitialView ? '80px' : '0', // Increased margin-top to move content down further initially
            transition: 'opacity 1000ms ease-out, margin-top 1000ms cubic-bezier(0.65, 0, 0.35, 1)'
          }} 
          className="min-h-screen transition-all duration-1000 ease-smooth"
        >
          <Navbar />
          <div 
            className={`transform-gpu transition-all duration-1000 ease-smooth relative ${
              isInitialView ? 'blur-effect' : ''
            }`}
            style={{
              transform: `scale(${scaleFactor})`,
              transformOrigin: 'center top',
              marginBottom: isInitialView ? '-8vh' : '0', // Increased negative margin for longer scroll
              marginTop: isInitialView ? '20vh' : '0', // Significantly increased top margin to move content down further initially
              transition: 'transform 1200ms cubic-bezier(0.25, 0.1, 0.25, 1), margin-top 1200ms cubic-bezier(0.25, 0.1, 0.25, 1), margin-bottom 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll */}
            {isInitialView && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${0.2 + (initialScrollBuffer / 400)})`,
                  backdropFilter: `blur(${8 - initialScrollBuffer / 20}px)`,
                  transition: 'backdrop-filter 800ms ease-out, background-color 800ms ease-out'
                }}
              />
            )}
            
            {/* Show hero section */}
            <Hero />
            
            {/* The rest of the content that should be more blurred initially */}
            <div className={isInitialView ? 'blur-content' : ''} style={{ transition: 'filter 1000ms ease-out, opacity 1000ms ease-out' }}>
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
