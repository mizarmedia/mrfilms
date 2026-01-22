'use client';

import { motion } from 'framer-motion';
import SectionTitle from '../atoms/SectionTitle';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-slate">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/about/micah-portrait.jpg)' }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-amber-600 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle centered={false}>About Micah</SectionTitle>

            <div className="space-y-6 text-mist leading-relaxed">
              <p>
                Micah Reimer is a cinematographer based out of Prescott in northern Arizona,
                but also frequently travels domestically and sometimes internationally,
                wherever clients&apos; projects take him.
              </p>

              <p>
                Micah first got started in video at age 10, when he borrowed his parents&apos;
                camera to make action short films with friends in the neighborhood. He saved
                up and bought his own camera at age 11, and kept creating videos and honing
                his skills. Over time it grew from a hobby to a viable career.
              </p>

              <p>
                Since 2021, Micah has worked as a videographer with a variety of clients on
                many different projects, including: TV commercials, marketing ads, brand stories,
                real estate tours, corporate event highlights, social media content, mini
                documentaries, music videos, and more...
              </p>

              <p>
                Micah&apos;s favorite aspect of filmmaking is collaborating with other creatives
                to perfect the cinematography and lighting in a given scene. Micah is passionate
                about video production and values clear communication, so that the vision for
                a project is captured in the best possible way.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
