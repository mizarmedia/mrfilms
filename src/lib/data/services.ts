export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  image: string;
  href: string;
}

export const services: Service[] = [
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Cinematic wedding films that capture the emotion and beauty of your special day.',
    priceRange: '$1,000 - $2,500+',
    image: '/images/portfolio/wedding/wedding-hero.jpg',
    href: '/wedding',
  },
  {
    id: 'business',
    title: 'Business',
    description: 'Professional video content for brands, commercials, testimonials, and corporate events.',
    priceRange: '$500 - $4,000+',
    image: '/images/portfolio/business/business-hero.jpg',
    href: '/business',
  },
  {
    id: 'musicvideo',
    title: 'Music Video',
    description: 'Creative music videos that bring your sound to life with compelling visuals.',
    priceRange: '$800 - $2,000+',
    image: '/images/portfolio/musicvideo/musicvideo-hero.jpg',
    href: '/musicvideo',
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    description: 'Property tours and real estate videos that showcase homes at their best.',
    priceRange: '$400 - $800+',
    image: '/images/portfolio/realestate/realestate-hero.jpg',
    href: '/realestate',
  },
  {
    id: 'international',
    title: 'International',
    description: 'Your story, anywhere. We travel worldwide to capture your vision.',
    priceRange: 'Contact for quote',
    image: '/images/portfolio/international/international-hero.jpg',
    href: '/international',
  },
];

export interface WeddingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export const weddingPackages: WeddingPackage[] = [
  {
    name: 'Teaser Trailer',
    price: '$300 add-on',
    description: 'A quick, shareable highlight of your day.',
    features: [
      '1 minute runtime',
      'Delivered within a week',
      'Perfect for social media',
    ],
  },
  {
    name: 'Highlight Film',
    price: '$1,000 - $2,500',
    description: 'A cinematic film capturing the essence of your wedding day.',
    features: [
      '4-7 minute runtime',
      'Professional color grading',
      'Licensed music',
      'Full ceremony coverage',
    ],
  },
  {
    name: 'Full Ceremony & Speeches',
    price: '$400 - $800',
    description: 'Complete documentation of your ceremony and reception speeches.',
    features: [
      '20-60 minute runtime',
      'Lightly edited',
      'Multiple camera angles',
      'Full audio capture',
    ],
  },
];

export const businessServices = [
  'Brand Testimonial',
  'Commercial / Ad',
  'Event Highlights',
  'Instructional / Podcast',
  'Social Media Content',
];
