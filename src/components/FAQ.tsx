
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do you help businesses transition from traditional operations to digital?",
    answer: (
      <div className="space-y-3">
        <p>Our digital transformation process follows four key phases:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><span className="font-medium">Discovery & Assessment</span>: We analyze your current operations, identify digital opportunities, and outline transformation goals.</li>
          <li><span className="font-medium">Strategy Development</span>: We create a customized roadmap for integrating digital solutions that align with your business objectives.</li>
          <li><span className="font-medium">Implementation</span>: Our team executes the digital transformation plan, from website development to process automation.</li>
          <li><span className="font-medium">Support & Evolution</span>: We provide ongoing support and continuously optimize your digital assets to adapt to changing market conditions.</li>
        </ol>
      </div>
    ),
    category: "process"
  },
  {
    question: "What challenges should we expect when digitizing our business?",
    answer: (
      <div className="space-y-3">
        <p>Common challenges in digital transformation include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">Team Adaptation</span>: We provide training and change management strategies to help your team embrace new digital tools.</li>
          <li><span className="font-medium">Legacy Systems Integration</span>: Our technical experts create solutions to connect existing systems with new digital platforms.</li>
          <li><span className="font-medium">Data Migration</span>: We ensure secure and accurate transfer of business data to new digital environments.</li>
          <li><span className="font-medium">Customer Experience Consistency</span>: We design omnichannel experiences that maintain your brand quality across all touchpoints.</li>
        </ul>
      </div>
    ),
    category: "challenges"
  },
  {
    question: "How long does a typical digital transformation project take?",
    answer: (
      <div className="space-y-2">
        <p>The timeline varies based on your business complexity and transformation scope. Typically:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-medium">Small Projects</span> (website modernization, basic automation): 1-3 months</li>
          <li><span className="font-medium">Medium Projects</span> (e-commerce integration, multichannel marketing): 3-6 months</li>
          <li><span className="font-medium">Large Projects</span> (complete digital ecosystem transformation): 6-12+ months</li>
        </ul>
        <p className="mt-2">We work with you to prioritize initiatives and can implement changes in phases to deliver value sooner.</p>
      </div>
    ),
    category: "process"
  },
  {
    question: "How do you measure the success of digital transformation?",
    answer: (
      <div>
        <p>We establish clear KPIs aligned with your business goals, which may include:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <div className="bg-brand-light-gray p-3 rounded-lg">
            <p className="font-medium mb-1">Customer Experience</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Engagement metrics</li>
              <li>Conversion rates</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
          <div className="bg-brand-light-gray p-3 rounded-lg">
            <p className="font-medium mb-1">Operational Efficiency</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Process automation rates</li>
              <li>Reduced operational costs</li>
              <li>Faster service delivery</li>
            </ul>
          </div>
          <div className="bg-brand-light-gray p-3 rounded-lg">
            <p className="font-medium mb-1">Business Growth</p>
            <ul className="list-disc pl-5 text-sm">
              <li>New market reach</li>
              <li>Digital revenue streams</li>
              <li>Customer acquisition cost</li>
            </ul>
          </div>
          <div className="bg-brand-light-gray p-3 rounded-lg">
            <p className="font-medium mb-1">Innovation</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Speed to market</li>
              <li>Digital product adoption</li>
              <li>Technology implementation</li>
            </ul>
          </div>
        </div>
        <p className="mt-3">We provide regular reports and analytics dashboards to track these metrics throughout your transformation journey.</p>
      </div>
    ),
    category: "results"
  },
  {
    question: "What makes BrandEngine different from other digital agencies?",
    answer: (
      <div className="space-y-3">
        <p>BrandEngine stands out through our:</p>
        <div className="space-y-2">
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Dual-Language Expertise</p>
              <p className="text-sm text-gray-600">Full Arabic and English capabilities across all digital services.</p>
            </div>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">End-to-End Transformation</p>
              <p className="text-sm text-gray-600">Comprehensive services from strategy through implementation and beyond.</p>
            </div>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">AI & Automation Focus</p>
              <p className="text-sm text-gray-600">Cutting-edge technology solutions to maximize efficiency and competitiveness.</p>
            </div>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Business-First Approach</p>
              <p className="text-sm text-gray-600">Solutions driven by your business objectives, not just technology trends.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    category: "company"
  },
  {
    question: "Do you provide support after the digital transformation is complete?",
    answer: (
      <div className="space-y-3">
        <p>Absolutely. Digital transformation is an ongoing journey, not a one-time project. Our post-implementation support includes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">Technical Maintenance</span>: Regular updates, security patches, and system monitoring.</li>
          <li><span className="font-medium">Performance Optimization</span>: Continuous improvement based on user data and business metrics.</li>
          <li><span className="font-medium">Growth Planning</span>: Strategic consultations to identify new digital opportunities as your business evolves.</li>
          <li><span className="font-medium">Team Training</span>: Ongoing education for your staff to maximize the value of digital tools.</li>
        </ul>
        <p>We offer flexible support packages tailored to your specific needs and internal capabilities.</p>
      </div>
    ),
    category: "process"
  },
];

const categories = [
  { id: "all", label: "All Questions" },
  { id: "process", label: "Our Process" },
  { id: "challenges", label: "Common Challenges" },
  { id: "results", label: "Measuring Success" },
  { id: "company", label: "About BrandEngine" },
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredFAQs = activeTab === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeTab);

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-white overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-brand-accent-violet/10 rounded-full blur-3xl"></div>
        <div className="absolute left-20 bottom-40 w-80 h-80 bg-brand-accent-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3 border-brand-primary text-brand-primary px-3 py-1">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Digital <span className="text-gradient">Transformation</span> Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our approach to guiding businesses through the journey from traditional operations to digital excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <TabsList className="bg-brand-light-gray p-1 h-auto flex flex-wrap justify-center">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2 data-[state=active]:bg-white"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="bg-white rounded-lg shadow-md">
                <Accordion type="single" collapsible className="divide-y">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-none">
                      <AccordionTrigger className="py-5 px-6 hover:no-underline hover:bg-brand-light-gray/50 text-left">
                        <span className="font-medium text-lg">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-2 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Still have questions about digital transformation?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-medium transition-all hover:scale-105"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
