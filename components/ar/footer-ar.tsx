import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { siteConfig } from "@/lib/site-config"
import { arabicEquipment } from "@/lib/arabic"

export function FooterAr() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-industrial text-industrial-foreground">
      <div className="hazard-stripe h-2" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-2">
            <Link href="/ar" aria-label={`${siteConfig.legalNameAr} — الرئيسية`} dir="ltr" className="inline-block">
              <BrandLogo tone="dark" />
            </Link>
            <p className="text-sm leading-relaxed text-white/70">{siteConfig.activityAr}</p>
            <address className="space-y-2.5 text-sm not-italic text-white/85">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-safety" />
                <span>
                  الساحة: {siteConfig.yardLineAr}
                  <span className="block text-white/60">ص.ب 326، الرمز البريدي 119، صحار، سلطنة عمان</span>
                </span>
              </p>
              <a href={siteConfig.telHref} className="flex items-center gap-2.5 hover:text-safety transition-colors">
                <Phone size={16} className="shrink-0 text-safety" />
                هاتف / واتساب: <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-safety transition-colors">
                <Mail size={16} className="shrink-0 text-safety" />
                <span dir="ltr">{siteConfig.email}</span>
              </a>
            </address>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white">المعدات</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {arabicEquipment.map((item) => (
                <li key={item.key}>
                  <Link href={item.path} className="hover:text-safety transition-colors">
                    تأجير {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white">المناطق والموانئ</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/ar/locations/sohar" className="hover:text-safety transition-colors">
                  تأجير معدات في صحار
                </Link>
              </li>
              <li>
                <Link href="/ar/locations/muscat" className="hover:text-safety transition-colors">
                  تأجير معدات في مسقط
                </Link>
              </li>
              <li>
                <Link href="/ar/ports/sohar-port" className="hover:text-safety transition-colors">
                  ميناء صحار والمنطقة الحرة
                </Link>
              </li>
              <li>
                <Link href="/locations" lang="en" hrefLang="en" className="font-sans hover:text-safety transition-colors">
                  All Oman locations (English)
                </Link>
              </li>
              <li>
                <Link href="/" lang="en" hrefLang="en" className="font-sans hover:text-safety transition-colors">
                  English website
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center text-sm text-white/60 md:flex-row md:text-start">
          <p>
            © {year} {siteConfig.legalNameAr}. جميع الحقوق محفوظة.
          </p>
          <p dir="ltr" className="font-sans">
            {siteConfig.legalName} — Sohar, Sultanate of Oman
          </p>
        </div>
      </div>
    </footer>
  )
}
