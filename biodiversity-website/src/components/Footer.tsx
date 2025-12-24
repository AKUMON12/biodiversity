import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
              <Leaf className="w-5 h-5 text-bioluminescence" />
            </div>
            <div>
              <span className="font-display text-lg font-bold text-foreground">Biodiversity</span>
              <p className="text-xs text-muted-foreground">The Pulse of Life</p>
            </div>
          </div>

          {/* Definition */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Ecosystems</span> — A community or group 
              of living organisms that live in and interact with each other in a specific environment.
            </p>
          </div>

          {/* Credits */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for our planet</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Educational content about biodiversity and conservation. 
            Protecting nature is protecting our future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
