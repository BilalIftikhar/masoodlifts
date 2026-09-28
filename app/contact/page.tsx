import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactDetails } from "@/components/contact-details"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { TestimonialsSection } from "@/components/testimonials-section"
import { breadcrumbSchema, contactPageSchema, localBusinessSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

const path = "/contact"

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Equipment Rental Quote",
  description:
    "Get an equipment rental quote from Abdul Masood Trading LLC, Sohar. Call +968 7928 8727, WhatsApp, or email chabdulmasood@gmail.com.",
  path,
})

export default function ContactPage() {
  const url = `${siteConfig.url}${path}`

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Contact", url },
          ]),
          contactPageSchema(url),
          localBusinessSchema(),
        ]}
      />
      <Header />
      <div className="bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-14 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Get In Touch</p>
            <h1 className="text-foreground">Contact {siteConfig.legalName}</h1>
            <p className="text-lg font-medium text-muted-foreground">
              For availability and a quote, call or WhatsApp {siteConfig.phoneDisplay}, or send the form. Tell us
              the machine, the site location, the job, and your dates.
            </p>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ContactDetails />
            </div>
            <Reveal delay={120} className="rounded-lg border-2 border-border bg-card p-6 md:p-10 lg:col-span-3">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
