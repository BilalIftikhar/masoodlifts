"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"

const whatsappHref = waLink("Hello Abdul Masood Trading, I need heavy equipment rental information.")

/**
 * Always-on conversion layer: a full-width Call/WhatsApp bar pinned to the
 * bottom of the viewport on mobile, and a floating WhatsApp button on
 * desktop. Rendered once from the root layout so it persists across every
 * route.
 */
export function StickyMobileCta() {
  return (
    <>
      <div className="animate-slide-up fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-black/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:hidden">
        <a
          href={siteConfig.telHref}
          className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-bold text-accent-foreground transition-colors active:bg-accent/90"
        >
          <Phone size={18} strokeWidth={2.5} />
          Call {siteConfig.phoneDisplay}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white transition-colors active:bg-[#1fb855]"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Abdul Masood Trading on WhatsApp"
        className="animate-pulse-ring fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 md:flex"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  )
}
