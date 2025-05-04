
import React from 'react';
import { Button } from './ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from './ui/card';

const CTABanner = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section 
      ref={ref} 
      className={`py-20 px-4 relative overflow-hidden ${isVisible ? 'reveal active' : 'reveal'}`}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/80 via-brand-accent-violet to-brand-accent-blue -z-10"></div>
      
      {/* Pattern Background - Fixed SVG encoding */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 blur-lg animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Card className="border-none shadow-xl bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Ready to Transform <span className="text-white">Your Business?</span>
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Take the first step toward digital excellence with our innovative solutions. 
                  Our team of experts is ready to help you achieve your goals.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  {["Strategy", "Innovation", "Results", "Support"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4 md:min-w-[240px]">
                <Button 
                  size="lg" 
                  className="bg-white text-brand-primary hover:bg-white/90 transition-all group relative overflow-hidden"
                >
                  <span className="relative z-10">Schedule a Consultation</span>
                  <span className="absolute inset-0 bg-brand-accent-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10 group"
                >
                  View Our Process 
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="mt-4 text-center">
                  <p className="text-white/75 text-sm">Join 200+ satisfied clients</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTABanner;
