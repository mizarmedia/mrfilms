import { Metadata } from 'next';
import HeroVideo from '@/components/organisms/HeroVideo';
import PortfolioGrid from '@/components/organisms/PortfolioGrid';
import ContactForm from '@/components/organisms/ContactForm';
import SectionTitle from '@/components/atoms/SectionTitle';
import { businessServices } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Business Video Production',
  description:
    'Professional video content for brands, commercials, testimonials, and corporate events. Packages from $500 to $4,000+.',
};

export default function BusinessPage() {
  return (
    <>
      <HeroVideo
        title="Business Videos"
        subtitle="Professional content that elevates your brand and connects with your audience."
        ctaText="View Services"
        ctaHref="#services"
        backgroundImage="/images/portfolio/business/business-hero.jpg"
        minHeight="80vh"
      />

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="From commercials to corporate events, we've got you covered.">
            Business Services
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map(service => (
              <div
                key={service}
                className="bg-slate rounded-lg p-6 hover:ring-2 hover:ring-amber-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-display text-cream mb-2">{service}</h3>
                <p className="text-mist text-sm">
                  Professional {service.toLowerCase()} production tailored to your brand&apos;s
                  unique needs and goals.
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="mt-12 text-center">
            <p className="text-mist">
              Pricing varies based on project scope.{' '}
              <span className="text-amber-500 font-medium">$500 - $4,000+</span>
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos Placeholder */}
      <section className="py-16 bg-void">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-mist text-sm uppercase tracking-wider mb-8">
            Trusted by businesses across Arizona
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5].map(i => (
              <div
                key={i}
                className="w-32 h-16 bg-slate rounded flex items-center justify-center text-mist text-xs"
              >
                Client Logo
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid
        category="business"
        title="Business Portfolio"
        subtitle="See how we've helped businesses tell their stories."
      />

      <ContactForm
        title="Let's Work Together"
        subtitle="Ready to elevate your brand with professional video content?"
      />
    </>
  );
}
