
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-brand-deepest-blue/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); scrollToTop(); }} 
          className="text-brand-light-purple text-2xl font-bold hover:opacity-80 transition-opacity"
        >
          MaxingKing
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          <button 
            onClick={() => scrollToSection('work')} 
            className="text-white hover:text-brand-light-purple transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white hover:text-brand-light-purple transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('clients')} 
            className="text-white hover:text-brand-light-purple transition-colors"
          >
            Clients
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-brand-light-purple transition-colors"
          >
            Contact
          </button>
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-brand-purple rounded-full p-3 shadow-lg hover:bg-brand-light-purple transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp className="text-white h-5 w-5" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
