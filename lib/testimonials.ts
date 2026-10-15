import type { EquipmentKey } from "@/lib/equipment"

export type Testimonial = {
  quote: string
  /** Person's name, or their role when they'd rather not be named. */
  author: string
  /** Company or type of business. */
  company: string
  /** Must match a `cityName` in lib/locations.ts so city pages can surface it. */
  city: string
  equipment: EquipmentKey[]
  rating: 1 | 2 | 3 | 4 | 5
}

/**
 * Customer testimonials. Pages pass their machine and city, and matching
 * testimonials are listed first. The section is hidden while the list is empty.
 *
 * Real feedback from real customers only, with their permission: invented
 * reviews mislead customers and break Google's review policies. Do not add
 * Review/AggregateRating schema for these: Google ignores self-published
 * reviews on a business's own site.
 *
 * Example entry:
 *   {
 *     quote: "…the customer's own words…",
 *     author: "Project Manager",            // name, or role if they'd rather not be named
 *     company: "Steel fabrication contractor",
 *     city: "Sohar",                         // a `cityName` from lib/locations.ts
 *     equipment: ["crane", "boom-loader"],
 *     rating: 5,
 *   },
 */
export const testimonials: Testimonial[] = []

/**
 * Orders testimonials so the ones about this page's machine and city come
 * first (both, then machine, then city), keeping the list order within each group.
 */
export function relevantTestimonials(opts: { equipment?: EquipmentKey; city?: string; limit?: number } = {}) {
  const score = (t: Testimonial) =>
    (opts.equipment && t.equipment.includes(opts.equipment) ? 2 : 0) + (opts.city && t.city === opts.city ? 1 : 0)
  return testimonials
    .map((testimonial, index) => ({ testimonial, index, score: score(testimonial) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, opts.limit ?? 3)
    .map(({ testimonial }) => testimonial)
}
