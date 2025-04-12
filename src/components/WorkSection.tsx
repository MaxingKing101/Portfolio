import { useEffect, useState, useRef, useCallback, memo, useMemo } from 'react';
import { Loader2, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Interfaces
interface Project {
  id: number;
  title: string; // Main title for the card
  videoTitle?: string; // Optional title for the video content
  category: ProjectCategory;
  subCategory?: GamingSubCategory | ShortFormSubCategory | LongFormSubCategory;
  imageUrl: string;
  videoType: ('vimeo' | 'youtube' | 'long' | 'short' | 'none')[];
  videoId?: string;
  videoHash?: string;
  thumbnailUrl?: string;
  duration?: string; // Format: "2:30" or "1:20:45"
  description: string;
  editingTechniques: string[];
  clientTestimonial?: string;
  clientName?: string;
}

interface WorkSectionProps {
  id?: string;
}

// Category Types
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

export enum LongFormSubCategory {
  RecentWorks = 'Recent works',
  ReEdits = 'Re-edits'
}

// Constants
const themeVars = {
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

const longFormVideoSettings = {
  '--card-hover-bg': 'rgba(255, 255, 255, 0.1)',
  '--card-hover-scale': '1.03',
  '--gradient-start': '#2a2a2a',
  '--gradient-end': '#1a1a1a',
  '--transition-duration': '0.4s',
  '--card-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--card-shadow-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '--card-width': '400px',
  '--card-height': '300px',
  '--card-padding': '1.5rem',
} as const;

const shortFormVideoSettings = {
  '--card-hover-bg': 'rgba(255, 255, 255, 0.1)',
  '--card-hover-scale': '1.03',
  '--gradient-start': '#1a1a1a',
  '--gradient-end': '#2a2a2a',
  '--transition-duration': '0.4s',
  '--card-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--card-shadow-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '--card-width': '240px',
  '--card-height': '420px',
  '--card-padding': '0.5rem',
} as const;

const getThemeSettings = (videoType: Project['videoType']) => {
  if (videoType.includes('long')) return longFormVideoSettings;
  if (videoType.includes('short')) return shortFormVideoSettings;
  return themeVars;
};

// Helper functions
const getVideoThumbnail = (project: Project): string => {
  return project.thumbnailUrl || project.imageUrl;
};

const getVideoEmbedUrl = (project: Project, autoplay: boolean = false): string => {
  if (project.videoType.includes('vimeo') && project.videoId) {
    const autoplayParam = autoplay ? '&autoplay=1&autopause=0' : '';
    const hashParam = project.videoHash ? `h=${project.videoHash}` : '';
    return `https://player.vimeo.com/video/${project.videoId}?${hashParam}&title=0&byline=0&portrait=0&badge=0&dnt=1&responsive=1&quality=auto${autoplayParam}`;
  }
  if (project.videoType.includes('youtube') && project.videoId) {
    const autoplayParam = autoplay ? '&autoplay=1&mute=1' : '';
    return `https://www.youtube.com/embed/${project.videoId}?rel=0&showinfo=0${autoplayParam}`;
  }
  return '';
};

// Project ranking utility
const rankProjects = (projects: Project[], customRanking?: { [id: number]: number }): Project[] => {
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

  return [...projects].sort((a, b) => {
    const rankA = ranking[a.id] ?? a.id;
    const rankB = ranking[b.id] ?? b.id;
    return rankA - rankB;
  }).slice(0, 6); // Limit to 6 cards
};

// Project configuration
const projectConfig: { [id: number]: Project } = {
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
    description: "The short that got 100K on TikTok, 16K on Youtube.",
    editingTechniques: ["Color Grading", "SFX", "Transitions", "Equalization", "Memes"],
    id: 4
  }
};

// Get all projects from config
const gamingProjects: Project[] = Object.values(projectConfig).filter(
  project => project.category === ProjectCategory.Gaming
);

const shortFormProjects: Project[] = Object.values(projectConfig).filter(
  project => project.category === ProjectCategory.ShortForm
);

const longFormProjects: Project[] = Object.values(projectConfig).filter(
  project => project.category === ProjectCategory.LongForm
);

// Combine and sort projects
const projects: Project[] = rankProjects([...gamingProjects, ...shortFormProjects, ...longFormProjects]);

// Components
interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
  isLoading: boolean;
  onImageLoad: () => void;
}

