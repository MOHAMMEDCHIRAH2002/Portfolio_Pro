# PROJECT_CONTEXT.md

## 1) Project Overview
Build a **premium, modern, client-friendly portfolio** for **Mohammed Chirah** (Full-Stack Developer).
The portfolio must communicate value quickly to **non-technical clients** while still being credible for recruiters.

## 2) Business Goals
- Convert visitors into leads (freelance / job opportunities).
- Make key info instantly scannable:
  - What you do
  - Skills
  - Projects
  - Experience
  - How to contact you
- Increase trust via clear structure + professional tone + proof (projects/case studies).

## 3) Target Audience
- Non-technical decision makers (startup founders, business owners, PMs).
- Technical recruiters and engineers (secondary).

## 4) UX Requirements (Client-First)
- **No developer gimmicks** (no terminal UI / no cryptic interactions).
- “Everything visible” structure:
  - **Left fixed sidebar**: profile, contact, skills summary, socials, CTA.
  - **Central content**: projects cards + experience + services + education + contact.
  - **Right mini-nav**: quick jump between sections (Overview, Projects, Experience, Services, Contact).
- Make reading effortless:
  - clean hierarchy (H1/H2/H3)
  - short paragraphs
  - consistent spacing
  - high contrast

## 5) Visual Style (Luxury + Modern)
- Dark executive theme (premium, calm).
- Single accent color used sparingly.
- High-end cards:
  - subtle 1px border
  - soft shadow + gentle glow on hover
  - consistent radius and spacing
- Subtle animations only (Framer Motion), respecting `prefers-reduced-motion`.

## 6) Technical & SEO Requirements
- Framework: **Next.js (App Router) + React + TypeScript**
- Styling: TailwindCSS with CSS variables theme system
- SEO:
  - per-page metadata (title/description)
  - OpenGraph + Twitter cards
  - JSON-LD (Person + Website)
  - sitemap + robots (Next.js built-in route files)
  - semantic HTML + internal links
- Performance:
  - next/image everywhere
  - lazy-load non-critical sections
  - minimal JS
  - excellent Lighthouse target

## 7) Site Architecture (Recommended)
### Pages
- `/` (one-page scroll experience: centralized)
- `/projects` (projects listing + filters)
- `/projects/[slug]` (case study pages for SEO & shareability)
- `/about` (timeline + education + certifications)
- `/services` (productized packages + process)
- `/contact` (form + direct contact)

### Content Sections on Home
- Hero (headline + short value proposition + CTA)
- At-a-glance cards (focus areas, core stack, certifications)
- Featured projects (big cards)
- Experience timeline preview
- Services preview
- Final CTA + Contact block

## 8) Success Criteria (KPIs)
- Lighthouse: Performance/SEO/Accessibility ≥ 90
- Clear conversion:
  - visible CTA above the fold
  - contact methods easy to find
- Easy scanning: user can understand profile in < 30 seconds

## 9) Content Source
All content must be based on the provided CV data (no invented metrics or claims).