import { Instagram, Twitter, Youtube, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={18} />,
      url: 'https://instagram.com/maxingking101',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      url: 'https://twitter.com/maxingking101',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={18} />,
      color: 'hover:text-red-500'
    }
  ];
  
  return (
    <footer className="py-8 bg-black text-gray-400" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 animate-fade-in">
              © {currentYear} MaxingKing. All rights reserved.
            </p>
          </div>
          
          <nav 
            className="flex gap-6 animate-fade-in" 
            style={{ animationDelay: '0.2s' }}
            aria-label="Social media links"
          >
            {socialLinks.map((link, index) => 
              link.url ? (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-all duration-300 hover-scale group ${link.color}`}
                  aria-label={`Follow on ${link.name}`}
                >
                  {link.icon}
                  <ExternalLink 
                    size={12} 
                    className="hidden group-hover:inline-block ml-1 transform translate-y-[-2px]" 
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <div key={link.name} className={`text-gray-500 hover-scale ${link.color}`}>
                  {link.icon}
                </div>
              )
            )}
            <div className="flex items-center gap-2 text-gray-500 hover-scale group">
              <Mail size={18} aria-hidden="true" />
              <a 
                href="mailto:maxingking101@proton.me"
                className="text-xs transition-colors hover:text-brand-purple"
                aria-label="Send email"
              >
                maxingking101@proton.me
              </a>
            </div>
          </nav>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>Made with passion for video editing and web development</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
