import type { Faq } from "@/lib/faqs"
import type { EquipmentKey } from "@/lib/equipment"
import type { Governorate } from "@/lib/site-config"

/**
 * Town and industrial-area pages under /locations/<slug>, each sitting below a
 * governorate hub in `lib/locations.ts`. Every page carries its own copy —
 * no sentence is shared between areas — so none of them reads as a doorway
 * page with the town name swapped.
 *
 * Distances are approximate road distances from the Sohar yard, rounded, and
 * drive times are for a loaded low-bed, not a car. Check them against a real
 * delivery before quoting them to a customer.
 */
export type AreaPage = {
  slug: string
  name: string
  /** Slug of the governorate hub this area sits under. */
  hubSlug: string
  governorate: Governorate
  /** Approximate road distance from the Sohar yard, when known with confidence. */
  distanceKm?: number
  /** How a delivery from Sohar works for this area. */
  delivery: string
  intro: string
  /** Common project types in this area. */
  projects: string[]
  /** The machines most hired here, with the reason. */
  machines: { key: EquipmentKey; note: string }[]
  /** Ground, climate, and access conditions. */
  conditions: string
  /** Localities shown as chips under "Areas We Cover". */
  places: string[]
  faqs: Faq[]
  /** Neighbouring area or hub slugs (all under /locations). */
  neighbours: string[]
  /** Port slugs worth linking from this area. */
  ports?: string[]
  metaTitle: string
  metaDescription: string
  heroImage: string
  heroImageAlt: string
}

const crane = { heroImage: "/images/mobile-crane.jpeg", heroImageAlt: "Yellow mobile crane with its boom retracted" }
const port = { heroImage: "/images/site/port-container-yard.jpg", heroImageAlt: "Stacked shipping containers at a port yard" }
const excavator = {
  heroImage: "/images/fleet/excavator-transport.jpg",
  heroImageAlt: "Excavator loaded on a low-bed trailer for delivery",
}
const boomLoader = {
  heroImage: "/images/fleet/telehandler-jcb.jpg",
  heroImageAlt: "Telescopic boom loader with pallet forks on a construction site",
}
const forklift = {
  heroImage: "/images/fleet/forklift-warehouse.jpg",
  heroImageAlt: "Counterbalance forklift inside a warehouse",
}

