
import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold font-heading mb-6">
              Brand<span className="text-brand-accent-blue">Engine</span>
            </div>
            <p className="text-white/70 mb-6">
              Empowering businesses through smart branding, marketing, and automation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-accent-blue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-brand-accent-blue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-brand-accent-blue transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-brand-accent-blue transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Design & Branding</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to receive the latest insights and updates.</p>
            <form className="space-y-4">
              <div className="flex items-center">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 w-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-accent-blue/50"
                />
                <button 
                  type="submit" 
                  className="bg-brand-accent-blue hover:bg-brand-accent-blue/90 text-white rounded-r-md px-4 py-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">© {new Date().getFullYear()} Brand Engine. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
