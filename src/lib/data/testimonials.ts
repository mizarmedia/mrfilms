export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  company?: string;
  quote: string;
  category?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aaron Rosberg',
    title: 'Director of Operations',
    company: 'Trinity Christian School',
    quote: 'Micah Reimer Films is an excellent company to work with. Micah is professional, creative, and delivers high-quality content that exceeds expectations. His attention to detail and ability to capture the essence of our school has been invaluable for our marketing efforts.',
    category: 'business',
  },
  {
    id: '2',
    name: 'Rob Calvert',
    quote: "Couldn't be more thankful for Micah Reimer Films and the incredible work he did capturing our wedding day. From start to finish, Micah was professional, creative, and an absolute joy to work with. The final film brought us to tears - it perfectly captured every emotion and detail of our special day.",
    category: 'wedding',
  },
  {
    id: '3',
    name: 'Brad Franklin',
    quote: 'Working with Micah was an incredible experience. He understood our vision from day one and brought it to life in ways we never imagined. His creativity and technical skill are unmatched, and he made the entire process seamless and enjoyable.',
    category: 'wedding',
  },
  {
    id: '4',
    name: 'Desi McAnally',
    quote: 'Micah has an amazing eye for cinematography. He captured moments we didn\'t even know were happening, and the final product was absolutely stunning. We\'ve watched our wedding video countless times and it never gets old.',
    category: 'wedding',
  },
  {
    id: '5',
    name: 'Jennifer Booth',
    quote: 'From the initial consultation to the final delivery, Micah was communicative, professional, and delivered beyond our expectations. His passion for filmmaking shines through in every frame. We couldn\'t have asked for a better experience.',
    category: 'wedding',
  },
];

export function getTestimonialsByCategory(category: string): Testimonial[] {
  return testimonials.filter(t => t.category === category || !t.category);
}
