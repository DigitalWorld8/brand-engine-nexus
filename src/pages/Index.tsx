
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
    <div className={`page-wrapper ${isScrolled ? 'bg-transparent' : 'bg-brand-primary'} transition-colors duration-500`}>
      {/* Left and right purple side edges with corner fixes */}
      <div className="side-edge side-edge-left"></div>
      <div className="side-edge side-edge-right"></div>
      
      {/* Corner fixes - these divs will cover the white corners */}
      <div className="fixed top-0 left-0 w-[5%] md:w-[7.5%] lg:w-[10%] h-16 bg-brand-primary rounded-br-[3rem] z-10"></div>
      <div className="fixed top-0 right-0 w-[5%] md:w-[7.5%] lg:w-[10%] h-16 bg-brand-primary rounded-bl-[3rem] z-10"></div>
      <div className="fixed bottom-0 left-0 w-[5%] md:w-[7.5%] lg:w-[10%] h-16 bg-brand-primary rounded-tr-[3rem] z-10"></div>
      <div className="fixed bottom-0 right-0 w-[5%] md:w-[7.5%] lg:w-[10%] h-16 bg-brand-primary rounded-tl-[3rem] z-10"></div>
      
      {/* Initial view bottom edge - only visible when at the top */}
      <div className={`initial-view-bottom-edge ${isScrolled ? 'opacity-0' : 'opacity-100'}`}></div>
      
      {/* Bottom frame border - completing the frame around the initial view */}
      <div className={`initial-page-frame-bottom ${isScrolled ? 'opacity-0' : 'opacity-100'}`}></div>
      
      {/* Show Banner if enabled */}
      <Banner onBannerClick={handleBannerClick} visible={showBanner} />
      
      {/* Top curved border - visible only when at the top */}
      <div className={`top-curved-border ${isScrolled ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}></div>
      
      <div className={`content-container ${isScrolled ? 'w-full rounded-none' : ''} transition-all duration-500 z-10 relative`}>
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isInitialView ? '80px' : '0' // Increased margin-top to move content down further initially
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
              marginBottom: isInitialView ? '-8vh' : '0', // Increased negative margin for longer scroll
              marginTop: isInitialView ? '20vh' : '0', // Significantly increased top margin to move content down further initially
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
