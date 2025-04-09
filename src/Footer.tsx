
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black text-gray-400 text-center text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 animate-fade-in">© {currentYear} MaxingKing. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a href="https://instagram.com/maxingking101" target="_blank" rel="noopener noreferrer" 
              className="text-gray-500 hover:text-brand-purple transition-colors hover-scale">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com/maxingking101" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-purple transition-colors hover-scale">
              <Twitter size={18} />
            </a>
            <div className="text-gray-500">
              <Youtube size={18} />
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Mail size={18} />
              <span className="text-xs">maxingking101@proton.me</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
