
import React from 'react';
import { Button } from '@/components/ui/button';
import { EngineAssembly } from './engine/EngineComponents';
import { useEngineReveal } from '@/hooks/useEngineReveal';

const Hero = () => {
  // Initialize the engine reveal mechanism
  useEngineReveal();
  
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-brand-light-gray overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-accent-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 w-80 h-80 bg-brand-accent-violet/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-12">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Empower Your Brand with Digital <span className="text-gradient">Innovation</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">
                Brand Engine is a full-service digital agency that transforms ideas into scalable experiences through smart branding, marketing, and automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-brand-primary hover:scale-105 transition-transform">
                  Explore Our Services
                </Button>
                <Button size="lg" variant="outline" className="border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue/10 hover:scale-105 transition-transform">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <div className="bg-gradient-to-tr from-brand-primary to-brand-accent-blue p-1">
                <div className="bg-white rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div 
                        key={item}
                        className="aspect-square rounded-lg flex items-center justify-center bg-gradient-to-br from-brand-light-gray to-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                      >
                        <div className={`w-12 h-12 rounded-full ${
                          item % 3 === 0 ? 'bg-brand-primary' : 
                          item % 3 === 1 ? 'bg-brand-accent-blue' : 
                          'bg-brand-accent-violet'
                        }`}></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-brand-light-gray rounded-lg p-4 flex items-center">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
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
            
            {/* Engine assembly components */}
            <EngineAssembly className="absolute h-full w-full top-0 left-0 pointer-events-none" />
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-accent-violet rounded-xl rotate-12 animate-float"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-accent-blue rounded-xl -rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left">
          <p className="text-xl font-medium text-brand-text w-full md:w-auto">Trusted by innovative brands worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => (
              <div 
                key={company} 
                className="text-gray-400 font-heading font-bold text-xl md:text-2xl opacity-0 animate-fade-in-up" 
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
