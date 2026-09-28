import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { EquipmentVisual } from "@/components/equipment-visual"
import { equipmentTypes } from "@/lib/equipment"

export default function EquipmentShowcase({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel

  return (
    <section className="w-full bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Our Fleet</p>
          <Heading className="text-foreground">Equipment &amp; Engineering Machinery for Rent</Heading>
          <p className="text-lg font-medium text-muted-foreground">
            Seven categories of construction and civil works equipment, each hired with an experienced operator or
            driver.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipmentTypes.map((equipment, idx) => (
            <Reveal key={equipment.key} delay={(idx % 4) * 90} className="h-full">
              <Link
                href={equipment.href}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  <EquipmentVisual
                    equipment={equipment}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                  <div className="space-y-2">
                    <span className="inline-block rounded bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {equipment.tag}
                    </span>
                    <h3 className="text-lg font-extrabold text-foreground">{equipment.label} Rental</h3>
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">{equipment.summary}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                    Details &amp; Quote
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={270} className="h-full">
            <Link
              href="/contact"
              className="group flex h-full flex-col justify-between gap-4 rounded-lg bg-industrial p-6 text-white transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-3">
                <span className="hazard-stripe block h-2 w-16 rounded-sm" aria-hidden="true" />
                <h3 className="text-xl font-extrabold">Need Several Machines?</h3>
                <p className="text-sm font-medium leading-relaxed text-white/75">
                  Excavator, loader, and tippers for earthworks, then a boom loader or crane for the structure — one
                  supplier, one schedule.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-safety">
                Request a Package Quote
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
