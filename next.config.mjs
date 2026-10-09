// URLs from the site's earlier UAE version, still in search indexes and
// backlinks. Each 301s to the closest page on the current Oman site so
// visitors and link equity aren't lost to a 404.
const uaeCities = "abu-dhabi|abu-dhabi-musaffah|dubai|sharjah|ajman|ras-al-khaimah|fujairah|umm-al-quwain|al-ain"
const oldBlogSlugs = [
  "choosing-forklift-capacity-warehouse-musaffah",
  "mobile-crane-safety-guidelines-regulations-abu-dhabi",
  "renting-vs-buying-heavy-equipment-construction-dubai-icad",
  "forklift-rental-rates-abu-dhabi-what-affects-price",
  "scissor-lift-vs-boom-lift-abu-dhabi",
  "summer-heat-heavy-equipment-abu-dhabi-midday-break",
  "telehandler-vs-forklift-vs-crane-abu-dhabi",
  "daily-weekly-monthly-equipment-rental-abu-dhabi",
  "villa-construction-equipment-al-shamkha-riyadh-city",
].join("|")

const legacyRedirects = [
  // The forklift page covers 3 to 18 ton, so it moved off the old 3-ton URL.
  { source: "/equipment/3-ton-forklift", destination: "/equipment/forklift" },
  { source: "/equipment/mobile-crane", destination: "/equipment/crane" },
  { source: "/equipment/telehandler", destination: "/equipment/boom-loader" },
  { source: "/equipment/man-lift", destination: "/equipment" },
  { source: "/services/forklift-rental-abu-dhabi", destination: "/equipment/forklift" },
  { source: "/services/mobile-crane-rental-uae", destination: "/equipment/crane" },
  { source: "/services/telehandler-rental", destination: "/equipment/boom-loader" },
  { source: "/services/man-lift-access", destination: "/equipment" },
  { source: `/services/forklift-rental-:city(${uaeCities})`, destination: "/equipment/forklift" },
  { source: `/services/mobile-crane-rental-:city(${uaeCities})`, destination: "/equipment/crane" },
  { source: `/services/telehandler-rental-:city(${uaeCities})`, destination: "/equipment/boom-loader" },
  { source: `/services/man-lift-rental-:city(${uaeCities})`, destination: "/equipment" },
  { source: `/locations/:city(${uaeCities})`, destination: "/locations" },
  { source: "/locations/abu-dhabi/:area*", destination: "/locations" },
  { source: `/blog/:slug(${oldBlogSlugs})`, destination: "/blog" },
// statusCode 301 rather than `permanent` (308): both pass link equity, but
// some SEO audit tools only recognise 301 as a permanent move.
].map((redirect) => ({ ...redirect, statusCode: 301 }))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyRedirects
  },
}

export default nextConfig
