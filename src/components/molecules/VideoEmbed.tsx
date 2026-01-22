'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PlayIcon from '../atoms/PlayIcon';

interface VideoEmbedProps {
  youtubeId?: string;
  vimeoId?: string;
  thumbnail: string;
  title: string;
  className?: string;
}

export default function VideoEmbed({
  youtubeId,
  vimeoId,
  thumbnail,
  title,
  className = '',
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = () => {
    if (youtubeId) {
      return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    }
    if (vimeoId) {
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
    }
    return '';
  };

  return (
    <div className={`video-container rounded-lg overflow-hidden ${className}`}>
      {!isPlaying ? (
        <motion.button
          className="absolute inset-0 w-full h-full focus:outline-none group"
          onClick={() => setIsPlaying(true)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${thumbnail})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-void/40 transition-opacity duration-300 group-hover:bg-void/30" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayIcon size={80} />
          </div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-void/80 to-transparent">
            <p className="text-cream text-lg font-medium">{title}</p>
          </div>
        </motion.button>
      ) : (
        <iframe
          src={getEmbedUrl()}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}
