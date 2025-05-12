
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight, Clock, ArrowRightCircle, X, CircleChevronRight } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState("services");
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimationComplete(false);
      const timer = setTimeout(() => {
        setIsAnimationComplete(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    // Reset tab when service changes
    if (service) {
      setActiveTab("services");
    }
  }, [service]);

  if (!service) return null;
  
  const Icon = service.icon;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-x-0 top-24 z-40 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="w-full max-w-4xl mx-4">
            <motion.div 
              className="bg-white rounded-xl shadow-2xl border overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color} transition-transform cursor-pointer`}
                    animate={{ 
                      rotate: isAnimationComplete ? [0, 360] : 0,
                      scale: isAnimationComplete ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      rotate: { duration: 2, ease: "easeInOut", repeat: 0 },
                      scale: { duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }
                    }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
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
                <Tabs defaultValue="services" value={activeTab} onValueChange={setActiveTab} className="w-full mt-6">
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="services" className="rounded-lg text-base">Our Services</TabsTrigger>
                    <TabsTrigger value="process" className="rounded-lg text-base">Our Process</TabsTrigger>
                  </TabsList>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TabsContent value="services" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {service.services.map((item, index) => (
                            <motion.div 
                              key={index} 
                              className="bg-gray-50 hover:bg-white rounded-xl p-4 hover:shadow-md transition-all duration-300 border border-transparent hover:border-brand-primary/20"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                              <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-lg flex items-center">
                                  <Check className="h-4 w-4 mr-2 text-brand-primary" />
                                  {item.title}
                                </h3>
                                <Badge variant="outline" className="bg-white">Core Service</Badge>
                              </div>
                              <p className="mt-2 text-gray-600 pl-6">{item.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="process" className="space-y-8 pt-2">
                        <div className="relative">
                          {/* Timeline line */}
                          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent-blue to-brand-accent-violet"></div>
                          
                          <div className="space-y-12">
                            {[
                              { 
                                step: 1, 
                                color: "bg-brand-primary", 
                                title: "Discovery & Assessment", 
                                description: "We begin with a thorough consultation to understand your needs and goals."
                              },
                              { 
                                step: 2, 
                                color: "bg-brand-secondary", 
                                title: "Strategic Planning", 
                                description: "Our team creates a tailored implementation plan with clear milestones."
                              },
                              { 
                                step: 3, 
                                color: "bg-brand-accent-blue", 
                                title: "Implementation", 
                                description: "We execute with precision, keeping you informed at every step."
                              },
                              { 
                                step: 4, 
                                color: "bg-brand-accent-violet", 
                                title: "Ongoing Support", 
                                description: "We provide continuous maintenance and optimization after launch."
                              }
                            ].map((step, index) => (
                              <motion.div 
                                key={index} 
                                className="ml-12 relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                              >
                                <motion.div 
                                  className={`absolute -left-12 top-0 w-8 h-8 ${step.color} text-white rounded-full flex items-center justify-center`}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  {step.step}
                                </motion.div>
                                <h3 className={`font-semibold text-lg ${step.color === "bg-brand-primary" ? "text-brand-primary" : 
                                            step.color === "bg-brand-secondary" ? "text-brand-secondary" : 
                                            step.color === "bg-brand-accent-blue" ? "text-brand-accent-blue" : "text-brand-accent-violet"}`}>
                                  {step.title}
                                </h3>
                                <p className="text-gray-600 mt-1">{step.description}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </motion.div>
                  </AnimatePresence>
                </Tabs>
              </div>
              
              <motion.div 
                className="bg-gray-50 p-6 flex justify-between items-center border-t"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button variant="outline" onClick={onClose} className="hover:bg-white group">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Close
                  </motion.span>
                </Button>
                <Button className="gap-2 bg-brand-primary hover:bg-brand-primary/90 group">
                  <span>Contact Us</span> 
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatDelay: 3, 
                      duration: 0.8, 
                      ease: "easeInOut" 
                    }}
                  >
                    <ArrowRightCircle className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicePopup;
