import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { guidesFor } from "@/lib/blog/posts"
import type { EquipmentKey } from "@/lib/equipment"

type RelatedGuidesProps = {
  /** This page's path; guides that link here are listed first. */
  path: string
  /** The machines this page rents. Omit to consider every guide. */
  equipment?: EquipmentKey[]
  heading?: string
  className?: string
}

/**
 * Links from landing pages into the blog. Without it the guides are reachable
 * only from /blog and from each other. Titles only, no excerpts, so the block
 * adds little repeated text to the page.
 */
export function RelatedGuides({
  path,
  equipment,
  heading = "Guides for Planning Your Hire",
  className = "",
}: RelatedGuidesProps) {
  const guides = guidesFor({ path, equipment })
  if (guides.length === 0) return null

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <h2 className="mb-8 text-foreground">{heading}</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {guides.map((guide, idx) => (
            <Reveal key={guide.slug} delay={idx * 80} className="h-full">
              <Link
                href={`/blog/${guide.slug}`}
                className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                    <BookOpen size={14} aria-hidden="true" />
                    {guide.category}
                  </span>
                  <h3 className="text-base font-extrabold leading-snug text-foreground">{guide.title}</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                  Read the Guide
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
