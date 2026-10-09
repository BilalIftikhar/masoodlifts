import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"
import { businessSchema, websiteSchema } from "@/lib/schema"
import { siteConfig } from "@/lib/site-config"
import { fontVariables } from "../fonts"
import "../globals.css"

/**
 * Root layout for the English site. The Arabic section under /ar has its own
 * root layout (app/(ar)/layout.tsx) so its <html> carries lang="ar" dir="rtl".
 */

const defaultTitle = `Heavy Equipment Rental in Oman | ${siteConfig.legalName}`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  applicationName: siteConfig.legalName,
  category: "Heavy Equipment Rental",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_OM",
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: defaultTitle,
    description: siteConfig.description,
    images: [{ url: "/images/og/og-default.jpg", width: 1200, height: 630, alt: siteConfig.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    images: ["/images/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b2e4f",
}

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables} pb-14 font-sans antialiased md:pb-0`}
      >
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        {children}
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  )
}
