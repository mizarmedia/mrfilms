'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlayIcon from '../atoms/PlayIcon';
import type { PortfolioItem } from '@/lib/data/portfolio';

interface ProjectCardProps {
  project: PortfolioItem;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasVideo = !!(project.youtubeId || project.vimeoId || project.videoUrl);

  const getEmbedUrl = () => {
    if (project.youtubeId) {
      return `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`;
    }
    if (project.vimeoId) {
      return `https://player.vimeo.com/video/${project.vimeoId}?autoplay=1`;
    }
    return '';
  };

  const handleClick = () => {
    if (hasVideo) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div
          onClick={handleClick}
          className={`w-full text-left group block rounded-lg ${
            hasVideo ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500' : 'cursor-default'
          }`}
          role={hasVideo ? 'button' : undefined}
          tabIndex={hasVideo ? 0 : undefined}
          onKeyDown={hasVideo ? (e) => e.key === 'Enter' && handleClick() : undefined}
        >
          <div className="relative overflow-hidden rounded-lg bg-slate aspect-video">
            {/* Thumbnail */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.thumbnail})` }}
            />

            {/* Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              hasVideo ? 'bg-void/30 group-hover:bg-void/20' : 'bg-void/40'
            }`} />

            {/* Play button or Coming Soon */}
            <div className="absolute inset-0 flex items-center justify-center">
              {hasVideo ? (
                <PlayIcon size={64} />
              ) : (
                <span className="px-4 py-2 bg-void/60 rounded-full text-mist text-sm backdrop-blur-sm">
                  Coming Soon
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="mt-4">
            <h3 className={`text-xl font-display transition-colors duration-300 ${
              hasVideo ? 'text-cream group-hover:text-amber-400' : 'text-cream'
            }`}>
              {project.title}
            </h3>
            {project.description && (
              <p className="text-mist text-sm mt-1">{project.description}</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Video Modal - only render if has video */}
      {hasVideo && (
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void/90 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl aspect-video bg-charcoal rounded-lg overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <iframe
                  src={getEmbedUrl()}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />

                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-void/80 text-cream hover:bg-void transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
