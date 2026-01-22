'use client';

import SectionTitle from '../atoms/SectionTitle';
import ProjectCard from '../molecules/ProjectCard';
import { portfolioItems, type PortfolioItem } from '@/lib/data/portfolio';

interface PortfolioGridProps {
  items?: PortfolioItem[];
  category?: string;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function PortfolioGrid({
  items,
  category,
  title = 'Our Work',
  subtitle = 'View our latest projects.',
  limit,
}: PortfolioGridProps) {
  let displayItems = items || portfolioItems;

  if (category) {
    displayItems = displayItems.filter(item => item.category === category);
  }

  if (limit) {
    displayItems = displayItems.slice(0, limit);
  }

  if (displayItems.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-32 bg-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle={subtitle}>{title}</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayItems.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
