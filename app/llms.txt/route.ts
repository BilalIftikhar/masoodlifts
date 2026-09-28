import { siteConfig } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"
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
    `${siteConfig.legalName} (${siteConfig.legalNameAr}) is registered in the Sultanate of Oman under C.R. No. ${siteConfig.crNumber}. Activity: ${siteConfig.activity}. Address: ${siteConfig.addressLine}. GSM and WhatsApp: ${siteConfig.phoneDisplay}. Email: ${siteConfig.email}. Machines are hired with operators on daily, weekly, and monthly terms. Rates are quote-based; the site does not publish prices.`,
    "",
    "## Company",
    link("About", "/about", "registration details, activity, coverage"),
    link("Contact", "/contact", "request a quote by phone, WhatsApp, email, or form"),
    "",
    "## Equipment",
    ...equipmentTypes.map((equipment) => link(`${equipment.label} rental`, equipment.href, equipment.summary)),
    "",
    "## Services",
    ...services.map((service) => link(service.title, service.href, service.description)),
    link("All services by city", "/services", "every equipment type in every city served"),
    "",
    "## Locations",
    ...locations.map((location) => link(location.title, location.href, location.description)),
    "",
    "## Guides",
    ...getAllPosts().map((post) => link(post.title, `/blog/${post.slug}`, post.description)),
    "",
  ].join("\n")

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
