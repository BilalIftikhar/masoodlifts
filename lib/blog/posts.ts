import type { BlogPost, BlogPostInput, ContentBlock } from "@/lib/blog/types"
import type { EquipmentKey } from "@/lib/equipment"
import { planningPosts } from "@/lib/blog/posts-planning"

const originalPosts: BlogPostInput[] = [
  {
    slug: "excavator-vs-jcb-vs-wheel-loader",
    title: "Excavator, JCB or Wheel Loader? Choosing Earthmoving Equipment for Your Oman Site",
    seoTitle: "Excavator vs JCB vs Wheel Loader",
    description:
      "What each earthmoving machine does best, how to choose between them, and when a project in Oman needs more than one.",
    category: "Equipment Guides",
    equipment: ["excavator", "jcb", "wheel-loader", "tipper"],
    datePublished: "2026-09-25",
    heroImage: "/images/fleet/excavator-transport.jpg",
    heroImageAlt: "Compact excavator loaded on a trailer ready for delivery",
    content: [
      {
        type: "paragraph",
        text: "Excavators, JCB backhoe loaders, and wheel loaders all move earth, but each is built for a different job. Hiring the wrong one costs time: an excavator sitting idle on a levelling job, or a JCB struggling with a basement dig. This guide sets out what each machine does best so you can book the right one first time.",
      },
      {
        type: "table",
        caption: "Earthmoving machines at a glance",
        headers: ["Machine", "Best at", "Less suited to", "Typical Oman use"],
        rows: [
          ["Excavator", "Deep digging, bulk excavation, loading trucks", "Levelling, travelling between sites", "Foundations, basements, utility trenches"],
          ["JCB backhoe loader", "Mixed tasks: dig, load, backfill, level", "Deep or large-volume excavation", "Villa plots, utilities, municipal works"],
          ["Wheel loader (shovel)", "Loading and moving large volumes of loose material", "Digging below ground level", "Quarries, crusher yards, road works"],
        ],
      },
      { type: "heading", level: 2, text: "When to Hire an Excavator" },
      {
        type: "paragraph",
        text: "Choose an excavator when the main job is digging: foundations, basements, tank pits, and long or deep trenches. The excavator's arm reaches below its own tracks, and it can load spoil straight into a tipper parked alongside. On coastal sites around Sohar the water table can be shallow, and in Muscat and the interior you may hit rock, so tell your rental company the dig depth and ground type.",
      },
      { type: "heading", level: 2, text: "When a JCB Is the Better Choice" },
      {
        type: "paragraph",
        text: "A JCB backhoe loader has a digging arm at the back and a loading bucket at the front. That makes it the practical choice on smaller sites with a mix of tasks: digging a service trench, backfilling it, then levelling the plot. It also drives on the road between nearby sites, which saves the cost of a low-bed trailer.",
      },
      { type: "heading", level: 2, text: "When You Need a Wheel Loader" },
      {
        type: "paragraph",
        text: "If the job is moving loose material rather than digging it, choose a wheel loader. At quarries and crusher yards, on road works, and during site preparation on large plots, a wheel loader's big bucket loads tippers and builds stockpiles much faster than a JCB.",
      },
      { type: "heading", level: 2, text: "Projects That Need More Than One" },
      {
        type: "list",
        items: [
          "Basement dig: excavator to dig, tippers to remove spoil",
          "Road or plot preparation: wheel loader and tippers to move fill, JCB for trenches and tidy-up",
          "Utility works: JCB for trenching and backfilling, tipper for surplus material",
        ],
      },
      {
        type: "paragraph",
        text: "Hiring the loading machine and the tippers from one supplier keeps the haul cycle running on a single schedule. Abdul Masood Trading rents excavators, JCBs, wheel loaders, and tippers with operators across Oman, so one call covers the whole earthworks package.",
      },
    ],
    relatedLinks: [
      { title: "Excavator Rental in Oman", href: "/equipment/excavator" },
      { title: "JCB Backhoe Loader Rental", href: "/equipment/jcb-backhoe-loader" },
      { title: "Wheel Loader Rental", href: "/equipment/wheel-loader" },
      { title: "Boom Loader & Excavator Rental in Oman", href: "/services/boom-loader-excavator-rental-oman" },
      { title: "Preparing a Villa Plot in Oman", href: "/blog/villa-plot-site-preparation-oman" },
    ],
  },
  {
    slug: "crane-hire-checklist-oman",
    title: "Crane Hire in Oman: What to Prepare Before the Lift",
    seoTitle: "Crane Hire in Oman: Pre-Lift Checklist",
    description:
      "The information a crane rental company needs from you, and the site preparation that keeps a lift safe and on schedule.",
    category: "Lifting",
    equipment: ["crane"],
    datePublished: "2026-09-25",
    dateModified: "2026-10-15",
    heroImage: "/images/mobile-crane.jpeg",
    heroImageAlt: "Yellow all-terrain mobile crane with its boom retracted",
    content: [
      {
        type: "paragraph",
        text: "Most crane delays come from missing information rather than from the crane itself: a load heavier than expected, a set-up position that turns out to be soft ground, or a site gate that will not let the crane in without paperwork. A few details shared at booking avoid all three.",
      },
      { type: "heading", level: 2, text: "The Five Things Your Crane Supplier Needs" },
      {
        type: "table",
        caption: "Information to share when booking a crane",
        headers: ["Detail", "Why it matters"],
        rows: [
          ["Heaviest load and its dimensions", "Sets the minimum crane capacity, including rigging weight"],
          ["Radius: distance from crane to load's final position", "Crane capacity falls sharply as radius increases"],
          ["Lift height", "Determines the boom length required"],
          ["Ground where the crane will set up", "Outriggers put high loads into the ground; soft or backfilled ground needs mats"],
          ["Site access and entry rules", "Gate width, overhead lines, and gate-pass paperwork at ports and industrial estates"],
        ],
      },
      {
        type: "paragraph",
        text: "Measure the radius from where the crane can really stand, with its outriggers out, not from where you would like it to stand. Parked cars, trenches, stacked materials, and overhead lines often push the crane a few metres further away, and those few metres can change the crane you need. If you are unsure whether the job needs a 25 ton or a 50 ton crane, send the three numbers (weight, radius, height) and let the supplier check them against the load chart.",
      },
      { type: "heading", level: 2, text: "Preparing the Site" },
      {
        type: "list",
        items: [
          "Clear and level the crane set-up area, and keep it away from recent excavations",
          "Identify overhead power lines and underground services near the set-up position",
          "Agree an exclusion zone under the load path and brief everyone on site",
          "Have the load ready, with lifting points identified, before the crane arrives",
          "Keep the access route clear: the crane needs room to drive in, turn, and extend its outriggers fully",
        ],
      },
      { type: "heading", level: 2, text: "Lifting Gear and the Lift Team" },
      {
        type: "paragraph",
        text: "The crane is only one part of the lift. Agree before the day who supplies the slings, shackles, and any spreader beam, and check they are rated for the load and carry valid inspection tags. Agree who will sling the load and who will signal the operator, and check whether your site requires them to be certified. If the load has no marked lifting points, ask the manufacturer or supplier how it should be slung before the crane is booked, not when it is on the hook.",
      },
      { type: "heading", level: 2, text: "On the Day" },
      {
        type: "list",
        items: [
          "Confirm the load has arrived, and the gate pass is issued, before the crane leaves the yard",
          "Hold a short briefing: the load weight, the lift path, the landing point, and who gives the signals",
          "Keep everyone out from under the load and clear of the crane's slewing area",
          "Stop and reassess if the wind picks up, the ground moves, or the load behaves unexpectedly",
        ],
      },
      { type: "heading", level: 2, text: "Working Inside Ports and Industrial Estates" },
      {
        type: "paragraph",
        text: "Sites at Sohar Port and Freezone, the industrial estates, and other controlled facilities usually require machine documents, inspection certificates, and operator IDs before entry. Send the site's requirements when you book so the paperwork is ready and the crane is not held at the gate.",
      },
      { type: "heading", level: 2, text: "Weather and Heat" },
      {
        type: "paragraph",
        text: "Wind limits safe lifting, especially for large, light loads like panels. In summer, early starts reduce heat stress for the crew, and from June to August outdoor work stops from 12:30 pm to 3:30 pm under the Ministry of Labour's midday break, so plan lifts for the morning. In Salalah, the June–September khareef brings mist and wet ground, so build in allowance when planning lifts there.",
      },
    ],
    relatedLinks: [
      { title: "Crane Rental in Oman", href: "/equipment/crane" },
      { title: "Crane & Forklift Rental in Sohar", href: "/services/crane-forklift-rental-sohar" },
      { title: "Equipment Rental in Muscat", href: "/locations/muscat" },
      { title: "25 Ton or 50 Ton Crane?", href: "/blog/25-ton-vs-50-ton-crane" },
      { title: "Crane and Forklift Paperwork on Oman Sites", href: "/blog/crane-forklift-site-documents-oman" },
    ],
  },
  {
    slug: "boom-loader-vs-forklift",
    title: "Boom Loader or 3 Ton Forklift? Picking the Right Material Handler",
    seoTitle: "Boom Loader vs Forklift: Which to Rent",
    description:
      "How boom loaders (telehandlers) and 3 ton forklifts differ, and which one suits warehouses, yards, and construction sites.",
    category: "Equipment Guides",
    equipment: ["boom-loader", "forklift"],
    datePublished: "2026-09-25",
    dateModified: "2026-10-15",
    heroImage: "/images/fleet/telehandler-jcb.jpg",
    heroImageAlt: "Yellow telescopic boom loader with pallet forks on a site at sunset",
    content: [
      {
        type: "paragraph",
        text: "Both machines lift pallets on forks, but they are built for different ground and different heights. The short answer: a 3 ton forklift for firm, level ground and straight-up lifts; a boom loader for rough ground, height, and reach.",
      },
      {
        type: "table",
        caption: "Boom loader vs 3 ton forklift",
        headers: ["", "3 Ton Forklift", "Boom Loader"],
        rows: [
          ["Ground", "Firm, level floors and yards", "Unmade sand, gravel, and site ground"],
          ["Lift direction", "Straight up", "Up and forward (telescopic reach)"],
          ["Typical work", "Warehouses, container loading, yard handling", "Placing materials on upper floors and scaffold bays"],
          ["Space needed", "Compact, tight turning", "Larger footprint"],
        ],
      },
      { type: "heading", level: 2, text: "Choose a 3 Ton Forklift When…" },
      {
        type: "list",
        items: [
          "You are loading or unloading trucks and containers",
          "Work is inside a warehouse or on a paved yard",
          "Loads are palletised and within the forklift's rated capacity at the lift height",
        ],
      },
      { type: "heading", level: 2, text: "Choose a Boom Loader When…" },
      {
        type: "list",
        items: [
          "The site is unmade ground where a forklift would sink or struggle",
          "Material must go up to a slab, roof, or scaffold loading bay",
          "You need to place loads forward, over an obstacle or trench",
        ],
      },
      { type: "heading", level: 2, text: "Capacity Changes With Height and Reach" },
      {
        type: "paragraph",
        text: "Neither machine lifts its headline capacity everywhere. A forklift's rating assumes the load's centre of gravity sits at a standard distance from the fork face; a long or bulky load, or a lift near the top of the mast, lowers what it can safely carry. A boom loader loses capacity faster still as the boom extends forward, because the load moves further from the machine's wheels. A boom loader has a load chart showing what it can lift at each height and reach, and the operator works to it. When you ask for a quote, give the weight, how high the load goes, and how far forward it has to be placed.",
      },
      { type: "heading", level: 2, text: "When the Load Is Too Heavy for a 3 Ton Forklift" },
      {
        type: "paragraph",
        text: "Heavy pallets, block packs, steel bundles, and machinery quickly pass 3 tonnes. On firm, level ground the answer is a bigger forklift rather than a boom loader: Abdul Masood Trading rents forklifts from 3 up to 18 ton for steel, pipes, and heavy machinery. A boom loader is the better choice only when the ground is rough or the load has to go up and forward.",
      },
      { type: "heading", level: 2, text: "Common Mistakes" },
      {
        type: "list",
        items: [
          "Sending a warehouse forklift onto sand: it gets stuck, or tips on uneven ground",
          "Using a boom loader as a crane: hanging a load from the forks with a chain is not safe unless the machine has a rated hook or jib attachment for it",
          "Forgetting the lift height: a forklift that handles the load at ground level may not at the top of a stack",
          "Booking for the average load: size the machine for the heaviest item it will move",
        ],
      },
      {
        type: "paragraph",
        text: "Unsure which fits? Tell the rental company the heaviest load, the height and distance it has to go, and what the ground is like. Abdul Masood Trading rents both 3 ton forklifts and boom loaders across Oman, and will recommend the one that fits the job.",
      },
    ],
    relatedLinks: [
      { title: "Boom Loader Rental", href: "/equipment/boom-loader" },
      { title: "3–18 Ton Forklift Rental", href: "/equipment/forklift" },
      { title: "3 Ton Forklift Rental", href: "/equipment/forklift/3-ton-forklift-rental-oman" },
      { title: "Unloading a Shipping Container", href: "/blog/container-unloading-forklift-or-crane" },
    ],
  },
]

