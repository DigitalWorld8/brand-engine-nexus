
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

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
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-brand-light-gray overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-brand-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute right-20 top-20 w-80 h-80 bg-brand-accent-violet/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent-blue"></div>
              <CardContent className="pt-8">
                <Quote className="text-brand-primary/20 w-10 h-10 mb-4 absolute top-6 right-6 group-hover:text-brand-primary/40 transition-colors" />
                
                <Badge variant="outline" className="mb-4 bg-brand-light-gray text-brand-primary text-xs">
                  {testimonial.category}
                </Badge>
                
                <p className="mb-6 text-gray-700 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4 border-2 border-brand-accent-blue/20">
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
      </div>
    </section>
  );
};

export default Testimonials;
