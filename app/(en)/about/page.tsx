import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { PageHero } from "@/components/page-hero"
import { TestimonialsSection } from "@/components/testimonials-section"
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"

const path = "/about"

export const metadata: Metadata = pageMetadata({
  title: "About Abdul Masood Trading LLC",
  description:
    "ABDUL MASOOD TRADING LLC, Sohar, Oman: renting equipment and engineering machinery for construction and civil works across Oman.",
  path,
})

/**
 * Company facts in a plain label/value list. Answer engines lift short,
 * specific statements like these far more readily than marketing copy, so
 * every value here must stay factual and match siteConfig.
 */
const facts: { label: string; value: string; ar?: string }[] = [
  { label: "Legal name", value: siteConfig.legalName, ar: siteConfig.legalNameAr },
  { label: "Activity", value: siteConfig.activity, ar: siteConfig.activityAr },
  { label: "Registered address", value: siteConfig.addressLine },
  { label: "Equipment", value: equipmentTypes.map((equipment) => equipment.label).join(", ") },
  { label: "Coverage", value: locations.map((location) => location.cityName).join(", ") + " and across Oman" },
  { label: "Operators", value: "Machines are supplied with experienced operators and drivers" },
  { label: "Hire terms", value: "Daily, weekly, and monthly" },
  { label: "GSM & WhatsApp", value: siteConfig.phoneDisplay },
  { label: "Email", value: siteConfig.email },
]

export default function AboutPage() {
  const url = `${siteConfig.url}${path}`

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "About", url },
          ]),
          aboutPageSchema(url),
        ]}
      />
      <Header />

      <PageHero eyebrow="About Us" title={`About ${siteConfig.legalName}`}>
        <p lang="ar" dir="rtl" className="font-arabic text-xl text-white/70">
          {siteConfig.legalNameAr}
        </p>
        <p className="max-w-xl text-lg font-medium leading-relaxed text-white/85">
          {siteConfig.legalName} is a Sohar-registered company that rents equipment and engineering machinery for construction and civil works. We supply cranes, tipper trucks, boom loaders, 3 to 18 ton forklifts, excavators, JCB backhoe loaders, and wheel loaders to contractors, factories, and logistics operators, with experienced operators and drivers.
        </p>
      </PageHero>

      <section className="pt-16 md:pt-20">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">
            Being in Sohar puts us close to Sohar Port and Freezone, Sohar Industrial Estate, and the Batinah coast, with road links to Muscat, Al Buraimi, and the interior. For projects in Duqm and Salalah we plan transport in advance and supply machines on weekly and monthly hire.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="mb-8 text-foreground">Company Facts</h2>
          </Reveal>
          <dl className="divide-y divide-border overflow-hidden rounded-lg border border-border border-t-4 border-t-accent bg-card">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{fact.label}</dt>
                <dd className="font-semibold text-foreground sm:col-span-2">
                  {fact.value}
                  {fact.ar && (
                    <span lang="ar" dir="rtl" className="mt-1 block font-arabic text-sm font-normal text-muted-foreground">
                      {fact.ar}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4">
          <h2 className="text-foreground">How We Work</h2>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">
            We match the machine to the job. Before quoting we ask what the work is — the heaviest lift, the dig
            depth, the volume of material to move — along with the site location, the ground, and access. That way
            the right machine arrives the first time.
          </p>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground">
            Machines come with operators and drivers who know them. Many projects hire several machines from us —
            an excavator or JCB with tippers for earthworks, then a boom loader or crane for the structure — so one
            supplier covers the job from site preparation onwards.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-2xl text-foreground">Equipment</h2>
            <ul className="space-y-2">
              {equipmentTypes.map((equipment) => (
                <li key={equipment.href}>
                  <Link href={equipment.href} className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-accent">
                    {equipment.label} Rental <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl text-foreground">Services</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-accent">
                    {service.title} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl text-foreground">Locations</h2>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.href}>
                  <Link href={location.href} className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-accent">
                    {location.title} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TestimonialsSection className="bg-secondary/60" />

      <Footer />
    </main>
  )
}
