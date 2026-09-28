import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationLandingTemplate } from "@/components/location-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { locations, getLocationBySlug } from "@/lib/locations"
import { equipmentLinksForLocation } from "@/lib/service-areas"
import { siteConfig } from "@/lib/site-config"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}

  return pageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: location.href,
    keywords: location.keywords,
  })
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const nearbyLinks = location.nearby
    .map((nearbySlug) => getLocationBySlug(nearbySlug))
    .filter((nearby) => Boolean(nearby))
    .map((nearby) => ({
      name: `Equipment Rental ${nearby!.cityName}`,
      href: nearby!.href,
    }))

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: location.shortTitle, url: `${siteConfig.url}${location.href}` },
          ]),
          // A Service with areaServed, not a LocalBusiness: the company's only
          // registered address is in Sohar (on the homepage/contact schema), and
          // Google's guidelines reject LocalBusiness markup for cities without a
          // physical location.
          serviceSchema({
            name: location.title,
            serviceType: "Heavy equipment rental",
            description: location.metaDescription,
            areaServed: location.areaServed,
            url: `${siteConfig.url}${location.href}`,
          }),
          faqSchema(location.faqs),
        ]}
      />
      <LocationLandingTemplate
        eyebrow={location.eyebrow}
        title={location.title}
        cityName={location.cityName}
        governorate={location.governorate}
        intro={location.intro}
        heroImage={location.heroImage}
        heroImageAlt={location.heroImageAlt}
        areas={location.areas}
        localContext={{
          heading: `Working in ${location.cityName}: Site Conditions & Delivery`,
          paragraphs: [location.siteConditions, location.mobilization],
        }}
        serviceLinks={equipmentLinksForLocation(location)}
        whyHeading={location.whyHeading}
        whyPoints={location.whyPoints}
        faqs={location.faqs}
        nearbyLinks={nearbyLinks}
        ctaHeading={location.ctaHeading}
        ctaSubheading={location.ctaSubheading}
        whatsappMessage={location.whatsappMessage}
      />
    </>
  )
}
