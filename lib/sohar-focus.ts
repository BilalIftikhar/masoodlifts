import type { Faq } from "@/lib/faqs"
import type { EquipmentKey } from "@/lib/equipment"

/**
 * Sohar is the yard's home city and the one place where the equipment × city
 * pages rank (Search Console, Oct–Nov 2026: Boom Loader Rental Sohar at 2.5,
 * JCB Rental Sohar at 4.1, Crane Rental Sohar at 4.6). The other cities' grid
 * pages stay noindexed; the Sohar ones are indexed and carry this extra,
 * Sohar-only copy so they are not near-copies of each other or of other cities.
 *
 * Each entry names where in Sohar the machine is used, so the page also links
 * to the Sohar neighbourhood pages in lib/areas.ts.
 */
export type SoharFocus = {
  /** Shown under "Where in Sohar" on the service page. */
  paragraphs: string[]
  /** Sohar area slugs (under /locations) most relevant to this machine. */
  areaSlugs: string[]
  faqs: Faq[]
  metaDescription: string
}

/** Every Sohar neighbourhood and industrial-area page, nearest the yard first. */
export const soharAreaSlugs = [
  "sohar-industrial-estate",
  "falaj-al-qabail",
  "sohar-city-centre",
  "al-hambar",
  "al-tareef",
  "majis",
  "sohar-freezone",
] as const

