# Search Console Action Plan — November 2026

Source: Search Console "Top queries" export pasted on 2026-11-05. Semrush wasn't used (out of API units) and the On Page SEO Checker results only load in a logged-in browser, so this plan uses Search Console data only.

## What the data says

| Signal | Queries | Meaning |
|---|---|---|
| High impressions, almost no clicks | boom loader (447 impr, pos 6.8, 0.2% CTR) | Ranking on page 1 but the title doesn't win the click |
| Page-1 "near me" rankings | forklift rental near me (4.8), rental equipment near me (3.3), jcb hire near me (4.0), boom loader rental near me (2.0, 33% CTR) | Google already treats the site as local; Google Business Profile will convert these |
| Page 1–2, "for rent" wording | wheel loader for rent oman (9.9), forklift for rent (5.3), rent jcb (2.0) | Titles said "Rental", searchers say "for rent" |
| Wrong-machine queries | scissor lifts, telescopic boom lifts, boom lifts, bulldozer, motor grader | Not in the fleet; Google tests the site because "boom loader" ≈ "boom lift" |
| Arabic | تاجير معدات بناء قريب مني (8.0), رافعات شوكية للايجار (10.0) | Arabic pages rank; titles now match the searched wording |
| Off-topic | container transport salalah, -site: "mina al fahal" scraper query | Ignore |

## Done in this update (verified in the production build)

- Each of the 7 equipment pages has its own title and meta description using the searched wording, e.g. "Boom Loader for Rent in Oman (Telehandler Hire)", "Wheel Loader for Rent in Oman (Shovel Hire)", "Forklift for Rent in Oman: 3 to 18 Ton", "JCB for Rent in Oman (Backhoe Loader Hire)".
- Boom loader page: added an answer-first FAQ "What is a boom loader?" (FAQPage schema), aimed at the 447-impression head term.
- 50 ton crane page title → "50 Ton Mobile Crane for Rent in Oman".
- Arabic: forklift page → "رافعات شوكية للإيجار في عمان"; home → "تأجير معدات البناء والمعدات الثقيلة في عمان"; crane → "تأجير كرين رافعة في عمان".

## Owner actions (need access we don't have)

1. **Critical — Google Business Profile.** Create or verify it at the Sohar Industrial Estate yard with categories "Equipment rental agency", "Crane rental agency", and "Forklift rental". This is what turns the "near me" rankings into calls.
2. **High — Search Console.** Request indexing for /equipment/* and the 8 Sohar URLs from the last update; recheck CTR for "boom loader" in 3–4 weeks.
3. **High — Fleet decision.** If scissor lifts, boom lifts (man lifts), bulldozers, or motor graders can be supplied, add a page for each. If not, don't, because a page for machines you don't have brings calls you can't serve.
4. **Medium — Directories.** Work through docs/business-listing-kit.md (Yellow Pages Oman, OCCI, Madayn tenant directory).

## Check again on

Compare the same Search Console report around 2026-12-05: CTR on "boom loader" and "wheel loader for rent oman", and position on the "for rent" queries.
