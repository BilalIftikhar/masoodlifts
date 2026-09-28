import { siteConfig } from "@/lib/site-config"

type BrandLogoProps = {
  /** "light" for light backgrounds (header), "dark" for dark ones (footer). */
  tone?: "light" | "dark"
  className?: string
}

/**
 * The AM monogram plus the registered English and Arabic company names, as on
 * the letterhead. Inline SVG so it stays crisp at any size and needs no request.
 * public/images/brand/logo-mark.svg and logo-512.png are the same mark.
 *
 * TODO (owner): if the company has an official logo file, replace the <svg>
 * below with it (and regenerate the PNGs) so the site matches the letterhead.
 */
export function BrandLogo({ tone = "light", className = "" }: BrandLogoProps) {
  const nameColor = tone === "light" ? "text-foreground" : "text-white"
  const subColor = tone === "light" ? "text-muted-foreground" : "text-white/65"
  // Header and footer both render the mark, so SVG ids are scoped per tone.
  const tileId = `am-tile-${tone}`
  const hazardId = `am-hazard-${tone}`

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" width={44} height={44} aria-hidden="true" className="shrink-0">
        <defs>
          <clipPath id={tileId}>
            <rect width="64" height="64" rx="10" />
          </clipPath>
          <pattern id={hazardId} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <rect width="4" height="8" fill="#f5b301" />
            <rect x="4" width="4" height="8" fill="#0f172a" />
          </pattern>
        </defs>
        <g clipPath={`url(#${tileId})`}>
          <rect width="64" height="64" fill="#1b2e4f" />
          <rect y="50" width="64" height="14" fill={`url(#${hazardId})`} />
          <rect y="47" width="64" height="3" fill="#c2410c" />
        </g>
        <text
          x="32"
          y="38"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="27"
          fontWeight="800"
          fill="#ffffff"
          letterSpacing="-1"
        >
          AM
        </text>
      </svg>
      <span className="leading-tight">
        <span className={`block text-[13px] font-extrabold tracking-wide sm:text-sm ${nameColor}`}>
          {siteConfig.legalName}
        </span>
        <span lang="ar" dir="rtl" className={`block font-arabic text-[11px] font-semibold ${subColor}`}>
          {siteConfig.legalNameAr}
        </span>
      </span>
    </span>
  )
}