export const areas: AreaPage[] = [
  // ---------------------------------------------------------------- North Al Batinah
  {
    slug: "liwa",
    name: "Liwa",
    hubSlug: "sohar",
    governorate: "North Al Batinah",
    distanceKm: 25,
    delivery:
      "Liwa is about 25 km north of our Sohar yard on the coastal road, so it is one of the quickest places for us to reach. Most machines can be on a Liwa site the same day they are booked, subject to availability.",
    intro:
      "Liwa is the wilayat directly north of Sohar, beside Sohar Port and Freezone, and much of the region's heavy industry and logistics sits on its doorstep. We rent cranes, 3 to 18 ton forklifts, boom loaders, excavators, JCBs, wheel loaders, and tippers with operators to plants, warehouses, contractors, and farms across Liwa.",
    projects: [
      "Industrial work dominates the coastal side of Liwa: maintenance and expansion at the plants near the port, steel and pipe handling in fabrication yards, and warehouse fit-outs for logistics companies serving the Freezone. These jobs need lifting equipment that arrives with the right documents and an operator who is used to working under a permit system.",
      "Inland, Liwa is farms, villages, and new housing. Here the work is smaller and more varied: villa foundations, boundary walls, farm channels, and the road and utility works that follow new plots. A JCB or a small excavator with a tipper does most of it.",
    ],
    machines: [
      {
        key: "crane",
        note: "25 ton and 50 ton cranes for plant maintenance, offloading heavy deliveries, and steel erection at Liwa's industrial sites.",
      },
      {
        key: "forklift",
        note: "Heavy forklifts up to 18 ton for steel, pipes, and machinery, and 3 ton machines for warehouse and container work.",
      },
      {
        key: "jcb",
        note: "The all-rounder for villa plots, farm works, and utility connections in Liwa's villages.",
      },
      {
        key: "tipper",
        note: "Tippers to clear excavated soil from plots and bring in fill and aggregate for site preparation.",
      },
    ],
    conditions:
      "Liwa's coast is flat, sandy, and close to the water table, so deep digs may meet water and crane outriggers need mats on loose ground. Industrial sites near the port run strict gate and safety procedures; send us the requirements early so machine documents and operator IDs are ready before delivery.",
    places: ["Liwa town", "Sohar Port area", "Sohar Freezone", "Liwa farms and villages", "Batinah Expressway corridor"],
    faqs: [
      {
        question: "Can you deliver a crane to an industrial site in Liwa today?",
        answer:
          "Often, yes. Liwa is about 25 km from our yard. Call with the load, the radius, and the site entry requirements, and we will confirm whether a crane is free and how soon it can arrive.",
      },
      {
        question: "Do you rent forklifts to Freezone warehouses near Liwa?",
        answer:
          "Yes. We supply 3 ton forklifts for warehouse and container work and heavier machines up to 18 ton for steel and machinery, with or without an operator.",
      },
      {
        question: "What machine suits a villa plot in Liwa?",
        answer:
          "A JCB backhoe loader handles most villa work on its own: digging footings, backfilling, and levelling. Add a tipper if soil has to leave the plot.",
      },
      {
        question: "Do your operators have experience with permit-to-work sites?",
        answer:
          "Our operators regularly work on industrial sites around Sohar and Liwa. Tell us the site's induction and permit rules so we can prepare before arrival.",
      },
    ],
    neighbours: ["shinas", "saham"],
    ports: ["sohar-port"],
    metaTitle: "Heavy Equipment Rental in Liwa",
    metaDescription:
      "Crane, forklift, JCB & excavator rental in Liwa near Sohar Port and Freezone, with operators. Same-day delivery possible. Call +968 7928 8727.",
    ...port,
  },
  {
    slug: "shinas",
    name: "Shinas",
    hubSlug: "sohar",
    governorate: "North Al Batinah",
    distanceKm: 55,
    delivery:
      "Shinas is roughly 55 km north of our yard along the Batinah coast, under an hour for a low-bed. Short hires are practical here, and we can usually deliver the same or the next day.",
    intro:
      "Shinas is the northernmost wilayat of the Batinah coast, home to the port at Shinas and the main road crossing toward the UAE. We supply excavators, JCBs, wheel loaders, tippers, cranes, forklifts, and boom loaders with operators for harbour works, housing, roads, and farms across the wilayat.",
    projects: [
      "Around the harbour, work comes from the fishing port and ferry facilities: maintenance lifts, moving materials across the quay, and the civil works that go with any harbour upgrade. Cranes and forklifts are the usual machines, booked for a day or a week at a time.",
      "Away from the sea, Shinas is growing. New residential plots, schools, and road links keep JCBs, excavators, and tippers busy, and the date farms inland call for land clearing, channel digging, and boundary work.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Foundations, drainage, and road works on the new plots and links being built across Shinas.",
      },
      {
        key: "crane",
        note: "Lifts at the harbour and on building projects, from offloading materials to setting precast and steel.",
      },
      {
        key: "wheel-loader",
        note: "Loading tippers and moving sand and aggregate on larger earthworks and road jobs.",
      },
      {
        key: "boom-loader",
        note: "Placing blocks and materials on upper floors of houses and schools without a crane.",
      },
    ],
    conditions:
      "Shinas is coastal and flat, with sandy soil and salty air that is hard on machines left outside. Harbour areas have their own entry rules and limited working space, so plan where the crane or forklift will set up. Heavy traffic toward the border crossing can slow deliveries at peak times.",
    places: ["Shinas town", "Shinas Port", "Shinas coastal villages", "Inland farms", "Road to the border crossing"],
    faqs: [
      {
        question: "Do you work at Shinas Port?",
        answer:
          "Yes. We supply cranes and forklifts for harbour work, subject to the port's entry rules. Our Shinas Port page explains what to send us before the job.",
      },
      {
        question: "How quickly can equipment reach Shinas?",
        answer:
          "Shinas is about 55 km from our Sohar yard, so a same-day or next-day delivery is usually possible. We confirm the time when you book.",
      },
      {
        question: "Which machine should I hire for a house build in Shinas?",
        answer:
          "Most house builds start with a JCB or an excavator for the foundations and a tipper for soil. Once the walls go up, a boom loader lifts blocks to the upper floor.",
      },
      {
        question: "Can I hire equipment for farm work in Shinas?",
        answer:
          "Yes. JCBs and excavators are hired for channels, land clearing, and boundary works on farms. Tell us the size of the area and the job.",
      },
    ],
    neighbours: ["liwa", "khasab"],
    ports: ["shinas-port"],
    metaTitle: "Heavy Equipment Rental in Shinas",
    metaDescription:
      "Equipment rental in Shinas: excavators, JCBs, cranes, forklifts & tippers with operators for harbour, housing & farm work. Call +968 7928 8727.",
    ...excavator,
  },
  {
    slug: "saham",
    name: "Saham",
    hubSlug: "sohar",
    governorate: "North Al Batinah",
    distanceKm: 30,
    delivery:
      "Saham is about 30 km south of Sohar by the expressway or the coastal road, well within a short drive of our yard. Same-day delivery is often possible, and daily hire is practical.",
    intro:
      "Saham lies just south of Sohar, a wilayat of farms, fishing villages, and fast-growing residential areas. We rent JCBs, excavators, wheel loaders, tippers, boom loaders, cranes, and forklifts with operators to builders, farm owners, and contractors throughout Saham.",
    projects: [
      "Residential building is the main source of work in Saham: villa and apartment foundations, compound walls, and the drainage and service trenches that come with new streets. Plots are often small, so compact machines that can dig, load, and level are in demand.",
      "Saham's farms bring a second kind of job. Owners hire machines to clear and level land, dig irrigation channels, and move soil or manure in bulk. These jobs are seasonal and often short, which suits daily hire from our nearby yard.",
    ],
    machines: [
      {
        key: "jcb",
        note: "The most hired machine in Saham, for villa foundations, trenches, and levelling on tight plots.",
      },
      {
        key: "tipper",
        note: "Moving soil off building plots and bringing sand, gravel, and fill onto farms and sites.",
      },
      {
        key: "boom-loader",
        note: "Lifting blocks and materials onto the upper floors of villas without a crane.",
      },
    ],
    conditions:
      "Most of Saham is flat, sandy ground with farmland between the villages. Narrow village roads can limit how close a low-bed gets to the plot, so tell us about access before delivery. Near the coast the soil is softer and wetter, which affects deep digs.",
    places: ["Saham town", "Coastal villages", "Inland farms", "New residential areas", "Batinah Expressway exits"],
    faqs: [
      {
        question: "Can I hire a JCB for one day in Saham?",
        answer:
          "Yes. Saham is close to our Sohar yard, so daily hire works well for short jobs such as digging a trench or levelling a plot.",
      },
      {
        question: "Do you deliver to farms in Saham?",
        answer:
          "Yes. Tell us how to reach the farm and whether the track is suitable for a trailer, and we will plan the delivery.",
      },
      {
        question: "What do I need for a villa foundation in Saham?",
        answer:
          "Usually a JCB or a small excavator to dig the footings, plus a tipper to remove the soil. We can book both together.",
      },
      {
        question: "Do your machines come with operators?",
        answer: "Yes. Every machine is supplied with an experienced operator or driver.",
      },
    ],
    neighbours: ["liwa", "al-khaburah"],
    metaTitle: "Heavy Equipment Rental in Saham",
    metaDescription:
      "JCB, excavator, tipper & boom loader rental in Saham with operators. Close to our Sohar yard, daily hire available. Call +968 7928 8727.",
    ...boomLoader,
  },
  {
    slug: "al-khaburah",
    name: "Al Khaburah",
    hubSlug: "sohar",
    governorate: "North Al Batinah",
    distanceKm: 65,
    delivery:
      "Al Khaburah is about 65 km south of our yard on the Batinah Expressway, roughly an hour by low-bed. Next-day delivery is usual, and the inland valleys need a quick check of the access road first.",
    intro:
      "Al Khaburah stretches from the Batinah coast up into the Hajar mountains, where the road inland follows Wadi Al Hawasinah. We supply excavators, JCBs, wheel loaders, tippers, boom loaders, and cranes with operators for housing, roads, farms, and wadi works across the wilayat.",
    projects: [
      "On the coastal plain, Al Khaburah's work is housing and farming: new plots, school and clinic buildings, farm channels, and the access roads between villages. These jobs are mostly earthmoving, with a boom loader or crane once structures go up.",
      "Inland, roads and flood protection drive demand. Works along the wadi route need excavators that can handle rock and gravel, wheel loaders to manage material, and tippers to move it, often on longer hires because of the distance into the valley.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Road widening, culverts, and flood protection along the wadi, where ground is rocky and mixed.",
      },
      {
        key: "wheel-loader",
        note: "Stockpiling and loading gravel and fill for road and wadi works.",
      },
      {
        key: "jcb",
        note: "Plots, utilities, and farm jobs in the coastal villages.",
      },
      {
        key: "tipper",
        note: "Hauling aggregate, fill, and spoil between site and stockpile.",
      },
    ],
    conditions:
      "The coastal half of Al Khaburah is flat farmland and sand; the inland half is mountain valley with rock, gravel, and wadi beds that can flood after rain. Low-bed access into the valleys needs checking, and wadi work is planned around the weather.",
    places: ["Al Khaburah town", "Coastal villages", "Wadi Al Hawasinah", "Inland villages", "Farms on the Batinah plain"],
    faqs: [
      {
        question: "Can your machines work in Wadi Al Hawasinah?",
        answer:
          "Yes. Excavators, loaders, and tippers are regularly hired for road and wadi works inland. Tell us the location so we can check the access road before delivery.",
      },
      {
        question: "Is next-day delivery possible in Al Khaburah?",
        answer:
          "Usually, yes. Al Khaburah is about an hour from our yard. We confirm the time when you book.",
      },
      {
        question: "What hire terms suit road works in Al Khaburah?",
        answer:
          "Weekly or monthly hire suits road and flood-protection projects. Daily hire is fine for short jobs on the coastal plain.",
      },
      {
        question: "Do you supply rock buckets or breakers?",
        answer:
          "Tell us about the ground when you ask for a quote. For rocky sites we will advise on the right bucket or attachment for the excavator.",
      },
    ],
    neighbours: ["saham", "suwaiq"],
    metaTitle: "Heavy Equipment Rental in Al Khaburah",
    metaDescription:
      "Excavator, wheel loader, JCB & tipper rental in Al Khaburah for roads, wadi works & housing, with operators. Call +968 7928 8727.",
    ...excavator,
  },
  {
    slug: "suwaiq",
    name: "Suwaiq",
    hubSlug: "sohar",
    governorate: "North Al Batinah",
    distanceKm: 95,
    delivery:
      "Suwaiq is about 95 km from our yard, on the southern edge of North Al Batinah. A low-bed covers it in well under two hours on the expressway, so next-day delivery is the norm.",
    intro:
      "Suwaiq is the southernmost wilayat of North Al Batinah and one of its busiest towns, with a fishing harbour, wide farmlands, and steady residential growth. We rent JCBs, excavators, wheel loaders, tippers, boom loaders, forklifts, and cranes with operators to contractors, traders, and farm owners in Suwaiq.",
    projects: [
      "Suwaiq's growth shows in its building sites: houses, shops, and mixed-use blocks along the main roads, each needing foundations, backfill, and material lifting. Contractors often hire a JCB and a tipper for groundworks, then switch to a boom loader for the structure.",
      "Trading and storage businesses in Suwaiq hire forklifts for unloading and stock moves, and the harbour and farms bring occasional lifting and earthmoving jobs. Because Suwaiq is on the expressway, it is also a convenient base for jobs that move along the coast.",
    ],
    machines: [
      {
        key: "jcb",
        note: "Groundworks for houses and shops, from footings to service trenches and backfill.",
      },
      {
        key: "boom-loader",
        note: "Placing blocks, steel, and materials at height as buildings rise.",
      },
      {
        key: "forklift",
        note: "3 ton forklifts for traders and stores unloading trucks and moving stock.",
      },
    ],
    conditions:
      "Suwaiq is flat and sandy, with farmland between built-up areas. In town, traffic and narrow plots matter more than the ground, so we plan delivery times and machine size around access. Summer heat means early starts on most sites.",
    places: ["Suwaiq town", "Suwaiq harbour", "Commercial roads", "New residential areas"],
    faqs: [
      {
        question: "Can I hire a forklift in Suwaiq for unloading?",
        answer:
          "Yes. A 3 ton forklift handles most truck unloading and stock moves. Hire it with our operator or for your licensed staff.",
      },
      {
        question: "How soon can you deliver to Suwaiq?",
        answer:
          "Usually the next day. Suwaiq is about 95 km from our yard on the expressway. Call to confirm availability.",
      },
      {
        question: "Do you supply machines for building projects in Suwaiq?",
        answer:
          "Yes. JCBs and excavators for foundations, tippers for soil and fill, and boom loaders or cranes for the structure.",
      },
      {
        question: "Can a machine stay on site for a month?",
        answer:
          "Yes. Monthly hire is common for building projects, and the operator stays with the machine for the hire.",
      },
    ],
    neighbours: ["al-khaburah", "al-musannah"],
    metaTitle: "Heavy Equipment Rental in Suwaiq",
    metaDescription:
      "JCB, excavator, forklift, boom loader & tipper rental in Suwaiq with operators. Next-day delivery from Sohar. Call +968 7928 8727.",
    ...forklift,
  },
  // ---------------------------------------------------------------- South Al Batinah
  {
    slug: "barka",
    name: "Barka",
    hubSlug: "south-al-batinah",
    governorate: "South Al Batinah",
    distanceKm: 150,
    delivery:
      "Barka is about 150 km from our Sohar yard down the Batinah Expressway, roughly two hours for a loaded low-bed. Next-day delivery is typical, and machines can be routed on to Muscat jobs nearby.",
    intro:
      "Barka is the busiest wilayat of South Al Batinah, close enough to Muscat that much of its land is turning into housing, with large power and water plants on its coast and farms inland. We supply excavators, JCBs, wheel loaders, tippers, cranes, forklifts, and boom loaders with operators across Barka.",
    projects: [
      "New residential areas are the biggest driver of equipment demand in Barka. Whole blocks of plots are being prepared at once, which means road formation, drainage, and service corridors alongside individual house foundations. Earthmoving machines on weekly or monthly hire are the norm.",
      "The coastal power and desalination plants bring a different kind of job: maintenance lifts, equipment change-outs, and material handling during planned shutdowns. These need cranes and heavy forklifts with documents ready for strict site entry.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Road formation, drainage, and service trenches across Barka's new residential areas.",
      },
      {
        key: "wheel-loader",
        note: "Loading tippers and spreading fill on large plot-preparation jobs.",
      },
      {
        key: "crane",
        note: "25 ton and 50 ton cranes for shutdown and maintenance lifts at coastal plants.",
      },
      {
        key: "tipper",
        note: "Carrying fill, sand, and spoil between plots, borrow areas, and disposal sites.",
      },
    ],
    conditions:
      "Barka's coast is flat sand with a shallow water table, while inland plots move onto firmer gravel. New subdivisions often have no finished roads, so tell us how a trailer reaches the plot. Plant sites need inductions and permits arranged before the machine arrives.",
    places: ["Barka town", "Coastal plant area", "New residential areas", "Inland farms", "Barka–Nakhal road"],
    faqs: [
      {
        question: "Do you deliver equipment to Barka?",
        answer:
          "Yes. Barka is about two hours from our yard on the expressway, so next-day delivery is typical. Tell us the plot location and access.",
      },
      {
        question: "Can you supply a crane for a plant shutdown in Barka?",
        answer:
          "Yes. Send the lift list, the dates, and the site's entry requirements. We will confirm the crane and prepare the documents in advance.",
      },
      {
        question: "What machines suit plot preparation in Barka?",
        answer:
          "An excavator or wheel loader with tippers for bulk earthworks, and a JCB for trenches and finishing. Book them together to keep one schedule.",
      },
      {
        question: "Do you offer monthly hire in Barka?",
        answer: "Yes. Monthly hire is common for subdivision and building projects, with the operator included.",
      },
    ],
    neighbours: ["al-musannah", "seeb"],
    metaTitle: "Heavy Equipment Rental in Barka",
    metaDescription:
      "Excavator, crane, wheel loader, JCB & tipper rental in Barka with operators, for housing, roads & plant work. Call +968 7928 8727.",
    ...excavator,
  },
  {
    slug: "al-musannah",
    name: "Al Musannah",
    hubSlug: "south-al-batinah",
    governorate: "South Al Batinah",
    distanceKm: 125,
    delivery:
      "Al Musannah is about 125 km from our yard, around an hour and a half on the Batinah Expressway. It is close enough for next-day delivery and for short hires to make sense.",
    intro:
      "Al Musannah sits on the coast between Suwaiq and Barka, with farmland, beachfront and tourism developments, and inland villages toward Wadi Al Maawil. We rent JCBs, excavators, wheel loaders, tippers, boom loaders, cranes, and forklifts with operators to contractors and landowners in Al Musannah.",
    projects: [
      "Coastal Al Musannah has seen resort, leisure, and residential development, and those projects need the full sequence of machines: earthworks first, then lifting for the structure, then landscaping and finishing.",
      "Inland, the work is farms and villages: clearing and levelling land, digging irrigation channels, building boundary walls, and connecting new houses to services. A JCB is often the only machine needed, with a tipper for spoil.",
    ],
    machines: [
      {
        key: "jcb",
        note: "Farm channels, land levelling, and house connections in the inland villages.",
      },
      {
        key: "boom-loader",
        note: "Placing materials on buildings and moving pallets on sandy coastal sites.",
      },
      {
        key: "excavator",
        note: "Foundations and bulk earthworks for larger coastal developments.",
      },
    ],
    conditions:
      "The coastal strip is soft sand, which favours tracked excavators and boom loaders over wheeled forklifts. Inland, farmland and gravel are easier going but village tracks can be narrow. Coastal humidity and salt mean machines need care on long hires.",
    places: ["Al Musannah coast", "Inland villages", "Farms", "Wadi Al Maawil road", "Expressway corridor"],
    faqs: [
      {
        question: "How long does delivery to Al Musannah take?",
        answer:
          "About an hour and a half from our Sohar yard. Next-day delivery is usually possible; call to confirm availability.",
      },
      {
        question: "Which machines work best on sand in Al Musannah?",
        answer:
          "Tracked excavators and boom loaders cope better on soft coastal sand than wheeled forklifts. Tell us the ground and we will suggest the right machine.",
      },
      {
        question: "Can I hire a JCB for farm work?",
        answer: "Yes. JCBs are often hired for channels, levelling, and land clearing on Al Musannah farms.",
      },
      {
        question: "Do you supply equipment for resort and leisure projects?",
        answer:
          "Yes. We can supply earthmoving machines first and lifting equipment later, all from one supplier.",
      },
    ],
    neighbours: ["suwaiq", "barka", "rustaq"],
    metaTitle: "Heavy Equipment Rental in Al Musannah",
    metaDescription:
      "JCB, excavator, boom loader & tipper rental in Al Musannah with operators, for coastal projects & farms. Call +968 7928 8727.",
    ...boomLoader,
  },
  {
    slug: "rustaq",
    name: "Rustaq",
    hubSlug: "south-al-batinah",
    governorate: "South Al Batinah",
    distanceKm: 160,
    delivery:
      "Rustaq is roughly 160 km from our yard, reached from the coast through Al Musannah. Allow about two and a half hours for a low-bed, and tell us the final access road, especially for sites up the wadis.",
    intro:
      "Rustaq is the administrative centre of South Al Batinah, an inland town at the foot of the Hajar mountains known for its fort and hot springs. We rent excavators, JCBs, wheel loaders, tippers, boom loaders, and cranes with operators for public buildings, roads, housing, and farm works in Rustaq and its villages.",
    projects: [
      "As the governorate's centre, Rustaq has steady public-sector building: offices, schools, health facilities, and the roads that serve them. These projects run for months and usually hire earthmoving equipment first, then boom loaders or a crane as the buildings rise.",
      "The villages around Rustaq are farming communities in the wadis, where work involves terraces, channels, retaining walls, and access tracks. Ground is rocky, access is tight, and a compact JCB or small excavator is often the right tool.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Foundations and road cuts in rocky ground, with a rock bucket where needed.",
      },
      {
        key: "boom-loader",
        note: "Lifting materials onto public and commercial buildings as they rise.",
      },
      {
        key: "jcb",
        note: "Compact enough for village tracks and farm terraces up the wadis.",
      },
      {
        key: "wheel-loader",
        note: "Stockpiling and loading on road projects and larger sites.",
      },
    ],
    conditions:
      "Rustaq sits where the plain meets the mountains, so ground ranges from gravel to solid rock. Wadi roads can close after heavy rain, and some village access is too narrow for a full-size low-bed. Summer heat is higher than on the coast.",
    places: ["Rustaq town", "Al Hazm", "Wadi villages", "Rustaq–Al Musannah road", "Mountain foothills"],
    faqs: [
      {
        question: "Do you deliver to Rustaq?",
        answer:
          "Yes. Rustaq is about two and a half hours from our yard. Send the site location and access details so we can plan the low-bed route.",
      },
      {
        question: "Can your excavators handle rock in Rustaq?",
        answer:
          "Yes, with the right bucket or attachment. Tell us the ground conditions and we will advise before the machine travels.",
      },
      {
        question: "What hire terms suit Rustaq projects?",
        answer:
          "Weekly and monthly hire for public building and road projects; shorter hire is possible for small jobs when planned ahead.",
      },
      {
        question: "Can a JCB reach farms in the wadis?",
        answer:
          "Usually, yes. A JCB is compact and travels on its own wheels for the last stretch where a trailer cannot go. We check the access first.",
      },
    ],
    neighbours: ["al-musannah", "barka"],
    metaTitle: "Heavy Equipment Rental in Rustaq",
    metaDescription:
      "Excavator, JCB, boom loader & wheel loader rental in Rustaq for public buildings, roads & wadi works. Call +968 7928 8727.",
    ...excavator,
  },
  // ---------------------------------------------------------------- Muscat
  {
    slug: "seeb",
    name: "Seeb",
    hubSlug: "muscat",
    governorate: "Muscat",
    distanceKm: 190,
    delivery:
      "Seeb is about 190 km from our Sohar yard and the first part of Muscat a low-bed reaches on the expressway, around two and a half hours. Next-day delivery is typical; city traffic sets the delivery window.",
    intro:
      "Seeb is Muscat's most populous wilayat, stretching from Al Mabelah and Al Khoudh to Al Hail and Mawaleh, with Muscat International Airport at its centre. We supply JCBs, excavators, boom loaders, cranes, forklifts, wheel loaders, and tippers with operators to builders and contractors across Seeb.",
    projects: [
      "Seeb is where much of Muscat's new housing is built. Villa plots, apartment blocks, and commercial strips along the main roads keep JCBs, excavators, and boom loaders in constant demand, usually on weekly or monthly hire for the length of the build.",
      "Commercial and logistics activity around the airport and the main highways brings warehouse fit-outs, offloading, and stock moves, which need forklifts and occasional crane lifts at short notice.",
    ],
    machines: [
      {
        key: "jcb",
        note: "Villa foundations, service trenches, and backfill on Seeb's residential plots.",
      },
      {
        key: "boom-loader",
        note: "Lifting blocks and materials to upper floors of villas and low-rise apartments.",
      },
      {
        key: "forklift",
        note: "Warehouse and showroom stock moves and truck unloading near the airport and highways.",
      },
    ],
    conditions:
      "Seeb's plots are mostly flat sand and gravel, with a shallow water table near the coast in Al Mawaleh and Al Hail. Busy roads and municipality rules on working hours affect when machines can be delivered, so we agree a delivery window in advance.",
    places: ["Al Mabelah", "Al Khoudh", "Al Hail", "Al Mawaleh", "Seeb town", "Airport area"],
    faqs: [
      {
        question: "Do you deliver equipment to Al Mabelah and Al Khoudh?",
        answer:
          "Yes. Both are part of our Seeb coverage. Send the plot location and we will agree a delivery window that avoids peak traffic.",
      },
      {
        question: "Which machine do I need for a villa in Seeb?",
        answer:
          "A JCB for footings, trenches, and backfill, and a boom loader once the walls go up. A tipper removes surplus soil.",
      },
      {
        question: "Can I hire a forklift near Muscat airport?",
        answer:
          "Yes. 3 ton forklifts for warehouse and store work, and heavier machines up to 18 ton for heavy items, with or without an operator.",
      },
      {
        question: "Is monthly hire available in Seeb?",
        answer: "Yes. Monthly hire is common for building projects, with the operator staying for the hire.",
      },
    ],
    neighbours: ["rusayl-industrial-estate", "barka"],
    metaTitle: "Heavy Equipment Rental in Seeb",
    metaDescription:
      "JCB, excavator, boom loader & forklift rental in Seeb: Al Mabelah, Al Khoudh, Al Hail & Mawaleh, with operators. Call +968 7928 8727.",
    ...boomLoader,
  },
  {
    slug: "rusayl-industrial-estate",
    name: "Rusayl Industrial Estate",
    hubSlug: "muscat",
    governorate: "Muscat",
    distanceKm: 200,
    delivery:
      "Rusayl Industrial Estate is about 200 km from our yard, near the start of the Muscat–Nizwa road, so low-beds reach it without crossing the city centre. Allow around two and a half hours; next-day delivery is usual.",
    intro:
      "Rusayl Industrial Estate was the first industrial estate in Oman and is still one of Muscat's main manufacturing areas, with factories, workshops, and warehouses. We supply 25 ton and 50 ton cranes, 3 to 18 ton forklifts, boom loaders, and earthmoving machines with operators to companies across the estate.",
    projects: [
      "Factories in Rusayl hire lifting equipment for installing and relocating production machinery, replacing plant items, and offloading heavy deliveries. These are often single lifts or short bookings that must fit around production schedules.",
      "Warehousing and new factory construction bring longer jobs: forklifts on monthly hire during busy periods, and excavators, tippers, and boom loaders for foundations and building work on new plots within the estate.",
    ],
    machines: [
      {
        key: "crane",
        note: "Machinery installation, plant replacement, and heavy offloading inside factories and yards.",
      },
      {
        key: "forklift",
        note: "3 ton machines for warehouses and up to 18 ton for heavy machinery and steel.",
      },
      {
        key: "boom-loader",
        note: "Placing materials on roofs and mezzanines during factory extensions.",
      },
    ],
    conditions:
      "The estate has good road access and firm, level plots, but factory interiors can be tight, with roof heights and floor loads that limit machine size. Most companies require machine documents and an operator ID at the gate, and some need lifting plans for work inside the plant.",
    places: ["Rusayl Industrial Estate", "Rusayl roundabout area", "Factory and warehouse plots", "Muscat–Nizwa road"],
    faqs: [
      {
        question: "Can I book a crane for a single lift in Rusayl?",
        answer:
          "Yes. Single lifts for machinery installation or offloading are common in Rusayl. Tell us the load, radius, and time window.",
      },
      {
        question: "Do you supply heavy forklifts for moving machinery?",
        answer:
          "Yes. Our forklifts go up to 18 ton for heavy machinery and steel. Share the weight and dimensions so we can confirm the right size.",
      },
      {
        question: "Will your crane fit inside our factory?",
        answer:
          "Send the door size, roof height, and floor details. If a crane cannot work inside, a heavy forklift or a lift from outside may be the answer.",
      },
      {
        question: "Can you provide documents for our gate?",
        answer:
          "Yes. We send machine documents and operator details before arrival. Let us know the company's requirements.",
      },
    ],
    neighbours: ["seeb", "al-amerat"],
    ports: ["port-sultan-qaboos", "mina-al-fahal"],
    metaTitle: "Equipment Rental Rusayl Industrial Estate",
    metaDescription:
      "Crane and 3–18 ton forklift rental in Rusayl Industrial Estate, Muscat, with operators. Single lifts to monthly hire. Call +968 7928 8727.",
    ...crane,
  },
  {
    slug: "al-amerat",
    name: "Al Amerat",
    hubSlug: "muscat",
    governorate: "Muscat",
    distanceKm: 250,
    delivery:
      "Al Amerat lies behind the coastal mountains, about 250 km from our yard. Low-beds take the main highway routes rather than the steep mountain road, so allow around three hours and plan delivery a day ahead.",
    intro:
      "Al Amerat is Muscat's fastest-growing inland wilayat, a valley behind the coastal mountains where new residential areas, roads, and light industry are spreading. We rent excavators, JCBs, wheel loaders, tippers, boom loaders, and cranes with operators to contractors and builders in Al Amerat.",
    projects: [
      "New housing is the main source of work in Al Amerat: whole neighbourhoods of villa plots with the roads, drainage, and services that go with them. Contractors often run several machines at once and book them for months.",
      "The valley also has workshops, yards, and quarry-related activity on its edges, which bring wheel loader and tipper work, and road links to Quriyat and the coast keep road construction teams busy.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Bulk earthworks, road formation, and drainage across new residential areas.",
      },
      {
        key: "wheel-loader",
        note: "Loading tippers and handling aggregate around yards and road works.",
      },
      {
        key: "jcb",
        note: "Footings, trenches, and backfill on individual villa plots.",
      },
      {
        key: "tipper",
        note: "Moving fill, rock, and spoil between plots and disposal areas.",
      },
    ],
    conditions:
      "Al Amerat is rocky, hilly ground, so excavators may need rock buckets and site levelling can mean breaking out rock. Summer heat in the valley is intense. Steep access roads limit low-bed routes, which we plan before delivery.",
    places: ["Al Amerat town", "New residential areas", "Industrial and workshop areas", "Amerat–Quriyat road"],
    faqs: [
      {
        question: "Do you deliver equipment to Al Amerat?",
        answer:
          "Yes. We plan the low-bed route to avoid the steepest roads and agree a delivery date in advance.",
      },
      {
        question: "Can your excavators break rock in Al Amerat?",
        answer:
          "Tell us the ground conditions. For hard rock we will advise on the right bucket or breaker before booking.",
      },
      {
        question: "Can I hire several machines for a subdivision?",
        answer:
          "Yes. Excavators, wheel loaders, JCBs, and tippers can be booked together on monthly terms with operators.",
      },
      {
        question: "Do you rent boom loaders in Al Amerat?",
        answer: "Yes. Boom loaders are hired for villa and apartment construction once the structure goes up.",
      },
    ],
    neighbours: ["rusayl-industrial-estate", "quriyat"],
    metaTitle: "Heavy Equipment Rental in Al Amerat",
    metaDescription:
      "Excavator, wheel loader, JCB & tipper rental in Al Amerat, Muscat, for housing & road works, with operators. Call +968 7928 8727.",
    ...excavator,
  },
  {
    slug: "quriyat",
    name: "Quriyat",
    hubSlug: "muscat",
    governorate: "Muscat",
    distanceKm: 310,
    delivery:
      "Quriyat is about 310 km from our yard, at the far eastern end of Muscat Governorate on the coastal highway to Sur. Allow around four hours by low-bed and book a day or two ahead.",
    intro:
      "Quriyat is a coastal wilayat at the eastern edge of Muscat Governorate, with a fishing town, farms, wadis, and the highway that continues to Sur. We supply excavators, JCBs, wheel loaders, tippers, cranes, and boom loaders with operators for roads, coastal works, housing, and farms in Quriyat.",
    projects: [
      "Roads and coastal works are a large part of the demand in Quriyat: highway maintenance, wadi crossings, flood protection, and harbour improvements, all of which need excavators, loaders, and tippers on longer hires.",
      "In town and in the villages, builders hire JCBs and boom loaders for houses and community buildings, and farm owners hire machines for land preparation and channels.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Wadi crossings, flood protection, and road works in mixed and rocky ground.",
      },
      {
        key: "tipper",
        note: "Hauling rock and fill for road and coastal works.",
      },
      {
        key: "jcb",
        note: "House foundations, farms, and utility work in Quriyat town and villages.",
      },
    ],
    conditions:
      "Quriyat mixes a flat coastal plain with mountain wadis that flood after heavy rain. Coastal sites are salty and humid; inland sites are rocky. Several wadi routes cross the highway, so we check the road and weather before moving machines.",
    places: ["Quriyat town", "Coastal villages", "Inland wadis", "Muscat–Sur highway", "Farms"],
    faqs: [
      {
        question: "Do you cover Quriyat from Sohar?",
        answer:
          "Yes. Quriyat is about four hours from our yard by low-bed. We book delivery a day or two ahead and suit weekly or monthly hire.",
      },
      {
        question: "What equipment is used for wadi works in Quriyat?",
        answer:
          "Excavators to shape channels and place rock, wheel loaders to manage material, and tippers to haul it. Book them together for one schedule.",
      },
      {
        question: "Can you supply machines for harbour work?",
        answer:
          "Yes. Cranes, excavators, and tippers can be supplied for harbour and coastal works, subject to the site's entry rules.",
      },
      {
        question: "Is short-term hire possible in Quriyat?",
        answer:
          "Weekly hire is the practical minimum for most machines because of the distance. Shorter jobs are possible when a machine is already nearby.",
      },
    ],
    neighbours: ["al-amerat", "sur"],
    metaTitle: "Heavy Equipment Rental in Quriyat",
    metaDescription:
      "Excavator, JCB, tipper & crane rental in Quriyat for roads, wadi & coastal works, with operators. Call +968 7928 8727.",
    ...excavator,
  },
  // ---------------------------------------------------------------- Ad Dakhiliyah
  {
    slug: "bahla",
    name: "Bahla",
    hubSlug: "nizwa",
    governorate: "Ad Dakhiliyah",
    delivery:
      "Bahla is west of Nizwa on the road to Ibri, a planned inland delivery of around four to five hours by low-bed from our Sohar yard. We book Bahla jobs a few days ahead and favour weekly or monthly hire.",
    intro:
      "Bahla is a historic oasis town west of Nizwa, known for its UNESCO-listed fort, its pottery, and nearby Jabrin castle. We rent excavators, JCBs, wheel loaders, tippers, boom loaders, and cranes with operators for public buildings, housing, roads, and farm works around Bahla.",
    projects: [
      "Bahla is growing beyond its old town: new housing areas, schools, and government buildings, plus the road and drainage works that serve them. These are the projects that hire earthmoving machines first and boom loaders or cranes as the buildings go up.",
      "Work near the historic sites and old falaj channels has to be done carefully, with smaller machines and agreed access routes. Farm owners in the oasis also hire JCBs for channels, walls, and land preparation.",
    ],
    machines: [
      {
        key: "jcb",
        note: "Compact enough for oasis lanes and farm plots, and versatile for footings and channels.",
      },
      {
        key: "excavator",
        note: "Foundations and road works on new housing and public building sites.",
      },
      {
        key: "boom-loader",
        note: "Placing blocks and materials on schools, offices, and houses.",
      },
    ],
    conditions:
      "Bahla is inland and hot, with gravel plains, rocky ground, and narrow lanes through the oasis. Sites near heritage areas and falaj channels may restrict machine size and digging, so share any restrictions before we choose the machine.",
    places: ["Bahla town", "Jabrin", "Bahla oasis farms", "New residential areas", "Nizwa–Ibri road"],
    faqs: [
      {
        question: "Do you deliver equipment to Bahla?",
        answer:
          "Yes. Bahla is a planned inland delivery from Sohar. Send the site location and start date a few days ahead so we can schedule the low-bed.",
      },
      {
        question: "Can you supply small machines for work in the oasis?",
        answer:
          "Yes. A JCB or small excavator suits narrow lanes and farm plots. Tell us the access width and any restrictions.",
      },
      {
        question: "What hire terms work for Bahla?",
        answer: "Weekly and monthly hire, because transport from Sohar is spread over the job.",
      },
      {
        question: "Can I hire machines in Bahla and Nizwa on the same booking?",
        answer: "Yes. Machines can move between nearby sites, which keeps transport costs down.",
      },
    ],
    neighbours: ["izki", "ibri"],
    metaTitle: "Heavy Equipment Rental in Bahla",
    metaDescription:
      "JCB, excavator, boom loader & tipper rental in Bahla and Jabrin with operators. Planned delivery from Sohar. Call +968 7928 8727.",
    ...boomLoader,
  },
  {
    slug: "izki",
    name: "Izki",
    hubSlug: "nizwa",
    governorate: "Ad Dakhiliyah",
    delivery:
      "Izki sits on the Muscat–Nizwa highway, so low-beds reach it on the main road through Muscat, around four hours from our Sohar yard. Delivery is planned a day or two ahead.",
    intro:
      "Izki is one of Oman's oldest towns, on the highway between Muscat and Nizwa, surrounded by farms and growing residential areas. We supply excavators, JCBs, wheel loaders, tippers, boom loaders, cranes, and forklifts with operators for building, road, and farm work in Izki.",
    projects: [
      "Being on the main highway makes Izki a natural location for workshops, stores, and small industry, which hire forklifts and occasional crane lifts. Road improvements and service connections along the highway corridor add earthmoving work.",
      "Residential growth on the edges of town brings villa and apartment construction, and the farms around the old quarter hire JCBs for land and channel work.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Road, drainage, and foundation work along the highway corridor and new plots.",
      },
      {
        key: "forklift",
        note: "Unloading and stock moves at stores and workshops on the highway.",
      },
      {
        key: "jcb",
        note: "Farm work and smaller building jobs in and around the old town.",
      },
    ],
    conditions:
      "Izki is inland, with gravel plains, rocky outcrops, and summer temperatures well above the coast. The highway gives good access to most sites, but older parts of town have narrow lanes, so tell us about access before delivery.",
    places: ["Izki town", "Old quarter", "Highway corridor", "Farms", "New residential areas"],
    faqs: [
      {
        question: "How far ahead should I book for Izki?",
        answer:
          "A day or two for most machines. Izki is on the main highway, which makes the delivery straightforward to plan.",
      },
      {
        question: "Do you rent forklifts in Izki?",
        answer: "Yes. 3 ton forklifts for stores and workshops, and heavier sizes up to 18 ton for heavy items.",
      },
      {
        question: "Can I hire a JCB for farm work in Izki?",
        answer: "Yes. JCBs are hired for channels, walls, and land preparation on farms around Izki.",
      },
      {
        question: "Do you supply operators?",
        answer: "Yes. Every machine comes with an experienced operator or driver.",
      },
    ],
    neighbours: ["samail", "bahla"],
    metaTitle: "Heavy Equipment Rental in Izki",
    metaDescription:
      "Excavator, JCB, forklift & tipper rental in Izki on the Muscat–Nizwa highway, with operators. Call +968 7928 8727.",
    ...forklift,
  },
  {
    slug: "samail",
    name: "Samail",
    hubSlug: "nizwa",
    governorate: "Ad Dakhiliyah",
    delivery:
      "Samail is the first major town on the highway from Muscat into the interior, roughly three and a half hours from our Sohar yard by low-bed. Next-day or two-day delivery is typical.",
    intro:
      "Samail lies in the gap between the western and eastern Hajar mountains, on the main highway from Muscat to Nizwa, with date farms, villages, and an industrial area. We rent cranes, forklifts, boom loaders, excavators, JCBs, wheel loaders, and tippers with operators in Samail.",
    projects: [
      "Samail's industrial area brings factory and warehouse work: installing machinery, offloading deliveries, and moving stock, which call for cranes and forklifts on short bookings. New industrial plots also need foundations and site preparation.",
      "Along the valley, the work is roads, flood protection, and housing, plus farm works among the date plantations that line the wadi.",
    ],
    machines: [
      {
        key: "crane",
        note: "Machinery installation and heavy offloading at factories in Samail's industrial area.",
      },
      {
        key: "forklift",
        note: "Warehouse and yard work for manufacturers and traders.",
      },
      {
        key: "excavator",
        note: "Site preparation, roads, and flood-protection works along the valley.",
      },
    ],
    conditions:
      "Samail is a mountain valley: rocky slopes, gravel wadi beds, and farmland on the valley floor. Heavy rain can bring the wadi down quickly, so work near it is planned around the weather. The highway gives easy low-bed access to most of the wilayat.",
    places: ["Samail town", "Samail industrial area", "Wadi villages", "Date farms", "Muscat–Nizwa highway"],
    faqs: [
      {
        question: "Do you supply cranes in Samail?",
        answer:
          "Yes. Our 25 ton and 50 ton cranes are hired for factory installations and offloading. Send the load and radius to confirm the size.",
      },
      {
        question: "How quickly can equipment reach Samail?",
        answer:
          "Usually the next day or the day after. Samail is on the main highway from Muscat, which keeps delivery simple.",
      },
      {
        question: "Can you work near the wadi?",
        answer:
          "Yes, with planning. Tell us the location and we will schedule around the weather and check access to the wadi bed.",
      },
      {
        question: "Do you offer monthly hire in Samail?",
        answer: "Yes, for factories, building projects, and road works, with operators included.",
      },
    ],
    neighbours: ["izki", "al-amerat"],
    metaTitle: "Heavy Equipment Rental in Samail",
    metaDescription:
      "Crane, forklift, excavator & JCB rental in Samail and its industrial area, with operators. Call +968 7928 8727.",
    ...crane,
  },
  // ---------------------------------------------------------------- Ad Dhahirah
  {
    slug: "yanqul",
    name: "Yanqul",
    hubSlug: "ibri",
    governorate: "Ad Dhahirah",
    delivery:
      "Yanqul is an inland wilayat between Ibri and Al Buraimi, a planned delivery from our Sohar yard of a few hours by low-bed. Book a few days ahead; machines for Yanqul usually stay on weekly or monthly hire.",
    intro:
      "Yanqul is a mountain-ringed wilayat of Ad Dhahirah, north of Ibri, with villages, farms, and mining and quarrying in the surrounding hills. We supply excavators, wheel loaders, tippers, JCBs, and boom loaders with operators for roads, quarries, farms, and building projects in Yanqul.",
    projects: [
      "Road works connecting Yanqul to Ibri, Dhank, and the villages around it create steady demand for excavators, wheel loaders, and tippers, often booked together for the length of a contract.",
      "Quarry and mining activity in the hills needs wheel loaders to load trucks and excavators to work the face, while the villages hire JCBs and boom loaders for houses, farms, and public buildings.",
    ],
    machines: [
      {
        key: "wheel-loader",
        note: "Loading trucks and managing stockpiles at quarries and on road jobs.",
      },
      {
        key: "excavator",
        note: "Road cuts, drainage, and quarry work in rocky ground.",
      },
      {
        key: "tipper",
        note: "Hauling aggregate, rock, and fill between quarries, stockpiles, and sites.",
      },
    ],
    conditions:
      "Yanqul is hilly and rocky, with gravel plains between the mountains and wadis that flood after storms. Machines here work hard: rock buckets, good tyres, and planned servicing matter on long hires.",
    places: ["Yanqul town", "Mountain villages", "Quarry areas", "Ibri–Yanqul road", "Farms"],
    faqs: [
      {
        question: "Do you deliver equipment to Yanqul?",
        answer:
          "Yes. Yanqul is a planned inland delivery from Sohar. Send the site location and start date a few days ahead.",
      },
      {
        question: "Can your wheel loaders work at a quarry?",
        answer:
          "Yes. Wheel loaders are often hired for quarry loading and stockpile work, with an operator, on monthly terms.",
      },
      {
        question: "What hire length suits Yanqul?",
        answer: "Weekly or monthly, because the transport cost is spread across the hire.",
      },
      {
        question: "Can you send several machines together?",
        answer:
          "Yes. An excavator, a wheel loader, and tippers can travel together and work as one earthmoving package.",
      },
    ],
    neighbours: ["ibri", "al-buraimi"],
    metaTitle: "Heavy Equipment Rental in Yanqul",
    metaDescription:
      "Wheel loader, excavator, tipper & JCB rental in Yanqul for roads, quarries & farms, with operators. Call +968 7928 8727.",
    ...excavator,
  },
  // ---------------------------------------------------------------- North Ash Sharqiyah
  {
    slug: "al-mudaybi",
    name: "Al Mudaybi",
    hubSlug: "ibra",
    governorate: "North Ash Sharqiyah",
    delivery:
      "Al Mudaybi is reached from Sohar through Muscat and inland, a planned move of around four to five hours by low-bed. We schedule deliveries a few days ahead and favour longer hires.",
    intro:
      "Al Mudaybi is the largest wilayat of North Ash Sharqiyah by area, taking in Sinaw with its well-known souq, Samad Ash Shan, and wide stretches of gravel plain and farmland. We rent excavators, JCBs, wheel loaders, tippers, boom loaders, and cranes with operators across Al Mudaybi.",
    projects: [
      "Distances between Al Mudaybi's towns are long, so road construction and maintenance are a major source of work, along with the drainage and culverts that protect the roads from wadi floods.",
      "In Sinaw, Al Mudaybi town, and the villages, the work is housing, shops, public buildings, and farms, which hire JCBs and boom loaders for building and excavators for groundworks.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Road works, culverts, and foundations across the wilayat.",
      },
      {
        key: "tipper",
        note: "Long-distance hauling of aggregate and fill for road projects.",
      },
      {
        key: "jcb",
        note: "Housing, shops, and farm work in Sinaw and the villages.",
      },
      {
        key: "boom-loader",
        note: "Placing materials on public buildings and houses.",
      },
    ],
    conditions:
      "Al Mudaybi is mostly gravel plain with rocky hills and wadis, and the sands begin to the south-east. Long distances between sites mean planned servicing and fuel logistics on longer hires. Summer heat is intense.",
    places: ["Al Mudaybi town", "Sinaw", "Samad Ash Shan", "Village farms", "Inland roads"],
    faqs: [
      {
        question: "Do you deliver equipment to Sinaw?",
        answer: "Yes. Sinaw is part of our Al Mudaybi coverage. Send the site location and dates so we can plan the delivery.",
      },
      {
        question: "What equipment is used for road works in Al Mudaybi?",
        answer:
          "Excavators, wheel loaders, and tippers together, often with a JCB for culverts and finishing.",
      },
      {
        question: "What hire terms suit Al Mudaybi?",
        answer: "Weekly and monthly hire, so the transport from Sohar is spread across the job.",
      },
      {
        question: "Do your operators stay with the machine?",
        answer: "Yes. Operators stay for the length of the hire.",
      },
    ],
    neighbours: ["ibra", "izki"],
    metaTitle: "Heavy Equipment Rental in Al Mudaybi",
    metaDescription:
      "Excavator, JCB, tipper & boom loader rental in Al Mudaybi and Sinaw, with operators. Planned delivery. Call +968 7928 8727.",
    ...excavator,
  },
  // ---------------------------------------------------------------- South Ash Sharqiyah
  {
    slug: "jalan-bani-bu-ali",
    name: "Jalan Bani Bu Ali",
    hubSlug: "sur",
    governorate: "South Ash Sharqiyah",
    delivery:
      "Jalan Bani Bu Ali is south of Sur and inland from the Al Ashkharah coast, one of the longer moves from our Sohar yard — a full day by low-bed through Muscat. Hires here are planned well ahead and run for weeks or months.",
    intro:
      "Jalan Bani Bu Ali is an inland wilayat of South Ash Sharqiyah, south of Sur, with farming villages, sand and gravel plains, and roads toward the Al Ashkharah coast. We supply excavators, wheel loaders, tippers, JCBs, and boom loaders with operators for roads, farms, and building work in Jalan Bani Bu Ali.",
    projects: [
      "Roads linking Jalan Bani Bu Ali, Jalan Bani Bu Hassan, and the coast need earthworks crews of excavators, wheel loaders, and tippers, along with culverts and drainage to handle wadi floods.",
      "In the villages, farms hire machines for land preparation and channels, and new houses, schools, and public buildings need JCBs and boom loaders.",
    ],
    machines: [
      {
        key: "wheel-loader",
        note: "Moving sand and gravel and loading tippers on road and land works.",
      },
      {
        key: "excavator",
        note: "Road formation, culverts, and foundations.",
      },
      {
        key: "jcb",
        note: "Farm work and smaller building jobs in the villages.",
      },
    ],
    conditions:
      "Ground here is sand and gravel plain, with soft sand in places that limits wheeled machines. The heat and long distances mean planned maintenance and fuel supply on long hires. Wadis can flood across roads after storms.",
    places: ["Jalan Bani Bu Ali town", "Jalan Bani Bu Hassan", "Village farms", "Road to Al Ashkharah"],
    faqs: [
      {
        question: "Do you deliver to Jalan Bani Bu Ali?",
        answer:
          "Yes, for planned hires. It is a full day's move from Sohar, so tell us your start date as early as possible.",
      },
      {
        question: "Can machines work on the soft sand?",
        answer:
          "Tracked excavators and wheel loaders cope better than wheeled forklifts. Tell us the ground and we will recommend the machine.",
      },
      {
        question: "What is the usual hire length?",
        answer: "Several weeks or months, so the transport cost is spread across the job.",
      },
      {
        question: "Can you send a full earthworks crew?",
        answer: "Yes. Excavators, wheel loaders, JCBs, and tippers with operators can travel and work together.",
      },
    ],
    neighbours: ["sur", "al-mudaybi"],
    metaTitle: "Equipment Rental in Jalan Bani Bu Ali",
    metaDescription:
      "Excavator, wheel loader, JCB & tipper rental in Jalan Bani Bu Ali for roads, farms & building, with operators. Call +968 7928 8727.",
    ...excavator,
  },
  // ---------------------------------------------------------------- Al Wusta
  {
    slug: "haima",
    name: "Haima",
    hubSlug: "duqm",
    governorate: "Al Wusta",
    distanceKm: 700,
    delivery:
      "Haima is roughly 700 km from our Sohar yard by way of Nizwa and the Nizwa–Salalah road, at least a day's drive for a low-bed. Every Haima hire is planned in advance and runs for weeks or months.",
    intro:
      "Haima is the administrative centre of Al Wusta, a desert town on the long highway between Nizwa and Salalah that serves the oil and gas fields around it. We supply excavators, wheel loaders, tippers, cranes, forklifts, and boom loaders with operators for project hire in and around Haima.",
    projects: [
      "Work around Haima is tied to the oil and gas fields and the roads that serve them: site preparation, access tracks, camps, and yards, with cranes and forklifts for materials and equipment at bases and stores.",
      "In the town, public buildings, housing, and road maintenance on the highway add earthmoving and lifting jobs, usually booked for long periods because of the distance.",
    ],
    machines: [
      {
        key: "wheel-loader",
        note: "Site preparation, access tracks, and stockpile work in the desert.",
      },
      {
        key: "crane",
        note: "Lifting at yards, camps, and facilities, planned around the long move.",
      },
      {
        key: "forklift",
        note: "Handling materials and equipment at bases and stores.",
      },
    ],
    conditions:
      "Haima is flat open desert with extreme summer heat, wind-blown sand, and long distances to workshops. Machines need planned servicing and spares on site, and oil and gas facilities have their own entry and safety requirements.",
    places: ["Haima town", "Nizwa–Salalah road", "Desert camps and yards", "Oil and gas field areas"],
    faqs: [
      {
        question: "Do you supply equipment to Haima?",
        answer:
          "Yes, for planned project hire. Haima is roughly 700 km from Sohar, so we agree the move and the hire length in advance.",
      },
      {
        question: "Can your machines work at oil and gas sites?",
        answer:
          "Subject to each site's rules. We supply machine documents and operator details; tell us the entry and safety requirements early.",
      },
      {
        question: "How long should I hire for in Haima?",
        answer: "Weeks or months. Short hires don't make sense with the transport involved.",
      },
      {
        question: "Can machines move on to Duqm after Haima?",
        answer: "Yes. Planning several jobs in Al Wusta together keeps transport costs down.",
      },
    ],
    neighbours: ["duqm", "thumrait"],
    ports: ["duqm-port"],
    metaTitle: "Heavy Equipment Rental in Haima",
    metaDescription:
      "Project equipment hire in Haima, Al Wusta: wheel loaders, cranes, forklifts & excavators with operators. Call +968 7928 8727.",
    ...crane,
  },
  // ---------------------------------------------------------------- Dhofar
  {
    slug: "thumrait",
    name: "Thumrait",
    hubSlug: "salalah",
    governorate: "Dhofar",
    distanceKm: 1100,
    delivery:
      "Thumrait is roughly 1,100 km from our Sohar yard on the Nizwa–Salalah road, about 80 km short of Salalah. Moves this long take more than a day and are planned well in advance, usually alongside Salalah work.",
    intro:
      "Thumrait sits on the gravel plateau north of the Dhofar mountains, the last town on the highway before it drops down to Salalah. We supply excavators, wheel loaders, tippers, cranes, forklifts, and boom loaders with operators for planned project hire in Thumrait and the desert to its north.",
    projects: [
      "Thumrait's work comes from road and infrastructure projects on the Salalah highway, logistics and storage facilities, and the desert sites that rely on it as a supply point.",
      "Housing and public buildings in the town add smaller earthmoving and lifting jobs, often combined with machines already working on Salalah projects to share transport.",
    ],
    machines: [
      {
        key: "excavator",
        note: "Road and infrastructure works on the plateau.",
      },
      {
        key: "wheel-loader",
        note: "Earthworks and stockpile management on road and desert sites.",
      },
      {
        key: "forklift",
        note: "Moving materials at logistics yards and stores.",
      },
    ],
    conditions:
      "Thumrait is open gravel desert, very hot in summer and outside the monsoon belt that wets Salalah. Long distances to workshops mean planned maintenance and spares on site. Some sites have restricted access that needs arranging in advance.",
    places: ["Thumrait town", "Salalah highway", "Desert sites to the north", "Logistics yards"],
    faqs: [
      {
        question: "Do you deliver to Thumrait?",
        answer:
          "Yes, for planned project hire. It is roughly 1,100 km from Sohar, so we plan the move together with Salalah work where we can.",
      },
      {
        question: "Can machines move between Salalah and Thumrait?",
        answer: "Yes. Thumrait is about 80 km from Salalah, so machines can work both on one hire.",
      },
      {
        question: "How long should a Thumrait hire be?",
        answer: "Several weeks or months, so the transport is spread across the work.",
      },
      {
        question: "Do your operators travel with the machines?",
        answer: "Yes. Operators go with the machines and stay for the hire.",
      },
    ],
    neighbours: ["salalah", "haima"],
    ports: ["salalah-port"],
    metaTitle: "Heavy Equipment Rental in Thumrait",
    metaDescription:
      "Project equipment hire in Thumrait, Dhofar: excavators, wheel loaders, forklifts & cranes with operators. Call +968 7928 8727.",
    ...excavator,
  },
]

export function getAreaBySlug(slug: string) {
  return areas.find((area) => area.slug === slug)
}

export function areasForHub(hubSlug: string) {
  return areas.filter((area) => area.hubSlug === hubSlug)
}

export function areaHref(area: AreaPage) {
  return `/locations/${area.slug}`
}
