import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Testimonial } from '@/types/client';

interface TestimonialCardProps {
  client: Testimonial;
  index: number;
  isHovered: boolean;
  isFocused: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
}

/**
 * A reusable testimonial card component
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  client,
  index,
  isHovered,
  isFocused,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur
}) => {
  return (
    <motion.div
      key={client.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1
      }}
      viewport={{ once: true }}
      className={cn(
        "client-card bg-opacity-10 bg-gray-800 border border-gray-800 p-4 sm:p-6 rounded-lg transition-all duration-300",
        "transform-gpu hover:scale-105 focus-within:scale-105",
        "hover:border-brand-purple focus-within:border-brand-purple",
        (isFocused || isHovered) && "border-brand-purple"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabIndex={0}
      role="article"
      aria-labelledby={`client-${client.id}-name`}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className="flex items-center mb-4">
        <div className={cn(
          "mr-3 transform-gpu transition-all duration-300",
          (isFocused || isHovered) ? "scale-110" : "animate-pulse-slow"
        )}>
          {client.icon}
        </div>
        <div>
          <h3
            id={`client-${client.id}-name`}
            className="text-lg sm:text-xl font-semibold text-white glow-heading"
          >
            {client.name || "Client Name"}
          </h3>
          <p className="text-brand-light-purple text-xs sm:text-sm">
            {client.role || "Client Role"}
          </p>
        </div>
      </div>
      <div className="relative">
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {client.comment || "[Placeholder] Client testimonial will appear here."}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
