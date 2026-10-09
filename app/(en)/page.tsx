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
  title: "Heavy Equipment Rental in Oman",
  description:
    "Crane, tipper, boom loader, 3 to 18 ton forklift, excavator, JCB & wheel loader rental across Oman with operators. Based in Sohar. Call +968 7928 8727.",
  path: "/",
  languages: { en: "/", ar: "/ar" },
})

// The homepage shares the root layout's segment, so the layout's title template
// never applies here — without this the brand is missing from the home title.
export const metadata: Metadata = {
  ...homeMetadata,
  title: { absolute: "Heavy Equipment Rental in Oman | Abdul Masood Trading" },
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
