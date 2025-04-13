/**
 * Animation utility functions and constants for consistent animations across components
 */

/**
 * Standard fade-in animation variants for Framer Motion
 */
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.6, ease: "easeOut" }
};

/**
 * Animation variants for staggered children animations
 */
export const staggerContainer = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: { opacity: 0 }
};

/**
 * Animation variants for card items in a grid
 */
export const cardItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5 }
};

/**
 * Animation variants for hover effects
 */
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.3 }
};

/**
 * Creates a staggered delay based on index
 * @param index The index of the item in a list
 * @param baseDelay The base delay before starting the stagger
 * @param staggerAmount The amount of delay between each item
 * @returns The calculated delay
 */
export function getStaggerDelay(index: number, baseDelay = 0.2, staggerAmount = 0.1): number {
  return baseDelay + (index * staggerAmount);
}
