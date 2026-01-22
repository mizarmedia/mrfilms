import { Metadata } from 'next';
import HeroVideo from '@/components/organisms/HeroVideo';
import PortfolioGrid from '@/components/organisms/PortfolioGrid';
import ContactForm from '@/components/organisms/ContactForm';
import SectionTitle from '@/components/atoms/SectionTitle';

export const metadata: Metadata = {
  title: 'International Projects',
  description:
    'Your story, anywhere. We travel worldwide to capture your vision through cinematic storytelling.',
};

export default function InternationalPage() {
  const locations = [
    {
      name: 'Gjakova, Kosova',
      description:
        'Documentary and story projects in the heart of the Balkans. Capturing culture, history, and human stories.',
      image: '/images/portfolio/international/kosova.jpg',
    },
    {
      name: 'Tamale, Ghana',
      description:
        'Mission documentation and community stories in West Africa. Telling impactful stories that matter.',
      image: '/images/portfolio/international/ghana.jpg',
    },
  ];

  return (
    <>
      <HeroVideo
        title="International"
        subtitle="Your story, anywhere in the world."
        ctaText="View Projects"
        ctaHref="#locations"
        backgroundImage="/images/portfolio/international/international-hero.jpg"
        minHeight="80vh"
      />

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle>Your Story, Anywhere</SectionTitle>

          <div className="space-y-6 text-mist text-lg leading-relaxed">
            <p>
              We&apos;d love to capture your story anywhere it may take us! We have traveled to
              multiple countries for video projects, and love filming in any and all circumstances,
              no matter how challenging!
            </p>
            <p>
              Whether it&apos;s documenting humanitarian work, capturing destination weddings, or
              creating content for international brands, we bring the same passion and professional
              quality to every project, no matter the location.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-slate rounded-full text-cream">
              <span className="text-amber-500 font-medium">Europe</span> &middot; Balkans
            </div>
            <div className="px-6 py-3 bg-slate rounded-full text-cream">
              <span className="text-amber-500 font-medium">Africa</span> &middot; West Africa
            </div>
            <div className="px-6 py-3 bg-slate rounded-full text-cream">
              <span className="text-amber-500 font-medium">Americas</span> &middot; Domestic USA
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 md:py-32 bg-void">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Places we've been privileged to work.">
            Featured Locations
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map(location => (
              <div key={location.name} className="group">
                <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6 bg-slate">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${location.image})` }}
                  />
                </div>
                <h3 className="text-2xl font-display text-cream mb-3">{location.name}</h3>
                <p className="text-mist">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-32 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="What's included in international projects.">
            Our Approach
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Pre-Production',
                description: 'Full planning including travel logistics, local coordination, and shot planning.',
              },
              {
                title: 'Travel',
                description: 'We handle all travel arrangements and come prepared for any environment.',
              },
              {
                title: 'Production',
                description: 'Professional filming adapted to local conditions and cultures.',
              },
              {
                title: 'Post-Production',
                description: 'Full editing, color grading, and delivery wherever you are in the world.',
              },
            ].map(item => (
              <div key={item.title} className="bg-slate rounded-lg p-6">
                <h3 className="text-xl font-display text-cream mb-3">{item.title}</h3>
                <p className="text-mist text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="mt-16 bg-slate rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display text-cream mb-4">International Projects</h3>
            <p className="text-amber-500 text-xl font-medium mb-4">Contact for Custom Quote</p>
            <p className="text-mist max-w-2xl mx-auto">
              Every international project is unique. Pricing depends on location, duration, scope,
              and travel requirements. Let&apos;s discuss your vision and create a custom package.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid
        category="international"
        title="International Portfolio"
        subtitle="Stories from around the world."
      />

      <ContactForm
        title="Let's Go Somewhere"
        subtitle="Have a project in mind? Let's talk about bringing your story to life, wherever it takes us."
      />
    </>
  );
}
