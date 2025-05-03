
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const capabilities = [
    'Bilingual Service (English & Arabic)',
    'Full-Service Digital Agency',
    'Industry-Specific Expertise',
    'Custom AI & Automation Solutions',
    'Scalable Digital Experiences',
    'End-to-End Project Management'
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-72 h-72 rounded-full bg-brand-accent-blue/10 blur-2xl"></div>
              <div className="absolute -right-6 -bottom-6 w-72 h-72 rounded-full bg-brand-accent-violet/10 blur-2xl"></div>
              
              <div className="relative bg-gradient-to-tr from-brand-primary to-brand-accent-blue p-1 rounded-2xl shadow-xl">
                <div className="bg-white p-8 rounded-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[4/3] bg-brand-light-gray rounded-lg"></div>
                    <div className="aspect-[4/3] bg-brand-primary/10 rounded-lg"></div>
                    <div className="aspect-[4/3] bg-brand-accent-violet/10 rounded-lg"></div>
                    <div className="aspect-[4/3] bg-brand-accent-blue/10 rounded-lg"></div>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                        BE
                      </div>
                      <div>
                        <div className="font-bold">Brand Engine</div>
                        <div className="text-sm text-gray-500">Digital Innovation</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((dot) => (
                        <div key={dot} className={`w-3 h-3 rounded-full ${dot === 2 ? 'bg-brand-primary' : 'bg-gray-300'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-gradient">Brand Engine</span>
            </h2>
            
            <p className="text-lg text-gray-600">
              Brand Engine is a full-service digital agency that empowers businesses through smart branding, marketing, and automation solutions. With a bold, bilingual approach and deep expertise across industries, we transform ideas into scalable digital experiences.
            </p>
            
            <p className="text-lg text-gray-600">
              Whether you're launching, growing, or streamlining, Brand Engine is your partner in achieving more through innovation, design, and digital strategy.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-accent-blue" />
                  <span className="font-medium">{capability}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center space-x-4">
              <div className="w-16 h-16 bg-brand-light-gray rounded-full flex items-center justify-center">
                <span className="font-bold text-brand-primary">10+</span>
              </div>
              <div>
                <p className="font-medium">Years of Experience</p>
                <p className="text-gray-600">Delivering Digital Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
