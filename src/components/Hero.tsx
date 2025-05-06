
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const {
    isScrolled,
    scrollStage,
    scrollVelocity,
    scrollDirection
  } = useNavbarScroll();
  
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Dynamic tear shape based on scroll stage with intelligent morphing
  const getTearShapeStyle = () => {
    const baseRadius = "60% 40% 45% 55% / 30% 50% 50% 70%";
    
    if (scrollStage === 0) {
      return baseRadius;
    } else if (scrollStage === 1) {
      return "55% 45% 40% 60% / 35% 45% 55% 65%";
    } else if (scrollStage === 2) {
      return "50% 50% 35% 65% / 40% 40% 60% 60%";
    } else {
      return "0% 0% 0% 0% / 0% 0% 0% 0%"; // No border radius when fully zoomed
    }
  };

  // Parallax effect based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        
        // Calculate mouse position relative to the center of the element
        const x = ((clientX - left) / width - 0.5) * 2;
        const y = ((clientY - top) / height - 0.5) * 2;
        
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger reveal animation after a short delay
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 300);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  // Calculate dynamic transition durations based on scroll velocity
  const getTransitionDuration = () => {
    // Faster transitions when scrolling quickly
    return scrollVelocity > 0.1 ? '400ms' : '800ms';
  };
  
  return <section 
    ref={heroRef}
    className={cn(
      "relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden mx-0 my-[45px] px-0 py-[320px]",
      !isScrolled ? 'hero-tear-shape' : '',
      scrollDirection === 'up' ? 'scroll-direction-up' : 'scroll-direction-down'
    )}
    style={{
      transition: `all ${getTransitionDuration()} var(--ease-smooth)`
    }}
  >
      {/* Background elements with enhanced animations and dynamic tear shape */}
      <div 
        className={cn(
          "absolute inset-0 -z-10 bg-brand-light-gray overflow-hidden",
          !isScrolled ? 'hero-tear-shape perspective-container' : ''
        )}
        style={{
          borderRadius: !isScrolled ? getTearShapeStyle() : undefined,
          transition: `all ${getTransitionDuration()} var(--ease-smooth)`,
          transform: !isScrolled ? `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * -2}deg)` : 'none'
        }}
      >
        <div 
          className="absolute -right-20 -top-20 w-96 h-96 bg-brand-accent-blue/20 rounded-full blur-3xl animate-pulse opacity-70 perspective-item"
          style={{
            transform: !isScrolled ? `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -15}px)` : 'none',
            transition: `transform ${getTransitionDuration()} var(--ease-smooth)`
          }}
        ></div>
        <div 
          className="absolute -left-20 top-1/2 w-80 h-80 bg-brand-accent-violet/20 rounded-full blur-3xl animate-float perspective-item"
          style={{
            transform: !isScrolled ? `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)` : 'none',
            transition: `transform ${getTransitionDuration()} var(--ease-smooth)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-brand-accent-yellow/10 rounded-full blur-2xl animate-float perspective-item" 
          style={{
            animationDelay: '2s',
            transform: !isScrolled ? `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)` : 'none',
            transition: `transform ${getTransitionDuration()} var(--ease-smooth)`
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12">
            <div className="animate-fade-in-up">
              {/* Headline with text reveal animation */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-300 initial-clear-content relative z-20 mt-10 text-reveal-container">
                <span className={cn("text-reveal", isRevealed && "active")} style={{ transitionDelay: '0.1s' }}>
                  Empower Your Brand 
                </span>{" "}
                <span className={cn("text-reveal", isRevealed && "active")} style={{ transitionDelay: '0.3s' }}>
                  with Digital{" "}
                </span>
                <span className={cn("text-gradient relative inline-block text-reveal", isRevealed && "active")} style={{ transitionDelay: '0.5s' }}>
                  Innovation
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-brand-accent-blue to-brand-accent-violet animate-wave"></span>
                </span>
              </h1>
              
              {/* The rest of the content will be blurred initially (blur-on-load class) */}
              <div className={isScrolled ? '' : 'blur-on-load'}>
                <p className={cn(
                  "text-lg md:text-xl text-gray-600 mb-8 font-medium",
                  scrollDirection === 'down' ? 'scroll-down-reveal' : 'scroll-up-reveal',
                  (isScrolled || isRevealed) && 'scroll-reveal-active'
                )} 
                style={{
                  transitionDelay: '0.2s',
                  transition: `all ${getTransitionDuration()} var(--ease-smooth)`
                }}>
                  Brand Engine is a full-service digital agency that transforms ideas into scalable experiences through smart branding, marketing, and automation solutions.
                </p>
                <div className={cn(
                  "flex flex-col sm:flex-row gap-4 relative",
                  scrollDirection === 'down' ? 'scroll-down-reveal' : 'scroll-up-reveal',
                  (isScrolled || isRevealed) && 'scroll-reveal-active'
                )} 
                style={{
                  transitionDelay: '0.4s',
                  transition: `all ${getTransitionDuration()} var(--ease-smooth)`
                }}>
                  {/* Add a glass overlay until scrolled */}
                  {!isScrolled && <div className="absolute inset-0 bg-white/30 backdrop-blur-md z-10 pointer-events-none transition-all duration-500"></div>}
                  
                  <Button 
                    size="lg" 
                    className={cn(
                      "btn-brand-primary overflow-hidden group velocity-scale", 
                      !isScrolled ? 'cta-disabled' : 'cta-enabled'
                    )} 
                    onMouseEnter={() => isScrolled && setHovered('primary')} 
                    onMouseLeave={() => setHovered(null)} 
                    disabled={!isScrolled}
                    style={{
                      transform: hovered === 'primary' ? 'scale(1.05)' : 'scale(1)',
                      transition: `all ${getTransitionDuration()} var(--ease-bounce)`
                    }}
                  >
                    <span className="relative z-10">Explore Our Services</span>
                    <span className={cn(
                      "absolute inset-0 bg-brand-accent-blue transition-opacity duration-300",
                      hovered === 'primary' ? 'opacity-100' : 'opacity-0'
                    )}></span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className={cn(
                      "border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue/10 velocity-scale", 
                      !isScrolled ? 'cta-disabled' : 'cta-enabled'
                    )} 
                    onMouseEnter={() => isScrolled && setHovered('secondary')} 
                    onMouseLeave={() => setHovered(null)} 
                    disabled={!isScrolled}
                    style={{
                      transform: hovered === 'secondary' ? 'scale(1.05)' : 'scale(1)',
                      transition: `all ${getTransitionDuration()} var(--ease-bounce)`
                    }}
                  >
                    <span className="relative z-10">View Our Work</span>
                    <span className={cn(
                      "absolute bottom-0 left-0 h-[2px] bg-brand-accent-blue transition-all duration-300",
                      hovered === 'secondary' ? 'w-full' : 'w-0'
                    )}></span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "relative",
            isScrolled ? '' : 'blur-on-load',
            scrollDirection === 'down' ? 'scroll-down-reveal' : 'scroll-up-reveal',
            (isScrolled || isRevealed) && 'scroll-reveal-active'
          )}>
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl animate-float perspective-item"
              style={{
                transform: !isScrolled ? `translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * -10}px)` : 'none',
                transition: `transform ${getTransitionDuration()} var(--ease-smooth)`
              }}
            >
              <div className="bg-gradient-to-tr from-brand-primary to-brand-accent-blue p-1">
                <div className="bg-white rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {[1, 2, 3, 4, 5, 6].map(item => (
                      <div 
                        key={item} 
                        className="aspect-square rounded-lg flex items-center justify-center bg-gradient-to-br from-brand-light-gray to-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer perspective-item" 
                        style={{
                          animationDelay: `${item * 100}ms`,
                          transform: !isScrolled ? `translateZ(${item * 5}px)` : 'none',
                          transition: `transform ${getTransitionDuration()} var(--ease-smooth)`
                        }}
                      >
                        <div className={cn(
                          "w-12 h-12 rounded-full transition-all duration-300 hover:scale-110",
                          item % 3 === 0 ? 'bg-brand-primary' : item % 3 === 1 ? 'bg-brand-accent-blue' : 'bg-brand-accent-violet'
                        )}></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-brand-light-gray rounded-lg p-4 flex items-center">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 animate-pulse">
                      BE
                    </div>
                    <div>
                      <div className="h-3 bg-gray-200 rounded-full w-48 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-32"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-accent-violet rounded-xl rotate-12 animate-float perspective-item"
              style={{
                transform: !isScrolled ? `translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * 15}px) rotate(12deg)` : 'rotate(12deg)',
                transition: `transform ${getTransitionDuration()} var(--ease-smooth)`
              }}
            ></div>
            <div 
              className="absolute -top-6 -right-6 w-16 h-16 bg-brand-accent-blue rounded-xl -rotate-12 animate-float perspective-item" 
              style={{
                animationDelay: '1s',
                transform: !isScrolled ? `translateX(${mousePosition.x * -12}px) translateY(${mousePosition.y * -12}px) rotate(-12deg)` : 'rotate(-12deg)',
                transition: `transform ${getTransitionDuration()} var(--ease-smooth)`
              }}
            ></div>
          </div>
        </div>
        
        <div className={cn(
          "mt-16 md:mt-24 flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left",
          isScrolled ? '' : 'blur-on-load',
          scrollDirection === 'down' ? 'scroll-down-reveal' : 'scroll-up-reveal',
          (isScrolled || isRevealed) && 'scroll-reveal-active'
        )}
        style={{
          transitionDelay: '0.6s',
          transition: `all ${getTransitionDuration()} var(--ease-smooth)`
        }}>
          <p className="text-xl font-medium text-brand-text w-full md:w-auto">Trusted by innovative brands worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => (
              <div 
                key={company} 
                className={cn(
                  "text-gray-400 font-heading font-bold text-xl md:text-2xl cursor-pointer hover:text-brand-primary transition-colors duration-300",
                  isRevealed ? 'opacity-100' : 'opacity-0'
                )} 
                style={{
                  transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 150 + 800}ms`,
                  transition: `all ${getTransitionDuration()} var(--ease-smooth)`
                }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
