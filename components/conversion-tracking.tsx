"use client"

import Script from "next/script"
import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

/**
 * GA4 page views plus lead events, with no per-link wiring:
 * - phone_click     any tel: link
 * - whatsapp_click  any WhatsApp link (api.whatsapp.com / wa.me)
 * - email_click     any mailto: link
 * - quote_submit    any form submission (the inquiry forms)
 * Mark these four as key events in GA4 → Admin → Events.
 *
 * Loads nothing until NEXT_PUBLIC_GA_ID (G-XXXXXXX) is set in the host environment.
 * Vercel Analytics keeps counting page views alongside it.
 */
export function ConversionTracking() {
  useEffect(() => {
    if (!GA_ID) return
    const send = (event: string, params: Record<string, unknown>) =>
      window.gtag?.("event", event, { page_path: window.location.pathname, ...params })

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]")
      if (!a) return
      const href = a.href
      const params = { link_url: href, link_text: a.textContent?.trim().slice(0, 60) }
      if (href.startsWith("tel:")) send("phone_click", params)
      else if (/api\.whatsapp\.com|wa\.me/.test(href)) send("whatsapp_click", params)
      else if (href.startsWith("mailto:")) send("email_click", params)
    }
    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null
      send("quote_submit", { form_id: form?.id || form?.getAttribute("aria-label") || "form" })
    }
    document.addEventListener("click", onClick)
    document.addEventListener("submit", onSubmit)
    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("submit", onSubmit)
    }
  }, [])

  if (!GA_ID) return null
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  )
}
