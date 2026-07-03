# Dreammecca Tour & Travel

Marketing landing page for **Dreammecca Tour & Travel**, an Umroh travel agency based in South Jakarta. Targets prospective Umroh pilgrims (25–55 years old) arriving via Facebook/Instagram ads and Google Search.

## Run & Operate

- `pnpm --filter @workspace/dreammecca run dev` — run the landing page dev server (managed by workflow `artifacts/dreammecca: web`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite 7, Tailwind CSS v4, Framer Motion
- UI components: Radix UI / shadcn
- Icons: Lucide React

## Where things live

- `artifacts/dreammecca/src/components/` — all landing page sections (Navbar, Hero, PartnerStrip, About, Facilities, Gallery, Packages, Testimonials, FAQ, FinalCTA, MapSection, Footer, StickyMobileCTA)
- `artifacts/dreammecca/src/lib/whatsapp.ts` — WhatsApp deep-link helper; **change `WA_NUMBER` here** to the real number
- `artifacts/dreammecca/src/lib/animations.ts` — reusable Framer Motion variants
- `artifacts/dreammecca/src/index.css` — design tokens (navy/gold/cream palette, Fraunces + Inter fonts)

## Architecture decisions

- Pure frontend — no backend or database required; all package data is static in `Packages.tsx`
- WhatsApp CTA number is a single constant in `lib/whatsapp.ts` — never hardcoded in components
- Fraunces (serif) for headings, Inter for body — loaded from Google Fonts in index.css
- Framer Motion `whileInView` for scroll-triggered animations; variants defined once in `lib/animations.ts`
- Mobile sticky CTA bar appears only after hero is scrolled past (Intersection Observer)

## Product

Full-page Umroh marketing site with:
- Sticky navbar (transparent → solid on scroll) with mobile hamburger slide-in
- Hero with Kaabah video/image background, gold headline, two CTAs, trust bar
- Infinite marquee partner/logo strip
- About section with stat counters
- 8-item facilities grid with hover effects
- Equipment gallery carousel
- Package cards with room-type price toggle and WhatsApp deep links
- Testimonials carousel
- FAQ accordion
- Final CTA section with Islamic pattern background
- Google Maps embed
- Footer with social links and PPIU license number
- Sticky mobile bottom bar with Phone + WhatsApp buttons

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Real WhatsApp number: update `WA_NUMBER` in `artifacts/dreammecca/src/lib/whatsapp.ts` (currently placeholder `6281234567890`)
- Hero video: place actual Kaabah video at `artifacts/dreammecca/public/videos/hero-1.mp4`; hero falls back to `public/images/hero/hero-1.jpg` if video is unavailable
- Social media URLs in `Footer.tsx` are placeholder links — update with real Instagram/Facebook/YouTube handles

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
