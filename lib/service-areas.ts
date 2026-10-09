import type { Faq } from "@/lib/faqs"
import { equipmentTypes, type EquipmentType } from "@/lib/equipment"
import { serviceLocations, hasServicePages, type LocationSummary, type ServiceLocation } from "@/lib/locations"
import { siteConfig } from "@/lib/site-config"
import type { BulletGroup, SpecRow, AreaLink, LocalContext } from "@/components/service-landing-template"

/**
 * Generates the equipment × city landing pages that give the site Oman-wide
 * organic coverage (e.g. /services/crane-rental-sohar).
 *
 * Every generated page interpolates real, location-specific detail — industrial
 * zones, site conditions, how equipment reaches the city, and an equipment note
 * written for that city — so the pages are genuinely distinct rather than a
 * templated city swap, which Google treats as a doorway.
 */

export type ServiceAreaPage = {
  slug: string
  href: string
  equipment: EquipmentType
  location: ServiceLocation
  /** Card title used on the /services index. */
  cardTitle: string

  eyebrow: string
  h1: string
  intro: string
  metaTitle: string
  metaDescription: string
  specs: SpecRow[]
  bulletGroups: BulletGroup[]
  localContext: LocalContext
  areasHeading: string
  areas: AreaLink[]
  faqs: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
  areaServed: string[]
}

export function serviceAreaHref(equipment: EquipmentType, location: ServiceLocation) {
  return `/services/${equipment.slugBase}-${location.slug}`
}

function buildFaqs(equipment: EquipmentType, location: ServiceLocation): Faq[] {
  const city = location.cityName
  // The operator question is asked per city below, so borrow an equipment FAQ
  // that covers something else.
  const equipmentFaq =
    equipment.faqs.find((faq) => !/operator|driver/i.test(faq.question)) ?? equipment.faqs[0]

  return [
    {
      question: `Do you deliver ${equipment.nounPlural} to ${location.areas.slice(0, 3).join(", ")}?`,
      answer: `Yes. ${location.areas.slice(0, 4).join(", ")} are all within our ${city} coverage. ${location.mobilization} Send your site location and we will confirm the delivery slot.`,
    },
    {
      question: `Is an operator included with ${equipment.noun} rental in ${city}?`,
      answer: `Yes. Our ${equipment.nounPlural} are supplied with an experienced operator or driver. ${
        equipment.key === "forklift"
          ? "If your own staff hold the required licence, the forklift can also be hired without an operator."
          : "Tell us about the job in advance so the operator arrives prepared for your site."
      }`,
    },
    equipmentFaq,
    {
      question: `What rental terms are available in ${city}?`,
      answer: location.primary
        ? `Daily, weekly, and monthly hire are all available in ${city}, and a hire can be extended on site if the work runs longer than planned.`
        : `Weekly and monthly hire work best for ${city}, because the transport cost from our Sohar base is spread across the hire. Shorter hires are possible when a machine is already working in the area.`,
    },
  ]
}

function buildBulletGroups(equipment: EquipmentType, location: ServiceLocation): BulletGroup[] {
  const city = location.cityName

  return [
    {
      title: `What We Supply in ${city}`,
      items: equipment.fleetItems,
    },
    {
      title: `Typical ${city} Work`,
      items: [
        `Delivered to ${location.areas.slice(0, 3).join(", ")}`,
        `Used for ${equipment.useCase}`,
        `Supporting ${location.industries[0]}`,
        `Also ${location.industries[1]} and ${location.industries[2]}`,
      ],
    },
    {
      title: "To Get an Accurate Quote",
      items: equipment.quoteChecklist,
    },
  ]
}

export function localContextFor(equipment: EquipmentType, location: ServiceLocation): LocalContext {
  return {
    heading: `Renting a ${equipment.label} in ${location.cityName}: What to Plan For`,
    paragraphs: [location.equipmentNotes[equipment.key], location.siteConditions, location.mobilization],
  }
}

