import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NFePlusSection = () => {
  return (
    <section className="py-16 bg-card overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12 mb-10">
          {/* Left column - Header Text */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in">
            <Link to="/nfe-plus" className="inline-block hover:opacity-90 transition-opacity">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Sistema NFe+
              </h2>
            </Link>
            <p className="text-lg md:text-xl text-muted-foreground font-normal">
              Solução completa para emissão de notas fiscais
            </p>
          </div>
          
          {/* Right column - Image Container */}
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-card animate-fade-in">
            <img 
              src="/lovable-uploads/32c21c99-dc8c-4b2f-9324-3265919560f6.png" 
              alt="Sistema NFe+" 
              className="w-full h-auto max-w-full object-contain md:object-cover md:aspect-video"
            />
          </div>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <div className="flex justify-center animate-fade-in">
          <Link to="/nfe-plus" className="inline-block w-full max-w-sm">
            <Button className="w-full py-3 bg-gradient-primary hover:shadow-glow text-primary-foreground font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
              SAIBA MAIS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NFePlusSection;