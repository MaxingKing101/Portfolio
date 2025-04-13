/**
 * Utility functions for scrolling behavior
 */

/**
 * Default offset for section scrolling (to account for fixed navbar)
 */
export const DEFAULT_SCROLL_OFFSET = 70;

/**
 * Scrolls the window to the top with smooth animation
 */
export function scrollToTop(): void {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth'
  });
}

/**
 * Scrolls to a specific section by ID with offset adjustment
 * @param id The ID of the section to scroll to
 * @param offset The offset to apply (defaults to DEFAULT_SCROLL_OFFSET)
 */
export function scrollToSection(id: string, offset: number = DEFAULT_SCROLL_OFFSET): void {
  const element = document.getElementById(id);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({ 
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Determines if an element is in the viewport
 * @param element The element to check
 * @param threshold The threshold percentage (0-1) of visibility required
 * @returns True if the element is in the viewport
 */
export function isElementInViewport(element: Element, threshold: number = 0.1): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Check if element is visible in the viewport
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0);
  
  // Calculate how much of the element is visible
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const visiblePercentage = visibleHeight / rect.height;
  
  return vertInView && horInView && visiblePercentage >= threshold;
}