const ProjectCard = memo(({ project, onProjectClick, isLoading, onImageLoad }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const themeSettings = getThemeSettings(project.videoType);

  return (
    <motion.div 
      ref={ref}
      key={project.id} 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg overflow-hidden group relative cursor-pointer ${project.videoType.includes('short') ? 'w-[var(--card-width)] h-[var(--card-height)] mx-auto' : ''}`}
      onClick={() => onProjectClick(project)}
      onKeyDown={(e) => e.key === 'Enter' && onProjectClick(project)}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} project`}
      style={{
        '--card-hover-bg': themeSettings['--card-hover-bg'],
        '--card-hover-scale': themeSettings['--card-hover-scale'],
        '--gradient-start': themeSettings['--gradient-start'],
        '--gradient-end': themeSettings['--gradient-end'],
        '--transition-duration': themeSettings['--transition-duration'],
        '--card-shadow': themeSettings['--card-shadow'],
        '--card-shadow-hover': themeSettings['--card-shadow-hover'],
        '--card-width': themeSettings['--card-width'] || themeVars['--card-width'],
        '--card-height': themeSettings['--card-height'] || themeVars['--card-height'],
        '--card-padding': themeSettings['--card-padding'] || themeVars['--card-padding']
      } as React.CSSProperties}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
        </div>
      )}
      <img 
        src={project.imageUrl} 
        alt={`${project.title} project`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        onLoad={onImageLoad}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex flex-col justify-end p-[var(--card-padding)]">
        <motion.p 
          className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white"
          initial={{ y: 0, opacity: 1 }}
        >
          {project.category}
        </motion.p>
        <motion.h3 
          className="text-lg font-semibold text-white mt-2 glow-heading"
          initial={{ y: 0, opacity: 1 }}
        >
          {project.title}
        </motion.h3>
      </div>
    </motion.div>
  );
});

interface VideoPlayerProps {
  project: Project;
  isLoading: boolean;
  onLoad: () => void;
}

