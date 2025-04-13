import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  name: string;
  icon: ReactNode;
  url?: string;
  color?: string;
  className?: string;
  username?: string;
}

/**
 * A reusable social media link component
 */
const SocialLink: React.FC<SocialLinkProps> = ({
  name,
  icon,
  url,
  color = 'hover:text-brand-purple',
  className,
}) => {
  if (!url) {
    return (
      <div className={cn(`text-gray-400 ${color}`, className)}>
        {icon}
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(`text-gray-400 transition-colors duration-300 ${color}`, className)}
      aria-label={`Follow on ${name}`}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
