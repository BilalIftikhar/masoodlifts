# SEO Growth Plan — masoodlifts.com

What to do outside the code to get pages indexed and grow reach: Search
Console actions, backlinks and listings, social, and the next guides to
publish. Work through it in order; each section says who does it.

Business details for every listing (name, phone, address, descriptions) are
in [business-listing-kit.md](business-listing-kit.md). Copy them exactly.

---

## 1. Why pages are "Crawled – currently not indexed"

Google fetched the page and decided not to index it *yet*. Google doesn't say
why, so the list below is what we found and fixed, not a confirmed diagnosis:

| Likely cause | What was done |
|---|---|
| The pages went live on 10 Oct 2026; Google had seen them for ~5 days | Nothing to fix but time |
| 42 generated `/services/<machine>-rental-<city>` pages were 92–93 % identical, about a third of the site | Noindexed and removed from the sitemap (still live for visitors) |
| Placeholder testimonials on every page | Removed until real reviews exist |
| Guides had only 3 internal links each | Every equipment, size, town, port and hub page now links to 3 relevant guides |
| Arabic pages are short (~450 words) | **Still open**, see section 6 |
| Few or no backlinks, so Google gives the domain little trust | Sections 3–4 below |

Content and structure make pages *eligible*; links and mentions from other
sites give Google reasons to trust the domain.

---

## 2. Search Console and Bing, right after deploying (developer)

1. Deploy, then run `pnpm indexnow`. The script now submits the `www`
   host, which the sitemap uses. It sent the apex host before, and IndexNow
   only accepts URLs on the host named in the request, so earlier pings may
   not have registered.
2. Search Console → Sitemaps → resubmit `https://www.masoodlifts.com/sitemap.xml`.
   It now lists 86 URLs: the 42 noindexed pages are gone, and 10 new guides are in.
3. URL Inspection → **Request indexing**. The daily quota is limited; when the
   tool says the quota is used up, carry on the next day. Do them in this order:
   - Day 1: `/ports`, `/ports/sohar-port`, `/locations/sohar`, the 25 ton crane page, the 18 ton forklift page, and the 5 newest guides
   - Day 2: the other new guides, then `/ports/*`
   - Days 3–4: `/locations/<town>` pages from the "not indexed" list
   - Day 5: the Arabic pages (after section 6, if possible)
4. Pages → "Crawled – currently not indexed" → **Validate fix**, if the button is offered.
5. Bing Webmaster Tools → submit the same sitemap. Bing also feeds ChatGPT search and Copilot.
6. **Don't** request indexing for the noindexed `/services/<machine>-rental-<city>` pages.
   They will move to "Excluded by 'noindex' tag" over the next few weeks, which is expected.

Check again after 2 weeks and after 4 weeks. If a town page is still not
indexed after 6 weeks *and* backlinks have started coming in, add 300+ words
of real local detail to it: recent jobs, access notes, photos from site.

---

## 3. Google Business Profile: the biggest single lever (owner)

For "crane rental Sohar"-type searches, Google usually shows the map results
above the websites, and those come from Business Profiles.

- [ ] Create or claim the profile at the **yard address** in Sohar Industrial Estate
      (not the P.O. Box). Set the pin precisely, and give the same coordinates to
      the developer for `siteConfig.geo`.
- [ ] Primary category: *Equipment rental agency*. Secondary: *Crane rental agency*,
      *Construction equipment supplier*, *Earth works company*.
- [ ] Services: add each machine as a service, with a link to its page on the site
      (e.g. Crane rental → `https://www.masoodlifts.com/equipment/crane`).
- [ ] Service areas: the governorates in the listing kit.
- [ ] Photos: at least 20 real photos (each machine, the yard, machines on jobs,
      the team). Add 2–3 new ones every week. Real photos beat stock every time.
- [ ] Posts: one a week. Share a new guide or a recent job, with a link.
- [ ] Q&A: add the 5 questions customers ask most, with answers.
- [ ] Reviews: ask every customer after each job (WhatsApp template in the kit).
      Target 10 reviews in the first 2 months, then 3–5 a month.
- [ ] When real reviews arrive, ask the customer if one can go on the website too,
      and send it to the developer for `lib/testimonials.ts`.

---

## 4. Backlinks and citations (owner or marketing person)

Aim for **quality and relevance**, not numbers. Ten real Omani business links
beat a thousand bought ones, and bought links can get the site penalised.

### Week 1–2: Citations (consistent name, address, phone)
- [ ] Bing Places, Apple Business Connect
- [ ] Yellow Pages Oman, Cybo
- [ ] OpenSooq (Oman): an ad for each machine, with the website link. Mostly for
      direct enquiries.
- [ ] LinkedIn company page, Facebook page, Instagram, YouTube channel (same name,
      phone, website). Then send the URLs to the developer for `siteConfig.social`.

