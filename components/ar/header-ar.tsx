import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"

const nav = [
  { label: "الرئيسية", href: "/ar" },
  { label: "الرافعات", href: "/ar/equipment/crane" },
  { label: "الرافعات الشوكية", href: "/ar/equipment/forklift" },
  { label: "صحار", href: "/ar/locations/sohar" },
  { label: "مسقط", href: "/ar/locations/muscat" },
  { label: "ميناء صحار", href: "/ar/ports/sohar-port" },
]

/**
 * Header for the Arabic section. Server-rendered with no menu state: the nav
 * wraps on small screens instead of opening a drawer, so it ships no JS.
 * `enPath` is the English version of the current page for the language switch.
 */
export function HeaderAr({ enPath }: { enPath: string }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="hazard-stripe h-1" aria-hidden="true" />
      <div className="bg-industrial text-industrial-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={siteConfig.telHref} dir="ltr" className="flex items-center gap-1.5 font-semibold hover:text-safety transition-colors">
              <Phone size={13} className="text-safety" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} dir="ltr" className="hidden items-center gap-1.5 hover:text-safety transition-colors md:flex">
              <Mail size={13} className="text-safety" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <p className="hidden items-center gap-1.5 text-industrial-foreground/80 md:flex">
              <MapPin size={13} className="shrink-0 text-safety" />
              {siteConfig.yardLineAr}
            </p>
            <Link href={enPath} lang="en" hrefLang="en" dir="ltr" className="font-sans font-semibold hover:text-safety transition-colors">
              English
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-3">
        <Link href="/ar" className="shrink-0" aria-label={`${siteConfig.legalNameAr} — الرئيسية`} dir="ltr">
          <BrandLogo />
        </Link>
        <nav className="order-3 flex w-full gap-5 overflow-x-auto pb-1 text-sm font-semibold lg:order-none lg:w-auto lg:pb-0">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 text-foreground hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <a
            href={siteConfig.telHref}
            dir="ltr"
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90 md:inline-flex"
          >
            <Phone size={16} />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={waLink("السلام عليكم، أريد عرض سعر لتأجير معدات.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#1fb855]"
          >
            <WhatsAppIcon size={18} />
            <span className="hidden sm:inline">واتساب</span>
          </a>
        </div>
      </div>
    </header>
  )
}
