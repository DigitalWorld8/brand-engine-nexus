
import React, { useState, useEffect, useRef } from 'react';
import { Tabs } from "@/components/ui/tabs";
import useScrollReveal from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { industriesData } from './data/industriesData';
import IndustriesTabs from './IndustriesTabs';
import IndustryContent from './IndustryContent';
import IndustriesCTA from './IndustriesCTA';

const Industries = () => {
  const [activeTab, setActiveTab] = useState("Corporate");
  const [isChanging, setIsChanging] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Optimized scroll reveal for better performance
  const { ref: sectionRef, isVisible } = useScrollReveal({ 
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // Handle tab changes with optimized animation
  const handleTabChange = (value: string) => {
    setIsChanging(true);
    setActiveTab(value);
    
    // Reset changing state after animation completes
    setTimeout(() => {
      setIsChanging(false);
    }, 300);
  };

  // Apply transform hardware acceleration to content
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transform = 'translateZ(0)';
      contentRef.current.style.backfaceVisibility = 'hidden';
    }
  }, []);

  return (
    <section 
      id="industries" 
      className="section py-24 bg-white"
      ref={sectionRef}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-4 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "transform-gpu"
      )}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold mb-6 text-brand-primary",
            isVisible ? "industries-reveal active" : "industries-reveal"
          )}>Industries We Serve</h2>
          <p className={cn(
            "text-xl text-gray-600 max-w-3xl mx-auto",
            isVisible ? "industries-reveal active" : "industries-reveal",
            "transition-all delay-100"
          )}>
            Brand Engine delivers tailored solutions across diverse industries, bringing industry-specific expertise to every project.
          </p>
        </div>

        <Tabs 
          value={activeTab} 
          onValueChange={handleTabChange} 
          className="w-full"
        >
          <IndustriesTabs industries={industriesData} />

          <div 
            ref={contentRef} 
            className={cn(
              "transition-all duration-300 transform-gpu",
              isChanging ? "opacity-90 scale-[0.99]" : "opacity-100 scale-100"
            )}
          >
            {industriesData.map((industry) => (
              <IndustryContent 
                key={industry.name}
                industry={industry} 
                isChanging={isChanging} 
              />
            ))}
          </div>
        </Tabs>

        <IndustriesCTA />
      </div>
    </section>
  );
};

export default Industries;
