import { Instagram, Twitter as TwitterIcon } from 'lucide-react';

/**
 * Social media links configuration
 */
export const socialLinks = [
  {
    name: 'Instagram',
    icon: <Instagram size={36} strokeWidth={1.75} />,
    url: 'https://instagram.com/maxingking101',
    color: 'hover:text-pink-500'
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon size={36} strokeWidth={1.75} />,
    url: 'https://x.com/MaxingKingVFX',
    color: 'hover:text-blue-400'
  }
];
