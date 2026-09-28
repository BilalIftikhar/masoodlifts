import Link from "next/link"
import { ArrowRight, Phone, Mail, ClipboardList, PackageCheck } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FaqList } from "@/components/faq-list"
import { Reveal } from "@/components/reveal"
import { EquipmentVisual } from "@/components/equipment-visual"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"
import type { EquipmentType } from "@/lib/equipment"

type EquipmentDetailTemplateProps = {
  equipment: EquipmentType
  /** Links to the per-city rental pages for this equipment type. */
  cityLinks: { name: string; href: string }[]
}

export function EquipmentDetailTemplate({ equipment, cityLinks }: EquipmentDetailTemplateProps) {
  const whatsappHref = waLink(`Hello Abdul Masood Trading, I need ${equipment.noun} rental.`)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
        <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div className="animate-slide-up space-y-5">
            <span className="inline-flex rounded-md bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              {equipment.tag} · Oman
            </span>
            <h1 className="text-white">{equipment.label} Rental in Oman</h1>
            <p lang="ar" dir="rtl" className="font-arabic text-lg text-white/70">
              تأجير {equipment.labelAr}
            </p>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-white/85">{equipment.overview}</p>
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
          <div className="animate-fade-in relative h-72 overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10 md:h-96">
            <EquipmentVisual equipment={equipment} sizes="(min-width: 768px) 50vw, 100vw" priority />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-12 space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Typical Jobs</p>
            <h2 className="text-foreground">What Our {equipment.label}s Are Hired For</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {equipment.applications.map((application, idx) => (
              <Reveal key={application.title} delay={idx * 90} className="h-full">
                <div className="h-full rounded-lg border border-border border-t-4 border-t-accent bg-card p-7 transition-shadow hover:shadow-lg">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{application.title}</h3>
                  <p className="font-medium leading-relaxed text-muted-foreground">{application.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-lg border border-border bg-card p-8">
              <h2 className="mb-5 flex items-center gap-3 text-2xl font-extrabold text-foreground md:text-3xl">
                <PackageCheck className="shrink-0 text-accent" size={28} />
                What You Get
              </h2>
              <ul className="space-y-3">
                {equipment.fleetItems.map((item) => (
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
                <ClipboardList className="shrink-0 text-accent" size={28} />
                For a Fast, Accurate Quote
              </h2>
              <ol className="space-y-3">
                {equipment.quoteChecklist.map((item, idx) => (
                  <li key={item} className="flex gap-3 font-medium text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary text-xs font-bold text-primary-foreground">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-8 text-foreground">{equipment.label} Rental by City</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {cityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {link.name}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="mb-10 text-foreground">{equipment.label} Rental FAQs</h2>
          </Reveal>
          <FaqList faqs={equipment.faqs} />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
          <h2 className="text-foreground">Need a {equipment.label}?</h2>
          <p className="text-xl font-medium text-muted-foreground">
            Tell us the job, the site location, and your dates — we&apos;ll confirm the right machine and quote.
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
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`${equipment.label} rental inquiry`)}`}
              className="flex items-center justify-center gap-3 rounded-md bg-secondary px-6 py-3 font-bold text-foreground transition-colors hover:bg-secondary/80"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
