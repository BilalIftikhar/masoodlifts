"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail, ChevronDown, MapPin } from "lucide-react"
import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"

export type NavMenu = {
  key: string
  label: string
  href: string
  allLabel: string
  items: { label: string; sub?: string; href: string }[]
}

/**
 * Interactive part of the header. Menus arrive as props from the server
 * `Header` so the page data behind them never ships in the client bundle.
 */
export function HeaderNav({ menus }: { menus: NavMenu[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  const whatsappHref = waLink("Hello Abdul Masood Trading, I would like a quote for equipment rental.")
  const close = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="hazard-stripe h-1" aria-hidden="true" />

      {/* Registration strip — the letterhead details, on every page. */}
      <div className="bg-industrial text-industrial-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={siteConfig.telHref} className="flex items-center gap-1.5 font-semibold hover:text-safety transition-colors">
              <Phone size={13} className="text-safety" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hidden items-center gap-1.5 hover:text-safety transition-colors md:flex">
              <Mail size={13} className="text-safety" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <p className="flex items-center gap-1.5 text-right text-industrial-foreground/80">
            <MapPin size={13} className="hidden shrink-0 text-safety sm:block" />
            <span>
              C.R. No. {siteConfig.crNumber}
              <span className="hidden md:inline"> · {siteConfig.addressLine}</span>
              <span className="md:hidden"> · Sohar, Oman</span>
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0" aria-label={`${siteConfig.legalName} — home`}>
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {menus.map((menu) => (
            <div key={menu.key} className="group relative">
              <Link
                href={menu.href}
                className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                {menu.label}
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-1 rounded-lg border border-border bg-card p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100">
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-secondary transition-colors"
                  >
                    <span className="block font-semibold text-foreground">{item.label}</span>
                    {item.sub && <span className="block text-xs text-muted-foreground">{item.sub}</span>}
                  </Link>
                ))}
                <Link
                  href={menu.href}
                  className="mt-1 block rounded-md px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-accent hover:bg-secondary transition-colors"
                >
                  {menu.allLabel}
                </Link>
              </div>
            </div>
          ))}
          <Link href="/about" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
            Guides
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={siteConfig.telHref}
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-all hover:bg-accent/90 hover:scale-[1.03] md:inline-flex"
          >
            <Phone size={16} />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="hidden items-center gap-2 rounded-md bg-[#25D366] px-3 py-2 text-sm font-bold text-white shadow-sm transition-all hover:scale-[1.03] hover:bg-[#1fb855] sm:inline-flex"
          >
            <WhatsAppIcon size={18} />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="text-foreground lg:hidden"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="animate-slide-down max-h-[calc(100vh-110px)] overflow-y-auto border-t border-border bg-background px-4 py-4 lg:hidden">
          <Link href="/" onClick={close} className="block py-2.5 text-sm font-semibold text-foreground">
            Home
          </Link>

          {menus.map((menu) => (
            <div key={menu.key}>
              <button
                onClick={() => setMobileSection(mobileSection === menu.key ? null : menu.key)}
                aria-expanded={mobileSection === menu.key}
                className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-foreground"
              >
                {menu.label}
                <ChevronDown size={16} className={mobileSection === menu.key ? "rotate-180" : ""} />
              </button>
              {mobileSection === menu.key && (
                <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-border pl-3">
                  {menu.items.map((item) => (
                    <Link key={item.href} href={item.href} onClick={close} className="py-2 text-sm text-muted-foreground">
                      {item.label}
                    </Link>
                  ))}
                  <Link href={menu.href} onClick={close} className="py-2 text-sm font-bold text-accent">
                    {menu.allLabel}
                  </Link>
                </div>
              )}
            </div>
          ))}

          <Link href="/about" onClick={close} className="block py-2.5 text-sm font-semibold text-foreground">
            About
          </Link>
          <Link href="/blog" onClick={close} className="block py-2.5 text-sm font-semibold text-foreground">
            Guides
          </Link>
          <Link href="/contact" onClick={close} className="block py-2.5 text-sm font-semibold text-foreground">
            Contact
          </Link>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={siteConfig.telHref}
              className="flex items-center justify-center gap-2 rounded-md bg-accent py-3 text-sm font-bold text-accent-foreground"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] py-3 text-sm font-bold text-white"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
