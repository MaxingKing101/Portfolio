import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Loader2 } from 'lucide-react';
// import { useInView } from 'react-intersection-observer';
import { ProjectCategory, GamingSubCategory, ShortFormSubCategory, LongFormSubCategory, Project } from '@/types/project';
import { projects, getThemeSettings } from '@/constants/projects';
import ProjectCard from '@/components/common/ProjectCard';
// import VideoPlayer from '@/components/common/VideoPlayer';
import { SectionProps } from '@/types/section';

// /**
//  * Helper function to get the video thumbnail
//  */
// const getVideoThumbnail = (project: Project): string => {
//   return project.thumbnailUrl || project.imageUrl;
// };

/**
 * Work section component
 */
const WorkSection: React.FC<SectionProps> = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
  const [subCategory, setSubCategory] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);
  // const [isScrollLocked, setIsScrollLocked] = useState(false);

  const lockScroll = useCallback(() => {
    // setIsScrollLocked(true);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px'; // Account for scrollbar width
  }, []);

  const unlockScroll = useCallback(() => {
    // setIsScrollLocked(false);
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
  }, [filter, subCategory]);

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

  const handleImageLoad = useCallback(() => {
    setLoadingVideo(false);
  }, []);

  const handleVideoLoad = useCallback(() => {
    setLoadingVideo(false);
    setVideoPlaying(true);
  }, []);

  // const handleModalClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
  //   if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
  //     closeModal();
  //   }
  // }, [closeModal]);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="flex flex-col space-y-3">
              {/* Card wrapper with animation */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -6, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 18
                }}
                whileHover={{
                  scale: 1.04, // Keep scale
                  rotate: 2, // Restore rotation
                  transition: { type: "spring", stiffness: 200, damping: 12 }
                }}
                whileTap={{
                  scale: 0.97,
                  rotate: -2
                }}
                style={{ willChange: "transform" }}
                className={`project-card-wrapper ${
                  project.videoType.includes('short') ? 'is-short-card' : ''
                }`} // Conditionally add class for short cards
              >
                <ProjectCard
                  project={project}
                  onProjectClick={handleProjectClick}
                  isLoading={loadingVideo}
                  onImageLoad={handleImageLoad}
                  themeSettings={getThemeSettings(project.videoType)}
                />
              </motion.div>

              {/* Description with unique styling */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (idx * 0.15) + 0.3,
                  ease: "easeOut"
                }}
                className="description-container px-4 py-3 bg-gradient-to-r from-black/90 to-black/70 backdrop-blur-sm border-l-2 border-brand-purple rounded-r-md">
                <p className="text-sm leading-snug font-medium">{project.description}</p>
              </motion.div>
            </div>
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
                    ? 'w-full sm:w-[90%] max-w-[900px] h-[95vh] rounded-lg'
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

                  {/* Different layout for short-form vs regular videos */}
                  {selectedProject.videoType.includes('short') ? (
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left side - Video */}
                      <div className="md:w-1/2 lg:w-3/5">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">Duration:</span>
                            <span className="text-sm font-medium">{selectedProject.duration}</span>
                          </div>
                          <span className="text-sm text-gray-400">{selectedProject.category}</span>
                        </div>

                        <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden rounded-lg">
                          {selectedProject.videoType.includes('vimeo') || selectedProject.videoType.includes('youtube') ? (
                            videoPlaying ? (
                              <div className="w-full h-full">
                                {loadingVideo && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                                    <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
                                  </div>
                                )}
                                <iframe
                                  src={`https://player.vimeo.com/video/${selectedProject.videoId}?h=${selectedProject.videoHash}&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
                                  className="w-full h-full rounded-lg"
                                  allow="autoplay; fullscreen; picture-in-picture"
                                  allowFullScreen
                                  onLoad={handleVideoLoad}
                                  title={selectedProject.title}
                                ></iframe>
                              </div>
                            ) : (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="w-full h-full relative cursor-pointer group overflow-hidden rounded-lg"
                                onClick={() => {
                                  setVideoPlaying(true);
                                  setLoadingVideo(true);
                                }}
                                onKeyDown={(e) => e.key === 'Enter' && setVideoPlaying(true)}
                                tabIndex={0}
                                role="button"
                                aria-label={`Play ${selectedProject.title} video`}
                              >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 group-hover:to-black/60 transition-all duration-300" />
                                <img
                                  src={selectedProject.thumbnailUrl || selectedProject.imageUrl}
                                  alt={`${selectedProject.title} thumbnail`}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
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
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05] rounded-lg"
                              width={1280}
                              height={720}
                              loading="eager"
                            />
                          )}
                        </div>
                      </div>

                      {/* Right side - Info */}
                      <div className="md:w-1/2 lg:w-2/5 space-y-6 mt-4 md:mt-12">
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
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">Duration:</span>
                          <span className="text-sm font-medium">{selectedProject.duration}</span>
                        </div>
                        <span className="text-sm text-gray-400">{selectedProject.category}</span>
                      </div>

                      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                        {selectedProject.videoType.includes('vimeo') || selectedProject.videoType.includes('youtube') ? (
                          videoPlaying ? (
                            <div className="w-full h-full">
                              {loadingVideo && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                                  <Loader2 className="w-8 h-8 animate-spin text-brand-purple" />
                                </div>
                              )}
                              <iframe
                                src={`https://player.vimeo.com/video/${selectedProject.videoId}?h=${selectedProject.videoHash}&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
                                className="w-full h-full"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                onLoad={handleVideoLoad}
                                title={selectedProject.title}
                              ></iframe>
                            </div>
                          ) : (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="w-full h-full relative cursor-pointer group overflow-hidden"
                              onClick={() => {
                                setVideoPlaying(true);
                                setLoadingVideo(true);
                              }}
                              onKeyDown={(e) => e.key === 'Enter' && setVideoPlaying(true)}
                              tabIndex={0}
                              role="button"
                              aria-label={`Play ${selectedProject.title} video`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 group-hover:to-black/60 transition-all duration-300" />
                              <img
                                src={selectedProject.thumbnailUrl || selectedProject.imageUrl}
                                alt={`${selectedProject.title} thumbnail`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
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
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
                  )}
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
