# Mohammed Chirah — Portfolio

A premium, modern portfolio website built with Next.js 15, TypeScript, TailwindCSS v4, and Framer Motion.

## 🚀 Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Set your custom domain in Vercel dashboard settings

> After deploying, update the `siteUrl` in `src/lib/seo.ts` with your actual domain.

## 📸 How to Replace Photo & Resume

### Profile Photo
1. Replace `public/profile.jpg` with your actual photo
2. Recommended: square, at least 400×400px, JPEG or WebP
3. The image is automatically optimized by `next/image`

### Resume PDF
1. Replace `public/resume.pdf` with your actual CV
2. The download button in the sidebar links to this file

## 🖼️ How to Add Project Screenshots

1. Create a folder for each project: `public/projects/[slug]/`
2. Add your screenshots there (e.g., `hero.jpg`, `dashboard.png`)
3. Update the `imageUrl` field in `src/data/resume.ts`:
   ```typescript
   imageUrl: "/projects/delivery-tracking/hero.jpg",
   ```
4. For the case study page, add additional images to the project data

## 🔗 How to Add Links

Update the placeholder values `[ADD LINK]`, `[ADD GITHUB]`, `[ADD SCREENSHOTS]` in `src/data/resume.ts`:

```typescript
liveUrl: "https://your-project.com",
githubUrl: "https://github.com/your-username/project",
imageUrl: "/projects/project-slug/screenshot.jpg",
```

## 📋 SEO Checklist

- [x] Per-page metadata (title + description)
- [x] OpenGraph tags
- [x] Twitter cards
- [x] JSON-LD (Person + WebSite schemas)
- [x] `sitemap.xml` auto-generated
- [x] `robots.txt` configured
- [x] Semantic HTML (`h1`–`h3`, `section`, `nav`, `main`)
- [x] `next/image` for all images
- [ ] Update `siteUrl` in `src/lib/seo.ts` with your domain
- [ ] Add `public/og-image.png` (1200×630) for social sharing
- [ ] Verify with Google Search Console after deploy

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (sidebar + nav)
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Design tokens + theme
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots configuration
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── contact/page.tsx    # Contact page
│   └── projects/
│       ├── page.tsx        # Projects listing
│       └── [slug]/page.tsx # Case study template
├── components/
│   ├── Sidebar.tsx         # Fixed left sidebar
│   ├── MiniNav.tsx         # Right navigation dots
│   ├── MobileNav.tsx       # Mobile menu + bottom CTA
│   ├── Icons.tsx           # SVG icon components
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── Divider.tsx
│   └── sections/           # Home page sections
│       ├── HeroSection.tsx
│       ├── AtAGlanceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ServicesSection.tsx
│       ├── EducationSection.tsx
│       └── ContactSection.tsx
├── data/
│   └── resume.ts           # Single source of truth
└── lib/
    └── seo.ts              # SEO utilities
```

## 🎨 Customization

### Change Accent Color
Edit the accent variables in `src/app/globals.css`:
```css
--accent: #10b981;        /* Change to your color */
--accent-light: #34d399;
--accent-dark: #059669;
```

### Edit Content
All content lives in `src/data/resume.ts`. Update the typed objects to change any information displayed on the site.

## ⚡ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **SEO:** Next.js Metadata API + JSON-LD
- **Images:** next/image
- **Fonts:** Inter + JetBrains Mono
