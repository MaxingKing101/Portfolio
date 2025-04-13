import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clients } from '@/constants/clients';
import TestimonialCard from '@/components/common/TestimonialCard';
import Section from '@/components/common/Section';
import { SectionProps } from '@/types/section';

/**
 * Clients section component
 */
const ClientsSection: React.FC<SectionProps> = ({ id }) => {
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

    const section = document.getElementById(id || 'clients');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [id]);

  return (
    <Section 
      id={id} 
      title="CLIENTS" 
      background="black"
      ariaLabelledby="clients-title"
    >
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      >
        {clients.map((client, index) => (
          <TestimonialCard
            key={client.id}
            client={client}
            index={index}
            isHovered={hoveredTestimonial === client.id}
            isFocused={focusedTestimonial === client.id}
            onMouseEnter={() => setHoveredTestimonial(client.id)}
            onMouseLeave={() => setHoveredTestimonial(null)}
            onFocus={() => setFocusedTestimonial(client.id)}
            onBlur={() => setFocusedTestimonial(null)}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default ClientsSection;
