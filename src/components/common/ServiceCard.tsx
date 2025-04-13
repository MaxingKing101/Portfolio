import { memo } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
  index: number;
}

/**
 * A reusable service card component
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="service-card h-auto sm:h-100 p-4 sm:p-6 flex flex-col justify-center items-start rounded-lg bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-lg hover:from-black/70 hover:to-black/50 transition-all duration-300"
    >
      <div className="mb-4">
        {service.icon}
      </div>
      <motion.h3 
        className="text-lg sm:text-xl font-semibold mb-2 text-white glow-heading"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {service.title}
      </motion.h3>
      <p className="text-gray-400 leading-relaxed transition-colors duration-300 hover:text-white/90">
        {service.description}
      </p>
    </motion.div>
  );
};

export default memo(ServiceCard);
