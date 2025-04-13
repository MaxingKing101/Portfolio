import { ReactNode } from 'react';

/**
 * Type definitions for services and related data
 */

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}
