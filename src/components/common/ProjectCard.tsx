import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Project } from '@/types/project';

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const onImageLoad = () => {
    setIsLoading(false);
    if (externalImageLoad) {
      externalImageLoad();
    }
  };

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
};

export default ProjectCard;
