# Micah Reimer Films Website

## Project Overview
Custom Next.js 14 website for Micah Reimer Films, a cinematography business based in Prescott, Arizona. Deployed to Cloudflare Pages.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Cloudflare Pages (static export)

## Architecture
Uses Atomic Design pattern:
```
atoms/       -> Button, PlayIcon, SectionTitle
molecules/   -> VideoEmbed, ServiceCard, TestimonialCard, ProjectCard
organisms/   -> Navigation, Footer, HeroVideo, AboutSection, ServicesGrid, Testimonials, ContactForm, PortfolioGrid
```

## Key Files
- `src/app/layout.tsx` - Root layout with Nav/Footer
- `src/app/page.tsx` - Homepage
- `src/app/[service]/page.tsx` - Service pages (wedding, business, musicvideo, realestate, international)
- `src/lib/data/` - Static data (services, testimonials, portfolio)
- `public/images/` - All images (self-hosted, not CDN)

## Commands
```bash
npm run dev          # Development server
npm run build        # Production build (static export)
npm run lint         # ESLint check
```

## Deployment
Configured for static export (`output: 'export'` in next.config.ts).
Deploy to Cloudflare Pages via GitHub integration.

## Color Palette (Cinematic Dark)
```css
--void: #0a0a0b         /* Main background */
--charcoal: #121214     /* Section backgrounds */
--slate: #1a1a1e        /* Cards */
--amber: #d4a843        /* Accent (film gold) */
--cream: #f5f2ea        /* Primary text */
--mist: #a8a5a0         /* Secondary text */
```

## Typography
- Display: Cormorant Garamond (headings)
- Body: Inter (text)

## Image Requirements
All images need to be downloaded from the current Wix site and placed in:
- `public/images/hero-bg.jpg` - Homepage hero background
- `public/images/about/micah-portrait.jpg` - About section portrait
- `public/images/portfolio/{category}/` - Portfolio thumbnails
- `public/images/og-image.jpg` - Social sharing image

## Contact Info
- Phone: (928) 733-9090
- Email: contact@micahreimerfilms.com
- Instagram: @micahreimerfilms
- YouTube: youtube.com/micahreimerfilms
- Location: Prescott, Arizona

## TODO
- [ ] Download and add real images from current site
- [ ] Replace placeholder YouTube IDs with real video IDs
- [ ] Connect contact form to email service (Resend, Formspree, etc.)
- [ ] Add real client logos to business page
- [ ] Configure custom domain (micahreimerfilms.com)
