import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ContentRenderer } from "@/components/blog/content-renderer"
import { PostCard } from "@/components/blog/post-card"
import { JsonLd } from "@/components/json-ld"
import { Reveal } from "@/components/reveal"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema"
import { pageMetadata } from "@/lib/seo"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog/posts"
import { siteConfig, waLink } from "@/lib/site-config"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return pageMetadata({
      title: "Article Not Found",
      description: "This blog article could not be found.",
      path: "/blog",
    })
  }

  return pageMetadata({
    title: post.seoTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.heroImage,
  })
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug)
  const whatsappHref = waLink(
    `Hello Abdul Masood Trading, I read "${post.title}" and would like equipment rental information.`,
  )

  return (
    <main className="w-full overflow-x-hidden">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Blog", url: `${siteConfig.url}/blog` },
            { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
          ]),
          blogPostingSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            image: post.heroImage,
            authorName: siteConfig.legalName,
          }),
        ]}
      />
      <Header />

      <article className="min-h-screen bg-background pb-20 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl px-4">
          <Link href="/blog" className="text-sm font-bold text-accent hover:underline">
            ← Back to Blog
          </Link>

          <header className="mt-6 space-y-4">
            <span className="inline-block rounded-md bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
              {post.category}
            </span>
            <h1 className="text-foreground">{post.title}</h1>
            <p className="text-lg font-medium text-muted-foreground">{post.description}</p>
            <div className="flex items-center gap-5 text-sm font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} />
                {formatDate(post.datePublished)}
              </span>
              {post.dateModified && post.dateModified !== post.datePublished && (
                <span>Updated {formatDate(post.dateModified)}</span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock size={15} />
                {post.readingTime}
              </span>
            </div>
          </header>

          <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl md:h-96">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>

          <div className="mt-10">
            <ContentRenderer blocks={post.content} />
          </div>

          {post.relatedLinks.length > 0 && (
            <div className="mt-14 rounded-xl border border-border bg-secondary/40 p-7">
              <h2 className="mb-4 text-lg font-extrabold text-foreground">Related Pages</h2>
              <ul className="space-y-3">
                {post.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
                    >
                      {link.title}
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 rounded-xl bg-primary p-8 text-center text-white md:p-10">
            <h2 className="text-white">Need Equipment for Your Next Project?</h2>
            <p className="mx-auto mt-2 max-w-xl text-white/85">
              Talk to our team for a quote on cranes, tippers, boom loaders, forklifts, excavators, JCBs, or wheel
              loaders anywhere in Oman.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <WhatsAppIcon size={18} />
              Request a Quote on WhatsApp
            </a>
            <a
              href={siteConfig.telHref}
              className="ml-0 mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-105 sm:ml-3"
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mx-auto mt-16 max-w-7xl px-4">
            <Reveal>
              <h2 className="mb-8 text-foreground">More Guides</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {relatedPosts.map((related, idx) => (
                <Reveal key={related.slug} delay={idx * 100} className="h-full">
                  <PostCard post={related} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  )
}
