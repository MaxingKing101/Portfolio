import { Film, Palette, Music } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Film className="h-6 w-6 text-brand-blue" />,
    title: "Video Editing",
    description: "Transform your raw footage into compelling, polished content.",
    details: "Professional video editing services including transitions, effects, color correction, and timing adjustments."
  },
  {
    id: 2,
    icon: <Palette className="h-6 w-6 text-brand-purple" />,
    title: "Color Grading",
    description: "Color correction and grading to give your content the perfect visual tone and mood.",
    details: "Expert color grading to enhance visual appeal, maintain consistency, and create distinctive looks."
  },
  {
    id: 3,
    icon: <Music className="h-6 w-6 text-brand-light-purple" />,
    title: "Sound Design",
    description: "Audio mixing and sound effects to create the perfect auditory experience.",
    details: "Professional audio enhancement, background music selection, and sound effect integration."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-black" aria-labelledby="services-title">
      <div className="container mx-auto px-4 md:px-8">
        <h2 id="services-title" className="text-4xl font-bold mb-4 uppercase text-white">
          SERVICES
          <div className="w-24 h-1.5 bg-brand-purple mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-card h-48"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white glow-heading">
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
