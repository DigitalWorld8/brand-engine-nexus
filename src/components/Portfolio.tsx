
import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Portfolio = () => {
  // Use the global scroll reveal hook
  useScrollReveal();
  
  const projects = [
    {
      title: 'AI Customer Service Bot',
      category: 'AI Solutions',
      image: 'bg-brand-accent-violet/20',
    },
    {
      title: 'Booking System Integration',
      category: 'Digital Automation',
      image: 'bg-brand-secondary/20',
    },
    {
      title: 'E-Commerce Transformation',
      category: 'Digital Transformation',
      image: 'bg-brand-primary/20',
    },
    {
      title: 'Luxury Brand Identity',
      category: 'Design & Branding',
      image: 'bg-brand-accent-blue/20',
    }
  ];

  return (
    <section id="portfolio" className="section bg-brand-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 scroll-fade-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Explore our diverse range of projects showcasing our expertise in branding, marketing, and digital solutions.
            </p>
          </div>
          <a href="#" className="mt-4 md:mt-0 text-brand-primary hover:text-brand-accent-blue underline underline-offset-4 font-medium">
            View All Projects
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 scroll-fade-up">
              <div className={`aspect-[16/9] ${project.image}`}></div>
              <div className="p-6 bg-white">
                <div className="text-sm text-brand-accent-blue font-medium mb-1">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <a href="#" className="inline-flex items-center font-medium text-brand-primary hover:text-brand-accent-blue">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
