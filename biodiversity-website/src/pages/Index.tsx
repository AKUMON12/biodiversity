import React from 'react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import ComponentsSection from '@/components/ComponentsSection';
import HotspotSection from '@/components/HotspotSection';
import MicroMacroSection from '@/components/MicroMacroSection';
import ConservationSection from '@/components/ConservationSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Interactive Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero - The Definition of Life */}
        <HeroSection />

        {/* Components of Biodiversity */}
        <div id="components">
          <ComponentsSection />
        </div>

        {/* Hotspot Global Map */}
        <div id="hotspots">
          <HotspotSection />
        </div>

        {/* Micro/Macro Organisms */}
        <div id="organisms">
          <MicroMacroSection />
        </div>

        {/* Conservation Dashboard */}
        <div id="conservation">
          <ConservationSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
