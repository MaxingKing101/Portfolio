import { Film, Palette, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react';

interface ServicesSectionProps {
  id?: string;
}

const services = [
  {
    id: 1,
    icon: <Film className="h-7 w-7 text-brand-blue" />,
    title: "Video Editing",
    description: "Transform your raw footage into compelling, polished content.",
    details: "Professional video editing services including transitions, effects, color correction, and timing adjustments."
  },
  {
    id: 2,
    icon: <Palette className="h-7 w-7 text-brand-purple" />,
    title: "Color Grading",
    description: "Color correction and grading to give your content the perfect visual tone and mood.",
    details: "Expert color grading to enhance visual appeal, maintain consistency, and create distinctive looks."
  },
  {
    id: 3,
    icon: <Music className="h-7 w-7 text-brand-light-purple" />,
    title: "Sound Design",
    description: "Audio mixing and sound effects to create the perfect auditory experience.",
    details: "Professional audio enhancement, background music selection, and sound effect integration."
  }
];

const ServiceCard = memo(({ service, index }: { service: typeof services[0], index: number }) => {
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
});

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-12 sm:py-20 bg-black" aria-labelledby="services-title">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="services-title" className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 uppercase text-white">
            SERVICES
            <div className="w-24 h-1.5 bg-brand-purple mt-2 transition-all duration-300 hover:w-32"></div>
          </h2>
        </motion.div>
        
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
      </div>
    </section>
  );
};

export default memo(ServicesSection);
