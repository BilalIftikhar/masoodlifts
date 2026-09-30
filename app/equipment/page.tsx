import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EquipmentShowcase from "@/components/equipment-showcase"
import ProcessSection from "@/components/process-section"
import ContactSection from "@/components/contact-section"
import { PageHero } from "@/components/page-hero"
import { TestimonialsSection } from "@/components/testimonials-section"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"

export const metadata: Metadata = pageMetadata({
  title: "Equipment Fleet for Rent in Oman",
  description:
    "Rent cranes, tippers, boom loaders, 3 to 18 ton forklifts, excavators, JCBs & wheel loaders with operators from Abdul Masood Trading LLC, Sohar, Oman.",
  path: "/equipment",
  keywords: equipmentTypes.map((equipment) => `${equipment.noun} rental Oman`),
})

export default function EquipmentPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Equipment", url: `${siteConfig.url}/equipment` },
        ])}
      />
      <Header />
      <PageHero
        eyebrow="Our Fleet"
        title="Equipment Fleet for Rent in Oman"
        intro={`Cranes, tippers, boom loaders, 3 to 18 ton forklifts, excavators, JCBs, and wheel loaders, hired with operators from ${siteConfig.legalName} in Sohar. Daily, weekly, and monthly terms.`}
        backgroundImage="/images/site/port-container-yard.jpg"
      />
      <EquipmentShowcase />
      <TestimonialsSection className="bg-background" />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
