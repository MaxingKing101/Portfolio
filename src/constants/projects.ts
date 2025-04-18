// LongFormSubCategory is imported for future use but not currently used in any project
import { Project, ProjectCategory, GamingSubCategory, ShortFormSubCategory, LongFormSubCategory } from '@/types/project';

/**
 * Project configuration data
 */
export const projectConfig: { [id: number]: Project } = {
  1: {
    title: "ZBRA",
    videoTitle: "Fine, I'll Do It Myself.",
    category: ProjectCategory.Gaming,
    subCategory: GamingSubCategory.ReEdits,
    imageUrl: "https://i.ibb.co/0jjgJ7T0/thumb-1.jpg",
    videoType: ['vimeo', 'long'],
    videoId: "1074270789",
    videoHash: "8538c1e45e",
    thumbnailUrl: "https://i.ibb.co/GfKvBsKb/a98525a4-563d-4e02-b78a-143e815ee444.jpg",
    duration: "0:55",
    description: "If I edited ZBRA's video",
    editingTechniques: ["Color Grading", "SFX", "Voice lines", "Equalization"],
    id: 1
  },
  2: {
    title: "Bellaboo OW",
    videoTitle: "This Wrecking Ball Perk is Actually BROKEN!",
    category: ProjectCategory.Gaming,
    subCategory: GamingSubCategory.ReEdits,
    imageUrl: "https://i.ibb.co/My2NsbBr/thumb.jpg",
    videoType: ['vimeo'],
    videoId: "1074265085",
    videoHash: "495fb1c813",
    thumbnailUrl: "https://i.ibb.co/HDZL4ZH7/pgq5w-Wy-KFl-E-HD.jpg",
    duration: "0:27",
    description: "If I was Bellaboo's Editor",
    editingTechniques: ["Color Grading", "SFX", "Visual Effects", "Equalization"],
    id: 2
  },
  3: {
    title: "UnsaltedSalt",
    videoTitle: "This is WHY R.E.P.O. is The BEST Extraction Game",
    category: ProjectCategory.Gaming,
    subCategory: GamingSubCategory.RecentWorks,
    imageUrl: "https://i.ibb.co/Y4NY0wpT/thumb.jpg",
    videoType: ['vimeo'],
    videoId: "1074652341",
    videoHash: "fb04a95288",
    thumbnailUrl: "https://i.ibb.co/7N6c6yFR/REPO.png",
    duration: "0:58",
    description: "Content Highlights for UnsaltedSalt R.E.P.O's gameplay",
    editingTechniques: ["Color Grading", "SFX", "Transitions", "Equalization", "POV"],
    id: 3
  },
  4: {
    title: "UnsaltedSalt",
    videoTitle: "AI will take over the world Meanwhile AI",
    category: ProjectCategory.Gaming,
    subCategory: ShortFormSubCategory.RecentWorks,
    imageUrl: "https://i.ibb.co/DDYHthTy/thumb.jpg",
    videoType: ['vimeo', 'short'],
    videoId: "1074964808",
    videoHash: "c758a663eb",
    thumbnailUrl: "https://i.ibb.co/DDYHthTy/thumb.jpg",
    duration: "0:46",
    description: "The short that got 100K on TikTok, 16K on Youtube",
    editingTechniques: ["Color Grading", "SFX", "Transitions", "Equalization", "Memes"],
    id: 4
  },
  5: {
    title: "UnsaltedSalt",
    videoTitle: "Tank Players THESE Days are SOMETHING Else",
    category: ProjectCategory.Gaming,
    subCategory: ShortFormSubCategory.RecentWorks,
    imageUrl: "https://i.ibb.co/KxCSvWp0/thumb.jpg",
    videoType: ['vimeo', 'short'],
    videoId: "1076684094",
    videoHash: "7386418452",
    thumbnailUrl: "https://i.ibb.co/KxCSvWp0/thumb.jpg",
    duration: "0:25",
    description: "The best short I have ever made recently",
    editingTechniques: ["Color Grading", "SFX", "Transitions", "Equalization", "Memes"],
    id: 5
  },
  6: {
    title: "UnsaltedSalt",
    videoTitle: "Bro didn’t deserve that for borrowing a candle",
    category: ProjectCategory.Gaming,
    subCategory: ShortFormSubCategory.RecentWorks,
    imageUrl: "https://i.ibb.co/3YNY22Zm/thumb-1.jpg",
    videoType: ['vimeo', 'short'],
    videoId: "1076698006",
    videoHash: "3797b91018",
    thumbnailUrl: "https://i.ibb.co/3YNY22Zm/thumb-1.jpg",
    duration: "0:24",
    description: "Some horror gameplay",
    editingTechniques: ["Color Grading", "SFX", "Transitions", "Equalization"],
    id: 6
  }
};

/**
 * Theme settings for different video types
 */
export const themeVars = {
  '--card-hover-bg': 'rgba(255, 255, 255, 0.1)',
  '--card-hover-scale': '1.03',
  '--gradient-start': '#2a2a2a',
  '--gradient-end': '#1a1a1a',
  '--transition-duration': '0.4s',
  '--card-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--card-shadow-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '--card-width': '320px',
  '--card-height': '240px',
  '--card-padding': '1rem',
} as const;

export const longFormVideoSettings = {
  ...themeVars,
  '--card-width': '320px',
  '--card-height': '240px',
};

export const shortFormVideoSettings = {
  ...themeVars,
  '--card-width': '240px',
  '--card-height': '420px',
  '--card-padding': '0.5rem',
} as const;

/**
 * Gets theme settings based on video type
 */
export const getThemeSettings = (videoType: string | string[]) => {
  const types = Array.isArray(videoType) ? videoType : [videoType];
  if (types.includes('long')) return longFormVideoSettings;
  if (types.includes('short')) return shortFormVideoSettings;
  return themeVars;
};

/**
 * Project ranking utility
 */
export const rankProjects = (projects: Project[], customRanking?: { [id: number]: number }): Project[] => {
  // Default ranking configuration
  const defaultRanking: { [id: number]: number } = {
    1: 1, // ZBRA
    2: 2, // Bellaboo OW
    3: 3, // UnsaltedSalt
    4: 4, // Placeholder for future project
    5: 5, // Placeholder for future project
    6: 6  // Placeholder for future project
  };

  // Merge custom ranking with defaults
  const ranking = customRanking ? { ...defaultRanking, ...customRanking } : defaultRanking;

  const sorted = [...projects].sort((a, b) => {
    const rankA = ranking[a.id] ?? a.id;
    const rankB = ranking[b.id] ?? b.id;
    return rankA - rankB;
  });

  return sorted;
};

// Get all projects from config by category
export const gamingProjects: Project[] = Object.values(projectConfig).filter(
  project => project.category === ProjectCategory.Gaming
);

export const shortFormProjects: Project[] = Object.values(projectConfig).filter(
  project => project.category === ProjectCategory.ShortForm
);

/**
 * This array is currently empty as there are no long-form projects defined yet.
 * It's prepared for future content when long-form projects are added to the projectConfig.
 */
export const longFormProjects: Project[] = Object.values(projectConfig).filter(
  project => project.category === ProjectCategory.LongForm
);

// Combine and sort projects
export const projects: Project[] = rankProjects([...gamingProjects, ...shortFormProjects, ...longFormProjects]);
