import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Noto_Kufi_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"
import { organizationSchema, websiteSchema } from "@/lib/schema"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
// Only the Arabic company name and short labels use this, so one weight is enough.
const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: "600", variable: "--font-noto-kufi-arabic" })

const defaultTitle = `Heavy Equipment Rental in Oman | ${siteConfig.legalName}`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "heavy equipment rental Oman",
    "crane rental Sohar",
    "forklift rental Sohar",
    "construction machinery rental Muscat",
    "boom loader rental Oman",
    "excavator rental Oman",
    "JCB rental Oman",
    "wheel loader rental Oman",
    "tipper rental Oman",
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoKufiArabic.variable} pb-14 font-sans antialiased md:pb-0`}
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  )
}
