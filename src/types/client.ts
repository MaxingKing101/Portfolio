import { ReactNode } from 'react';

/**
 * Type definitions for clients/testimonials and related data
 */

export interface Testimonial {
  id: number;
  icon: ReactNode;
  name: string;
  role: string;
  comment: string;
}

export interface TestimonialCardProps {
  client: Testimonial;
  index: number;
  isHovered: boolean;
  isFocused: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
}