function blockText(block: ContentBlock) {
  if (block.type === "list") return block.items.join(" ")
  if (block.type === "table") return [block.caption ?? "", ...block.headers, ...block.rows.flat()].join(" ")
  return block.text
}

/** At about 200 words a minute, so the figure on the card matches the article. */
function withReadingTime(post: BlogPostInput): BlogPost {
  const words = post.content.map(blockText).join(" ").split(/\s+/).filter(Boolean).length
  return { ...post, readingTime: `${Math.max(2, Math.round(words / 200))} min read` }
}

export const blogPosts: BlogPost[] = [...originalPosts, ...planningPosts].map(withReadingTime)

export function getAllPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  )
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 2) {
  const current = getPostBySlug(slug)
  const others = getAllPosts().filter((post) => post.slug !== slug)
  // Same-category posts first, newest first within each group.
  const sameCategory = others.filter((post) => post.category === current?.category)
  const rest = others.filter((post) => post.category !== current?.category)
  return [...sameCategory, ...rest].slice(0, limit)
}

/** FNV-1a: a stable string hash, so a page shows the same guides on every build. */
function hash(text: string) {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

/**
 * Guides to link from a landing page. A guide that already links to `path`
 * comes first (the link runs both ways); the rest are guides about any of the
 * page's machines. Ties are shuffled by a hash of the page path, so sibling
 * pages (every town that hires cranes, say) link to different guides and each
 * guide collects links from across the site instead of the same three winning
 * everywhere. With no machines given, every guide qualifies.
 */
export function guidesFor({
  path,
  equipment = [],
  limit = 3,
}: {
  path: string
  equipment?: EquipmentKey[]
  limit?: number
}) {
  const linksHere = (post: BlogPost) => post.relatedLinks.some((link) => link.href === path)
  const covers = (post: BlogPost) => equipment.length === 0 || post.equipment.some((key) => equipment.includes(key))

  return blogPosts
    .filter((post) => linksHere(post) || covers(post))
    .map((post) => ({ post, first: linksHere(post) ? 0 : 1, order: hash(`${path}|${post.slug}`) }))
    .sort((a, b) => a.first - b.first || a.order - b.order)
    .slice(0, limit)
    .map(({ post }) => post)
}
