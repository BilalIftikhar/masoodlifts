import type { Faq } from "@/lib/faqs"

/**
 * The seven equipment categories printed on the company letterhead. This is
 * the canonical fleet list: the homepage, /equipment pages, service × city
 * pages, contact form, schema, and llms.txt all read from it.
 *
 * Capacities and model details are deliberately left out of the copy until the
 * owner confirms the actual fleet — only the 3 to 18 ton forklift range is
 * stated. When confirming, add specifics to `fleetItems` rather than inventing
 * them in page components.
 *
 * TODO (owner): replace the stock photos with real fleet photos, and add photos
 * for the three categories that currently render an icon panel (tipper, JCB,
 * wheel loader). Drop them in public/images/fleet/ and set `image`/`imageAlt`.
 */

export type EquipmentKey =
  | "crane"
  | "tipper"
  | "boom-loader"
  | "forklift"
  | "excavator"
  | "jcb"
  | "wheel-loader"

export type EquipmentIcon = "crane" | "truck" | "boom" | "forklift" | "excavator" | "tractor" | "loader"

export type EquipmentType = {
  key: EquipmentKey
  /** Spec page: /equipment/{slug} */
  slug: string
  href: string
  /** Service × city URL prefix: /services/{slugBase}-{city} */
  slugBase: string
  /** Title-case label, as on the letterhead. */
  label: string
  labelAr: string
  /** Singular noun, mid-sentence. */
  noun: string
  nounPlural: string
  /** Short badge shown on cards. */
  tag: string
  /** One-line card description. */
  summary: string
  /** Spec-page intro. */
  overview: string
  /** The job this machine actually does — used mid-sentence in generated copy. */
  useCase: string
  image?: string
  /** Describes what the photo actually shows. */
  imageAlt?: string
  icon: EquipmentIcon
  applications: { title: string; description: string }[]
  fleetItems: string[]
  /** Capacity classes within the confirmed range, and what each is typically hired for. */
  capacityGuide?: {
    intro: string
    headers: string[]
    rows: string[][]
    note: string
  }
  /** What the customer should tell us to get an accurate quote. */
  quoteChecklist: string[]
  faqs: Faq[]
  keywords: string[]
}

