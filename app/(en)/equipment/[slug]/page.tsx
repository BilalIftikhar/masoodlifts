import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EquipmentDetailTemplate } from "@/components/equipment-detail-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { equipmentTypes, getEquipmentBySlug } from "@/lib/equipment"
import { cityLinksForEquipment } from "@/lib/service-areas"
import { arabicPathFor } from "@/lib/arabic"

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return equipmentTypes.map((equipment) => ({ slug: equipment.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const equipment = getEquipmentBySlug(slug)
  if (!equipment) return {}

  return pageMetadata({
    title: `${equipment.label} Rental in Oman`,
    description: `${equipment.summary} Across Oman from Sohar. Call ${siteConfig.phoneDisplay}.`,
    path: equipment.href,
    languages: { en: equipment.href, ar: arabicPathFor(equipment.href)! },
  })
}

export default async function EquipmentDetailPage({ params }: PageProps) {
  const { slug } = await params
  const equipment = getEquipmentBySlug(slug)
  if (!equipment) notFound()

  const url = `${siteConfig.url}${equipment.href}`

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Equipment", url: `${siteConfig.url}/equipment` },
            { name: `${equipment.label} Rental`, url },
          ]),
          serviceSchema({
            name: `${equipment.label} Rental in Oman`,
            serviceType: `${equipment.label} rental`,
            description: equipment.overview,
            url,
          }),
          faqSchema(equipment.faqs),
        ]}
      />
      <EquipmentDetailTemplate equipment={equipment} cityLinks={cityLinksForEquipment(equipment)} />
    </>
  )
}
