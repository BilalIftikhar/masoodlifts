import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { primaryLocations, secondaryLocations } from "@/lib/locations"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Equipment Rental Locations in Oman",
  description:
    "Heavy equipment rental in Sohar, Muscat, Al Buraimi, Nizwa, Duqm & Salalah. Work areas, site conditions, and delivery from our Sohar base.",
  path: "/locations",
  keywords: [
    "equipment rental Oman",
    "heavy equipment rental Sohar",
    "equipment rental Muscat",
    "equipment rental Duqm",
    "equipment rental Salalah",
  ],
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

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Oman Service Network</p>
            <h1 className="text-foreground">Where We Supply Equipment</h1>
            <p className="text-lg font-medium text-muted-foreground">
              {siteConfig.legalName} is registered in Sohar. From there we supply construction and civil works
              machinery across the Batinah coast, Muscat, Al Buraimi, and the interior, with planned project hire in
              Duqm and Salalah.
            </p>
          </Reveal>

          <Reveal className="mb-8">
            <h2 className="text-foreground">Core Coverage</h2>
          </Reveal>
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {primaryLocations.map((location, idx) => (
              <Reveal key={location.slug} delay={idx * 100} className="h-full">
                <Link
                  href={location.href}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full bg-muted">
                    <Image
                      src={location.heroImage}
                      alt={location.heroImageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-7">
                    <div className="space-y-3">
                      <span className="inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                        {location.governorate}
                      </span>
                      <h3 className="text-xl font-extrabold text-foreground">{location.title}</h3>
                      <p className="text-sm font-medium leading-relaxed text-muted-foreground">{location.description}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                      View {location.cityName} Coverage
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mb-8 max-w-3xl space-y-3">
            <h2 className="text-foreground">Interior &amp; Project Hire</h2>
            <p className="font-medium text-muted-foreground">
              Planned deliveries from Sohar. Each page covers local work areas, site conditions, and realistic
              mobilization, and hires of a week or more work best here.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryLocations.map((location, idx) => (
              <Reveal key={location.slug} delay={idx * 80} className="h-full">
                <Link
                  href={location.href}
                  className="group flex h-full flex-col justify-between gap-4 rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <span className="inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {location.governorate}
                    </span>
                    <h3 className="text-xl font-extrabold text-foreground">{location.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">{location.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                    View {location.cityName} Coverage
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
