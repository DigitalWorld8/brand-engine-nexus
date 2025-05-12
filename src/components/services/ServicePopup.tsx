
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-auto relative overflow-hidden border"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <div className="p-6 border-b flex justify-between items-center">
              <div className="flex items-center gap-4">
                <motion.div 
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color}`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <Icon className="h-7 w-7 text-white" />
                </motion.div>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </Button>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.services.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold flex items-center">
                        <Check className="h-4 w-4 mr-2 text-brand-primary" />
                        {item.title}
                      </h4>
                      <Badge variant="outline" className="bg-white">Core</Badge>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm pl-6">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 flex justify-between items-center border-t">
              <Button variant="outline" onClick={onClose}>
                Back
              </Button>
              <Button className="bg-brand-primary hover:bg-brand-primary/90 group">
                <span>Contact Us</span> 
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicePopup;
