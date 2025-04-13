import { Film, Palette, Music } from 'lucide-react';
import { Service } from '@/types/service';

/**
 * Services data for the services section
 */
export const services: Service[] = [
  {
    id: 1,
    icon: <Film className="h-7 w-7 text-brand-blue" />,
    title: "Video Editing",
    description: "Transform your raw footage into compelling, polished content.",
  },
  {
    id: 2,
    icon: <Palette className="h-7 w-7 text-brand-purple" />,
    title: "Color Grading",
    description: "Color correction and grading to give your content the perfect visual tone and mood.",
  },
  {
    id: 3,
    icon: <Music className="h-7 w-7 text-brand-light-purple" />,
    title: "Sound Design",
    description: "Audio mixing and sound effects to create the perfect auditory experience.",
  }
];
