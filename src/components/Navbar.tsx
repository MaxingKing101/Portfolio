import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
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
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-brand-deepest-blue/90 backdrop-blur-md py-1 sm:py-2 shadow-lg' : 'bg-transparent py-2 sm:py-4'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-3 md:px-8 flex justify-between items-center">
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); scrollToTop(); }} 
          className="text-brand-light-purple text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-md px-1 sm:px-2"
          aria-label="Back to top"
        >
          MaxingKing
        </a>
        <div 
          className="flex items-center gap-2 sm:gap-4 md:gap-8"
          role="menubar"
          aria-label="Navigation menu"
        >
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className={cn(
                "text-white hover:text-brand-light-purple transition-colors text-sm sm:text-base px-1 sm:px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple",
                activeSection === item.id && "text-brand-light-purple"
              )}
              role="menuitem"
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-13 sm:bottom-13 right-4 sm:right-10 h-8 w-8 sm:h-10 sm:w-14 flex items-center justify-center bg-brand-purple text-white rounded-md shadow-lg hover:bg-brand-light-purple transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="h-5 w-5 sm:h-8 sm:w-8" aria-hidden="true" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
