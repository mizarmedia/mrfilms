import { Metadata } from 'next';
import HeroVideo from '@/components/organisms/HeroVideo';
import PortfolioGrid from '@/components/organisms/PortfolioGrid';
import ContactForm from '@/components/organisms/ContactForm';
import SectionTitle from '@/components/atoms/SectionTitle';

export const metadata: Metadata = {
  title: 'Music Video Production',
  description:
    'Creative music videos that bring your sound to life with compelling visuals. Packages from $800 to $2,000+.',
};

export default function MusicVideoPage() {
  return (
    <>
      <HeroVideo
        title="Music Videos"
        subtitle="Bringing your sound to life through compelling visual storytelling."
        ctaText="View Portfolio"
        ctaHref="#portfolio"
        backgroundImage="/images/portfolio/musicvideo/musicvideo-hero.jpg"
        minHeight="80vh"
      />

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="From concept to final cut, we're with you every step of the way.">
            Our Process
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Concept',
                description:
                  'We work with you to develop a creative concept that matches your vision and music.',
              },
              {
                step: '02',
                title: 'Pre-Production',
                description:
                  'Location scouting, shot planning, and scheduling to ensure a smooth production.',
              },
              {
                step: '03',
                title: 'Production',
                description:
                  'Professional filming with high-end equipment and attention to every detail.',
              },
              {
                step: '04',
                title: 'Post-Production',
                description:
                  'Expert editing, color grading, and effects to bring your vision to life.',
              },
            ].map(item => (
              <div key={item.step} className="text-center">
                <span className="text-6xl font-display text-amber-600/30">{item.step}</span>
                <h3 className="text-xl font-display text-cream mt-2 mb-3">{item.title}</h3>
                <p className="text-mist text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-16 bg-slate rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display text-cream mb-2">Music Video Packages</h3>
            <p className="text-amber-500 text-3xl font-medium mb-4">$800 - $2,000+</p>
            <p className="text-mist max-w-2xl mx-auto">
              Pricing varies based on concept complexity, locations, crew size, and post-production
              requirements. Contact us for a custom quote tailored to your project.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid
        category="musicvideo"
        title="Music Video Portfolio"
        subtitle="Check out some of our recent music video work."
      />

      {/* Behind the Scenes */}
      <section className="py-20 md:py-32 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="A look at how the magic happens.">Behind the Scenes</SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-slate overflow-hidden"
                style={{
                  backgroundImage: `url(/images/portfolio/musicvideo/bts-${i}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactForm
        title="Let's Create Something"
        subtitle="Ready to bring your music to life? Let's talk about your vision."
      />
    </>
  );
}
