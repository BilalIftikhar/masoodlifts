import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone } from "lucide-react"
import { HeaderAr } from "@/components/ar/header-ar"
import { FooterAr } from "@/components/ar/footer-ar"
import { FaqList } from "@/components/faq-list"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"
import type { ArabicPage } from "@/lib/arabic"

/** Layout for every page in the Arabic section. Written for RTL: logical spacing, arrows pointing left. */
export function ArabicPageTemplate({ page }: { page: ArabicPage }) {
  const whatsappHref = waLink(page.whatsappMessage)

  return (
    <main className="w-full overflow-x-hidden">
      <HeaderAr enPath={page.enPath} />

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <Image src={page.heroImage} alt={page.heroImageAlt} fill priority className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex rounded-md bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">{page.eyebrow}</span>
            <h1 className="leading-snug text-white">{page.h1}</h1>
            <p className="text-lg font-medium leading-loose text-white/85">{page.intro}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.telHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Phone size={18} />
                اتصل <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon size={18} />
                اطلب عرض سعر على واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {page.sections.map((section, sectionIdx) => (
        <section key={section.heading} className={`py-16 md:py-24 ${sectionIdx % 2 === 1 ? "bg-secondary/50" : ""}`}>
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <h2 className="mb-10 text-foreground">{section.heading}</h2>
            </Reveal>
            {section.paragraphs && (
              <div className="max-w-4xl space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg font-medium leading-loose text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            {section.bullets && (
              <ul className="max-w-4xl space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-lg font-medium text-foreground">
                    <span className="shrink-0 font-bold text-accent">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.cards && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.cards.map((card, idx) => {
                  const body = (
                    <>
                      <h3 className="mb-2 text-lg font-bold text-foreground">{card.title}</h3>
                      <p className="font-medium leading-relaxed text-muted-foreground">{card.description}</p>
                      {card.href && (
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                          التفاصيل
                          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
                        </span>
                      )}
                    </>
                  )
                  return (
                    <Reveal key={card.title} delay={(idx % 3) * 90} className="h-full">
                      {card.href ? (
                        <Link
                          href={card.href}
                          className="group block h-full rounded-lg border border-border border-t-4 border-t-accent bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                          {body}
                        </Link>
                      ) : (
                        <div className="h-full rounded-lg border border-border border-t-4 border-t-accent bg-card p-7">{body}</div>
                      )}
                    </Reveal>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <h2 className="mb-10 text-foreground">الأسئلة الشائعة</h2>
          </Reveal>
          <FaqList faqs={page.faqs} />
        </div>
      </section>

      <section className="bg-secondary/50 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-foreground">صفحات ذات صلة</h2>
          <div className="flex flex-wrap gap-3">
            {page.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {link.name}
                <ArrowLeft size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8 px-4 text-center">
          <h2 className="text-foreground">{page.ctaHeading}</h2>
          <p className="text-xl font-medium leading-loose text-muted-foreground">
            أخبرنا بالآلة وموقع العمل والتواريخ، ونؤكد لك التوفر والسعر.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a
              href={siteConfig.telHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground"
            >
              <Phone size={18} />
              اتصل <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white"
            >
              <WhatsAppIcon size={18} />
              واتساب
            </a>
          </div>
        </div>
      </section>

      <FooterAr />
    </main>
  )
}
