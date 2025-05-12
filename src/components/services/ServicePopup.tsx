
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight, Clock, ArrowRightCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceCategory {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

interface ServicePopupProps {
  service: ServiceCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServicePopup = ({ service, isOpen, onClose }: ServicePopupProps) => {
  if (!service) return null;
  
  const Icon = service.icon;
  
  return (
    <div className={cn(
      "fixed inset-x-0 top-24 z-40 transition-all duration-500 flex justify-center",
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
    )}>
      <div className="w-full max-w-4xl mx-4">
        <div className="bg-white rounded-xl shadow-2xl border overflow-hidden">
          {/* Header */}
          <div className="p-6 pb-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color}`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="px-6 pb-6">
            <Tabs defaultValue="services" className="w-full mt-6">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="services" className="rounded-lg text-base">Our Services</TabsTrigger>
                <TabsTrigger value="process" className="rounded-lg text-base">Our Process</TabsTrigger>
              </TabsList>
              
              <TabsContent value="services" className="space-y-4 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-4">
                  {service.services.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 hover:bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 border border-transparent hover:border-brand-primary/20"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg flex items-center">
                          <Check className="h-4 w-4 mr-2 text-brand-primary" />
                          {item.title}
                        </h3>
                        <Badge variant="outline" className="bg-white">Core Service</Badge>
                      </div>
                      <p className="mt-2 text-gray-600 pl-6">{item.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="animate-fade-in">
                <div className="space-y-8 pt-2">
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent-blue to-brand-accent-violet"></div>
                    
                    <div className="space-y-12">
                      <div className="ml-12 relative">
                        <div className="absolute -left-12 top-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center">1</div>
                        <h3 className="font-semibold text-lg text-brand-primary">Discovery & Assessment</h3>
                        <p className="text-gray-600 mt-1">We begin with a thorough consultation to understand your needs and goals.</p>
                      </div>
                      
                      <div className="ml-12 relative">
                        <div className="absolute -left-12 top-0 w-8 h-8 bg-brand-secondary text-white rounded-full flex items-center justify-center">2</div>
                        <h3 className="font-semibold text-lg text-brand-secondary">Strategic Planning</h3>
                        <p className="text-gray-600 mt-1">Our team creates a tailored implementation plan with clear milestones.</p>
                      </div>
                      
                      <div className="ml-12 relative">
                        <div className="absolute -left-12 top-0 w-8 h-8 bg-brand-accent-blue text-white rounded-full flex items-center justify-center">3</div>
                        <h3 className="font-semibold text-lg text-brand-accent-blue">Implementation</h3>
                        <p className="text-gray-600 mt-1">We execute with precision, keeping you informed at every step.</p>
                      </div>
                      
                      <div className="ml-12 relative">
                        <div className="absolute -left-12 top-0 w-8 h-8 bg-brand-accent-violet text-white rounded-full flex items-center justify-center">4</div>
                        <h3 className="font-semibold text-lg text-brand-accent-violet">Ongoing Support</h3>
                        <p className="text-gray-600 mt-1">We provide continuous maintenance and optimization after launch.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-gray-50 p-6 flex justify-between items-center border-t">
            <Button variant="outline" onClick={onClose} className="hover:bg-white">Close</Button>
            <Button className="gap-2 bg-brand-primary hover:bg-brand-primary/90">
              Contact Us <ArrowRightCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/30 backdrop-blur-sm z-[-1] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
    </div>
  );
};

export default ServicePopup;
