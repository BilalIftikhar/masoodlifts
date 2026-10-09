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
import { ports } from "@/lib/ports"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Crane & Forklift Rental, Oman Ports",
  description:
    "Crane and forklift rental at Sohar Port, Shinas, Muttrah, Mina Al Fahal, Sur, Duqm, Salalah & Khasab, with operators. Call +968 7928 8727.",
  path: "/ports",
})

export default function PortsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Ports", url: `${siteConfig.url}/ports` },
        ])}
      />
      <Header />
      <PageHero
        eyebrow="Oman Ports"
        title="Crane & Forklift Rental at Omani Ports"
        intro={`From Sohar Port, a short drive from our yard, to Duqm, Salalah, and Khasab, ${siteConfig.legalName} supplies cranes, forklifts, boom loaders, and earthmoving machines with operators for cargo, maintenance, and construction work at Oman's ports. Ports are listed nearest to Sohar first.`}
        backgroundImage="/images/site/port-container-yard.jpg"
      />
      <div className="bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-10 max-w-3xl space-y-3">
            <h2 className="text-foreground">Ports We Supply</h2>
            <p className="font-medium text-muted-foreground">
              Each page covers the work at that port, the gate and safety documents sites usually ask for, the machines
              most hired there, and how we plan delivery from Sohar.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ports.map((port, idx) => (
              <Reveal key={port.slug} delay={(idx % 3) * 100} className="h-full">
                <Link
                  href={port.href}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-44 w-full bg-muted">
                    <Image
                      src={port.heroImage}
                      alt={port.heroImageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-7">
                    <div className="space-y-3">
                      <span className="inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                        {port.governorate}
                      </span>
                      <h3 className="text-xl font-extrabold text-foreground">{port.name}</h3>
                      <p className="text-sm font-medium leading-relaxed text-muted-foreground">{port.metaDescription}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                      Crane &amp; Forklift Rental at {port.shortName}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
