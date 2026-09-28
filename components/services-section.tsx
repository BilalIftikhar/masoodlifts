import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { services } from "@/lib/services"

const muscatHub = {
  href: "/locations/muscat",
  title: "Construction Machinery Rental in Muscat",
  tag: "Construction & Infrastructure",
  description:
    "Excavators, JCBs, wheel loaders, tippers, boom loaders, and cranes for building and infrastructure projects across the capital.",
  heroImage: "/images/fleet/excavator-transport.jpg",
  heroImageAlt: "Compact excavator loaded on a trailer ready for delivery",
}

export default function ServicesSection() {
  const cards = [...services, muscatHub]

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Rental Services</p>
          <h2 className="text-foreground">What Contractors Hire Us For</h2>
          <p className="text-lg font-medium text-muted-foreground">
            From lifting at Sohar Port to earthworks in Muscat, choose the service that matches your project.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((service, idx) => (
            <Reveal key={service.href} delay={idx * 90} className="h-full">
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="relative h-48 w-full bg-muted">
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                  <div className="space-y-3">
                    <span className="inline-block rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {service.tag}
                    </span>
                    <h3 className="text-foreground">{service.title}</h3>
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                    View Service
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
