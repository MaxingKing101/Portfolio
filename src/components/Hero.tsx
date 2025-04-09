
import { Button } from '@/components/ui/button';
import { Mail, Play, Twitter } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight gradient-text animate-fade-in">
          It's Time To ENHANCE Your Content
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Taking your content to the next level with professional editing
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <a 
            href="https://twitter.com/maxingking101" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-6 gradient-button text-white font-medium flex items-center gap-2 justify-center"
          >
            <Twitter className="h-5 w-5" /> Let's Contact
          </a>
          <Button 
            onClick={() => scrollToSection('work')}
            variant="outline" 
            className="rounded-full px-8 py-6 border-gray-700 hover:bg-gray-800 text-white font-medium flex items-center gap-2"
          >
            <Play className="h-5 w-5" /> Watch My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
