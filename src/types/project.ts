/**
 * Type definitions for projects and related data
 */

export enum ProjectCategory {
  Gaming = 'Gaming',
  LongForm = 'Long-form',
  ShortForm = 'Short-form'
}

export enum GamingSubCategory {
  RecentWorks = 'Recent works',
  ReEdits = 'Re-edits'
}

export enum ShortFormSubCategory {
  RecentWorks = 'Recent works',
  ReEdits = 'Re-edits'
}

/**
 * LongFormSubCategory is defined for future use when long-form projects are added.
 * Currently, there are no projects using this category, but the UI and filtering
 * logic are already prepared to support it.
 */
export enum LongFormSubCategory {
  RecentWorks = 'Recent works',
  ReEdits = 'Re-edits'
}

export type SubCategory = GamingSubCategory | ShortFormSubCategory | LongFormSubCategory;

export type VideoType = 'vimeo' | 'youtube' | 'long' | 'short' | 'none';

export interface Project {
  id: number;
  title: string; // Main title for the card
  videoTitle?: string; // Optional title for the video content
  category: ProjectCategory;
  subCategory?: SubCategory;
  imageUrl: string;
  videoType: VideoType[];
  videoId?: string;
  videoHash?: string;
  thumbnailUrl?: string;
  duration?: string; // Format: "2:30" or "1:20:45"
  description: string;
  editingTechniques: string[];
  clientTestimonial?: string;
  clientName?: string;
}

export interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
  themeSettings: Record<string, string>;
}

export interface VideoPlayerProps {
  project: Project;
  isLoading: boolean;
  onLoad: () => void;
}
