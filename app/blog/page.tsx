import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PostCard } from "@/components/blog/post-card"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { getAllPosts } from "@/lib/blog/posts"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = pageMetadata({
  title: "Equipment Rental Guides for Oman",
  description:
    "Practical guides on choosing cranes, excavators, JCBs, wheel loaders, boom loaders and forklifts for construction and civil works in Oman.",
  path: "/blog",
})

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ])}
      />
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Guides &amp; Insights</p>
            <h1 className="text-foreground">Equipment Rental Guides</h1>
            <p className="text-lg font-medium text-muted-foreground">
              Practical guidance on choosing the right machine, preparing your site, and planning equipment hire for
              construction and civil works projects across Oman.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 100} className="h-full">
                <PostCard post={post} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
