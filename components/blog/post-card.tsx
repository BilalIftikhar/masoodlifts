import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog/types"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })
}

export function PostCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-52 w-full bg-muted">
        <Image
          src={post.heroImage}
          alt={post.heroImageAlt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <span className="absolute left-4 top-4 rounded-md bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div className="space-y-2.5">
          <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {formatDate(post.datePublished)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readingTime}
            </span>
          </div>
          <h3 className="text-lg font-extrabold leading-snug text-foreground">{post.title}</h3>
          <p className="text-sm font-medium leading-relaxed text-muted-foreground">{post.description}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent">
          Read Article
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
