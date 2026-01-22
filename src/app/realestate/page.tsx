import { Metadata } from 'next';
import HeroVideo from '@/components/organisms/HeroVideo';
import PortfolioGrid from '@/components/organisms/PortfolioGrid';
import ContactForm from '@/components/organisms/ContactForm';
import SectionTitle from '@/components/atoms/SectionTitle';

export const metadata: Metadata = {
  title: 'Real Estate Videography',
  description:
    'Property tours and real estate videos that showcase homes at their best. Packages from $400 to $800+.',
};

export default function RealEstatePage() {
  return (
    <>
      <HeroVideo
        title="Real Estate"
        subtitle="Showcase properties with stunning cinematic tours that sell."
        ctaText="View Portfolio"
        ctaHref="#portfolio"
        backgroundImage="/images/portfolio/realestate/realestate-hero.jpg"
        minHeight="80vh"
      />

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="What's included in our real estate video packages.">
            Our Services
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Property Tours',
                description:
                  'Cinematic walkthrough videos that highlight every feature of the property.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                ),
              },
              {
                title: 'Aerial Footage',
                description:
                  'Drone shots to showcase the property, neighborhood, and surrounding area.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                ),
              },
              {
                title: 'Lifestyle Shots',
                description:
                  'Atmospheric footage that helps buyers envision living in the space.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
              {
                title: 'Quick Turnaround',
                description: 'Fast delivery so you can get your listing live as soon as possible.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: 'Social Media Cuts',
                description: 'Optimized edits for Instagram, Facebook, and other social platforms.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  />
                ),
              },
              {
                title: 'MLS Ready',
                description: 'Videos formatted and optimized for MLS and real estate platforms.',
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
            ].map(feature => (
              <div key={feature.title} className="bg-slate rounded-lg p-6">
                <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-display text-cream mb-2">{feature.title}</h3>
                <p className="text-mist text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-16 bg-slate rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display text-cream mb-2">Real Estate Packages</h3>
            <p className="text-amber-500 text-3xl font-medium mb-4">$400 - $800+</p>
            <p className="text-mist max-w-2xl mx-auto">
              Pricing depends on property size, number of features, and whether drone footage is
              included. Contact us for a quote for your listing.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid
        category="realestate"
        title="Portfolio"
        subtitle="Properties we've helped showcase."
      />

      <ContactForm
        title="List Your Property"
        subtitle="Ready to make your listing stand out? Get in touch today."
      />
    </>
  );
}
