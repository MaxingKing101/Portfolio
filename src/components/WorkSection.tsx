import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Code Portfolio",
    category: "Programming",
    imageUrl: "/lovable-uploads/df40c52e-74b2-405e-8bf3-b4da4fbe1436.png",
    videoUrl: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: 2,
    title: "Web Development",
    category: "Coding",
    imageUrl: "/lovable-uploads/311b60eb-ab56-4371-9a27-acc2a62a5223.png",
    videoUrl: "https://www.youtube.com/watch?v=example2"
  },
  {
    id: 3,
    title: "DevOps Project",
    category: "Technology",
    imageUrl: "/lovable-uploads/9a096096-b125-4e73-9440-c8796fbc36fe.png",
    videoUrl: "https://www.youtube.com/watch?v=example3"
  },
  {
    id: 4,
    title: "Hardware Integration",
    category: "Engineering",
    imageUrl: "/lovable-uploads/df40c52e-74b2-405e-8bf3-b4da4fbe1436.png",
    videoUrl: "https://www.youtube.com/watch?v=example4"
  },
  {
    id: 5,
    title: "Matrix Code",
    category: "Programming",
    imageUrl: "/lovable-uploads/311b60eb-ab56-4371-9a27-acc2a62a5223.png",
    videoUrl: "https://www.youtube.com/watch?v=example5"
  },
  {
    id: 6,
    title: "Advanced Coding",
    category: "Development",
    imageUrl: "/lovable-uploads/9a096096-b125-4e73-9440-c8796fbc36fe.png",
    videoUrl: "https://www.youtube.com/watch?v=example6"
  },
];

const WorkSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loadingImages, setLoadingImages] = useState<{[key: number]: boolean}>({});
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleImageLoad = (projectId: number) => {
    setLoadingImages(prev => ({...prev, [projectId]: false}));
  };

  return (
    <section id="work" className="py-12 sm:py-20 bg-black" aria-labelledby="work-title">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <h2 id="work-title" className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 uppercase text-white">
          MY <span className="text-brand-purple">WORK</span>
          <div className="w-16 h-1 bg-brand-purple mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="rounded-lg overflow-hidden card-hover cursor-pointer relative group"
              onClick={() => handleProjectClick(project)}
              onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project)}
              tabIndex={0}
              role="button"
              aria-label={`View ${project.title} project`}
            >
              {loadingImages[project.id] !== false && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
                </div>
              )}
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-48 sm:h-64 object-cover"
                loading="lazy"
                onLoad={() => handleImageLoad(project.id)}
                width={400}
                height={256}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-xl font-semibold text-white glow-heading">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
          role="dialog"
          aria-labelledby={`modal-${selectedProject.id}`}
          aria-modal="true"
        >
          <div className="bg-brand-deepest-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-3 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 id={`modal-${selectedProject.id}`} className="text-xl sm:text-2xl font-bold glow-heading">{selectedProject.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-black rounded-lg mb-4 overflow-hidden">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  width={1280}
                  height={720}
                />
              </div>
              <div className="text-gray-300">
                <p className="mb-2"><strong>Category:</strong> {selectedProject.category}</p>
                <p>
                  This is a showcase of my professional video editing work. Each project represents unique challenges 
                  and creative solutions implemented to deliver stunning visual content.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkSection;
