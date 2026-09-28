import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServiceLandingTemplate } from "@/components/service-landing-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { serviceAreaPages, getServiceAreaPage } from "@/lib/service-areas"
import { services, getServiceBySlug } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

type PageProps = { params: Promise<{ slug: string }> }

/**
 * Serves both the hand-written hub pages (lib/services.ts) and the generated
 * equipment × city pages (lib/service-areas.ts). Hub slugs are checked first;
 * the two sets never share a slug.
 */
function resolve(slug: string) {
  const hub = getServiceBySlug(slug)
  if (hub) {
    return {
      ...hub,
      breadcrumbName: hub.shortTitle,
      schemaName: hub.h1,
    }
  }

  const page = getServiceAreaPage(slug)
  if (!page) return undefined
  const { equipment, location } = page
  return {
    ...page,
    // Equipment without its own photo falls back to the city's hero image.
    heroImage: equipment.image ?? location.heroImage,
    heroImageAlt: equipment.image ? (equipment.imageAlt ?? equipment.label) : location.heroImageAlt,
    serviceType: `${equipment.label} rental`,
    breadcrumbName: page.cardTitle,
    schemaName: page.h1,
  }
}

export function generateStaticParams() {
  return [...services, ...serviceAreaPages].map((page) => ({ slug: page.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = resolve(slug)
  if (!page) return {}

  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.href,
    keywords: page.keywords,
  })
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const page = resolve(slug)
  if (!page) notFound()

  const url = `${siteConfig.url}${page.href}`

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: page.breadcrumbName, url },
          ]),
          serviceSchema({
            name: page.schemaName,
            serviceType: page.serviceType,
            description: page.metaDescription,
            areaServed: page.areaServed,
            url,
          }),
          faqSchema(page.faqs),
        ]}
      />
      <ServiceLandingTemplate
        eyebrow={page.eyebrow}
        title={page.h1}
        intro={page.intro}
        heroImage={page.heroImage}
        heroImageAlt={page.heroImageAlt}
        specs={page.specs}
        bulletGroups={page.bulletGroups}
        localContext={page.localContext}
        areasHeading={page.areasHeading}
        areas={page.areas}
        faqs={page.faqs}
        ctaHeading={page.ctaHeading}
        ctaSubheading={page.ctaSubheading}
        whatsappMessage={page.whatsappMessage}
      />
    </>
  )
}
