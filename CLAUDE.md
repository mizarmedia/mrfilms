# Micah Reimer Films Website

## Project Overview
Custom Next.js 14 website for Micah Reimer Films, a cinematography business based in Prescott, Arizona. Deployed to Cloudflare Pages.

**Live Site:** https://mrfilms.pages.dev
**GitHub:** https://github.com/mizarmedia/mrfilms

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Contact Form:** Formspree
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
npm run dev                                              # Development server
npm run build                                            # Production build
npx wrangler pages deploy out --project-name mrfilms    # Deploy to Cloudflare
```

## Deployment
1. Run `npm run build` to generate static files in `out/`
2. Run `npx wrangler pages deploy out --project-name mrfilms --commit-dirty=true`
3. Site will be live at https://mrfilms.pages.dev

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

## Contact Info
- Phone: (928) 733-9090
- Email: contact@micahreimerfilms.com
- Instagram: @micahreimerfilms
- YouTube: youtube.com/micahreimerfilms
- Location: Prescott, Arizona

---

## Completed
- [x] Full website build with all 6 pages
- [x] Mobile-responsive design with animations
- [x] Contact form connected to Formspree
- [x] Logo downloaded and integrated
- [x] Deployed to Cloudflare Pages
- [x] Portfolio cards show "Coming Soon" when no video

## Remaining Tasks

### 1. Replace Placeholder Images
The Wix site loads images dynamically via JavaScript, so they couldn't be automatically downloaded. To replace placeholders:

**Option A - Screenshot Method:**
1. Visit each page on micahreimerfilms.com
2. Right-click images → "Save image as..."
3. Save to appropriate `public/images/portfolio/{category}/` folder

**Option B - Browser DevTools:**
1. Open micahreimerfilms.com in Chrome
2. Open DevTools (F12) → Network tab
3. Filter by "Img"
4. Reload page and download images from the list

**Required Images:**
- `public/images/hero-bg.jpg` - Homepage hero (cinematic shot)
- `public/images/about/micah-portrait.jpg` - Micah's portrait photo
- `public/images/og-image.jpg` - Social sharing image (1200x630)
- `public/images/portfolio/wedding/*.jpg` - Wedding portfolio thumbnails
- `public/images/portfolio/business/*.jpg` - Business portfolio thumbnails
- `public/images/portfolio/musicvideo/*.jpg` - Music video thumbnails
- `public/images/portfolio/realestate/*.jpg` - Real estate thumbnails
- `public/images/portfolio/international/*.jpg` - International thumbnails

### 2. Add Real Video IDs
Edit `src/lib/data/portfolio.ts` and add YouTube/Vimeo IDs:
```typescript
{
  id: 'wedding-1',
  title: 'Sarah & James',
  thumbnail: '/images/portfolio/wedding/wedding-1.jpg',
  youtubeId: 'REAL_YOUTUBE_ID_HERE',  // Add this line
  category: 'wedding',
}
```

### 3. Configure Custom Domain
The domain needs to be added to Cloudflare:

1. **Add domain to Cloudflare:**
   - Go to Cloudflare Dashboard → Add Site
   - Enter `micahreimerfilms.com`
   - Update nameservers at current registrar

2. **Connect to Pages:**
   - Go to Cloudflare Pages → mrfilms → Custom domains
   - Add `micahreimerfilms.com` and `www.micahreimerfilms.com`

### 4. Update Formspree (Optional)
Current Formspree endpoint: `https://formspree.io/f/xvgogpjw`

To use a different endpoint or add to a Formspree project:
1. Create account at formspree.io
2. Create new form
3. Update endpoint in `src/components/organisms/ContactForm.tsx`

### 5. Add Client Logos (Business Page)
1. Collect logos from business clients
2. Add to `public/images/logos/`
3. Update `src/app/business/page.tsx` to display real logos

---

## Project Structure
```
mrfilms/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── wedding/page.tsx
│   │   ├── business/page.tsx
│   │   ├── musicvideo/page.tsx
│   │   ├── realestate/page.tsx
│   │   └── international/page.tsx
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   └── lib/data/
├── public/images/
├── next.config.ts
└── package.json
```
