import { siteConfig } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"
import { locations } from "@/lib/locations"

type WithContext<T> = T & { "@context": "https://schema.org" }

const logoUrl = `${siteConfig.url}/images/brand/logo-512.png`

const baseAddress = {
  "@type": "PostalAddress",
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

const defaultAreaServed = [
  { "@type": "Country", name: "Oman" },
  ...locations.map((location) => ({ "@type": "City", name: location.cityName })),
]

const sameAs = Object.values(siteConfig.social)

/**
 * Core LocalBusiness entity for the whole company. Emitted on the homepage and
 * the contact page — the pages that represent the Sohar business itself.
 */
export function localBusinessSchema(opts?: { url?: string }): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    // Distinct from the site-wide Organization node (#organization) that the
    // root layout emits on every page; the same @id with different @types
    // produces conflicting entities.
    "@id": `${siteConfig.url}/#localbusiness`,
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    name: siteConfig.legalName,
    alternateName: [siteConfig.legalNameAr, siteConfig.name],
    description: siteConfig.description,
    url: opts?.url ?? siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "OMR",
    image: logoUrl,
    logo: logoUrl,
    address: baseAddress,
    geo: baseGeo,
    areaServed: defaultAreaServed,
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneE164,
      contactType: "sales",
      areaServed: "OM",
      availableLanguage: ["en", "ar"],
    },
    ...(sameAs.length > 0 && { sameAs }),
  }
}

export function organizationSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    alternateName: [siteConfig.legalNameAr, siteConfig.name],
    url: siteConfig.url,
    logo: logoUrl,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    address: baseAddress,
    // Plain statements of what the company is an authority on. Answer engines
    // use these to decide which entity to cite for a topic.
    knowsAbout: [
      ...equipmentTypes.map((equipment) => `${equipment.label} rental`),
      "Construction equipment rental in Oman",
      "Engineering machinery rental for civil works",
      "Heavy equipment rental in Sohar",
    ],
    areaServed: defaultAreaServed,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneE164,
      contactType: "sales",
      areaServed: "OM",
      availableLanguage: ["en", "ar"],
    },
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
    inLanguage: "en",
    publisher: { "@id": `${siteConfig.url}/#organization` },
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
    provider: { "@id": `${siteConfig.url}/#organization` },
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
    publisher: { "@id": `${siteConfig.url}/#organization` },
  }
}

export function aboutPageSchema(url: string): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url,
    name: `About ${siteConfig.legalName}`,
    about: { "@id": `${siteConfig.url}/#organization` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  }
}

export function contactPageSchema(url: string): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url,
    name: `Contact ${siteConfig.legalName}`,
    about: { "@id": `${siteConfig.url}/#localbusiness` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  }
}
