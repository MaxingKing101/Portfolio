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
          
          <div className="flex items-center justify-center mx-2 md:mx-3">
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
            <div className="flex items-center text-gray-400 hover:text-brand-purple transition-colors p-2">
              <svg 
                viewBox="0 0 48 48" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2.3"
                className="w-[2.3rem] h-[2.3rem] md:w-[3.3rem] md:h-[3.3rem]"
                aria-hidden="true"
              >
                <defs>
                  <style>{`.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;}`}</style>
                </defs>
                <path 
                  className="a" 
                  d="M17.59,34.1733c-.89,1.3069-1.8944,2.6152-2.91,3.8267C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31A32.6875,32.6875,0,0,1,24,12a32.9643,32.9643,0,0,1,4.33.3l1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.8292,44.8292,0,0,1,43.5,33s-2.8,4.79-10.18,5a47.4193,47.4193,0,0,1-2.86-3.81m6.46-2.9c-3.84,1.9454-7.5555,3.89-12.92,3.89s-9.08-1.9446-12.92-3.89"
                />
                <circle 
                  className="a" 
                  cx="17.847" 
                  cy="26.23" 
                  r="3.35"
                />
                <circle 
                  className="a" 
                  cx="30.153" 
                  cy="26.23" 
                  r="3.35"
                />
              </svg>
              <span className="text-gray-300 text-sm md:text-base ml-2">maxingking_</span>
            </div>
          </div>

          <div className="flex items-center justify-center ml-4 md:ml-8">
            <div className="flex items-center gap-2 text-gray-400 hover:text-brand-purple transition-colors">
              <Mail className="w-8 h-8 md:w-9 md:h-9" aria-hidden="true" />
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
