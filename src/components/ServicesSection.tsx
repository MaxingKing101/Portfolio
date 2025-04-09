
import { Film, Palette, Music } from 'lucide-react';

const services = [
  {
    icon: <Film className="h-8 w-8 text-brand-blue" />,
    title: "Video Editing",
    description: "Transform your raw footage into compelling, polished content."
  },
  {
    icon: <Palette className="h-8 w-8 text-brand-purple" />,
    title: "Color Grading",
    description: "Color correction and grading to give your content the perfect visual tone and mood."
  },
  {
    icon: <Music className="h-8 w-8 text-brand-light-purple" />,
    title: "Sound Design",
    description: "Audio mixing and sound effects to create the perfect auditory experience."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-4 uppercase text-white">
          SERVICES
          <div className="w-16 h-1 bg-brand-purple mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
