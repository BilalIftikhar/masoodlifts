import Link from "next/link"
import { ArrowRight, Phone, PackageCheck, Scale } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FaqList } from "@/components/faq-list"
import { Reveal } from "@/components/reveal"
import { EquipmentVisual } from "@/components/equipment-visual"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { HeroQuoteForm } from "@/components/contact-form"
import { siteConfig, waLink } from "@/lib/site-config"
import type { EquipmentType } from "@/lib/equipment"
import type { CapacityPage } from "@/lib/capacities"

type CapacityDetailTemplateProps = {
  equipment: EquipmentType
  page: CapacityPage
  /** The other sizes of the same machine, for comparison and internal linking. */
  siblings: { label: string; href: string }[]
}

/** Page for one machine size, e.g. /equipment/crane/25-ton-crane-rental-oman. */
export function CapacityDetailTemplate({ equipment, page, siblings }: CapacityDetailTemplateProps) {
  const whatsappHref = waLink(`Hello Abdul Masood Trading, I need a ${page.label.toLowerCase()} for rent.`)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
        <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-up space-y-5">
            <span className="inline-flex rounded-md bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              {page.tons} Ton Capacity · Oman
            </span>
            <h1 className="text-white">{page.label} Rental in Oman</h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-white/85">{page.intro}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.telHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Phone size={18} />
                Call {siteConfig.phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1fb855]"
              >
                <WhatsAppIcon size={18} />
                WhatsApp for a Quote
              </a>
            </div>
          </div>
          <HeroQuoteForm equipment={equipment.label} />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <Reveal className="space-y-5">
            <h2 className="text-foreground">What a {page.label} Handles</h2>
            {page.handles.map((paragraph) => (
              <p key={paragraph} className="text-lg font-medium leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-lg md:h-80">
            <EquipmentVisual equipment={equipment} sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-12 text-foreground">Typical {page.label} Jobs</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {page.jobs.map((job, idx) => (
              <Reveal key={job.title} delay={idx * 90} className="h-full">
                <div className="h-full rounded-lg border border-border border-t-4 border-t-accent bg-card p-7">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{job.title}</h3>
                  <p className="font-medium leading-relaxed text-muted-foreground">{job.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-lg border border-border bg-card p-8">
              <h2 className="mb-5 flex items-center gap-3 text-2xl font-extrabold text-foreground md:text-3xl">
                <PackageCheck className="shrink-0 text-accent" size={28} />
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {page.included.map((item) => (
                  <li key={item} className="flex gap-3 font-medium text-foreground">
                    <span className="mt-0.5 shrink-0 font-bold text-accent">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="h-full rounded-lg border border-border bg-card p-8">
              <h2 className="mb-5 flex items-center gap-3 text-2xl font-extrabold text-foreground md:text-3xl">
                <Scale className="shrink-0 text-accent" size={28} />
                What Affects the Price
              </h2>
              <ul className="space-y-3">
                {page.priceFactors.map((item) => (
                  <li key={item} className="flex gap-3 font-medium text-foreground">
                    <span className="mt-0.5 shrink-0 font-bold text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-medium text-muted-foreground">
                Rates are quoted per job. Send the details and we will reply with a price.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-8 text-foreground">Other {equipment.noun.charAt(0).toUpperCase() + equipment.noun.slice(1)} Sizes</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {[...siblings, { label: `All ${equipment.label} Rental`, href: equipment.href }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {link.label}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="mb-10 text-foreground">{page.label} Rental FAQs</h2>
          </Reveal>
          <FaqList faqs={page.faqs} />
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
          <h2 className="text-foreground">Need a {page.label}?</h2>
          <p className="text-xl font-medium text-muted-foreground">
            Send the load, the site, and your dates — we&apos;ll confirm the machine and quote.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              href={siteConfig.telHref}
              className="flex items-center justify-center gap-3 rounded-md bg-accent px-6 py-3 font-bold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone size={20} />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-md bg-[#25D366] px-6 py-3 font-bold text-white transition-all hover:bg-[#1fb855]"
            >
              <WhatsAppIcon size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
