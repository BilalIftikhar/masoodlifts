import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"

const whatsappHref = waLink("السلام عليكم، أحتاج معلومات عن تأجير المعدات الثقيلة.")

/** Arabic counterpart of StickyMobileCta: call/WhatsApp bar on mobile, floating WhatsApp on desktop. */
export function StickyCtaAr() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-black/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:hidden">
        <a
          href={siteConfig.telHref}
          className="flex items-center justify-center gap-2 bg-accent py-3.5 text-sm font-bold text-accent-foreground"
        >
          <Phone size={18} strokeWidth={2.5} />
          اتصل الآن
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white"
        >
          <WhatsAppIcon size={18} />
          واتساب
        </a>
      </div>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا على واتساب"
        className="animate-pulse-ring fixed bottom-6 left-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 md:flex"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  )
}
