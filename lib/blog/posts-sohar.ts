import type { BlogPostInput } from "@/lib/blog/types"

/**
 * Local guides for the area around our yard: Sohar, Sohar Industrial Estate,
 * Sohar Port, Sohar Freezone, Liwa, and Saham. Each one answers a question the
 * matching landing page does not (the landing page says what we rent there;
 * the guide says how to plan the job), so the pair supports each other in
 * search instead of competing.
 *
 * Written for answer engines as well as readers: the first paragraph answers
 * the headline on its own, facts sit in tables, and each guide closes with
 * short FAQs that are emitted as FAQPage schema.
 *
 * Same rules as the rest of the site: no rates, no machine sizes the yard does
 * not have, no port or Freezone approval the company does not hold, and
 * distances stated as approximate.
 */
export const soharPosts: BlogPostInput[] = [
  // ------------------------------------------------------------------ Sohar pillar
  {
    slug: "heavy-equipment-rental-sohar-guide",
    title: "Heavy Equipment Rental in Sohar: Areas, Machines, and Lead Times",
    seoTitle: "Heavy Equipment Rental in Sohar: Local Guide",
    description:
      "Which machines are hired where around Sohar, how fast they reach Sohar Industrial Estate, the Port, the Freezone, Liwa, and Saham, and what each area asks for at the gate.",
    category: "Local Guides",
    equipment: ["crane", "forklift", "excavator", "jcb", "wheel-loader", "tipper", "boom-loader"],
    datePublished: "2026-10-30",
    places: ["Sohar", "Sohar Industrial Estate", "Sohar Port", "Sohar Freezone", "Liwa", "Saham", "North Al Batinah"],
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Container yard and trucks near Sohar Port",
    content: [
      {
        type: "paragraph",
        text: "Short answer: around Sohar, the job's location decides more than the machine does. Inside Sohar Industrial Estate a forklift or crane can reach you within hours; at Sohar Port and the Freezone the gate pass, not the drive, sets the start time; and in Liwa and Saham the access road to the plot matters as much as the distance. Abdul Masood Trading rents cranes, 3 to 18 ton forklifts, boom loaders, excavators, JCBs, wheel loaders, and tippers with operators from a yard in Sohar Industrial Estate, and this guide shows how a hire works in each part of the area.",
      },
      { type: "heading", level: 2, text: "The Sohar Area at a Glance" },
      {
        type: "table",
        caption: "Equipment hire around Sohar by area (distances are approximate road distances from our yard)",
        headers: ["Area", "Distance from yard", "Most hired machines", "What usually sets the start time"],
        rows: [
          ["Sohar Industrial Estate", "On the estate", "Forklifts, cranes, excavators", "Machine availability; gates are quick"],
          ["Sohar city", "A short drive", "JCBs, excavators, tippers, boom loaders", "Street access to the plot"],
          ["Sohar Port", "A short drive north", "Forklifts, cranes", "Gate pass and port documents"],
          ["Sohar Freezone (in Liwa)", "A short drive north", "Forklifts, cranes, wheel loaders", "Tenant's own gate and HSE rules"],
          ["Liwa", "About 25 km", "Cranes, forklifts, JCBs, tippers", "Site type: industrial permit or village access"],
          ["Saham", "About 30 km", "JCBs, tippers, boom loaders", "Narrow village and farm tracks"],
        ],
      },
      { type: "heading", level: 2, text: "Which Machine for Which Job Around Sohar?" },
      {
        type: "paragraph",
        text: "Work around Sohar splits into two kinds. Industrial work — factories, warehouses, the port, and the Freezone — runs on forklifts and cranes, booked for a day, a shutdown, or a month of peak shipments. Construction work — villas in Sohar and Saham, new factory plots, roads, and farms — runs on JCBs, excavators, wheel loaders, and tippers first, and boom loaders or cranes once the structure goes up.",
      },
      {
        type: "list",
        items: [
          "Unloading containers or moving pallets: a 3 ton forklift.",
          "Steel, coils, pipes, or machinery: a 5, 10, or 18 ton forklift, sized to the heaviest piece.",
          "Lifting over a wall, onto a roof, or to height at a distance: a 25 or 50 ton crane, sized by weight and radius together.",
          "Villa footings, trenches, levelling on a small plot: a JCB backhoe loader.",
          "Deeper or larger digs and factory foundations: an excavator, with tippers to remove soil.",
          "Blocks and materials to upper floors without a crane: a boom loader.",
        ],
      },
      { type: "heading", level: 2, text: "How Fast Can a Machine Arrive?" },
      {
        type: "paragraph",
        text: "From our yard, Sohar Industrial Estate, Sohar city, the Port, and the Freezone are all short drives, and Liwa and Saham are within about half an hour for a loaded low-bed. Same-day delivery is often possible when a machine is free. What slows a booking down is rarely the road: it is a gate pass that has not been requested, an induction that is only run on certain days, or a plot that a low-bed cannot reach. Sending those details at booking is the fastest way to get the machine working.",
      },
      { type: "heading", level: 2, text: "What to Send When You Book" },
      {
        type: "list",
        items: [
          "The site location as a map pin, plus the plot or warehouse number inside the Port, Freezone, or estate.",
          "The job: the heaviest load and its size, or the dig depth and area.",
          "Start date, expected hire length, and working hours.",
          "The site's entry rules: gate pass, documents, induction, escort.",
          "A photo of the set-up or access area if space is tight.",
        ],
      },
      {
        type: "paragraph",
        text: "Each area has its own guide below with the details that matter there: gate procedures at the Port and Freezone, plant moves inside the industrial estate, ground conditions in Liwa, and farm work in Saham.",
      },
    ],
    relatedLinks: [
      { title: "Heavy Equipment Rental in Sohar", href: "/locations/sohar" },
      { title: "Equipment Rental in Sohar Industrial Estate", href: "/locations/sohar-industrial-estate" },
      { title: "Crane & Forklift Rental at Sohar Port", href: "/ports/sohar-port" },
      { title: "Forklift & Crane Rental in Sohar Freezone", href: "/locations/sohar-freezone" },
      { title: "Crane & Forklift Rental in Sohar", href: "/services/crane-forklift-rental-sohar" },
    ],
    faqs: [
      {
        question: "Where is Abdul Masood Trading's equipment yard?",
        answer:
          "In Sohar Industrial Estate (Sohar Industrial City), Sohar, North Al Batinah, Oman. Call or WhatsApp +968 7928 8727.",
      },
      {
        question: "Which areas around Sohar do you deliver to?",
        answer:
          "Sohar city, Sohar Industrial Estate, Sohar Port, Sohar Freezone, Liwa, Saham, Shinas, and Al Khaburah, as well as the rest of Oman.",
      },
      {
        question: "Can I hire equipment with an operator in Sohar?",
        answer: "Yes. Every crane, forklift, and earthmoving machine is supplied with an experienced operator or driver.",
      },
      {
        question: "Do you publish rental prices for Sohar?",
        answer:
          "No. Rates depend on the machine, hire length, site, and working hours, so each job is quoted. Send the details and we quote the same day.",
      },
    ],
  },

  // ------------------------------------------------------------- Industrial Estate
  {
    slug: "sohar-industrial-estate-plant-move-equipment",
    title: "Moving or Installing Factory Machinery in Sohar Industrial Estate: Forklift or Crane?",
    seoTitle: "Factory Machinery Moves in Sohar Industrial Estate",
    description:
      "How to plan a machine move or installation in Sohar Industrial Estate (Sohar Industrial City): forklift or crane, the right size, floor and door checks, and what to send for a quote.",
    category: "Local Guides",
    equipment: ["forklift", "crane"],
    datePublished: "2026-10-30",
    places: ["Sohar Industrial Estate", "Sohar Industrial City", "Sohar"],
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Counterbalance forklift inside a factory warehouse",
    content: [
      {
        type: "paragraph",
        text: "Short answer: if the machine can be reached from the floor and travels on a hard, level surface, a heavy forklift (5, 10, or 18 ton) usually moves it faster and in tighter spaces than a crane. If it has to go over something — a wall, a pit, a roof opening, a truck bed you cannot drive beside — you need a crane, often with a forklift to finish the move inside the shed. In Sohar Industrial Estate, where our yard is, both can usually be on site the same day.",
      },
      { type: "heading", level: 2, text: "Forklift or Crane: the Quick Decision" },
      {
        type: "table",
        caption: "Choosing equipment for a factory machine move",
        headers: ["Situation", "Usual choice", "Why"],
        rows: [
          ["Machine on pallets or skids, flat floor, wide door", "Heavy forklift", "Drives it straight to position"],
          ["Machine on a trailer, open yard beside it", "Forklift or crane", "Forklift if it can reach under; crane if not"],
          ["Lift through a roof opening or over a wall", "Crane", "Only a crane lifts over obstacles"],
          ["Final placement inside a low shed", "Forklift, after a crane offload", "A crane cannot work under the roof"],
          ["Long, heavy item (beams, rollers, tanks)", "Crane, or two forklifts", "Needs support at both ends"],
        ],
      },
      { type: "heading", level: 2, text: "Sizing the Forklift" },
      {
        type: "paragraph",
        text: "A forklift's rated capacity applies at a set load centre, usually 500 or 600 mm from the fork face. Machinery is rarely that tidy: a long base or a top-heavy machine moves the centre of gravity forward and reduces what the forklift can safely carry. As a working rule, pick a forklift with clear headroom above the machine weight, and send the dimensions and centre-of-gravity marking from the manufacturer's drawing so we can check it against the load chart.",
      },
      { type: "heading", level: 2, text: "Checks Before Anything Moves" },
      {
        type: "list",
        items: [
          "Floor: a loaded 10 or 18 ton forklift puts heavy point loads on the slab. Check covers over pits, drains, and trenches on the route.",
          "Door and roof: measure the clear height and width of the door, and any overhead beams, pipes, or cable trays on the route.",
          "Lifting points: confirm where the machine may be forked or slung; many machines have marked points or a shipping frame.",
          "Set-up for a crane: a firm, level area outside the shed, clear of overhead lines, close to where the load must land.",
          "Power and anchors: disconnect, unbolt, and drain the machine before the move, so the hire time is spent moving it.",
        ],
      },
      { type: "heading", level: 2, text: "Moving a Plant From Muscat to Sohar" },
      {
        type: "paragraph",
        text: "Relocations from Rusayl or elsewhere to Sohar need lifting at both ends. We can supply forklifts and cranes at the Sohar end from our yard, and quote for the departure end as well. Plan the receiving plot first: where each machine goes, which comes in first, and whether foundations or anchor bolts are ready, so trucks are not left waiting with a load on.",
      },
      { type: "heading", level: 2, text: "What to Send for a Quote" },
      {
        type: "paragraph",
        text: "Send the plot number in the estate, a list of machines with weight and dimensions, photos of each machine and the route, door and ceiling heights, and the date. With that, Abdul Masood Trading can match a forklift size or a 25 or 50 ton crane to each item and quote the job.",
      },
    ],
    relatedLinks: [
      { title: "Equipment Rental in Sohar Industrial Estate", href: "/locations/sohar-industrial-estate" },
      { title: "10 Ton Forklift Rental", href: "/equipment/forklift/10-ton-forklift-rental-oman" },
      { title: "18 Ton Forklift Rental", href: "/equipment/forklift/18-ton-forklift-rental-oman" },
      { title: "25 Ton Crane Rental", href: "/equipment/crane/25-ton-crane-rental-oman" },
    ],
    faqs: [
      {
        question: "What size forklift moves a 7 ton machine?",
        answer:
          "Usually a 10 ton forklift, because the machine's centre of gravity is rarely at the forklift's rated load centre. Send the drawing so the size can be checked against the load chart.",
      },
      {
        question: "Can a crane place a machine inside a factory shed?",
        answer:
          "Only through a roof opening. Otherwise a crane offloads outside and a forklift moves the machine inside to its final position.",
      },
      {
        question: "Is Sohar Industrial Estate the same as Sohar Industrial City?",
        answer:
          "Yes. Madayn names it Sohar Industrial City; it is also called Sohar Industrial Estate or the Sohar industrial area.",
      },
    ],
  },

  // ------------------------------------------------------------------- Sohar Port
  {
    slug: "sohar-port-equipment-hire-vessel-arrivals",
    title: "Booking Cranes and Forklifts Around Vessel Arrivals at Sohar Port",
    seoTitle: "Sohar Port Equipment Hire Around Vessel Arrivals",
    description:
      "How to time crane and forklift hire to a ship's arrival at Sohar Port: standby, night and Friday work, shifting berth dates, and how to avoid paying for idle machines.",
    category: "Local Guides",
    equipment: ["forklift", "crane"],
    datePublished: "2026-10-30",
    places: ["Sohar Port", "Liwa", "Sohar"],
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Containers stacked at a port terminal yard",
    content: [
      {
        type: "paragraph",
        text: "Short answer: book the equipment for the cargo release, not the ship's ETA. At Sohar Port the machine you hire usually works after discharge — in a laydown yard, a warehouse, or at your site — so the crane or forklift should arrive when your cargo is released and the truck is ready, with standby agreed in advance in case the berth date moves. Because our yard is a short drive from the port, a forklift or crane can often be booked closer to the day than one coming from Muscat.",
      },
      { type: "heading", level: 2, text: "Why Vessel Dates Move, and Who Pays" },
      {
        type: "paragraph",
        text: "Weather, berth congestion, and the previous port all shift arrival times. A crane booked for Tuesday that waits until Thursday is two days of hire with nothing lifted. Ask your agent for the expected release date as well as the ETA, and agree with the equipment supplier how a change is handled: moving the booking at no charge if notified the day before, or paid standby if the machine must be held.",
      },
      {
        type: "table",
        caption: "Planning equipment against a port call",
        headers: ["Stage", "What to confirm", "Equipment decision"],
        rows: [
          ["Vessel nominated", "Cargo list, heaviest piece, destination", "Choose crane and forklift sizes"],
          ["ETA confirmed", "Release date and trucking slot", "Provisionally book the machines"],
          ["Day before discharge", "Gate passes, documents, truck plate numbers", "Confirm the start time"],
          ["Release", "Cargo cleared and loaded", "Machines start work"],
          ["Last piece moved", "Laydown yard clear", "Release equipment the same day"],
        ],
      },
      { type: "heading", level: 2, text: "Night, Friday, and Holiday Work" },
      {
        type: "paragraph",
        text: "Port operations run round the clock, and a release can come late in the day. If your cargo may be released at night or over a weekend, say so at booking: operator hours, lighting, and overtime are quoted separately, and a machine already on site for a day shift may need a second operator to keep working.",
      },
      { type: "heading", level: 2, text: "Typical Equipment for Port Cargo" },
      {
        type: "list",
        items: [
          "Containers into a warehouse: 3 ton forklifts, one per door if the release is large.",
          "Steel, pipes, and coils in a laydown yard: 5 to 18 ton forklifts sized to the heaviest bundle.",
          "Project cargo onto a trailer or foundation: a 25 or 50 ton crane, chosen by weight and radius.",
          "Mixed shipments: a crane for the heavy pieces plus a forklift for the rest, booked together.",
        ],
      },
      { type: "heading", level: 2, text: "Documents for the Gate" },
      {
        type: "paragraph",
        text: "Port and terminal sites usually ask for the machine's registration and inspection papers and the operator's ID and licence, and some areas need an induction. We send the machine and operator documents in advance; your company or agent requests the pass. Start this when the ETA is confirmed, not on the morning of release.",
      },
    ],
    relatedLinks: [
      { title: "Crane & Forklift Rental at Sohar Port", href: "/ports/sohar-port" },
      { title: "Container Unloading: Forklift or Crane?", href: "/blog/container-unloading-forklift-or-crane" },
      { title: "Documents for Crane and Forklift Sites", href: "/blog/crane-forklift-site-documents-oman" },
      { title: "50 Ton Crane Rental", href: "/equipment/crane/50-ton-crane-rental-oman" },
    ],
    faqs: [
      {
        question: "How much notice do you need for a crane at Sohar Port?",
        answer:
          "Our yard is close to the port, so short notice is often possible, but the gate pass usually takes longest. Book provisionally when the ETA is confirmed.",
      },
      {
        question: "What happens if the ship is delayed?",
        answer:
          "Agree it at booking: the hire can usually be moved if we are told the day before, or the machine can be held on paid standby.",
      },
      {
        question: "Can forklifts work night shifts at Sohar Port?",
        answer: "Yes. Tell us at booking so operators and overtime are planned and quoted.",
      },
    ],
  },

  // -------------------------------------------------------------- Sohar Freezone
  {
    slug: "sohar-freezone-warehouse-forklift-rental-guide",
    title: "Forklift Rental for Sohar Freezone Warehouses: Rent, Buy, or Cover the Peaks?",
    seoTitle: "Sohar Freezone Forklift Rental: Rent or Buy?",
    description:
      "A guide for Sohar Freezone tenants: when renting forklifts beats buying, which size for containers, racking, and heavy cargo, and how monthly and peak hire work.",
    category: "Local Guides",
    equipment: ["forklift", "boom-loader"],
    datePublished: "2026-10-30",
    places: ["Sohar Freezone", "Liwa", "Sohar Port"],
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Forklift working between warehouse racking",
    content: [
      {
        type: "paragraph",
        text: "Short answer: most Sohar Freezone warehouses own or lease enough forklifts for a normal week and rent the rest — for shipment peaks, breakdowns, heavy one-off cargo, and the first months after opening. A 3 ton forklift covers containers and standard pallets; 5 to 18 ton machines handle steel, coils, and crates in the metals cluster. Renting with an operator also covers the staffing gap when a shipment lands at once.",
      },
      { type: "heading", level: 2, text: "Rent or Buy? A Simple Test" },
      {
        type: "table",
        caption: "When renting a forklift makes sense for a Freezone tenant",
        headers: ["Your situation", "Usually best", "Reason"],
        rows: [
          ["Steady daily use, same loads every day", "Own or long lease", "Utilisation is high"],
          ["Peaks around vessel arrivals", "Own a base fleet, rent for peaks", "No idle machines between ships"],
          ["Occasional heavy cargo", "Rent a heavy forklift by the day", "A 10–18 ton machine is rarely needed daily"],
          ["New warehouse, volumes still unknown", "Monthly rental", "Size the fleet on real data first"],
          ["Own forklift down for repair", "Short-term rental", "Keeps the bay working"],
        ],
      },
      { type: "heading", level: 2, text: "Which Forklift for Which Freezone Job?" },
      {
        type: "list",
        items: [
          "Container stuffing and stripping: a 3 ton forklift; check the mast's closed height if it must drive inside the container.",
          "Racked storage: check the top beam height against the forklift's lift height and the capacity at that height.",
          "Steel, coils, and billets: 5, 10, or 18 ton, sized to the heaviest piece with headroom for the load centre.",
          "Unpaved yard or a site still under construction: a boom loader handles rough ground better than a warehouse forklift.",
        ],
      },
      { type: "heading", level: 2, text: "Monthly Hire in Practice" },
      {
        type: "paragraph",
        text: "Monthly hire suits tenants who want a forklift on site without owning it. Agree in advance the working hours per day, whether an operator is included, who refuels, and what happens if the machine breaks down. With our yard a short drive away in Sohar Industrial Estate, a replacement can usually be sent quickly.",
      },
      { type: "heading", level: 2, text: "Getting Through a Freezone Gate" },
      {
        type: "paragraph",
        text: "Expect the Freezone's own entry rules plus your company's: a gate pass, the forklift's registration and inspection papers, the operator's ID and licence, and often a safety induction. Send your procedure at booking and we prepare the machine and operator documents before delivery.",
      },
    ],
    relatedLinks: [
      { title: "Forklift & Crane Rental in Sohar Freezone", href: "/locations/sohar-freezone" },
      { title: "3 Ton Forklift Rental", href: "/equipment/forklift/3-ton-forklift-rental-oman" },
      { title: "Daily, Weekly, or Monthly Equipment Hire", href: "/blog/daily-weekly-monthly-equipment-hire" },
      { title: "Boom Loader vs Forklift", href: "/blog/boom-loader-vs-forklift" },
    ],
    faqs: [
      {
        question: "Can I rent a forklift for one month in Sohar Freezone?",
        answer: "Yes. Monthly forklift hire is available for Freezone warehouses, with or without an operator.",
      },
      {
        question: "Which forklift fits inside a shipping container?",
        answer:
          "Usually a 3 ton forklift with a low enough closed mast height. Tell us the container type so we can confirm the machine.",
      },
      {
        question: "Do you supply heavy forklifts for the Sohar Freezone metals cluster?",
        answer: "Yes. Forklifts of 5, 10, and 18 ton handle steel, coils, billets, and heavy crates.",
      },
    ],
  },

  // -------------------------------------------------------------------------- Liwa
  {
    slug: "liwa-site-preparation-ground-conditions",
    title: "Building in Liwa: Sandy Ground, a High Water Table, and Which Machines to Hire",
    seoTitle: "Liwa Site Preparation: Ground & Machine Guide",
    description:
      "What Liwa's coastal ground means for foundations, digging, and crane set-ups, and which machines to hire for villa plots, farms, and industrial sites near Sohar Port.",
    category: "Local Guides",
    equipment: ["excavator", "jcb", "tipper", "wheel-loader", "crane"],
    datePublished: "2026-10-30",
    places: ["Liwa", "Sohar Freezone", "North Al Batinah"],
    heroImage: "/images/fleet/excavator-transport.jpg",
    heroImageAlt: "Excavator on a low-bed trailer ready for delivery to Liwa",
    content: [
      {
        type: "paragraph",
        text: "Short answer: near the coast in Liwa, expect loose sand and groundwater at shallow depth, so plan digs with the water table in mind, keep spoil away from trench edges, and put mats under crane outriggers. A JCB and a tipper handle most villa plots; deeper foundations and industrial plots near Sohar Port and the Freezone need an excavator, and site levelling is quicker with a wheel loader. Liwa is about 25 km from our Sohar yard.",
      },
      { type: "heading", level: 2, text: "What Liwa's Ground Means for Your Job" },
      {
        type: "table",
        caption: "Liwa ground conditions and what to plan for",
        headers: ["Condition", "Where", "Plan for"],
        rows: [
          ["Loose sand", "Most coastal plots", "Trench sides that slump; batter or shore them"],
          ["Shallow groundwater", "Near the sea and low-lying land", "Dewatering for deep digs; ask your engineer"],
          ["Backfilled ground", "New plots and Freezone sites", "Weak bearing for crane outriggers; use mats"],
          ["Firmer gravel", "Further inland and on farms", "Easier digging and set-ups"],
        ],
      },
      { type: "heading", level: 2, text: "Which Machines for Which Liwa Job" },
      {
        type: "list",
        items: [
          "Villa plot footings and levelling: a JCB backhoe loader, plus a tipper if soil leaves the plot.",
          "Deep foundations, basements, and utility trenches: an excavator, with dewatering where water is met.",
          "Large plots and fill: a wheel loader to spread and level, and tippers to bring material in.",
          "Industrial lifts near the port: a 25 or 50 ton crane, with outrigger mats on any backfilled ground.",
          "Farm channels and land clearing inland: a JCB or excavator, booked by the day.",
        ],
      },
      { type: "heading", level: 2, text: "Village Plots vs Industrial Sites" },
      {
        type: "paragraph",
        text: "The same machine works differently on Liwa's two sides. On village plots, the main issue is access: narrow lanes, parked cars, and soft verges can stop a low-bed short of the plot, so send a photo of the approach. On industrial sites near the port, access is easy but entry is controlled: gate passes, machine papers, and operator IDs must be ready before the machine arrives.",
      },
      { type: "heading", level: 2, text: "Before You Dig" },
      {
        type: "list",
        items: [
          "Locate buried cables and pipes; ask the utility companies and check existing drawings.",
          "Agree where spoil goes: on the plot, or off by tipper.",
          "Plan the summer schedule around the midday outdoor work break.",
          "Have your engineer confirm foundation depth and whether dewatering is needed.",
        ],
      },
    ],
    relatedLinks: [
      { title: "Heavy Equipment Rental in Liwa", href: "/locations/liwa" },
      { title: "Excavator vs JCB vs Wheel Loader", href: "/blog/excavator-vs-jcb-vs-wheel-loader" },
      { title: "Villa Plot Site Preparation in Oman", href: "/blog/villa-plot-site-preparation-oman" },
      { title: "How Many Tippers Do I Need?", href: "/blog/how-many-tippers-do-i-need" },
    ],
    faqs: [
      {
        question: "How far is Liwa from your yard?",
        answer: "About 25 km north of our yard in Sohar Industrial Estate, so same-day delivery is often possible.",
      },
      {
        question: "Which machine is best for a villa plot in Liwa?",
        answer: "A JCB backhoe loader handles most villa plots: footings, backfill, and levelling. Add a tipper to remove soil.",
      },
      {
        question: "Can a crane set up on sandy ground in Liwa?",
        answer:
          "Yes, with outrigger mats to spread the load. Tell us if the set-up area is backfilled or soft so the right mats come with the crane.",
      },
    ],
  },

  // ------------------------------------------------------------------------- Saham
  {
    slug: "saham-farm-land-clearing-equipment",
    title: "Farm Work in Saham: Land Clearing, Irrigation Channels, and Which Machine to Hire",
    seoTitle: "Saham Farm Equipment Hire: JCB, Excavator, Loader",
    description:
      "How Saham farm owners hire equipment: JCB, excavator, or wheel loader for clearing, levelling, channels, and boundary walls, how long jobs take, and getting machines down farm tracks.",
    category: "Local Guides",
    equipment: ["jcb", "excavator", "wheel-loader", "tipper"],
    datePublished: "2026-10-30",
    places: ["Saham", "North Al Batinah"],
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "JCB machine working on open ground",
    content: [
      {
        type: "paragraph",
        text: "Short answer: for most Saham farm jobs — clearing scrub, levelling, digging irrigation channels, and trenching for boundary walls — a JCB backhoe loader is the right first hire, booked by the day. Step up to an excavator for long or deep channels and stump removal, and to a wheel loader and tippers when large volumes of soil, sand, or manure have to be moved. Saham is about 30 km from our Sohar yard, so short daily hires are practical.",
      },
      { type: "heading", level: 2, text: "Which Machine for Which Farm Job" },
      {
        type: "table",
        caption: "Equipment for common farm jobs in Saham",
        headers: ["Job", "Usual machine", "Notes"],
        rows: [
          ["Clearing scrub and small trees", "JCB", "Excavator for large stumps"],
          ["Levelling a field", "JCB or wheel loader", "Loader for large areas"],
          ["Irrigation channels", "JCB or excavator", "Excavator for long, deep runs"],
          ["Boundary wall footings", "JCB", "Narrow trench, quick work"],
          ["Moving soil, sand, or manure in bulk", "Wheel loader with tippers", "Loader fills; tippers haul"],
        ],
      },
      { type: "heading", level: 2, text: "How Long Will It Take?" },
      {
        type: "paragraph",
        text: "Farm jobs vary too much for fixed times — rock, roots, and wet ground all slow the work — but most small clearing or channel jobs on one farm fit into one or a few days of JCB hire. The fastest way to get a firm idea is to send a few photos and a rough size of the area. If you have several jobs, group them into one booking so the machine only travels once.",
      },
      { type: "heading", level: 2, text: "Getting the Machine to the Farm" },
      {
        type: "list",
        items: [
          "Send a map pin and describe the track: width, soft sand, low branches, or a narrow gate.",
          "If the low-bed cannot reach the farm, the JCB may drive the last stretch from the nearest firm ground.",
          "Mark falaj channels, pipes, and pumps so the machine avoids them.",
          "Keep animals and people away from the working area.",
        ],
      },
      { type: "heading", level: 2, text: "Seasons and Timing" },
      {
        type: "paragraph",
        text: "Many farm owners in Saham schedule ground work in the cooler months, before planting, and around the summer midday outdoor work break. Booking a few days ahead in busy periods helps, though short-notice daily hire is often possible from our nearby yard.",
      },
    ],
    relatedLinks: [
      { title: "Heavy Equipment Rental in Saham", href: "/locations/saham" },
      { title: "JCB Backhoe Loader Rental", href: "/equipment/jcb-backhoe-loader" },
      { title: "Excavator vs JCB vs Wheel Loader", href: "/blog/excavator-vs-jcb-vs-wheel-loader" },
      { title: "Daily, Weekly, or Monthly Equipment Hire", href: "/blog/daily-weekly-monthly-equipment-hire" },
    ],
    faqs: [
      {
        question: "Can I hire a JCB for one day on a farm in Saham?",
        answer: "Yes. Saham is about 30 km from our Sohar yard, so daily JCB hire works well for farm jobs.",
      },
      {
        question: "Does the machine come with an operator?",
        answer: "Yes. Every machine comes with an experienced operator or driver.",
      },
      {
        question: "What if the low-bed cannot reach my farm?",
        answer:
          "Tell us about the track when you book. Often the JCB can drive the last stretch from the nearest point the trailer can reach.",
      },
    ],
  },
]
