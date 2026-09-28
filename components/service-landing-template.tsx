import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FaqList } from "@/components/faq-list"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { HeroQuoteForm } from "@/components/contact-form"
import { TestimonialsSection } from "@/components/testimonials-section"
import { siteConfig, waLink } from "@/lib/site-config"
import type { EquipmentKey } from "@/lib/equipment"

export type SpecRow = { label: string; value: string }
export type BulletGroup = { title: string; items: string[] }
export type FaqItem = { question: string; answer: string }
export type AreaLink = { name: string; href: string }
export type LocalContext = { heading: string; paragraphs: string[] }

type ServiceLandingTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  heroImage: string
  heroImageAlt: string
  specs: SpecRow[]
  bulletGroups: BulletGroup[]
  /** City-specific guidance for this equipment type — what makes the page more than a template. */
  localContext?: LocalContext
  areasHeading: string
  areas: AreaLink[]
  faqs: FaqItem[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
  /** The machine and city this page is about: pre-fills the hero form and picks testimonials. */
  equipmentKey?: EquipmentKey
  equipmentLabel?: string
  cityName?: string
}

export function ServiceLandingTemplate({
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  specs,
  bulletGroups,
  localContext,
  areasHeading,
  areas,
  faqs,
  ctaHeading,
  ctaSubheading,
  whatsappMessage,
  equipmentKey,
  equipmentLabel,
  cityName,
}: ServiceLandingTemplateProps) {
  const whatsappHref = waLink(whatsappMessage)
  // Sections below the bullet groups alternate backgrounds; which one starts
  // shaded depends on whether the optional local-context section is present.
  const shaded = (on: boolean) => (on ? "bg-secondary/40 py-20 md:py-28" : "py-20 md:py-28")
  const b = Boolean(localContext)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroImageAlt} fill priority className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-up space-y-5">
            <span className="inline-flex rounded-md bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              {eyebrow}
            </span>
            <h1 className="text-white">{title}</h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-white/85">{intro}</p>
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
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon size={18} />
                WhatsApp for a Quote
              </a>
            </div>
          </div>
          <HeroQuoteForm equipment={equipmentLabel} location={cityName} />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {specs.map((spec, idx) => (
              <Reveal key={spec.label} delay={idx * 80} className="bg-card">
                <div className="flex flex-col gap-1 p-6 text-center">
                  <span className="text-2xl font-extrabold text-primary md:text-3xl">{spec.value}</span>
                  <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{spec.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {bulletGroups.map((group, idx) => (
              <Reveal key={group.title} delay={idx * 100} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
                  <h2 className="mb-4 text-xl font-extrabold text-foreground">{group.title}</h2>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-medium text-foreground">
                        <span className="mt-0.5 shrink-0 font-bold text-accent">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {localContext && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl space-y-6 px-4">
            <Reveal>
              <h2 className="text-foreground">{localContext.heading}</h2>
            </Reveal>
            {localContext.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg font-medium leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      <section className={shaded(b)}>
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-8 text-foreground">{areasHeading}</h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {area.name}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection
        equipment={equipmentKey}
        city={cityName}
        className={b ? "bg-background" : "bg-secondary/40"}
      />

      <section className={shaded(b)}>
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="mb-10 text-foreground">Frequently Asked Questions</h2>
          </Reveal>
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className={shaded(!b)}>
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
          <h2 className="text-foreground">{ctaHeading}</h2>
          <p className="text-xl font-medium text-muted-foreground">{ctaSubheading}</p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              href={siteConfig.telHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              <Phone size={18} />
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <WhatsAppIcon size={18} />
              Request a Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
