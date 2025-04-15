import { Mail } from 'lucide-react';
import SocialLink from '@/components/common/SocialLink';
import { socialLinks } from '../../constants/social';

// Define the type for social links
interface SocialLinkType {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

/**
 * Footer component with social links
 */
const Footer = () => {
  return (
    <footer className="py-4 sm:py-6 bg-black text-gray-400" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-full">
          <nav
            className="flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-6"
            aria-label="Social media links"
          >
            {socialLinks.map((link: SocialLinkType) => (
              <div key={link.name} className="inline-flex">
                <SocialLink
                  name={link.name}
                  icon={link.icon}
                  url={link.url}
                  color={link.color}
                  className="scale-90 sm:scale-100"
                />
              </div>
            ))}
            <div className="inline-flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2.3"
                className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px]"
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
              <span className="text-xs sm:text-sm">maxingking_</span>
            </div>
            <div className="inline-flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-brand-purple transition-colors duration-300">
              <a
                href="mailto:maxingking101@proton.me"
                className="flex items-center gap-1 sm:gap-2"
                aria-label="Send email"
              >
                <Mail size={24} className="sm:w-[26px] sm:h-[26px]" aria-hidden="true" />
                <span className="text-xs sm:text-sm hidden xs:inline-block">maxingking101@proton.me</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
