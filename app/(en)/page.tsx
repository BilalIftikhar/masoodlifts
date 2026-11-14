import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import EquipmentShowcase from "@/components/equipment-showcase"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import CoverageSection from "@/components/coverage-section"
import ProcessSection from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { faqSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { generalFaqs } from "@/lib/faqs"

const homeMetadata = pageMetadata({
  // "construction equipment rental", "equipment rental", and "equipment for
  // rent" are the Oman head terms every ranking competitor wins on (Semrush,
  // Nov 2026), so the title and description lead with them.
  title: "Construction Equipment Rental in Oman",
  description:
    "Construction equipment for rent in Oman: cranes, tippers, boom loaders, 3–18 ton forklifts, excavators, JCBs & wheel loaders with operators.",
  path: "/",
  languages: { en: "/", ar: "/ar" },
})

// The homepage shares the root layout's segment, so the layout's title template
// never applies here — without this the brand is missing from the home title.
export const metadata: Metadata = {
  ...homeMetadata,
  title: { absolute: "Construction Equipment Rental in Oman | Abdul Masood Trading" },
}

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd data={faqSchema(generalFaqs)} />
      <Header />
      <HeroSection />
      <EquipmentShowcase />
      <ServicesSection />
      <WhyChooseUs />
      <CoverageSection />
      <ProcessSection />
      <TestimonialsSection className="bg-background" />
      <FaqSection
        faqs={generalFaqs}
        subheading="What to know before renting equipment from Abdul Masood Trading."
      />
      <ContactSection />
      <Footer />
    </main>
  )
}
