import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useIsMobile } from '@/hooks/use-mobile';
const Hero = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const {
    isScrolled
  } = useNavbarScroll();
  const isMobile = useIsMobile();
  return <section className={`relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden mx-0 my-[25px] px-0 py-[280px] ${!isScrolled && !isMobile ? 'hero-tear-shape' : ''}`}>
      {/* Background elements with enhanced animations */}
      <div className={`absolute inset-0 -z-10 bg-brand-light-gray overflow-hidden ${!isScrolled && !isMobile ? 'hero-tear-shape' : ''}`}>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-accent-blue/20 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute -left-20 top-1/2 w-80 h-80 bg-brand-accent-violet/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-brand-accent-yellow/10 rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center my-0 px-[2px] py-0 mx-0">
          <div className="space-y-8 md:pr-12">
            <div className={isMobile ? '' : 'animate-fade-in-up'}>
              {/* Headline - adjusted positioning to work better with tear shape */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-300 initial-clear-content relative z-20 mt-0">
                Empower Your Brand with Digital <span className="text-gradient relative inline-block">
                  Innovation
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-brand-accent-blue to-brand-accent-violet"></span>
                </span>
              </h1>
              
              {/* Make content visible on initial load with reduced blur - skip on mobile */}
              <div className={isScrolled || isMobile ? '' : 'initial-view-content'}>
                <p className={`text-lg md:text-xl text-gray-600 mb-8 font-medium ${isMobile ? '' : 'animate-fade-in-up'}`} style={!isMobile ? {
                animationDelay: '0.2s'
              } : {}}>
                  Brand Engine is a full-service digital agency that transforms ideas into scalable experiences through smart branding, marketing, and automation solutions.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 ${isMobile ? '' : 'animate-fade-in-up'} relative`} style={!isMobile ? {
                animationDelay: '0.4s'
              } : {}}>
                  {/* Reduced glass overlay opacity for better visibility - not on mobile */}
                  {!isScrolled && !isMobile && <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10 pointer-events-none transition-all duration-500"></div>}
                  
                  <Button size="lg" className={`btn-brand-primary hover:scale-105 transition-transform relative overflow-hidden group ${!isScrolled && !isMobile ? 'cta-semi-active' : 'cta-enabled'}`} onMouseEnter={() => setHovered('primary')} onMouseLeave={() => setHovered(null)}>
                    <span className="relative z-10">Explore Our Services</span>
                    {hovered === 'primary' && <span className="absolute inset-0 bg-brand-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>}
                  </Button>
                  <Button size="lg" variant="outline" className={`border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue/10 hover:scale-105 transition-all ${!isScrolled && !isMobile ? 'cta-semi-active' : 'cta-enabled'}`} onMouseEnter={() => setHovered('secondary')} onMouseLeave={() => setHovered(null)}>
                    <span className="relative z-10">View Our Work</span>
                    {hovered === 'secondary' && <span className="absolute bottom-0 left-0 h-[2px] bg-brand-accent-blue w-0 group-hover:w-full transition-all duration-300"></span>}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isScrolled || isMobile ? '' : 'initial-view-content'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <div className="bg-gradient-to-tr from-brand-primary to-brand-accent-blue p-1">
                <div className="bg-white rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {[1, 2, 3, 4, 5, 6].map(item => <div key={item} className="aspect-square rounded-lg flex items-center justify-center bg-gradient-to-br from-brand-light-gray to-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer" style={{
                    animationDelay: `${item * 100}ms`
                  }}>
                        <div className={`w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${item % 3 === 0 ? 'bg-brand-primary' : item % 3 === 1 ? 'bg-brand-accent-blue' : 'bg-brand-accent-violet'}`}></div>
                      </div>)}
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
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-accent-violet rounded-xl rotate-12 animate-float"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-accent-blue rounded-xl -rotate-12 animate-float" style={{
            animationDelay: '1s'
          }}></div>
          </div>
        </div>
        
        <div className={`mt-16 md:mt-24 flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left ${isScrolled || isMobile ? '' : 'initial-view-content'}`}>
          <p className="text-xl font-medium text-brand-text w-full md:w-auto">Trusted by innovative brands worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => <div key={company} className={`text-gray-400 font-heading font-bold text-xl md:text-2xl ${isMobile ? '' : 'opacity-0 animate-fade-in-up'} cursor-pointer hover:text-brand-primary transition-colors duration-300`} style={!isMobile ? {
            animationDelay: `${index * 150 + 600}ms`,
            animationFillMode: 'forwards'
          } : {}}>
                {company}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;