import { Instagram, Twitter, Mail, Loader2 } from 'lucide-react';
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
        
        <div className="flex flex-wrap justify-center items-center mb-12">
          <div className="flex items-center justify-center mx-2 md:mx-3">
            <a 
              href="https://instagram.com/maxingking101" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-brand-purple transition-colors p-2"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
            </a>
          </div>
          <div className="flex items-center justify-center ml-4 md:ml-6">
            <a 
              href="https://twitter.com/maxingking101" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-brand-purple transition-colors p-2"
              aria-label="Follow on Twitter"
            >
              <Twitter className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
            </a>
          </div>
          <div className="flex items-center justify-center mx-2 md:mx-3">
            <div className="flex items-center">
              <img 
                src={process.env.NODE_ENV === 'production' ? '/portfolio-test/Contact-icons/discord-logo.png' : '/Contact-icons/discord-logo.png'} 
                alt="Discord" 
                className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] object-contain" 
                aria-hidden="true"
              />
              <span className="text-gray-300 text-sm md:text-base -ml-2 md:-ml-3">maxingking_</span>
            </div>
          </div>
          <div className="flex items-center justify-center ml-4 md:ml-8">
            <div className="flex items-center gap-2">
              <Mail className="w-8 h-8 md:w-9 md:h-9 text-gray-400" aria-hidden="true" />
              <span className="text-gray-300 text-sm md:text-base">maxingkingvfx@proton.me</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-md mx-auto">
          <button
            onClick={handleConnect}
            disabled={isConnecting}
            className="w-full rounded-full py-3 text-white font-medium flex items-center justify-center gap-2 text-lg bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple disabled:opacity-70 disabled:cursor-not-allowed"
            aria-label="Connect on Twitter"
          >
            <div className="flex items-center gap-2">
              {isConnecting ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : (
                <Twitter className="h-5 w-5" aria-hidden="true" />
              )}
              <span>
                {isConnecting ? "Connecting..." : "Let's Connect"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
