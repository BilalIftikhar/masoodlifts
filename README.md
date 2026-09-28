# ABDUL MASOOD TRADING LLC — masoodlifts.com

Production website for **ABDUL MASOOD TRADING LLC** (عبد المسعود للتجارة ش م م, C.R. No. 1441246), Sohar, Sultanate of Oman — renting equipment and engineering machinery for construction and civil works: crane, tipper, boom loader, 3 ton forklift, excavator, JCB, and wheel loader.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, React Server Components, fully static output)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vercel Analytics](https://vercel.com/analytics)

## Project Structure

```
app/
  layout.tsx                Root layout, global metadata, Organization/WebSite JSON-LD, fonts
  page.tsx                  Homepage ("Heavy Equipment Rental in Oman") + LocalBusiness JSON-LD
  equipment/[slug]/         One page per machine (7), from lib/equipment.ts
  services/[slug]/          Keyword hubs (lib/services.ts) + equipment × city pages (lib/service-areas.ts)
  locations/[slug]/         Sohar, Muscat, Duqm, Salalah, Nizwa, Al Buraimi (lib/locations.ts)
  blog/                     Guides (lib/blog/posts.ts)
  about/, contact/          Company facts and quote form
  sitemap.ts, robots.ts, llms.txt/
components/                 Header, footer, templates, homepage sections
lib/
  site-config.ts            Company NAP, C.R. no., phones, email, form endpoint — single source of truth
  equipment.ts              The 7 fleet categories
  locations.ts              The 6 Oman hubs, with per-city copy and notes
  service-areas.ts          Generates the 42 equipment × city pages
  services.ts               Hand-written keyword hubs
  schema.ts, seo.ts         JSON-LD builders and per-page metadata
docs/business-listing-kit.md  NAP details and directory/review checklist
```

## Local Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build — every route is statically generated
```

## Inquiry Form

The quote form posts to `siteConfig.inquiryEndpoint` (FormSubmit), which emails
submissions to chabdulmasood@gmail.com — no backend or API key required.

**Go-live step:** submit the form once on the live site. FormSubmit sends an
activation email to chabdulmasood@gmail.com; click the link, or no inquiries
are delivered. WhatsApp is offered next to the form as a fallback.

## SEO Notes

- Page titles use the template `%s | Abdul Masood Trading`; keep page titles to ~37 characters.
- Keyword ownership (one page per query, to avoid cannibalization):
  - "Heavy Equipment Rental in Oman" → `/`
  - "Crane & Forklift Rental Sohar" → `/services/crane-forklift-rental-sohar`
  - "Construction Machinery Rental Muscat" → `/locations/muscat`
  - "Boom Loader & Excavator Rental Oman" → `/services/boom-loader-excavator-rental-oman`
- `LocalBusiness` (homepage, contact) and `Organization` (every page) JSON-LD point to the Sohar address, the Oman phone, and the C.R. number.
- City pages use `Service` + `areaServed`, not `LocalBusiness` — the company has one registered address.
- Update `lib/site-config.ts` first when phone numbers, address, or domain change.
- After deploying, run `pnpm indexnow` to ping Bing/IndexNow, and submit the sitemap in Search Console.

## Owner TODOs Before Launch

- Point masoodlifts.com at the host and 301-redirect `www.` to the apex (canonicals, sitemap, and schema all use `https://masoodlifts.com`).
- Replace `siteConfig.geo` with the real yard location in Sohar.
- Replace stock photos with real fleet photos; add photos for tipper, JCB, and wheel loader (`lib/equipment.ts`).
- Swap the generated AM monogram for the official logo if one exists (`components/brand-logo.tsx`, `public/images/brand/`).
- Activate the FormSubmit endpoint (see above).
