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
 * Customer testimonials, shown on every page. Pages pass their machine and
 * city, and matching testimonials are listed first.
 *
 * TODO (owner action required before go-live): these are PLACEHOLDERS written
 * to show the layout. Replace every entry with real feedback from real
 * customers, with their permission, before the site goes live. Publishing
 * invented reviews misleads customers and breaks Google's review policies.
 * Do not add Review/AggregateRating schema for these: Google ignores
 * self-published reviews on a business's own site.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "We hired a crane and a boom loader for a warehouse extension near Sohar Port. The machines arrived on the day we agreed and the operators knew their work. One call sorted everything.",
    author: "Project Manager",
    company: "Steel fabrication contractor",
    city: "Sohar",
    equipment: ["crane", "boom-loader"],
    rating: 5,
  },
  {
    quote:
      "Excavator and tippers for site levelling on a villa project. Good communication, fair monthly rate, and when we extended the hire it was a quick phone call.",
    author: "Site Engineer",
    company: "Building contractor",
    city: "Muscat",
    equipment: ["excavator", "tipper"],
    rating: 5,
  },
  {
    quote:
      "We needed a 3 ton forklift for container unloading at short notice. They confirmed availability the same morning and the operator was careful with our stock.",
    author: "Operations Supervisor",
    company: "Logistics company",
    city: "Sohar",
    equipment: ["forklift"],
    rating: 5,
  },
  {
    quote:
      "Transport to Duqm was planned properly and the wheel loader and JCB were ready for our start date. Having one supplier for the package made coordination easy.",
    author: "Construction Manager",
    company: "Civil works contractor",
    city: "Duqm",
    equipment: ["wheel-loader", "jcb"],
    rating: 5,
  },
  {
    quote:
      "A JCB for trenching and backfilling on a utilities job. The driver was experienced and the machine was in good condition. We will use them again.",
    author: "Foreman",
    company: "MEP subcontractor",
    city: "Nizwa",
    equipment: ["jcb"],
    rating: 5,
  },
  {
    quote:
      "Wheel loader and tippers for a quarry-to-site haul. Reliable machines and a clear quote with no surprises on the invoice.",
    author: "Plant Coordinator",
    company: "Aggregates supplier",
    city: "Al Buraimi",
    equipment: ["wheel-loader", "tipper"],
    rating: 5,
  },
  {
    quote:
      "Monthly hire of an excavator for road works in Dhofar. They sorted mobilisation from Sohar and kept the same operator with us for the whole contract.",
    author: "Site Manager",
    company: "Road contractor",
    city: "Salalah",
    equipment: ["excavator"],
    rating: 5,
  },
  {
    quote:
      "We used their boom loader to place blockwork and materials on a three-storey building. Quick to respond by email, which suits our office better than WhatsApp.",
    author: "Procurement Officer",
    company: "General contractor",
    city: "Muscat",
    equipment: ["boom-loader"],
    rating: 5,
  },
  {
    quote:
      "Crane hire for lifting HVAC units onto a factory roof. The team asked the right questions about weight and reach before quoting, and the lift went smoothly.",
    author: "Maintenance Engineer",
    company: "Manufacturing plant",
    city: "Sohar",
    equipment: ["crane"],
    rating: 5,
  },
]

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
