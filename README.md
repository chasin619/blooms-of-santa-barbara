# Blooms of Santa Barbara

The website of Blooms of Santa Barbara, a boutique, woman-owned wedding and event floral design studio in the heart of Santa Barbara, California, founded in 2017 by Sandy Shields: bridal bouquets and personal flowers, ceremony arches and installations, reception centerpieces, and florals for private parties and corporate events across Santa Barbara County, the Santa Ynez Valley, Ojai and Ventura. Designed and built by [Velour Web](https://www.velourweb.com).

Next.js 15 (App Router), React 19, Tailwind CSS 3, TypeScript. Every page is static; the only server code is the inquiry API and the Instagram feed proxy. No analytics scripts, no cookies, no animation libraries.

## Design

The structure follows chicflowers.com: an uppercase, widely tracked Italiana wordmark over a full-screen cover, a full-screen centered menu, square photo tiles with the title on hover, a dark "Praise" band, a "Follow along" Instagram grid and the large "Inquire here" footer with the address bar. The feminine touches are the studio's own: a petal-and-blush palette with rose and sage accents and deep plum for the dark bands, Cormorant Garamond italic as the soft counterpoint to the capitals, arched photo frames, pill-shaped buttons, a five-petal bloom mark and a sprig divider. Colors and fonts live in `tailwind.config.ts`, `src/app/globals.css` and `src/app/layout.tsx`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also typechecks and lints)
npm start
```

## Where things live

| What | Where |
|---|---|
| Business facts: name, phone, Instagram, review links, service areas, menu | `src/data/site.ts` |
| Services (6 pages: weddings, bouquets, ceremony, reception, events, corporate) | `src/data/services.ts` |
| Location pages (Santa Barbara, Montecito, Goleta, Carpinteria & Summerland, Santa Ynez Valley, Ojai & Ventura) | `src/data/locations.ts` |
| Reviews: verbatim quotes (empty until pasted in), review themes and source links | `src/data/reviews.ts` |
| Owner bio | `src/data/team.ts` |
| Portfolio images, categories and the Instagram fallback grid | `src/data/portfolio.ts` |
| FAQ | `src/data/faqs.ts` |
| Photos (WebP) and where each one came from | `public/images/`, `IMAGE-SOURCES.md` |
| Structured data (Florist/LocalBusiness, Service, FAQPage, BreadcrumbList) | `src/lib/schema.ts` |
| Inquiry API: validation, honeypot, time trap, rate limit, email, dashboard forwarding | `src/app/api/contact/route.ts`, `src/lib/leads.ts` |
| Live Instagram feed for "Follow along" | `src/app/api/instagram-feed/route.ts`, `src/components/site/InstagramGrid.tsx` |

Pages: home, about, services hub plus 6 service pages, portfolio, reviews, locations hub plus 6 location pages, FAQ, contact, thank-you (noindex), privacy, terms, plus `robots.txt`, `sitemap.xml` and `llms.txt`.

## Photos

The studio's photos live on Instagram and The Knot and could not be pulled from the build environment, so the site launches with free-license Pexels photography as placeholders (listed in `IMAGE-SOURCES.md`). The founder portrait is a stock florist, not Sandy; replace it first. To replace the rest with the studio's own photos:

1. Download the photos from Instagram, The Knot or the photographers into a folder, for example `./photos-in` (ignored by git).
2. Run `node scripts/import-images.mjs ./photos-in --prefix portfolio`. Each photo becomes an optimized WebP in `public/images/`, and the script prints ready-to-paste lines with the measured aspect ratio.
3. Paste the lines into `src/data/portfolio.ts` with alt text and a category. To replace a hero or service photo, give the new file the same name as the old one (for example `hero-home.webp`) and nothing else changes.

## Reviews

The reviews page and the home page summarize what couples say in their public reviews; no review is quoted until it is copied word for word. To show quotes, paste each one into `reviews` in `src/data/reviews.ts` with the reviewer's first name, the month and the source, and both pages pick them up automatically.

## Environment variables

See `.env.example`. Nothing is required to build or run.

- `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`: Gmail SMTP for inquiry emails. `EMAIL_TO` is the studio's inbox (confirm it with Sandy; it is not published anywhere). Without them, inquiries are logged to the server console.
- `VELOUR_TRACK_URL`, `VELOUR_SITE_SLUG`, `VELOUR_LEAD_SECRET`: reporting to the Velour Web dashboard (page views, Call/Text/Email taps, and every inquiry, signed with the lead secret). Without them, reporting is off.
- `INSTAGRAM_FEED_ORIGIN` with `INSTAGRAM_VENDOR_SLUG`, or `INSTAGRAM_ACCESS_TOKEN`: the live @bloomsofsantabarbara grid on the home page. The first option is the same platform feed chicflowers.com uses; the second is a long-lived Instagram API token. Without either, the grid shows the site's own photos linking to the profile.

## Launch checklist

1. Confirm the domain. `SITE.url` in `src/data/site.ts` is `https://www.bloomsofsantabarbara.com`, which the business does not own yet; buy it or change it, then point it at Vercel.
2. Confirm the business facts in `src/data/site.ts` with Sandy: phone, the studio email (`SITE.email`, shown in the footer and contact page once set), the rating line and the service areas.
3. Replace the placeholder photos (see Photos above), starting with the founder portrait, the home cover, the six service images and the portfolio.
4. Paste verbatim reviews into `src/data/reviews.ts` (see Reviews above).
5. Connect Instagram (one of the two options above) so "Follow along" shows the real feed.
6. Set the email and Velour Web variables in Vercel and redeploy. In Velour Web, add the site to `src/data/managed-sites.ts` with its domain origins, then copy its tracking values from /admin.
