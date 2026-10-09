import { MapPin, ExternalLink } from "lucide-react"
import { siteConfig, mapEmbedSrc, mapLink } from "@/lib/site-config"

/**
 * Google Map of the Sohar yard. Uses the keyless embed URL, so there is no API
 * key to manage; the iframe is lazy-loaded to keep it off the critical path.
 */
export function YardMap({ heading = "Our Yard in Sohar" }: { heading?: string }) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <h2 className="text-foreground">{heading}</h2>
          <p className="flex items-start gap-2 font-semibold text-muted-foreground">
            <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
            {siteConfig.yardLine}
          </p>
        </div>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
        >
          Open in Google Maps
          <ExternalLink size={14} />
        </a>
      </div>
      <div className="overflow-hidden rounded-lg border border-border shadow-sm">
        <iframe
          src={mapEmbedSrc}
          title={`Map of ${siteConfig.legalName}, ${siteConfig.yardLine}`}
          className="h-80 w-full md:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
