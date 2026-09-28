import { ContactForm } from "@/components/contact-form"
import { ContactDetails } from "@/components/contact-details"
import { Reveal } from "@/components/reveal"

export default function ContactSection() {
  return (
    <section id="quote" className="w-full scroll-mt-32 bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Get a Quote</p>
          <h2 className="mt-2 text-foreground">Tell Us What You Need</h2>
          <p className="mt-3 text-lg font-medium text-muted-foreground">
            Call, WhatsApp, or send the form — include the machine, the site location, and your dates.
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactDetails />
          </div>
          <Reveal delay={120} className="rounded-lg border-2 border-border bg-background p-6 md:p-10 lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
