import { useEffect, useState, useRef, useCallback, memo } from 'react';
import { Loader2, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Interfaces
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  videoType?: 'vimeo' | 'youtube' | 'none';
  videoId?: string;
  videoHash?: string;
  thumbnailUrl?: string;
}

interface WorkSectionProps {
  id?: string;
}

// Constants
const themeVars = {
  '--card-hover-bg': 'rgba(255, 255, 255, 0.05)',
  '--card-hover-scale': '1.02',
  '--gradient-start': '#1a1a1a',
  '--gradient-end': '#0a0a0a',
  '--transition-duration': '0.3s',
} as const;

// Helper functions
const getVideoThumbnail = (project: Project): string => {
  return project.thumbnailUrl || project.imageUrl;
};

const getVideoEmbedUrl = (project: Project, autoplay: boolean = false): string => {
  if (project.videoType === 'vimeo' && project.videoId) {
    const autoplayParam = autoplay ? '&autoplay=1' : '';
    const hashParam = project.videoHash ? `h=${project.videoHash}` : '';
    return `https://player.vimeo.com/video/${project.videoId}?${hashParam}&title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1&responsive=1&quality=auto${autoplayParam}`;
  }
  if (project.videoType === 'youtube' && project.videoId) {
    const autoplayParam = autoplay ? '&autoplay=1' : '';
    return `https://www.youtube.com/embed/${project.videoId}?rel=0&showinfo=0${autoplayParam}`;
  }
  return '';
};

// Static data
const projects: Project[] = [
  {
    id: 1,
    title: "Code Portfolio",
    category: "Programming",
    imageUrl: "/lovable-uploads/df40c52e-74b2-405e-8bf3-b4da4fbe1436.png",
    videoType: "vimeo",
    videoId: "1074265085",
    videoHash: "495fb1c813",
    thumbnailUrl: "https://i.ibb.co/My2NsbBr/thumb.jpg"
  },
  {
    id: 2,
    title: "Web Development",
    category: "Coding",
    imageUrl: "/lovable-uploads/311b60eb-ab56-4371-9a27-acc2a62a5223.png",
    videoType: "vimeo",
    videoId: "1074270789",
    videoHash: "8538c1e45e",
    thumbnailUrl: "https://i.ibb.co/0jjgJ7T0/thumb-1.jpg"
  },
  {
    id: 3,
    title: "DevOps Project",
    category: "Technology",
    imageUrl: "/lovable-uploads/9a096096-b125-4e73-9440-c8796fbc36fe.png",
    videoType: "none"
  },
  {
    id: 4,
    title: "Hardware Integration",
    category: "Engineering",
    imageUrl: "/lovable-uploads/df40c52e-74b2-405e-8bf3-b4da4fbe1436.png",
    videoType: "none"
  },
  {
    id: 5,
    title: "Matrix Code",
    category: "Programming",
    imageUrl: "/lovable-uploads/311b60eb-ab56-4371-9a27-acc2a62a5223.png",
    videoType: "none"
  },
  {
    id: 6,
    title: "Advanced Coding",
    category: "Development",
    imageUrl: "/lovable-uploads/9a096096-b125-4e73-9440-c8796fbc36fe.png",
    videoType: "none"
  },
];

// Components
const ProjectCard = memo(({ project, onProjectClick, isLoading, onImageLoad }: {
  project: Project;
  onProjectClick: (project: Project) => void;
  isLoading: boolean;
  onImageLoad: (projectId: number) => void;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div 
      ref={ref}
      key={project.id} 
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden group relative cursor-pointer"
      onClick={() => onProjectClick(project)}
      onKeyDown={(e) => e.key === 'Enter' && onProjectClick(project)}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} project`}
      style={{
        '--card-hover-bg': themeVars['--card-hover-bg'],
        '--card-hover-scale': themeVars['--card-hover-scale'],
        '--gradient-start': themeVars['--gradient-start'],
        '--gradient-end': themeVars['--gradient-end'],
        '--transition-duration': themeVars['--transition-duration'],
      } as React.CSSProperties}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
        </div>
      )}
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        loading="lazy"
        onLoad={() => onImageLoad(project.id)}
        width={400}
        height={256}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[5%] bg-gradient-to-t from-[var(--gradient-start)] via-[var(--gradient-end)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <h3 className="text-xl font-semibold text-white glow-heading transition-colors duration-300 group-hover:text-brand-purple">{project.title}</h3>
          <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white">{project.category}</p>
        </div>
      </div>
    </motion.div>
  );
});

const VideoPlayer = memo(({ project, isLoading, onLoad }: {
  project: Project;
  isLoading: boolean;
  onLoad: () => void;
}) => {
  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
        </div>
      )}
      <iframe
        src={getVideoEmbedUrl(project, true)}
        className="w-full h-full rounded-lg"
        frameBorder="0" 
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
        allowFullScreen
        title={project.title}
        onLoad={onLoad}
      />
    </div>
  );
});

const WorkSection: React.FC<WorkSectionProps> = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loadingImages, setLoadingImages] = useState<Set<number>>(new Set());
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleImageLoad = useCallback((projectId: number) => {
    setLoadingImages((prev) => {
      const newSet = new Set(prev);
      newSet.delete(projectId);
      return newSet;
    });
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setVideoPlaying(false);
  }, []);

  const handleVideoPlay = useCallback(() => {
    setVideoPlaying(true);
  }, []);

  const handleDivKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    const handleDocumentKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [closeModal]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [handleClickOutside]);

  return (
    <section id={id} className="py-20 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 glow-heading">
            My Work
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my skills and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onProjectClick={handleProjectClick}
              isLoading={loadingImages.has(project.id)}
              onImageLoad={handleImageLoad}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
            ref={overlayRef}
            role="dialog"
            aria-labelledby={`modal-${selectedProject.id}`}
            aria-modal="true"
            onClick={closeModal}
            onKeyDown={handleDivKeyDown}
            tabIndex={0}
            aria-label={`View ${selectedProject.title} project`}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-deepest-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-3 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 id={`modal-${selectedProject.id}`} className="text-xl sm:text-2xl font-bold glow-heading">
                    {selectedProject.title}
                  </h3>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>
                <div className="aspect-video bg-black rounded-lg mb-4 overflow-hidden relative">
                  {selectedProject.videoType && selectedProject.videoType !== 'none' ? (
                    videoPlaying ? (
                      <VideoPlayer 
                        project={selectedProject}
                        isLoading={loadingVideo}
                        onLoad={() => setLoadingVideo(false)}
                      />
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full relative cursor-pointer group"
                        onClick={handleVideoPlay}
                        onKeyDown={(e) => e.key === 'Enter' && handleVideoPlay()}
                        tabIndex={0}
                        role="button"
                        aria-label={`Play ${selectedProject.title} video`}
                      >
                        <img 
                          src={getVideoThumbnail(selectedProject)} 
                          alt={`${selectedProject.title} thumbnail`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                        >
                          <div className="bg-brand-purple/80 rounded-full p-4 transform group-hover:scale-110 transition-transform">
                            <Play className="w-12 h-12 text-white" />
                          </div>
                        </motion.div>
                      </motion.div>
                    )
                  ) : (
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      width={1280}
                      height={720}
                    />
                  )}
                </div>
                <div className="text-gray-300">
                  <p className="mb-2"><strong>Category:</strong> {selectedProject.category}</p>
                  <p>
                    This is a showcase of my professional video editing work. Each project represents unique challenges 
                    and creative solutions implemented to deliver stunning visual content.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(WorkSection);
