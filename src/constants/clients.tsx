import { UserRound, Users, Sparkles, HandHeart } from 'lucide-react';
import { Testimonial } from '@/types/client';

/**
 * Client testimonials data
 */
export const clients: Testimonial[] = [
  {
    id: 1,
    icon: <UserRound className="h-8 w-8 text-brand-light-purple" />,
    name: "",
    role: "",
    comment: ""
  },
  {
    id: 2,
    icon: <Users className="h-8 w-8 text-brand-blue" />,
    name: "",
    role: "",
    comment: ""
  },
  {
    id: 3,
    icon: <Sparkles className="h-8 w-8 text-brand-purple" />,
    name: "",
    role: "",
    comment: ""
  },
  {
    id: 4,
    icon: <HandHeart className="h-8 w-8 text-brand-light-purple" />,
    name: "",
    role: "",
    comment: ""
  }
];
