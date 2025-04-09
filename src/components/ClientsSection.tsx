
import { UserRound, Users, Sparkles, HandHeart } from 'lucide-react';

const clients = [
  {
    icon: <UserRound className="h-8 w-8 text-brand-light-purple" />,
    name: "John Roberts",
    role: "YouTuber",
    comment: "MaxingKing's edits took my content to another level. The quality speaks for itself."
  },
  {
    icon: <Users className="h-8 w-8 text-brand-blue" />,
    name: "Stellar Studios",
    role: "Production Company",
    comment: "Professional, timely, and creative. Our go-to editor for all projects."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-brand-purple" />,
    name: "Lisa Chen",
    role: "Content Creator",
    comment: "The color grading work is simply outstanding. Transformed my videos completely."
  },
  {
    icon: <HandHeart className="h-8 w-8 text-brand-light-purple" />,
    name: "PixelPerfect",
    role: "Gaming Channel",
    comment: "Fast turnarounds without compromising quality. Highly recommended!"
  }
];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-4 uppercase text-white">
          CLIENTS
          <div className="w-16 h-1 bg-brand-purple mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-card bg-opacity-10 bg-gray-800 border border-gray-800 p-6 rounded-lg hover:border-brand-purple transition-all duration-300 animate-fade-in hover-glow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 animate-pulse-slow">
                  {client.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {client.name}
                  </h3>
                  <p className="text-brand-light-purple text-sm">
                    {client.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 italic">
                "{client.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