const VideoPlayer = memo(({ project, isLoading, onLoad }: VideoPlayerProps) => {
  const handleLoad = useCallback(() => {
    onLoad();
  }, [onLoad]);

  const handleError = useCallback((error: any) => {
    console.error('Video player error:', error);
  }, []);

  const themeSettings = getThemeSettings(project.videoType);

  return (
    <div className={`relative ${
      project.videoType.includes('short') ? 'h-[82vh] w-full' : 'aspect-video'
    }`} style={{
      '--card-hover-bg': themeSettings['--card-hover-bg'],
      '--card-hover-scale': themeSettings['--card-hover-scale'],
      '--gradient-start': themeSettings['--gradient-start'],
      '--gradient-end': themeSettings['--gradient-end'],
      '--transition-duration': themeSettings['--transition-duration'],
      '--card-shadow': themeSettings['--card-shadow'],
      '--card-shadow-hover': themeSettings['--card-shadow-hover']
    } as React.CSSProperties}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
        </div>
      )}
      {project.videoType.includes('vimeo') || project.videoType.includes('youtube') ? (
        <iframe
          src={getVideoEmbedUrl(project, true)}
          className="w-full h-full absolute inset-0"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
          allowFullScreen
          title={project.title}
          onLoad={handleLoad}
          onError={handleError}
          aria-label={`${project.title} video player`}
        />
      ) : (
        <div className="relative w-full h-full">
          <img 
            src={getVideoThumbnail(project)} 
            alt={`${project.title} thumbnail`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 group-hover:to-black/60 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-brand-purple/90 rounded-full p-4 transform group-hover:scale-110 transition-transform">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

const WorkSection: React.FC<WorkSectionProps> = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const [subCategory, setSubCategory] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const lockScroll = useCallback(() => {
    setIsScrollLocked(true);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px'; // Account for scrollbar width
  }, []);

  const unlockScroll = useCallback(() => {
    setIsScrollLocked(false);
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;

    let filtered = projects.filter(project => 
      project.category === filter
    );

    if (subCategory) {
      filtered = filtered.filter(project => {
        if (project.category === ProjectCategory.Gaming) {
          return project.subCategory === subCategory;
        } else if (project.category === ProjectCategory.ShortForm) {
          return project.subCategory === subCategory;
        } else if (project.category === ProjectCategory.LongForm) {
          return project.subCategory === subCategory;
        }
        return true;
      });
    }

    return filtered;
  }, [filter, subCategory, projects]);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
    lockScroll();
  }, [lockScroll]);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setVideoPlaying(false);
    unlockScroll();
  }, [unlockScroll]);

  const handleDocumentKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [handleDocumentKeyDown]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  }, [closeModal, modalRef]);

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (isScrollLocked) {
        unlockScroll();
      }
    };
  }, [selectedProject, closeModal, isScrollLocked, unlockScroll]);

  const handleImageLoad = useCallback(() => {
    setLoadingVideo(false);
  }, []);

  return (
    <section 
      id={id}
      className="py-16 px-4 sm:px-6 lg:px-8 min-h-screen"
      aria-label="Work portfolio"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-12 text-white glow-heading">
          My Work
        </h2>
        
        {/* Filter Section */}
        <div className="mb-8">
          <div className="hidden md:flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => {
                setFilter('all');
                setSubCategory('');
              }}
              className={`px-6 py-3 rounded-full text-base font-medium ${
                filter === 'all' ? 'bg-brand-purple text-white' : 'bg-gray-800 hover:bg-gray-700'
              }`}
              aria-current={filter === 'all' ? 'page' : undefined}
            >
              All
            </button>
            {Object.values(ProjectCategory).map(category => (
              <div key={category} className="flex flex-col gap-1">
                <button
                  onClick={() => {
                    setFilter(category);
                    if (category === ProjectCategory.Gaming && filter === ProjectCategory.Gaming) {
                      setSubCategory('');
                    }
                    if (category !== ProjectCategory.Gaming) {
                      setSubCategory('');
                    }
                  }}
                  className={`px-6 py-3 rounded-full text-base font-medium ${
                    filter === category ? 'bg-brand-purple text-white' : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  aria-current={filter === category ? 'page' : undefined}
                >
                  {category}
                </button>
                
                {/* Gaming subcategories buttons */}
                {category === ProjectCategory.Gaming && filter === ProjectCategory.Gaming && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (subCategory === GamingSubCategory.RecentWorks) {
                          setSubCategory('');
                        } else {
                          setSubCategory(GamingSubCategory.RecentWorks);
                        }
                      }}
                      className={`px-6 py-3 rounded-full text-base font-medium ${
                        subCategory === GamingSubCategory.RecentWorks ? 'bg-brand-purple text-white' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      Recent works
                    </button>
                    <button
                      onClick={() => {
                        if (subCategory === GamingSubCategory.ReEdits) {
                          setSubCategory('');
                        } else {
                          setSubCategory(GamingSubCategory.ReEdits);
                        }
                      }}
                      className={`px-6 py-3 rounded-full text-base font-medium ${
                        subCategory === GamingSubCategory.ReEdits ? 'bg-brand-purple text-white' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      Re-edits
                    </button>
                  </div>
                )}

                {/* Long-form subcategories buttons */}
                {category === ProjectCategory.LongForm && filter === ProjectCategory.LongForm && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (subCategory === LongFormSubCategory.RecentWorks) {
                          setSubCategory('');
                        } else {
                          setSubCategory(LongFormSubCategory.RecentWorks);
                        }
                      }}
                      className={`px-6 py-3 rounded-full text-base font-medium ${
                        subCategory === LongFormSubCategory.RecentWorks ? 'bg-brand-purple text-white' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      Recent works
                    </button>
                    <button
                      onClick={() => {
                        if (subCategory === LongFormSubCategory.ReEdits) {
                          setSubCategory('');
                        } else {
                          setSubCategory(LongFormSubCategory.ReEdits);
                        }
                      }}
                      className={`px-6 py-3 rounded-full text-base font-medium ${
                        subCategory === LongFormSubCategory.ReEdits ? 'bg-brand-purple text-white' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      Re-edits
                    </button>
                  </div>
                )}

                {/* Short-form subcategories buttons */}
                {category === ProjectCategory.ShortForm && filter === ProjectCategory.ShortForm && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        if (subCategory === ShortFormSubCategory.RecentWorks) {
                          setSubCategory('');
                        } else {
                          setSubCategory(ShortFormSubCategory.RecentWorks);
                        }
                      }}
                      className={`px-6 py-3 rounded-full text-base font-medium ${
                        subCategory === ShortFormSubCategory.RecentWorks ? 'bg-brand-purple text-white' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      Recent works
                    </button>
                    <button
                      onClick={() => {
                        if (subCategory === ShortFormSubCategory.ReEdits) {
                          setSubCategory('');
                        } else {
                          setSubCategory(ShortFormSubCategory.ReEdits);
                        }
                      }}
                      className={`px-6 py-3 rounded-full text-base font-medium ${
                        subCategory === ShortFormSubCategory.ReEdits ? 'bg-brand-purple text-white' : 'bg-gray-800 hover:bg-gray-700'
                      }`}
                    >
                      Re-edits
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Filter Dropdown */}
          <div className="md:hidden">
            <select
              value={filter}
              onChange={(e) => {
                const value = e.target.value as ProjectCategory | 'all';
                setFilter(value);
                if (value !== 'all') {
                  setSubCategory('');
                }
              }}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-purple"
            >
              <option value="all">All Categories</option>
              {Object.values(ProjectCategory).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {filter !== 'all' && (
              <select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium mt-2 focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                <option value="">All Subcategories</option>
                {filter === ProjectCategory.Gaming && (
                  <>
                    <option value={GamingSubCategory.RecentWorks}>Recent works</option>
                    <option value={GamingSubCategory.ReEdits}>Re-edits</option>
                  </>
                )}
                {filter === ProjectCategory.LongForm && (
                  <>
                    <option value={LongFormSubCategory.RecentWorks}>Recent works</option>
                    <option value={LongFormSubCategory.ReEdits}>Re-edits</option>
                  </>
                )}
                {filter === ProjectCategory.ShortForm && (
                  <>
                    <option value={ShortFormSubCategory.RecentWorks}>Recent works</option>
                    <option value={ShortFormSubCategory.ReEdits}>Re-edits</option>
                  </>
                )}
              </select>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onProjectClick={handleProjectClick}
              isLoading={loadingVideo}
              onImageLoad={handleImageLoad}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 bg-black/90 z-50 flex items-center justify-center ${
                selectedProject.videoType.includes('short') ? 'h-screen w-screen' : ''
              }`}
              onClick={closeModal}
              onKeyDown={handleKeyDown}
              role="dialog"
              aria-labelledby={`modal-${selectedProject.id}`}
              aria-modal="true"
              tabIndex={-1}
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-brand-deepest-blue rounded-lg ${
                  selectedProject.videoType.includes('short') 
                    ? 'w-full sm:w-[85%] max-w-[550px] h-[95vh] rounded-none' 
                    : 'max-w-4xl w-full max-h-[90vh]'
                } overflow-auto m-auto`}
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-3 sm:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 id={`modal-${selectedProject.id}`} className="text-xl sm:text-2xl font-bold glow-heading">
                      {selectedProject.videoTitle || selectedProject.title}
                    </h3>
                    <button 
                      onClick={closeModal}
                      className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Duration:</span>
                        <span className="text-sm font-medium">{selectedProject.duration}</span>
                      </div>
                      <span className="text-sm text-gray-400">{selectedProject.category}</span>
                    </div>

                    <div className={`relative ${
                      selectedProject.videoType.includes('short') 
                        ? 'h-[82vh] w-full' 
                        : 'aspect-video bg-black rounded-lg'
                    } overflow-hidden`}>
                      {selectedProject.videoType.includes('vimeo') || selectedProject.videoType.includes('youtube') ? (
                        videoPlaying ? (
                          <VideoPlayer 
                            project={selectedProject}
                            isLoading={loadingVideo}
                            onLoad={() => setLoadingVideo(false)}
                          />
                        ) : (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full h-full relative cursor-pointer group overflow-hidden"
                            onClick={() => {
                              setVideoPlaying(true);
                            }}
                            onKeyDown={(e) => e.key === 'Enter' && setVideoPlaying(true)}
                            tabIndex={0}
                            role="button"
                            aria-label={`Play ${selectedProject.title} video`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 group-hover:to-black/60 transition-all duration-300" />
                            <img 
                              src={getVideoThumbnail(selectedProject)} 
                              alt={`${selectedProject.title} thumbnail`}
                              className={`w-full h-full object-cover transition-transform duration-300 ${
                                selectedProject.videoType.includes('short') 
                                  ? 'group-hover:scale-[1.05]'
                                  : 'group-hover:scale-[1.05]'
                              }`}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-brand-purple/90 rounded-full p-4 transform group-hover:scale-110 transition-transform">
                                <Play className="w-12 h-12 text-white" />
                              </div>
                            </div>
                          </motion.div>
                        )
                      ) : (
                        <img 
                          src={selectedProject.imageUrl} 
                          alt={selectedProject.title}
                          className={`w-full h-full object-cover transition-transform duration-300 ${
                            selectedProject.videoType.includes('short') 
                              ? 'group-hover:scale-[1.05]'
                              : 'group-hover:scale-[1.02]'
                          }`}
                          width={1280}
                          height={720}
                          loading="eager"
                        />
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="text-gray-300">
                        <h4 className="font-semibold mb-3 text-lg">Description</h4>
                        <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
                      </div>

                      <div className="text-gray-300">
                        <h4 className="font-semibold mb-3 text-lg">Editing Techniques Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.editingTechniques.map(technique => (
                            <span 
                              key={technique}
                              className="px-3 py-1.5 bg-gradient-to-r from-brand-purple/30 to-brand-purple/20 rounded-full text-sm font-medium"
                            >
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>

                      {selectedProject.clientTestimonial && (
                        <div className="text-gray-300">
                          <h4 className="font-semibold mb-3 text-lg">Client Feedback</h4>
                          <blockquote className="text-gray-400 italic text-lg leading-relaxed">
                            "{selectedProject.clientTestimonial}"
                          </blockquote>
                          <p className="text-gray-400 mt-4 font-medium">-{selectedProject.clientName}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkSection;
