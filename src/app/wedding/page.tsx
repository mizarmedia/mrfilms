import { Metadata } from 'next';
import HeroVideo from '@/components/organisms/HeroVideo';
import PortfolioGrid from '@/components/organisms/PortfolioGrid';
import Testimonials from '@/components/organisms/Testimonials';
import ContactForm from '@/components/organisms/ContactForm';
import SectionTitle from '@/components/atoms/SectionTitle';
import { weddingPackages } from '@/lib/data/services';
import { getTestimonialsByCategory } from '@/lib/data/testimonials';

export const metadata: Metadata = {
  title: 'Wedding Videography',
  description:
    'Cinematic wedding films that capture the emotion and beauty of your special day. Packages from $1,000 to $2,500+.',
};

export default function WeddingPage() {
  const weddingTestimonials = getTestimonialsByCategory('wedding');

  return (
    <>
      <HeroVideo
        title="Wedding Films"
        subtitle="Your love story, beautifully told through cinematic visuals."
        ctaText="View Packages"
        ctaHref="#packages"
        backgroundImage="/images/portfolio/wedding/wedding-hero.jpg"
        minHeight="80vh"
      />

      {/* Packages Section */}
      <section id="packages" className="py-20 md:py-32 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Choose the package that best fits your needs.">
            Wedding Packages
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-slate rounded-lg p-8 ${
                  index === 1 ? 'md:scale-105 ring-2 ring-amber-600' : ''
                }`}
              >
                {index === 1 && (
                  <span className="text-xs uppercase tracking-wider text-amber-500 font-medium mb-2 block">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-display text-cream mb-2">{pkg.name}</h3>
                <p className="text-amber-500 text-xl font-medium mb-4">{pkg.price}</p>
                <p className="text-mist mb-6">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2 text-cream text-sm">
                      <svg
                        className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid
        category="wedding"
        title="Wedding Portfolio"
        subtitle="A glimpse into the love stories we've captured."
      />

      <Testimonials
        items={weddingTestimonials}
        title="Happy Couples"
        subtitle="What our clients say about their wedding films."
      />

      <ContactForm
        title="Book Your Wedding"
        subtitle="Ready to capture your special day? Get in touch to check availability."
      />
    </>
  );
}
