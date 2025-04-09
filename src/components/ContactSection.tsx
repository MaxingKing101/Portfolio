import { Instagram, Twitter, Youtube, Mail, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

const ContactSection = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    toast.success("Connecting to Twitter...");
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsConnecting(false);
    window.open("https://twitter.com/maxingking101", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-brand-deepest-blue" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 id="contact-title" className="text-6xl md:text-7xl font-bold mb-8 glow-heading">
          LET'S GET SERIOUS
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Ready to enhance your visual content? Reach out through any of these
          channels and let's create something amazing together.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a 
            href="https://instagram.com/maxingking101" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-purple transition-colors hover-scale p-2"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
          </a>
          <a 
            href="https://twitter.com/maxingking101" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-purple transition-colors hover-scale p-2"
            aria-label="Follow on Twitter"
          >
            <Twitter className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
          </a>
          <div className="text-gray-400 hover-scale p-2">
            <Youtube className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
          </div>
          <div className="text-gray-400 flex items-center gap-2 p-2">
            <Mail className="w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
            <span className="text-gray-300 text-sm md:text-base">maxingking101@proton.me</span>
          </div>
        </div>
        
        <div className="max-w-md mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="group w-full rounded-full py-6 text-white font-medium flex items-center justify-center gap-2 text-xl md:text-2xl bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
            aria-label="Connect on Twitter"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
            <div className="relative z-10 flex items-center gap-2">
              {isConnecting ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : (
                <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" aria-hidden="true" />
              )}
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                {isConnecting ? "Connecting..." : "Let's Contact"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
