'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Service } from '@/lib/data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={service.href} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-slate aspect-[4/3]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${service.image})` }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-2xl md:text-3xl font-display text-cream mb-2 group-hover:text-amber-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-mist text-sm mb-3 line-clamp-2">
              {service.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-amber-500 font-medium">{service.priceRange}</span>
              <span className="text-cream text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
