import { Phone, Mail, MapPin, FileBadge } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"

/**
 * Contact cards with the full letterhead details: phones, WhatsApp, email,
 * postal address, and C.R. number. Shared by the homepage and /contact.
 */
export function ContactDetails() {
  const cards = [
    {
      icon: Phone,
      label: "GSM — Call",
      value: siteConfig.phoneDisplay,
      href: siteConfig.telHref,
      emphasis: true,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: siteConfig.phoneDisplay,
      href: waLink("Hello Abdul Masood Trading, I would like a quote for equipment rental."),
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
  ]

  return (
    <div className="space-y-4">
      {cards.map((card, idx) => {
        const Icon = card.icon
        return (
          <Reveal key={card.label} delay={idx * 70}>
            <a
              href={card.href}
              {...(card.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="flex w-full items-center gap-4 rounded-lg border-2 border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md"
            >
              <span className="rounded-md bg-primary p-3">
                <Icon size={20} className="text-safety" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">{card.label}</span>
                <span
                  className={
                    card.emphasis ? "block text-2xl font-extrabold text-accent" : "block break-all font-bold text-foreground"
                  }
                >
                  {card.value}
                </span>
              </span>
            </a>
          </Reveal>
        )
      })}

      <Reveal delay={cards.length * 70}>
        <address className="rounded-lg border-2 border-border bg-background p-5 not-italic">
          <p className="flex items-start gap-3">
            <span className="rounded-md bg-primary p-3">
              <MapPin size={20} className="text-safety" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Registered Address
              </span>
              <span className="block font-extrabold text-foreground">{siteConfig.legalName}</span>
              <span lang="ar" dir="rtl" className="block font-arabic text-sm text-muted-foreground">
                {siteConfig.legalNameAr}
              </span>
              <span className="mt-1 block font-semibold text-foreground">
                P.O. Box {siteConfig.address.postOfficeBoxNumber}, Postal Code {siteConfig.address.postalCode}
              </span>
              <span className="block font-semibold text-foreground">
                {siteConfig.address.addressLocality}, {siteConfig.address.countryName}
              </span>
              <span className="mt-2 flex items-center gap-1.5 text-sm font-bold text-foreground">
                <FileBadge size={15} className="text-accent" /> C.R. No. {siteConfig.crNumber}
              </span>
            </span>
          </p>
        </address>
      </Reveal>
    </div>
  )
}
