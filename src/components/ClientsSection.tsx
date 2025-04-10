import { UserRound, Users, Sparkles, HandHeart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  icon: JSX.Element;
  name: string;
  role: string;
  comment: string;
}

interface ClientsSectionProps {
  id?: string;
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

const ClientsSection: React.FC<ClientsSectionProps> = ({ id }) => {
  const [focusedTestimonial, setFocusedTestimonial] = useState<number | null>(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('clients');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      className="py-12 sm:py-20 bg-black" 
      aria-labelledby="clients-title"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-3 sm:px-4 md:px-8"
      >
        <h2 
          id="clients-title" 
          className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 uppercase text-white"
        >
          CLIENTS
          <div className="w-24 h-1.5 bg-brand-purple mt-2 transition-all duration-300 hover:w-32"></div>
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        >
          {clients.map((client, index) => (
            <motion.div 
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1
              }}
              className={cn(
                "client-card bg-opacity-10 bg-gray-800 border border-gray-800 p-4 sm:p-6 rounded-lg transition-all duration-300",
                "transform-gpu hover:scale-105 focus-within:scale-105",
                "hover:border-brand-purple focus-within:border-brand-purple",
                (focusedTestimonial === client.id || hoveredTestimonial === client.id) && "border-brand-purple"
              )}
              style={{
                animationDelay: `${index * 0.15}s`,
                willChange: "transform, opacity"
              }}
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
                  <h3 
                    id={`client-${client.id}-name`} 
                    className="text-lg sm:text-xl font-semibold text-white glow-heading"
                  >
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientsSection;
