import React from 'react';
import { 
  Utensils, 
  Heart, 
  Briefcase, 
  FlaskConical, 
  Pill, 
  Shield, 
  Users, 
  Thermometer,
  Leaf,
  ArrowRight
} from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'bioluminescence' | 'ocean' | 'amber' | 'jungle';
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    bioluminescence: 'border-bioluminescence/30 hover:border-bioluminescence/60 text-bioluminescence',
    ocean: 'border-ocean/30 hover:border-ocean/60 text-ocean',
    amber: 'border-amber/30 hover:border-amber/60 text-amber',
    jungle: 'border-primary/30 hover:border-primary/60 text-bioluminescence',
  };

  return (
    <div className={`glass rounded-2xl p-6 border ${colorClasses[color]} transition-all duration-300 hover:-translate-y-1 group`}>
      <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 ${colorClasses[color]} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h4 className="font-display text-lg font-bold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const ConservationSection: React.FC = () => {
  const benefits = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: 'Food Security',
      description: 'Biodiversity provides the genetic resources for crops and livestock that feed the world.',
      color: 'bioluminescence' as const,
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellbeing',
      description: 'Natural ecosystems support mental and physical health through clean air and water.',
      color: 'ocean' as const,
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Livelihood',
      description: 'Millions depend on biodiversity for fishing, farming, and sustainable industries.',
      color: 'amber' as const,
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: 'Medical Research',
      description: 'A rich source of materials for developing new medicines and treatments.',
      color: 'bioluminescence' as const,
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: 'Traditional Medicine',
      description: 'Abundant resources for both traditional and modern medicinal practices.',
      color: 'ocean' as const,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Disease Prevention',
      description: 'Healthy ecosystems help control and prevent the spread of infectious diseases.',
      color: 'amber' as const,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Cultural Growth',
      description: 'Serves important roles for communities\' cultural, spiritual, and social development.',
      color: 'bioluminescence' as const,
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: 'Climate Adaptation',
      description: 'Conservation is vital for helping communities adapt to climate change impacts.',
      color: 'ocean' as const,
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-bioluminescence/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-ocean/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-bioluminescence text-sm font-medium uppercase tracking-wider">
            Impact & Conservation
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Why Biodiversity <span className="text-gradient">Matters</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Biodiversity helps and provides us with essential resources and services 
            that sustain human life and well-being.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <BenefitCard {...benefit} />
            </div>
          ))}
        </div>

        {/* Conservation CTA */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 border border-bioluminescence/30 glow-box">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                <Leaf className="w-4 h-4 text-bioluminescence" />
                <span className="text-sm text-bioluminescence font-medium">Conservation Action</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Protecting Our Future
              </h3>
              <p className="text-muted-foreground mb-6">
                Stable and sustainable ecosystems support relief and recovery efforts. 
                Conservation is not just about saving species—it's about preserving the 
                foundation of all life on Earth for generations to come.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-bioluminescence">
                  <div className="w-2 h-2 rounded-full bg-bioluminescence" />
                  <span className="text-sm">Climate Resilience</span>
                </div>
                <div className="flex items-center gap-2 text-ocean">
                  <div className="w-2 h-2 rounded-full bg-ocean" />
                  <span className="text-sm">Ecosystem Stability</span>
                </div>
                <div className="flex items-center gap-2 text-amber">
                  <div className="w-2 h-2 rounded-full bg-amber" />
                  <span className="text-sm">Sustainable Future</span>
                </div>
              </div>
            </div>

            {/* Resilience Meter Visualization */}
            <div className="glass rounded-2xl p-6 border border-bioluminescence/20">
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                Ecosystem Resilience Index
              </h4>
              <div className="space-y-4">
                {[
                  { label: 'Biodiversity Level', value: 75, color: 'bg-bioluminescence' },
                  { label: 'Conservation Efforts', value: 60, color: 'bg-ocean' },
                  { label: 'Climate Adaptation', value: 45, color: 'bg-amber' },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{metric.label}</span>
                      <span className="text-foreground">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${metric.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Illustrative data showing the importance of continued conservation efforts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConservationSection;
