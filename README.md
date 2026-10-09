# ABDUL MASOOD TRADING LLC — masoodlifts.com

Production website for **ABDUL MASOOD TRADING LLC** (عبد المسعود للتجارة ش م م), Sohar, Sultanate of Oman — renting equipment and engineering machinery for construction and civil works: crane, tipper, boom loader, 3 to 18 ton forklift, excavator, JCB, and wheel loader.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, React Server Components, fully static output)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vercel Analytics](https://vercel.com/analytics)

## Project Structure

```
app/
  fonts.ts                  Fonts shared by both root layouts
  (en)/layout.tsx           English root layout: <html lang="en">, metadata, LocalBusiness/WebSite JSON-LD
  (en)/page.tsx             Homepage ("Heavy Equipment Rental in Oman")
  (en)/equipment/[slug]/    One page per machine (7), from lib/equipment.ts
  (en)/equipment/[slug]/[capacity]/  Machine-size pages, e.g. 25-ton-crane-rental-oman (lib/capacities.ts)
  (en)/services/[slug]/     Keyword hubs (lib/services.ts) + equipment × city pages (lib/service-areas.ts)
  (en)/locations/           Oman index grouped by all 11 governorates
  (en)/locations/[slug]/    Governorate hubs (lib/locations.ts) and town/industrial-area pages (lib/areas.ts)
  (en)/ports/[slug]/        Port pages (lib/ports.ts) + /ports index
  (en)/blog/                Guides (lib/blog/posts.ts)
  (en)/about/, contact/     Company facts, quote form, yard map
  (ar)/layout.tsx           Arabic root layout: <html lang="ar" dir="rtl">
  (ar)/ar/                  Arabic pages (lib/arabic.ts), each paired with an English page via hreflang
  sitemap.ts, robots.ts, llms.txt/
components/                 Header, footer, templates, homepage sections; components/ar/ for the Arabic section
lib/
  site-config.ts            Company NAP, yard, email, form endpoint, governorates — single source of truth
  equipment.ts              The 7 fleet categories
  capacities.ts             Confirmed machine sizes (cranes 25/50 ton, forklifts 3/5/10/18 ton)
  locations.ts              One hub per governorate (11)
  areas.ts                  20 town and industrial-area pages, unique copy each
  ports.ts                  8 port pages
  service-areas.ts          Generates the 42 equipment × city pages for the six original hubs
  services.ts               Hand-written keyword hubs
  arabic.ts                 Arabic section content
  schema.ts, seo.ts         JSON-LD builders and per-page metadata (canonical, hreflang)
docs/business-listing-kit.md  NAP details and directory/review checklist
```

## Local Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build — every route is statically generated
```

## Inquiry Form

Submitting the quote form opens WhatsApp's official click-to-chat link to
+968 7928 8727 with the details already typed; the visitor presses send. At the
same time the form posts a copy to `siteConfig.inquiryEndpoint` (FormSubmit),
which emails it to chabdulmasood@gmail.com, so a lead still arrives if the
visitor closes WhatsApp without sending or doesn't have it. No backend or API
key is required.

**Go-live step:** submit the form once on the live site. FormSubmit sends an
activation email to chabdulmasood@gmail.com; click the link, or no inquiries
are delivered by email.

## SEO Notes

- Page titles use the template `%s | Abdul Masood Trading`; when that would pass 60 characters, `pageMetadata` drops the suffix automatically.
- Keyword ownership (one page per query, to avoid cannibalization):
  - "Heavy Equipment Rental in Oman" → `/`
  - "Crane & Forklift Rental Sohar" → `/services/crane-forklift-rental-sohar`
  - "Construction Machinery Rental Muscat" → `/locations/muscat`
  - "Boom Loader & Excavator Rental Oman" → `/services/boom-loader-excavator-rental-oman`
- One `LocalBusiness` entity (`/#business`) is emitted on every page from both root layouts; `Service` nodes reference it as `provider`.
- City, town, and port pages use `Service` + `areaServed`, not `LocalBusiness` — the company has one physical location, the Sohar yard.
- No meta keywords tags, and no Review/AggregateRating markup for on-site testimonials (Google ignores self-serving reviews).
- Pages with an Arabic version carry hreflang `en-OM` / `ar-OM` / `x-default`; the pairs come from `lib/arabic.ts`.
- Only list machine sizes the yard actually has in `lib/capacities.ts`, and only towns and ports we deliver to in `lib/areas.ts` / `lib/ports.ts`.
- Update `lib/site-config.ts` first when phone numbers, address, or domain change.
- After deploying, run `pnpm indexnow` to ping Bing/IndexNow, and submit the sitemap in Search Console.

## Owner TODOs Before Launch

- Keep `www.masoodlifts.com` as the primary domain (canonicals, sitemap, and schema all use it; the apex redirects to www).
- Replace `siteConfig.geo` with the exact pin of the yard in Sohar Industrial Estate, and add the plot or way number to `siteConfig.address.streetAddress`.
- Add the yard's opening hours to `siteConfig.openingHours`.
- Check the approximate road distances in `lib/areas.ts` against real deliveries.
- Point the FormSubmit relay at info@masoodlifts.com once that mailbox has clicked a FormSubmit activation link (see Inquiry Form).
- Replace stock photos with real fleet photos; add photos for tipper, JCB, and wheel loader (`lib/equipment.ts`).
- Swap the generated AM monogram for the official logo if one exists (`components/brand-logo.tsx`, `public/images/brand/`).
- Activate the FormSubmit endpoint (see above).
- Replace the placeholder testimonials in `lib/testimonials.ts` with real customer reviews.
