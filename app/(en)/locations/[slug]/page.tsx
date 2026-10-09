import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationLandingTemplate, type LinkGroup } from "@/components/location-landing-template"
import { JsonLd } from "@/components/json-ld"
import { YardMap } from "@/components/yard-map"
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { locations, getLocationBySlug, type LocationSummary } from "@/lib/locations"
import { areas, getAreaBySlug, areaHref, type AreaPage } from "@/lib/areas"
import { ports, getPortBySlug } from "@/lib/ports"
import { equipmentTypes, getEquipment } from "@/lib/equipment"
import { equipmentLinksForLocation } from "@/lib/service-areas"
import { siteConfig } from "@/lib/site-config"
import { arabicPathFor } from "@/lib/arabic"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return [...locations.map((location) => location.slug), ...areas.map((area) => area.slug)].map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (location) {
    const ar = arabicPathFor(location.href)
    return pageMetadata({
      title: location.metaTitle,
      description: location.metaDescription,
      path: location.href,
      ...(ar && { languages: { en: location.href, ar } }),
    })
  }

  const area = getAreaBySlug(slug)
  if (!area) return {}
  return pageMetadata({ title: area.metaTitle, description: area.metaDescription, path: areaHref(area) })
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

/** Name and link for any page under /locations, hub or town. */
function locationLink(slug: string) {
  const location = getLocationBySlug(slug)
  if (location) return { name: `Equipment Rental ${location.cityName}`, href: location.href }
  const area = getAreaBySlug(slug)
  if (area) return { name: `Equipment Rental ${area.name}`, href: areaHref(area) }
  return undefined
}

function HubPage({ location }: { location: LocationSummary }) {
  const townLinks = areas
    .filter((area) => area.governorate === location.governorate)
    .map((area) => ({ name: `Equipment Rental ${area.name}`, href: areaHref(area) }))
  const portLinks = ports
    .filter((port) => port.governorate === location.governorate)
    .map((port) => ({ name: `Crane & Forklift Rental ${port.shortName}`, href: port.href }))
  const nearbyLinks = location.nearby.map(locationLink).filter(isDefined)

  const linkGroups: LinkGroup[] = [
    ...(townLinks.length + portLinks.length > 0
      ? [{ heading: `Towns & Ports in ${location.governorate}`, links: [...townLinks, ...portLinks] }]
      : []),
    { heading: "Nearby Coverage", links: [...nearbyLinks, { name: "All Oman Locations", href: "/locations" }] },
  ]

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
          // physical location is the Sohar yard, and Google's guidelines reject
          // LocalBusiness markup for cities without one.
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
        contextSections={[
          {
            heading: `Working in ${location.cityName}: Site Conditions & Delivery`,
            paragraphs: [location.siteConditions, location.mobilization],
          },
        ]}
        extraContent={location.slug === "sohar" ? <YardMap /> : undefined}
        serviceLinks={equipmentLinksForLocation(location)}
        whyHeading={location.whyHeading}
        whyPoints={location.whyPoints}
        faqs={location.faqs}
        linkGroups={linkGroups}
        ctaHeading={location.ctaHeading}
        ctaSubheading={location.ctaSubheading}
        whatsappMessage={location.whatsappMessage}
      />
    </>
  )
}

function TownPage({ area }: { area: AreaPage }) {
  const hub = getLocationBySlug(area.hubSlug)!
  const url = `${siteConfig.url}${areaHref(area)}`
  const distance = area.distanceKm ? `About ${area.distanceKm.toLocaleString("en")} km from our Sohar yard. ` : ""

  const coverageLinks = [
    { name: `${hub.governorate} Hub: Equipment Rental ${hub.cityName}`, href: hub.href },
    ...area.neighbours.map(locationLink).filter(isDefined),
    ...(area.ports ?? [])
      .map(getPortBySlug)
      .filter(isDefined)
      .map((port) => ({ name: `Crane & Forklift Rental ${port.shortName}`, href: port.href })),
    { name: "All Oman Locations", href: "/locations" },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: hub.shortTitle, url: `${siteConfig.url}${hub.href}` },
            { name: area.name, url },
          ]),
          serviceSchema({
            name: `Heavy Equipment Rental in ${area.name}`,
            serviceType: "Heavy equipment rental",
            description: area.metaDescription,
            areaServed: [area.name, `${area.governorate} Governorate`],
            url,
          }),
          faqSchema(area.faqs),
        ]}
      />
      <LocationLandingTemplate
        eyebrow={`${area.name} · ${area.governorate}`}
        title={`Heavy Equipment Rental in ${area.name}, Oman`}
        cityName={area.name}
        governorate={area.governorate}
        intro={area.intro}
        heroImage={area.heroImage}
        heroImageAlt={area.heroImageAlt}
        areas={area.places}
        contextSections={[
          { heading: `Projects We Supply in ${area.name}`, paragraphs: area.projects },
          { heading: `Delivery to ${area.name} From Sohar`, paragraphs: [`${distance}${area.delivery}`, area.conditions] },
        ]}
        serviceLinks={equipmentTypes.map((equipment) => ({
          key: equipment.key,
          title: `${equipment.label} Rental`,
          tag: equipment.tag,
          href: equipment.href,
        }))}
        whyHeading={`Machines Most Hired in ${area.name}`}
        whyPoints={area.machines.map((machine) => ({
          title: `${getEquipment(machine.key).label} Rental`,
          description: machine.note,
        }))}
        faqs={area.faqs}
        linkGroups={[{ heading: `More Coverage Near ${area.name}`, links: coverageLinks }]}
        ctaHeading={`Need Equipment in ${area.name}?`}
        ctaSubheading="Tell us the machine, the site, and your dates — we'll confirm availability and a quote."
        whatsappMessage={`Hello Abdul Masood Trading, I need equipment rental in ${area.name}.`}
      />
    </>
  )
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (location) return <HubPage location={location} />

  const area = getAreaBySlug(slug)
  if (!area) notFound()
  return <TownPage area={area} />
}
