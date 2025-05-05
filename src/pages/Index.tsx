
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
    // Allow a small delay for page elements to initialize before starting animations
    const timer = setTimeout(() => {
      setMounted(true);
      
      // Add class to body when mounted to control blur effects
      document.body.classList.add('page-loaded');
    }, 100);
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('page-loaded');
    };
  }, []);

  // More gradual scale factor that increases as user scrolls (88% to 100%)
  // Create a more noticeable but smooth visual response to initial scroll attempts
  const scaleFactor = isInitialView 
    ? Math.max(0.88, 0.88 + (initialScrollBuffer / 800)) 
    : 1;
  const opacityFactor = mounted ? 1 : 0;
  
  const handleBannerClick = () => {
    setShowBanner(false);
    // Scroll to the hero section with improved smoothness
    window.scrollTo({
      top: window.innerHeight * 0.08,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} transition-colors duration-800 ease-smooth`}>
      {/* Left and right purple side edges */}
      <div className="side-edge side-edge-left"></div>
      <div className="side-edge side-edge-right"></div>
      
      {/* Show Banner if enabled */}
      <Banner onBannerClick={handleBannerClick} visible={showBanner} />
      
      {/* Top curved border - visible only when at the top */}
      <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-800 ease-smooth`}></div>
      
      <div className={`content-container ${isScrolled ? 'w-full rounded-none' : ''} transition-all duration-800 ease-smooth z-10 relative`}>
        <div 
          style={{
            opacity: opacityFactor,
            transition: 'opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1), margin-top 1200ms cubic-bezier(0.4, 0, 0.2, 1)',
            marginTop: isInitialView ? '90px' : '0' // Increased margin-top to move content down further initially
          }} 
          className="min-h-screen"
        >
          <Navbar />
          <div 
            className={`transform-gpu transition-all duration-1000 ease-smooth relative ${
              isInitialView ? 'blur-effect' : ''
            }`}
            style={{
              transform: `scale(${scaleFactor})`,
              transformOrigin: 'center top',
              transition: 'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1), margin-bottom 1200ms cubic-bezier(0.16, 1, 0.3, 1), margin-top 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
              marginBottom: isInitialView ? '-10vh' : '0', // Increased negative margin for longer scroll
              marginTop: isInitialView ? '22vh' : '0', // Significantly increased top margin to move content down further initially
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll with improved transition */}
            {isInitialView && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none transition-all duration-800 ease-smooth"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${0.15 + (initialScrollBuffer / 500)})`,
                  backdropFilter: `blur(${9 - initialScrollBuffer / 15}px)`,
                  transition: 'backdrop-filter 800ms ease-in-out, background-color 800ms ease-in-out',
                }}
              />
            )}
            
            {/* Show hero section */}
            <Hero />
            
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
