
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Slider } from "@/components/ui/slider";

type TestimonialItem = {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  category: string;
  rating: number;
};

const testimonials: TestimonialItem[] = [
  {
    content: "BrandEngine completely transformed our digital presence. Their AI solutions increased our customer engagement by 40% in just two months. The team's expertise and dedication made the entire process seamless.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechVision Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    category: "AI Solutions",
    rating: 5,
  },
  {
    content: "The team at BrandEngine produced a brand identity that perfectly captured our company's vision. Their attention to detail is unmatched and they consistently delivered beyond our expectations.",
    author: "Michael Chen",
    role: "CEO",
    company: "Nexus Innovations",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop",
    category: "Design & Branding",
    rating: 4.5,
  },
  {
    content: "Our e-commerce site redesign by BrandEngine resulted in a 65% increase in conversions. Best investment we've made this year! Their strategists understood our market needs perfectly.",
    author: "Lina Almasi",
    role: "E-Commerce Manager",
    company: "Fashion Forward",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100&auto=format&fit=crop",
    category: "Digital Transformation",
    rating: 5,
  },
  {
    content: "The multilingual capabilities BrandEngine built into our website have opened up entirely new markets for our business. Their comprehensive approach to global marketing is exceptional.",
    author: "Ahmed Al-Farsi",
    role: "International Sales Director",
    company: "Global Connect",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    category: "Digital Services",
    rating: 4.5,
  },
  {
    content: "BrandEngine's data-driven approach to our marketing campaign delivered measurable results from day one. Their analytics dashboard makes it easy to track ROI in real-time.",
    author: "Elena Rodriguez",
    role: "CMO",
    company: "DataPrime Analytics",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=100&auto=format&fit=crop",
    category: "Digital Marketing",
    rating: 5,
  },
  {
    content: "We were impressed by how quickly BrandEngine understood our complex product offering and translated it into clear, compelling messaging that resonates with our target audience.",
    author: "Daniel Kim",
    role: "Product Director",
    company: "TechFlow Systems",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    category: "Content Strategy",
    rating: 4.5,
  }
];

const categories = Array.from(new Set(testimonials.map(t => t.category)));

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`star-${i}`} size={16} fill="currentColor" />
      ))}
      {hasHalfStar && <StarHalf size={16} fill="currentColor" />}
    </div>
  );
};

const TESTIMONIALS_PER_VIEW = {
  mobile: 1,
  tablet: 2,
  desktop: 3
};

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

  const filteredTestimonials = activeCategory 
    ? testimonials.filter(t => t.category === activeCategory)
    : testimonials;

  const maxPages = Math.ceil(filteredTestimonials.length / TESTIMONIALS_PER_VIEW.desktop);
  
  const handlePrevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : maxPages - 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage(prev => (prev < maxPages - 1 ? prev + 1 : 0));
  };

  const visibleTestimonials = filteredTestimonials.slice(
    currentPage * TESTIMONIALS_PER_VIEW.desktop, 
    (currentPage + 1) * TESTIMONIALS_PER_VIEW.desktop
  );

  const handleSliderChange = (value: number[]) => {
    setCurrentPage(Math.round((value[0] / 100) * (maxPages - 1)));
  };

  const toggleExpanded = (index: number) => {
    setIsExpanded(isExpanded === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-brand-light-gray overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-brand-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute right-20 top-20 w-80 h-80 bg-brand-accent-violet/10 rounded-full blur-3xl"></div>
        <div className="absolute left-1/3 top-1/2 w-64 h-64 bg-brand-secondary/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3 border-brand-primary text-brand-primary px-3 py-1">
            CLIENT STORIES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say About <span className="text-gradient">BrandEngine</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—hear from some of our satisfied clients about how BrandEngine has helped transform their businesses.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Badge 
            variant={activeCategory === null ? "default" : "outline"}
            className="px-4 py-1.5 cursor-pointer text-sm hover:bg-brand-primary hover:text-white transition-colors"
            onClick={() => setActiveCategory(null)}
          >
            All
          </Badge>
          {categories.map((category, idx) => (
            <Badge 
              key={idx}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-4 py-1.5 cursor-pointer text-sm transition-colors ${
                activeCategory === category 
                  ? "bg-brand-primary text-white" 
                  : "hover:bg-brand-primary/10"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Testimonial navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrevPage} 
              className="w-10 h-10 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNextPage}
              className="w-10 h-10 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="hidden md:block w-1/3">
            <Slider 
              defaultValue={[0]} 
              max={100} 
              step={1}
              value={[currentPage / (maxPages - 1 || 1) * 100]}
              onValueChange={handleSliderChange}
              className="cursor-pointer"
            />
          </div>
          
          <div className="text-sm text-gray-500">
            {currentPage + 1} / {maxPages}
          </div>
        </div>

        {/* Testimonials carousel/grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card 
              key={`${currentPage}-${index}`}
              className="relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-lg border-t-4 border-t-brand-primary"
            >
              <div className="absolute top-3 right-3 z-10">
                <RatingStars rating={testimonial.rating} />
              </div>
              
              <CardContent className="pt-8">
                <Quote className="text-brand-primary/20 w-10 h-10 mb-4 absolute top-6 left-6 group-hover:text-brand-primary/40 transition-colors" />
                
                <Badge variant="outline" className="mb-4 bg-brand-light-gray text-brand-primary text-xs">
                  {testimonial.category}
                </Badge>
                
                <Collapsible open={isExpanded === index}>
                  <CollapsibleTrigger asChild>
                    <div 
                      className="mb-6 text-gray-700 italic cursor-pointer"
                      onClick={() => toggleExpanded(index)}
                    >
                      <p className={isExpanded === index ? "" : "line-clamp-4"}>
                        "{testimonial.content}"
                      </p>
                      {testimonial.content.length > 150 && isExpanded !== index && (
                        <span className="text-brand-primary text-sm font-medium mt-2 block">
                          Read more
                        </span>
                      )}
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="mb-6">
                      <span 
                        className="text-brand-primary text-sm font-medium block mt-2 cursor-pointer" 
                        onClick={() => toggleExpanded(index)}
                      >
                        Show less
                      </span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-brand-accent-blue/20">
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
        
        {/* Mobile pagination dots */}
        <div className="flex justify-center items-center gap-2 mt-8 md:hidden">
          {Array.from({ length: maxPages }).map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentPage 
                ? "bg-brand-primary w-8" 
                : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial page ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Testimonial action */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-brand-primary mb-4">
            Ready to transform your brand's digital presence?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
