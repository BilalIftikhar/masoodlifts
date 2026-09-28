import type { ReactNode } from "react"
import Image from "next/image"
import { HeroQuoteForm } from "@/components/contact-form"

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  /** Extra content under the intro (Arabic name, buttons, meta). */
  children?: ReactNode
  /** Faint background photo behind the blueprint grid. */
  backgroundImage?: string
  formEquipment?: string
  formLocation?: string
}

/**
 * Standard page hero: headline on the left, the short quote form on the right
 * (below the headline on mobile). Used by the hub pages; the landing templates
 * use the same layout with their own left-hand content.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  backgroundImage,
  formEquipment,
  formLocation,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt="" fill priority className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
      )}
      <div className="bg-blueprint absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
        <div className="animate-slide-up space-y-5">
          <span className="inline-flex rounded-md bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">
            {eyebrow}
          </span>
          <h1 className="text-white">{title}</h1>
          {intro && <p className="max-w-xl text-lg font-medium leading-relaxed text-white/85">{intro}</p>}
          {children}
        </div>
        <HeroQuoteForm equipment={formEquipment} location={formLocation} />
      </div>
    </section>
  )
}
