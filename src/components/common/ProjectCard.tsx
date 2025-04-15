import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Project } from '@/types/project';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
  isLoading?: boolean;
  onImageLoad?: () => void;
  themeSettings: Record<string, string>;
}

/**
 * A reusable project card component
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onProjectClick,
  isLoading: _externalLoading,
  onImageLoad: externalImageLoad,
  themeSettings
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const ref = useRef(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  // Delay constants in milliseconds
  const HOVER_DELAY = 300; // 400ms delay before video starts loading
  const VIDEO_START_DELAY = 950; // Additional delay to ensure video has started playing

  const onImageLoad = () => {
    setIsLoading(false);
    if (externalImageLoad) {
      externalImageLoad();
    }
  };

  // Generate video embed URL with muted parameter
  const getVideoEmbedUrl = (autoplay: boolean = false): string => {
    if (project.videoType.includes('vimeo') && project.videoId) {
      const autoplayParam = autoplay ? '&autoplay=1&autopause=0&muted=1&background=1&loop=1' : '';
      const hashParam = project.videoHash ? `h=${project.videoHash}` : '';
      return `https://player.vimeo.com/video/${project.videoId}?${hashParam}&title=0&byline=0&portrait=0&badge=0&dnt=1&responsive=1&quality=auto${autoplayParam}`;
    }
    if (project.videoType.includes('youtube') && project.videoId) {
      const autoplayParam = autoplay ? `&autoplay=1&mute=1&loop=1&playlist=${project.videoId}` : '';
      return `https://www.youtube.com/embed/${project.videoId}?rel=0&showinfo=0${autoplayParam}`;
    }
    return '';
  };

  // Handle video load event
  const handleVideoLoad = () => {
    // Add a small delay after the video is loaded to ensure it has started playing
    // This helps with the transition from thumbnail to video
    const videoStartTimer = setTimeout(() => {
      if (shouldPlayVideo) {
        setVideoPlaying(true);
      }
    }, VIDEO_START_DELAY);

    // Clean up the timer if component unmounts or user moves away
    return () => clearTimeout(videoStartTimer);
  };

  // Reset iframe when hover is lost
  useEffect(() => {
    if (!shouldPlayVideo && videoRef.current) {
      // Force the iframe to reset when hover is lost
      const currentSrc = videoRef.current.src;
      videoRef.current.src = '';
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.src = currentSrc.replace('autoplay=1', 'autoplay=0');
        }
      }, 50);
    }
  }, [shouldPlayVideo]);

  // Handle mouse enter/leave events with delay
  const handleMouseEnter = () => {
    // Clear any existing timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }

    // Set a timer to start playing the video after delay
    hoverTimerRef.current = setTimeout(() => {
      setShouldPlayVideo(true);
    }, HOVER_DELAY);
  };

  const handleMouseLeave = () => {
    // Immediately reset states when mouse leaves
    setShouldPlayVideo(false);
    setVideoPlaying(false);

    // Clear the timer if mouse leaves before delay completes
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg overflow-hidden group relative cursor-pointer ${project.videoType.includes('short') ? 'w-[var(--card-width)] h-[var(--card-height)] mx-auto' : ''}`}
      onClick={() => onProjectClick(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        '--card-width': themeSettings['--card-width'] || '320px',
        '--card-height': themeSettings['--card-height'] || '240px',
        '--card-padding': themeSettings['--card-padding'] || '1rem'
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
      {/* Always show the image, but hide it only when video is actually playing */}
      <img
        src={project.imageUrl}
        alt={`${project.title} project`}
        className={cn(
          "w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]",
          videoPlaying && shouldPlayVideo ? "opacity-0 transition-opacity duration-300" : "opacity-100"
        )}
        onLoad={onImageLoad}
      />

      {/* Always render the video iframe but only show it when hovered and delay has passed */}
      {project.videoId && (project.videoType.includes('vimeo') || project.videoType.includes('youtube')) && (
        <div className={cn(
          "absolute inset-0 w-full h-full transition-opacity duration-300",
          videoPlaying && shouldPlayVideo ? "opacity-100" : "opacity-0"
        )}>
          <iframe
            ref={videoRef}
            src={getVideoEmbedUrl(shouldPlayVideo)}
            className="w-full h-full"
            style={{ border: 0 }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={project.title}
            aria-label={`${project.title} video preview`}
            onLoad={handleVideoLoad}
          />
        </div>
      )}
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
};

export default ProjectCard;
