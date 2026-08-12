# Ranjith S — Engineering Portfolio

A premium, interactive portfolio built with Next.js 16 (App Router), TypeScript,
Tailwind CSS v4, and Framer Motion. Designed as a "digital engineering lab" —
dark graphite base, amber + cyan signal accents, technical typography.

## 1. Install & run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## 2. Environment variables

None are required to run the site as-is. If you wire up the contact form to a
real backend (see below), you'll add whatever keys that provider needs to a
`.env.local` file (never commit this file).

## 3. Images — currently placeholders

Every image on the site (`project.image`, `project.gallery`, the About
portrait) is a **Lorem Picsum** placeholder — a free, license-safe photo
service — seeded so the same fake photo shows every time you reload. Nothing
on the live site is a real photo of your projects yet.

**To replace them:**
1. Drop your real photos into `public/images/` (create the folder).
2. In `src/data/projects.ts`, change each project's `image` and `gallery`
   fields from the `picsum.photos` URL to `/images/your-photo.jpg`.
3. Do the same for the portrait in
   `src/components/about/AboutSection.tsx`.
4. If you host images externally instead (e.g. Cloudinary, S3), add that
   domain to `remotePatterns` in `next.config.ts`.

## 4. How to add or edit a project

Everything lives in `src/data/projects.ts` — no component edits needed.
Copy an existing project object, give it a new `id`/`slug`, and fill in the
fields (`title`, `description`, `technologies`, `architecture` steps, etc).
Set `featured: true` to have it appear in the "Selected Builds" grid, and
`size: "large"` to make it span both columns.

## 5. How to update social links & contact info

Edit `src/data/site.ts`:
- `site.email` — used by the "Email me" button
- `socials.github` / `socials.linkedin` / `socials.instagram`

These are currently placeholder URLs (marked `// TODO`) — replace them
before deploying.

## 6. Skills, lab tools, and process steps

- `src/data/skills.ts` — the expandable "Capabilities" grid, "The Lab"
  toolbench, "What I Build" categories, and the "How I Work" process steps.
- `src/data/experience.ts` — the Journey timeline (education + build
  milestones). Dates and entries are plain data, easy to edit or reorder.

## 7. Contact form — no backend wired yet

The form in `src/components/contact/ContactSection.tsx` validates input and
shows loading/success states, but **does not actually send anything** — see
the `TODO` comment in `handleSubmit`. Wire it up to one of:
- [Resend](https://resend.com) (recommended for Next.js)
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)

All three have simple client-callable APIs; swap the `setTimeout` simulation
for a real `fetch`/SDK call.

## 8. Deploying

### Option A — Cloudflare Pages (recommended for this project)

This site has no API routes or server actions, so it's configured for a
**static export** (`output: "export"` in `next.config.ts`) — Cloudflare
Pages just serves the generated HTML/CSS/JS directly, no adapter needed.

**Via the Cloudflare dashboard (Git integration):**
1. Push this project to a GitHub/GitLab repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, select the repo.
3. Build settings:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy. Every push to your main branch redeploys automatically.

**Via Wrangler CLI (no Git needed):**
```bash
npm run build
npx wrangler pages deploy out --project-name=ranjith-portfolio
```
(First run will prompt you to log in and create the project.)

Afterward, update `src/app/robots.ts` and `src/app/sitemap.ts` with your
real `*.pages.dev` or custom domain (both currently point at
`example.com`), then rebuild and redeploy.

**Note:** because images are unoptimized in static export
(`images.unoptimized: true`), swapping in your own project photos (see
section 3) — keep them reasonably compressed yourself, since Next won't
resize them for you on this host.

### Option B — Vercel

Vercel supports this project with zero config changes — it auto-detects
Next.js. If you deploy there instead of Cloudflare, you can optionally
remove `output: "export"` and `images.unoptimized: true` from
`next.config.ts` to get Vercel's on-the-fly image optimization back.

## 9. Performance notes

- Fonts are loaded via `next/font/google` (self-hosted at build time, no
  render-blocking requests) — this requires network access to
  `fonts.googleapis.com` at build time.
- The hero visual is hand-drawn SVG (no Three.js), kept deliberately light.
- Images use `next/image` for automatic optimization/lazy loading — once you
  swap in real photos, keep them reasonably sized (aim for <500KB each,
  WebP/AVIF where possible).
- `prefers-reduced-motion` is respected throughout (loader, cursor, hero
  visual, global CSS transition override).
- Custom cursor and hover-tilt effects are disabled on touch/coarse-pointer
  devices automatically.

## 10. What's implemented vs. simplified from the original brief

To ship a real, working site rather than a huge unfinished one, a few things
from the original spec were simplified:
- **Three.js / GSAP** — the hero visual is CSS/SVG instead, per the brief's
  own fallback instruction ("if Three.js hurts performance, use CSS/Canvas").
- **GitHub API live stats** — not wired up (would need a server route + your
  GitHub username); the "View GitHub" links point at your profile directly.
- **Lenis smooth-scroll** — native `scroll-behavior: smooth` is used instead
  to avoid an extra dependency; swap in Lenis if you want the heavier feel.
- **Sound toggle** — omitted; add if you actually have interface sounds you
  want to use (none were provided).

Everything else from the brief (loader, custom cursor, magnetic buttons,
project case studies, terminal easter egg, dark/light mode, responsive
design, SEO metadata, accessibility, 404 page) is fully implemented and
working.

## 11. Easter eggs

Click the logo 5 times, or press `Cmd/Ctrl + L`, to open the hidden
engineering terminal (try `help`, `projects`, `system.status()`).
