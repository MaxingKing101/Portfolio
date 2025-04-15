import { memo } from 'react';
import { Loader2 } from 'lucide-react';
import { Project } from '@/types/project';

interface VideoPlayerProps {
  project: Project;
  isLoading: boolean;
  onLoad: () => void;
}

/**
 * Video player component for project videos
 */
const VideoPlayer: React.FC<VideoPlayerProps> = ({ project, isLoading, onLoad }) => {
  if (project.videoType.includes('vimeo')) {
    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
            <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
          </div>
        )}
        <iframe
          src={`https://player.vimeo.com/video/${project.videoId}?h=${project.videoHash}&autoplay=1&loop=1&title=0&byline=0&portrait=0&dnt=1`}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={onLoad}
          title={project.title}
        ></iframe>
      </div>
    );
  }

  if (project.videoType.includes('youtube')) {
    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
            <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
          </div>
        )}
        <iframe
          src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=0&controls=1&origin=${window.location.origin}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={onLoad}
          title={project.title}
        ></iframe>
      </div>
    );
  }

  return null;
};

export default memo(VideoPlayer);
