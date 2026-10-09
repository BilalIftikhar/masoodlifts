import type { Metadata } from "next"
import { ArabicPageTemplate } from "@/components/ar/arabic-page-template"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import type { ArabicPage } from "@/lib/arabic"

/** Shared by /ar and /ar/[...path]: metadata with the hreflang pair, and the page with its schema. */
export function arabicMetadata(page: ArabicPage): Metadata {
  const metadata = pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
    languages: { en: page.enPath, ar: page.path },
    locale: "ar",
  })
  // The Arabic home has no layout segment above it to apply the title template.
  return page.path === "/ar" ? { ...metadata, title: { absolute: `${page.metaTitle} | ${siteConfig.legalNameAr}` } } : metadata
}

export function ArabicRoute({ page }: { page: ArabicPage }) {
  const url = `${siteConfig.url}${page.path}`

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "الرئيسية", url: `${siteConfig.url}/ar` },
            ...page.breadcrumb.map((crumb) => ({ name: crumb.name, url: `${siteConfig.url}${crumb.path}` })),
          ]),
          serviceSchema({
            name: page.h1,
            serviceType: page.serviceType,
            description: page.metaDescription,
            url,
          }),
          faqSchema(page.faqs),
        ]}
      />
      <ArabicPageTemplate page={page} />
    </>
  )
}
