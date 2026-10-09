import type { Faq } from "@/lib/faqs"
import { getEquipment, type EquipmentKey, type EquipmentType } from "@/lib/equipment"

/**
 * One page per machine size in the fleet, e.g.
 * /equipment/crane/25-ton-crane-rental-oman. Only sizes the owner has
 * confirmed belong here (cranes: 25 and 50 ton; forklifts: 3 to 18 ton).
 * Never add a size the yard can't supply, and never publish rates — the copy
 * explains what moves the price instead.
 */
export type CapacityPage = {
  equipmentKey: EquipmentKey
  tons: number
  slug: string
  /** e.g. "25 Ton Crane" */
  label: string
  metaTitle: string
  metaDescription: string
  intro: string
  /** What this size can and can't do, in plain terms. */
  handles: string[]
  jobs: { title: string; description: string }[]
  included: string[]
  priceFactors: string[]
  faqs: Faq[]
}

const capacityPages: CapacityPage[] = [
  {
    equipmentKey: "crane",
    tons: 25,
    slug: "25-ton-crane-rental-oman",
    label: "25 Ton Crane",
    metaTitle: "25 Ton Crane Rental in Oman",
    metaDescription:
      "25 ton mobile crane rental with operator in Sohar and across Oman, for offloading, plant placing and light steel. Call +968 7928 8727.",
    intro:
      "A 25 ton mobile crane with an operator, for the everyday lifts on Omani sites: offloading trailers, setting generators and AC units, placing light steel and small precast, and moving machinery inside factories. It sets up quickly in tight yards and is often the most economical crane for jobs that don't need the reach of a bigger machine.",
    handles: [
      "The 25 ton rating is what the crane lifts at its shortest radius, with the boom close in. As the load moves further from the crane, the safe lifting capacity drops quickly, so a 25 ton crane lifting at a working radius handles a fraction of that figure. That is why we ask for the distance as well as the weight.",
      "In practice a 25 ton crane suits single items of a few tonnes placed close to where the crane can stand: a generator onto a plinth, a chiller onto a low roof, a container of spares off a trailer, or steel beams for a single-storey warehouse. When the load is heavier, the radius longer, or the lift higher, a 50 ton crane is usually the safer choice.",
    ],
    jobs: [
      {
        title: "Offloading & Loading",
        description: "Lifting machinery, spares, and materials off trailers at factories, warehouses, and site compounds.",
      },
      {
        title: "Plant & Building Services",
        description: "Placing generators, transformers, AC units, and pumps on plinths or low roofs.",
      },
      {
        title: "Light Steel & Precast",
        description: "Setting beams, columns, and small precast elements on low-rise buildings and sheds.",
      },
    ],
    included: [
      "25 ton mobile crane with an experienced operator",
      "Lift checked against the crane's load chart before booking",
      "Rigging and lifting accessories arranged on request",
      "Machine documents and operator ID for site and gate entry",
      "Single-lift, daily, weekly, or monthly hire",
    ],
    priceFactors: [
      "Hire length: a single lift, a day, or a longer booking",
      "Distance from our Sohar base to your site",
      "Working hours, including night or Friday work",
      "Rigging, slings, and any extra lifting gear",
      "Site entry requirements such as permits, inductions, and escorts",
    ],
    faqs: [
      {
        question: "What can a 25 ton crane actually lift?",
        answer:
          "Its full 25 tons only at the shortest radius. At a typical working distance it lifts much less, so the answer depends on how far the load is from where the crane can stand. Send the weight, the distance, and the height, and the operator checks it against the load chart.",
      },
      {
        question: "When should I choose a 50 ton crane instead?",
        answer:
          "When the load is heavier, the crane has to stand further away, or the lift goes high, for example over a building or onto an upper floor. If a 25 ton crane would be working near its limit, a 50 ton crane gives a safer margin.",
      },
      {
        question: "Can I book a 25 ton crane for one lift?",
        answer:
          "Yes. Single lifts such as offloading a delivery or setting one unit are a common booking. Tell us the time window so the crane and operator arrive when the load does.",
      },
      {
        question: "Does the crane come with an operator?",
        answer:
          "Yes. Every crane is supplied with an experienced operator. Rigging can be arranged on request, and the operator can advise on slinging when they arrive.",
      },
    ],
  },
  {
    equipmentKey: "crane",
    tons: 50,
    slug: "50-ton-crane-rental-oman",
    label: "50 Ton Crane",
    metaTitle: "50 Ton Crane Rental in Oman",
    metaDescription:
      "50 ton mobile crane rental with operator for steel, precast, tanks and plant installs at Omani sites and ports. Call +968 7928 8727.",
    intro:
      "A 50 ton mobile crane with an operator, for heavier and longer-reach lifts: steel erection on larger buildings, precast panels, tanks and transformers, and plant installation in industrial estates and port areas. It is the size most contractors step up to when a 25 ton crane would be working too close to its limit.",
    handles: [
      "A 50 ton crane has the extra boom length and counterweight to keep a useful capacity further out. That matters on sites where the crane can't park beside the load, such as lifting over a building, reaching into a plant area, or setting steel at the far side of a slab.",
      "The bigger machine also brings bigger outrigger loads. Before booking we look at where it will set up: compacted ground, mats under the outriggers, and clearance from trenches, soft fill, and overhead lines all need checking, especially on reclaimed or coastal ground.",
    ],
    jobs: [
      {
        title: "Structural Steel & Precast",
        description: "Erecting steel frames, roof trusses, and precast panels on warehouses and multi-storey buildings.",
      },
      {
        title: "Tanks, Transformers & Plant",
        description: "Placing heavy plant items in industrial estates, utilities, and process plants.",
      },
      {
        title: "Port & Laydown Lifts",
        description: "Handling project cargo, fabrications, and machinery in port laydown and freezone yards.",
      },
    ],
    included: [
      "50 ton mobile crane with an experienced operator",
      "Lift checked against the load chart, including radius and height",
      "Advice on outrigger set-up and ground preparation",
      "Machine documents and operator ID for site and gate entry",
      "Daily, weekly, or monthly hire, or a planned single lift",
    ],
    priceFactors: [
      "Hire length and the number of lifts",
      "Distance from Sohar, and whether escorts or permits are needed on the road",
      "Working hours, including shutdown or night work",
      "Rigging, spreader beams, and lifting accessories",
      "Ground preparation and site entry requirements",
    ],
    faqs: [
      {
        question: "How do I know if I need a 50 ton crane?",
        answer:
          "Send the heaviest load, its dimensions, how far it is from where the crane can stand, and the height it has to reach. If a 25 ton crane would be close to its limit at that radius, we will recommend the 50 ton crane.",
      },
      {
        question: "What ground does a 50 ton crane need?",
        answer:
          "Firm, level ground under each outrigger, with mats to spread the load. Avoid fresh fill, trench edges, and soft sand. Tell us what the ground is like and we will advise before the crane travels.",
      },
      {
        question: "Can the 50 ton crane work inside port and industrial sites?",
        answer:
          "Yes. We supply the machine documents and operator details that sites usually ask for at the gate. Share the site's entry rules early so passes are ready before the crane arrives.",
      },
      {
        question: "Can you supply a 25 ton and a 50 ton crane together?",
        answer:
          "Yes. On some jobs the larger crane does the main lifts while the smaller one handles offloading and lighter work. Tell us the lift plan and we will confirm both machines.",
      },
    ],
  },
  {
    equipmentKey: "forklift",
    tons: 3,
    slug: "3-ton-forklift-rental-oman",
    label: "3 Ton Forklift",
    metaTitle: "3 Ton Forklift Rental in Oman",
    metaDescription:
      "3 ton forklift rental in Sohar and across Oman for pallets, container stuffing and warehouse cover. With or without operator. Call +968 7928 8727.",
    intro:
      "The 3 ton forklift is the standard warehouse and yard machine: pallets, cartons, bagged goods, and container stuffing and unstuffing. We hire it with an operator, or to your licensed staff, for peak shipments, stock counts, breakdown cover, and ongoing project stores.",
    handles: [
      "A 3 ton forklift lifts its rated load at the standard load centre, with the weight close to the fork heel. Longer or bulkier loads, or lifts to high rack levels, reduce what it can safely carry, so tell us the load size and the lift height as well as the weight.",
      "It is compact enough to work in warehouse aisles and container doorways, which makes it the usual choice for Freezone warehouses and logistics yards. For heavy steel, machinery, or long loads, step up to a 5 or 10 ton machine.",
    ],
    jobs: [
      {
        title: "Container Stuffing & Unstuffing",
        description: "Loading and emptying containers at warehouses, freezone units, and logistics yards.",
      },
      {
        title: "Warehouse Pallet Handling",
        description: "Receiving, putting away, and dispatching palletised goods and racking loads.",
      },
      {
        title: "Short-Term Cover",
        description: "Extra capacity for peak shipments and stock counts, or cover while your own forklift is repaired.",
      },
    ],
    included: [
      "3 ton forklift, delivered to your site",
      "With our operator, or self-operated by your licensed staff",
      "Machine documents for site and gate entry",
      "Daily, weekly, or monthly hire",
    ],
    priceFactors: [
      "Hire length: daily, weekly, or monthly",
      "With or without our operator",
      "Distance from our Sohar base",
      "Shift pattern and working hours",
      "Attachments or special fork lengths",
    ],
    faqs: [
      {
        question: "Can a 3 ton forklift work inside a container?",
        answer:
          "It is the size most often used for container stuffing and unstuffing. Tell us if the forklift has to drive inside the container so we can check the mast height and clearance before delivery.",
      },
      {
        question: "Can my own staff drive the forklift?",
        answer:
          "Yes, if they hold the required forklift licence. Otherwise we supply the forklift with our operator.",
      },
      {
        question: "How quickly can you supply a 3 ton forklift in Sohar?",
        answer:
          "Sohar is our base, so it is the quickest area for us. Call or WhatsApp with the site and dates and we will confirm availability and a delivery time.",
      },
      {
        question: "Is 3 ton enough for my loads?",
        answer:
          "For most pallets and general cargo, yes. If your loads are heavy steel, machinery, or long items, or need lifting high, a 5 or 10 ton forklift may be needed. Send the weight, size, and lift height and we will confirm.",
      },
    ],
  },
  {
    equipmentKey: "forklift",
    tons: 5,
    slug: "5-ton-forklift-rental-oman",
    label: "5 Ton Forklift",
    metaTitle: "5 Ton Forklift Rental in Oman",
    metaDescription:
      "5 ton forklift rental for heavy pallets, block packs, drums and yard work in Sohar and across Oman. With operator if needed. Call +968 7928 8727.",
    intro:
      "The 5 ton forklift is the step up for heavier pallets and yard work: block and tile packs, cement and bagged goods on heavy pallets, drums, and small machinery. It is the common choice at building material yards, factories, and site stores where a 3 ton machine would be working at its limit.",
    handles: [
      "Extra capacity gives a safety margin on heavy pallets and lets the forklift carry loads a little further out on the forks, which helps with bulky items. It is larger than a 3 ton machine, so check aisle widths and doorway heights if it has to work indoors.",
      "Outdoors, a 5 ton forklift copes better with yard surfaces and ramps. On loose sand or unmade ground, a boom loader is usually a better tool than any forklift.",
    ],
    jobs: [
      {
        title: "Building Material Yards",
        description: "Loading and unloading block, tile, and cement pallets on and off trucks.",
      },
      {
        title: "Factories & Workshops",
        description: "Moving raw materials, drums, and finished goods between production and dispatch.",
      },
      {
        title: "Site Stores",
        description: "Handling heavy deliveries and stock in project laydown areas and compounds.",
      },
    ],
    included: [
      "5 ton forklift, delivered to your site",
      "With our operator, or self-operated by your licensed staff",
      "Machine documents for site and gate entry",
      "Daily, weekly, or monthly hire",
    ],
    priceFactors: [
      "Hire length",
      "With or without our operator",
      "Distance from our Sohar base",
      "Working hours and shifts",
      "Fork length and attachments",
    ],
    faqs: [
      {
        question: "When do I need a 5 ton forklift instead of a 3 ton?",
        answer:
          "When pallets are heavy, such as block, tile, or cement, when loads are bulky, or when a 3 ton machine would be working near its limit. A safety margin also reduces wear and the risk of tipping.",
      },
      {
        question: "Can a 5 ton forklift work outdoors?",
        answer:
          "Yes, on firm yard surfaces. On loose sand or unfinished ground, a boom loader is usually the better choice. Tell us the surface and we will advise.",
      },
      {
        question: "Can I hire a 5 ton forklift monthly?",
        answer:
          "Yes. Monthly hire is common for material yards and project stores. Daily and weekly hire are available for shorter jobs.",
      },
      {
        question: "Do you supply an operator?",
        answer:
          "Yes, if you need one. Your own licensed staff can also operate the forklift.",
      },
    ],
  },
  {
    equipmentKey: "forklift",
    tons: 10,
    slug: "10-ton-forklift-rental-oman",
    label: "10 Ton Forklift",
    metaTitle: "10 Ton Forklift Rental in Oman",
    metaDescription:
      "10 ton forklift rental for steel, pipes, coils and crated machinery at Omani yards and plants. Delivered from Sohar. Call +968 7928 8727.",
    intro:
      "The 10 ton forklift handles the heavy end of yard work: steel bundles, pipes, coils, crated machinery, and precast items. It is the usual machine at fabrication yards, steel stockists, and industrial plants, and for project cargo that is too heavy for a standard forklift but doesn't need a crane.",
    handles: [
      "A 10 ton forklift has longer forks and a heavier counterweight to carry long and heavy loads in a yard. Long items such as pipes and steel sections shift the load centre outwards, so the length of the load matters as much as its weight.",
      "It needs firm, level ground and room to turn. Heavy forklifts travel to site on a low-bed trailer, so share the site location and access route when you ask for a quote.",
    ],
    jobs: [
      {
        title: "Steel & Pipe Handling",
        description: "Moving steel bundles, pipes, beams, and coils at stockists and fabrication yards.",
      },
      {
        title: "Machinery & Crated Cargo",
        description: "Handling crated machinery and heavy cases at plants, warehouses, and laydown areas.",
      },
      {
        title: "Precast & Heavy Materials",
        description: "Moving precast items and heavy building materials around production and storage yards.",
      },
    ],
    included: [
      "10 ton forklift, delivered by low-bed trailer",
      "Experienced operator, or your licensed staff",
      "Machine documents for site and gate entry",
      "Daily, weekly, or monthly hire",
    ],
    priceFactors: [
      "Hire length",
      "Low-bed transport to and from your site",
      "With or without our operator",
      "Working hours and shifts",
      "Fork length and special attachments",
    ],
    faqs: [
      {
        question: "What loads suit a 10 ton forklift?",
        answer:
          "Steel bundles, pipes, coils, crated machinery, and precast items that are too heavy for a 3 or 5 ton forklift. For long loads, tell us the length as well as the weight.",
      },
      {
        question: "How does a 10 ton forklift get to my site?",
        answer:
          "On a low-bed trailer from our Sohar base. Share the site location and the access route so we can plan the delivery.",
      },
      {
        question: "Can a 10 ton forklift replace a crane?",
        answer:
          "For moving heavy items around a level yard, often yes. For lifting onto structures, over obstacles, or to height, you need a crane or a boom loader.",
      },
      {
        question: "Is an operator included?",
        answer:
          "We supply an experienced operator if you need one. Your licensed staff can also drive it.",
      },
    ],
  },
  {
    equipmentKey: "forklift",
    tons: 18,
    slug: "18-ton-forklift-rental-oman",
    label: "18 Ton Forklift",
    metaTitle: "18 Ton Forklift Rental in Oman",
    metaDescription:
      "18 ton heavy forklift rental for machinery, large fabrications and oversized loads at Omani ports and plants. Call +968 7928 8727.",
    intro:
      "The 18 ton forklift is the largest in our range, for the heaviest yard moves: heavy machinery, large fabrications, transformers, and oversized loads at port laydown areas, heavy industry, and project logistics yards. It saves bringing in a crane when the job is moving heavy items across level ground.",
    handles: [
      "An 18 ton forklift carries heavy loads at ground level and moves them across a yard. Its capacity still depends on the load centre, so for large or long items we need the dimensions and the centre of gravity, not just the weight.",
      "It is a big machine: it needs firm, level ground, wide turning space, and a low-bed trailer to reach site. Port and industrial sites usually ask for machine documents and an operator ID at the gate, which we supply.",
    ],
    jobs: [
      {
        title: "Heavy Machinery Moves",
        description: "Moving heavy machines and plant items within factories, workshops, and yards.",
      },
      {
        title: "Project Cargo",
        description: "Handling large fabrications and oversized cargo at port laydown and project yards.",
      },
      {
        title: "Heavy Industry",
        description: "Moving heavy components and materials at metals, energy, and process plants.",
      },
    ],
    included: [
      "18 ton forklift, delivered by low-bed trailer",
      "Experienced operator supplied with the machine",
      "Machine documents and operator ID for site and gate entry",
      "Daily, weekly, or monthly hire",
    ],
    priceFactors: [
      "Hire length",
      "Low-bed transport and any road permits",
      "Working hours and shifts",
      "Site entry and safety requirements",
      "Special attachments or fork extensions",
    ],
    faqs: [
      {
        question: "What is an 18 ton forklift used for?",
        answer:
          "Moving the heaviest items across level ground: machinery, large fabrications, transformers, and oversized loads at port laydown areas and heavy industrial sites.",
      },
      {
        question: "What information do you need for a heavy forklift job?",
        answer:
          "The load weight, its dimensions, where its centre of gravity sits, how far it has to travel, and the ground surface. With those we confirm the machine and fork length.",
      },
      {
        question: "Can the 18 ton forklift work inside port areas?",
        answer:
          "Yes. We supply the machine documents and operator details that port and industrial sites ask for. Share the gate requirements early so access is ready before delivery.",
      },
      {
        question: "Should I use a crane or an 18 ton forklift?",
        answer:
          "A forklift moves heavy items across a level yard; a crane lifts them up, over obstacles, or into position. Many heavy moves use both. Tell us the job and we will recommend the right combination.",
      },
    ],
  },
]

export function capacitiesFor(equipmentKey: EquipmentKey) {
  return capacityPages.filter((page) => page.equipmentKey === equipmentKey)
}

export function capacityHref(equipment: EquipmentType, page: CapacityPage) {
  return `${equipment.href}/${page.slug}`
}

export function getCapacityPage(equipmentSlug: string, capacitySlug: string) {
  const page = capacityPages.find((candidate) => candidate.slug === capacitySlug)
  if (!page) return undefined
  const equipment = getEquipment(page.equipmentKey)
  return equipment.slug === equipmentSlug ? { equipment, page } : undefined
}

export function allCapacityPages() {
  return capacityPages.map((page) => {
    const equipment = getEquipment(page.equipmentKey)
    return { equipment, page, href: capacityHref(equipment, page) }
  })
}
