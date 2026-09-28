"use client"

import type React from "react"
import { useId, useState } from "react"
import { CheckCircle2, Phone } from "lucide-react"
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

type Status = "idle" | "sent"

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

  const whatsappHref = waLink(
    ["Hello Abdul Masood Trading, I'd like a quote for equipment rental.", ...summaryLines(formData)].join("\n"),
  )

  /**
   * Opens WhatsApp's official click-to-chat link with the details already
   * typed; the visitor presses send in WhatsApp. Websites can't send the
   * message for them. An email copy goes to the inbox in the background, so
   * the lead still arrives if they close WhatsApp without sending or don't
   * have it installed.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Honeypot: real visitors never see or fill this field.
    const honey = new FormData(e.currentTarget).get("_honey")
    if (honey) return

    // Must run synchronously inside the submit event, or browsers block the new window.
    const chat = window.open(whatsappHref, "_blank")
    if (chat) chat.opener = null

    void fetch(siteConfig.inquiryEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `Equipment rental inquiry: ${formData.equipment || "General"}${formData.location ? ` — ${formData.location}` : ""}`,
        _template: "table",
        _captcha: "false",
        ...(formData.email && { _replyto: formData.email }),
        Name: formData.name,
        Company: formData.company || "—",
        Phone: formData.phone,
        Email: formData.email || "—",
        Equipment: formData.equipment || "—",
        "Site location": formData.location || "—",
        Duration: formData.duration || "—",
        Details: formData.message || "—",
        Page: window.location.href,
      }),
      keepalive: true,
    }).catch(() => {})

    setStatus("sent")
  }

  if (status === "sent") {
    return (
      <div className={`flex flex-col items-center gap-4 text-center ${compact ? "py-6" : "py-10"}`} role="status">
        <CheckCircle2 size={compact ? 40 : 48} className="text-accent" />
        <p className={`font-extrabold text-foreground ${compact ? "text-xl" : "text-2xl"}`}>Almost done: press Send in WhatsApp</p>
        <p className="max-w-sm font-medium text-muted-foreground">
          WhatsApp has opened with your inquiry typed in. Press send to reach our team. A copy of your details is also
          being emailed to us.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#1fb855]"
        >
          <WhatsAppIcon size={18} />
          WhatsApp didn&apos;t open? Open it here
        </a>
        <a href={siteConfig.telHref} className="text-sm font-bold text-foreground hover:text-accent">
          Or call {siteConfig.phoneDisplay}
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
            ? "Fill in your requirement and it opens in WhatsApp, ready to send."
            : "Your inquiry opens in WhatsApp, ready to send. Fields marked * are required."}
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

      <div className="space-y-2">
        <button
          type="submit"
          className={`flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 font-bold text-white transition-all hover:bg-[#1fb855] hover:shadow-lg ${compact ? "py-3" : "py-3.5"}`}
        >
          <WhatsAppIcon size={18} />
          Send Inquiry on WhatsApp
        </button>
        <p className="text-center text-xs font-medium text-muted-foreground">
          No WhatsApp?{" "}
          <a href={siteConfig.telHref} className="inline-flex items-center gap-1 font-bold text-foreground hover:text-accent">
            <Phone size={12} /> Call {siteConfig.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-bold text-foreground hover:text-accent">
            {siteConfig.email}
          </a>
        </p>
      </div>
    </form>
  )
}
