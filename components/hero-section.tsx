import { Phone, FileBadge, MapPin, Truck } from "lucide-react"
import Image from "next/image"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"
import { equipmentTypes } from "@/lib/equipment"

export default function HeroSection() {
  const whatsappHref = waLink("Hello Abdul Masood Trading, I am interested in equipment rental in Oman.")

  return (
    <section className="relative w-full overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/site/port-container-yard.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="bg-blueprint absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="space-y-7">
          <span className="animate-slide-up inline-flex items-center gap-2 rounded-md bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
            <MapPin size={13} /> Sohar · Muscat · Duqm · Salalah · Nizwa · Al Buraimi
          </span>

          <h1 className="animate-slide-up text-white" style={{ animationDelay: "80ms" }}>
            Heavy Equipment Rental in <span className="text-safety">Oman</span>
          </h1>

          <p
            className="animate-slide-up max-w-xl text-lg font-medium leading-relaxed text-white/85"
            style={{ animationDelay: "160ms" }}
          >
            Cranes, tippers, boom loaders, 3 ton forklifts, excavators, JCBs, and wheel loaders for construction and
            civil works, hired with operators from {siteConfig.legalName} in Sohar. Daily, weekly, and monthly terms
            across the Sultanate.
          </p>

          <dl
            className="animate-slide-up grid grid-cols-3 gap-4 border-y border-white/15 py-5"
            style={{ animationDelay: "240ms" }}
          >
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                <Truck size={14} className="text-safety" /> Fleet
              </dt>
              <dd className="mt-1 text-xl font-extrabold md:text-2xl">{equipmentTypes.length} Types</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                <MapPin size={14} className="text-safety" /> Based In
              </dt>
              <dd className="mt-1 text-xl font-extrabold md:text-2xl">Sohar</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                <FileBadge size={14} className="text-safety" /> C.R. No.
              </dt>
              <dd className="mt-1 text-xl font-extrabold md:text-2xl">{siteConfig.crNumber}</dd>
            </div>
          </dl>

          <div className="animate-slide-up flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "320ms" }}>
            <a
              href={siteConfig.telHref}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] sm:flex-none"
            >
              <Phone size={18} />
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1fb855] sm:flex-none"
            >
              <WhatsAppIcon size={18} />
              WhatsApp for a Quote
            </a>
          </div>
        </div>

        <div className="animate-fade-in relative hidden md:block" style={{ animationDelay: "200ms" }}>
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/mobile-crane.jpeg"
              alt="Yellow all-terrain mobile crane with its boom retracted"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="hazard-stripe absolute inset-x-0 bottom-0 h-3" aria-hidden="true" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-lg border-l-4 border-accent bg-white p-5 text-foreground shadow-xl lg:block">
            <p className="text-sm font-extrabold uppercase tracking-wide">{siteConfig.legalName}</p>
            <p lang="ar" dir="rtl" className="font-arabic text-sm text-muted-foreground">
              {siteConfig.legalNameAr}
            </p>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">{siteConfig.addressLine}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
