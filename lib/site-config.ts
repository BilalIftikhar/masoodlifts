/**
 * Single source of truth for company/NAP data, contact links, and service-area
 * lists referenced across metadata, JSON-LD schema, header, footer, and content.
 *
 * Every value here is printed on the company letterhead. Keep the name, phone,
 * and address formatting identical to Google Business Profile and directory
 * listings (see docs/business-listing-kit.md) — search engines cross-check them.
 *
 * TODO (owner action required before go-live):
 * - keep www.masoodlifts.com as the primary domain on the host (apex 308s to www)
 * - replace `geo` with the exact pin of the yard inside Sohar Industrial Estate
 *   (currently Sohar city centre), and add the plot/way number to `yard`
 * - add the yard's opening hours to `openingHours` (schema emits them only when set)
 * - add real social profile URLs to `social` once they exist
 */

export const siteConfig = {
  name: "Abdul Masood Trading",
  legalName: "ABDUL MASOOD TRADING LLC",
  legalNameAr: "عبد المسعود للتجارة ش م م",
  shortName: "Abdul Masood Trading",
  activity: "Renting Equipment & Engineering Machinery of Construction & Civil Work",
  activityAr: "تأجير المعدات وآلات الهندسية البناء والأعمال المدنية",

  // MUST match the host that actually serves content and holds a valid TLS
  // certificate — canonicals, sitemap entries, and schema URLs all use it.
  domain: "www.masoodlifts.com",
  url: "https://www.masoodlifts.com",
  tagline: "Heavy Equipment & Construction Machinery Rental in Oman",
  description:
    "ABDUL MASOOD TRADING LLC rents cranes, tipper trucks, boom loaders, 3 to 18 ton forklifts, excavators, JCB backhoe loaders, and wheel loaders with operators for construction and civil works in all 11 governorates of Oman, from its yard in Sohar Industrial Estate.",

  phoneDisplay: "+968 7928 8727",
  phoneE164: "+96879288727",
  telHref: "tel:+96879288727",
  whatsappNumber: "96879288727",
  // The endpoint wa.me redirects to. Linking it directly saves visitors a
  // redirect hop and clears "links to redirect" warnings in site audits.
  whatsappHref: "https://api.whatsapp.com/send?phone=96879288727",
  email: "info@masoodlifts.com",
  /**
   * Inquiry form target. FormSubmit relays browser submissions to this inbox
   * with no backend or API key. The FIRST submission triggers a one-time
   * activation email to the inbox — click it, or no inquiries are delivered.
   * After activation FormSubmit offers a random alias you can swap in here to
   * keep the address out of the page source.
   *
   * Still relays to the Gmail inbox on purpose: pointing it at info@ needs a
   * fresh FormSubmit activation from that mailbox, and until someone clicks it
   * every form inquiry would be dropped.
   */
  inquiryEndpoint: "https://formsubmit.co/ajax/chabdulmasood@gmail.com",

  address: {
    /** Where the yard is. Add the plot or way number once confirmed. */
    streetAddress: "Sohar Industrial Estate",
    postOfficeBoxNumber: "326",
    postalCode: "119",
    addressLocality: "Sohar",
    addressRegion: "North Al Batinah",
    addressCountry: "OM",
    countryName: "Sultanate of Oman",
  },
  /** The address exactly as printed on the letterhead. */
  addressLine: "P.O. Box 326, Postal Code 119, Sohar, Sultanate of Oman",
  /** The physical yard, shown beside the postal address and used for Google Maps. */
  yardLine: "Sohar Industrial Estate, Sohar, North Al Batinah, Oman",
  yardLineAr: "المنطقة الصناعية بصحار، صحار، شمال الباطنة، سلطنة عمان",
  /** Google resolves the place by name, so the map stays right even while `geo` is approximate. */
  mapQuery: "Sohar Industrial Estate, Sohar, Oman",
  geo: {
    latitude: 24.347,
    longitude: 56.73,
  },

  social: {} as Record<string, string>,

  /**
   * schema.org openingHoursSpecification entries, e.g.
   * { dayOfWeek: ["Saturday", "Sunday"], opens: "07:00", closes: "18:00" }.
   * Left empty until the owner confirms the hours — wrong hours on Google cost
   * more calls than missing ones.
   */
  openingHours: [] as { dayOfWeek: string[]; opens: string; closes: string }[],

  // schema.org expects a symbolic range ("$$"), not a currency string. Rates are
  // quote-based, so this stays symbolic rather than naming figures.
  priceRange: "$$",
} as const

export function waLink(message: string) {
  return `${siteConfig.whatsappHref}&text=${encodeURIComponent(message)}`
}

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapQuery)}`
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`

/** All 11 governorates of Oman, nearest to the Sohar base first. */
export const governorates = [
  { name: "North Al Batinah", nameAr: "شمال الباطنة" },
  { name: "Al Buraimi", nameAr: "البريمي" },
  { name: "South Al Batinah", nameAr: "جنوب الباطنة" },
  { name: "Muscat", nameAr: "مسقط" },
  { name: "Ad Dhahirah", nameAr: "الظاهرة" },
  { name: "Ad Dakhiliyah", nameAr: "الداخلية" },
  { name: "North Ash Sharqiyah", nameAr: "شمال الشرقية" },
  { name: "South Ash Sharqiyah", nameAr: "جنوب الشرقية" },
  { name: "Al Wusta", nameAr: "الوسطى" },
  { name: "Dhofar", nameAr: "ظفار" },
  { name: "Musandam", nameAr: "مسندم" },
] as const

export type Governorate = (typeof governorates)[number]["name"]
