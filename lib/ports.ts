import type { Faq } from "@/lib/faqs"
import type { EquipmentKey } from "@/lib/equipment"
import type { Governorate } from "@/lib/site-config"

/**
 * Port pages under /ports/<slug>, nearest to the Sohar yard first. They target
 * ready-to-book searches such as "crane rental Sohar Port".
 *
 * Keep the copy general about access: describe the documents sites usually
 * ask for, and never claim a specific port approval, pass, or certificate the
 * company does not hold.
 */
export type PortPage = {
  slug: string
  /** Full name, used in the H1: "Crane & Forklift Rental at {name}". */
  name: string
  /** Short name for links, cards, and the navigation. */
  shortName: string
  href: string
  governorate: Governorate
  /** Slug of the governorate hub or town the port belongs to. */
  hubSlug: string
  /** Town used for the crane, forklift, and boom loader links. */
  cityName: string
  intro: string
  /** Terminals and zones shown as chips. */
  zones: string[]
  /** Container, cargo, and project-lift work at this port. */
  work: string[]
  /** Gate passes, permits, and HSE documents — described generally. */
  documents: string
  machines: { key: EquipmentKey; note: string }[]
  /** Delivery planning from Sohar. */
  delivery: string
  faqs: Faq[]
  metaTitle: string
  metaDescription: string
  heroImage: string
  heroImageAlt: string
  areaServed: string[]
}

const containerYard = {
  heroImage: "/images/site/port-container-yard.jpg",
  heroImageAlt: "Stacked shipping containers and trucks at a port container yard",
}
const mobileCrane = { heroImage: "/images/mobile-crane.jpeg", heroImageAlt: "Yellow mobile crane with its boom retracted" }
const forklift = {
  heroImage: "/images/fleet/forklift-warehouse.jpg",
  heroImageAlt: "Counterbalance forklift inside a warehouse",
}

