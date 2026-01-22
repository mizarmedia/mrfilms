export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  videoUrl?: string;
  youtubeId?: string;
  vimeoId?: string;
  category: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Wedding
  {
    id: 'wedding-1',
    title: 'Sarah & James',
    description: 'A beautiful outdoor ceremony in Sedona',
    thumbnail: '/images/portfolio/wedding/wedding-1.jpg',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder - replace with actual
    category: 'wedding',
  },
  {
    id: 'wedding-2',
    title: 'Emily & Michael',
    description: 'Intimate vineyard wedding',
    thumbnail: '/images/portfolio/wedding/wedding-2.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'wedding',
  },
  {
    id: 'wedding-3',
    title: 'Ashley & David',
    description: 'Mountain chapel ceremony',
    thumbnail: '/images/portfolio/wedding/wedding-3.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'wedding',
  },
  // Business
  {
    id: 'business-1',
    title: 'Trinity Christian School',
    description: 'Promotional video for school enrollment',
    thumbnail: '/images/portfolio/business/business-1.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'business',
  },
  {
    id: 'business-2',
    title: 'Local Restaurant Commercial',
    description: 'TV commercial for local dining',
    thumbnail: '/images/portfolio/business/business-2.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'business',
  },
  // Music Video
  {
    id: 'musicvideo-1',
    title: 'Desert Dreams',
    description: 'Indie rock music video',
    thumbnail: '/images/portfolio/musicvideo/musicvideo-1.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'musicvideo',
  },
  {
    id: 'musicvideo-2',
    title: 'City Lights',
    description: 'Hip-hop music video',
    thumbnail: '/images/portfolio/musicvideo/musicvideo-2.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'musicvideo',
  },
  // Real Estate
  {
    id: 'realestate-1',
    title: 'Luxury Mountain Home',
    description: 'Premium property tour',
    thumbnail: '/images/portfolio/realestate/realestate-1.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'realestate',
  },
  {
    id: 'realestate-2',
    title: 'Modern Desert Oasis',
    description: 'Contemporary home showcase',
    thumbnail: '/images/portfolio/realestate/realestate-2.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'realestate',
  },
  // International
  {
    id: 'international-1',
    title: 'Gjakova, Kosova',
    description: 'Documentary project',
    thumbnail: '/images/portfolio/international/international-1.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'international',
  },
  {
    id: 'international-2',
    title: 'Tamale, Ghana',
    description: 'Mission documentation',
    thumbnail: '/images/portfolio/international/international-2.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'international',
  },
];

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  return portfolioItems.filter(item => item.category === category);
}
