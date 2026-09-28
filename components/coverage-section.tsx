import Link from "next/link"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { siteConfig } from "@/lib/site-config"
import { locations } from "@/lib/locations"

export default function CoverageSection() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Oman-Wide Coverage</p>
          <h2 className="mt-2 text-foreground">Equipment Rental Across the Sultanate</h2>
          <p className="mt-3 text-lg font-medium text-muted-foreground">
            From our base in Sohar we supply the industrial and commercial hubs of Oman. Nearby areas are quickest to
            reach; for Duqm and Salalah we plan transport in advance for project hire.
          </p>
        </Reveal>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, idx) => (
            <Reveal key={location.slug} delay={(idx % 3) * 80} className="h-full">
              <Link
                href={location.href}
                className="group flex h-full gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
              >
                <span className="h-fit rounded-md bg-primary p-2.5">
                  <MapPin size={20} className="text-safety" />
                </span>
                <div className="space-y-1">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                    {location.cityName}
                    {location.slug === "sohar" && (
                      <span className="rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                        Base
                      </span>
                    )}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {location.governorate}
                  </p>
                  <p className="text-sm text-muted-foreground">{location.areas.slice(0, 3).join(" · ")}</p>
                  <span className="inline-flex items-center gap-1 pt-1 text-sm font-bold text-accent">
                    View coverage
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative overflow-hidden rounded-lg bg-primary p-8 text-center text-white md:p-10">
          <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-2xl font-extrabold md:text-3xl">Machine Down or Job Brought Forward?</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-white/85 md:text-base">
              Call the office with the machine you need and your site location — we&apos;ll tell you straight away
              what&apos;s available and when it can be there.
            </p>
            <a
              href={siteConfig.telHref}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              <Phone size={18} />
              Call {siteConfig.phoneDisplay}
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
