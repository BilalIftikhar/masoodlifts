import type { BlogPostInput } from "@/lib/blog/types"

/**
 * Planning and buying guides, each aimed at one search a customer makes before
 * booking ("crane rental cost Oman", "25 ton vs 50 ton crane", "wet hire vs dry
 * hire"…). None of them repeats a question an equipment, size, or location page
 * already answers, so they add pages Google can rank instead of competing with
 * the ones it has.
 *
 * Same rules as the rest of the site: no rates, no machine sizes the yard
 * doesn't have, and regulations stated only as far as the Ministry or the
 * certifying body states them, with a pointer to check the current rules.
 */
export const planningPosts: BlogPostInput[] = [
  {
    slug: "crane-rental-cost-oman",
    title: "Crane Rental Cost in Oman: What Sets the Price of Your Quote",
    seoTitle: "Crane Rental Cost in Oman: What Sets the Price",
    description:
      "Why crane hire in Oman is quoted per job, the eight factors that move the price, and how to get an accurate quote the first time.",
    category: "Lifting",
    equipment: ["crane"],
    datePublished: "2026-10-15",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Yellow mobile crane with its boom retracted, ready to travel to site",
    content: [
      {
        type: "paragraph",
        text: "Crane hire is hard to price from a list. Two lifts of the same weight can need different cranes, different crews, and different paperwork, so a fair price depends on the job. This guide explains what goes into a crane rental quote, so you know what to send, what to compare, and where the costs hide.",
      },
      { type: "heading", level: 2, text: "Why Crane Hire Is Quoted per Job" },
      {
        type: "paragraph",
        text: "A crane's rated capacity is what it lifts close in, with its outriggers fully extended. Move the load further from the crane and the safe capacity drops quickly. A generator set down right beside the crane and the same generator lifted over a boundary wall onto a plinth further away are different jobs, and they may need different cranes. The crane size is set by the weight and the radius together, and it is one of the main things that moves the price.",
      },
      {
        type: "table",
        caption: "What moves a crane rental quote",
        headers: ["Factor", "Why it changes the price", "How to keep it down"],
        rows: [
          ["Crane size", "Bigger cranes cost more to run, move, and set up", "Give the real radius so the crane isn't oversized \"to be safe\""],
          ["Hire length", "A single lift still needs the full journey and set-up; a longer hire spreads them", "Group several lifts into one visit"],
          ["Distance from the yard", "Travel time to and from site", "Ask whether a crane is already working near your site"],
          ["Working hours", "Night, Friday, and holiday work are quoted separately", "Plan routine lifts for normal hours"],
          ["Waiting time", "Hire time passes whether or not the load is ready", "Have the load, lifting points, and access ready before arrival"],
          ["Rigging and banksman", "Slings, shackles, spreader beams, and a signaller add cost", "Say upfront what lifting gear you already have"],
          ["Site entry", "Inductions, permits, escorts, and document checks take time", "Send the site's entry requirements at booking"],
          ["Ground preparation", "Soft or backfilled ground needs mats or rework", "Prepare a firm, level set-up area"],
        ],
      },
      { type: "heading", level: 2, text: "The Cost Nobody Budgets For: Waiting Time" },
      {
        type: "paragraph",
        text: "Delays are the cost nobody puts in the budget: the delivery truck is late, the load has no lifting points, the gate pass isn't ready, or a car is parked in the set-up position. The crane is booked for your slot, so time spent waiting is hire time you pay for without lifting anything, and a long delay can push the job into a second day. A ten-minute call the day before, confirming the load is on site and the gate is ready, prevents most of it.",
      },
      { type: "heading", level: 2, text: "Single Lift, Daily, or Longer Hire?" },
      {
        type: "list",
        items: [
          "Single lift: offloading one delivery or setting one unit. The crane still has to travel to site and set up, however short the lift itself is.",
          "Daily hire: several lifts on one site, or a day of steel erection. Usually the best value when you can line the work up.",
          "Weekly or monthly hire: ongoing erection, plant shutdowns, or a project with lifts spread over weeks. The travel cost is spread across the whole hire.",
        ],
      },
      {
        type: "paragraph",
        text: "If you have three or four single lifts spread over a month, ask whether they can be grouped into one or two crane days, so the journey and set-up aren't repeated for each lift.",
      },
      { type: "heading", level: 2, text: "Distance From Sohar" },
      {
        type: "paragraph",
        text: "Our cranes are based at Sohar Industrial Estate. Jobs in Sohar, Liwa, Saham, and along the Batinah coast carry little travel cost. Muscat, Al Buraimi, and the interior add travel time each way, and Duqm and Salalah are planned as project hires because the journey is long. For remote sites, a longer hire usually works out cheaper per day than a short one, because the crane only makes the journey once.",
      },
      { type: "heading", level: 2, text: "How to Compare Two Crane Quotes" },
      {
        type: "paragraph",
        text: "A lower day rate is not always the cheaper hire. When you compare quotes, check that both cover the same things:",
      },
      {
        type: "list",
        items: [
          "Is it the same crane capacity, and has the supplier checked your load against that crane's load chart?",
          "Are travel, set-up, and dismantling included, or charged separately?",
          "How many working hours are in a day, and what does overtime cost?",
          "Are the operator, rigging, and a banksman included?",
          "What happens if the crane waits because the site isn't ready?",
          "Are the crane's inspection certificate and the operator's documents ready for your site's gate?",
        ],
      },
      { type: "heading", level: 2, text: "What to Send for an Accurate Quote" },
      {
        type: "paragraph",
        text: "Send the heaviest load and its dimensions, the distance from where the crane can stand to where the load must land, the lift height, the site location as a map pin, a photo of the set-up area, your preferred date and time, and any site entry rules. With those, Abdul Masood Trading can check whether a 25 ton or 50 ton crane fits the lift and quote the job.",
      },
    ],
    relatedLinks: [
      { title: "Crane Rental in Oman", href: "/equipment/crane" },
      { title: "25 Ton Crane Rental", href: "/equipment/crane/25-ton-crane-rental-oman" },
      { title: "50 Ton Crane Rental", href: "/equipment/crane/50-ton-crane-rental-oman" },
      { title: "Crane Hire in Oman: Pre-Lift Checklist", href: "/blog/crane-hire-checklist-oman" },
    ],
  },
  {
    slug: "25-ton-vs-50-ton-crane",
    title: "25 Ton or 50 Ton Crane? How to Choose the Right Mobile Crane",
    seoTitle: "25 Ton vs 50 Ton Crane: Which Do You Need?",
    description:
      "Why a crane's tonnage is not what it lifts on your job, how radius and height change the answer, and when to step up from a 25 ton to a 50 ton crane.",
    category: "Lifting",
    equipment: ["crane"],
    datePublished: "2026-10-15",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "All-terrain mobile crane parked with its boom stowed",
    content: [
      {
        type: "paragraph",
        text: "The number on a mobile crane, 25 ton or 50 ton, is its maximum rated capacity: the most it can lift with a short boom, the outriggers fully out, and the load right next to the crane. On a real job the load is rarely that close. So the right question is not \"how heavy is the load?\" but \"how heavy is the load, and how far from the crane does it have to go?\"",
      },
      { type: "heading", level: 2, text: "Capacity Falls as the Radius Grows" },
      {
        type: "paragraph",
        text: "Radius is the horizontal distance from the crane's centre of rotation to the hook. Every crane has a load chart that gives the safe load for each combination of boom length and radius. As the radius grows, the safe load falls faster than you might expect, because the load acts on a longer lever. At the radius of a typical site lift, a 25 ton crane may be rated for only a small fraction of its 25 tonnes.",
      },
      {
        type: "paragraph",
        text: "That is why the same air-conditioning unit can be an easy lift for a 25 ton crane parked beside the building, and too much for it when the crane has to stand across the road and reach over a boundary wall.",
      },
      {
        type: "table",
        caption: "25 ton vs 50 ton mobile crane: typical jobs",
        headers: ["", "25 Ton Crane", "50 Ton Crane"],
        rows: [
          ["Typical loads", "Generators, AC units, pumps, small precast, light steel", "Heavier steel and precast, tanks, transformers, plant items"],
          ["Best when", "The crane can stand close to the load and its landing point", "The load is heavy, far from the crane, or lifted high"],
          ["Site footprint", "Smaller; suits tight yards and villa streets", "Larger; needs more space and firm ground for the outriggers"],
          ["Common sites", "Factories, warehouses, villas, low-rise buildings", "Industrial estates, port laydown areas, plant shutdowns"],
        ],
      },
      { type: "heading", level: 2, text: "Three Measurements That Decide the Crane" },
      {
        type: "list",
        items: [
          "Load weight, including rigging: add the slings, shackles, and any spreader beam to the weight of the item itself.",
          "Radius: from where the crane can actually set up, outriggers out, to where the load lands. If the load is picked at one radius and landed at another, give both.",
          "Height: what the load must clear, such as a parapet, roof edge, or stack of materials. This sets the boom length, and a longer boom lowers capacity again.",
        ],
      },
      {
        type: "paragraph",
        text: "Measure the radius from the real set-up position, not the ideal one. Parked vehicles, trenches, overhead lines, and soft ground often push the crane further away than planned, and a few extra metres can change the crane you need.",
      },
      { type: "heading", level: 2, text: "When to Step Up to 50 Ton" },
      {
        type: "list",
        items: [
          "The lift is near the limit of a 25 ton crane's load chart at your radius",
          "The crane must reach over a building, wall, or trench to land the load",
          "The load goes onto an upper floor or roof, needing a long boom",
          "Several heavy items are lifted from one set-up position, some at long radius",
          "Ground or access forces the crane to stand further away than you would like",
        ],
      },
      {
        type: "paragraph",
        text: "A crane working near its limit has no margin for wind, a load heavier than its paperwork says, or a radius a little longer than measured. A bigger crane working comfortably inside its chart is the safer choice.",
      },
      { type: "heading", level: 2, text: "When a 25 Ton Crane Is Enough" },
      {
        type: "paragraph",
        text: "For a generator onto a plinth beside the access road, offloading a trailer in a factory yard, or setting light steel on a single-storey shed, a 25 ton crane is usually the economical choice. It is the smaller machine, so it suits tight yards and narrow access better.",
      },
      { type: "heading", level: 2, text: "Ground Matters as Much as Capacity" },
      {
        type: "paragraph",
        text: "A crane's outriggers concentrate its weight and the load into a few small pads. On compacted, level ground that is fine. On recent backfill, sabkha near the coast, or the edge of an excavation, the ground can give way. A larger crane puts more load through each outrigger, so if you step up to 50 ton, check the set-up area is firm and use outrigger mats where the ground is doubtful.",
      },
      {
        type: "paragraph",
        text: "Not sure which size fits? Send the weight, radius, and height to Abdul Masood Trading. The lift is checked against the crane's load chart before the crane is booked, so you neither under-size it nor pay for capacity you don't use.",
      },
    ],
    relatedLinks: [
      { title: "25 Ton Crane Rental", href: "/equipment/crane/25-ton-crane-rental-oman" },
      { title: "50 Ton Crane Rental", href: "/equipment/crane/50-ton-crane-rental-oman" },
      { title: "Crane Rental in Oman", href: "/equipment/crane" },
      { title: "Crane Rental Cost in Oman", href: "/blog/crane-rental-cost-oman" },
    ],
  },
  {
    slug: "container-unloading-forklift-or-crane",
    title: "Unloading a Shipping Container: Forklift, Crane or Boom Loader?",
    seoTitle: "Container Unloading: Forklift or Crane?",
    description:
      "How to empty or move a 20 ft or 40 ft container at a warehouse or site in Oman: when a forklift is enough, when you need a crane, and what to check first.",
    category: "Material Handling",
    equipment: ["forklift", "crane", "boom-loader"],
    datePublished: "2026-10-15",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Stacked shipping containers in a port yard",
    content: [
      {
        type: "paragraph",
        text: "\"We have a container arriving\" can mean two very different jobs. Either the goods inside have to come out, which is called unstuffing or destuffing, or the container itself has to be lifted off the trailer and set down. The first is forklift work; the second is crane work. Getting this right when you book saves a truck waiting at your gate with the clock running.",
      },
      { type: "heading", level: 2, text: "Job 1: Taking the Goods Out" },
      {
        type: "paragraph",
        text: "When the container stays on the trailer or at a loading dock and the cargo comes out through the doors, a forklift does the work. For palletised goods a 3 ton forklift handles most loads, as long as three things are in place:",
      },
      {
        type: "list",
        items: [
          "A way in. A container on a trailer sits well above the ground, so the forklift needs a loading dock or a container ramp to drive inside. Without one, it can only reach the pallets nearest the doors.",
          "A mast that fits. A container's door opening is lower than its inside height, and both are lower than a standard forklift mast at full lift. A container-spec forklift, with a low closed mast and free lift, can raise its forks inside the box without the mast hitting the roof.",
          "Firm, level ground at the doors, so the forklift can turn and set pallets down.",
        ],
      },
      {
        type: "paragraph",
        text: "Heavy single items, such as crated machinery or steel coils, may need a bigger forklift. Tell your rental company the heaviest item and how it is packed.",
      },
      { type: "heading", level: 2, text: "Job 2: Lifting the Whole Container" },
      {
        type: "paragraph",
        text: "If the container has to come off the trailer and sit on the ground, for site storage or because there is no dock, it needs a crane, or a dedicated container handler inside a port terminal. A warehouse forklift is not built to lift a loaded container.",
      },
      {
        type: "paragraph",
        text: "Before booking a crane, find out the container's gross weight. Every loaded container shipped by sea must have a verified gross mass (VGM) declared before loading, and your freight forwarder can give it to you. A loaded 20 ft container can weigh far more than an empty 40 ft, so never judge by size. Then measure the distance from where the crane can stand to where the container will be placed.",
      },
      {
        type: "table",
        caption: "Which machine for which container job",
        headers: ["Job", "Usual machine", "Watch out for"],
        rows: [
          ["Unload pallets at a loading dock", "3 ton forklift with a container mast", "Door height and the condition of the dock plate"],
          ["Unload pallets from a container on a trailer, no dock", "Forklift with a container ramp, or lift the container down first", "Without a ramp the forklift can't reach the far end"],
          ["Remove heavy crated machinery", "A larger forklift", "Item weight, load centre, and floor strength"],
          ["Lift a container off a trailer onto the ground", "Mobile crane with the correct lifting gear", "Gross weight, radius, and the ground under the crane"],
          ["Move goods across rough site ground afterwards", "Boom loader", "Unmade ground where a forklift would sink"],
        ],
      },
      { type: "heading", level: 2, text: "Where a Boom Loader Fits" },
      {
        type: "paragraph",
        text: "When a container is set down on unmade ground at a construction site, a boom loader (telehandler) with forks can take pallets from the container doors and carry them across sand and gravel to where they are needed, or place them on an upper slab. It won't work inside the box like a container-spec forklift, but it is the right machine for everything after the doors.",
      },
      { type: "heading", level: 2, text: "Containers at Ports, Freezones and Industrial Estates" },
      {
        type: "paragraph",
        text: "Sites at Sohar Port and Freezone, the industrial estates, and other controlled facilities usually require machine documents, inspection certificates, and operator IDs before entry. Send the site's requirements when you book, so the paperwork is ready before the container arrives.",
      },
      { type: "heading", level: 2, text: "What to Tell Your Rental Company" },
      {
        type: "list",
        items: [
          "Container size (20 ft, 40 ft, or high cube) and whether it is loaded",
          "Whether the job is unloading the goods, lifting the container, or both",
          "The heaviest single item inside and how it is packed",
          "Whether there is a loading dock or a ramp",
          "Site location, ground conditions, and gate rules",
          "When the container arrives, so the machine is there first",
        ],
      },
    ],
    relatedLinks: [
      { title: "3 Ton Forklift Rental", href: "/equipment/forklift/3-ton-forklift-rental-oman" },
      { title: "Forklift Rental in Oman (3 to 18 Ton)", href: "/equipment/forklift" },
      { title: "Crane & Forklift Rental at Sohar Port", href: "/ports/sohar-port" },
      { title: "Boom Loader or Forklift?", href: "/blog/boom-loader-vs-forklift" },
    ],
  },
  {
    slug: "crane-forklift-site-documents-oman",
    title: "Crane and Forklift Paperwork on Oman Sites: Inspection Certificates, Operator Cards and Gate Passes",
    seoTitle: "TPI Certificates and Operator Cards in Oman",
    description:
      "Inspection certificates, operator cards, and gate passes: what to ask an Omani port, industrial estate, or oil and gas site before a crane or forklift arrives.",
    category: "Site Compliance",
    equipment: ["crane", "forklift", "boom-loader"],
    datePublished: "2026-10-15",
    heroImage: "/images/site/port-container-yard.jpg",
    heroImageAlt: "Container yard inside a port, where machines need gate documents",
    content: [
      {
        type: "paragraph",
        text: "A crane can arrive on time and still not lift anything if its papers are not accepted at the gate. Ports, freezones, industrial estates, and oil and gas sites in Oman each set their own entry rules for lifting equipment and operators, and they check them before the machine comes in. Knowing what is usually asked for, and sending the site's list to your rental company early, avoids a wasted day.",
      },
      { type: "heading", level: 2, text: "Third-Party Inspection (TPI) Certificates" },
      {
        type: "paragraph",
        text: "A third-party inspection (TPI) certificate shows that an independent inspection body has examined a lifting machine and found it fit for use, with a stated capacity and validity period. Cranes, forklifts, and boom loaders are all lifting equipment, so ask the site whether it needs a certificate for each machine, and for the slings and shackles too.",
      },
      {
        type: "paragraph",
        text: "In Oman, the Oman Energy Association (OPAL) approves inspection bodies for lifting equipment, and sites in the energy sector commonly ask for certificates from an OPAL-approved inspector. Other sites set their own rules. Ask which applies to your site, and check that the certificate is valid for the whole hire, not just the first day.",
      },
      { type: "heading", level: 2, text: "Operator Competency Cards" },
      {
        type: "paragraph",
        text: "Sites can check the person as well as the machine. OPAL runs an operator competency scheme with RTITB, and only operators holding the card can work for OPAL member companies. Other sites set their own requirements. Ask which card or certificate the site needs, and for which machine types.",
      },
      { type: "heading", level: 2, text: "What to Ask the Site Before You Book" },
      {
        type: "table",
        caption: "Questions to ask the site's security or HSE team",
        headers: ["Ask about", "Why"],
        rows: [
          ["Machine documents", "Which papers the gate checks for each machine"],
          ["Inspection certificates", "Whether a third-party certificate is needed, and from which inspection bodies"],
          ["Lifting accessories", "Whether slings, shackles, and spreader beams need their own certificates"],
          ["Operator ID", "What identification the gate pass is issued against"],
          ["Operator competency", "Which card or certificate the operator must hold, for which machine types"],
          ["Induction and permits", "Whether the operator needs a safety induction or a permit to work before starting"],
        ],
      },
      {
        type: "paragraph",
        text: "This is a list of things to ask about, not a list of legal requirements. The site owner or main contractor decides what their site requires, and it varies from one to the next.",
      },
      { type: "heading", level: 2, text: "Gate Passes and Inductions" },
      {
        type: "paragraph",
        text: "Controlled sites such as ports, freezones, and plants issue gate passes, and some require a safety induction before work starts. Ask the site's security or HSE team what they need and how long it takes to process, then pass the list to your rental company with the booking.",
      },
      { type: "heading", level: 2, text: "Lift Plans and Permits" },
      {
        type: "paragraph",
        text: "If your site works under a permit-to-work system or needs a lift plan approved before a crane lifts, tell your crane supplier when you book, so the load details, the load chart check, and the operator are ready to fit into your permit.",
      },
      { type: "heading", level: 2, text: "How to Avoid Being Held at the Gate" },
      {
        type: "list",
        items: [
          "Ask the site for its entry requirements in writing when you plan the job",
          "Send that list to your rental company with the booking, not on the morning of the lift",
          "Check that certificates are valid for the whole hire period",
          "Book the operator's induction before the machine arrives",
          "Confirm the gate pass is issued the day before",
        ],
      },
      {
        type: "paragraph",
        text: "Abdul Masood Trading supplies cranes, forklifts, and boom loaders to sites around Sohar Port, Sohar Freezone, and Sohar Industrial Estate. Send the site's requirements when you ask for a quote and we will confirm which machines and operators meet them.",
      },
    ],
    relatedLinks: [
      { title: "Crane & Forklift Rental at Sohar Port", href: "/ports/sohar-port" },
      { title: "Crane & Forklift Rental in Sohar", href: "/services/crane-forklift-rental-sohar" },
      { title: "Crane Rental in Oman", href: "/equipment/crane" },
      { title: "Crane Hire in Oman: Pre-Lift Checklist", href: "/blog/crane-hire-checklist-oman" },
    ],
  },
  {
    slug: "oman-midday-work-ban-equipment-hire",
    title: "Oman's Summer Midday Work Ban: How to Plan Equipment Hire Around It",
    seoTitle: "Oman Midday Work Ban: Planning Equipment Hire",
    description:
      "What the June to August midday break means for crane, excavator, and tipper hire on Omani sites, and how to schedule machines and crews around it.",
    category: "Planning",
    equipment: ["crane", "excavator", "tipper", "wheel-loader", "jcb"],
    datePublished: "2026-10-15",
    heroImage: "/images/fleet/excavator-transport.jpg",
    heroImageAlt: "Excavator on a low-bed trailer leaving for an early-morning start",
    content: [
      {
        type: "paragraph",
        text: "Every summer, Oman's Ministry of Labour stops work at open sites exposed to the sun during the hottest part of the day. For anyone hiring cranes, excavators, tippers, or loaders, that takes three hours out of the working day for three months. Planned well, it costs little. Ignored, it leaves machines standing idle at the most expensive point of the hire.",
      },
      { type: "heading", level: 2, text: "The Rule in Brief" },
      {
        type: "list",
        items: [
          "The ban runs from 1 June to 31 August each year",
          "Outdoor work at sites exposed to direct sun stops from 12:30 pm to 3:30 pm",
          "It covers construction sites and other open workplaces",
          "The Ministry inspects sites during the break and penalises employers who break the rule",
        ],
      },
      {
        type: "paragraph",
        text: "The Ministry confirms the ban each year and has corrected social media posts that got its start date wrong, so check its official channels for the current year's details, and for any exemptions, before you plan around them.",
      },
      { type: "heading", level: 2, text: "What It Means for Hired Machines" },
      {
        type: "paragraph",
        text: "Operators and tipper drivers working on an open site are outdoor workers too, and the banksman, riggers, and crew around a machine are in the sun regardless of the cab. Plan for the machine to stop when the site stops at 12:30 pm, and check with the Ministry before relying on any exemption.",
      },
      {
        type: "paragraph",
        text: "Before the hire starts, agree with your rental company how the break is treated: whether the daily hire covers a split day, and how hours either side of the break are counted.",
      },
      { type: "heading", level: 2, text: "Scheduling Around the Break" },
      {
        type: "table",
        caption: "Ways to keep machines productive in summer",
        headers: ["Approach", "Works well for", "What to arrange"],
        rows: [
          ["Early start", "Earthworks, loading tippers, most daily lifting", "Site access and the gate open before dawn"],
          ["Split shift: morning, then late afternoon", "Long earthworks and haulage", "Operator rest, and safe hours either side of the break"],
          ["Night work", "Crane lifts, road works, port and plant jobs", "Lighting, permits, and the site's approval for night work"],
          ["Covered work during the break", "Forklifts inside warehouses", "Confirm the area really is shaded and not sun-exposed"],
        ],
      },
      {
        type: "paragraph",
        text: "Crane lifts are worth scheduling for the early morning, before the heat builds.",
      },
      { type: "heading", level: 2, text: "Heat and the Machines Themselves" },
      {
        type: "list",
        items: [
          "Hydraulic oil and engine coolant run hotter; operators should watch the gauges and stop if a machine overheats",
          "Tyres on tippers and loaders heat up on hot roads; check pressures before each haul",
          "Steps, handrails, and steel surfaces get hot enough to burn, so gloves are essential",
        ],
      },
      { type: "heading", level: 2, text: "Dhofar Is Different" },
      {
        type: "paragraph",
        text: "In Salalah and coastal Dhofar, summer brings the khareef monsoon from about June to September: mist, drizzle, and wet ground rather than extreme heat. Plan for soft ground under crane outriggers and slippery haul roads, and allow extra time for lifts in poor visibility.",
      },
      { type: "heading", level: 2, text: "Planning a Summer Hire" },
      {
        type: "paragraph",
        text: "If your project runs through June, July, and August, tell your equipment supplier the working pattern you plan to use when you ask for a quote, so the hire matches the hours your site can actually work.",
      },
    ],
    relatedLinks: [
      { title: "Daily, Weekly or Monthly Hire?", href: "/blog/daily-weekly-monthly-equipment-hire" },
      { title: "Excavator Rental in Oman", href: "/equipment/excavator" },
      { title: "Tipper Rental in Oman", href: "/equipment/tipper" },
      { title: "Equipment Rental in Salalah", href: "/locations/salalah" },
    ],
  },
  {
    slug: "villa-plot-site-preparation-oman",
    title: "Preparing a Villa Plot in Oman: Which Machines, and in What Order",
    seoTitle: "Villa Plot Site Preparation in Oman",
    description:
      "The earthworks stages of a typical villa build in Oman, the machine each stage needs, and how to avoid paying for equipment that stands idle.",
    category: "Earthmoving",
    equipment: ["jcb", "excavator", "tipper", "wheel-loader"],
    datePublished: "2026-10-15",
    heroImage: "/images/fleet/excavator-transport.jpg",
    heroImageAlt: "Compact excavator on a trailer, on its way to a villa plot",
    content: [
      {
        type: "paragraph",
        text: "A villa build starts with earthworks: the plot has to be cleared, levelled, dug for footings, backfilled, and tidied before the blockwork starts. Each stage suits a different machine. Knowing the order of work lets you book the right equipment for each step, instead of one machine that struggles with half of them.",
      },
      { type: "heading", level: 2, text: "Before Any Machine Arrives" },
      {
        type: "list",
        items: [
          "Building permit: make sure the municipality has issued it before excavation starts.",
          "Setting out: the surveyor marks the plot boundary and building lines, so the machine digs in the right place.",
          "Buried services: check for water, power, and telecom lines at the plot edge and in the street, especially where you will connect to them.",
          "Access: make sure a low-bed trailer can reach and turn near the plot, or warn your rental company about narrow streets.",
        ],
      },
      { type: "heading", level: 2, text: "The Earthworks Sequence" },
      {
        type: "table",
        caption: "Villa earthworks, stage by stage",
        headers: ["Stage", "Usual machine", "Notes"],
        rows: [
          ["Clearing", "JCB backhoe loader", "Removes debris, scrub, and old structures"],
          ["Levelling, cut and fill", "JCB, or a wheel loader on large plots", "Brings the plot to the level on the drawings"],
          ["Footing and tie-beam excavation", "JCB; an excavator for basements or rock", "Dug to the depths on the drawings"],
          ["Removing spoil", "Tipper, loaded by the JCB or excavator", "To a site where the municipality allows it"],
          ["Importing fill", "Tipper, spread by a JCB or wheel loader", "Placed and compacted in layers"],
          ["Backfilling around foundations", "JCB", "Compacted in layers with your contractor's compaction equipment"],
          ["Final grading and clean-up", "JCB", "Leaves the plot ready for the next trades"],
        ],
      },
      { type: "heading", level: 2, text: "Why a JCB Does Most of the Work" },
      {
        type: "paragraph",
        text: "On a typical villa plot, one JCB backhoe loader handles clearing, digging footings, backfilling, and levelling. Its rear arm digs, its front bucket loads and levels, and it can drive on the road between nearby plots. For many villa projects, a JCB, plus a tipper when soil has to leave the plot, is all the hired plant the earthworks need.",
      },
      { type: "heading", level: 2, text: "When You Need an Excavator Instead" },
      {
        type: "list",
        items: [
          "A basement, an underground water tank, or a swimming pool",
          "Rock close to the surface, common in parts of Muscat and the interior",
          "A large volume of soil to dig and load into tippers quickly",
        ],
      },
      {
        type: "paragraph",
        text: "An excavator digs deeper and faster than a JCB and loads tippers more efficiently, but it moves around a site more slowly and needs a low-bed to travel between sites. On a plot with a basement, the usual pattern is an excavator for the dig, then a JCB for the backfill and tidy-up.",
      },
      { type: "heading", level: 2, text: "Ground Conditions Across Oman" },
      {
        type: "paragraph",
        text: "On the sandy Batinah coast, around Sohar, the water table can be shallow near the sea, so deep footings may meet water. In parts of Muscat and the interior you may hit rock, which slows digging and can change the machine you need. Your soil report says what to expect on your plot; share it with your rental company.",
      },
      { type: "heading", level: 2, text: "Avoiding Idle Machine Time" },
      {
        type: "list",
        items: [
          "Book tippers for the days spoil is actually loaded, not the whole earthworks period",
          "Have the surveyor's marks in place before the machine arrives",
          "Line up any inspection of the excavation, so the machine isn't waiting to backfill",
          "Group small jobs on neighbouring plots into one hire where you can",
        ],
      },
      {
        type: "paragraph",
        text: "Abdul Masood Trading rents JCBs, excavators, wheel loaders, and tippers with operators across Oman. Send the plot location, the drawings or a description of the work, and your start date, and we will suggest the right combination.",
      },
    ],
    relatedLinks: [
      { title: "JCB Backhoe Loader Rental", href: "/equipment/jcb-backhoe-loader" },
      { title: "Excavator, JCB or Wheel Loader?", href: "/blog/excavator-vs-jcb-vs-wheel-loader" },
      { title: "How Many Tipper Trucks Do You Need?", href: "/blog/how-many-tippers-do-i-need" },
      { title: "Tipper Rental in Oman", href: "/equipment/tipper" },
    ],
  },
  {
    slug: "equipment-hire-with-operator-wet-vs-dry",
    title: "Equipment Hire With or Without an Operator: Wet Hire vs Dry Hire",
    seoTitle: "Wet Hire vs Dry Hire: With or Without Operator",
    description:
      "What operated (wet) and self-operated (dry) equipment hire mean in Oman, who is responsible for what, and which suits cranes, excavators, and forklifts.",
    category: "Hiring Basics",
    equipment: ["crane", "forklift", "excavator", "jcb", "wheel-loader", "tipper", "boom-loader"],
    datePublished: "2026-10-15",
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Counterbalance forklift in a warehouse aisle",
    content: [
      {
        type: "paragraph",
        text: "Heavy equipment can be hired with an operator or without one. The two arrangements are usually called wet hire and dry hire. Wet hire means the machine comes with an operator, and often fuel and servicing; dry hire means the machine alone, run by your own staff. The terms are used loosely, so always check what a quote actually includes. The choice changes who is responsible for the machine, who carries the risk, and what you pay.",
      },
      { type: "heading", level: 2, text: "Operated Hire (Wet Hire)" },
      {
        type: "paragraph",
        text: "The rental company supplies the machine and an operator who knows it. Your supervisor directs the work; the operator runs the machine and decides what is safe for it. That matters most for machines with little margin for error, such as cranes, and for machines your team doesn't use every day.",
      },
      { type: "heading", level: 2, text: "Self-Operated Hire (Dry Hire)" },
      {
        type: "paragraph",
        text: "You hire the machine only and supply a competent, licensed operator from your own staff. It gives you flexibility over who runs the machine and when, and it suits companies that already employ operators for that machine type. In exchange, you take responsibility for how the machine is used.",
      },
      {
        type: "table",
        caption: "Wet hire vs dry hire at a glance",
        headers: ["", "With operator (wet)", "Without operator (dry)"],
        rows: [
          ["Who operates", "The rental company's operator", "Your own staff"],
          ["Who proves operator competence", "The rental company", "You"],
          ["Site documents for the operator", "Supplied by the rental company", "Supplied by you"],
          ["Suits", "Cranes, excavators, loaders, tippers", "Forklifts and machines your team runs daily"],
          ["Main advantage", "An experienced operator who knows the machine", "Flexibility over who operates and when"],
        ],
      },
      { type: "heading", level: 2, text: "Why Cranes Are Hired With an Operator" },
      {
        type: "paragraph",
        text: "A mobile crane needs an operator who knows its load chart, its set-up, and its limits, and on OPAL member sites in the energy sector the operator must hold an OPAL/RTITB competency card. That is why cranes are hired with an operator. Tippers are the same: they come with a licensed driver.",
      },
      { type: "heading", level: 2, text: "When Dry Hire Makes Sense" },
      {
        type: "paragraph",
        text: "Forklifts are different. A warehouse or factory that runs forklifts every day may have its own licensed drivers and want just the machine for a busy period or while their own forklift is being repaired. At Abdul Masood Trading, forklifts can be hired without an operator when your staff hold the required licence; the other machines in the fleet come with an operator or driver.",
      },
      { type: "heading", level: 2, text: "Questions to Settle Before You Sign" },
      {
        type: "list",
        items: [
          "What does the rate include: operator, fuel, servicing, transport both ways?",
          "How many working hours are in a day, and how is overtime charged?",
          "Who supplies the fuel, and how is it measured?",
          "If the machine breaks down, is it repaired or replaced, and is the hire paused?",
          "Who is responsible for damage, and what insurance covers the machine at work?",
          "On remote sites, how are the operator's accommodation and transport arranged?",
        ],
      },
      {
        type: "paragraph",
        text: "Settle these at the start rather than at the end of the hire. Put them in the booking confirmation or LPO, so everyone on site works from the same terms.",
      },
    ],
    relatedLinks: [
      { title: "Forklift Rental in Oman (3 to 18 Ton)", href: "/equipment/forklift" },
      { title: "Crane Rental in Oman", href: "/equipment/crane" },
      { title: "How to Rent Heavy Equipment in Oman", href: "/blog/how-to-rent-heavy-equipment-oman" },
      { title: "Request a Quote", href: "/contact" },
    ],
  },
  {
    slug: "daily-weekly-monthly-equipment-hire",
    title: "Daily, Weekly or Monthly Equipment Hire: Choosing the Right Term",
    seoTitle: "Daily vs Weekly vs Monthly Equipment Hire",
    description:
      "How the hire term changes what you pay for cranes, excavators, forklifts, and tippers in Oman, and how to plan around transport, extensions, and holidays.",
    category: "Hiring Basics",
    equipment: ["excavator", "forklift", "tipper", "crane", "jcb", "wheel-loader", "boom-loader"],
    datePublished: "2026-10-15",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Boom loader working on a construction site at sunset",
    content: [
      {
        type: "paragraph",
        text: "The day rate is only part of what equipment hire costs. Transport to and from site, idle days, and extensions all add up, and the hire term you choose decides how much of each you pay. This guide sets out when daily, weekly, and monthly hire make sense on Omani projects.",
      },
      {
        type: "table",
        caption: "Choosing a hire term",
        headers: ["Term", "Best for", "Watch out for"],
        rows: [
          ["Single lift or daily", "One-off lifts, short jobs, a known one-day task", "Transport is a large share of the bill"],
          ["Weekly", "Jobs of several days, or when the end date is uncertain", "Idle days still count while the machine is on site"],
          ["Monthly", "Ongoing work on one site: earthworks, steel erection, warehouse cover", "Committing before the site is ready to start"],
        ],
      },
      { type: "heading", level: 2, text: "Transport Is the Hidden Cost of Short Hires" },
      {
        type: "paragraph",
        text: "Heavy machines travel on low-bed trailers, and moving an excavator or a heavy forklift costs much the same whether it stays for a day or a month. On short hires the transport can be a large part of the bill, and the further the site is from the yard, the stronger the case for a longer hire. From our Sohar base, daily, weekly, and monthly hire are all available in Sohar, Muscat, and Al Buraimi. For places further away, such as Nizwa, Ibri, Sur, Duqm, and Salalah, weekly and monthly hire work best, because the transport cost is spread across the hire.",
      },
      { type: "heading", level: 2, text: "When Daily Hire Is Right" },
      {
        type: "list",
        items: [
          "The task is clearly defined and will finish in a day",
          "A crane is needed for a one-off lift or delivery",
          "The site is close to the yard, so transport is a small part of the cost",
        ],
      },
      { type: "heading", level: 2, text: "When to Go Weekly" },
      {
        type: "paragraph",
        text: "Weekly hire suits jobs that run for several days, or work whose end date depends on things you don't control, like deliveries or inspections. It keeps you flexible: if the work finishes early, you are not tied into a month.",
      },
      { type: "heading", level: 2, text: "When Monthly Hire Pays Off" },
      {
        type: "paragraph",
        text: "Monthly hire suits bulk earthworks, steel erection, warehouse peaks, and any project where the machine would otherwise be booked and returned again and again. The machine stays on site, so it is there when the work is ready. Ask for daily, weekly, and monthly rates and compare them against the days you really expect to use the machine.",
      },
      { type: "heading", level: 2, text: "Plan for Days the Machine Can't Work" },
      {
        type: "list",
        items: [
          "Fridays and public holidays, if your site doesn't work them",
          "Eid al-Fitr and Eid al-Adha, when many sites close for several days",
          "Shorter working hours during Ramadan",
          "The summer midday break, 12:30 pm to 3:30 pm, from June to August",
          "Rain days, and khareef weather in Dhofar",
        ],
      },
      {
        type: "paragraph",
        text: "Count these days when you choose the term. On daily hire you can off-hire the machine around them, but only if the transport makes it worthwhile.",
      },
      { type: "heading", level: 2, text: "Extensions and Off-Hire" },
      {
        type: "paragraph",
        text: "Work often runs longer than planned. Ask at the start how extensions work and how much notice you need to give to off-hire. At Abdul Masood Trading a hire can be extended on site if the work runs on; tell us as early as you can, so the machine isn't promised to another job.",
      },
      { type: "heading", level: 2, text: "A Simple Rule of Thumb" },
      {
        type: "paragraph",
        text: "If you don't know how long the work will take, start on weekly hire and extend. If you know the machine will be busy every day for a month or more, ask for a monthly rate from the start.",
      },
    ],
    relatedLinks: [
      { title: "Equipment Hire With or Without an Operator", href: "/blog/equipment-hire-with-operator-wet-vs-dry" },
      { title: "Oman Coverage by Governorate", href: "/locations" },
      { title: "Full Fleet", href: "/equipment" },
      { title: "Request a Quote", href: "/contact" },
    ],
  },
  {
    slug: "how-many-tippers-do-i-need",
    title: "How Many Tipper Trucks Do You Need? Planning an Earthmoving Haul",
    seoTitle: "How Many Tipper Trucks Do You Need?",
    description:
      "A simple method to work out how many tippers keep your excavator or wheel loader busy, with a worked example and the mistakes that slow a haul down.",
    category: "Earthmoving",
    equipment: ["tipper", "excavator", "wheel-loader"],
    datePublished: "2026-10-15",
    heroImage: "/images/fleet/excavator-transport.jpg",
    heroImageAlt: "Excavator on a trailer, the loading machine for a tipper haul",
    content: [
      {
        type: "paragraph",
        text: "On any earthmoving job, the loading machine and the tippers work as one system. Too few tippers and the excavator waits with a full bucket. Too many and trucks queue at the loading point while you pay for them. The right number comes from a simple calculation you can do before you book.",
      },
      { type: "heading", level: 2, text: "Step 1: Time One Full Cycle" },
      { type: "paragraph", text: "A tipper's cycle is everything it does between one load and the next:" },
      {
        type: "list",
        items: [
          "Loading: the time it takes the excavator or wheel loader to fill the truck",
          "Hauling: the drive from the loading point to the tipping site",
          "Tipping: reversing in, tipping, and pulling away",
          "Returning: the drive back, usually a little faster when empty",
          "Queuing and manoeuvring at both ends",
        ],
      },
      { type: "heading", level: 2, text: "Step 2: Divide by the Loading Time" },
      {
        type: "paragraph",
        text: "Tippers needed ≈ total cycle time ÷ loading time per truck. If the cycle takes 40 minutes and the loader fills one truck every 5 minutes, you need about 8 tippers to keep the loader working without a break. Round up if keeping the loading machine busy matters most; round down if keeping trucks moving matters more.",
      },
      {
        type: "table",
        caption: "Worked example: excavation spoil to a tipping site 10 km away",
        headers: ["Part of the cycle", "Time"],
        rows: [
          ["Loading by excavator", "5 min"],
          ["Haul to the tipping site, loaded", "15 min"],
          ["Tipping and turning", "4 min"],
          ["Return, empty", "12 min"],
          ["Queuing and manoeuvring", "4 min"],
          ["Total cycle", "40 min"],
          ["Tippers needed (40 ÷ 5)", "8"],
        ],
      },
      {
        type: "paragraph",
        text: "These times are an illustration. Time your own first few loads and adjust the number of trucks on day two.",
      },
      { type: "heading", level: 2, text: "Step 3: Check Volume and Weight" },
      {
        type: "paragraph",
        text: "Soil swells when it is dug: a cubic metre in the ground becomes more than a cubic metre in the truck, often by a quarter or more, and broken rock swells further. When you estimate how many loads the job needs, work from the loose volume, not the size of the hole. Check weight too: wet sand and rock can reach a tipper's legal weight limit before the body is full, so don't plan loads by volume alone.",
      },
      { type: "heading", level: 2, text: "What Slows a Haul Down" },
      {
        type: "list",
        items: [
          "A poor haul road: soft sand and potholes slow loaded trucks and wear tyres",
          "One-way access with no turning space at the loading point",
          "Queues at the tipping site for a gate or weighbridge",
          "Peak-hour traffic on main roads",
          "The summer midday break, which stops the haul from 12:30 pm to 3:30 pm in June, July, and August",
        ],
      },
      { type: "heading", level: 2, text: "Where Can the Material Go?" },
      {
        type: "paragraph",
        text: "Construction and demolition waste must go to a disposal site designated by the municipality, never into a wadi, a low-lying area, or the nearest empty plot. Check with the municipality where your excavated soil may go, and agree the tipping site before the haul starts, because its distance drives the whole calculation.",
      },
      { type: "heading", level: 2, text: "Match the Loader to the Trucks" },
      {
        type: "paragraph",
        text: "An excavator suits loading from a dig face. A wheel loader suits loading from a stockpile, such as at a crusher or when moving imported fill, and fills trucks quickly on firm, level ground. Hiring the loading machine and the tippers from one supplier keeps them on one schedule. Abdul Masood Trading rents tippers with drivers, and excavators and wheel loaders with operators, across Oman. Tell us the volume, the distance to the tipping site, and your working hours, and we will suggest the fleet.",
      },
    ],
    relatedLinks: [
      { title: "Tipper Rental in Oman", href: "/equipment/tipper" },
      { title: "Wheel Loader Rental", href: "/equipment/wheel-loader" },
      { title: "Excavator Rental in Oman", href: "/equipment/excavator" },
      { title: "Excavator, JCB or Wheel Loader?", href: "/blog/excavator-vs-jcb-vs-wheel-loader" },
    ],
  },
  {
    slug: "how-to-rent-heavy-equipment-oman",
    title: "How to Rent Heavy Equipment in Oman: A Step-by-Step Guide",
    seoTitle: "How to Rent Heavy Equipment in Oman",
    description:
      "From choosing the machine to off-hire: the steps, information, and documents involved in renting cranes, excavators, forklifts, and tippers in Oman.",
    category: "Hiring Basics",
    equipment: ["crane", "forklift", "excavator", "jcb", "wheel-loader", "tipper", "boom-loader"],
    datePublished: "2026-10-15",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telescopic boom loader with pallet forks on a construction site",
    content: [
      {
        type: "paragraph",
        text: "Renting heavy equipment in Oman is straightforward once you know what the rental company needs from you. One missing detail, such as the load weight, the site pin, or the gate requirements, is enough to hold up a booking. Follow these steps and the right machine arrives on the right day, with nothing held up at the gate.",
      },
      { type: "heading", level: 2, text: "Step 1: Describe the Job, Not Just the Machine" },
      {
        type: "paragraph",
        text: "Start with what has to be done: lift a tank onto a plinth, dig a long utility trench, load several thousand cubic metres of fill. A good rental company may suggest a different machine from the one you had in mind, and that suggestion can save you money.",
      },
      {
        type: "table",
        caption: "Which machine for which job",
        headers: ["Job", "Machine"],
        rows: [
          ["Lifting loads up, over, or into position", "Mobile crane"],
          ["Moving palletised goods on firm ground", "Forklift"],
          ["Lifting materials to height on rough ground", "Boom loader"],
          ["Deep digging and bulk excavation", "Excavator"],
          ["Mixed digging, loading, and levelling on small sites", "JCB backhoe loader"],
          ["Loading trucks and moving loose material", "Wheel loader"],
          ["Carrying soil, sand, aggregate, and waste", "Tipper truck"],
        ],
      },
      { type: "heading", level: 2, text: "Step 2: Gather the Details" },
      {
        type: "list",
        items: [
          "Site location, ideally as a map pin",
          "The heaviest load, or the volume of material to move",
          "For cranes, the lift height and radius; for excavators, the dig depth",
          "Ground conditions, and access for a low-bed trailer",
          "Start date, working hours, and expected duration",
          "Site entry requirements: gate passes, inductions, certificates",
        ],
      },
      { type: "heading", level: 2, text: "Step 3: Ask for a Quote and Compare Like With Like" },
      {
        type: "paragraph",
        text: "When you compare quotes, check that each covers the same things: the operator, transport both ways, working hours per day, overtime, fuel, and what happens if the machine breaks down. The lowest day rate is not always the lowest total cost.",
      },
      { type: "heading", level: 2, text: "Step 4: Confirm the Booking" },
      {
        type: "paragraph",
        text: "Confirm the hire in writing, for example with a purchase order (LPO), stating the machine, the rate, the hire period, and the site. Send any documents the site needs from the rental company, such as a gate pass request, at the same time.",
      },
      { type: "heading", level: 2, text: "Step 5: Prepare the Site" },
      {
        type: "list",
        items: [
          "Clear access for the low-bed, and a firm, level area for the machine to work from",
          "Mark overhead lines and buried services near the work",
          "Have a supervisor on site to receive the machine and brief the operator",
          "Book the operator's induction if the site needs one",
        ],
      },
      { type: "heading", level: 2, text: "Step 6: While the Machine Is on Hire" },
      {
        type: "paragraph",
        text: "Check the machine when it arrives and note any existing damage. Agree how hours are recorded, for example on a daily timesheet signed by your supervisor, and sign it every day. Signed timesheets prevent arguments when the invoice arrives.",
      },
      { type: "heading", level: 2, text: "Step 7: Extend or Off-Hire" },
      {
        type: "paragraph",
        text: "Tell the rental company as soon as you know the work will run on or finish early. Off-hire in writing, and agree when the machine will be collected, so the hire stops on the day you expect.",
      },
      {
        type: "paragraph",
        text: "Abdul Masood Trading rents cranes, tippers, boom loaders, 3 to 18 ton forklifts, excavators, JCBs, and wheel loaders from its yard in Sohar Industrial Estate to sites in all 11 governorates of Oman. Call or WhatsApp +968 7928 8727 with the details above for a quote.",
      },
    ],
    relatedLinks: [
      { title: "Full Fleet", href: "/equipment" },
      { title: "Daily, Weekly or Monthly Hire?", href: "/blog/daily-weekly-monthly-equipment-hire" },
      { title: "Crane and Forklift Paperwork on Oman Sites", href: "/blog/crane-forklift-site-documents-oman" },
      { title: "Request a Quote", href: "/contact" },
    ],
  },
]
