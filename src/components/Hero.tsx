import { Button } from '@/components/ui/button';
import { Play, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const sectionRef = useRef(null);

  return (
    <motion.section 
      ref={sectionRef}
      id={id}
      className="h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden"
      aria-labelledby="hero-title"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut",
        scale: { duration: 0.8 }
      }}
    >
      {/* Background image with loading optimization */}
      <motion.div 
        className="absolute inset-0"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1,
          delay: 0.2,
          ease: "easeOut"
        }}
      >
        <motion.img
          src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/Background-image/timeline-editing.png`}
          alt="Enhance Your Content"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            transform: 'scale(1.4) translateX(2.9%)',
            opacity: '0.9'
          }}
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.3,
            ease: "easeOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c1d]/80 via-[#1a1a2e]/90 to-[#1a1a2e]" />
      </motion.div>

      <motion.div 
        className="container text-center max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.4,
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        <motion.h1 
          id="hero-title" 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          initial={{ 
            opacity: 0, 
            y: 20,
            skew: "-5deg"
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            skew: "0deg"
          }}
          transition={{ 
            delay: 0.5,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          It's Time To <span className="enhance-text">ENHANCE</span> Your Content
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12"
          initial={{ 
            opacity: 0, 
            y: 20,
            scale: 0.95
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          transition={{ 
            delay: 0.6,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          Taking your content to the next level with professional editing
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.7,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <a 
            href="https://twitter.com/maxingking101" 
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full px-8 py-6 text-white font-medium flex items-center gap-2 justify-center bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple relative overflow-hidden transition-all duration-300 text-xl hover:shadow-lg hover:shadow-purple-500/20"
            aria-label="Connect on Twitter"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-light-purple to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"></div>
            <div className="relative z-10 flex items-center gap-2">
              <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" aria-hidden="true" /> 
              <span className="transition-transform duration-300 group-hover:-translate-y-1">Let's Talk</span>
            </div>
          </a>
          <Button 
            onClick={() => {
              const workSection = document.getElementById('work');
              if (workSection) {
                workSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            variant="outline" 
            className="group rounded-full px-8 py-6 border-gray-700 hover:bg-transparent text-white font-medium flex items-center gap-2 relative overflow-hidden transition-all duration-300"
            aria-label="View portfolio work"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-blue/10 via-brand-light-purple/10 to-brand-purple/10"></div>
            <Play className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" /> 
            <span className="transition-transform duration-300 group-hover:translate-x-1">Watch My Work</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
