import type { BlogPostInput } from "@/lib/blog/types"

/**
 * Informational guides chosen from the Oman keyword database (Semrush Keyword
 * Magic Tool, November 2026): "crane" (720/mo), "mobile crane" (210), "eot
 * crane" (170), "crawler / gantry / tower crane" (110 each), the crane load
 * chart cluster, "crane hand signals", "crane lifting hazards and control
 * measures", and "forklift safety / inspection checklist". The Oman equipment
 * rental competitors that rank (Al Asfar, Kanda's, Al Bahar, Bin Salim, Al
 * Marwan) publish none of this, so these pages are open ground.
 *
 * Rules: no load-chart figures (every crane model's chart is different and a
 * made-up number could cause an accident), no machine sizes the yard does not
 * have, and standards named only as the reference a site's lifting plan
 * follows, with a pointer to check the site's own rules.
 */
export const safetyPosts: BlogPostInput[] = [
  // ------------------------------------------------- Boom lift vs scissor vs loader
  {
    // Search Console shows "boom loader", "boom lift", "telescopic boom lift",
    // and "scissor lift" queries landing on the same pages, so this guide
    // separates the three machines and links each to its own page.
    slug: "boom-lift-vs-scissor-lift-vs-boom-loader",
    title: "Boom Lift vs Scissor Lift vs Boom Loader: Which Machine Do You Need?",
    seoTitle: "Boom Lift vs Scissor Lift vs Boom Loader",
    description:
      "Boom lifts and scissor lifts carry people; boom loaders carry materials. How the three differ, which one fits your job, and what to tell the rental company.",
    category: "Equipment Guides",
    equipment: ["boom-lift", "scissor-lift", "boom-loader"],
    datePublished: "2026-11-05",
    places: ["Oman"],
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Telescopic boom loader on a construction site",
    content: [
      {
        type: "paragraph",
        text: "Short answer: if people need to work at height, hire a work platform — a scissor lift when the work is straight up and you need a wide deck, or a boom lift when you must reach out or over obstacles. If materials need to go up, hire a boom loader (telehandler), which carries pallets on forks and is not designed to lift people. The names sound alike, but the machines do different jobs.",
      },
      {
        type: "table",
        caption: "Boom lift, scissor lift, and boom loader compared",
        headers: ["", "Boom lift", "Scissor lift", "Boom loader (telehandler)"],
        rows: [
          ["Lifts", "People and hand tools", "People, tools, and some materials", "Materials on forks"],
          ["Movement", "Up and out on a telescopic or jointed arm", "Straight up only", "Up and forward on a telescopic boom"],
          ["Best for", "Facades, steel, reaching over obstacles", "Ceilings, MEP, racking, painting", "Blocks, cement, rebar to upper floors"],
          ["Platform", "Small basket", "Wide deck", "No platform — forks or attachments"],
          ["Other names", "Man lift, cherry picker, aerial work platform", "Scissor platform", "Telehandler, telescopic handler"],
        ],
      },
      { type: "heading", level: 2, text: "When to Choose a Boom Lift" },
      {
        type: "paragraph",
        text: "Choose a boom lift when the work is not directly above where the machine can stand: a facade behind a landscaped strip, steel over a pipe rack, a light above a roof edge. Telescopic boom lifts give the most height and outreach in a straight line; articulating boom lifts bend up and over obstacles.",
      },
      { type: "heading", level: 2, text: "When to Choose a Scissor Lift" },
      {
        type: "paragraph",
        text: "Choose a scissor lift for long runs of work directly overhead, such as ceilings, ducts, sprinklers, and racking, where a crew needs room for tools and materials. Electric models suit indoor finished floors; rough-terrain models work outdoors on site.",
      },
      { type: "heading", level: 2, text: "When to Choose a Boom Loader" },
      {
        type: "paragraph",
        text: "Choose a boom loader to move materials: pallets of blocks onto a slab, cement bags to a scaffold bay, rebar bundles across rough ground. It is a material handler, not a work platform.",
      },
      { type: "heading", level: 2, text: "What to Tell the Rental Company" },
      {
        type: "list",
        items: [
          "Whether you are lifting people or materials.",
          "The working height, and how far out the work is from where the machine can stand.",
          "Indoor or outdoor, and the floor or ground conditions.",
          "The weight in the basket or on the forks.",
          "The site location and how long you need the machine.",
        ],
      },
    ],
    relatedLinks: [
      { title: "Boom Lift Rental in Oman", href: "/equipment/boom-lift" },
      { title: "Scissor Lift Rental in Oman", href: "/equipment/scissor-lift" },
      { title: "Boom Loader Rental in Oman", href: "/equipment/boom-loader" },
      { title: "Boom Loader vs Forklift", href: "/blog/boom-loader-vs-forklift" },
    ],
    faqs: [
      {
        question: "Is a boom lift the same as a boom loader?",
        answer:
          "No. A boom lift carries people in a basket for work at height; a boom loader (telehandler) carries materials on forks.",
      },
      {
        question: "What is the difference between a scissor lift and a boom lift?",
        answer:
          "A scissor lift goes straight up with a wide platform; a boom lift reaches up and out on an arm with a small basket.",
      },
      {
        question: "Does Abdul Masood Trading rent all three?",
        answer: "Yes. Boom lifts, scissor lifts, and boom loaders are all available for rent across Oman from Sohar.",
      },
    ],
  },
  // ---------------------------------------------------------------- Types of crane
  {
    slug: "types-of-cranes",
    title: "Types of Cranes: Mobile, Crawler, Tower, EOT, Gantry, and Jib Cranes Explained",
    seoTitle: "Types of Cranes Explained: Mobile, Tower, EOT & More",
    description:
      "The main types of crane — mobile, crawler, tower, overhead EOT, gantry, and jib — what each is used for, which ones you rent by the day, and how to choose.",
    category: "Lifting",
    equipment: ["crane"],
    datePublished: "2026-11-05",
    places: ["Oman"],
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Yellow mobile crane with its boom retracted",
    content: [
      {
        type: "paragraph",
        text: "Short answer: cranes fall into two groups. Mobile cranes and crawler cranes travel to a site and are hired for a lift, a day, or a project. Tower cranes, overhead EOT cranes, gantry cranes, and jib cranes are installed in one place — on a building site or inside a factory — and stay there. For most one-off lifts in Oman, such as offloading machinery, setting steel, or placing a tank, the crane you rent is a mobile crane.",
      },
      {
        type: "table",
        caption: "The main types of crane and where each is used",
        headers: ["Crane type", "How it works", "Typical use", "Usually hired by the day?"],
        rows: [
          ["Mobile (truck) crane", "Truck chassis, telescopic boom, outriggers", "Offloading, steel erection, plant installation", "Yes"],
          ["Crawler crane", "Tracks instead of wheels, lattice or telescopic boom", "Heavy lifts and long projects on soft ground", "Project hire"],
          ["Tower crane", "Fixed mast with a horizontal jib", "High-rise buildings", "No — installed for the project"],
          ["Overhead (EOT) crane", "Electric hoist on a bridge running along rails", "Lifting inside factories and workshops", "No — part of the building"],
          ["Gantry crane", "Bridge on legs running on rails or wheels", "Ports, precast yards, steel stockyards", "No — fixed in a yard"],
          ["Jib crane", "Arm on a pillar or wall, often slewing", "Workstations and loading bays", "No — fixed"],
          ["Lorry loader (HIAB)", "Knuckle-boom crane on a truck", "Delivering and placing lighter loads", "Yes, with the truck"],
        ],
      },
      { type: "heading", level: 2, text: "Mobile Cranes" },
      {
        type: "paragraph",
        text: "A mobile crane drives to site on the road, extends its outriggers, and lifts with a telescopic boom. It needs no assembly, so it can be working within an hour of arriving, which is why it is the standard choice for single lifts and short hires. Size is quoted in tons, but that figure is the maximum close to the crane; what it lifts on your job depends on the radius and height.",
      },
      { type: "heading", level: 2, text: "Crawler Cranes" },
      {
        type: "paragraph",
        text: "Crawler cranes sit on tracks, which spread their weight over soft ground and let them move short distances carrying a load. They are brought in on several trucks and assembled on site, so they are used for heavy lifts and long projects rather than single jobs.",
      },
      { type: "heading", level: 2, text: "Tower Cranes" },
      {
        type: "paragraph",
        text: "A tower crane is built on a fixed base beside or inside a building and climbs as the structure rises. It serves the whole floor plate for the months the frame is going up. It is a project installation, not a day hire.",
      },
      { type: "heading", level: 2, text: "Overhead EOT, Gantry, and Jib Cranes" },
      {
        type: "paragraph",
        text: "EOT stands for electric overhead travelling crane: a bridge running on rails along a factory's walls, with a hoist that travels across it. Gantry cranes do the same job on legs, outdoors in ports and stockyards. Jib cranes are a single arm serving one workstation. All three are part of a building or yard. When a factory needs to lift something its EOT crane cannot reach — a machine arriving on a trailer outside, or a load heavier than the crane's rating — a mobile crane or a heavy forklift is hired for the day.",
      },
      { type: "heading", level: 2, text: "How to Choose" },
      {
        type: "list",
        items: [
          "One lift or a few days of lifting, with road access: a mobile crane.",
          "Very heavy loads or months of lifting on soft ground: a crawler crane.",
          "A multi-storey frame over many months: a tower crane.",
          "Repeated lifting in one bay of a factory: an overhead EOT or jib crane.",
          "Unsure: send the weight, the distance from where a crane can stand, and the lift height, and ask the supplier which type fits.",
        ],
      },
    ],
    relatedLinks: [
      { title: "Mobile Crane Rental in Oman", href: "/equipment/crane" },
      { title: "25 Ton vs 50 Ton Crane", href: "/blog/25-ton-vs-50-ton-crane" },
      { title: "Crane Rental Cost in Oman", href: "/blog/crane-rental-cost-oman" },
    ],
    faqs: [
      {
        question: "What is the most common type of crane for hire?",
        answer:
          "The mobile (truck) crane, because it drives to site, sets up quickly, and suits single lifts and short hires.",
      },
      {
        question: "What does EOT crane mean?",
        answer:
          "Electric overhead travelling crane: a bridge crane running on rails inside a factory or workshop, with an electric hoist that travels across it.",
      },
      {
        question: "Which cranes does Abdul Masood Trading rent?",
        answer: "25 and 50 ton mobile cranes with operators, delivered from Sohar to sites across Oman.",
      },
    ],
  },

  // ---------------------------------------------------------------- Load chart
  {
    slug: "how-to-read-a-crane-load-chart",
    title: "How to Read a Mobile Crane Load Chart (and Why the Tonnage Isn't What It Lifts)",
    seoTitle: "How to Read a Crane Load Chart: Step by Step",
    description:
      "What the rows and columns on a mobile crane load chart mean, how radius, boom length, and outriggers change capacity, and what to send a crane supplier.",
    category: "Lifting",
    equipment: ["crane"],
    datePublished: "2026-11-05",
    places: ["Oman"],
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Mobile crane ready to set up on outriggers",
    content: [
      {
        type: "paragraph",
        text: "Short answer: a load chart is a table of how much a specific crane can safely lift at each combination of radius (how far the load is from the crane's centre) and boom length. Find your radius in one direction and your boom length in the other; the number where they meet is the most the crane may lift in that set-up, and the weight of the hook block and rigging comes off it. The crane's rated tonnage — 25 ton or 50 ton — is only reached very close in, so the real capacity on your job is almost always lower.",
      },
      { type: "heading", level: 2, text: "What Is on a Load Chart" },
      {
        type: "table",
        caption: "The parts of a typical mobile crane load chart",
        headers: ["Item on the chart", "What it means", "Why it matters"],
        rows: [
          ["Radius", "Horizontal distance from the crane's slewing centre to the hook", "Capacity falls quickly as radius grows"],
          ["Boom length", "How far the telescopic boom is extended", "A longer boom reaches higher but lifts less"],
          ["Rated capacity", "The safe load at that radius and boom length", "The ceiling for the lift, before deductions"],
          ["Outrigger set-up", "Fully extended, partly extended, or on tyres", "Each set-up has its own chart; full outriggers lift most"],
          ["Working area", "Over the rear, over the side, or 360°", "Some charts are lower over the side or front"],
          ["Counterweight", "The counterweight fitted for that chart", "A chart only applies with its stated counterweight"],
          ["Notes and deductions", "Hook block, jib, and rigging weights", "These count as part of the load"],
        ],
      },
      { type: "heading", level: 2, text: "Reading It in Five Steps" },
      {
        type: "list",
        items: [
          "Pick the chart that matches the crane's set-up: outrigger extension, counterweight, and working area.",
          "Measure the radius from where the crane will stand to where the load will be picked and where it will land. Use the larger of the two.",
          "Choose the boom length needed to clear the height and any obstacles at that radius.",
          "Read the rated capacity where the radius and boom length meet. If the exact radius isn't listed, use the next larger radius.",
          "Subtract the hook block, slings, shackles, and any spreader beam. What is left must be more than the load, with the margin your lift plan requires.",
        ],
      },
      { type: "heading", level: 2, text: "Why Every Crane Has Its Own Chart" },
      {
        type: "paragraph",
        text: "Two 50 ton cranes from different makers, or even two models from the same maker, have different charts. Never plan a lift from a chart found online for a similar crane, and never use a figure from this article: use the chart for the exact crane, supplied by the crane owner, and have the operator or lifting supervisor confirm it before the lift.",
      },
      { type: "heading", level: 2, text: "What to Send a Crane Supplier" },
      {
        type: "paragraph",
        text: "You do not need to read the chart yourself to book a crane. Send the load weight and dimensions, the distance from the nearest firm set-up position to the pick and landing points, the lift height and any obstacles, and a photo of the set-up area. Abdul Masood Trading checks those against the load charts of its 25 and 50 ton cranes and confirms which crane fits.",
      },
    ],
    relatedLinks: [
      { title: "25 Ton vs 50 Ton Crane", href: "/blog/25-ton-vs-50-ton-crane" },
      { title: "25 Ton Crane Rental", href: "/equipment/crane/25-ton-crane-rental-oman" },
      { title: "50 Ton Crane Rental", href: "/equipment/crane/50-ton-crane-rental-oman" },
      { title: "Crane Hire Pre-Lift Checklist", href: "/blog/crane-hire-checklist-oman" },
    ],
    faqs: [
      {
        question: "Can a 50 ton crane lift 50 tons?",
        answer:
          "Only at a very short radius with full outriggers and counterweight. At normal working radius its safe capacity is much lower; the crane's own load chart gives the figure.",
      },
      {
        question: "What is radius on a crane load chart?",
        answer: "The horizontal distance from the crane's slewing centre to the hook. Capacity drops as radius increases.",
      },
      {
        question: "Does the hook block count as part of the load?",
        answer: "Yes. The hook block, slings, shackles, and spreader beams are deducted from the chart's rated capacity.",
      },
    ],
  },

  // ---------------------------------------------------------------- Hand signals
  {
    slug: "crane-hand-signals",
    title: "Crane Hand Signals: The Standard Signals for Safe Lifting",
    seoTitle: "Crane Hand Signals: Standard Signals Explained",
    description:
      "The standard crane hand signals a banksman uses — hoist, lower, stop, emergency stop, swing, boom up and down, extend and retract — and the rules that keep them safe.",
    category: "Lifting",
    equipment: ["crane"],
    datePublished: "2026-11-05",
    places: ["Oman"],
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Mobile crane on site ready for a signalled lift",
    content: [
      {
        type: "paragraph",
        text: "Short answer: crane hand signals let one trained signaller (banksman) direct the operator when the operator cannot see the load. The essential signals are hoist, lower, stop, emergency stop, swing, boom up, boom down, extend, and retract. Only one person gives signals, they must be in the operator's clear view, and anyone may give the emergency stop. Your site's lifting plan sets which signal system is used, so confirm it at the pre-lift briefing.",
      },
      {
        type: "table",
        caption: "Commonly used crane hand signals (confirm against your site's lifting plan)",
        headers: ["Signal", "How it is usually given", "What the operator does"],
        rows: [
          ["Hoist (raise load)", "Forearm vertical, index finger pointing up, small circles", "Raises the hook slowly"],
          ["Lower", "Arm extended down, index finger pointing down, small circles", "Lowers the hook slowly"],
          ["Stop", "Arm extended, palm down, held still or moved side to side", "Stops the motion"],
          ["Emergency stop", "Both arms extended, palms down, moved quickly side to side", "Stops everything immediately"],
          ["Swing", "Arm extended, pointing in the direction of swing", "Slews the boom that way"],
          ["Raise boom", "Arm extended, fist closed, thumb pointing up", "Raises the boom angle"],
          ["Lower boom", "Arm extended, fist closed, thumb pointing down", "Lowers the boom angle"],
          ["Extend boom", "Both fists in front, thumbs pointing outward", "Telescopes the boom out"],
          ["Retract boom", "Both fists in front, thumbs pointing toward each other", "Telescopes the boom in"],
          ["Move slowly", "Give the signal with one hand, other palm held over it", "Repeats the motion at slow speed"],
        ],
      },
      { type: "heading", level: 2, text: "Rules That Make Signals Work" },
      {
        type: "list",
        items: [
          "One signaller only. Two people giving signals is how loads get dropped; the exception is the emergency stop, which anyone may give.",
          "Stay in the operator's sight, wear high-visibility clothing, and stand clear of the load path.",
          "Agree the signals before the lift, at the pre-lift briefing, and use only those.",
          "If the operator loses sight of the signaller or doesn't understand a signal, the operator stops.",
          "For blind lifts or long distances, use radios with a dedicated channel and a clear call sign.",
        ],
      },
      { type: "heading", level: 2, text: "Which Standard Applies?" },
      {
        type: "paragraph",
        text: "International sites in Oman often follow the signals in BS 7121, ASME B30.5, or ISO 16715, and some plants publish their own. The differences are small, but they are differences. Ask the site's lifting supervisor which system the lift plan uses, and brief the crane operator and banksman together before the first lift.",
      },
    ],
    relatedLinks: [
      { title: "Crane Hire Pre-Lift Checklist", href: "/blog/crane-hire-checklist-oman" },
      { title: "Crane Lifting Hazards and Control Measures", href: "/blog/crane-lifting-hazards-control-measures" },
      { title: "Mobile Crane Rental in Oman", href: "/equipment/crane" },
    ],
    faqs: [
      {
        question: "Who gives crane hand signals?",
        answer: "One trained signaller, often called a banksman or rigger-signaller, who stays in the operator's clear view.",
      },
      {
        question: "What is the crane emergency stop signal?",
        answer:
          "Usually both arms extended with palms down, moved quickly side to side. Anyone on site may give it, and the operator stops immediately.",
      },
      {
        question: "Do Abdul Masood Trading crane operators work with a banksman?",
        answer:
          "Yes. Our operators work to the site's signals and lifting plan. Tell us if you also need a signaller supplied.",
      },
    ],
  },

  // ---------------------------------------------------------------- Hazards
  {
    slug: "crane-lifting-hazards-control-measures",
    title: "Crane Lifting Hazards and Control Measures: A Practical Guide for Sites in Oman",
    seoTitle: "Crane Lifting Hazards and Control Measures",
    description:
      "The main hazards in a crane lift — overload, ground failure, overhead lines, wind, rigging failure, and people under the load — with the control measure for each.",
    category: "Lifting",
    equipment: ["crane"],
    datePublished: "2026-11-05",
    places: ["Oman"],
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Mobile crane set up for a planned lift",
    content: [
      {
        type: "paragraph",
        text: "Short answer: most crane accidents come from a short list of causes — the load is heavier than the crane can take at that radius, the ground gives way under an outrigger, the boom touches an overhead power line, wind catches the load, rigging fails, or someone is under the load. Each has a known control: a lift plan with checked weights and radius, outrigger mats on prepared ground, exclusion zones around power lines, wind limits, inspected rigging, and a barricaded lift area.",
      },
      {
        type: "table",
        caption: "Crane lifting hazards and their control measures",
        headers: ["Hazard", "What goes wrong", "Control measure"],
        rows: [
          ["Overload", "Load or radius exceeds the load chart", "Confirmed load weight, measured radius, lift plan checked against the crane's chart"],
          ["Ground failure", "Outrigger sinks into soft, backfilled, or hollow ground", "Firm level set-up, outrigger mats, check for buried services and voids"],
          ["Overhead power lines", "Boom or rope contacts or arcs to a live line", "Survey before set-up, exclusion distance agreed with the utility, isolate where possible"],
          ["Wind", "Gusts swing large loads or overload the boom", "Wind limits from the crane maker, anemometer reading, stop when exceeded"],
          ["Rigging failure", "Sling, shackle, or hook damaged or under-rated", "Certified, inspected lifting gear, correct sling angle, no makeshift rigging"],
          ["People under the load", "Load or part of it falls", "Barricaded exclusion zone, tag lines, no one under a suspended load"],
          ["Poor communication", "Operator misreads a signal or loses sight", "One trained signaller, agreed signals or radios, stop if unclear"],
          ["Heat", "Fatigue and errors in summer", "Early starts, rest breaks, the midday outdoor work break"],
        ],
      },
      { type: "heading", level: 2, text: "Before the Lift" },
      {
        type: "list",
        items: [
          "Know the weight: from the delivery note, drawing, or nameplate — not a guess.",
          "Plan the lift: crane position, radius, boom length, rigging, and landing point, checked by a competent person.",
          "Prepare the ground and check for buried pipes, cables, and backfilled trenches under the outriggers.",
          "Check overhead lines, structures, and the swing path.",
          "Hold a pre-lift briefing with the operator, signaller, and riggers.",
        ],
      },
      { type: "heading", level: 2, text: "During the Lift" },
      {
        type: "list",
        items: [
          "Lift a few centimetres first and stop, to check balance, rigging, and the crane's stability.",
          "Keep the exclusion zone clear and use tag lines to control the load.",
          "Move smoothly; avoid sudden swings or stops.",
          "Stop if the wind picks up, the ground moves, or anyone is unsure.",
        ],
      },
      {
        type: "paragraph",
        text: "Site rules, permits, and lifting plan requirements vary by client and project; always follow the site's own procedures and the crane maker's instructions. Abdul Masood Trading supplies 25 and 50 ton mobile cranes with experienced operators and the crane's documents for your site's permit process.",
      },
    ],
    relatedLinks: [
      { title: "Crane Hire Pre-Lift Checklist", href: "/blog/crane-hire-checklist-oman" },
      { title: "How to Read a Crane Load Chart", href: "/blog/how-to-read-a-crane-load-chart" },
      { title: "Crane Hand Signals", href: "/blog/crane-hand-signals" },
      { title: "Documents for Crane and Forklift Sites", href: "/blog/crane-forklift-site-documents-oman" },
    ],
    faqs: [
      {
        question: "What is the biggest hazard in crane lifting?",
        answer:
          "Overloading the crane for the radius, closely followed by ground failure under an outrigger and contact with overhead power lines.",
      },
      {
        question: "How do you control the risk of ground failure?",
        answer:
          "Set up on firm, level ground, use outrigger mats to spread the load, and check for buried services, voids, and backfilled trenches before the crane arrives.",
      },
      {
        question: "Can anyone stand under a suspended load?",
        answer: "No. The lift area is barricaded and no one stands under a suspended load at any time.",
      },
    ],
  },

  // ---------------------------------------------------------------- Forklift safety
  {
    slug: "forklift-safety-daily-inspection-checklist",
    title: "Forklift Safety and Daily Inspection Checklist",
    seoTitle: "Forklift Safety & Daily Inspection Checklist",
    description:
      "A daily forklift pre-use inspection checklist, the main forklift hazards and how to control them, and safe operating rules for warehouses and sites in Oman.",
    category: "Material Handling",
    equipment: ["forklift"],
    datePublished: "2026-11-05",
    places: ["Oman"],
    heroImage: "/images/fleet/forklift-warehouse.jpg",
    heroImageAlt: "Counterbalance forklift in a warehouse aisle",
    content: [
      {
        type: "paragraph",
        text: "Short answer: check a forklift before every shift — forks, mast, chains, tyres, brakes, steering, horn, lights, seat belt, and fluid leaks — and take it out of use if anything fails. Most forklift accidents are tip-overs, people struck by the truck, and falling loads, and they are prevented by staying within the capacity plate, travelling with the load low, wearing the seat belt, and keeping pedestrians apart from forklifts.",
      },
      { type: "heading", level: 2, text: "Daily Pre-Use Inspection Checklist" },
      {
        type: "table",
        caption: "Forklift daily inspection checklist (engine off, then engine running)",
        headers: ["Check", "Look for", "If it fails"],
        rows: [
          ["Forks", "Cracks, bends, worn heels, locking pins in place", "Do not use"],
          ["Mast and chains", "Damage, loose or stretched chains, missing pins", "Do not use"],
          ["Hydraulics", "Leaks from hoses, cylinders, or fittings", "Report; do not use if leaking"],
          ["Tyres and wheels", "Cuts, low pressure, loose wheel nuts", "Report before use"],
          ["Capacity plate", "Present and readable", "Do not use without it"],
          ["Seat belt and seat", "Belt latches and retracts; seat secure", "Do not use"],
          ["Brakes and parking brake", "Stops smoothly; holds on a slope", "Do not use"],
          ["Steering", "No excess play or stiffness", "Do not use"],
          ["Horn, lights, reversing alarm", "All working", "Report before use"],
          ["Lift, tilt, side-shift controls", "Smooth, return to neutral", "Do not use"],
          ["Fuel, oil, coolant, battery", "Correct levels, no leaks", "Top up or report"],
        ],
      },
      { type: "heading", level: 2, text: "The Main Forklift Hazards and Controls" },
      {
        type: "table",
        caption: "Forklift hazards and how to control them",
        headers: ["Hazard", "Control"],
        rows: [
          ["Tip-over", "Stay within the capacity plate, travel with forks low, no turning on slopes, wear the seat belt"],
          ["Pedestrians struck", "Separate walkways, horns at corners, reversing alarms, high-visibility clothing"],
          ["Falling loads", "Secure and balanced loads, mast tilted back, no lifting people on forks"],
          ["Poor visibility", "Reverse when the load blocks the view, or use a spotter"],
          ["Container and dock edges", "Chock trailers, check dock plates, confirm floor rating inside containers"],
          ["Heat and fatigue", "Rest breaks, water, the midday outdoor work break"],
        ],
      },
      { type: "heading", level: 2, text: "Safe Operating Rules" },
      {
        type: "list",
        items: [
          "Only trained, authorised operators drive forklifts.",
          "Know the load weight and centre before lifting; the rated capacity falls as the load centre moves out.",
          "Travel with forks a little above the ground and the mast tilted back.",
          "Never carry passengers or lift people on the forks.",
          "Lower the forks, apply the parking brake, and switch off before leaving the truck.",
        ],
      },
      {
        type: "paragraph",
        text: "Licensing, training, and inspection rules depend on your employer and the site; check what your site and the relevant Omani authorities require. Abdul Masood Trading rents forklifts from 3 to 18 ton with experienced operators, so licensing and daily checks are covered when you hire with an operator.",
      },
    ],
    relatedLinks: [
      { title: "Forklift Rental in Oman (3–18 Ton)", href: "/equipment/forklift" },
      { title: "3 Ton Forklift Rental", href: "/equipment/forklift/3-ton-forklift-rental-oman" },
      { title: "Container Unloading: Forklift or Crane?", href: "/blog/container-unloading-forklift-or-crane" },
      { title: "Documents for Crane and Forklift Sites", href: "/blog/crane-forklift-site-documents-oman" },
    ],
    faqs: [
      {
        question: "How often should a forklift be inspected?",
        answer: "Before every shift by the operator, plus periodic thorough examinations as required by the site and the equipment owner.",
      },
      {
        question: "What is the most common forklift accident?",
        answer: "Tip-overs and pedestrians being struck by the truck are among the most common; seat belts and separated walkways are the key controls.",
      },
      {
        question: "Can I rent a forklift with an operator in Oman?",
        answer: "Yes. Abdul Masood Trading rents 3 to 18 ton forklifts with experienced operators across Oman.",
      },
    ],
  },
]
