import type { Faq } from "@/lib/faqs"
import type { EquipmentKey } from "@/lib/equipment"
import type { Governorate } from "@/lib/site-config"

export type LocationSummary = {
  slug: string
  title: string
  shortTitle: string
  /** City name as it appears mid-sentence, e.g. "Al Buraimi". */
  cityName: string
  href: string
  governorate: Governorate
  description: string
  heroImage: string
  heroImageAlt: string
  areas: string[]
  geo: { latitude: number; longitude: number }

  /** Ranked first in the /locations index and the footer. */
  primary: boolean
  /** Compact zone list for meta descriptions, kept short enough not to truncate. */
  metaZoneShort: string

  // --- Landing page copy (kept in data so every city page is genuinely distinct) ---
  eyebrow: string
  intro: string
  whyHeading: string
  whyPoints: { title: string; description: string }[]
  faqs: Faq[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string

  // --- SEO / schema ---
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** Plain place names for schema.org areaServed. */
  areaServed: string[]
  /** Slugs of neighbouring locations, used for internal linking. */
  nearby: string[]
  /** Dominant local industries — reused in the service × city page copy. */
  industries: string[]
  /** One line on why this city needs equipment; used on service × city pages. */
  demandNote: string
  /** How equipment reaches this city from the Sohar base. */
  mobilization: string
  /** Ground, climate, and access conditions that affect every machine here. */
  siteConditions: string
  /**
   * What renting each equipment type in this city actually involves. Rendered
   * on the service × city pages so each one carries content no other page has.
   */
  equipmentNotes: Record<EquipmentKey, string>
}

/**
 * The six Oman hubs targeted by the site, one landing page each. Referenced by
 * the homepage, /locations index, footer, sitemap, and the generated
 * service × city pages in `lib/service-areas.ts`.
 *
 * Every entry carries its own copy, FAQs, and notes — these pages must not be
 * near-duplicates of each other, or Google treats them as doorway pages.
 */
export const locations: LocationSummary[] = [
  {
    slug: "sohar",
    title: "Heavy Equipment Rental in Sohar",
    shortTitle: "Sohar",
    cityName: "Sohar",
    href: "/locations/sohar",
    governorate: "North Al Batinah",
    description:
      "Our home base. Cranes, tippers, boom loaders, forklifts, excavators, JCBs, and wheel loaders for Sohar Port, the Freezone, and Sohar Industrial Estate.",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Stacked shipping containers and trucks at a port container yard",
    areas: [
      "Sohar Port & Freezone",
      "Sohar Industrial Estate",
      "Falaj Al Qabail",
      "Liwa",
      "Saham",
      "Shinas",
      "Al Khaburah",
    ],
    geo: { latitude: 24.347, longitude: 56.73 },
    primary: true,
    metaZoneShort: "Sohar Port, Freezone & Industrial Estate",

    eyebrow: "Sohar · North Al Batinah · Home Base",
    intro:
      "ABDUL MASOOD TRADING LLC is registered in Sohar, so this is where our equipment is closest. We rent cranes, tipper trucks, boom loaders, 3 to 18 ton forklifts, excavators, JCB backhoe loaders, and wheel loaders to contractors, factories, and logistics operators across Sohar Port and Freezone, Sohar Industrial Estate, and the wider North Al Batinah coast.",
    whyHeading: "Why Sohar Contractors Rent From Us",
    whyPoints: [
      {
        title: "Based in Sohar",
        description:
          "Our company is registered in Sohar (P.O. Box 326, PC 119). Machines for Sohar jobs travel the shortest distance, which keeps mobilization simple and quick.",
      },
      {
        title: "Port & Industrial Work",
        description:
          "Cranes and forklifts for the plants, warehouses, and laydown yards around Sohar Port, the Freezone, and Sohar Industrial Estate.",
      },
      {
        title: "Earthworks in One Package",
        description:
          "Excavators, JCBs, wheel loaders, and tippers from one supplier, so digging, loading, and haulage run on one schedule.",
      },
      {
        title: "Batinah Coast Coverage",
        description: "Regular work north to Shinas and south to Saham and Al Khaburah along the Batinah Expressway.",
      },
      {
        title: "Machines With Operators",
        description:
          "Equipment is supplied with operators and drivers who know the machines, so your site team can focus on the work.",
      },
      {
        title: "Direct Contact",
        description: `Call or WhatsApp the office directly to check availability and get a quote the same day.`,
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment inside Sohar Port and the Freezone?",
        answer:
          "Yes. Sohar Port and Freezone, Sohar Industrial Estate, and the surrounding Liwa and Falaj Al Qabail areas are our closest work areas. Send your gate and site details and we will arrange access paperwork with you before delivery.",
      },
      {
        question: "Which machines are most requested in Sohar?",
        answer:
          "Cranes and 3 to 18 ton forklifts for industrial and warehouse work around the port, and excavators, JCBs, wheel loaders, and tippers for construction and road projects across North Al Batinah.",
      },
      {
        question: "Can you supply several machines for one Sohar project?",
        answer:
          "Yes. A common package is an excavator or JCB with tippers for earthworks, followed by a boom loader or crane for the structure. One supplier means one schedule and one point of contact.",
      },
      {
        question: "How quickly can equipment reach a Sohar site?",
        answer:
          "Sohar is our home base, so it is the fastest area for us to mobilise. Call with your site location and the machine you need, and we will confirm availability and a delivery time on the call.",
      },
    ],
    ctaHeading: "Need Equipment in Sohar?",
    ctaSubheading: "Tell us the machine, the site, and the dates — we'll confirm availability and a quote.",
    whatsappMessage: "Hello Abdul Masood Trading, I need equipment rental in Sohar.",

    metaTitle: "Heavy Equipment Rental in Sohar",
    metaDescription:
      "Crane, tipper, boom loader, forklift, excavator, JCB & wheel loader rental in Sohar — Port, Freezone & Industrial Estate. Call +968 7928 8727.",
    keywords: [
      "heavy equipment rental Sohar",
      "equipment rental Sohar",
      "crane rental Sohar",
      "forklift rental Sohar",
      "Sohar Port equipment hire",
      "Sohar Industrial Estate equipment rental",
    ],
    areaServed: ["Sohar", "Liwa", "Saham", "Shinas", "Al Khaburah", "North Al Batinah"],
    nearby: ["al-buraimi", "muscat"],
    industries: [
      "port, metals, and petrochemical industry",
      "Freezone logistics and warehousing",
      "construction and road projects along the Batinah coast",
    ],
    demandNote:
      "Sohar's port-side industry and the construction around it keep lifting and earthmoving equipment in steady demand.",
    mobilization:
      "Sohar is our registered base, so equipment for Sohar sites has the shortest trip and the simplest scheduling.",
    siteConditions:
      "Sites along the Batinah coast are mostly flat sand and gravel, with a high water table close to the sea that can affect deep digs and crane outrigger bearing. Summer heat means early starts on most sites, and industrial clients around the port usually require gate passes, machine documents, and operator IDs before entry.",
    equipmentNotes: {
      crane:
        "Crane work in Sohar is dominated by the industrial plants and warehouses around Sohar Port, the Freezone, and Sohar Industrial Estate: installing plant, lifting steel, and offloading heavy deliveries. Share the load, radius, and site entry requirements early so gate permits and lift planning are ready before the crane arrives.",
      tipper:
        "Tippers in Sohar mostly haul excavated material off construction plots and bring aggregate in from the quarries inland. For Freezone and industrial estate sites, confirm the approved haul route and disposal point with the site so trucks are not held at the gate.",
      "boom-loader":
        "Boom loaders suit Sohar's building projects and warehouse construction, placing blocks and materials on upper floors and moving pallets across unmade ground on sites that are still being built.",
      forklift:
        "Forklifts from 3 to 18 ton are the workhorses of Sohar's Freezone warehouses and logistics yards, covering container stuffing and pallet handling. They are also the usual choice for short-term cover during peak shipments or when an in-house forklift is down for repair.",
      excavator:
        "Excavators in Sohar dig foundations for industrial and commercial buildings and trench for utilities. Near the coast the water table can be shallow, so tell us the dig depth and whether dewatering is planned so we can advise on the right machine.",
      jcb: "A JCB is the practical choice on Sohar's villa plots, utility connections, and maintenance works around the city, where one machine digs, backfills, and levels without needing a separate loader.",
      "wheel-loader":
        "Wheel loaders in Sohar load tippers on earthworks jobs and manage stockpiles at batching plants and material yards serving the construction around the city and the industrial area.",
    },
  },
  {
    slug: "muscat",
    // Targets the "construction machinery rental Muscat" query directly, rather
    // than a separate service page that would compete with this one.
    title: "Construction Machinery Rental in Muscat",
    shortTitle: "Muscat",
    cityName: "Muscat",
    href: "/locations/muscat",
    governorate: "Muscat",
    description:
      "Construction machinery rental for Muscat's building, infrastructure, and industrial projects — Rusayl, Ghala, Al Misfah, Seeb, and Al Amerat.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telescopic boom loader with pallet forks on a construction site",
    areas: [
      "Rusayl Industrial Estate",
      "Ghala Industrial Area",
      "Al Misfah",
      "Wadi Kabir",
      "Seeb & Al Mabelah",
      "Al Amerat",
      "Bawshar",
    ],
    geo: { latitude: 23.588, longitude: 58.3829 },
    primary: true,
    metaZoneShort: "Rusayl, Ghala, Al Misfah & Seeb",

    eyebrow: "Muscat · Construction & Infrastructure",
    intro:
      "Cranes, boom loaders, excavators, JCBs, wheel loaders, tippers, and 3 to 18 ton forklifts for construction and civil works across the capital. We supply machines with operators to contractors working in Rusayl Industrial Estate, Ghala, Al Misfah, Seeb, Al Amerat, and residential and commercial developments across Muscat.",
    whyHeading: "Why Muscat Contractors Choose Us",
    whyPoints: [
      {
        title: "Full Construction Package",
        description:
          "Earthmoving, lifting, and haulage machines from one supplier, so a Muscat project deals with one company from site preparation to structure.",
      },
      {
        title: "Urban & Industrial Sites",
        description:
          "Compact JCBs and boom loaders for tight residential plots, and cranes and forklifts for industrial units in Rusayl and Ghala.",
      },
      {
        title: "Planned Mobilization",
        description:
          "Muscat is reached along the Batinah Expressway from our Sohar base. Book ahead and we schedule delivery for your start date.",
      },
      {
        title: "Operators Included",
        description: "Machines come with operators and drivers who know the equipment and the demands of city sites.",
      },
      {
        title: "Flexible Hire",
        description: "Daily, weekly, and monthly terms to match each phase of a project, from excavation to fit-out.",
      },
      {
        title: "Registered Company",
        description: "ABDUL MASOOD TRADING LLC — a registered Omani company you can contract and invoice with.",
      },
    ],
    faqs: [
      {
        question: "Do you rent construction machinery in Muscat?",
        answer:
          "Yes. We supply cranes, tippers, boom loaders, 3 to 18 ton forklifts, excavators, JCBs, and wheel loaders to projects across Muscat Governorate, including Rusayl, Ghala, Al Misfah, Seeb, Al Mabelah, Bawshar, and Al Amerat.",
      },
      {
        question: "How far in advance should I book equipment for Muscat?",
        answer:
          "Equipment is mobilised from our base in Sohar, so a few days' notice lets us plan transport and confirm the exact machine. For urgent needs, call — if a machine is already working in the Muscat area we can often move it sooner.",
      },
      {
        question: "Can you supply small machines for residential plots?",
        answer:
          "Yes. JCB backhoe loaders and boom loaders suit tight villa and residential plots in Muscat, where access is limited and one machine needs to handle several tasks.",
      },
      {
        question: "Do you offer monthly equipment rental for Muscat projects?",
        answer:
          "Yes. Monthly hire is common for construction projects running several months, and it is usually better value than repeated daily hire.",
      },
    ],
    ctaHeading: "Need Construction Machinery in Muscat?",
    ctaSubheading: "Send your site location, machine, and start date — we'll plan delivery and quote.",
    whatsappMessage: "Hello Abdul Masood Trading, I need construction machinery rental in Muscat.",

    metaTitle: "Construction Machinery Rental Muscat",
    metaDescription:
      "Construction machinery for rent in Muscat: cranes, excavators, JCBs, boom loaders, wheel loaders, tippers & forklifts with operators. Rusayl, Ghala, Seeb.",
    keywords: [
      "heavy equipment rental Muscat",
      "construction machinery rental Muscat",
      "equipment hire Muscat",
      "JCB rental Muscat",
      "excavator rental Muscat",
      "crane rental Muscat",
    ],
    areaServed: ["Muscat", "Seeb", "Bawshar", "Al Amerat", "Muttrah", "Qurayyat"],
    nearby: ["sohar", "nizwa"],
    industries: [
      "residential and commercial construction",
      "roads, utilities, and infrastructure",
      "light industry and logistics in Rusayl and Ghala",
    ],
    demandNote:
      "As Oman's capital and largest construction market, Muscat has continuous demand for earthmoving and lifting machinery.",
    mobilization:
      "Equipment reaches Muscat from our Sohar base along the Batinah Expressway, so we schedule deliveries in advance for your start date.",
    siteConditions:
      "Muscat sites range from flat plots in Seeb and Al Mabelah to rocky, sloping ground in Bawshar, Al Amerat, and the areas against the Hajar mountains, where rock breaking and careful machine positioning are common. City sites often have tight access and working-hour restrictions, so share access width and permitted hours when booking.",
    equipmentNotes: {
      crane:
        "Cranes in Muscat lift steel, precast, and building services equipment on commercial and residential projects, and install plant in industrial units in Rusayl and Ghala. On city sites, road space for outriggers and permitted working hours often decide the crane choice, so share them early.",
      tipper:
        "Tippers in Muscat remove excavated rock and soil from building sites and bring in aggregate and fill. Rocky ground in Al Amerat and Bawshar produces heavy spoil, so give us the material type and daily volume to size the number of trucks.",
      "boom-loader":
        "Boom loaders suit Muscat's multi-storey residential and commercial projects, lifting blocks and materials to upper floors where a tower crane is not available or is already fully booked.",
      forklift:
        "Forklifts from 3 to 18 ton in Muscat cover warehouse and distribution operations in Rusayl, Ghala, and Al Misfah, and material handling in contractors' yards.",
      excavator:
        "Excavators in Muscat handle foundations, basements, and utility trenching. On the rocky ground common in parts of the capital, tell us early if breaking is needed so we can plan the right machine and attachment.",
      jcb: "The JCB is a natural fit for Muscat's villa plots and utility works: compact enough for residential streets and able to dig, load, and backfill in one visit.",
      "wheel-loader":
        "Wheel loaders in Muscat load tippers on larger earthworks, clear development plots, and manage stockpiles at material yards on the city's edges.",
    },
  },
  {
    slug: "duqm",
    title: "Heavy Equipment Rental in Duqm",
    shortTitle: "Duqm",
    cityName: "Duqm",
    href: "/locations/duqm",
    governorate: "Al Wusta",
    description:
      "Project-based equipment hire for SEZAD, the Port of Duqm, and industrial and infrastructure works in Al Wusta.",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "All-terrain mobile crane ready for mobilization",
    areas: [
      "Special Economic Zone at Duqm (SEZAD)",
      "Port of Duqm",
      "Duqm Industrial Area",
      "Duqm Town",
      "Al Wusta Governorate",
    ],
    geo: { latitude: 19.6586, longitude: 57.7035 },
    primary: false,
    metaZoneShort: "SEZAD & Port of Duqm",

    eyebrow: "Duqm · Al Wusta · Project Hire",
    intro:
      "Equipment rental for projects in the Special Economic Zone at Duqm (SEZAD), around the Port of Duqm, and across Al Wusta. Duqm is a long-haul mobilization from our Sohar base, so we specialise in planned, longer-term hire: excavators, wheel loaders, tippers, cranes, boom loaders, JCBs, and forklifts that stay on your project for weeks or months.",
    whyHeading: "Renting Equipment for Duqm Projects",
    whyPoints: [
      {
        title: "Built for Long-Term Hire",
        description:
          "Monthly rates for machines that stay on site for the duration, which is how most Duqm projects are resourced.",
      },
      {
        title: "Planned Mobilization",
        description:
          "Transport by low-bed from Sohar is scheduled against your start date, with the machine and paperwork confirmed before it leaves.",
      },
      {
        title: "Earthworks to Lifting",
        description:
          "Site preparation, haulage, and lifting machines from one supplier, reducing the number of contractors you coordinate on a remote site.",
      },
      {
        title: "Operators Who Stay",
        description:
          "Operators travel with the machine for the hire period, so you are not relying on local availability.",
      },
      {
        title: "Registered Omani Company",
        description: "ABDUL MASOOD TRADING LLC, registered in Sohar, Sultanate of Oman.",
      },
      {
        title: "One Point of Contact",
        description: "One phone number and one supplier for every machine on your Duqm package.",
      },
    ],
    faqs: [
      {
        question: "Do you supply equipment to Duqm?",
        answer:
          "Yes, for planned project hire. Duqm is a long-haul move from our Sohar base, so it suits hires of several weeks or months, where the transport cost is spread across the hire period.",
      },
      {
        question: "How much notice do you need for a Duqm project?",
        answer:
          "Give us as much notice as you can, ideally one to two weeks, so we can confirm the machines, arrange low-bed transport, and complete any SEZAD or site entry requirements before arrival.",
      },
      {
        question: "Do operators stay on site in Duqm?",
        answer:
          "Yes. For Duqm hires our operators travel with the equipment and stay for the hire period. We will discuss accommodation arrangements when we quote.",
      },
      {
        question: "Which equipment is most useful for Duqm projects?",
        answer:
          "Most Duqm work starts with site preparation, so excavators, wheel loaders, and tippers come first, followed by cranes and boom loaders for construction and installation.",
      },
    ],
    ctaHeading: "Planning a Project in Duqm?",
    ctaSubheading: "Share the scope, machines, and start date — we'll plan mobilization and send a monthly quote.",
    whatsappMessage: "Hello Abdul Masood Trading, I need equipment rental for a project in Duqm.",

    metaTitle: "Heavy Equipment Rental in Duqm",
    metaDescription:
      "Project equipment hire for SEZAD & the Port of Duqm: excavators, wheel loaders, tippers, cranes, boom loaders & JCBs with operators. Monthly rates.",
    keywords: [
      "equipment rental Duqm",
      "heavy equipment rental Duqm",
      "SEZAD equipment hire",
      "crane rental Duqm",
      "excavator rental Duqm",
    ],
    areaServed: ["Duqm", "Al Wusta"],
    nearby: ["salalah", "muscat"],
    industries: [
      "industrial and infrastructure development in SEZAD",
      "port and logistics operations",
      "remote-site civil works across Al Wusta",
    ],
    demandNote:
      "Duqm's Special Economic Zone and port make it one of Oman's main centres of industrial and infrastructure development.",
    mobilization:
      "Duqm is a long-haul mobilization from Sohar by low-bed, so we plan it in advance and it suits hires of several weeks or longer.",
    siteConditions:
      "Duqm sites are typically open desert and coastal ground, remote from workshops and suppliers. Wind-blown sand, heat, and long distances between facilities make planned maintenance and reliable machines more important than on city sites. Allow time for zone and site entry approvals.",
    equipmentNotes: {
      crane:
        "Cranes in Duqm support plant installation, structural erection, and heavy offloading around the industrial zone and port. Because the crane travels a long way to reach you, confirm the full lift list up front so the right crane and rigging arrive the first time.",
      tipper:
        "Tippers in Duqm move large volumes of fill and excavated material across open development areas. Long hires with a fixed number of trucks are the usual arrangement; tell us the daily volume and haul distance to size the fleet.",
      "boom-loader":
        "Boom loaders in Duqm handle materials on building and facility construction, working on unmade ground where standard forklifts cannot operate.",
      forklift:
        "Forklifts from 3 to 18 ton in Duqm support warehouses, laydown yards, and site stores on longer projects. Because of the distance, they are usually hired monthly alongside other equipment.",
      excavator:
        "Excavators are often the first machine on a Duqm project, handling site preparation, foundations, and trenching across large plots. Monthly hire with an operator who stays on site is the typical setup.",
      jcb: "A JCB covers the many smaller tasks on a remote Duqm site, from trenching for services to clean-up and backfilling, without mobilizing a separate machine for each.",
      "wheel-loader":
        "Wheel loaders in Duqm load tippers, spread fill, and manage stockpiles on large site-preparation and road works where volumes are high.",
    },
  },
  {
    slug: "salalah",
    title: "Heavy Equipment Rental in Salalah",
    shortTitle: "Salalah",
    cityName: "Salalah",
    href: "/locations/salalah",
    governorate: "Dhofar",
    description:
      "Planned project hire for Port of Salalah, Salalah Free Zone, Raysut Industrial Estate, and construction across Dhofar.",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Container stacks and trucks at a port terminal",
    areas: [
      "Port of Salalah",
      "Salalah Free Zone",
      "Raysut Industrial Estate",
      "Salalah City",
      "Taqah",
      "Mirbat",
      "Thumrait",
    ],
    geo: { latitude: 17.0151, longitude: 54.0924 },
    primary: false,
    metaZoneShort: "Port of Salalah, Free Zone & Raysut",

    eyebrow: "Salalah · Dhofar · Project Hire",
    intro:
      "Equipment rental for projects in Salalah and across Dhofar Governorate, including the Port of Salalah, Salalah Free Zone, and Raysut Industrial Estate. Salalah is a long-distance move from our Sohar base, so we focus on planned hire: cranes, forklifts, excavators, wheel loaders, tippers, boom loaders, and JCBs for projects running several weeks or more.",
    whyHeading: "Renting Equipment for Salalah Projects",
    whyPoints: [
      {
        title: "Monthly Project Rates",
        description:
          "Longer hires spread the transport cost from Sohar, so monthly rental is the most cost-effective way to resource a Salalah project.",
      },
      {
        title: "Khareef-Aware Planning",
        description:
          "We help plan machine choice and scheduling around the June–September khareef, when rain and mist change ground conditions.",
      },
      {
        title: "Port & Free Zone Work",
        description:
          "Cranes and forklifts for warehouses, plants, and laydown areas at the Port of Salalah, the Free Zone, and Raysut.",
      },
      {
        title: "Operators Travel With the Machine",
        description: "Our operators stay with the equipment for the hire period, so you are not relying on local availability.",
      },
      {
        title: "Earthmoving Packages",
        description: "Excavators, loaders, and tippers together for site preparation and road works across Dhofar.",
      },
      {
        title: "Registered Omani Company",
        description: "ABDUL MASOOD TRADING LLC, registered in Sohar, Sultanate of Oman.",
      },
    ],
    faqs: [
      {
        question: "Do you rent equipment in Salalah?",
        answer:
          "Yes, for planned project hire. Salalah is a long-distance mobilization from our Sohar base, so it works best for hires of several weeks or months.",
      },
      {
        question: "Does the khareef season affect equipment hire in Salalah?",
        answer:
          "It can. From roughly June to September the khareef brings drizzle and mist to the coastal plain and mountains, which softens ground and reduces visibility. Tell us if your project runs through the khareef so we can plan machine choice and working arrangements.",
      },
      {
        question: "How much notice do you need for Salalah?",
        answer:
          "Ideally one to two weeks, so we can confirm the machines, arrange transport, and handle any port, free zone, or site entry requirements before arrival.",
      },
      {
        question: "Can you supply equipment for work at the Port of Salalah?",
        answer:
          "Yes. We supply cranes and forklifts for port-side warehouses, plants, and laydown areas, and earthmoving equipment for construction in the Free Zone and Raysut. Site entry requirements are arranged with you in advance.",
      },
    ],
    ctaHeading: "Planning a Project in Salalah?",
    ctaSubheading: "Send the scope, machines, and dates — we'll plan mobilization and quote monthly rates.",
    whatsappMessage: "Hello Abdul Masood Trading, I need equipment rental for a project in Salalah.",

    metaTitle: "Heavy Equipment Rental in Salalah",
    metaDescription:
      "Project equipment hire in Salalah & Dhofar: cranes, forklifts, excavators, wheel loaders, tippers & JCBs with operators for Port of Salalah & Raysut.",
    keywords: [
      "equipment rental Salalah",
      "heavy equipment rental Salalah",
      "crane rental Salalah",
      "Salalah Free Zone equipment hire",
      "excavator rental Salalah",
    ],
    areaServed: ["Salalah", "Taqah", "Mirbat", "Thumrait", "Dhofar"],
    nearby: ["duqm", "nizwa"],
    industries: [
      "port and free zone logistics",
      "industrial development at Raysut",
      "construction and road works across Dhofar",
    ],
    demandNote:
      "The Port of Salalah, the Free Zone, and Raysut make Salalah the industrial and logistics centre of southern Oman.",
    mobilization:
      "Salalah is a long-distance mobilization from Sohar, so we plan transport in advance and recommend monthly hire.",
    siteConditions:
      "Salalah's coastal plain is flat, but the June–September khareef brings drizzle, mist, and wet ground that slow earthworks and reduce visibility for lifting. Mountain roads towards Thumrait and the interior are steep, which matters when moving heavy machines between sites.",
    equipmentNotes: {
      crane:
        "Crane work in Salalah centres on the Port of Salalah, the Free Zone, and Raysut Industrial Estate: installing plant and offloading heavy cargo. During the khareef, reduced visibility and wind can limit lifting, so build weather allowance into the lift schedule.",
      tipper:
        "Tippers in Salalah move fill and aggregate on construction and road works. Wet khareef conditions soften haul roads on unsealed sites, so plan haul routes and allow for slower cycles in those months.",
      "boom-loader":
        "Boom loaders in Salalah place materials on building projects and move pallets across site compounds. Their rough-terrain tyres handle unsealed ground better than a forklift, including during the wetter months.",
      forklift:
        "Forklifts from 3 to 18 ton in Salalah serve warehouses and logistics operations around the Port of Salalah and the Free Zone. Because of the distance from Sohar, monthly hire is the practical arrangement.",
      excavator:
        "Excavators in Salalah handle foundations, trenching, and site preparation. Ground on the coastal plain can be saturated during the khareef, so plan deep excavations for the drier months where possible.",
      jcb: "A JCB covers smaller utilities, trenching, and site tasks around Salalah without mobilizing several machines from the north.",
      "wheel-loader":
        "Wheel loaders in Salalah load tippers and manage stockpiles on road and construction projects, and at material yards serving Dhofar's building sites.",
    },
  },
  {
    slug: "nizwa",
    title: "Heavy Equipment Rental in Nizwa",
    shortTitle: "Nizwa",
    cityName: "Nizwa",
    href: "/locations/nizwa",
    governorate: "Ad Dakhiliyah",
    description:
      "Excavators, JCBs, wheel loaders, tippers, cranes, and boom loaders for construction in Nizwa and across Ad Dakhiliyah.",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telescopic boom loader lifting a pallet on site",
    areas: ["Nizwa City", "Nizwa Industrial Estate", "Firq", "Bahla", "Izki", "Manah", "Birkat Al Mawz"],
    geo: { latitude: 22.9333, longitude: 57.5333 },
    primary: false,
    metaZoneShort: "Nizwa, Firq, Bahla & Izki",

    eyebrow: "Nizwa · Ad Dakhiliyah",
    intro:
      "Construction and civil works equipment for Nizwa and the interior. We supply excavators, JCB backhoe loaders, wheel loaders, tippers, cranes, boom loaders, and 3 to 18 ton forklifts with operators to projects in Nizwa city, Nizwa Industrial Estate, Firq, Bahla, Izki, Manah, and Birkat Al Mawz.",
    whyHeading: "Why Nizwa Projects Rent From Us",
    whyPoints: [
      {
        title: "Earthworks on Rocky Ground",
        description:
          "Excavators, JCBs, and loaders for the gravel and rock common across the interior, with operators used to hard digging.",
      },
      {
        title: "Planned Delivery",
        description:
          "Machines are mobilised from Sohar by road, so we schedule delivery ahead of your start date and confirm it before dispatch.",
      },
      {
        title: "Village & Town Sites",
        description:
          "Compact JCBs for narrow streets and small plots in the older parts of Nizwa, Bahla, and the surrounding villages.",
      },
      {
        title: "Industrial Estate Support",
        description: "Forklifts, boom loaders, and cranes for units and warehouses in Nizwa Industrial Estate.",
      },
      {
        title: "Monthly Hire",
        description: "Monthly rates for longer projects, with operators staying on site for the hire period.",
      },
      {
        title: "Registered Omani Company",
        description: "ABDUL MASOOD TRADING LLC, registered in Sohar, Sultanate of Oman.",
      },
    ],
    faqs: [
      {
        question: "Do you deliver equipment to Nizwa?",
        answer:
          "Yes. We supply equipment to Nizwa city, Nizwa Industrial Estate, and surrounding wilayats including Bahla, Izki, Manah, and Birkat Al Mawz. Delivery is planned from our Sohar base, so a few days' notice helps.",
      },
      {
        question: "Can your excavators handle rocky ground in the interior?",
        answer:
          "Tell us the ground type when you book. Much of Ad Dakhiliyah is gravel and rock, and we will match the machine and bucket or breaking attachment to the digging conditions.",
      },
      {
        question: "Do you have small machines for narrow streets?",
        answer:
          "Yes. JCB backhoe loaders are compact enough for older town and village streets and can dig, load, and backfill without needing a second machine.",
      },
      {
        question: "Can I rent equipment in Nizwa for one month or longer?",
        answer: "Yes. Monthly hire is common for interior projects and is usually the most cost-effective option.",
      },
    ],
    ctaHeading: "Need Equipment in Nizwa?",
    ctaSubheading: "Tell us the job, the site, and your start date — we'll plan delivery and quote.",
    whatsappMessage: "Hello Abdul Masood Trading, I need equipment rental in Nizwa.",

    metaTitle: "Heavy Equipment Rental in Nizwa",
    metaDescription:
      "Excavator, JCB, wheel loader, tipper, crane & boom loader rental in Nizwa, Bahla, Izki & Nizwa Industrial Estate. Operators included. +968 7928 8727.",
    keywords: [
      "equipment rental Nizwa",
      "heavy equipment rental Nizwa",
      "JCB rental Nizwa",
      "excavator rental Nizwa",
      "Ad Dakhiliyah equipment hire",
    ],
    areaServed: ["Nizwa", "Bahla", "Izki", "Manah", "Birkat Al Mawz", "Ad Dakhiliyah"],
    nearby: ["muscat", "al-buraimi"],
    industries: [
      "residential and public-sector construction",
      "roads and utilities across the interior",
      "light industry at Nizwa Industrial Estate",
    ],
    demandNote:
      "Nizwa is the main town of the interior, and construction and road works across Ad Dakhiliyah keep earthmoving equipment in demand.",
    mobilization:
      "Equipment reaches Nizwa from our Sohar base by road, so we schedule delivery a few days ahead of your start date.",
    siteConditions:
      "The interior is mostly gravel plains and rock at the foot of the Hajar mountains, so digging is often harder than on the coast and breaking may be needed. Older parts of Nizwa and nearby towns have narrow streets and falaj channels that must be protected, and steep roads towards Jebel Akhdar limit what heavy machines can reach.",
    equipmentNotes: {
      crane:
        "Cranes in Nizwa lift steel, precast, and equipment on public buildings, commercial projects, and units in Nizwa Industrial Estate. In older town areas, narrow streets can limit crane positioning, so share access details for a site check.",
      tipper:
        "Tippers in Nizwa haul excavated rock and gravel off site and bring in aggregate from interior quarries. Rocky spoil is heavy, so give us volumes and material type to plan the number of trucks.",
      "boom-loader":
        "Boom loaders in Nizwa place blocks and materials on residential and commercial buildings, working on the unmade gravel ground common on interior sites.",
      forklift:
        "Forklifts from 3 to 18 ton in Nizwa support warehouses and workshops in Nizwa Industrial Estate and material handling at contractors' and suppliers' yards.",
      excavator:
        "Excavators in Nizwa work on foundations, trenching, and road works in ground that is often gravel or rock. Tell us the expected ground so we can plan the right bucket or breaking attachment.",
      jcb: "JCB backhoe loaders are well suited to Nizwa's older neighbourhoods and surrounding villages, where compact size matters and one machine handles trenching, loading, and backfilling.",
      "wheel-loader":
        "Wheel loaders in Nizwa load tippers and manage aggregate at crusher yards and batching plants serving construction across the interior.",
    },
  },
  {
    slug: "al-buraimi",
    title: "Heavy Equipment Rental in Al Buraimi",
    shortTitle: "Al Buraimi",
    cityName: "Al Buraimi",
    href: "/locations/al-buraimi",
    governorate: "Al Buraimi",
    description:
      "Equipment hire for Al Buraimi city, Buraimi Industrial Estate, and Mahdah — close to our Sohar base via the Sohar–Buraimi road.",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift working inside a warehouse",
    areas: ["Al Buraimi City", "Al Buraimi Industrial Estate", "Mahdah", "As Sunaynah", "Wadi Al Jizi corridor"],
    geo: { latitude: 24.2508, longitude: 55.7931 },
    primary: true,
    metaZoneShort: "Al Buraimi, Industrial Estate & Mahdah",

    eyebrow: "Al Buraimi · Near Our Sohar Base",
    intro:
      "Al Buraimi is a short run from our Sohar base along the Sohar–Buraimi road, making it one of the easiest areas for us to supply. We rent excavators, JCBs, wheel loaders, tippers, cranes, boom loaders, and 3 to 18 ton forklifts to contractors, quarries, and businesses in Al Buraimi city, Buraimi Industrial Estate, and Mahdah.",
    whyHeading: "Why Al Buraimi Chooses Us",
    whyPoints: [
      {
        title: "Close to Sohar",
        description:
          "The Sohar–Buraimi road links our base directly to Al Buraimi, so mobilization is quicker and simpler than from Muscat.",
      },
      {
        title: "Quarry & Crusher Work",
        description:
          "Wheel loaders, excavators, and tippers for the quarrying and crusher operations along the Wadi Al Jizi corridor and around Mahdah.",
      },
      {
        title: "Industrial Estate Support",
        description: "Forklifts, boom loaders, and cranes for units and warehouses in Buraimi Industrial Estate.",
      },
      {
        title: "Construction Packages",
        description: "Excavators, JCBs, and tippers together for building and infrastructure projects around the city.",
      },
      {
        title: "Operators Included",
        description: "Machines are supplied with experienced operators and drivers.",
      },
      {
        title: "Registered Omani Company",
        description: "ABDUL MASOOD TRADING LLC, registered in Sohar, Sultanate of Oman.",
      },
    ],
    faqs: [
      {
        question: "Do you rent equipment in Al Buraimi?",
        answer:
          "Yes. Al Buraimi is close to our Sohar base along the Sohar–Buraimi road, and we supply the full range of our equipment to Al Buraimi city, Buraimi Industrial Estate, and Mahdah.",
      },
      {
        question: "Can you supply equipment for quarry and crusher operations?",
        answer:
          "Yes. Wheel loaders, excavators, and tippers are commonly hired for quarry and crusher work. Tell us the material, daily volumes, and whether you need loading, haulage, or both.",
      },
      {
        question: "How quickly can equipment reach Al Buraimi?",
        answer:
          "Because Al Buraimi is close to Sohar, it is one of our quicker areas to mobilise to. Call with your site location and machine, and we will confirm availability and a delivery time.",
      },
      {
        question: "Do you offer monthly hire in Al Buraimi?",
        answer: "Yes. Daily, weekly, and monthly hire are all available, and monthly rates suit ongoing quarry and construction work.",
      },
    ],
    ctaHeading: "Need Equipment in Al Buraimi?",
    ctaSubheading: "Tell us the machine and site location — we'll confirm availability and quote.",
    whatsappMessage: "Hello Abdul Masood Trading, I need equipment rental in Al Buraimi.",

    metaTitle: "Heavy Equipment Rental in Al Buraimi",
    metaDescription:
      "Equipment rental in Al Buraimi & Mahdah: wheel loaders, excavators, tippers, JCBs, cranes, boom loaders & forklifts with operators. Near our Sohar base.",
    keywords: [
      "equipment rental Al Buraimi",
      "heavy equipment rental Buraimi",
      "wheel loader rental Buraimi",
      "excavator rental Buraimi",
      "Buraimi Industrial Estate equipment hire",
    ],
    areaServed: ["Al Buraimi", "Mahdah", "As Sunaynah"],
    nearby: ["sohar", "nizwa"],
    industries: [
      "quarrying and crusher operations",
      "construction and infrastructure around the city",
      "industry and trade at Buraimi Industrial Estate",
    ],
    demandNote:
      "Quarrying, construction, and the industrial estate make Al Buraimi a steady market for earthmoving and handling equipment.",
    mobilization:
      "Al Buraimi is a short run from Sohar along the Sohar–Buraimi road, one of the quickest areas for us to mobilise to.",
    siteConditions:
      "Al Buraimi sits on gravel plains with rocky ground towards the mountains, and quarry sites mean heavy, abrasive material that is tough on buckets and tyres. Summer heat is severe inland, so early starts and reliable machines matter.",
    equipmentNotes: {
      crane:
        "Cranes in Al Buraimi install equipment and lift steel on industrial units in the Buraimi Industrial Estate and on commercial projects in the city. Because Al Buraimi is close to Sohar, short-notice crane hire is more practical here than in more distant areas.",
      tipper:
        "Tippers in Al Buraimi haul aggregate from quarries and crushers and remove spoil from construction sites. Tell us the haul route and daily volume so we can size the number of trucks.",
      "boom-loader":
        "Boom loaders in Al Buraimi handle blocks and materials on building sites and move pallets across unmade ground in yards and compounds.",
      forklift:
        "Forklifts from 3 to 18 ton in Al Buraimi serve warehouses and trading businesses in the Industrial Estate and around the city.",
      excavator:
        "Excavators in Al Buraimi dig foundations and trenches for construction and work in quarry operations. Rocky ground is common, so share the ground type to get the right machine and bucket.",
      jcb: "JCBs in Al Buraimi handle utilities, small plots, and maintenance jobs around the city, where one compact machine can dig, load, and backfill.",
      "wheel-loader":
        "Wheel loaders are central to Al Buraimi's quarry and crusher operations, loading tippers and managing stockpiles. Monthly hire with an operator is the usual arrangement.",
    },
  },
]

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug)
}

export const primaryLocations = locations.filter((location) => location.primary)

export const secondaryLocations = locations.filter((location) => !location.primary)
