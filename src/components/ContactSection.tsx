
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { toast } from 'sonner'; // Importing toast directly from sonner

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-brand-deepest-blue">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text animate-fade-in">
          LET'S GET SERIOUS
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Ready to enhance your visual content? Reach out through any of these
          channels and let's create something amazing together.
        </p>
        
        <div className="flex justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="https://instagram.com/maxingking101" target="_blank" rel="noopener noreferrer" 
            className="text-gray-400 hover:text-brand-purple transition-colors hover-scale">
            <Instagram size={24} />
          </a>
          <a href="https://twitter.com/maxingking101" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-purple transition-colors hover-scale">
            <Twitter size={24} />
          </a>
          <div className="text-gray-400 flex items-center hover-scale">
            <Youtube size={24} />
          </div>
          <div className="text-gray-400 flex items-center gap-2 hover-scale">
            <Mail size={24} />
            <span className="text-gray-300">maxingking101@proton.me</span>
          </div>
        </div>
        
        <div className="max-w-md mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://twitter.com/maxingking101" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full rounded-md py-6 gradient-button text-white font-medium transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            onClick={() => toast.success("Connecting to Twitter...")}
          >
            <Twitter size={20} /> Let's Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
