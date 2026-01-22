'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream font-display mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-mist text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
