import { siteConfig } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"
import { services } from "@/lib/services"
import { hubsByDistance } from "@/lib/locations"
import { areas, areaHref } from "@/lib/areas"
import { ports } from "@/lib/ports"
import { allCapacityPages } from "@/lib/capacities"
import { arabicPages } from "@/lib/arabic"
import { getAllPosts } from "@/lib/blog/posts"

export const dynamic = "force-static"

/**
 * /llms.txt — a plain-text map of the site for AI crawlers (llmstxt.org).
 * Built from the same data as the pages, so it never drifts out of date.
 */
export function GET() {
  const link = (title: string, path: string, note?: string) =>
    `- [${title}](${siteConfig.url}${path})${note ? `: ${note}` : ""}`

  const body = [
    `# ${siteConfig.legalName}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.legalName} (${siteConfig.legalNameAr}) is registered in Sohar, Sultanate of Oman. Activity: ${siteConfig.activity}. Yard: ${siteConfig.yardLine}. Postal address: ${siteConfig.addressLine}. GSM and WhatsApp: ${siteConfig.phoneDisplay}. Email: ${siteConfig.email}. Fleet: 25 ton and 50 ton mobile cranes, forklifts from 3 to 18 ton, tippers, boom loaders, excavators, JCB backhoe loaders, and wheel loaders. Machines are hired with operators on daily, weekly, and monthly terms, and delivered to all 11 governorates of Oman. Rates are quote-based; the site does not publish prices.`,
    "",
    "## Company",
    link("About", "/about", "registration details, activity, coverage"),
    link("Contact", "/contact", "request a quote by phone, WhatsApp, email, or form"),
    "",
    "## Equipment",
    ...equipmentTypes.map((equipment) => link(`${equipment.label} rental`, equipment.href, equipment.summary)),
    "",
    "## Machine sizes",
    ...allCapacityPages().map(({ page, href }) => link(`${page.label} rental`, href, page.metaDescription)),
    "",
    "## Services",
    ...services.map((service) => link(service.title, service.href, service.description)),
    link("All services by city", "/services", "every equipment type in every city served"),
    "",
    "## Locations",
    ...hubsByDistance.map((location) => link(location.title, location.href, location.description)),
    "",
    "## Towns and industrial areas",
    ...areas.map((area) => link(`Heavy Equipment Rental in ${area.name}`, areaHref(area), area.metaDescription)),
    "",
    "## Ports",
    link("All Omani ports", "/ports", "crane and forklift rental at every major Omani port"),
    ...ports.map((port) => link(`Crane & Forklift Rental at ${port.name}`, port.href, port.metaDescription)),
    "",
    "## Arabic (العربية)",
    ...arabicPages.map((page) => link(page.h1, page.path, page.metaDescription)),
    "",
    "## Guides",
    ...getAllPosts().map((post) => link(post.title, `/blog/${post.slug}`, post.description)),
    "",
  ].join("\n")

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
