# Buzzvel Coding Test — Luma Learning Landing Page

A pixel-perfect, responsive landing page built as part of Buzzvel's frontend coding challenge. The project was developed within a one-week timeframe, during which I was also actively working on other client projects in parallel — so some of the finer interactive details I would have loved to include ended up being cut for time.

## Live Demo

> Deploy link here (e.g. Vercel)

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/turbopack`)
- **pnpm** as package manager

## Project Structure

```
app/
├── components/
│   ├── sections/       # Page sections (Hero, Categories, FeaturedCourse, etc.)
│   └── ui/             # Reusable UI primitives (Button, CategoryCard, Icons, etc.)
├── data/
│   └── index.js        # Centralized content/data layer
├── globals.css
├── layout.tsx
└── page.tsx
```

All content is decoupled from the components and lives in a single data file, making it easy to swap copy, images, or links without touching any component logic.

## Sections Implemented

- **Header** — Navigation with logo, nav links, login and CTA button
- **Hero** — Eyebrow, headline, description, dual CTAs, social proof avatars, floating badges, and responsive hero image (separate assets for mobile and desktop)
- **Categories** — Course category cards with descriptions and explore links
- **Featured Course** — Highlighted course with author info, metadata labels, and CTAs
- **How It Works** — Three-step process with custom SVG icons
- **Testimonial** — Pull quote with author info and key platform metrics
- **Community** — Section showcasing the learner and teacher community
- **Contact** — Contact info and a contact form
- **Call to Action** — Final conversion section with avatar stack and dual CTAs
- **Footer** — Multi-column links, slogan, and copyright

## Performance & Core Web Vitals

### Hero Image & LCP Optimization

By default, Next.js applies lazy loading to all images. Since the hero image sits right above the fold, it acts as the **Largest Contentful Paint (LCP)** element. To prevent layout shifts, eliminate loading delays, and resolve LCP warnings, I added the `priority` prop to the `<Image />` component.

This instructs Next.js to inject a `<link rel="preload">` tag into the document `<head>`, forcing the browser to fetch the critical asset immediately during the initial page load rather than waiting for the DOM to be fully parsed.

### Responsive Hero Images

Two separate image assets are served depending on the viewport — one optimized for mobile and one for desktop — avoiding the cost of downloading an oversized image on smaller screens.

### Next.js Config Optimizations

The `next.config.ts` includes a few additional performance flags:

- `cacheComponents: true` — enables component-level caching
- `partialPrefetching: true` — prefetches only the parts of a page that are needed, reducing unnecessary data transfer
- Turbopack configured with the Tailwind CSS loader for faster local development builds

## What I Would Have Done With More Time

Given the one-week window and the fact that I was juggling other projects simultaneously, a few things I care about didn't make the cut:

- **GSAP animations** — I enjoy working with GSAP and would have added entrance animations for section headings, staggered card reveals, and scroll-triggered transitions to bring the page to life
- **Hover effects** — Interactive micro-animations on cards, buttons, and links to improve the feel of the UI
- **Interactivity in general** — Currently, no interactive elements on the page actually do anything — buttons don't trigger actions, the contact form doesn't submit, and links are all placeholders. This was a deliberate scope decision given the time constraint; the focus was on getting the layout and visual fidelity right first
- **Mobile burger menu** — The design didn't include a spec for the open state of the mobile navigation, so rather than ship something inconsistent with the visual identity, I left it out entirely. With more time I'd design and implement an animation that feels native to the rest of the UI
- **Keyboard navigation for interactive elements** — The challenge brief mentioned keyboard arrow-key navigation as a desired interaction (likely for the categories or a carousel-style component). I didn't have time to implement it properly, but it's something I'm aware of and would prioritize in a production context
- **Accessibility audit** — A more thorough pass with a screen reader and axe to catch any remaining a11y gaps
- **Skeleton loaders / loading states** — For a more polished perceived performance experience

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
pnpm build   # production build
pnpm start   # start production server
pnpm lint    # run ESLint
```

## AI Assistance

I used AI tools to help automate a few specific, lower-stakes parts of the project:

- **Google Gemini** — Used to generate initial mock data and some boilerplate HTML structure scaffolding
- **Amazon Q** — Used to assist with parts that required more direct access to the project, such as complementing this README

That said, everything AI produced was reviewed and adjusted by me before being committed. No output was left as-is. The visual implementation — layout, spacing, typography, responsiveness, component architecture — was done entirely by hand. AI involvement accounts for roughly 10% of the overall work.

## Notes

- Icons are implemented as inline SVG React components under `app/components/ui/Icon/`, keeping the bundle free of icon library dependencies
- The `Clickable` primitive abstracts the difference between a `<button>` and an `<a>` tag, so interactive elements render the semantically correct HTML element based on whether an `href` is provided
