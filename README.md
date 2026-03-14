# Lotus Reel — Video Production Company Website

Professional video production website for **Lotus Reel**, a Bangkok-based video production company. Built to dominate English-language search for video production in Bangkok across Google, ChatGPT, Perplexity, and other AI search engines.

**Live site:** https://lotus-reel.vercel.app
**Target domain:** lotusreel.com (pending registration)

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | 6.x |
| Styling | Tailwind CSS (via `@tailwindcss/vite`) | 4.x |
| Interactive Islands | Preact | 10.x |
| Content | Markdown + Astro Content Collections | — |
| Sitemap | @astrojs/sitemap | 3.x |
| RSS | @astrojs/rss | 4.x |
| MDX | @astrojs/mdx | 5.x |
| Hosting | Vercel (static) | — |
| Newsletter | Beehiiv (planned) | — |
| Forms Backend | Airtable (planned) | — |

**Key architecture decisions:**
- **Static output only** — zero JS shipped by default, Preact islands hydrate only where needed
- **Tailwind CSS v4** — uses `@tailwindcss/vite` plugin (NOT `@astrojs/tailwind`, which only supports Astro 3-5)
- **No `@tailwindcss/typography`** — Tailwind v4 dropped the prose plugin. Article typography is handled by custom `.article-body` styles in `src/styles/global.css`
- **Astro 6 Content Collections** — config must be at `src/content.config.ts` (NOT `src/content/config.ts`) and uses the `glob` loader

## Project Structure

```
lotus-reel/
├── astro.config.mjs              # Astro config: static output, sitemap, MDX, Preact, Tailwind v4
├── package.json
├── tsconfig.json
├── public/
│   ├── robots.txt                # AI crawler allowances (GPTBot, PerplexityBot, ClaudeBot, etc.)
│   ├── favicon.svg
│   ├── favicon.ico
│   └── images/
│       └── logo.svg              # Lotus Reel logo (teal lotus + text)
├── src/
│   ├── content.config.ts         # Astro 6 content collection schema (blog)
│   ├── styles/
│   │   └── global.css            # Tailwind v4 @theme config + .article-body typography
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Root HTML layout (SEO, schema, header, footer, Google Fonts)
│   │   ├── BlogLayout.astro      # Blog post template (article header, TOC, body, FAQ, newsletter CTA)
│   │   └── ServiceLayout.astro   # Service page template (hero, features, process, pricing, FAQ, CTA)
│   ├── components/
│   │   ├── SEO.astro             # Meta tags: title, description, OG, Twitter, canonical, robots
│   │   ├── Schema.astro          # JSON-LD schema injection (renders <script type="application/ld+json">)
│   │   ├── Header.astro          # Sticky header with nav, services dropdown, mobile menu, CTA
│   │   ├── Footer.astro          # Newsletter signup, service links, social links, NAP info
│   │   ├── Hero.astro            # Hero section with title, subtitle, CTA buttons
│   │   ├── TrustBar.astro        # Client logo placeholders (20 slots, replace with real logos)
│   │   ├── ServiceCard.astro     # Service card with icon, title, description, price
│   │   ├── TestimonialCard.astro # Testimonial with quote, stars, attribution
│   │   ├── CTASection.astro      # Full-width CTA banner (primary or dark variant)
│   │   ├── FAQSection.astro      # Accordion FAQ with optional FAQPage schema injection
│   │   ├── BlogPostCard.astro    # Blog post preview card (image, title, excerpt, date)
│   │   ├── PricingTable.astro    # Service pricing comparison table
│   │   ├── Breadcrumbs.astro     # Breadcrumb nav with BreadcrumbList schema
│   │   ├── TableOfContents.astro # Auto-generated TOC from markdown headings
│   │   ├── RelatedPosts.astro    # Related blog posts (3 posts by matching tags)
│   │   └── islands/              # Preact interactive components (hydrated client-side)
│   │       ├── MultiStepForm.tsx     # 3-step lead intake: video type -> budget/timeline -> contact
│   │       ├── QuickQuoteWidget.tsx  # Floating bottom-right quick quote button/form
│   │       ├── NewsletterSignup.tsx  # Beehiiv newsletter signup (inline or card variant)
│   │       └── PricingCalculator.tsx # Interactive: type x duration x complexity -> estimate
│   ├── content/
│   │   └── blog/                 # Markdown blog posts (see "Blog Content" section below)
│   │       ├── video-production-cost-bangkok-2026.md
│   │       ├── complete-guide-video-production-bangkok.md
│   │       ├── how-to-choose-video-production-company.md
│   │       ├── types-of-corporate-videos.md
│   │       ├── video-production-process-brief-to-final.md
│   │       └── bangkok-filming-locations.md
│   ├── pages/
│   │   ├── index.astro                              # Homepage
│   │   ├── 404.astro                                # Custom 404 page
│   │   ├── rss.xml.ts                               # RSS feed generator
│   │   ├── blog/
│   │   │   ├── index.astro                          # Blog listing (all posts, sorted by date)
│   │   │   └── [...slug].astro                      # Dynamic blog post pages
│   │   ├── services/
│   │   │   ├── index.astro                          # Services overview
│   │   │   ├── corporate-video-production.astro
│   │   │   ├── commercial-advertising-video.astro
│   │   │   ├── social-media-video.astro
│   │   │   ├── event-videography.astro
│   │   │   ├── animation-motion-graphics.astro
│   │   │   ├── drone-aerial-video.astro
│   │   │   └── video-editing-post-production.astro
│   │   ├── pricing/index.astro                      # Transparent pricing + calculator
│   │   ├── portfolio/index.astro                    # Case studies + video gallery (placeholder)
│   │   ├── about/index.astro                        # Company story, team, process
│   │   ├── contact/index.astro                      # Multi-step intake form + contact info
│   │   └── faq/index.astro                          # Comprehensive FAQ (25+ items)
│   ├── data/
│   │   ├── services.ts           # 7 service definitions (slug, title, pricing, features, FAQ, process)
│   │   ├── pricing.ts            # Pricing tiers with THB and USD
│   │   ├── testimonials.ts       # Client testimonials (name, company, quote, rating)
│   │   ├── faq.ts                # FAQ items organized by category
│   │   └── navigation.ts         # Main nav + footer nav + services dropdown structure
│   └── utils/
│       ├── schema.ts             # JSON-LD generators + organization data constants
│       ├── reading-time.ts       # Word count -> reading time calculator
│       └── format-date.ts        # Date formatting utility
```

