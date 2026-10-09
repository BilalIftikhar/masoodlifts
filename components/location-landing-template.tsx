import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FaqList } from "@/components/faq-list"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { HeroQuoteForm } from "@/components/contact-form"
import { TestimonialsSection } from "@/components/testimonials-section"
import { siteConfig, waLink } from "@/lib/site-config"
import type { Faq } from "@/lib/faqs"

export type LocationServiceLink = {
  key: string
  /** Card heading, e.g. "Crane Rental Sohar". */
  title: string
  tag: string
  href: string
}

export type NearbyLink = { name: string; href: string }

export type LinkGroup = { heading: string; links: NearbyLink[] }

export type ContextSection = { heading: string; paragraphs: string[] }

type LocationLandingTemplateProps = {
  eyebrow: string
  title: string
  intro: string
  heroImage: string
  heroImageAlt: string
  areas: string[]
  /** Equipment pages scoped to this city — the main internal-linking hub. */
  serviceLinks: LocationServiceLink[]
  serviceHeading?: string
  cityName: string
  whyHeading: string
  whyPoints: { title: string; description: string }[]
  faqs?: Faq[]
  /** Free-text guidance on working in this area, shown after the area list. */
  contextSections?: ContextSection[]
  /** Rendered after the context sections, e.g. the yard map on the Sohar page. */
  extraContent?: ReactNode
  governorate: string
  /** Internal links: towns and ports in the governorate, nearby hubs. */
  linkGroups?: LinkGroup[]
  ctaHeading: string
  ctaSubheading: string
  whatsappMessage: string
}

export function LocationLandingTemplate({
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  areas,
  serviceLinks,
  serviceHeading,
  cityName,
  whyHeading,
  whyPoints,
  faqs,
  contextSections = [],
  extraContent,
  governorate,
  linkGroups = [],
  ctaHeading,
  ctaSubheading,
  whatsappMessage,
}: LocationLandingTemplateProps) {
  const whatsappHref = waLink(whatsappMessage)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroImageAlt} fill priority className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div className="animate-slide-up space-y-5">
            <span className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              <MapPin size={13} />
              {eyebrow}
            </span>
            <h1 className="text-white">{title}</h1>
            <p className="text-lg font-medium leading-relaxed text-white/85">{intro}</p>
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
          <HeroQuoteForm location={cityName} />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-2 text-foreground">Areas We Cover</h2>
            <p className="mb-8 font-semibold uppercase tracking-wide text-muted-foreground">{governorate} Governorate</p>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
          {contextSections.map((section) => (
            <div key={section.heading} className="mt-16 max-w-4xl space-y-6">
              <Reveal>
                <h2 className="text-foreground">{section.heading}</h2>
              </Reveal>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg font-medium leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          {extraContent && <div className="mt-16">{extraContent}</div>}
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-14 space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Equipment Available</p>
            <h2 className="text-foreground">{serviceHeading ?? `Rent by Equipment Type in ${cityName}`}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceLinks.map((service, idx) => (
              <Reveal key={service.key} delay={idx * 80} className="h-full">
                <Link
                  href={service.href}
                  className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="space-y-2">
                    <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                      {service.tag}
                    </span>
                    <h3 className="text-lg font-extrabold text-foreground">{service.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                    View Details
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="mb-14 text-foreground">{whyHeading}</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point, idx) => (
              <Reveal key={point.title} delay={idx * 100} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-shadow hover:shadow-lg">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{point.title}</h3>
                  <p className="font-medium leading-relaxed text-muted-foreground">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection city={cityName} className="bg-secondary/40" />

      {faqs && faqs.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4">
            <Reveal>
              <h2 className="mb-10 text-foreground">Frequently Asked Questions</h2>
            </Reveal>
            <FaqList faqs={faqs} />
          </div>
        </section>
      )}

      {linkGroups.length > 0 && (
        <section className="bg-secondary/40 py-16 md:py-20">
          <div className="mx-auto max-w-7xl space-y-12 px-4">
            {linkGroups.map((group) => (
              <div key={group.heading}>
                <Reveal>
                  <h2 className="mb-8 text-foreground">{group.heading}</h2>
                </Reveal>
                <div className="flex flex-wrap gap-3">
                  {group.links.map((link) => (
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
            ))}
          </div>
        </section>
      )}

      <section className="py-20 md:py-28">
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
