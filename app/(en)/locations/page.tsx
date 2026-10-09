import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Anchor, MapPin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { PageHero } from "@/components/page-hero"
import { TestimonialsSection } from "@/components/testimonials-section"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { getLocationByGovernorate } from "@/lib/locations"
import { areas, areaHref } from "@/lib/areas"
import { ports } from "@/lib/ports"
import { siteConfig, governorates } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Equipment Rental Across Oman",
  description:
    "Heavy equipment rental in all 11 governorates of Oman, from Sohar to Muscat, Sur, Duqm, Salalah & Khasab. Towns, ports & delivery from Sohar.",
  path: "/locations",
})

export default function LocationsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Locations", url: `${siteConfig.url}/locations` },
        ])}
      />
      <Header />
      <PageHero
        eyebrow="Oman Service Network"
        title="Equipment Rental Across Oman"
        intro={`${siteConfig.legalName} is based in Sohar Industrial Estate. From there we supply construction and civil works machinery to all 11 governorates of Oman, listed here nearest to Sohar first, with a page for each governorate, the main towns and industrial areas, and the ports.`}
        backgroundImage="/images/site/port-container-yard.jpg"
      />
      <div className="bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl space-y-6 px-4">
          {governorates.map((governorate, idx) => {
            const hub = getLocationByGovernorate(governorate.name)
            if (!hub) return null
            const towns = areas.filter((area) => area.governorate === governorate.name)
            const governoratePorts = ports.filter((port) => port.governorate === governorate.name)

            return (
              <Reveal key={governorate.name} delay={(idx % 3) * 80}>
                <section className="grid gap-6 rounded-lg border border-border bg-card p-6 md:grid-cols-5 md:p-8">
                  <div className="space-y-3 md:col-span-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      {governorate.name} Governorate
                      <span lang="ar" dir="rtl" className="font-arabic ms-2 normal-case tracking-normal text-muted-foreground">
                        {governorate.nameAr}
                      </span>
                    </p>
                    <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">
                      <Link href={hub.href} className="hover:text-accent transition-colors">
                        {hub.title}
                      </Link>
                    </h2>
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">{hub.description}</p>
                    <Link href={hub.href} className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                      View {hub.shortTitle} Coverage
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className="space-y-5 md:col-span-3">
                    {towns.length > 0 && (
                      <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                          Towns &amp; Industrial Areas
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {towns.map((town) => (
                            <Link
                              key={town.slug}
                              href={areaHref(town)}
                              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                            >
                              <MapPin size={13} className="text-accent" />
                              {town.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {governoratePorts.length > 0 && (
                      <div>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted-foreground">Ports</h3>
                        <div className="flex flex-wrap gap-2">
                          {governoratePorts.map((port) => (
                            <Link
                              key={port.slug}
                              href={port.href}
                              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                            >
                              <Anchor size={13} className="text-accent" />
                              {port.shortName}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              </Reveal>
            )
          })}
        </div>
      </div>
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