## Pages (22 total)

| Page | Path | Schema Types |
|------|------|-------------|
| Homepage | `/` | Organization, WebSite, AggregateRating |
| Services Overview | `/services/` | — |
| Corporate Video | `/services/corporate-video-production/` | Service, HowTo, FAQPage |
| Commercial/Advertising | `/services/commercial-advertising-video/` | Service, HowTo, FAQPage |
| Social Media Video | `/services/social-media-video/` | Service, HowTo, FAQPage |
| Event Videography | `/services/event-videography/` | Service, HowTo, FAQPage |
| Animation and Motion Graphics | `/services/animation-motion-graphics/` | Service, HowTo, FAQPage |
| Drone/Aerial Video | `/services/drone-aerial-video/` | Service, HowTo, FAQPage |
| Video Editing | `/services/video-editing-post-production/` | Service, HowTo, FAQPage |
| Pricing | `/pricing/` | — |
| Portfolio | `/portfolio/` | — |
| Blog Index | `/blog/` | — |
| Blog Posts (6) | `/blog/[slug]/` | Article, FAQPage (if faqItems present) |
| About | `/about/` | — |
| Contact | `/contact/` | — |
| FAQ | `/faq/` | FAQPage |
| 404 | `/404` | — |

## Blog Content

Blog posts live in `src/content/blog/` as Markdown files. The content collection is defined in `src/content.config.ts`.

### Blog post frontmatter schema

```yaml
title: string              # Required. Post title
description: string        # Required. SEO meta description / excerpt
publishDate: date          # Required. ISO date (e.g., 2026-03-10)
updatedDate: date          # Optional. Last updated date
author: string             # Default: "Lotus Reel Team"
authorBio: string          # Optional. Author credentials
category: string           # Optional. Display category label
tags: string[]             # Optional. For related posts matching
featuredImage: string      # Optional. Path to featured image
featuredImageAlt: string   # Optional. Alt text for featured image
seoTitle: string           # Optional. Override <title> tag
seoDescription: string     # Optional. Override meta description
ogImage: string            # Optional. Open Graph image URL
faqItems:                  # Optional. Generates FAQPage schema when present
  - question: string
    answer: string
```

