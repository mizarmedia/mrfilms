'use client';

import { motion } from 'framer-motion';
import type { Testimonial } from '@/lib/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-charcoal rounded-lg p-6 md:p-8"
    >
      {/* Quote icon */}
      <svg
        className="w-10 h-10 text-amber-600/50 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote text */}
      <blockquote className="text-cream text-lg md:text-xl leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="border-t border-slate pt-4">
        <p className="text-amber-500 font-medium">{testimonial.name}</p>
        {(testimonial.title || testimonial.company) && (
          <p className="text-mist text-sm">
            {testimonial.title}
            {testimonial.title && testimonial.company && ', '}
            {testimonial.company}
          </p>
        )}
      </div>
    </motion.div>
  );
}
