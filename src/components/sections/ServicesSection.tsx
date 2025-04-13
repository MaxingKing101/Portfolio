import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react';
import { services } from '@/constants/services';
import ServiceCard from '@/components/common/ServiceCard';
import Section from '@/components/common/Section';
import { SectionProps } from '@/types/section';

/**
 * Services section component
 */
const ServicesSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title="SERVICES" 
      background="black"
      ariaLabelledby="services-title"
    >
      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default memo(ServicesSection);