export const equipmentTypes: EquipmentType[] = [
  {
    key: "crane",
    slug: "crane",
    href: "/equipment/crane",
    slugBase: "crane-rental",
    label: "Crane",
    labelAr: "رافعة",
    noun: "crane",
    nounPlural: "cranes",
    tag: "Lifting",
    summary: "Mobile crane hire with operator for steel erection, precast, plant installation, and machinery moves.",
    overview:
      "Crane rental for construction, industrial, and civil works across Oman. We match the crane to the heaviest load, the lift radius, and the ground at your site, and supply it with an experienced operator so the lift is planned before the crane arrives.",
    useCase: "lifting steel, precast, plant, and machinery into position",
    image: "/images/mobile-crane.jpeg",
    imageAlt: "Yellow all-terrain mobile crane with its boom retracted",
    icon: "crane",
    applications: [
      {
        title: "Structural & Precast Erection",
        description: "Setting steel columns, beams, precast panels, and roof trusses on building and warehouse projects.",
      },
      {
        title: "Plant & Machinery Installation",
        description: "Placing generators, transformers, tanks, and production equipment on plinths inside industrial estates.",
      },
      {
        title: "Loading & Unloading",
        description: "Offloading heavy deliveries from trailers and moving machinery between yards, sites, and port laydown areas.",
      },
    ],
    fleetItems: [
      "Mobile cranes sized to the load weight and lift radius",
      "Experienced crane operator supplied with the machine",
      "Rigging and lifting accessories arranged on request",
      "Load charts and inspection certificates for your safety officer",
      "Hourly, daily, weekly, or monthly hire",
    ],
    quoteChecklist: [
      "Heaviest single load (tonnes) and its dimensions",
      "Distance from the crane position to the load's final position",
      "Ground conditions where the crane will set up",
      "Site location and access restrictions (gates, overhead lines)",
      "Number of lifts or hire duration",
    ],
    faqs: [
      {
        question: "Do you supply the crane with an operator?",
        answer:
          "Yes. Our cranes are hired with an operator who knows the machine. Tell us about the lift beforehand so the operator arrives with the right configuration and rigging.",
      },
      {
        question: "What information do you need to size a crane?",
        answer:
          "The heaviest load, how far it has to travel from the crane's centre (the radius), the lift height, and the ground where the crane will stand. With those, we can specify a crane that lifts the load safely without paying for more capacity than you need.",
      },
      {
        question: "Can I hire a crane for a single lift?",
        answer:
          "Yes. Short hires for one-off lifts, such as offloading a delivery or placing a unit on a roof, are common. Longer daily and monthly hire is available for ongoing project work.",
      },
    ],
    keywords: ["crane rental Oman", "crane hire Oman", "mobile crane rental Sohar", "crane rental Muscat"],
  },
  {
    key: "tipper",
    slug: "tipper",
    href: "/equipment/tipper",
    slugBase: "tipper-rental",
    label: "Tipper",
    labelAr: "قلاب",
    noun: "tipper truck",
    nounPlural: "tipper trucks",
    tag: "Haulage",
    summary: "Tipper truck hire with driver for sand, aggregate, excavated soil, and site waste.",
    overview:
      "Tipper truck rental for earthworks, road works, and construction sites across Oman. Our tippers move excavated material off site, bring in sand, gravel, and aggregate, and haul debris to approved disposal points, all with a licensed driver.",
    useCase: "hauling sand, aggregate, excavated soil, and site waste",
    icon: "truck",
    applications: [
      {
        title: "Earthworks & Excavation",
        description: "Removing spoil from basements, foundations, and trenches as the excavator loads it.",
      },
      {
        title: "Material Delivery",
        description: "Bringing sand, gravel, crusher run, and aggregate from the quarry or supplier to site.",
      },
      {
        title: "Site Clearance",
        description: "Hauling demolition debris and construction waste to approved disposal areas.",
      },
    ],
    fleetItems: [
      "Tipper trucks with licensed drivers",
      "Paired with our excavators, JCBs, and wheel loaders for a full earthmoving package",
      "Per-trip, daily, or monthly hire",
      "Multiple trucks for continuous haul cycles",
    ],
    quoteChecklist: [
      "Type of material and approximate volume",
      "Pickup and drop-off locations",
      "Number of trucks or trips per day",
      "Loading equipment on site (or whether you need ours)",
      "Start date and duration",
    ],
    faqs: [
      {
        question: "Do your tippers come with a driver?",
        answer: "Yes. Every tipper is hired with a licensed driver familiar with site work and haul routes.",
      },
      {
        question: "Can you supply the excavator or loader as well?",
        answer:
          "Yes. We rent excavators, JCB backhoe loaders, and wheel loaders alongside our tippers, so one call covers both loading and haulage and the machines work to one schedule.",
      },
      {
        question: "Do you charge per trip or per day?",
        answer:
          "Both are possible. Short, defined jobs are often priced per trip; ongoing earthworks usually work out better on a daily or monthly rate. Tell us the volume and distance and we will quote the option that suits.",
      },
    ],
    keywords: ["tipper rental Oman", "tipper truck hire Sohar", "tipper rental Muscat", "dump truck rental Oman"],
  },
  {
    key: "boom-loader",
    slug: "boom-loader",
    href: "/equipment/boom-loader",
    slugBase: "boom-loader-rental",
    label: "Boom Loader",
    labelAr: "رافعة تلسكوبية",
    noun: "boom loader",
    nounPlural: "boom loaders",
    tag: "Lift & Reach",
    summary: "Telescopic boom loaders for lifting pallets and material to height across rough ground.",
    overview:
      "Boom loader (telehandler) rental for construction sites across Oman. A boom loader lifts palletised blocks, rebar, and formwork to upper floors and over obstacles on unmade ground, where a forklift cannot reach and a crane is more than the job needs.",
    useCase: "lifting pallets and material to height and reach across rough ground",
    image: "/images/fleet/telehandler-jcb.jpg",
    imageAlt: "Yellow telescopic boom loader with pallet forks on a site at sunset",
    icon: "boom",
    applications: [
      {
        title: "Block & Material Placement",
        description: "Lifting palletised blocks, cement, and tiles onto slabs and scaffold loading bays.",
      },
      {
        title: "Rough-Terrain Handling",
        description: "Moving material around unmade ground, sand, and gravel where standard forklifts struggle.",
      },
      {
        title: "Formwork & Rebar",
        description: "Handling shuttering, rebar bundles, and steel sections during structural works.",
      },
    ],
    fleetItems: [
      "Telescopic boom loaders with pallet forks",
      "Rough-terrain tyres for unmade site ground",
      "Operator supplied with the machine",
      "Daily, weekly, and monthly hire",
    ],
    quoteChecklist: [
      "Heaviest load and the height it must reach",
      "How far forward the load must be placed (reach)",
      "Ground conditions on site",
      "Hire duration",
    ],
    faqs: [
      {
        question: "What is the difference between a boom loader and a forklift?",
        answer:
          "A boom loader has a telescopic arm that extends up and forward, so it can place loads on upper floors and over obstacles. A standard forklift lifts straight up and works best on firm, level ground such as yards and warehouses.",
      },
      {
        question: "Is a boom loader the same as a telehandler?",
        answer:
          "Yes. \"Boom loader\" is the common name in Oman and the Gulf for what is also called a telehandler or telescopic handler.",
      },
      {
        question: "Can a boom loader work on sand and gravel?",
        answer:
          "Yes. Boom loaders run on large rough-terrain tyres and are built for unmade site ground. Tell us about soft or sloping ground in advance so we can advise on safe working.",
      },
    ],
    keywords: ["boom loader rental Oman", "boom loader hire Sohar", "telehandler rental Oman", "boom loader rental Muscat"],
  },
  {
    key: "forklift",
    slug: "3-ton-forklift",
    href: "/equipment/3-ton-forklift",
    slugBase: "forklift-rental",
    label: "3–18 Ton Forklift",
    labelAr: "رافعة شوكية ٣–١٨ طن",
    noun: "forklift",
    nounPlural: "forklifts",
    tag: "3 to 18 Ton Capacity",
    summary: "3 to 18 ton forklift hire for warehouses, yards, container loading, and site material handling.",
    overview:
      "3 to 18 ton forklift rental for warehouses, logistics yards, factories, and construction sites across Oman. The 3 ton class handles most palletised goods, container stuffing and unstuffing, and general material movement on firm ground, while the larger machines up to 18 ton move heavy machinery, steel, and oversized loads.",
    useCase: "pallet handling, container loading, and moving material around yards and warehouses",
    image: "/images/fleet/forklift-warehouse.jpg",
    imageAlt: "Counterbalance forklift inside an empty warehouse",
    icon: "forklift",
    applications: [
      {
        title: "Warehouse Operations",
        description: "Loading racks, moving pallets, and handling inbound and outbound goods.",
      },
      {
        title: "Container Loading",
        description: "Stuffing and unstuffing containers at freezone warehouses and logistics yards.",
      },
      {
        title: "Site Logistics",
        description: "Unloading deliveries and moving materials around site compounds and laydown areas.",
      },
    ],
    fleetItems: [
      "Forklifts from 3 ton up to 18 ton capacity",
      "With operator, or self-operated by your licensed staff",
      "Short-term cover for peaks, breakdowns, and stock counts",
      "Daily, weekly, and monthly hire",
    ],
    capacityGuide: {
      intro:
        "We rent forklifts from 3 ton up to 18 ton. Use this guide to see which capacity class usually fits the load, then send us the details and we will confirm the machine.",
      headers: ["Capacity class", "Typical loads", "Where it is usually hired"],
      rows: [
        ["3 ton", "Standard pallets, cartons, bagged goods, light general cargo", "Warehouses, Freezone units, container stuffing and unstuffing"],
        ["5 ton", "Heavy pallets, block and tile packs, drums, small machinery", "Building material yards, factories, site stores"],
        ["7 to 10 ton", "Steel bundles, pipes, coils, crated machinery, precast items", "Fabrication yards, steel stockists, industrial plants"],
        ["16 to 18 ton", "Heavy machinery, large fabrications, long or oversized loads", "Port laydown areas, heavy industry, project logistics yards"],
      ],
      note: "A forklift's rated capacity falls as the load centre moves out or the lift gets higher, so a long or bulky load can need a bigger machine than its weight suggests. Tell us the weight, the dimensions, and the lift height.",
    },
    quoteChecklist: [
      "Heaviest pallet or load weight",
      "Lift height needed (rack level or truck bed)",
      "Indoor or outdoor use, and floor surface",
      "Whether you need an operator",
      "Hire duration",
    ],
    faqs: [
      {
        question: "Which forklift capacity do I need?",
        answer:
          "We rent forklifts from 3 ton up to 18 ton. A 3 ton forklift handles most palletised goods and general cargo; heavier machinery, steel, and oversized loads need a larger machine. Rated capacity reduces as loads get higher or longer, so tell us the heaviest load and the lift height and we will confirm the right machine.",
      },
      {
        question: "Can I hire a forklift without an operator?",
        answer:
          "Yes, if your staff hold the required licence to operate a forklift. Otherwise we supply the forklift with our operator.",
      },
      {
        question: "Can a forklift load and unload containers?",
        answer:
          "Yes. The 3 ton class is commonly used for container stuffing and unstuffing. Let us know if you need to drive inside the container so we can check mast height and clearance.",
      },
      {
        question: "Do you rent heavy forklifts above 10 ton?",
        answer:
          "Yes. Our forklift range goes up to 18 ton for heavy machinery, steel, and oversized loads. Heavy forklifts are moved to site on a low-bed trailer, so share the site location and access when you ask for a quote.",
      },
      {
        question: "How long can I hire a forklift for?",
        answer:
          "Daily, weekly, or monthly. Short hires suit shipment peaks, stock counts, and breakdown cover; monthly hire is the usual choice for projects and for sites far from Sohar such as Duqm and Salalah.",
      },
    ],
    keywords: [
      "forklift rental Oman",
      "forklift rental Sohar",
      "forklift hire Muscat",
      "3 ton forklift rental Oman",
      "5 ton forklift rental Oman",
      "10 ton forklift rental Oman",
      "heavy forklift rental Oman",
    ],
  },
  {
    key: "excavator",
    slug: "excavator",
    href: "/equipment/excavator",
    slugBase: "excavator-rental",
    label: "Excavator",
    labelAr: "حفارة",
    noun: "excavator",
    nounPlural: "excavators",
    tag: "Earthmoving",
    summary: "Excavator hire with operator for foundations, trenching, utilities, and truck loading.",
    overview:
      "Excavator rental for construction, infrastructure, and civil works across Oman. Our excavators dig foundations and basements, cut trenches for utilities and drainage, and load tippers, supplied with an operator who works to your site engineer's levels.",
    useCase: "digging foundations, trenches, and utility runs and loading trucks",
    image: "/images/fleet/excavator-transport.jpg",
    imageAlt: "Compact excavator loaded on a trailer ready for delivery",
    icon: "excavator",
    applications: [
      {
        title: "Foundations & Basements",
        description: "Bulk excavation for building foundations, basements, and tank pits.",
      },
      {
        title: "Trenching & Utilities",
        description: "Trenches for water, drainage, power, and telecom lines on roads and plots.",
      },
      {
        title: "Loading & Site Preparation",
        description: "Loading tippers, clearing plots, and shaping ground ahead of construction.",
      },
    ],
    fleetItems: [
      "Excavators with experienced operators",
      "Bucket options matched to the digging job",
      "Paired with tippers for continuous spoil removal",
      "Daily, weekly, and monthly hire",
    ],
    quoteChecklist: [
      "Type of work (bulk dig, trenching, loading, demolition)",
      "Dig depth and ground type (sand, gravel, rock)",
      "Site access width and any overhead obstructions",
      "Whether you need tippers to remove spoil",
      "Hire duration",
    ],
    faqs: [
      {
        question: "Do your excavators come with an operator?",
        answer:
          "Yes. Excavators are hired with an experienced operator who can work to your site engineer's levels and set-out.",
      },
      {
        question: "Should I hire an excavator or a JCB?",
        answer:
          "An excavator digs deeper and moves more material, which suits bulk excavation and deep trenches. A JCB backhoe loader is more versatile on smaller jobs because it can dig, backfill, and load, and it travels between sites on the road. Tell us the job and we will recommend one.",
      },
      {
        question: "Can you also supply tippers to remove the soil?",
        answer:
          "Yes. We rent tipper trucks alongside our excavators, so digging and haulage run on one schedule under one supplier.",
      },
    ],
    keywords: ["excavator rental Oman", "excavator hire Sohar", "excavator rental Muscat", "digger hire Oman"],
  },
  {
    key: "jcb",
    slug: "jcb-backhoe-loader",
    href: "/equipment/jcb-backhoe-loader",
    slugBase: "jcb-rental",
    label: "JCB",
    labelAr: "جي سي بي",
    noun: "JCB backhoe loader",
    nounPlural: "JCB backhoe loaders",
    tag: "Backhoe Loader",
    summary: "JCB backhoe loader hire for trenching, backfilling, loading, and site levelling.",
    overview:
      "JCB backhoe loader rental for construction, utilities, and municipal works across Oman. A JCB digs with the rear backhoe and loads, backfills, and levels with the front bucket, so one machine and one operator cover several tasks on smaller sites.",
    useCase: "trenching, backfilling, loading, and site levelling with one machine",
    icon: "tractor",
    applications: [
      {
        title: "Trenching & Backfilling",
        description: "Digging service trenches and backfilling them once pipes and cables are laid.",
      },
      {
        title: "Site Levelling",
        description: "Spreading and levelling fill material and cleaning up plots between trades.",
      },
      {
        title: "Loading & Clean-Up",
        description: "Loading tippers with debris and moving material around the site.",
      },
    ],
    fleetItems: [
      "JCB backhoe loaders with operators",
      "Front loading bucket and rear digging bucket",
      "Drives between nearby sites without a low-bed trailer",
      "Hourly, daily, and monthly hire",
    ],
    quoteChecklist: [
      "Tasks needed (digging, loading, backfilling, levelling)",
      "Trench depth and ground type",
      "Site location",
      "Hire duration",
    ],
    faqs: [
      {
        question: "What is a JCB?",
        answer:
          "In Oman, \"JCB\" usually means a backhoe loader: a tractor-type machine with a loading bucket at the front and a digging arm at the back. The name comes from the best-known manufacturer.",
      },
      {
        question: "Is a JCB good for small construction sites?",
        answer:
          "Yes. A JCB is compact, drives on the road between sites, and does the work of a small excavator and a small loader, which makes it cost-effective on villa plots, utilities, and maintenance works.",
      },
      {
        question: "Can I hire a JCB by the hour?",
        answer:
          "Short hires are available for small jobs. For ongoing work, daily and monthly rates are better value. Tell us the scope and we will suggest the right basis.",
      },
    ],
    keywords: ["JCB rental Oman", "JCB hire Sohar", "backhoe loader rental Oman", "JCB rental Muscat"],
  },
  {
    key: "wheel-loader",
    slug: "wheel-loader",
    href: "/equipment/wheel-loader",
    slugBase: "wheel-loader-rental",
    label: "Wheel Loader",
    labelAr: "شيول",
    noun: "wheel loader",
    nounPlural: "wheel loaders",
    tag: "Bulk Loading",
    summary: "Wheel loader (shovel) hire for loading tippers, stockpiling, and moving bulk material.",
    overview:
      "Wheel loader rental for quarries, crusher yards, batching plants, road works, and large construction sites across Oman. A wheel loader moves large volumes of sand, aggregate, and fill quickly, whether it is loading trucks, building stockpiles, or feeding plant.",
    useCase: "loading tippers, stockpiling aggregate, and moving bulk material",
    icon: "loader",
    applications: [
      {
        title: "Truck Loading",
        description: "Fast loading of tippers with sand, aggregate, and excavated material.",
      },
      {
        title: "Stockpile Management",
        description: "Building and turning stockpiles at crusher yards, batching plants, and laydown areas.",
      },
      {
        title: "Site Grading & Clearance",
        description: "Spreading fill, clearing plots, and moving bulk material across large sites.",
      },
    ],
    fleetItems: [
      "Wheel loaders with operators",
      "Paired with tippers for full load-and-haul packages",
      "Daily, weekly, and monthly hire",
    ],
    quoteChecklist: [
      "Material type and daily volume to move",
      "Whether you are loading trucks, stockpiling, or feeding plant",
      "Site location and ground conditions",
      "Hire duration",
    ],
    faqs: [
      {
        question: "Is a wheel loader the same as a shovel?",
        answer:
          "Yes. On sites in Oman a wheel loader is often called a \"shovel\". It is a four-wheel machine with a large front bucket for moving and loading bulk material.",
      },
      {
        question: "When should I choose a wheel loader over a JCB?",
        answer:
          "Choose a wheel loader when the main job is moving or loading large volumes of loose material. A JCB suits sites that need a bit of everything, including digging.",
      },
      {
        question: "Can you supply tippers with the wheel loader?",
        answer: "Yes. We rent tippers alongside our wheel loaders so loading and haulage run as one package.",
      },
    ],
    keywords: ["wheel loader rental Oman", "shovel rental Sohar", "wheel loader hire Muscat", "loader rental Oman"],
  },
]

export function getEquipmentBySlug(slug: string) {
  return equipmentTypes.find((equipment) => equipment.slug === slug)
}

export function getEquipment(key: EquipmentKey) {
  return equipmentTypes.find((equipment) => equipment.key === key)!
}
