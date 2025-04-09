
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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

  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-4 uppercase text-white">
          MY <span className="text-brand-purple">WORK</span>
          <div className="w-16 h-1 bg-brand-purple mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="rounded-lg overflow-hidden card-hover cursor-pointer relative group"
              onClick={() => handleProjectClick(project)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-brand-deepest-blue rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="aspect-video bg-black rounded-lg mb-4 overflow-hidden">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
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
