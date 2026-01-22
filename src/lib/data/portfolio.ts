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

// Portfolio items - add youtubeId or vimeoId when real videos are available
export const portfolioItems: PortfolioItem[] = [
  // Wedding
  {
    id: 'wedding-1',
    title: 'Sarah & James',
    description: 'A beautiful outdoor ceremony in Sedona',
    thumbnail: '/images/portfolio/wedding/wedding-1.jpg',
    // youtubeId: '', // Add real YouTube ID when available
    category: 'wedding',
  },
  {
    id: 'wedding-2',
    title: 'Emily & Michael',
    description: 'Intimate vineyard wedding',
    thumbnail: '/images/portfolio/wedding/wedding-2.jpg',
    category: 'wedding',
  },
  {
    id: 'wedding-3',
    title: 'Ashley & David',
    description: 'Mountain chapel ceremony',
    thumbnail: '/images/portfolio/wedding/wedding-3.jpg',
    category: 'wedding',
  },
  // Business
  {
    id: 'business-1',
    title: 'Trinity Christian School',
    description: 'Promotional video for school enrollment',
    thumbnail: '/images/portfolio/business/business-1.jpg',
    category: 'business',
  },
  {
    id: 'business-2',
    title: 'Local Restaurant Commercial',
    description: 'TV commercial for local dining',
    thumbnail: '/images/portfolio/business/business-2.jpg',
    category: 'business',
  },
  // Music Video
  {
    id: 'musicvideo-1',
    title: 'Desert Dreams',
    description: 'Indie rock music video',
    thumbnail: '/images/portfolio/musicvideo/musicvideo-1.jpg',
    category: 'musicvideo',
  },
  {
    id: 'musicvideo-2',
    title: 'City Lights',
    description: 'Hip-hop music video',
    thumbnail: '/images/portfolio/musicvideo/musicvideo-2.jpg',
    category: 'musicvideo',
  },
  // Real Estate
  {
    id: 'realestate-1',
    title: 'Luxury Mountain Home',
    description: 'Premium property tour',
    thumbnail: '/images/portfolio/realestate/realestate-1.jpg',
    category: 'realestate',
  },
  {
    id: 'realestate-2',
    title: 'Modern Desert Oasis',
    description: 'Contemporary home showcase',
    thumbnail: '/images/portfolio/realestate/realestate-2.jpg',
    category: 'realestate',
  },
  // International
  {
    id: 'international-1',
    title: 'Gjakova, Kosova',
    description: 'Documentary project',
    thumbnail: '/images/portfolio/international/international-1.jpg',
    category: 'international',
  },
  {
    id: 'international-2',
    title: 'Tamale, Ghana',
    description: 'Mission documentation',
    thumbnail: '/images/portfolio/international/international-2.jpg',
    category: 'international',
  },
];

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  return portfolioItems.filter(item => item.category === category);
}
