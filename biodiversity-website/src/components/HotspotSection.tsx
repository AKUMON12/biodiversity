import React, { useState } from 'react';
import { MapPin, Leaf, X } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  location: { x: number; y: number };
  species: string[];
  description: string;
}

const hotspots: Hotspot[] = [
  {
    id: 'amazon',
    name: 'Amazon Rainforest',
    location: { x: 30, y: 55 },
    species: ['Jaguar', 'Poison Dart Frog', 'Harpy Eagle', 'Pink River Dolphin'],
    description: 'The world\'s largest tropical rainforest, home to 10% of all species on Earth.',
  },
  {
    id: 'madagascar',
    name: 'Madagascar',
    location: { x: 62, y: 62 },
    species: ['Ring-tailed Lemur', 'Fossa', 'Panther Chameleon', 'Aye-aye'],
    description: 'An island with 90% endemic species, evolving in isolation for millions of years.',
  },
  {
    id: 'coral-triangle',
    name: 'Coral Triangle',
    location: { x: 78, y: 52 },
    species: ['Clownfish', 'Manta Ray', 'Whale Shark', 'Nautilus'],
    description: 'The marine equivalent of the Amazon, with 76% of the world\'s coral species.',
  },
  {
    id: 'western-ghats',
    name: 'Western Ghats',
    location: { x: 68, y: 45 },
    species: ['Lion-tailed Macaque', 'Nilgiri Tahr', 'Purple Frog', 'Malabar Civet'],
    description: 'One of the world\'s eight hottest hotspots with exceptional endemic biodiversity.',
  },
  {
    id: 'california',
    name: 'California Floristic',
    location: { x: 15, y: 38 },
    species: ['California Condor', 'Desert Tortoise', 'Giant Sequoia', 'Channel Island Fox'],
    description: 'Mediterranean climate creates unique conditions for diverse plant life.',
  },
];

const HotspotSection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber text-sm font-medium uppercase tracking-wider">
            Global Conservation Priority
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Biodiversity <span className="text-gradient-amber">Hotspots</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Areas with exceptionally high levels of biodiversity and endemic species 
            that are under significant threat from human activities.
          </p>
        </div>

        {/* Interactive Globe/Map Container */}
        <div className="relative glass-strong rounded-3xl p-8 md:p-12 border border-amber/20">
          {/* World Map SVG Background */}
          <div className="relative aspect-[2/1] max-w-4xl mx-auto">
            {/* Simplified world map outline */}
            <svg
              viewBox="0 0 100 50"
              className="w-full h-full opacity-20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
            >
              {/* Continents outline - simplified */}
              <ellipse cx="50" cy="25" rx="48" ry="23" className="stroke-foreground/30" />
              <path d="M10,20 Q20,15 30,18 T50,15 T70,20 T90,18" className="stroke-foreground/20" />
              <path d="M15,30 Q25,35 40,32 T60,35 T80,30" className="stroke-foreground/20" />
            </svg>

            {/* Hotspot markers */}
            {hotspots.map((hotspot) => (
              <button
                key={hotspot.id}
                onClick={() => setActiveHotspot(hotspot)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${hotspot.location.x}%`, top: `${hotspot.location.y}%` }}
              >
                {/* Pulse animation */}
                <div className="absolute inset-0 w-8 h-8 -m-2 bg-amber/30 rounded-full animate-ping" />
                <div className="absolute inset-0 w-6 h-6 -m-1 bg-amber/50 rounded-full animate-pulse" />
                
                {/* Marker */}
                <div className="relative w-4 h-4 bg-amber rounded-full shadow-lg glow-amber flex items-center justify-center group-hover:scale-150 transition-transform duration-300">
                  <MapPin className="w-2 h-2 text-background" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="glass px-3 py-1.5 rounded-lg whitespace-nowrap">
                    <span className="text-xs font-medium text-foreground">{hotspot.name}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber rounded-full glow-amber" />
              <span className="text-sm text-muted-foreground">Biodiversity Hotspot</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-bioluminescence" />
              <span className="text-sm text-muted-foreground">Endemic Species Present</span>
            </div>
          </div>
        </div>

        {/* Hotspot Detail Modal */}
        {activeHotspot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm">
            <div className="glass-strong rounded-3xl p-8 max-w-lg w-full border border-amber/30 glow-amber animate-scale-in">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-amber text-sm font-medium uppercase tracking-wider">
                    Endemic Region
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-1">
                    {activeHotspot.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <p className="text-muted-foreground mb-6">
                {activeHotspot.description}
              </p>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Endemic Species</h4>
                <div className="flex flex-wrap gap-2">
                  {activeHotspot.species.map((species) => (
                    <span
                      key={species}
                      className="px-3 py-1.5 glass rounded-full text-sm text-bioluminescence border border-bioluminescence/30"
                    >
                      {species}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="glass rounded-2xl p-6 border border-amber/20">
            <h4 className="font-display text-xl font-bold text-foreground mb-3">
              What are Endemic Species?
            </h4>
            <p className="text-muted-foreground">
              Species that are located in a particular region and found nowhere else on Earth. 
              They usually evolve in geographic isolation, making them uniquely adapted to their 
              specific habitat.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-amber/20">
            <h4 className="font-display text-xl font-bold text-foreground mb-3">
              Why Hotspots Matter
            </h4>
            <p className="text-muted-foreground">
              These areas contain high levels of biodiversity that are under significant threat. 
              Protecting hotspots is crucial for evolution, allowing organisms to develop and 
              grow for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotspotSection;