### Current blog posts

| File | Title | Words | Category |
|------|-------|-------|----------|
| `video-production-cost-bangkok-2026.md` | Video Production Cost in Bangkok 2026 -- Complete Pricing Guide | ~4,000 | Pricing and Budget |
| `complete-guide-video-production-bangkok.md` | The Complete Guide to Video Production in Bangkok, Thailand | ~6,000 | Video Production |
| `how-to-choose-video-production-company.md` | How to Choose the Right Video Production Company in Bangkok | ~3,400 | Video Production |
| `types-of-corporate-videos.md` | 10 Types of Corporate Videos Every Business Needs | ~2,600 | Corporate Video |
| `video-production-process-brief-to-final.md` | The Video Production Process: From Brief to Final Cut | ~3,900 | Video Production |
| `bangkok-filming-locations.md` | Top Bangkok Filming Locations for Corporate Videos | ~1,500 | Filming Locations |

All posts follow **AEO (Answer Engine Optimization)** format:
- Answer-first intro (key answer in first 40 words)
- FAQ section with 5-10 questions + FAQPage schema
- Internal links to service pages
- CTA embedded mid-article and at end

### Adding a new blog post

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter matching the schema above (title, description, publishDate are required)
3. Write content in Markdown -- headings, lists, tables, blockquotes, code blocks all styled via `.article-body` CSS
4. Optionally add `faqItems` array for automatic FAQPage schema generation
5. The post automatically appears on the blog index, RSS feed, and sitemap

## Design System

