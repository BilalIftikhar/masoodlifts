import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { siteConfig, serviceAreas } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"

/** High-intent pages surfaced sitewide so they gain internal link equity. */
const popularSearches = [
  { label: "Heavy Equipment Rental in Oman", href: "/" },
  ...services.map((service) => ({ label: service.shortTitle, href: service.href })),
  { label: "Construction Machinery Rental Muscat", href: "/locations/muscat" },
  { label: "Excavator Rental Sohar", href: "/services/excavator-rental-sohar" },
  { label: "Wheel Loader Rental Al Buraimi", href: "/services/wheel-loader-rental-al-buraimi" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-industrial text-industrial-foreground">
      <div className="hazard-stripe h-2" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <Link href="/" aria-label={`${siteConfig.legalName} — home`}>
              <BrandLogo tone="dark" />
            </Link>
            <div className="space-y-1 text-sm leading-relaxed text-white/70">
              <p>{siteConfig.activity}</p>
              <p lang="ar" dir="rtl" className="font-arabic text-right text-white/60 md:text-left">
                {siteConfig.activityAr}
              </p>
            </div>
            <address className="space-y-2.5 pt-1 text-sm not-italic text-white/85">
              <p className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-safety" />
                {siteConfig.addressLine}
              </p>
              <a href={siteConfig.telHref} className="flex items-center gap-2.5 hover:text-safety transition-colors">
                <Phone size={16} className="shrink-0 text-safety" />
                GSM / WhatsApp: {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-safety transition-colors">
                <Mail size={16} className="shrink-0 text-safety" />
                {siteConfig.email}
              </a>
            </address>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Equipment</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {equipmentTypes.map((equipment) => (
                <li key={equipment.key}>
                  <Link href={equipment.href} className="hover:text-safety transition-colors">
                    {equipment.label} Rental
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/equipment" className="hover:text-safety transition-colors">
                  Full Fleet
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Locations</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link href={location.href} className="hover:text-safety transition-colors">
                    Equipment Rental {location.cityName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="hover:text-safety transition-colors">
                  All Oman Coverage
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Popular Searches</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              {popularSearches.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-safety transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="pt-4 text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-safety transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-safety transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-safety transition-colors">
                  Contact &amp; Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">Oman Service Network</h3>
          <p className="text-sm leading-relaxed text-white/60">{serviceAreas.map((area) => area.name).join(" · ")}</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center text-sm text-white/60 md:flex-row md:text-left">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p lang="ar" dir="rtl" className="font-arabic">
            {siteConfig.legalNameAr} — صحار، سلطنة عمان
          </p>
        </div>
      </div>
    </footer>
  )
}
