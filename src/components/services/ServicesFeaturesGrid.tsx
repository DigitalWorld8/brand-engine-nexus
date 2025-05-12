
import React from 'react';
import { 
  Brain, 
  Settings, 
  BarChart3, 
  ShieldCheck 
} from 'lucide-react';
import ServiceFeature from './ServiceFeature';

const ServicesFeaturesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-20">
      <ServiceFeature 
        icon={Brain} 
        title="AI-Powered" 
        description="Leverage the latest in artificial intelligence to optimize your business processes" 
        gradient="from-purple-600 to-indigo-600"
        badges={["GPT-4", "Machine Learning"]}
      />
      <ServiceFeature 
        icon={Settings} 
        title="Customizable" 
        description="Solutions tailored to your specific industry needs and business goals" 
        gradient="from-blue-500 to-cyan-600"
        badges={["Flexible", "Adaptable"]}
      />
      <ServiceFeature 
        icon={BarChart3} 
        title="Data-Driven" 
        description="Make informed decisions with comprehensive analytics and reporting" 
        gradient="from-cyan-500 to-teal-600"
        badges={["Analytics", "Insights"]}
      />
      <ServiceFeature 
        icon={ShieldCheck} 
        title="Secure & Reliable" 
        description="Enterprise-grade security with continuous monitoring and support" 
        gradient="from-emerald-500 to-green-600"
        badges={["24/7 Support", "Enterprise"]}
      />
    </div>
  );
};

export default ServicesFeaturesGrid;
