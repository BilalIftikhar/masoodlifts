import type { Faq } from "@/lib/faqs"
import { getEquipment } from "@/lib/equipment"
import { getLocationBySlug, locations } from "@/lib/locations"
import { serviceAreaHref } from "@/lib/service-areas"
import type { AreaLink, BulletGroup, LocalContext, SpecRow } from "@/components/service-landing-template"

export type ServiceHub = {
  slug: string
  href: string
  /** Card and nav title. */
  title: string
  shortTitle: string
  tag: string
  description: string
  heroImage: string
  heroImageAlt: string

  metaTitle: string
  metaDescription: string
  keywords: string[]
  serviceType: string
  areaServed: string[]

  eyebrow: string
  h1: string
  intro: string
  specs: SpecRow[]
  bulletGroups: BulletGroup[]
  localContext: LocalContext
  areasHeading: string
  areas: AreaLink[]
  faqs: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
}

const crane = getEquipment("crane")
const forklift = getEquipment("forklift")
const excavator = getEquipment("excavator")
const boomLoader = getEquipment("boom-loader")
const sohar = getLocationBySlug("sohar")!

/**
 * Hand-written hub pages for the combined high-intent queries. Each targets a
 * query that no single equipment × city page answers on its own:
 *
 * - "Heavy Equipment Rental in Oman" is owned by the homepage.
 * - "Construction Machinery Rental Muscat" is owned by /locations/muscat.
 *
 * Served by app/services/[slug] alongside the generated equipment × city pages.
 */
