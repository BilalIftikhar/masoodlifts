import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { PageHero } from "@/components/page-hero"
import { TestimonialsSection } from "@/components/testimonials-section"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { services } from "@/lib/services"
import { equipmentCityLinksByEquipment } from "@/lib/service-areas"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Equipment Rental Services in Oman",
  description:
    "Crane, tipper, boom loader, forklift, excavator, JCB & wheel loader rental in Sohar, Muscat, Duqm, Salalah, Nizwa & Al Buraimi. Operators included.",
  path: "/services",
  keywords: [
    "equipment rental services Oman",
    "crane rental Oman",
    "excavator rental Oman",
    "JCB rental Oman",
    "wheel loader rental Oman",
  ],
})

export default function ServicesPage() {
  const cityGroups = equipmentCityLinksByEquipment()

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      <Header />
      <PageHero
        eyebrow="Rental Services"
        title="Equipment Rental Services Across Oman"
        intro="Construction and civil works machinery, hired with operators from our base in Sohar. Pick a service, or jump straight to your machine and city below."
        backgroundImage="/images/site/port-container-yard.jpg"
      />
      <div className="bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 100} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full bg-muted">
                    <Image
                      src={service.heroImage}
                      alt={service.heroImageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-8">
                    <div className="space-y-3">
                      <span className="inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                        {service.tag}
                      </span>
                      <h2 className="text-2xl font-extrabold text-foreground">{service.title}</h2>
                      <p className="font-medium leading-relaxed text-muted-foreground">{service.description}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                      View Service
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <section className="mt-20">
            <Reveal className="mb-10 max-w-3xl space-y-3">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">By Machine &amp; City</p>
              <h2 className="text-foreground">Equipment Rental by City</h2>
              <p className="font-medium text-muted-foreground">
                Every machine, in every hub we serve. Each page covers local work areas, site conditions, and how
                the equipment reaches you.
              </p>
            </Reveal>

            <div className="space-y-6">
              {cityGroups.map(({ equipment, links }) => (
                <Reveal key={equipment.key} className="rounded-lg border border-border bg-card p-7">
                  <div className="mb-5 flex flex-wrap items-baseline gap-3">
                    <h3 className="text-xl font-extrabold text-foreground">
                      <Link href={equipment.href} className="hover:text-accent">
                        {equipment.label} Rental
                      </Link>
                    </h3>
                    <span className="rounded bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {equipment.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        {link.cityName}
                        <ArrowRight size={13} />
                      </Link>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </div>
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
