import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationLandingTemplate } from "@/components/location-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { ports, getPortBySlug, type PortPage } from "@/lib/ports"
import { getEquipment, type EquipmentKey } from "@/lib/equipment"
import { serviceLocations, getLocationBySlug } from "@/lib/locations"
import { getAreaBySlug, areaHref } from "@/lib/areas"
import { serviceAreaHref } from "@/lib/service-areas"
import { allCapacityPages } from "@/lib/capacities"
import { siteConfig } from "@/lib/site-config"
import { arabicPathFor } from "@/lib/arabic"

type PageProps = { params: Promise<{ slug: string }> }

/** The machines every port page links to. */
const portEquipment: EquipmentKey[] = ["crane", "forklift", "boom-loader"]

export function generateStaticParams() {
  return ports.map((port) => ({ slug: port.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const port = getPortBySlug(slug)
  if (!port) return {}

  const ar = arabicPathFor(port.href)
  return pageMetadata({
    title: port.metaTitle,
    description: port.metaDescription,
    path: port.href,
    ...(ar && { languages: { en: port.href, ar } }),
  })
}

/**
 * Crane, forklift, and boom loader links for the port's city: the
 * equipment × city page where the city has one, otherwise the Oman-wide page.
 */
function portServiceLinks(port: PortPage) {
  const cityHub = serviceLocations.find((location) => location.cityName === port.cityName)
  return portEquipment.map((key) => {
    const equipment = getEquipment(key)
    return cityHub
      ? { key, tag: equipment.tag, title: `${equipment.label} Rental ${cityHub.cityName}`, href: serviceAreaHref(equipment, cityHub) }
      : { key, tag: equipment.tag, title: `${equipment.label} Rental`, href: equipment.href }
  })
}

/** The hub or town page the port belongs to. */
function homeLink(port: PortPage) {
  const location = getLocationBySlug(port.hubSlug)
  if (location) return { name: `Equipment Rental ${location.cityName}`, href: location.href }
  const area = getAreaBySlug(port.hubSlug)!
  return { name: `Equipment Rental ${area.name}`, href: areaHref(area) }
}

export default async function PortDetailPage({ params }: PageProps) {
  const { slug } = await params
  const port = getPortBySlug(slug)
  if (!port) notFound()

  const url = `${siteConfig.url}${port.href}`
  const otherPorts = ports
    .filter((other) => other.slug !== port.slug)
    .slice(0, 4)
    .map((other) => ({ name: `Crane & Forklift Rental ${other.shortName}`, href: other.href }))
  const sizeLinks = allCapacityPages()
    .filter(({ equipment }) => equipment.key === "crane" || equipment.key === "forklift")
    .map(({ page, href }) => ({ name: `${page.label} Rental`, href }))

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Ports", url: `${siteConfig.url}/ports` },
            { name: port.shortName, url },
          ]),
          serviceSchema({
            name: `Crane & Forklift Rental at ${port.name}`,
            serviceType: "Crane and forklift rental",
            description: port.metaDescription,
            areaServed: port.areaServed,
            url,
          }),
          faqSchema(port.faqs),
        ]}
      />
      <LocationLandingTemplate
        eyebrow={`${port.shortName} · ${port.governorate}`}
        title={`Crane & Forklift Rental at ${port.name}`}
        cityName={port.cityName}
        governorate={port.governorate}
        intro={port.intro}
        heroImage={port.heroImage}
        heroImageAlt={port.heroImageAlt}
        areas={port.zones}
        contextSections={[
          { heading: `Cargo & Lifting Work at ${port.shortName}`, paragraphs: port.work },
          { heading: "Gate Passes, Permits & HSE Documents", paragraphs: [port.documents] },
          { heading: "Delivery Planning From Sohar", paragraphs: [port.delivery] },
        ]}
        serviceLinks={portServiceLinks(port)}
        serviceHeading={`Crane, Forklift & Boom Loader Rental in ${port.cityName}`}
        whyHeading={`Machines Most Hired at ${port.shortName}`}
        whyPoints={port.machines.map((machine) => ({
          title: `${getEquipment(machine.key).label} Rental`,
          description: machine.note,
        }))}
        faqs={port.faqs}
        linkGroups={[
          { heading: "Crane & Forklift Sizes", links: sizeLinks },
          {
            heading: "More Coverage",
            links: [homeLink(port), ...otherPorts, { name: "All Omani Ports", href: "/ports" }],
          },
        ]}
        ctaHeading={`Need a Crane or Forklift at ${port.shortName}?`}
        ctaSubheading="Send the load, the site, and your gate requirements — we'll confirm the machine and plan the delivery."
        whatsappMessage={`Hello Abdul Masood Trading, I need crane / forklift rental at ${port.shortName}.`}
      />
    </>
  )
}
