import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CapacityDetailTemplate } from "@/components/capacity-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { allCapacityPages, capacitiesFor, capacityHref, getCapacityPage } from "@/lib/capacities"

type PageProps = { params: Promise<{ slug: string; capacity: string }> }

export function generateStaticParams() {
  return allCapacityPages().map(({ equipment, page }) => ({ slug: equipment.slug, capacity: page.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, capacity } = await params
  const match = getCapacityPage(slug, capacity)
  if (!match) return {}

  return pageMetadata({
    title: match.page.metaTitle,
    description: match.page.metaDescription,
    path: capacityHref(match.equipment, match.page),
  })
}

export default async function CapacityPage({ params }: PageProps) {
  const { slug, capacity } = await params
  const match = getCapacityPage(slug, capacity)
  if (!match) notFound()

  const { equipment, page } = match
  const url = `${siteConfig.url}${capacityHref(equipment, page)}`
  const siblings = capacitiesFor(equipment.key)
    .filter((sibling) => sibling.slug !== page.slug)
    .map((sibling) => ({ label: `${sibling.label} Rental`, href: capacityHref(equipment, sibling) }))

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Equipment", url: `${siteConfig.url}/equipment` },
            { name: `${equipment.label} Rental`, url: `${siteConfig.url}${equipment.href}` },
            { name: `${page.label} Rental`, url },
          ]),
          serviceSchema({
            name: `${page.label} Rental in Oman`,
            serviceType: `${equipment.noun} rental`,
            description: page.intro,
            url,
          }),
          faqSchema(page.faqs),
        ]}
      />
      <CapacityDetailTemplate equipment={equipment} page={page} siblings={siblings} />
    </>
  )
}
