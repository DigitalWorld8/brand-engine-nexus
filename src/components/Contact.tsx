
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    // Here you would normally send the form data to your backend
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Let's Create Something <span className="text-gradient">Amazing</span> Together
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 font-medium">
              Ready to transform your digital presence? Get in touch with us to discuss your project and discover how Brand Engine can help you achieve your goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-600 font-medium">info@brandengine.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent-blue/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-brand-accent-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-gray-600 font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent-violet/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-brand-accent-violet" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-gray-600 font-medium">123 Innovation St, Digital City</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold">
                  Company
                </label>
                <Input 
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-semibold">
                  Service You're Interested In
                </label>
                <select 
                  id="service"
                  name="service"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  <option value="branding">Design & Branding</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="ai">AI Solutions</option>
                  <option value="transformation">Digital Transformation</option>
                  <option value="automation">Digital Automation</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold">
                  Your Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
