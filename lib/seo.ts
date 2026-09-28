import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

type PageSeoOptions = {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
}

/**
 * Builds a consistent Metadata object (canonical, OpenGraph, Twitter) for a
 * single route. `title` should be the page-specific title only — the
 * " | Abdul Masood Trading" suffix is applied by the root layout's title
 * template, so keep `title` to ~37 characters to stay inside ~60 overall.
 */
export function pageMetadata({ title, description, path, image, keywords }: PageSeoOptions): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image ?? "/images/og/og-default.jpg"

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url,
      siteName: siteConfig.legalName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_OM",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortName}`,
      description,
      images: [ogImage],
    },
  }
}
