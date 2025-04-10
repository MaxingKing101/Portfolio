import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact' }
];

const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth'
  });
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 70; // Adjust this value based on your navbar height
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({ 
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const lastScroll = navRef.current?.dataset.lastScroll;
      
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (scrollPosition > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.33;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition + scrollThreshold) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      // Debounce scroll event
      if (lastScroll && Math.abs(scrollPosition - parseInt(lastScroll)) < 10) return;
      if (navRef.current) {
        navRef.current.dataset.lastScroll = scrollPosition.toString();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-brand-deepest-blue/90 backdrop-blur-sm py-1 sm:py-2 shadow-lg' : 'bg-transparent py-2 sm:py-4'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-3 md:px-8 flex justify-between items-center">
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); scrollToTop(); }} 
          className="text-brand-light-purple text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-md px-1 sm:px-2"
          aria-label="Back to top"
        >
          <span className="group">
            <span className="block">MaxingKing</span>
            <span className="block h-0.5 w-0 bg-brand-light-purple transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </span>
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
                "text-white hover:text-brand-light-purple transition-colors duration-300 ease-in-out text-sm sm:text-base px-1 sm:px-2 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple",
                activeSection === item.id && "text-brand-light-purple"
              )}
              role="menuitem"
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              <span className="group">
                <span className="block">{item.label}</span>
                <span className="block h-0.5 w-0 bg-brand-light-purple transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-13 sm:bottom-13 right-4 sm:right-10 h-8 w-8 sm:h-10 sm:w-14 flex items-center justify-center bg-brand-purple text-white rounded-md shadow-lg hover:bg-brand-light-purple transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="h-5 w-5 sm:h-8 sm:w-8 transition-all duration-300 ease-in-out group-hover:rotate-180" aria-hidden="true" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