### Brand Colors (defined in `src/styles/global.css` via `@theme`)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` to `primary-900` | Teal scale (#f0fdfa to #134e4a) | Primary brand, buttons, links, accents |
| `accent-50` to `accent-900` | Gold scale (#fffbeb to #78350f) | Stars, highlights, warm accents |
| `neutral-50` to `neutral-950` | Slate scale (#f8fafc to #020617) | Text, backgrounds, borders |
| `lotus-50` to `lotus-900` | Pink scale (#fdf2f8 to #831843) | Brand accent (lotus flower) |

**Contrast notes:** All interactive elements use `primary-700` (not `primary-600`) for WCAG AA compliance. `primary-600` (#0d9488) only achieves 3.74:1 contrast against white, below the 4.5:1 requirement. This applies to all buttons, text links, and small text site-wide.

### Typography

- **Font:** Inter (loaded async from Google Fonts via preload + media="print" pattern to avoid render-blocking)
- **Article typography:** Custom `.article-body` class in `global.css` handles all Markdown-rendered content (paragraphs, headings h2-h5, links, lists, blockquotes, tables, code, images, horizontal rules, definition lists)
- **Font sizes:** Custom scale from `--text-caption` (0.75rem) to `--text-display` (4.5rem)

## SEO and Schema

### JSON-LD Schema Types

Generated via `src/utils/schema.ts`:

- **Organization** — company name, logo, address, social links, contact info
- **WebSite** — with SearchAction for sitelinks search box
- **AggregateRating** — 4.9/5 from 47 reviews
- **Article / BlogPosting** — for blog posts with author, dates, publisher
- **FAQPage** — auto-generated from `faqItems` in frontmatter or component data
- **Service** — for each service page with pricing
- **HowTo** — step-by-step process on service pages
- **BreadcrumbList** — auto-generated on every page with breadcrumbs

### AI/AEO Optimization

- `robots.txt` explicitly allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot
- Answer-first content format on all blog posts and service pages
- Comprehensive FAQ schema on 15+ pages
- Structured data on every page type

## Interactive Islands (Preact)

These components only hydrate on the client when needed -- zero JS cost on pages that don't use them.

| Component | File | Hydration | Purpose |
|-----------|------|-----------|---------|
| MultiStepForm | `islands/MultiStepForm.tsx` | `client:visible` | 3-step lead intake form (video type, budget/timeline, contact details). Posts to Airtable API. |
| QuickQuoteWidget | `islands/QuickQuoteWidget.tsx` | `client:idle` | Floating bottom-right bubble. Expands to quick 3-field form. Posts to Airtable. |
| NewsletterSignup | `islands/NewsletterSignup.tsx` | `client:visible` | Email signup for "Lotus Reel Insider" newsletter. Posts to Beehiiv API. Has `inline` and `card` variants. |
| PricingCalculator | `islands/PricingCalculator.tsx` | `client:visible` | Select video type, duration, complexity to get estimated price range in USD and THB. |

## External Integrations (Pending Setup)

### Airtable (Lead Management)

Environment variable: `PUBLIC_AIRTABLE_URL`

The MultiStepForm and QuickQuoteWidget POST to Airtable. Expected table structure:

| Field | Type |
|-------|------|
| Name | Single line text |
| Email | Email |
| Phone | Single line text |
| Company | Single line text |
| Video Type | Single select |
| Budget | Single select |
| Timeline | Single select |
| Description | Long text |
| Source | Single line text |
| Status | Single select (New/Contacted/Qualified/Won/Lost) |

### Beehiiv (Newsletter)

Environment variable: `PUBLIC_BEEHIIV_URL`

Newsletter name: **"Lotus Reel Insider"**
Tagline: "Weekly insights on video production, marketing, and the Bangkok creative scene"

The NewsletterSignup component POSTs email addresses to the Beehiiv API.

### Google Analytics / Search Console

Not yet configured. Add GA4 tracking code to `BaseLayout.astro` `<head>` when ready.

## Lighthouse Scores (Production Build)

| Page | Performance | Accessibility | Best Practices | SEO |
|------|------------|---------------|----------------|-----|
| Homepage | 100 | 100 | 100 | 100 |
| Blog Post | 94 | 100 | 100 | 100 |

**Core Web Vitals (Homepage):**
- FCP: 1.0s
- LCP: 1.2s
- TBT: 0ms
- CLS: 0.004
- Speed Index: 1.0s

## Commands

```sh
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
```

## Deployment

Currently deployed on **Vercel** (static). Auto-deploys can be configured by connecting the GitHub repo to Vercel's Git integration.

```sh
vercel --prod        # Deploy to production
```

To set up auto-deploy: connect the GitHub repo at vercel.com, Import Project, and select `lotus-reel`.

### Custom Domain

When `lotusreel.com` is registered:
1. Add it as a custom domain in Vercel project settings
2. Update DNS to point to Vercel (CNAME or A record)
3. SSL is automatically provisioned

## Key Files Reference

| What you want to change | File(s) |
|------------------------|---------|
| Site metadata, company info | `src/utils/schema.ts` (organizationData) |
| Navigation links | `src/data/navigation.ts` |
| Service pages content | `src/data/services.ts` + `src/pages/services/*.astro` |
| Pricing data | `src/data/pricing.ts` |
| Testimonials | `src/data/testimonials.ts` |
| FAQ content | `src/data/faq.ts` |
| Blog posts | `src/content/blog/*.md` |
| Blog frontmatter schema | `src/content.config.ts` |
| Global styles and colors | `src/styles/global.css` |
| Article/prose typography | `src/styles/global.css` (`.article-body` section) |
| SEO meta tags | `src/components/SEO.astro` |
| JSON-LD schema | `src/components/Schema.astro` + `src/utils/schema.ts` |
| Header/footer | `src/components/Header.astro` / `src/components/Footer.astro` |
| Lead capture forms | `src/components/islands/MultiStepForm.tsx` / `QuickQuoteWidget.tsx` |
| Client logos (trust bar) | `src/components/TrustBar.astro` (replace placeholder text with real logo images) |
| Robots / AI crawlers | `public/robots.txt` |

## Known Limitations and TODOs

- **Client logos:** TrustBar uses text placeholders -- replace with actual client logo images
- **Portfolio:** Uses placeholder project data -- replace with real case studies and video embeds
- **Team photos:** About page uses placeholder SVG avatars -- replace with real team photos
- **Airtable integration:** Forms are wired up but need `PUBLIC_AIRTABLE_URL` env var set
- **Beehiiv integration:** Newsletter signup needs `PUBLIC_BEEHIIV_URL` env var set
- **Analytics:** GA4 and Search Console not yet connected
- **Domain:** `lotusreel.com` needs to be registered and pointed to Vercel
- **Blog CLS:** Blog posts have a minor CLS (0.146) from the Table of Contents expanding on load
