
import React, { useEffect, useState, useRef } from 'react';
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
import { cn } from '@/lib/utils';

const Index = () => {
  const {
    isInitialView,
    scrollProgress,
    isScrolled,
    hasScrolled,
    initialScrollBuffer,
    scrollStage,
    scrollDirection,
    scrollVelocity
  } = useNavbarScroll();
  
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setMounted(true);
    
    // Add class to body when mounted to control blur effects
    if (mounted) {
      document.body.classList.add('page-loaded');
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && scrollStage < 2) {
        const { clientX, clientY } = e;
        const { width, height } = containerRef.current.getBoundingClientRect();
        
        // Calculate mouse position relative to the center of the screen
        const x = ((clientX / width) - 0.5) * 2;
        const y = ((clientY / height) - 0.5) * 2;
        
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.body.classList.remove('page-loaded');
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mounted, scrollStage]);

  // Scale factor that increases as user scrolls (85% to 100%)
  // Create a more noticeable visual response to initial scroll attempts
  const scaleFactor = isInitialView 
    ? Math.max(0.85, 0.85 + (initialScrollBuffer / 1000)) 
    : 1;
  
  const opacityFactor = mounted ? 1 : 0;
  
  // Intelligent transition timing based on scroll velocity
  const getTransitionDuration = () => {
    return scrollVelocity > 0.1 ? '600ms' : '800ms';
  };
  
  // Calculate perspective tilt based on mouse position
  const getPerspectiveTilt = () => {
    if (scrollStage > 1) return 'none';
    
    const tiltFactor = scrollStage === 0 ? 1 : 0.5;
    return `perspective(1200px) rotateX(${mousePosition.y * -2 * tiltFactor}deg) rotateY(${mousePosition.x * 2 * tiltFactor}deg)`;
  };
  
  const handleBannerClick = () => {
    setShowBanner(false);
    // Scroll to the hero section with smooth animation
    window.scrollTo({
      top: window.innerHeight * 0.05,
      behavior: 'smooth'
    });
  };
  
  return (
    <div 
      className={cn(
        "page-wrapper",
        isScrolled ? 'bg-transparent' : 'bg-brand-primary',
        scrollDirection === 'up' ? 'scroll-direction-up' : 'scroll-direction-down',
        "transition-colors"
      )}
      style={{ 
        transitionDuration: getTransitionDuration(), 
        transitionTimingFunction: 'var(--ease-smooth)'
      }}
    >
      {/* Left and right purple side edges with dynamic width based on scroll stage */}
      <div 
        className={cn(
          "side-edge side-edge-left", 
          `side-edge-stage-${scrollStage}`
        )}
        style={{ 
          transitionDuration: getTransitionDuration(), 
          boxShadow: scrollStage < 2 ? '5px 0 15px rgba(0,0,0,0.1)' : 'none'
        }}
      ></div>
      <div 
        className={cn(
          "side-edge side-edge-right",
          `side-edge-stage-${scrollStage}`
        )}
        style={{ 
          transitionDuration: getTransitionDuration(), 
          boxShadow: scrollStage < 2 ? '-5px 0 15px rgba(0,0,0,0.1)' : 'none'
        }}
      ></div>
      
      {/* Show Banner if enabled */}
      <Banner onBannerClick={handleBannerClick} visible={showBanner} />
      
      {/* Top curved border - visible only when at the top */}
      <div 
        className={cn(
          "top-curved-border",
          isScrolled ? "opacity-0" : "opacity-100",
          "transition-opacity"
        )}
        style={{ transitionDuration: getTransitionDuration() }}
      ></div>
      
      <div 
        ref={containerRef}
        className={cn(
          "content-container perspective-container",
          `stage-${scrollStage}`,
          "z-10 relative"
        )}
        style={{ 
          transform: getPerspectiveTilt(),
          transitionDuration: getTransitionDuration(),
          transitionTimingFunction: 'var(--ease-smooth)',
        }}
      >
        <div 
          style={{
            opacity: opacityFactor,
            marginTop: isInitialView ? '80px' : '0',
            transition: `all ${getTransitionDuration()} var(--ease-smooth)`
          }} 
          className="min-h-screen"
        >
          <Navbar />
          <div 
            className={cn(
              "transform-gpu transition-all relative",
              isInitialView ? "blur-effect" : ""
            )}
            style={{
              transform: `scale(${scaleFactor})`,
              transformOrigin: 'center top',
              marginBottom: isInitialView ? '-8vh' : '0',
              marginTop: isInitialView ? '20vh' : '0',
              transitionDuration: getTransitionDuration(),
              transitionTimingFunction: 'var(--ease-smooth)',
            }}
          >
            {/* Add overlay div that controls the blur opacity based on scroll */}
            {isInitialView && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundColor: `rgba(255, 255, 255, ${0.2 + (initialScrollBuffer / 400)})`,
                  backdropFilter: `blur(${8 - initialScrollBuffer / 20}px)`,
                  transition: `all ${getTransitionDuration()} var(--ease-smooth)`
                }}
              />
            )}
            
            {/* Show hero section */}
            <Hero />
            
            {/* The rest of the content that should be more blurred initially */}
            <div 
              className={isInitialView ? 'blur-content' : ''}
              style={{ transition: `all ${getTransitionDuration()} var(--ease-smooth)` }}
            >
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
