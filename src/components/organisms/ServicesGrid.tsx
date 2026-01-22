'use client';

import SectionTitle from '../atoms/SectionTitle';
import ServiceCard from '../molecules/ServiceCard';
import { services } from '@/lib/data/services';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-32 bg-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="From weddings to corporate videos, we bring your vision to life.">
          Our Services
        </SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