### Month 1–2: Industry and business directories (strongest links)
- [ ] Oman Chamber of Commerce and Industry (OCCI) member listing
- [ ] Madayn (Public Establishment for Industrial Estates) and Sohar Port & Freezone
      supplier or service-provider lists, if eligible
- [ ] OPAL (Oman Energy Association) membership, if serving the energy sector.
      Check whether members are listed on its website with a link
- [ ] Registration with main contractors' and plant operators' vendor portals.
      These rarely link, but they bring work and brand searches

### Ongoing: Relationship links (best quality)
- [ ] **Customers:** after a good job, ask for a mention on their "projects" or
      "suppliers" page (email template in the kit). Offer photos.
- [ ] **Case studies:** for each notable job, with the customer's permission, send
      the developer the details (machine, place, problem, result, photos). A case
      study on our site gives the customer a reason to link to it.
- [ ] **Suppliers and dealers:** ask the dealers you buy machines or parts from
      whether they list customers or feature fleet stories.
- [ ] **Local press:** Times of Oman, Oman Observer, Muscat Daily, Construction Week
      Middle East. Offer expert comment on topics the guides already cover:
      the midday work ban (every May), lifting safety and certification, the
      Salalah khareef (May/June). Pitch templates are in the kit.
- [ ] **Education:** Sohar University and the technical colleges' career fairs or
      internships. A partner or sponsor mention on an `.edu.om` site is a strong local link.
- [ ] **Community and sponsorship:** a local Sohar event, sports team, or charity
      drive that lists sponsors with a link.

### Do not
- Buy links, "DA 50+ guest posts", PBNs, or Fiverr SEO packages
- Create profiles for cities where there is no office (Google suspends them)
- Use a different business name or phone format anywhere

---

## 5. Social media (owner or marketing person)

Social links don't pass ranking value, but they bring enquiries and people
searching for the company by name.

- **LinkedIn** (where contractors and procurement staff are): 2 posts a week.
  One real job photo with 2–3 lines about it, plus one guide link with a
  takeaway. Tag customers when they agree to it.
- **Instagram and Facebook:** short videos of machines working, a delivery
  leaving the yard, before and after a site clearance.
- **YouTube Shorts:** 20–40 second clips. The title names the machine and the
  town ("50 ton crane lift – Sohar Industrial Estate"); the description has
  the phone number and page link.
- **WhatsApp Business:** a catalogue with each machine, linking to its page.

---

## 6. On-page work still open (developer)

1. **Arabic pages:** 6 of the 30 unindexed pages are Arabic, at ~450 words each.
   Add per-page FAQs and a "how to book" section in Gulf business Arabic, aiming
   for 800+ words, and translate the 3 strongest guides into Arabic under `/ar/blog/`.
2. **Real photos:** replace the stock photos with the owner's real fleet photos,
   and add photos for the tipper, JCB and wheel loader (`lib/equipment.ts`).
3. **Real testimonials:** add them to `lib/testimonials.ts` once collected;
   the section reappears automatically.
4. **Yard pin and opening hours:** `siteConfig.geo` and `siteConfig.openingHours`.

---

## 7. Next guides to publish (developer, 2 a month)

These topics were chosen by what customers ask, **without search-volume data**
(the Semrush account had no API units). Check each topic's volume for Oman
before writing, and drop any with no searches or that duplicate an existing page.

| Guide | Search it aims at (volume unchecked) |
|---|---|
| Moving heavy machinery on Omani roads: low-bed transport and permits | heavy equipment transport Oman |
| Rock excavation in Muscat: what to expect when you hit rock | rock excavation Muscat |
| Farm and falaj works in Al Batinah: which machines to hire | farm land levelling Oman |
| Loading at a crusher: wheel loader or excavator? | wheel loader for crusher |
| Night lifts in Oman: lighting, permits and planning | night crane lift |
| Case study: [real job, with the customer's permission] | brand + machine + town |
| Arabic: كم تكلفة تأجير رافعة في عمان؟ (crane rental cost) | تأجير رافعات عمان |
| Arabic: تأجير شيول وقلابات لتسوية الأراضي (wheel loader and tipper hire) | تأجير شيول |

Rules for every guide: no prices, only machines and sizes the yard has, state
regulations only as far as the official source states them, link to 2–4 site
pages, and tag the `equipment` field so landing pages link back to it.

---

## 8. Monthly check (15 minutes)

- Search Console → Pages: indexed count going up? Any new "not indexed" reasons?
- Search Console → Performance: queries with impressions but position 8–20 are
  the next pages to improve, by adding the missing answer to that page.
- Google Business Profile: calls, direction requests, website clicks, reviews.
- Backlinks: Search Console → Links → Top linking sites. Is the list growing?
