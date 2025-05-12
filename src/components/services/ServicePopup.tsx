
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${service.color}`}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="services">Our Services</TabsTrigger>
              <TabsTrigger value="process">Our Process</TabsTrigger>
            </TabsList>
            <TabsContent value="services" className="space-y-4">
              {service.services.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <Badge variant="outline" className="bg-white">Core Service</Badge>
                  </div>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="process">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-brand-primary/10 text-brand-primary font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-lg">Discovery & Assessment</h3>
                    <p className="text-gray-600">We begin with a thorough consultation to understand your needs and goals.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brand-primary/10 text-brand-primary font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-lg">Strategic Planning</h3>
                    <p className="text-gray-600">Our team creates a tailored implementation plan with clear milestones.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brand-primary/10 text-brand-primary font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-lg">Implementation</h3>
                    <p className="text-gray-600">We execute with precision, keeping you informed at every step.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brand-primary/10 text-brand-primary font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-lg">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous maintenance and optimization after launch.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <Button variant="outline" onClick={onClose}>Close</Button>
          <Button className="gap-2">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServicePopup;
