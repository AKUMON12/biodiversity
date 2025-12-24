import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Leaf } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToComponents = () => {
    document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bioluminescence/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ocean/20 rounded-full blur-[80px] animate-pulse-glow animation-delay-400" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber/10 rounded-full blur-[60px] animate-pulse-glow animation-delay-800" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <Leaf className="w-4 h-4 text-bioluminescence" />
          <span className="text-sm text-muted-foreground">Exploring the Web of Life</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-foreground">BIODIVERSITY</span>
          <br />
          <span className="text-gradient glow-text">The Pulse of Life</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          Discover the intricate tapestry of living organisms that make up our planet's 
          most precious resource — the diversity of life itself.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
          <Button variant="hero" size="xl" onClick={scrollToComponents}>
            <span>Scroll to Evolve</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-bioluminescence/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-bioluminescence rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