export const soharFocus: Record<EquipmentKey, SoharFocus> = {
  crane: {
    paragraphs: [
      "Most crane jobs in Sohar are industrial: installing machinery in Sohar Industrial Estate, lifts at plants and warehouses in Majis and the Freezone, and offloading heavy deliveries from trailers. In the city centre and residential areas such as Al Hambar and Al Tareef, the work is lighter but tighter — water tanks, rooftop units, precast stairs, and steel for villas and shops, often set up in a narrow street.",
      "Because the yard is in Sohar Industrial Estate, a 25 or 50 ton crane for a Sohar job usually travels a few kilometres. Same-day lifts are often possible when a crane is free, and short lifts that would not pay for a long trip still make sense here.",
    ],
    areaSlugs: ["sohar-industrial-estate", "majis", "sohar-freezone", "sohar-city-centre"],
    faqs: [
      {
        question: "Can I hire a crane for a single lift in Sohar?",
        answer:
          "Yes. Our yard is in Sohar, so short and single-lift hires are practical for Sohar sites. Send the weight, radius, and a photo of the set-up area.",
      },
      {
        question: "Which crane sizes are available in Sohar?",
        answer: "25 ton and 50 ton mobile cranes, both supplied with an operator.",
      },
    ],
    metaDescription:
      "25 & 50 ton crane rental in Sohar with operator — Industrial Estate, Majis, Freezone, city centre & Al Hambar. Same-day lifts from our Sohar yard. +968 7928 8727.",
  },
  tipper: {
    paragraphs: [
      "Tippers in Sohar haul soil off new plots in Al Hambar, Al Tareef, and Falaj Al Qabail, and bring sand and aggregate in from the crushers and quarries inland. On industrial sites in the estate and the Freezone they move fill for new plots and take away site waste to the approved disposal point.",
      "Tell us whether the truck carries soil out or material in, the expected loads per day, and the haul route. Short runs inside Sohar let one tipper make many trips a day, so fewer trucks are often enough.",
    ],
    areaSlugs: ["falaj-al-qabail", "al-hambar", "al-tareef", "sohar-industrial-estate"],
    faqs: [
      {
        question: "Do tippers come with a driver in Sohar?",
        answer: "Yes. Every tipper is supplied with a driver.",
      },
      {
        question: "Can I hire a tipper for one day in Sohar?",
        answer: "Yes. Daily tipper hire is practical inside Sohar because the trucks start from our yard in the city.",
      },
    ],
    metaDescription:
      "Tipper truck rental in Sohar with driver for soil removal, sand & aggregate delivery — Al Hambar, Al Tareef, Falaj Al Qabail & industrial sites. +968 7928 8727.",
  },
  "boom-loader": {
    paragraphs: [
      "Boom loaders are the most-hired machine on Sohar's villa and low-rise sites in Al Hambar, Al Tareef, and Falaj Al Qabail, lifting pallets of blocks and cement to upper floors and roofs without a crane. On factory sheds in the industrial estate they place cladding and roof sheets.",
      "A boom loader can usually be on a Sohar site the same day it is booked, and daily hire works well for one floor's block delivery at a time.",
    ],
    areaSlugs: ["al-hambar", "al-tareef", "falaj-al-qabail", "sohar-industrial-estate"],
    faqs: [
      {
        question: "Is a boom loader the same as a telehandler?",
        answer:
          "Yes. A boom loader is a telehandler: a rough-terrain machine with a telescopic arm that lifts materials on forks to height.",
      },
      {
        question: "Can I hire a boom loader for one day in Sohar?",
        answer: "Yes. Daily boom loader hire with an operator is available across Sohar.",
      },
    ],
    metaDescription:
      "Boom loader (telehandler) rental in Sohar with operator — blocks & materials to upper floors in Al Hambar, Al Tareef, Falaj Al Qabail. Same-day. +968 7928 8727.",
  },
  forklift: {
    paragraphs: [
      "Forklifts from 3 to 18 ton work across Sohar's industrial areas: factories in Sohar Industrial Estate, warehouses in the Freezone, and yards in Majis. In the city centre, smaller forklifts unload containers for shops, showrooms, and building-material suppliers.",
      "From our yard on the estate, a forklift for a Sohar factory or warehouse can often arrive within hours. Monthly hire is common for warehouses; daily hire covers a breakdown or a single container.",
    ],
    areaSlugs: ["sohar-industrial-estate", "sohar-freezone", "majis", "sohar-city-centre"],
    faqs: [
      {
        question: "Which forklift sizes can I rent in Sohar?",
        answer: "Forklifts from 3 ton up to 18 ton, with or without an operator.",
      },
      {
        question: "Do you rent forklifts monthly in Sohar?",
        answer: "Yes. Monthly forklift hire is common for Sohar warehouses and factories.",
      },
    ],
    metaDescription:
      "Forklift rental in Sohar from 3 to 18 ton — factories, Freezone warehouses, Majis & city shops. Daily or monthly, with operator. Call +968 7928 8727.",
  },
  excavator: {
    paragraphs: [
      "Excavators in Sohar dig factory foundations and machine bases in Sohar Industrial Estate, basements and footings in Al Hambar and Falaj Al Qabail, and utility trenches across the city. Near the sea in Al Tareef and the Corniche, groundwater can be shallow, so deep digs may need dewatering.",
      "Tell us the dig depth, the area, and where the soil goes. We can send tippers with the excavator so spoil leaves the plot as it is dug.",
    ],
    areaSlugs: ["sohar-industrial-estate", "al-hambar", "falaj-al-qabail", "al-tareef"],
    faqs: [
      {
        question: "Can you supply tippers with an excavator in Sohar?",
        answer: "Yes. Excavators and tippers can be booked together so soil is removed as it is dug.",
      },
      {
        question: "Is groundwater a problem when digging in Sohar?",
        answer:
          "Near the coast it can be. Tell us the dig depth and location; your engineer decides whether dewatering is needed.",
      },
    ],
    metaDescription:
      "Excavator rental in Sohar with operator — foundations, basements & trenches in the Industrial Estate, Al Hambar, Falaj Al Qabail & Al Tareef. +968 7928 8727.",
  },
  jcb: {
    paragraphs: [
      "The JCB backhoe loader is the everyday machine on Sohar villa plots in Al Hambar, Al Tareef, and Falaj Al Qabail: footings, backfill, levelling, and the trench for the water or power connection. In the city centre it handles small utility repairs where a bigger excavator would not fit.",
      "Most JCB jobs in Sohar are a day or a few days, and because the machine starts from our yard in the city, daily hire is practical.",
    ],
    areaSlugs: ["al-hambar", "al-tareef", "falaj-al-qabail", "sohar-city-centre"],
    faqs: [
      {
        question: "Can I hire a JCB for one day in Sohar?",
        answer: "Yes. Daily JCB hire with an operator is available across Sohar.",
      },
      {
        question: "Is a JCB enough for a villa plot in Sohar?",
        answer:
          "For most villa footings, backfill, and levelling, yes. Deep basements or rock may need an excavator.",
      },
    ],
    metaDescription:
      "JCB backhoe loader rental in Sohar with operator — villa plots in Al Hambar, Al Tareef & Falaj Al Qabail, trenches & levelling. Hire by the day. +968 7928 8727.",
  },
  "wheel-loader": {
    paragraphs: [
      "Wheel loaders in Sohar load tippers on earthworks, spread fill on new plots in the industrial estate and Freezone, and keep stockpiles moving at block factories, batching plants, and material yards around the city.",
      "For a stockpile or yard job, tell us the material and the loads per day; for earthworks, the volume and the number of tippers so the loader is sized to keep them busy.",
    ],
    areaSlugs: ["sohar-industrial-estate", "sohar-freezone", "falaj-al-qabail", "majis"],
    faqs: [
      {
        question: "Do you supply wheel loaders with tippers in Sohar?",
        answer: "Yes. Wheel loaders and tippers can be booked together for earthworks and stockpile jobs.",
      },
      {
        question: "Can a wheel loader work at a material yard monthly?",
        answer: "Yes. Monthly wheel loader hire with an operator suits yards and plants in Sohar.",
      },
    ],
    metaDescription:
      "Wheel loader (shovel) rental in Sohar with operator — loading tippers, stockpiles & plot levelling in the Industrial Estate, Freezone & yards. +968 7928 8727.",
  },
  "boom-lift": {
    paragraphs: [
      "Boom lifts in Sohar are used for facade and signage work on shops and showrooms in the city centre, cladding and steel on factory sheds in Sohar Industrial Estate, and maintenance at height in plants in Majis and the Freezone.",
      "Tell us the working height and how far out the work is from where the machine can stand, and whether it is on paved ground or site sand.",
    ],
    areaSlugs: ["sohar-city-centre", "sohar-industrial-estate", "majis", "sohar-freezone"],
    faqs: [
      {
        question: "Do you rent man lifts in Sohar?",
        answer: "Yes. Boom lifts (man lifts) are available for work at height across Sohar.",
      },
      {
        question: "Boom lift or boom loader for my Sohar job?",
        answer: "A boom lift lifts people to work at height; a boom loader lifts materials. Tell us the job and we will confirm.",
      },
    ],
    metaDescription:
      "Boom lift (man lift) rental in Sohar for facades, signage, factory cladding & plant maintenance — city centre, Industrial Estate, Majis. +968 7928 8727.",
  },
  "scissor-lift": {
    paragraphs: [
      "Scissor lifts in Sohar work inside: ceilings, lighting, and ducts in shops and malls in the city centre, racking and roof work in Freezone warehouses, and MEP fit-out in new buildings in Al Hambar and Falaj Al Qabail.",
      "Tell us the working height, the floor type, and the door width on the way in, so the right size of platform is sent.",
    ],
    areaSlugs: ["sohar-city-centre", "sohar-freezone", "al-hambar", "falaj-al-qabail"],
    faqs: [
      {
        question: "Can I rent a scissor lift for indoor fit-out in Sohar?",
        answer: "Yes. Scissor lifts are available for ceilings, MEP, and fit-out work in Sohar.",
      },
      {
        question: "Do scissor lifts work outdoors in Sohar?",
        answer: "Rough-terrain scissor lifts work outdoors; indoor electric models need level floors.",
      },
    ],
    metaDescription:
      "Scissor lift rental in Sohar for ceilings, MEP, fit-out & warehouse racking — city centre, Freezone, Al Hambar & Falaj Al Qabail. Call +968 7928 8727.",
  },
  bulldozer: {
    paragraphs: [
      "Bulldozers in Sohar clear and level large plots in the newer phases of the industrial estate and the Freezone, push fill on road and platform jobs, and clear farm land on the edges of the wilayat.",
      "Tell us the area, the material, and whether ripping is needed. Large earthworks usually pair the dozer with a wheel loader and tippers.",
    ],
    areaSlugs: ["sohar-industrial-estate", "sohar-freezone", "falaj-al-qabail"],
    faqs: [
      {
        question: "Do you rent bulldozers with an operator in Sohar?",
        answer: "Yes. Bulldozers are supplied with an experienced operator.",
      },
      {
        question: "Can I hire a bulldozer weekly in Sohar?",
        answer: "Yes. Weekly and monthly bulldozer hire suits plot clearing and earthworks projects.",
      },
    ],
    metaDescription:
      "Bulldozer rental in Sohar with operator for plot clearing, fill spreading & earthworks — Industrial Estate, Freezone & farm land. Call +968 7928 8727.",
  },
  "motor-grader": {
    paragraphs: [
      "Motor graders in Sohar grade new estate roads and plot platforms in the industrial estate and Freezone, finish sub-base layers on road jobs, and maintain graded tracks to farms and sites around the wilayat.",
      "Tell us the length and width to grade and the layer type, and whether rollers and water bowsers are already on site.",
    ],
    areaSlugs: ["sohar-industrial-estate", "sohar-freezone", "falaj-al-qabail"],
    faqs: [
      {
        question: "Do you rent motor graders in Sohar?",
        answer: "Yes. Motor graders with operators are available for road and platform grading in Sohar.",
      },
      {
        question: "Grader or bulldozer for my Sohar plot?",
        answer: "A bulldozer moves and roughly spreads material; a grader finishes it to an accurate level.",
      },
    ],
    metaDescription:
      "Motor grader rental in Sohar with operator for road formation, plot platforms & graded tracks — Industrial Estate, Freezone & beyond. +968 7928 8727.",
  },
}
