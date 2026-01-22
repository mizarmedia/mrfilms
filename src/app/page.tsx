import HeroVideo from '@/components/organisms/HeroVideo';
import AboutSection from '@/components/organisms/AboutSection';
import ServicesGrid from '@/components/organisms/ServicesGrid';
import Testimonials from '@/components/organisms/Testimonials';
import ContactForm from '@/components/organisms/ContactForm';

export default function Home() {
  return (
    <>
      <HeroVideo
        title="MICAH REIMER FILMS"
        subtitle="Cinematic storytelling that captures your most important moments."
        ctaText="View Services"
        ctaHref="#services"
        backgroundImage="/images/hero-bg.jpg"
      />
      <AboutSection />
      <ServicesGrid />
      <Testimonials />
      <ContactForm />
    </>
  );
}
