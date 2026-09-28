import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EquipmentShowcase from "@/components/equipment-showcase"
import ProcessSection from "@/components/process-section"
import ContactSection from "@/components/contact-section"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"

export const metadata: Metadata = pageMetadata({
  title: "Equipment Fleet for Rent in Oman",
  description:
    "Rent cranes, tippers, boom loaders, 3 ton forklifts, excavators, JCBs & wheel loaders with operators from Abdul Masood Trading LLC, Sohar, Oman.",
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
      <EquipmentShowcase headingLevel="h1" />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
