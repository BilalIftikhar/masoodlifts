/**
 * Single source of truth for company/NAP data, contact links, and service-area
 * lists referenced across metadata, JSON-LD schema, header, footer, and content.
 *
 * Every value here is printed on the company letterhead. Keep the name, phone,
 * and address formatting identical to Google Business Profile and directory
 * listings (see docs/business-listing-kit.md) — search engines cross-check them.
 *
 * TODO (owner action required before go-live):
 * - point DNS for masoodlifts.com at the host and 301 www → apex
 * - replace `geo` with the pin of the actual yard (currently Sohar city centre)
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
  domain: "masoodlifts.com",
  url: "https://masoodlifts.com",
  tagline: "Heavy Equipment & Construction Machinery Rental in Oman",
  description:
    "ABDUL MASOOD TRADING LLC rents cranes, tipper trucks, boom loaders, 3 ton forklifts, excavators, JCB backhoe loaders, and wheel loaders for construction and civil works across Oman — from Sohar to Muscat, Duqm, Salalah, Nizwa, and Al Buraimi.",

  phoneDisplay: "+968 7928 8727",
  phoneE164: "+96879288727",
  telHref: "tel:+96879288727",
  whatsappNumber: "96879288727",
  // The endpoint wa.me redirects to. Linking it directly saves visitors a
  // redirect hop and clears "links to redirect" warnings in site audits.
  whatsappHref: "https://api.whatsapp.com/send?phone=96879288727",
  email: "chabdulmasood@gmail.com",
  /**
   * Inquiry form target. FormSubmit relays browser submissions to this inbox
   * with no backend or API key. The FIRST submission triggers a one-time
   * activation email to the inbox — click it, or no inquiries are delivered.
   * After activation FormSubmit offers a random alias you can swap in here to
   * keep the address out of the page source.
   */
  inquiryEndpoint: "https://formsubmit.co/ajax/chabdulmasood@gmail.com",

  address: {
    postOfficeBoxNumber: "326",
    postalCode: "119",
    addressLocality: "Sohar",
    addressRegion: "North Al Batinah",
    addressCountry: "OM",
    countryName: "Sultanate of Oman",
  },
  /** The address exactly as printed on the letterhead. */
  addressLine: "P.O. Box 326, Postal Code 119, Sohar, Sultanate of Oman",
  geo: {
    latitude: 24.347,
    longitude: 56.73,
  },

  social: {} as Record<string, string>,

  // schema.org expects a symbolic range ("$$"), not a currency string. Rates are
  // quote-based, so this stays symbolic rather than naming figures.
  priceRange: "$$",
} as const

export function waLink(message: string) {
  return `${siteConfig.whatsappHref}&text=${encodeURIComponent(message)}`
}

export type Governorate =
  | "North Al Batinah"
  | "Muscat"
  | "Al Wusta"
  | "Dhofar"
  | "Ad Dakhiliyah"
  | "Al Buraimi"

export type ServiceArea = {
  name: string
  governorate: Governorate
}

/** Named industrial zones and districts we deliver into, listed in the footer service network. */
export const serviceAreas: ServiceArea[] = [
  { name: "Sohar Port & Freezone", governorate: "North Al Batinah" },
  { name: "Sohar Industrial Estate", governorate: "North Al Batinah" },
  { name: "Liwa", governorate: "North Al Batinah" },
  { name: "Saham", governorate: "North Al Batinah" },
  { name: "Shinas", governorate: "North Al Batinah" },
  { name: "Rusayl Industrial Estate", governorate: "Muscat" },
  { name: "Ghala Industrial Area", governorate: "Muscat" },
  { name: "Al Misfah", governorate: "Muscat" },
  { name: "Seeb & Al Mabelah", governorate: "Muscat" },
  { name: "Al Amerat", governorate: "Muscat" },
  { name: "SEZAD Duqm", governorate: "Al Wusta" },
  { name: "Port of Duqm", governorate: "Al Wusta" },
  { name: "Port of Salalah", governorate: "Dhofar" },
  { name: "Salalah Free Zone", governorate: "Dhofar" },
  { name: "Raysut Industrial Estate", governorate: "Dhofar" },
  { name: "Nizwa Industrial Estate", governorate: "Ad Dakhiliyah" },
  { name: "Bahla & Izki", governorate: "Ad Dakhiliyah" },
  { name: "Al Buraimi Industrial Estate", governorate: "Al Buraimi" },
  { name: "Mahdah", governorate: "Al Buraimi" },
]
