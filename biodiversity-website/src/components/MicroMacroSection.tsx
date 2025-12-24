import React, { useState } from 'react';
import { Microscope, Eye, Recycle, Bug, Trees, Bird } from 'lucide-react';

const MicroMacroSection: React.FC = () => {
  const [hoveredDecomposer, setHoveredDecomposer] = useState<string | null>(null);

  const decomposers = [
    { id: 'bacteria', name: 'Bacteria', role: 'Break down dead organic matter into nutrients' },
    { id: 'fungi', name: 'Fungi', role: 'Decompose complex materials like wood and leaves' },
    { id: 'protozoa', name: 'Protozoa', role: 'Consume bacteria and release nutrients' },
  ];

  const macroOrganisms = [
    { icon: <Trees className="w-6 h-6" />, name: 'Flora', description: 'Plants and vegetation' },
    { icon: <Bird className="w-6 h-6" />, name: 'Fauna', description: 'Animal life' },
    { icon: <Bug className="w-6 h-6" />, name: 'Invertebrates', description: 'Insects and arthropods' },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-bioluminescence/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ocean/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-ocean text-sm font-medium uppercase tracking-wider">
            Under the Lens
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            <span className="text-bioluminescence">Microscopic</span> &{' '}
            <span className="text-ocean">Macroscopic</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From the smallest decomposers to the largest ecosystems, every organism 
            plays a vital role in maintaining the balance of life.
          </p>
        </div>

        {/* Split View */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Microscopic Side */}
          <div className="glass-strong rounded-3xl p-8 border border-bioluminescence/30 hover:border-bioluminescence/50 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-bioluminescence">
                <Microscope className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Microscopic World
                </h3>
                <p className="text-muted-foreground text-sm">
                  The unseen architects of life
                </p>
              </div>
            </div>

            {/* Decomposers */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-bioluminescence uppercase tracking-wider mb-4">
                Microscopic Decomposers
              </h4>
              {decomposers.map((decomposer) => (
                <div
                  key={decomposer.id}
                  className={`relative p-4 rounded-xl glass border transition-all duration-500 cursor-pointer ${
                    hoveredDecomposer === decomposer.id
                      ? 'border-bioluminescence/60 bg-bioluminescence/10'
                      : 'border-bioluminescence/20 hover:border-bioluminescence/40'
                  }`}
                  onMouseEnter={() => setHoveredDecomposer(decomposer.id)}
                  onMouseLeave={() => setHoveredDecomposer(null)}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{decomposer.name}</span>
                    <Recycle className={`w-5 h-5 transition-all duration-300 ${
                      hoveredDecomposer === decomposer.id
                        ? 'text-bioluminescence animate-spin'
                        : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  {/* Animated role reveal */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredDecomposer === decomposer.id ? 'max-h-20 mt-3' : 'max-h-0'
                  }`}>
                    <p className="text-sm text-bioluminescence">
                      ↳ {decomposer.role}
                    </p>
                    <div className="mt-2 h-1 bg-bioluminescence/20 rounded-full overflow-hidden">
                      <div className="h-full bg-bioluminescence animate-shimmer" 
                           style={{ width: '60%', backgroundSize: '200% 100%' }} />
                    </div>
                  </div>
                </div>
              ))}

              {/* Info box */}
              <div className="mt-6 p-4 rounded-xl bg-bioluminescence/10 border border-bioluminescence/30">
                <p className="text-sm text-foreground">
                  <span className="text-bioluminescence font-medium">Key Role:</span> Breaking down 
                  waste materials that can be toxic to other living components of ecosystems, 
                  recycling nutrients back into the environment.
                </p>
              </div>
            </div>
          </div>

          {/* Macroscopic Side */}
          <div className="glass-strong rounded-3xl p-8 border border-ocean/30 hover:border-ocean/50 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-ocean">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Macroscopic World
                </h3>
                <p className="text-muted-foreground text-sm">
                  The visible web of life
                </p>
              </div>
            </div>

            {/* Macro organisms grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-ocean uppercase tracking-wider mb-4">
                Community of Living Things
              </h4>
              
              {macroOrganisms.map((organism, index) => (
                <div
                  key={organism.name}
                  className="p-4 rounded-xl glass border border-ocean/20 hover:border-ocean/50 
                             transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-ocean/20 flex items-center justify-center 
                                    text-ocean group-hover:bg-ocean group-hover:text-background 
                                    transition-all duration-300">
                      {organism.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">{organism.name}</h5>
                      <p className="text-sm text-muted-foreground">{organism.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Evolution box */}
              <div className="mt-6 p-4 rounded-xl bg-ocean/10 border border-ocean/30">
                <h5 className="text-ocean font-medium mb-2">Evolution</h5>
                <p className="text-sm text-foreground">
                  The process allowing organisms to develop and grow, adapting to their environment 
                  over generations through natural selection and genetic variation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroMacroSection;
