/**
 * Tells Bing, Yandex, Seznam and Naver (all IndexNow members) that pages have
 * changed, so they recrawl in hours instead of weeks. Bing's index also feeds
 * ChatGPT search and Copilot.
 *
 * Run AFTER a production deploy, never before — engines fetch the key file
 * from the live site to verify ownership:
 *
 *   pnpm indexnow                       # every URL in the live sitemap
 *   pnpm indexnow /about /blog/some-post  # only these paths
 *
 * Google does not use IndexNow; use Search Console for Google.
 */

const HOST = "masoodlifts.com" // keep in sync with siteConfig.domain
const KEY = "2f5cee67c7d8744f8be324f575424edc" // served from public/2f5cee67c7d8744f8be324f575424edc.txt
const SITE = `https://${HOST}`

async function urlsFromSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`)
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
}

const paths = process.argv.slice(2)
const urlList = paths.length > 0 ? paths.map((path) => `${SITE}${path.startsWith("/") ? path : `/${path}`}`) : await urlsFromSitemap()

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
})

// 200 = accepted, 202 = accepted pending key validation. Anything else is a failure.
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URL(s) submitted`)
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text())
  process.exit(1)
}
