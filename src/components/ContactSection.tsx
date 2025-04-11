import { Instagram, Twitter, Mail, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    toast.success("Connecting to Twitter...");
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsConnecting(false);
    window.open("https://x.com/MaxingKingVFX", "_blank");
  };

  return (
    <section id={id} className="py-20 bg-brand-deepest-blue" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.h2 
          id="contact-title" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-8 glow-heading"
        >
          LET'S GET SERIOUS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Ready to enhance your visual content? Reach out through any of these
          channels and let's create something amazing together.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center mb-12"
        >
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
              href="https://x.com/MaxingKingVFX" 
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
                src="/Contact-icons/discord-logo.png" 
                alt="Discord" 
                className="w-[4.5rem] h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] object-contain"
                loading="lazy"
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
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <motion.button
            onClick={handleConnect}
            disabled={isConnecting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full py-3 text-white font-medium flex items-center justify-center gap-2 text-lg bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
            aria-label="Connect on Twitter"
          >
            <AnimatePresence mode="wait">
              {isConnecting ? (
                <motion.div 
                  key="loading" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  <span>Connecting...</span>
                </motion.div>
              ) : (
                <motion.div 
                  key="default" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                  <span>Let's Connect</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
