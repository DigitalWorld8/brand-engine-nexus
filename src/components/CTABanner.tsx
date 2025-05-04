
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from './ui/card';

interface CTABannerProps {
  variant?: 'gradient' | 'dark' | 'purple-dots';
  title?: string;
  subtitle?: string;
  tags?: string[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  leftSideCTA?: React.ReactNode;
  rightSideCTA?: React.ReactNode;
}

const CTABanner = ({
  variant = 'gradient',
  title = 'Ready to Transform Your Business?',
  subtitle = 'Take the first step toward digital excellence with our innovative solutions. Our team of experts is ready to help you achieve your goals.',
  tags = ["Strategy", "Innovation", "Results", "Support"],
  primaryButtonText = 'Schedule a Consultation',
  secondaryButtonText = 'View Our Process',
  leftSideCTA,
  rightSideCTA
}: CTABannerProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  // Define styles based on variant
  const bgStyles = {
    gradient: 'bg-brand-light-gray',
    dark: 'bg-brand-primary',
    'purple-dots': 'bg-gradient-to-tr from-brand-secondary/20 to-brand-accent-violet/30'
  };

  const patternStyles = {
    gradient: 'opacity-10',
    dark: 'opacity-5',
    'purple-dots': 'opacity-40'
  };

  const cardStyles = {
    gradient: 'border-brand-primary/10 shadow-md bg-white',
    dark: 'border-brand-accent-blue/20 shadow-lg bg-brand-primary/95 text-white',
    'purple-dots': 'border-brand-accent-violet/20 shadow-lg bg-white/95'
  };

  const tagStyles = {
    gradient: 'bg-brand-light-gray text-gray-600',
    dark: 'bg-brand-primary/80 text-brand-accent-blue/90',
    'purple-dots': 'bg-brand-accent-violet/10 text-brand-accent-violet'
  };

  const primaryButtonStyles = {
    gradient: 'bg-brand-primary text-white hover:bg-brand-accent-blue hover:text-white',
    dark: 'bg-brand-accent-blue text-white hover:bg-brand-accent-violet hover:text-white',
    'purple-dots': 'bg-brand-accent-violet text-white hover:bg-brand-primary hover:text-white'
  };

  const secondaryButtonStyles = {
    gradient: 'border-brand-primary text-brand-primary hover:bg-brand-primary/5',
    dark: 'border-white text-white hover:bg-white/10',
    'purple-dots': 'border-brand-accent-violet text-brand-accent-violet hover:bg-brand-accent-violet/10'
  };

  const titleStyles = {
    gradient: 'text-brand-primary',
    dark: 'text-white',
    'purple-dots': 'text-brand-primary'
  };

  const accentStyles = {
    gradient: 'text-brand-secondary',
    dark: 'text-brand-accent-blue',
    'purple-dots': 'text-brand-accent-violet'
  };

  const subtitleStyles = {
    gradient: 'text-gray-600',
    dark: 'text-gray-200',
    'purple-dots': 'text-gray-600'
  };

  const clientTextStyles = {
    gradient: 'text-gray-500',
    dark: 'text-gray-300',
    'purple-dots': 'text-gray-500'
  };

  const sideCTAStyles = {
    gradient: 'bg-white/80 backdrop-blur-sm border border-brand-primary/10',
    dark: 'bg-brand-primary/80 backdrop-blur-sm border border-brand-accent-blue/20',
    'purple-dots': 'bg-white/80 backdrop-blur-sm border border-brand-accent-violet/20'
  };

  return (
    <section 
      ref={ref} 
      className={`py-20 px-4 relative overflow-hidden ${isVisible ? 'reveal active' : 'reveal'}`}
    >
      {/* Background */}
      <div className={`absolute inset-0 ${bgStyles[variant]} -z-10`}></div>
      
      {/* Subtle Pattern with conditional rendering for purple dots */}
      {variant === 'purple-dots' ? (
        <div className="absolute inset-0 -z-5">
          {/* Purple Dot pattern */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-brand-accent-violet animate-float"
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={`absolute top-0 left-0 w-full h-full ${patternStyles[variant]} -z-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B1464' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      )}
      
      {/* Side CTAs */}
      <div className="max-w-7xl mx-auto relative z-10 flex justify-between items-center">
        {/* Left Side CTA */}
        {leftSideCTA && (
          <div className="hidden lg:block absolute left-0 -translate-x-1/2 transform">
            <div className={`rounded-lg p-4 ${sideCTAStyles[variant]} shadow-lg rotate-[-3deg] animate-float`}>
              {leftSideCTA}
            </div>
          </div>
        )}
        
        {/* Main Card */}
        <Card className={`${cardStyles[variant]} w-full`}>
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 leading-tight ${titleStyles[variant]}`}>
                  <span>{title.split(' ').slice(0, -1).join(' ')} </span>
                  <span className={accentStyles[variant]}>{title.split(' ').slice(-1)}</span>
                </h2>
                <p className={`text-lg mb-8 font-medium ${subtitleStyles[variant]}`}>
                  {subtitle}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  {tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${tagStyles[variant]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4 md:min-w-[240px]">
                <Button 
                  size="lg" 
                  className={`${primaryButtonStyles[variant]} transition-all group relative overflow-hidden font-semibold`}
                >
                  <span className="relative z-10">{primaryButtonText}</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className={`${secondaryButtonStyles[variant]} group font-semibold`}
                >
                  {secondaryButtonText}
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="mt-4 text-center">
                  <p className={`text-sm font-medium ${clientTextStyles[variant]}`}>Join 200+ satisfied clients</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Right Side CTA */}
        {rightSideCTA && (
          <div className="hidden lg:block absolute right-0 translate-x-1/2 transform">
            <div className={`rounded-lg p-4 ${sideCTAStyles[variant]} shadow-lg rotate-[3deg] animate-float`}>
              {rightSideCTA}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTABanner;
