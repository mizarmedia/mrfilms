'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../atoms/SectionTitle';
import { testimonials, type Testimonial } from '@/lib/data/testimonials';

interface TestimonialsProps {
  items?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function Testimonials({
  items = testimonials,
  title = 'What Clients Say',
  subtitle = "Don't just take our word for it.",
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
  };

  const currentTestimonial = items[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle={subtitle}>{title}</SectionTitle>

        <div className="relative">
          {/* Testimonial content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Quote icon */}
              <svg
                className="w-12 h-12 text-amber-600/50 mx-auto mb-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display text-cream leading-relaxed mb-8">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="text-amber-500 font-medium text-lg">
                  {currentTestimonial.name}
                </p>
                {(currentTestimonial.title || currentTestimonial.company) && (
                  <p className="text-mist text-sm mt-1">
                    {currentTestimonial.title}
                    {currentTestimonial.title && currentTestimonial.company && ', '}
                    {currentTestimonial.company}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate text-mist hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-amber-500 w-6'
                      : 'bg-slate hover:bg-mist'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate text-mist hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
