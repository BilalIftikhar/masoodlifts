import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

type PageSeoOptions = {
  title: string
  description: string
  path: string
  image?: string
  /**
   * The English and Arabic paths of a page that exists in both languages.
   * Emits the hreflang pair (en-OM ↔ ar-OM) plus x-default on both versions.
   */
  languages?: { en: string; ar: string }
  /** "ar" for pages in the Arabic section. */
  locale?: "en" | "ar"
}

/**
 * Builds a consistent Metadata object (canonical, hreflang, OpenGraph, Twitter)
 * for a single route. `title` should be the page-specific title only — the
 * " | Abdul Masood Trading" suffix is applied by the root layout's title
 * template. When the suffix would push the full title past 60 characters, the
 * page title is used on its own so Google shows the keyword, not a cut-off brand.
 *
 * No meta keywords: Google ignores the tag and it only hands competitors the
 * target list.
 */
export function pageMetadata({ title, description, path, image, languages, locale = "en" }: PageSeoOptions): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image ?? "/images/og/og-default.jpg"
  const siteName = locale === "ar" ? siteConfig.legalNameAr : siteConfig.shortName
  const fitsWithBrand = `${title} | ${siteName}`.length <= 60

  return {
    title: fitsWithBrand ? title : { absolute: title },
    description,
    alternates: {
      canonical: url,
      ...(languages && {
        languages: {
          "en-OM": `${siteConfig.url}${languages.en}`,
          "ar-OM": `${siteConfig.url}${languages.ar}`,
          "x-default": `${siteConfig.url}${languages.en}`,
        },
      }),
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName: locale === "ar" ? siteConfig.legalNameAr : siteConfig.legalName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: locale === "ar" ? "ar_OM" : "en_OM",
      ...(languages && { alternateLocale: locale === "ar" ? "en_OM" : "ar_OM" }),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage],
    },
  }
}
