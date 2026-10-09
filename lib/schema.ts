import { siteConfig, governorates, mapLink } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"
import { ports } from "@/lib/ports"

type WithContext<T> = T & { "@context": "https://schema.org" }

const logoUrl = `${siteConfig.url}/images/brand/logo-512.png`

/**
 * The one business entity for the whole site. Every page emits it from the root
 * layout, and Service, WebSite, and page nodes point at it by this @id, so
 * search engines see a single company rather than several competing ones.
 */
export const businessId = `${siteConfig.url}/#business`

const baseAddress = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.streetAddress,
  postOfficeBoxNumber: siteConfig.address.postOfficeBoxNumber,
  postalCode: siteConfig.address.postalCode,
  addressLocality: siteConfig.address.addressLocality,
  addressRegion: siteConfig.address.addressRegion,
  addressCountry: siteConfig.address.addressCountry,
}

const baseGeo = {
  "@type": "GeoCoordinates",
  latitude: siteConfig.geo.latitude,
  longitude: siteConfig.geo.longitude,
}

/** All 11 governorates plus the port areas we deliver into. */
const defaultAreaServed = [
  { "@type": "Country", name: "Oman" },
  ...governorates.map((governorate) => ({ "@type": "AdministrativeArea", name: `${governorate.name} Governorate` })),
  ...ports.map((port) => ({ "@type": "Place", name: port.name })),
]

const sameAs = Object.values(siteConfig.social)

const contactPoint = {
  "@type": "ContactPoint",
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  contactType: "sales",
  areaServed: "OM",
  availableLanguage: ["en", "ar"],
}

export function businessSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.legalNameAr, siteConfig.name],
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "OMR",
    image: logoUrl,
    logo: logoUrl,
    address: baseAddress,
    geo: baseGeo,
    hasMap: mapLink,
    ...(siteConfig.openingHours.length > 0 && {
      openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
        "@type": "OpeningHoursSpecification",
        ...hours,
      })),
    }),
    areaServed: defaultAreaServed,
    // Plain statements of what the company is an authority on. Answer engines
    // use these to decide which entity to cite for a topic.
    knowsAbout: [
      ...equipmentTypes.map((equipment) => `${equipment.label} rental`),
      "Construction equipment rental in Oman",
      "Engineering machinery rental for civil works",
      "Crane and forklift rental at Omani ports",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Equipment & Engineering Machinery Rental",
      itemListElement: equipmentTypes.map((equipment) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${equipment.label} Rental`,
          url: `${siteConfig.url}${equipment.href}`,
        },
      })),
    },
    contactPoint,
    ...(sameAs.length > 0 && { sameAs }),
  }
}

export function websiteSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: ["en", "ar"],
    publisher: { "@id": businessId },
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  areaServed?: string[]
  serviceType: string
  url: string
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    provider: { "@id": businessId },
    areaServed: opts.areaServed
      ? opts.areaServed.map((name) => ({ "@type": name === "Oman" ? "Country" : "Place", name }))
      : defaultAreaServed,
    url: opts.url,
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function blogPostingSchema(opts: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image: string
  authorName: string
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: `${siteConfig.url}${opts.image}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    mainEntityOfPage: `${siteConfig.url}/blog/${opts.slug}`,
    url: `${siteConfig.url}/blog/${opts.slug}`,
    author: {
      "@type": "Organization",
      name: opts.authorName,
    },
    publisher: { "@id": businessId },
  }
}

export function aboutPageSchema(url: string): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url,
    name: `About ${siteConfig.legalName}`,
    about: { "@id": businessId },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  }
}

export function contactPageSchema(url: string): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url,
    name: `Contact ${siteConfig.legalName}`,
    about: { "@id": businessId },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  }
}
