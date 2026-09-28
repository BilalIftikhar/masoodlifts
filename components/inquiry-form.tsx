"use client"

import type React from "react"
import { useId, useState } from "react"
import { CheckCircle2, Loader2, Mail } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { siteConfig, waLink } from "@/lib/site-config"

type FormFields = {
  name: string
  phone: string
  email: string
  company: string
  equipment: string
  location: string
  duration: string
  message: string
}

const initialState: FormFields = {
  name: "",
  phone: "",
  email: "",
  company: "",
  equipment: "",
  location: "",
  duration: "",
  message: "",
}

const durations = ["Single job / few hours", "1–6 days", "1–3 weeks", "1 month", "2+ months"]

type Status = "idle" | "sending" | "sent" | "error"

const styles = {
  full: {
    input:
      "w-full rounded-md border-2 border-border bg-card px-4 py-3 font-medium text-foreground transition-colors focus:border-accent focus:outline-none",
    label: "mb-2 block text-sm font-bold uppercase tracking-wide text-foreground",
  },
  compact: {
    input:
      "w-full rounded-md border-2 border-border bg-background px-3 py-2.5 text-sm font-medium text-foreground transition-colors focus:border-accent focus:outline-none",
    label: "mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground",
  },
}

function summaryLines(data: FormFields) {
  return [
    `Name: ${data.name}`,
    data.company && `Company: ${data.company}`,
    `Phone: ${data.phone}`,
    data.email && `Email: ${data.email}`,
    data.equipment && `Equipment: ${data.equipment}`,
    data.location && `Site location: ${data.location}`,
    data.duration && `Duration: ${data.duration}`,
    data.message && `Details: ${data.message}`,
  ].filter(Boolean) as string[]
}

type InquiryFormProps = {
  equipmentOptions: string[]
  locationOptions: string[]
  /**
   * "full" is the /contact and footer-of-page form. "compact" is the short
   * version shown in page heroes: fewer fields, tighter spacing.
   */
  variant?: "full" | "compact"
  /** Pre-selects the machine or city a landing page is about. Must match an option. */
  defaultEquipment?: string
  defaultLocation?: string
}

/**
 * Quote request form. Submissions are emailed to the company inbox through
 * `siteConfig.inquiryEndpoint` (FormSubmit), so customers who don't use
 * WhatsApp can still reach us; WhatsApp is offered alongside as the one-tap
 * alternative. A page can render more than one form (hero and footer), so
 * field ids come from useId rather than fixed strings.
 */
