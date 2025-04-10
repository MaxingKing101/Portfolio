import { UserRound, Users, Sparkles, HandHeart } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  icon: JSX.Element;
  name: string;
  role: string;
  comment: string;
}

const clients: Testimonial[] = [
  {
    id: 1,
    icon: <UserRound className="h-8 w-8 text-brand-light-purple" />,
    name: "John Roberts",
    role: "YouTuber",
    comment: "MaxingKing's edits took my content to another level. The quality speaks for itself."
  },
  {
    id: 2,
    icon: <Users className="h-8 w-8 text-brand-blue" />,
    name: "Stellar Studios",
    role: "Production Company",
    comment: "Professional, timely, and creative. Our go-to editor for all projects."
  },
  {
    id: 3,
    icon: <Sparkles className="h-8 w-8 text-brand-purple" />,
    name: "Lisa Chen",
    role: "Content Creator",
    comment: "The color grading work is simply outstanding. Transformed my videos completely."
  },
  {
    id: 4,
    icon: <HandHeart className="h-8 w-8 text-brand-light-purple" />,
    name: "PixelPerfect",
    role: "Gaming Channel",
    comment: "Fast turnarounds without compromising quality. Highly recommended!"
  }
];

const ClientsSection = () => {
  const [focusedTestimonial, setFocusedTestimonial] = useState<number | null>(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  return (
    <section id="clients" className="py-12 sm:py-20 bg-black" aria-labelledby="clients-title">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 id="clients-title" className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 uppercase text-white">
          CLIENTS
          <div className="w-16 h-1 bg-brand-purple mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {clients.map((client, index) => (
            <div 
              key={client.id}
              className={cn(
                "client-card bg-opacity-10 bg-gray-800 border border-gray-800 p-4 sm:p-6 rounded-lg transition-all duration-300 animate-fade-in hover-glow",
                "transform-gpu hover:scale-105 focus-within:scale-105",
                "hover:border-brand-purple focus-within:border-brand-purple",
                (focusedTestimonial === client.id || hoveredTestimonial === client.id) && "border-brand-purple"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredTestimonial(client.id)}
              onMouseLeave={() => setHoveredTestimonial(null)}
              tabIndex={0}
              role="article"
              aria-labelledby={`client-${client.id}-name`}
              onFocus={() => setFocusedTestimonial(client.id)}
              onBlur={() => setFocusedTestimonial(null)}
            >
              <div className="flex items-center mb-4">
                <div className={cn(
                  "mr-3 transform-gpu transition-all duration-300",
                  (focusedTestimonial === client.id || hoveredTestimonial === client.id) ? "scale-110" : "animate-pulse-slow"
                )}>
                  {client.icon}
                </div>
                <div>
                  <h3 id={`client-${client.id}-name`} className="text-lg sm:text-xl font-semibold text-white glow-heading">
                    {client.name}
                  </h3>
                  <p className="text-brand-light-purple text-xs sm:text-sm">
                    {client.role}
                  </p>
                </div>
              </div>
              <div className="relative">
                <p className={cn(
                  "text-gray-400 italic transition-all duration-300",
                  (focusedTestimonial === client.id || hoveredTestimonial === client.id) && "transform-gpu translate-y-0.5"
                )}>
                  "{client.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
