import React, { useState } from 'react';
import { Dna, Users, TreePine, Waves, Mountain, Droplets } from 'lucide-react';

interface ComponentCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  color: 'bioluminescence' | 'ocean' | 'amber';
  delay: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ icon, title, subtitle, description, color, delay }) => {
  const colorClasses = {
    bioluminescence: 'border-bioluminescence/30 hover:border-bioluminescence/60 hover:shadow-[0_0_40px_hsl(var(--bioluminescence)/0.2)]',
    ocean: 'border-ocean/30 hover:border-ocean/60 hover:shadow-[0_0_40px_hsl(var(--ocean)/0.2)]',
    amber: 'border-amber/30 hover:border-amber/60 hover:shadow-[0_0_40px_hsl(var(--amber)/0.2)]',
  };

  const iconColorClasses = {
    bioluminescence: 'text-bioluminescence',
    ocean: 'text-ocean',
    amber: 'text-amber',
  };

  return (
    <div
      className={`glass-strong rounded-2xl p-8 card-hover ${colorClasses[color]} animate-fade-in-up ${delay}`}
    >
      <div className={`w-16 h-16 rounded-xl glass flex items-center justify-center mb-6 ${iconColorClasses[color]}`}>
        {icon}
      </div>
      <span className={`text-sm font-medium ${iconColorClasses[color]} uppercase tracking-wider`}>
        {subtitle}
      </span>
      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const EcosystemToggle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terrestrial' | 'aquatic'>('terrestrial');

  const terrestrialHabitats = [
    { icon: <TreePine className="w-5 h-5" />, name: 'Forest' },
    { icon: <Mountain className="w-5 h-5" />, name: 'Tundra' },
    { icon: <TreePine className="w-5 h-5" />, name: 'Grassland' },
    { icon: <Mountain className="w-5 h-5" />, name: 'Valley' },
  ];

  const aquaticHabitats = [
    { icon: <Waves className="w-5 h-5" />, name: 'River' },
    { icon: <Droplets className="w-5 h-5" />, name: 'Swamp' },
    { icon: <Waves className="w-5 h-5" />, name: 'Lake' },
    { icon: <Waves className="w-5 h-5" />, name: 'Ocean' },
  ];

  const currentHabitats = activeTab === 'terrestrial' ? terrestrialHabitats : aquaticHabitats;

  return (
    <div className="glass-strong rounded-2xl p-8 border-bioluminescence/30 hover:border-bioluminescence/60 transition-all duration-500 animate-fade-in-up animation-delay-600">
      <div className="w-16 h-16 rounded-xl glass flex items-center justify-center mb-6 text-bioluminescence">
        <TreePine className="w-8 h-8" />
      </div>
      <span className="text-sm font-medium text-bioluminescence uppercase tracking-wider">
        Habitat & Ecological Process
      </span>
      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
        Ecosystem Diversity
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">
        A community of living things interacting within their specific environment, 
        forming the foundation of all life on Earth.
      </p>

      {/* Toggle */}
      <div className="flex gap-2 p-1 glass rounded-lg mb-6">
        <button
          onClick={() => setActiveTab('terrestrial')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
            activeTab === 'terrestrial'
              ? 'bg-jungle text-bioluminescence'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Terrestrial
        </button>
        <button
          onClick={() => setActiveTab('aquatic')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
            activeTab === 'aquatic'
              ? 'bg-ocean text-white'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Aquatic
        </button>
      </div>

      {/* Habitats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {currentHabitats.map((habitat, index) => (
          <div
            key={habitat.name}
            className={`flex items-center gap-3 p-3 rounded-lg glass border transition-all duration-300 ${
              activeTab === 'terrestrial'
                ? 'border-bioluminescence/20 hover:border-bioluminescence/50'
                : 'border-ocean/20 hover:border-ocean/50'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className={activeTab === 'terrestrial' ? 'text-bioluminescence' : 'text-ocean'}>
              {habitat.icon}
            </span>
            <span className="text-sm text-foreground">{habitat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ComponentsSection: React.FC = () => {
  return (
    <section id="components" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-bioluminescence text-sm font-medium uppercase tracking-wider">
            The Three Pillars
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Components of <span className="text-gradient">Biodiversity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding the fundamental building blocks that create the rich tapestry of life on our planet.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ComponentCard
            icon={<Users className="w-8 h-8" />}
            title="Species Diversity"
            subtitle="Variety of Life"
            description="A variety of species living in one area. The fundamental unit of biological classification refers to populations that can breed and produce offspring together."
            color="ocean"
            delay="animation-delay-200"
          />
          <ComponentCard
            icon={<Dna className="w-8 h-8" />}
            title="Genetic Diversity"
            subtitle="Variation of Traits"
            description="The variation of genetic traits within a specific species. This diversity allows populations to adapt to changing environments and resist diseases."
            color="amber"
            delay="animation-delay-400"
          />
          <EcosystemToggle />
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