export function InquiryForm({
  equipmentOptions,
  locationOptions,
  variant = "full",
  defaultEquipment = "",
  defaultLocation = "",
}: InquiryFormProps) {
  const [formData, setFormData] = useState<FormFields>({
    ...initialState,
    equipment: defaultEquipment,
    location: defaultLocation,
  })
  const [status, setStatus] = useState<Status>("idle")
  const uid = useId()
  const id = (field: keyof FormFields) => `${uid}-${field}`
  const compact = variant === "compact"
  const inputClass = styles[variant].input
  const labelClass = styles[variant].label

  const set = (field: keyof FormFields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [field]: e.target.value })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Honeypot: real visitors never see or fill this field.
    const honey = new FormData(e.currentTarget).get("_honey")
    if (honey) return

    setStatus("sending")
    const fields = {
      Name: formData.name,
      Company: formData.company || "—",
      Phone: formData.phone,
      Email: formData.email || "—",
      Equipment: formData.equipment || "—",
      "Site location": formData.location || "—",
      Duration: formData.duration || "—",
      Details: formData.message || "—",
      Page: window.location.href,
    }

    const sendEmail = async () => {
      const res = await fetch(siteConfig.inquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Equipment rental inquiry: ${formData.equipment || "General"}${formData.location ? ` — ${formData.location}` : ""}`,
          _template: "table",
          _captcha: "false",
          ...(formData.email && { _replyto: formData.email }),
          ...fields,
        }),
      })
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean }
      if (!res.ok || String(json.success) !== "true") throw new Error("Email not accepted")
    }

    // Forwards the same details to the company WhatsApp (app/api/inquiry-whatsapp).
    const sendWhatsApp = async () => {
      const res = await fetch("/api/inquiry-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })
      const json = (await res.json().catch(() => ({}))) as { sent?: boolean }
      if (!json.sent) throw new Error("WhatsApp not sent")
    }

    // Either channel reaching the team counts as delivered.
    const results = await Promise.allSettled([sendEmail(), sendWhatsApp()])
    setStatus(results.some((result) => result.status === "fulfilled") ? "sent" : "error")
  }

  const whatsappHref = waLink(
    ["Hello Abdul Masood Trading, I'd like a quote for equipment rental.", ...summaryLines(formData)].join("\n"),
  )

  if (status === "sent") {
    return (
      <div className={`flex flex-col items-center gap-4 text-center ${compact ? "py-6" : "py-10"}`} role="status">
        <CheckCircle2 size={compact ? 40 : 48} className="text-accent" />
        <p className={`font-extrabold text-foreground ${compact ? "text-xl" : "text-2xl"}`}>Inquiry sent — thank you</p>
        <p className="max-w-sm font-medium text-muted-foreground">
          Our team will contact you on {formData.phone}. For an urgent job, call {siteConfig.phoneDisplay} now.
        </p>
        <a
          href={siteConfig.telHref}
          className="rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground hover:bg-accent/90"
        >
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    )
  }

  // The hero form sits directly under the page's h1, so it takes the next level down.
  const Heading = compact ? "h2" : "h3"
  const gap = compact ? "gap-3" : "gap-5"

  const equipmentSelect = (
    <select id={id("equipment")} required value={formData.equipment} onChange={set("equipment")} className={inputClass}>
      <option value="">Select</option>
      {equipmentOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
      <option value="Multiple / not sure">Multiple / not sure</option>
    </select>
  )

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-5"}>
      <div>
        <Heading className={`font-extrabold text-foreground ${compact ? "text-xl md:text-2xl" : "text-2xl"}`}>
          {compact ? "Get a Free Quote" : "Request a Quote"}
        </Heading>
        <p className="mt-1 text-sm font-medium text-muted-foreground">
          {compact
            ? "Prefer email to WhatsApp? Send your requirement and we'll call or email you back."
            : `Sent directly to ${siteConfig.email}. Fields marked * are required.`}
        </p>
      </div>

      <div className={`grid ${gap} sm:grid-cols-2`}>
        <div>
          <label htmlFor={id("name")} className={labelClass}>
            Full Name *
          </label>
          <input id={id("name")} type="text" required autoComplete="name" value={formData.name} onChange={set("name")} className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor={id("phone")} className={labelClass}>
            Phone *
          </label>
          <input
            id={id("phone")}
            type="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={set("phone")}
            className={inputClass}
            placeholder="+968 9XXX XXXX"
          />
        </div>
      </div>

      <div className={`grid ${gap} sm:grid-cols-2`}>
        <div>
          <label htmlFor={id("email")} className={labelClass}>
            Email
          </label>
          <input id={id("email")} type="email" autoComplete="email" value={formData.email} onChange={set("email")} className={inputClass} placeholder="you@company.com" />
        </div>
        {compact ? (
          <div>
            <label htmlFor={id("equipment")} className={labelClass}>
              Equipment *
            </label>
            {equipmentSelect}
          </div>
        ) : (
          <div>
            <label htmlFor={id("company")} className={labelClass}>
              Company
            </label>
            <input id={id("company")} type="text" autoComplete="organization" value={formData.company} onChange={set("company")} className={inputClass} placeholder="Company name" />
          </div>
        )}
      </div>

      <div className={`grid ${gap} ${compact ? "sm:grid-cols-2" : "md:grid-cols-3"}`}>
        {!compact && (
          <div>
            <label htmlFor={id("equipment")} className={labelClass}>
              Equipment *
            </label>
            {equipmentSelect}
          </div>
        )}
        <div>
          <label htmlFor={id("location")} className={labelClass}>
            Site Location
          </label>
          <select id={id("location")} value={formData.location} onChange={set("location")} className={inputClass}>
            <option value="">Select</option>
            {locationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value="Other (Oman)">Other (Oman)</option>
          </select>
        </div>
        <div>
          <label htmlFor={id("duration")} className={labelClass}>
            Duration
          </label>
          <select id={id("duration")} value={formData.duration} onChange={set("duration")} className={inputClass}>
            <option value="">Select</option>
            {durations.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={id("message")} className={labelClass}>
          Job Details
        </label>
        <textarea
          id={id("message")}
          value={formData.message}
          onChange={set("message")}
          className={`${inputClass} ${compact ? "h-20" : "h-28"} resize-none`}
          placeholder="Load weight, dig depth, material volume, start date…"
        />
      </div>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === "error" && (
        <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm font-medium text-foreground">
          We couldn&apos;t send the form. Please call {siteConfig.phoneDisplay}, send it on WhatsApp, or{" "}
          <a
            className="font-bold text-accent underline"
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Equipment rental inquiry")}&body=${encodeURIComponent(summaryLines(formData).join("\n"))}`}
          >
            email us directly
          </a>
          .
        </p>
      )}

      {compact ? (
        <div className="space-y-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-bold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg disabled:opacity-70"
          >
            {status === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Mail size={18} />}
            {status === "sending" ? "Sending…" : "Send Inquiry"}
          </button>
          <p className="text-center text-xs font-medium text-muted-foreground">
            Or{" "}
            <a href={siteConfig.telHref} className="font-bold text-foreground hover:text-accent">
              call {siteConfig.phoneDisplay}
            </a>{" "}
            ·{" "}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-accent">
              WhatsApp
            </a>
          </p>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3.5 font-bold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg disabled:opacity-70"
          >
            {status === "sending" ? <Loader2 size={18} className="animate-spin" /> : <Mail size={18} />}
            {status === "sending" ? "Sending…" : "Send Inquiry"}
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3.5 font-bold text-white transition-all hover:bg-[#1fb855]"
          >
            <WhatsAppIcon size={18} />
            Send on WhatsApp
          </a>
        </div>
      )}
    </form>
  )
}
