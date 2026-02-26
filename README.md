# Mohammed CHIRAH - Premium Portfolio

A Next.js (App Router), TypeScript, and Tailwind CSS powered portfolio upgraded to a "luxury terminal" aesthetic using Framer Motion. 

## Technical Overview
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (Custom dark mode neon theme)
- **Animations:** Framer Motion (page transitions, spring physics, scroll reveals)
- **Data Engine:** One single TypeScript file runs the whole site (`src/data/resume.ts`)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Customizing The Content

You **do not** need to edit UI React components to change your information! Everything is driven by data.

1. **Update `src/data/resume.ts`**: This is your single source of truth. Replace `[ADD LINK]` or `[ADD METRICS]` with real data when you have it.
2. **Project Case Studies**: Read the placeholders in `resume.ts`. When you add a new project object, a new route (`/projects/new-slug`) is entirely auto-generated!
3. **Change Images**: 
   - Replace `/public/Portfolio.png` with a high-res photo.
   - For architecture diagrams in `/projects/[slug]`, upload an image to `/public` and update the component.

## Deployment to Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Leave all build settings as default.
5. Click **Deploy**.

## SEO Checklist & Final Steps

Once you deploy to Vercel, ensure you do the following:
- [ ] Open `src/lib/seo.ts` and change `const baseUrl` to your real deployed domain.
- [ ] Open `src/app/sitemap.ts` and change `const baseUrl` to your real deployed domain.
- [ ] Open `src/app/robots.ts` and change `const baseUrl` to your real deployed domain.
- [ ] Confirm your OpenGraph image (`/public/Portfolio.png`) looks good when sharing links on LinkedIn/Twitter.

## Performance Note
Framer Motion is heavily used but loaded via lazy component boundaries where possible. Always run `npm run build` locally before pushing to production to ensure TypeScript respects the animated DOM.
