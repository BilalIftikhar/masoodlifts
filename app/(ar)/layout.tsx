import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { StickyCtaAr } from "@/components/ar/sticky-cta-ar"
import { businessSchema, websiteSchema } from "@/lib/schema"
import { siteConfig } from "@/lib/site-config"
import { fontVariables } from "../fonts"
import "../globals.css"

/**
 * Root layout for the Arabic section under /ar. A separate root layout (rather
 * than a wrapper inside the English one) so the whole document is
 * <html lang="ar" dir="rtl">, which browsers, screen readers, and SEO audit
 * tools read from the html element.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `تأجير معدات ثقيلة في عمان | ${siteConfig.legalNameAr}`,
    template: `%s | ${siteConfig.legalNameAr}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.legalName }],
  applicationName: siteConfig.legalNameAr,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b2e4f",
}

export default function ArabicRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${fontVariables} pb-14 font-arabic antialiased md:pb-0`}>
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        {children}
        <StickyCtaAr />
        <Analytics />
      </body>
    </html>
  )
}
