import { Quote, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { relevantTestimonials } from "@/lib/testimonials"
import type { EquipmentKey } from "@/lib/equipment"

type TestimonialsSectionProps = {
  /** Surfaces testimonials about this machine first. */
  equipment?: EquipmentKey
  /** Surfaces testimonials from this city first. Must match a location `cityName`. */
  city?: string
  heading?: string
  className?: string
}

export function TestimonialsSection({
  equipment,
  city,
  heading = "What Our Customers Say",
  className = "bg-card",
}: TestimonialsSectionProps) {
  const items = relevantTestimonials({ equipment, city })

  return (
    <section className={`w-full py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="mb-12 max-w-2xl space-y-3">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Customer Reviews</p>
          <h2 className="text-foreground">{heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <Reveal key={item.quote} delay={idx * 90} className="h-full">
              <figure className="flex h-full flex-col justify-between gap-6 rounded-lg border border-border border-t-4 border-t-accent bg-background p-7 transition-shadow hover:shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5" role="img" aria-label={`Rated ${item.rating} out of 5`}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < item.rating ? "fill-safety text-safety" : "text-border"}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <Quote size={28} className="text-primary/15" aria-hidden="true" />
                  </div>
                  <blockquote className="font-medium leading-relaxed text-foreground">&ldquo;{item.quote}&rdquo;</blockquote>
                </div>
                <figcaption className="border-t border-border pt-4">
                  <span className="block font-bold text-foreground">{item.author}</span>
                  <span className="block text-sm font-medium text-muted-foreground">
                    {item.company} · {item.city}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