export const ports: PortPage[] = [
  {
    slug: "sohar-port",
    name: "Sohar Port & Freezone",
    shortName: "Sohar Port",
    href: "/ports/sohar-port",
    governorate: "North Al Batinah",
    hubSlug: "sohar",
    cityName: "Sohar",
    intro:
      "Sohar Port and Freezone is Oman's main industrial port and the closest to our yard in Sohar Industrial Estate. We supply 25 ton and 50 ton cranes, 3 to 18 ton forklifts, boom loaders, and earthmoving machines with operators to logistics companies, plants, and contractors inside the port, the Freezone, and the industrial clusters around them.",
    zones: ["Container & general cargo terminals", "Sohar Freezone", "Industrial clusters", "Laydown and logistics yards", "Port-side warehouses"],
    work: [
      "Most port work is cargo handling away from the quay: stuffing and unstuffing containers in Freezone warehouses, moving steel, pipes, and project cargo across laydown yards, and offloading heavy items from trailers. Forklifts from 3 ton for pallets up to 18 ton for heavy pieces cover most of it, with a crane when the load has to go up or over something.",
      "The plants around the port bring planned lifting: installing equipment, maintenance shutdowns, and steel and precast for new buildings. These lifts need a crane sized to the radius and an operator used to permit-to-work procedures.",
      "New Freezone plots also need groundwork before anything is built, so excavators, wheel loaders, JCBs, and tippers are hired for site preparation, foundations, and services.",
    ],
    documents:
      "Sites inside the port and Freezone usually ask for a gate pass, machine registration and inspection documents, the operator's ID and licence, and sometimes a safety induction before work starts. We send the machine and operator documents in advance; tell us your site's procedure so passes are ready before the machine arrives at the gate.",
    machines: [
      { key: "forklift", note: "3 ton for container and warehouse work; 5 to 18 ton for steel, pipes, and heavy cargo." },
      { key: "crane", note: "25 ton for offloading and light lifts; 50 ton for heavier pieces and longer radius." },
      { key: "boom-loader", note: "Placing materials on new warehouses and moving pallets across unmade yard ground." },
      { key: "wheel-loader", note: "Site preparation and bulk material handling on new Freezone plots." },
    ],
    delivery:
      "Sohar Port is a short drive from our yard, so it is the quickest place we serve. Same-day delivery is often possible once the gate pass is arranged, and daily hire works for short cargo jobs.",
    faqs: [
      {
        question: "Can you deliver a forklift inside Sohar Freezone today?",
        answer:
          "Often, yes, because the port is close to our yard. The deciding factor is usually the gate pass, so send your company's entry procedure when you call.",
      },
      {
        question: "Which forklift do I need for container stuffing?",
        answer:
          "A 3 ton forklift handles most container stuffing and unstuffing. Tell us if it must drive inside the container so we can check the mast height.",
      },
      {
        question: "Do you supply cranes for project cargo at Sohar Port?",
        answer:
          "Yes. Our 25 ton and 50 ton cranes handle offloading and placing project cargo. Send the weight, dimensions, and radius so we can confirm the right crane.",
      },
      {
        question: "What documents do port sites ask for?",
        answer:
          "Usually machine registration and inspection papers, the operator's ID and licence, and sometimes a safety induction. Requirements vary by company, so share yours and we will prepare them.",
      },
      {
        question: "Can I hire by the day at Sohar Port?",
        answer: "Yes. Daily, weekly, and monthly hire are all available at the port because it is so close to our yard.",
      },
    ],
    metaTitle: "Crane & Forklift Rental Sohar Port",
    metaDescription:
      "Crane and 3–18 ton forklift rental at Sohar Port & Freezone, with operators and gate documents. Same-day delivery. Call +968 7928 8727.",
    ...containerYard,
    areaServed: ["Sohar Port", "Sohar Freezone", "Sohar", "Liwa"],
  },
  {
    slug: "shinas-port",
    name: "Shinas Port",
    shortName: "Shinas Port",
    href: "/ports/shinas-port",
    governorate: "North Al Batinah",
    hubSlug: "shinas",
    cityName: "Shinas",
    intro:
      "Shinas Port, at the northern end of the Batinah coast, serves fishing boats and ferry traffic and is the coastal gateway toward Musandam. We supply cranes, forklifts, boom loaders, and earthmoving machines with operators for harbour maintenance, cargo, and construction work at Shinas.",
    zones: ["Fishing harbour", "Ferry terminal", "Quay and storage areas", "Harbour access roads"],
    work: [
      "Harbour work at Shinas is mostly maintenance and handling: lifting boats and equipment, moving supplies and catches across the quay, and offloading materials for the harbour's facilities. A 25 ton crane or a forklift on a short hire covers most of these jobs.",
      "Upgrades and new buildings at the harbour bring civil work too: excavators and tippers for groundwork, rock and fill placement along the shore, and boom loaders or cranes for the structures.",
    ],
    documents:
      "Harbour areas usually ask for a gate pass, machine documents, and the operator's ID, and some work near the water needs a safety briefing. We send machine and operator details ahead; tell us the harbour authority's procedure for your job.",
    machines: [
      { key: "crane", note: "Lifting boats, equipment, and materials at the quay." },
      { key: "forklift", note: "Moving supplies and stock around the harbour and storage areas." },
      { key: "excavator", note: "Groundwork and rock placement for harbour upgrades." },
    ],
    delivery:
      "Shinas is about 55 km north of our yard on the coastal road, under an hour for a low-bed. Same-day or next-day delivery is usual.",
    faqs: [
      {
        question: "Do you supply cranes at Shinas Port?",
        answer: "Yes. Our 25 ton and 50 ton cranes are hired for lifts at the harbour. Send the load and radius to confirm the size.",
      },
      {
        question: "How fast can equipment reach Shinas Port?",
        answer: "Usually the same or the next day. Shinas is about 55 km from our Sohar yard.",
      },
      {
        question: "Can I hire a forklift for a short harbour job?",
        answer: "Yes. Daily hire works well at Shinas because it is close to our yard.",
      },
      {
        question: "What documents does the harbour need?",
        answer:
          "Usually a gate pass, machine documents, and the operator's ID. Tell us the harbour's procedure and we will prepare in advance.",
      },
      {
        question: "Do you supply machines for harbour construction?",
        answer: "Yes. Excavators, tippers, and wheel loaders for groundwork, and cranes or boom loaders for structures.",
      },
    ],
    metaTitle: "Crane & Forklift Rental Shinas Port",
    metaDescription:
      "Crane, forklift & excavator rental at Shinas Port with operators, for harbour maintenance and works. Call +968 7928 8727.",
    ...mobileCrane,
    areaServed: ["Shinas Port", "Shinas"],
  },
  {
    slug: "port-sultan-qaboos",
    name: "Port Sultan Qaboos, Muttrah",
    shortName: "Port Sultan Qaboos",
    href: "/ports/port-sultan-qaboos",
    governorate: "Muscat",
    hubSlug: "muscat",
    cityName: "Muscat",
    intro:
      "Port Sultan Qaboos in Muttrah moved its commercial cargo to Sohar in 2014 and now serves cruise ships and tourism, with redevelopment along the Muttrah waterfront. We supply cranes, forklifts, boom loaders, and compact earthmoving machines with operators for terminal maintenance, events, and construction work at the port and around Muttrah.",
    zones: ["Cruise terminal", "Muttrah waterfront", "Fishing harbour", "Port redevelopment areas"],
    work: [
      "Today's work at the port is about the cruise terminal and the waterfront: maintenance lifts, moving materials for upgrades, installing structures and equipment, and setting up for events and the cruise season.",
      "Redevelopment around the port brings construction work in tight urban surroundings, where compact machines, careful lift planning, and agreed working hours matter more than size.",
    ],
    documents:
      "Port and waterfront sites usually ask for a gate or site pass, machine documents, the operator's ID, and a method statement for lifting work. Municipality rules may limit working hours on the corniche. We prepare machine and operator documents ahead; share your site's requirements.",
    machines: [
      { key: "crane", note: "Lifts for terminal upgrades, structures, and equipment on the waterfront." },
      { key: "forklift", note: "Moving materials and equipment around the terminal and work areas." },
      { key: "boom-loader", note: "Placing materials at height on building and fit-out work." },
    ],
    delivery:
      "Muttrah is about 230 km from our yard, through Muscat's busiest roads, so we agree a delivery window that suits traffic and site hours. Next-day delivery is usually possible.",
    faqs: [
      {
        question: "Does Port Sultan Qaboos still handle cargo?",
        answer:
          "Commercial cargo moved to Sohar in 2014. The port now serves cruise ships and tourism, and our work there is maintenance, events, and construction rather than cargo handling.",
      },
      {
        question: "Can you supply a crane in Muttrah?",
        answer:
          "Yes. Send the load, the radius, and the site access, and we will plan the lift and a delivery window around corniche traffic.",
      },
      {
        question: "Are there working-hour limits in Muttrah?",
        answer:
          "Often, yes, on the corniche and busy roads. Tell us your permitted hours so we can schedule the machine accordingly.",
      },
      {
        question: "Do you rent forklifts for events at the port?",
        answer: "Yes. Forklifts can be hired for set-up and take-down, with or without our operator.",
      },
      {
        question: "Where should I hire for cargo work in Muscat?",
        answer:
          "Cargo for Muscat now arrives mostly through Sohar Port. See our Sohar Port page, or our Muscat page for city sites.",
      },
    ],
    metaTitle: "Crane Rental Muscat Port, Muttrah",
    metaDescription:
      "Crane, forklift & boom loader rental at Port Sultan Qaboos and the Muttrah waterfront, with operators. Call +968 7928 8727.",
    ...mobileCrane,
    areaServed: ["Port Sultan Qaboos", "Muttrah", "Muscat"],
  },
  {
    slug: "mina-al-fahal",
    name: "Mina Al Fahal",
    shortName: "Mina Al Fahal",
    href: "/ports/mina-al-fahal",
    governorate: "Muscat",
    hubSlug: "muscat",
    cityName: "Muscat",
    intro:
      "Mina Al Fahal in Muscat is Oman's main crude oil export terminal, with a refinery and storage alongside. We supply cranes, forklifts, and support machines with operators to contractors working on maintenance, shutdowns, and projects in the Mina Al Fahal area, subject to each site's entry rules.",
    zones: ["Oil terminal area", "Refinery and storage", "Contractor yards", "Access roads"],
    work: [
      "Equipment work around Mina Al Fahal is driven by maintenance and planned shutdowns: lifting valves, pumps, and pipe spools, moving materials to work fronts, and handling equipment in contractors' yards. Bookings are fixed well ahead around the shutdown schedule.",
      "Contractor yards and stores nearby hire forklifts for materials and heavy items, and cranes for loading and offloading trailers bound for the site.",
    ],
    documents:
      "Oil and gas facilities apply strict entry rules: safety inductions, permits to work, inspected and certified machines, and approved operators. Requirements are set by each facility and contractor, so we work to your procedure — send it with your enquiry and allow time for approvals before the start date.",
    machines: [
      { key: "crane", note: "Shutdown and maintenance lifts, and offloading at contractor yards." },
      { key: "forklift", note: "Moving materials and heavy items in yards and stores; up to 18 ton." },
      { key: "boom-loader", note: "Placing materials at height and moving pallets on rough ground." },
    ],
    delivery:
      "Mina Al Fahal is about 225 km from our yard on the Muscat side of the capital. Deliveries are planned to the site's entry slot, and shutdown bookings are confirmed well before the start.",
    faqs: [
      {
        question: "Can your cranes work at Mina Al Fahal?",
        answer:
          "Subject to the facility's entry and safety requirements. Send the procedure and the lift details early so documents and approvals can be completed in time.",
      },
      {
        question: "Do you supply equipment for shutdowns?",
        answer:
          "Yes. Cranes, forklifts, and boom loaders can be booked for the shutdown period. Confirm dates early, as shutdowns tie up machines for the whole window.",
      },
      {
        question: "What documents will the site ask for?",
        answer:
          "Typically machine inspection certificates, operator ID and licence, and attendance at a safety induction. Each site sets its own rules.",
      },
      {
        question: "Can I hire a forklift for a contractor yard nearby?",
        answer: "Yes. Forklifts from 3 ton to 18 ton for contractor yards and stores, with or without an operator.",
      },
      {
        question: "How far ahead should I book?",
        answer: "As early as possible for shutdowns; a few days for yard work outside the facility.",
      },
    ],
    metaTitle: "Crane & Forklift Rental Mina Al Fahal",
    metaDescription:
      "Crane, forklift & boom loader rental for maintenance and shutdowns at Mina Al Fahal, Muscat. Call +968 7928 8727.",
    ...forklift,
    areaServed: ["Mina Al Fahal", "Muscat"],
  },
  {
    slug: "sur-port",
    name: "Port of Sur & Qalhat",
    shortName: "Sur Port & Qalhat",
    href: "/ports/sur-port",
    governorate: "South Ash Sharqiyah",
    hubSlug: "sur",
    cityName: "Sur",
    intro:
      "Sur has a working fishing port and traditional boatyards, and Qalhat to its north is home to Oman's liquefied natural gas export terminal and industrial facilities. We supply cranes, forklifts, boom loaders, and earthmoving machines with operators for harbour, industrial, and construction work around Sur and Qalhat.",
    zones: ["Sur fishing port", "Boatyards", "Qalhat industrial area", "Sur Industrial Estate"],
    work: [
      "In Sur, the harbour and boatyards hire cranes and forklifts for lifting boats, engines, and materials, along with machines for harbour upgrades and the roads that serve them.",
      "At Qalhat and Sur Industrial Estate, work is maintenance, shutdowns, and new construction at industrial facilities, which need cranes and heavy forklifts planned around strict site procedures.",
    ],
    documents:
      "Industrial facilities near Qalhat apply strict entry rules, including inductions, permits to work, and inspected machines with approved operators. Harbour areas in Sur usually need a site pass and machine documents. Send the site's procedure with your enquiry so approvals are in place before delivery.",
    machines: [
      { key: "crane", note: "Harbour lifts in Sur and maintenance lifts at industrial sites." },
      { key: "forklift", note: "Handling materials and heavy equipment, from 3 ton to 18 ton." },
      { key: "excavator", note: "Groundwork for harbour, road, and industrial construction." },
    ],
    delivery:
      "Sur is roughly 430 km from our yard through Muscat and down the coastal highway, a full day for a low-bed. Port and industrial jobs in Sur are planned in advance and suit weekly or monthly hire.",
    faqs: [
      {
        question: "Do you supply cranes in Sur?",
        answer: "Yes. Our 25 ton and 50 ton cranes travel to Sur for planned hires. Send the lift details and dates.",
      },
      {
        question: "Can you work at industrial sites near Qalhat?",
        answer:
          "Subject to each facility's entry rules. Share the procedure early so documents and approvals are completed before the machine arrives.",
      },
      {
        question: "How long does delivery to Sur take?",
        answer: "A full day by low-bed from Sohar. We book delivery dates in advance.",
      },
      {
        question: "Do you supply forklifts for the boatyards?",
        answer: "Yes. Forklifts and cranes can be hired for boat and equipment handling at the boatyards.",
      },
      {
        question: "What hire length suits Sur?",
        answer: "Weekly or monthly, so the transport is spread over the job. Machines can stay for a shutdown.",
      },
    ],
    metaTitle: "Crane & Forklift Rental Sur Port",
    metaDescription:
      "Crane, forklift & excavator rental at Sur port, boatyards and Qalhat industrial sites, with operators. Call +968 7928 8727.",
    ...mobileCrane,
    areaServed: ["Port of Sur", "Qalhat", "Sur"],
  },
  {
    slug: "duqm-port",
    name: "Port of Duqm & SEZAD",
    shortName: "Duqm Port",
    href: "/ports/duqm-port",
    governorate: "Al Wusta",
    hubSlug: "duqm",
    cityName: "Duqm",
    intro:
      "The Port of Duqm sits inside the Special Economic Zone at Duqm (SEZAD), alongside the dry dock, the refinery, and the zone's industrial and logistics areas. We supply cranes, forklifts, boom loaders, and earthmoving fleets with operators for planned project hire at the port and across SEZAD.",
    zones: ["Commercial port", "Dry dock area", "Refinery area", "SEZAD industrial zones", "Logistics yards"],
    work: [
      "Port and zone work is project-led: offloading and moving project cargo, handling steel and pipe in laydown yards, lifting for plant installation, and supporting maintenance at the dry dock and industrial facilities.",
      "Construction across SEZAD keeps earthmoving fleets busy on site preparation, roads, and foundations, and boom loaders and cranes on the buildings that follow.",
    ],
    documents:
      "SEZAD, the port, and the industrial facilities each have entry procedures: zone and site passes, safety inductions, permits for lifting, and inspected machines. We supply machine and operator documents and work to your procedure; allow time in the schedule for approvals.",
    machines: [
      { key: "crane", note: "Project cargo, plant installation, and maintenance lifts." },
      { key: "forklift", note: "Laydown yards and stores, up to 18 ton for heavy pieces." },
      { key: "wheel-loader", note: "Site preparation and material handling across the zone." },
      { key: "boom-loader", note: "Placing materials on buildings and moving pallets over rough ground." },
    ],
    delivery:
      "Duqm is a long-haul move from Sohar by low-bed, planned well in advance. Port and SEZAD hires usually run for several weeks or months, and machines travel together to keep transport costs down.",
    faqs: [
      {
        question: "Do you supply cranes at Duqm Port?",
        answer:
          "Yes, for planned project hire. Send the lift list, dates, and the site's entry rules so the crane and documents are ready.",
      },
      {
        question: "Can you work inside SEZAD?",
        answer: "Yes, subject to zone and site procedures. We provide machine and operator documents for the approvals.",
      },
      {
        question: "How far ahead should I book for Duqm?",
        answer: "As early as possible. The move from Sohar is long, so dates are planned in advance.",
      },
      {
        question: "Can several machines travel together?",
        answer: "Yes. Sending machines together keeps the transport cost per machine down.",
      },
      {
        question: "What hire length suits Duqm?",
        answer: "Several weeks or months. Machines stay on site with their operators for the hire.",
      },
    ],
    metaTitle: "Crane Rental Duqm Port & SEZAD",
    metaDescription:
      "Crane, forklift, wheel loader & boom loader rental at the Port of Duqm and SEZAD, with operators. Call +968 7928 8727.",
    ...containerYard,
    areaServed: ["Port of Duqm", "SEZAD", "Duqm"],
  },
  {
    slug: "salalah-port",
    name: "Port of Salalah, Raysut & Salalah Free Zone",
    shortName: "Salalah Port",
    href: "/ports/salalah-port",
    governorate: "Dhofar",
    hubSlug: "salalah",
    cityName: "Salalah",
    intro:
      "The Port of Salalah is one of the region's major container hubs, with general cargo handled at Raysut and industry and logistics in the Salalah Free Zone and Raysut Industrial Estate next door. We supply cranes, forklifts, boom loaders, and earthmoving machines with operators for planned hire across the port area.",
    zones: ["Container terminal area", "General cargo at Raysut", "Salalah Free Zone", "Raysut Industrial Estate", "Laydown yards"],
    work: [
      "Around the port, forklifts and cranes handle cargo in warehouses and yards: stuffing and unstuffing containers, moving steel and project cargo, and offloading heavy pieces. Free Zone tenants hire on monthly terms during set-up and busy periods.",
      "Raysut Industrial Estate and the Free Zone bring plant installation, maintenance lifts, and new construction, with earthmoving fleets for site preparation.",
    ],
    documents:
      "Port, Free Zone, and industrial sites usually ask for site passes, machine documents, the operator's ID, and safety inductions. We prepare machine and operator documents in advance and follow your site's procedure.",
    machines: [
      { key: "forklift", note: "Container and warehouse work, and heavy cargo up to 18 ton." },
      { key: "crane", note: "Offloading, plant installation, and maintenance lifts." },
      { key: "wheel-loader", note: "Site preparation and bulk handling in the Free Zone and industrial estate." },
    ],
    delivery:
      "Salalah is more than 1,000 km from Sohar, so every Salalah hire is planned in advance and suits monthly terms. The June–September khareef brings wet ground and low visibility, which we allow for in lift planning.",
    faqs: [
      {
        question: "Do you supply forklifts at Salalah Free Zone?",
        answer: "Yes, for planned monthly hire. Forklifts from 3 ton to 18 ton, with or without our operator.",
      },
      {
        question: "Can you supply cranes at Raysut?",
        answer: "Yes. Our 25 ton and 50 ton cranes travel to Salalah for planned work. Send the lift details and dates.",
      },
      {
        question: "Does the khareef affect lifting work?",
        answer:
          "Yes. Mist, drizzle, and wet ground from June to September can slow lifts and earthworks. We plan around the season with you.",
      },
      {
        question: "How far ahead should I book for Salalah?",
        answer: "As early as possible. The move from Sohar is long, so dates and transport are planned in advance.",
      },
      {
        question: "Can machines also work in Thumrait?",
        answer: "Yes. Machines in Salalah can move on to Thumrait, about 80 km north, on the same hire.",
      },
    ],
    metaTitle: "Crane & Forklift Rental Salalah Port",
    metaDescription:
      "Crane and forklift rental at the Port of Salalah, Raysut & Salalah Free Zone, with operators. Planned hire. Call +968 7928 8727.",
    ...containerYard,
    areaServed: ["Port of Salalah", "Raysut", "Salalah Free Zone", "Salalah"],
  },
  {
    slug: "khasab-port",
    name: "Khasab Port",
    shortName: "Khasab Port",
    href: "/ports/khasab-port",
    governorate: "Musandam",
    hubSlug: "khasab",
    cityName: "Khasab",
    intro:
      "Khasab Port is Musandam's main harbour, handling trading boats, ferries, tourist dhows, and the supplies that reach the governorate by sea. We supply cranes, forklifts, and earthmoving machines with operators for planned hire at the port and around Khasab.",
    zones: ["Commercial quay", "Ferry and tourist berths", "Port storage areas", "Khasab town"],
    work: [
      "Port work in Khasab is handling cargo and supplies on the quay, lifting boats and equipment, and maintenance of the port's facilities, with forklifts and a crane covering most needs.",
      "Construction projects in Khasab often depend on materials arriving by sea, so lifting and handling at the port goes hand in hand with earthmoving and building work in town.",
    ],
    documents:
      "The port usually asks for a site pass, machine documents, and the operator's ID. Because machines reach Musandam through the UAE, we also prepare the transport and border documents. Send the port's procedure and your dates early.",
    machines: [
      { key: "forklift", note: "Handling cargo and supplies on the quay." },
      { key: "crane", note: "Lifting boats, equipment, and heavy cargo." },
      { key: "excavator", note: "Groundwork for port and town construction projects." },
    ],
    delivery:
      "Khasab is roughly 290 km from Sohar by road and the route crosses the UAE, so every move is planned in advance with the border paperwork ready. Hires usually run for several weeks or more.",
    faqs: [
      {
        question: "Can you get a crane to Khasab Port?",
        answer:
          "Yes, with planning. The road crosses the UAE, so we arrange the move and documents in advance. Tell us your dates early.",
      },
      {
        question: "What documents does Khasab Port ask for?",
        answer: "Usually a site pass, machine documents, and the operator's ID. We also prepare the border transit papers.",
      },
      {
        question: "Is short-term hire possible in Khasab?",
        answer: "Because of the move, hires of several weeks or more are the practical arrangement.",
      },
      {
        question: "Can several machines travel together?",
        answer: "Yes. Sending machines together keeps the transport cost per machine down.",
      },
      {
        question: "Do you also supply equipment for building projects in Khasab?",
        answer: "Yes. See our Khasab page for earthmoving and building equipment in Musandam.",
      },
    ],
    metaTitle: "Crane & Forklift Rental Khasab Port",
    metaDescription:
      "Planned crane, forklift & excavator hire at Khasab Port, Musandam, with operators. Call +968 7928 8727.",
    ...mobileCrane,
    areaServed: ["Khasab Port", "Khasab", "Musandam"],
  },
]

export function getPortBySlug(slug: string) {
  return ports.find((port) => port.slug === slug)
}

export function portsForHub(hubSlug: string) {
  return ports.filter((port) => port.hubSlug === hubSlug)
}
