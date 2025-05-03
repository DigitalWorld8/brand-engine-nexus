
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Transformation',
      category: 'Digital Transformation',
      image: 'bg-brand-primary/20',
    },
    {
      title: 'Luxury Brand Identity',
      category: 'Design & Branding',
      image: 'bg-brand-accent-blue/20',
    },
    {
      title: 'AI Customer Service Bot',
      category: 'AI Solutions',
      image: 'bg-brand-accent-violet/20',
    },
    {
      title: 'Booking System Integration',
      category: 'Digital Automation',
      image: 'bg-brand-secondary/20',
    }
  ];

  return (
    <section id="portfolio" className="section bg-brand-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
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
            <div key={index} className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className={`aspect-[16/9] ${project.image} group-hover:scale-105 transition-transform duration-500`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <div className="text-sm font-medium mb-1 opacity-75">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
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
