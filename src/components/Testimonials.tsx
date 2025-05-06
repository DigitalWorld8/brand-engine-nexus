
import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { useScrollReveal } from '@/hooks/useScrollReveal';

type TestimonialItem = {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  category: string;
};

const testimonials: TestimonialItem[] = [
  {
    content: "BrandEngine completely transformed our digital presence. Their AI solutions increased our customer engagement by 40% in just two months.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechVision Inc.",
    avatar: "/placeholder.svg",
    category: "AI Solutions",
  },
  {
    content: "The team at BrandEngine produced a brand identity that perfectly captured our company's vision. Their attention to detail is unmatched.",
    author: "Michael Chen",
    role: "CEO",
    company: "Nexus Innovations",
    avatar: "/placeholder.svg",
    category: "Design & Branding",
  },
  {
    content: "Our e-commerce site redesign by BrandEngine resulted in a 65% increase in conversions. Best investment we've made this year!",
    author: "Lina Almasi",
    role: "E-Commerce Manager",
    company: "Fashion Forward",
    avatar: "/placeholder.svg",
    category: "Digital Transformation",
  },
  {
    content: "The multilingual capabilities BrandEngine built into our website have opened up entirely new markets for our business.",
    author: "Ahmed Al-Farsi",
    role: "International Sales Director",
    company: "Global Connect",
    avatar: "/placeholder.svg",
    category: "Digital Services",
  }
];

const Testimonials = () => {
  // Use the global scroll reveal hook
  useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-brand-light-gray overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-brand-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute right-20 top-20 w-80 h-80 bg-brand-accent-violet/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16 transition-all duration-1000 scroll-fade-up"
        >
          <Badge variant="outline" className="mb-3 border-brand-primary text-brand-primary px-3 py-1">
            SUCCESS STORIES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say About <span className="text-gradient">BrandEngine</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—hear from some of our satisfied clients about how BrandEngine has helped transform their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-fade-in">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-brand-accent-blue/30' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent-blue"
                style={{
                  transform: activeIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.6s ease-out'
                }}
              ></div>
              <CardContent className="pt-8 relative z-10">
                <Quote className={`text-brand-primary/20 w-10 h-10 mb-4 absolute top-6 right-6 transition-all duration-300 ${
                  activeIndex === index ? 'text-brand-primary/50 scale-110' : ''
                }`} />
                
                <Badge variant="outline" className="mb-4 bg-brand-light-gray text-brand-primary text-xs">
                  {testimonial.category}
                </Badge>
                
                <p className="mb-6 text-gray-700 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <Avatar className={`h-10 w-10 mr-4 border-2 transition-all duration-300 ${
                    activeIndex === index ? 'border-brand-accent-blue' : 'border-brand-accent-blue/20'
                  }`}>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-brand-primary text-white">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-brand-text">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple dot indicators for active testimonial */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? 'bg-brand-primary w-6' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
