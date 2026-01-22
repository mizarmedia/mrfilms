import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/organisms/Navigation';
import Footer from '@/components/organisms/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://micahreimerfilms.com'),
  title: {
    default: 'Micah Reimer Films | Cinematography in Prescott, Arizona',
    template: '%s | Micah Reimer Films',
  },
  description:
    'Professional cinematography and video production services in Prescott, Arizona. Weddings, business videos, music videos, real estate, and international projects.',
  keywords: [
    'cinematography',
    'video production',
    'wedding videographer',
    'Prescott Arizona',
    'film production',
    'commercial video',
    'music video production',
    'real estate video',
  ],
  authors: [{ name: 'Micah Reimer' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://micahreimerfilms.com',
    siteName: 'Micah Reimer Films',
    title: 'Micah Reimer Films | Cinematography in Prescott, Arizona',
    description:
      'Professional cinematography and video production services in Prescott, Arizona.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Micah Reimer Films',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micah Reimer Films | Cinematography',
    description:
      'Professional cinematography and video production services in Prescott, Arizona.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
