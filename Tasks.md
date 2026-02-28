# TASKS.md

## Phase 0 — Repo & Setup
- [ ] Create Next.js project (App Router, TypeScript)
- [ ] Install TailwindCSS
- [ ] Install Framer Motion
- [ ] Setup `next/font` (Inter/Geist Sans recommended)
- [ ] Setup absolute imports + lint + prettier (optional but recommended)

## Phase 1 — Design System (Luxury)
- [ ] Define theme tokens (CSS variables):
  - [ ] background / surface / border / text / muted / accent
  - [ ] radius scale (e.g., 12 / 18 / 22)
  - [ ] shadows (soft) + glow effect (subtle)
- [ ] Build reusable UI components:
  - [ ] Button (primary/secondary/ghost)
  - [ ] Card (default/hover)
  - [ ] Badge (stack tags)
  - [ ] Section wrapper (title + description)
  - [ ] Divider / Separator

## Phase 2 — Layout Structure (Reference Structure)
- [ ] Desktop layout:
  - [ ] Left fixed Sidebar (profile + contact + skills + socials + CTA)
  - [ ] Center main scroll content
  - [ ] Right mini-nav (section anchors + active state)
- [ ] Mobile layout:
  - [ ] Sidebar collapses into top profile card
  - [ ] Sticky bottom CTA
  - [ ] Mini-nav becomes hamburger or simple tabs

## Phase 3 — Content Wiring (Single Source of Truth)
- [ ] Create `data/resume.ts` and map CV data into typed objects:
  - [ ] profile + contacts
  - [ ] summary
  - [ ] experience list
  - [ ] education list
  - [ ] projects list (+ tags + stacks)
  - [ ] skills grouped
  - [ ] certifications + languages
- [ ] Ensure UI renders ONLY from `data/resume.ts`

## Phase 4 — Pages & Sections
### Home (/)
- [ ] Hero section (client-friendly headline + CTA)
- [ ] At-a-glance cards grid
- [ ] Featured projects grid (large cards w/ overlay)
- [ ] Experience preview (compact timeline)
- [ ] Services preview (simple packages)
- [ ] Contact section (form + direct actions)

### Projects
- [ ] `/projects` page with:
  - [ ] filters (tags)
  - [ ] animated grid transitions
- [ ] `/projects/[slug]` case study template:
  - [ ] overview / problem / solution / stack / features
  - [ ] architecture placeholder
  - [ ] screenshots placeholder
  - [ ] CTA to contact

### About & Services & Contact
- [ ] `/about` timeline + education + certs + skills matrix
- [ ] `/services` packages + process + CTA
- [ ] `/contact` form + mailto + phone + LinkedIn

## Phase 5 — Motion & Polish (No Overkill)
- [ ] Page/section reveal animations (subtle)
- [ ] Card hover lift + glow
- [ ] Nav active indicator animation
- [ ] Respect `prefers-reduced-motion`

## Phase 6 — SEO & Performance
- [ ] Per-page metadata (title, description)
- [ ] OpenGraph + Twitter cards
- [ ] JSON-LD (Person + Website)
- [ ] `app/sitemap.ts` + `app/robots.ts`
- [ ] Canonicals (if needed)
- [ ] Optimize images with `next/image`
- [ ] Lazy-load below-the-fold components

## Phase 7 — Deployment & QA
- [ ] Add `/public/profile.jpg` placeholder
- [ ] Add `/public/resume.pdf` placeholder
- [ ] Build locally with `next build`
- [ ] Deploy to Vercel
- [ ] Validate Lighthouse + mobile responsiveness
- [ ] Final review: content clarity for non-technical client

## Optional Enhancements
- [ ] Add `/blog` scaffold (MDX) for SEO
- [ ] Add contact success toast + form validation
- [ ] Add analytics (Plausible/GA) (optional)