import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"
import { serviceAreaPages } from "@/lib/service-areas"
import { getAllPosts } from "@/lib/blog/posts"

/**
 * When page content last materially changed. Bump this when you edit page copy.
 * It must NOT be `new Date()`: a lastmod that changes on every request tells
 * Google the field is unreliable, and it then ignores lastmod for the whole site
 * — which slows the crawl of new pages.
 */
const CONTENT_UPDATED = new Date("2026-09-25")

export default function sitemap(): MetadataRoute.Sitemap {
  const now = CONTENT_UPDATED

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/equipment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ]

  const equipmentRoutes: MetadataRoute.Sitemap = equipmentTypes.map((equipment) => ({
    url: `${siteConfig.url}${equipment.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  // Hand-written keyword hubs (highest-intent, richest content).
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}${service.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.95,
  }))

  const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteConfig.url}${location.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: location.primary ? 0.95 : 0.85,
  }))

  // Generated equipment × city pages — the Oman-wide long-tail coverage.
  const serviceAreaRoutes: MetadataRoute.Sitemap = serviceAreaPages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    // Core-coverage cities carry slightly more weight than project-hire ones.
    priority: page.location.primary ? 0.8 : 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: "yearly",
    priority: 0.5,
  }))

  return [
    ...staticRoutes,
    ...equipmentRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...serviceAreaRoutes,
    ...blogRoutes,
  ]
}
