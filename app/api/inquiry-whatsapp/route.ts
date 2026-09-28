import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/site-config"

/**
 * Forwards each website inquiry to the company WhatsApp through CallMeBot
 * (https://www.callmebot.com), so the team sees it on the phone as well as
 * in the email inbox. The customer never has to open WhatsApp.
 *
 * Setup (owner, one time):
 * 1. From the WhatsApp number that should receive inquiries, follow the
 *    "WhatsApp" instructions on callmebot.com to get a personal API key.
 * 2. In the hosting dashboard (Vercel → Settings → Environment Variables) add
 *    CALLMEBOT_API_KEY, and WHATSAPP_NOTIFY_PHONE if the receiving number is
 *    not the site's main number. Redeploy.
 *
 * Without the key this route does nothing and the form falls back to email only.
 */

const FIELDS = ["Name", "Company", "Phone", "Email", "Equipment", "Site location", "Duration", "Details", "Page"] as const
const MAX_FIELD_LENGTH = 1000

export async function POST(request: Request) {
  const apiKey = process.env.CALLMEBOT_API_KEY
  if (!apiKey) return NextResponse.json({ sent: false, reason: "not-configured" })

  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null
  if (!body || typeof body.Name !== "string" || typeof body.Phone !== "string" || !body.Name.trim() || !body.Phone.trim()) {
    return NextResponse.json({ sent: false, reason: "invalid" }, { status: 400 })
  }

  const lines = FIELDS.flatMap((field) => {
    const value = typeof body[field] === "string" ? (body[field] as string).trim().slice(0, MAX_FIELD_LENGTH) : ""
    return value && value !== "—" ? [`${field}: ${value}`] : []
  })
  const text = ["New website inquiry", "", ...lines].join("\n")

  const phone = process.env.WHATSAPP_NOTIFY_PHONE || siteConfig.phoneE164
  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apiKey)}`

  try {
    const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(10_000) })
    const reply = await res.text()
    // CallMeBot answers 200 with an HTML page either way; "queued" means accepted.
    const sent = res.ok && /queued/i.test(reply)
    if (!sent) console.error("CallMeBot rejected inquiry", res.status, reply.slice(0, 300))
    return NextResponse.json({ sent }, { status: sent ? 200 : 502 })
  } catch (error) {
    console.error("CallMeBot request failed", error)
    return NextResponse.json({ sent: false }, { status: 502 })
  }
}
