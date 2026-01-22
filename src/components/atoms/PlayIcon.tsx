'use client';

import { motion } from 'framer-motion';

interface PlayIconProps {
  size?: number;
  className?: string;
}

export default function PlayIcon({ size = 64, className = '' }: PlayIconProps) {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full bg-amber-600/90 backdrop-blur-sm ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: ['0 0 0 0 rgba(212, 168, 67, 0.4)', '0 0 0 20px rgba(212, 168, 67, 0)'],
      }}
      transition={{
        boxShadow: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeOut',
        },
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-void"
        style={{ width: size * 0.4, height: size * 0.4, marginLeft: size * 0.05 }}
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </motion.div>
  );
}
