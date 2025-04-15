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
  background?: 'dark' | 'light' | 'transparent';
  showTransitionTop?: boolean;
  showTransitionBottom?: boolean;
  titleOverTransition?: boolean;
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
  background = 'dark',
  showTransitionTop = false,
  showTransitionBottom = false,
  titleOverTransition = false,
  ariaLabelledby,
  ariaLabel,
}) => {
  const titleId = ariaLabelledby || (title ? `${id}-title` : undefined);

  const backgroundClasses = {
    'dark': 'section-overlay-dark',
    'light': 'section-overlay-light',
    'transparent': '',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-12 sm:py-20 relative',
        backgroundClasses[background],
        showTransitionTop && 'section-transition-top',
        showTransitionBottom && 'section-transition-bottom',
        className
      )}
      aria-labelledby={titleId}
      aria-label={ariaLabel}
    >
      {/* Title positioned over transition if titleOverTransition is true */}
      {title && titleOverTransition && (
        <div className="absolute top-0 left-0 right-0 z-10 transform -translate-y-1/2">
          <div className="container mx-auto px-3 sm:px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <h2
                id={titleId}
                className={cn(
                  "text-3xl sm:text-4xl font-bold uppercase text-white px-8 py-4 bg-black/70 backdrop-blur-sm rounded-lg inline-block shadow-lg shadow-black/30 glow-heading",
                  titleClassName
                )}
              >
                {title}
                {showUnderline && (
                  <div className="w-24 h-1.5 bg-brand-purple mt-3 mx-auto transition-all duration-300 hover:w-32"></div>
                )}
              </h2>
            </motion.div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        {title && !titleOverTransition && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              id={titleId}
              className={cn(
                "text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 uppercase text-white glow-heading",
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
