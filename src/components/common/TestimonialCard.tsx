import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Testimonial } from '@/types/client';

interface TestimonialCardProps {
  client: Testimonial;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

/**
 * A reusable testimonial card component
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  client,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <motion.div
      key={client.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.1,
        ease: "easeOut",
        delay: index * 0.1,
        hover: { duration: 0.05, delay: 0 }
      }}
      viewport={{ once: true }}
      className={cn(
        "client-card p-4 sm:p-6 rounded-lg transition-all duration-200",
        "bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-lg hover:from-black/70 hover:to-black/50",
        "border border-gray-800",
        "hover:border-brand-purple",
        isHovered && "border-brand-purple"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="article"
      aria-labelledby={`client-${client.id}-name`}
    >
      <div className="flex items-center mb-4">
        <div className={cn(
          "mr-3 transform-gpu transition-all duration-200",
          isHovered ? "scale-110" : "animate-pulse-slow"
        )}>
          {client.icon}
        </div>
        <div>
          <motion.h3
            id={`client-${client.id}-name`}
            className="text-lg sm:text-xl font-semibold text-white glow-heading"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, delay: 0 }}
          >
            {client.name || "Client Name"}
          </motion.h3>
          <p className="text-brand-light-purple text-xs sm:text-sm transition-colors duration-200 hover:text-white/90">
            {client.role || "Client Role"}
          </p>
        </div>
      </div>
      <div className="relative">
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed transition-colors duration-200 hover:text-white/90">
          {client.comment || "[Placeholder] Client testimonial will appear here."}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
