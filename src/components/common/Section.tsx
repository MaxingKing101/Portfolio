import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  showUnderline?: boolean;
  background?: 'black' | 'brand-deepest-blue' | 'transparent';
  ariaLabelledby?: string;
  ariaLabel?: string;
}

/**
 * A reusable section component with consistent styling and animations
 */
const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  showUnderline = true,
  background = 'black',
  ariaLabelledby,
  ariaLabel,
}) => {
  const titleId = ariaLabelledby || (title ? `${id}-title` : undefined);
  
  const backgroundClasses = {
    'black': 'bg-black',
    'brand-deepest-blue': 'bg-brand-deepest-blue',
    'transparent': 'bg-transparent',
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-12 sm:py-20',
        backgroundClasses[background],
        className
      )}
      aria-labelledby={titleId}
      aria-label={ariaLabel}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              id={titleId} 
              className={cn(
                "text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 uppercase text-white",
                titleClassName
              )}
            >
              {title}
              {showUnderline && (
                <div className="w-24 h-1.5 bg-brand-purple mt-2 transition-all duration-300 hover:w-32"></div>
              )}
            </h2>
            
            {subtitle && (
              <p className={cn("text-gray-300 max-w-2xl mb-8", subtitleClassName)}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default Section;