export const services: ServiceHub[] = [
  {
    slug: "crane-forklift-rental-sohar",
    href: "/services/crane-forklift-rental-sohar",
    title: "Crane & Forklift Rental in Sohar",
    shortTitle: "Crane & Forklift Rental Sohar",
    tag: "Lifting & Handling",
    description:
      "Cranes and 3 ton forklifts with operators for Sohar Port, the Freezone, Sohar Industrial Estate, and North Al Batinah sites.",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Yellow all-terrain mobile crane with its boom retracted",

    metaTitle: "Crane & Forklift Rental Sohar",
    metaDescription:
      "Crane and 3 ton forklift rental in Sohar with operators — Sohar Port, Freezone & Industrial Estate. Daily to monthly hire. Call +968 7928 8727.",
    keywords: [
      "crane rental Sohar",
      "forklift rental Sohar",
      "crane and forklift rental Sohar",
      "crane hire Sohar Port",
      "3 ton forklift rental Sohar",
      "Sohar Freezone forklift hire",
    ],
    serviceType: "Crane and forklift rental",
    areaServed: sohar.areaServed,

    eyebrow: "Crane & Forklift Rental · Sohar",
    h1: "Crane & Forklift Rental in Sohar",
    intro:
      "Cranes and 3 ton forklifts for Sohar Port and Freezone, Sohar Industrial Estate, and construction sites across North Al Batinah, hired with operators from a company registered in Sohar. Book one or both: many jobs need a crane to offload and place heavy items, and a forklift to move and stack everything else.",
    specs: [
      { label: "Crane Hire", value: "With Operator" },
      { label: "Forklift", value: "3 Ton" },
      { label: "Registered In", value: "Sohar" },
      { label: "Hire Terms", value: "Daily–Monthly" },
    ],
    bulletGroups: [
      { title: "Crane Hire", items: crane.fleetItems },
      { title: "3 Ton Forklift Hire", items: forklift.fleetItems },
      { title: "Where We Work in Sohar", items: sohar.areas },
    ],
    localContext: {
      heading: "Crane and Forklift Work Around Sohar",
      paragraphs: [sohar.equipmentNotes.crane, sohar.equipmentNotes.forklift, sohar.siteConditions],
    },
    areasHeading: "Crane & Forklift Rental Across Oman",
    areas: [
      { name: "Crane Rental Sohar", href: serviceAreaHref(crane, sohar) },
      { name: "Forklift Rental Sohar", href: serviceAreaHref(forklift, sohar) },
      { name: "All Equipment in Sohar", href: sohar.href },
      { name: "About Our Cranes", href: crane.href },
      { name: "About Our 3 Ton Forklifts", href: forklift.href },
      ...locations
        .filter((location) => location.slug !== "sohar")
        .flatMap((location) => [
          { name: `Crane Rental ${location.cityName}`, href: serviceAreaHref(crane, location) },
          { name: `Forklift Rental ${location.cityName}`, href: serviceAreaHref(forklift, location) },
        ]),
    ],
    faqs: [
      {
        question: "Can I hire a crane and a forklift together in Sohar?",
        answer:
          "Yes. Booking both from one supplier is common for plant installations and warehouse fit-outs: the crane offloads and places heavy items and the forklift handles pallets and smaller loads, on one schedule.",
      },
      {
        question: "Do you work inside Sohar Port and the Freezone?",
        answer:
          "Yes. Send your gate and site details when booking and we will prepare the machine documents and operator details needed for entry.",
      },
      {
        question: "Are the crane and forklift supplied with operators?",
        answer:
          "Cranes are always supplied with an operator. The forklift can come with our operator, or be self-operated if your staff hold the required licence.",
      },
      crane.faqs[1],
      forklift.faqs[0],
    ],
    ctaHeading: "Need a Crane or Forklift in Sohar?",
    ctaSubheading: "Tell us the load, the site, and the dates — we'll confirm the right machine and quote.",
    whatsappMessage: "Hello Abdul Masood Trading, I need crane / forklift rental in Sohar.",
  },
  {
    slug: "boom-loader-excavator-rental-oman",
    href: "/services/boom-loader-excavator-rental-oman",
    title: "Boom Loader & Excavator Rental in Oman",
    shortTitle: "Boom Loader & Excavator Rental",
    tag: "Earthmoving & Reach",
    description:
      "Excavators for foundations and trenching, and boom loaders for lifting materials into the structure, across Oman.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Yellow telescopic boom loader with pallet forks on a site at sunset",

    metaTitle: "Boom Loader & Excavator Rental Oman",
    metaDescription:
      "Boom loader and excavator rental across Oman with operators — Sohar, Muscat, Duqm, Salalah, Nizwa & Al Buraimi. Daily to monthly hire.",
    keywords: [
      "boom loader rental Oman",
      "excavator rental Oman",
      "boom loader and excavator rental",
      "telehandler rental Oman",
      "excavator hire Oman",
    ],
    serviceType: "Boom loader and excavator rental",
    areaServed: ["Oman", ...locations.map((location) => location.cityName)],

    eyebrow: "Boom Loader & Excavator Rental · Oman",
    h1: "Boom Loader & Excavator Rental in Oman",
    intro:
      "The two machines most construction projects need, from the same supplier: excavators to dig foundations, basements, and trenches, and boom loaders to lift blocks and materials into the structure as it rises. Both are hired with operators across Oman, from our base in Sohar to Muscat, Duqm, Salalah, Nizwa, and Al Buraimi.",
    specs: [
      { label: "Excavator", value: "Earthmoving" },
      { label: "Boom Loader", value: "Lift & Reach" },
      { label: "Coverage", value: "6 Oman Hubs" },
      { label: "Supplied With", value: "Operator" },
    ],
    bulletGroups: [
      { title: "Excavator Hire", items: excavator.fleetItems },
      { title: "Boom Loader Hire", items: boomLoader.fleetItems },
      {
        title: "Where We Supply",
        items: locations.map((location) => `${location.cityName} — ${location.governorate}`),
      },
    ],
    localContext: {
      heading: "Which Machine, and When You Need Both",
      paragraphs: [
        "An excavator is the first machine on most sites. It digs foundations, basements, and utility trenches, and loads spoil into tippers. Tell us the dig depth and the ground (sand, gravel, or rock) so we send the right machine and bucket.",
        "A boom loader takes over once the structure is rising. Its telescopic arm lifts palletised blocks, cement, and rebar onto slabs and scaffold bays, and its rough-terrain tyres cope with unmade ground where a forklift would struggle.",
        "Hiring both from one supplier keeps the handover simple: the boom loader can arrive as the excavator finishes, under one agreement and one point of contact. Ground conditions vary across Oman, from coastal sand in Sohar to rock in the interior and khareef-wet ground in Salalah, so tell us where the site is when you book.",
      ],
    },
    areasHeading: "Excavator & Boom Loader Rental by City",
    areas: [
      { name: "About Our Excavators", href: excavator.href },
      { name: "About Our Boom Loaders", href: boomLoader.href },
      ...locations.flatMap((location) => [
        { name: `Excavator Rental ${location.cityName}`, href: serviceAreaHref(excavator, location) },
        { name: `Boom Loader Rental ${location.cityName}`, href: serviceAreaHref(boomLoader, location) },
      ]),
    ],
    faqs: [
      {
        question: "Where in Oman do you rent boom loaders and excavators?",
        answer:
          "We are based in Sohar and supply Sohar, Muscat, Al Buraimi, Nizwa, Duqm, and Salalah. Nearby areas take the shortest time to reach. For Duqm and Salalah we plan transport in advance and recommend weekly or monthly hire.",
      },
      {
        question: "Can I hire an excavator and a boom loader on one agreement?",
        answer:
          "Yes. Many projects hire both, one after the other or at the same time, on one agreement with one point of contact.",
      },
      excavator.faqs[1],
      boomLoader.faqs[0],
      boomLoader.faqs[1],
    ],
    ctaHeading: "Need a Boom Loader or Excavator?",
    ctaSubheading: "Tell us the job, the site location, and the dates — we'll recommend the machine and quote.",
    whatsappMessage: "Hello Abdul Masood Trading, I need boom loader / excavator rental.",
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