function buildAreaLinks(equipment: EquipmentType, location: ServiceLocation): AreaLink[] {
  // The other machines in the same city — cross-links within the matrix so
  // every page is reachable from its siblings, not only from /services.
  const siblingLinks: AreaLink[] = equipmentTypes
    .filter((other) => other.key !== equipment.key)
    .map((other) => ({
      name: `${other.label} Rental ${location.cityName}`,
      href: serviceAreaHref(other, location),
    }))

  const nearbyLinks: AreaLink[] = location.nearby
    .map((slug) => serviceLocations.find((l) => l.slug === slug))
    .filter((l): l is ServiceLocation => Boolean(l))
    .map((l) => ({
      name: `${equipment.label} Rental ${l.cityName}`,
      href: serviceAreaHref(equipment, l),
    }))

  return [
    { name: `All Equipment in ${location.cityName}`, href: location.href },
    { name: `About Our ${equipment.label}s`, href: equipment.href },
    ...siblingLinks,
    ...nearbyLinks,
    { name: "All Oman Locations", href: "/locations" },
  ]
}

function buildPage(equipment: EquipmentType, location: ServiceLocation): ServiceAreaPage {
  const city = location.cityName
  const slug = `${equipment.slugBase}-${location.slug}`
  const topZones = location.areas.slice(0, 3).join(", ")

  return {
    slug,
    href: `/services/${slug}`,
    equipment,
    location,
    cardTitle: `${equipment.label} Rental ${city}`,

    eyebrow: `${equipment.label} Rental · ${city}`,
    h1: `${equipment.label} Rental in ${city}`,
    intro: `${equipment.label} hire in ${city} for ${equipment.useCase}. We deliver to ${topZones} with an experienced operator and flexible terms. ${location.demandNote}`,
    // Kept inside Google's display limits: ~60 chars for title including the
    // " | Abdul Masood Trading" template suffix, and ~155 for the description.
    metaTitle: `${equipment.label} Rental in ${city}`,
    metaDescription: `${equipment.label} rental in ${city} with operator. Serving ${location.metaZoneShort}. Daily to monthly hire. Call ${siteConfig.phoneDisplay}.`,
    specs: [
      { label: "Equipment", value: equipment.tag },
      { label: "Supplied With", value: "Operator" },
      { label: "Hire Terms", value: location.primary ? "Daily–Monthly" : "Weekly–Monthly" },
      { label: "Governorate", value: location.governorate },
    ],
    bulletGroups: buildBulletGroups(equipment, location),
    localContext: localContextFor(equipment, location),
    areasHeading: `More Equipment in ${city} & Nearby`,
    areas: buildAreaLinks(equipment, location),
    faqs: buildFaqs(equipment, location),
    ctaHeading: `Need a ${equipment.label} in ${city}?`,
    ctaSubheading: "Send your job details and site location — we'll confirm the right machine and a delivery slot.",
    whatsappMessage: `Hello Abdul Masood Trading, I need ${equipment.noun} rental in ${city}.`,
    areaServed: location.areaServed,
  }
}

/** Every generated equipment × city page. */
export const serviceAreaPages: ServiceAreaPage[] = equipmentTypes.flatMap((equipment) =>
  serviceLocations.map((location) => buildPage(equipment, location)),
)

export function getServiceAreaPage(slug: string) {
  return serviceAreaPages.find((page) => page.slug === slug)
}

/** Every equipment × city link, grouped by equipment type, for the /services index. */
export function equipmentCityLinksByEquipment() {
  return equipmentTypes.map((equipment) => ({
    equipment,
    links: serviceLocations.map((location) => ({
      cityName: location.cityName,
      href: serviceAreaHref(equipment, location),
    })),
  }))
}

/**
 * All equipment links for a hub, used on the location landing pages: the
 * equipment × city page where the hub has one, otherwise the Oman-wide
 * equipment page.
 */
export function equipmentLinksForLocation(location: LocationSummary) {
  return equipmentTypes.map((equipment) => ({
    key: equipment.key,
    tag: equipment.tag,
    ...(hasServicePages(location)
      ? { title: `${equipment.label} Rental ${location.cityName}`, href: serviceAreaHref(equipment, location) }
      : { title: `${equipment.label} Rental`, href: equipment.href }),
  }))
}

/** Every city page for one equipment type, for the /equipment spec pages. */
export function cityLinksForEquipment(equipment: EquipmentType): AreaLink[] {
  return serviceLocations.map((location) => ({
    name: `${equipment.label} Rental ${location.cityName}`,
    href: serviceAreaHref(equipment, location),
  }))
}
