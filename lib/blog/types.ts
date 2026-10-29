import type { EquipmentKey } from "@/lib/equipment"
import type { Faq } from "@/lib/faqs"

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  /** Comparison table. Answer engines quote tabular facts far more than prose. */
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }

export type RelatedLink = { title: string; href: string }

export type BlogPost = {
  slug: string
  /** On-page headline (H1 and schema headline). */
  title: string
  /** Shorter <title> for search results, when `title` would be truncated. */
  seoTitle?: string
  description: string
  category: string
  /**
   * Machines the guide is about. Equipment, size, town and port pages that
   * rent these machines link back to the guide (see `guidesFor`).
   */
  equipment: EquipmentKey[]
  datePublished: string
  dateModified?: string
  /** Worked out from the content in lib/blog/posts.ts, never typed by hand. */
  readingTime: string
  heroImage: string
  heroImageAlt: string
  content: ContentBlock[]
  relatedLinks: RelatedLink[]
  /**
   * Short question-and-answer pairs shown under the article and emitted as
   * FAQPage schema. Each answer must stand on its own, because answer engines
   * quote them without the article around them.
   */
  faqs?: Faq[]
  /**
   * Places the guide is about, emitted as schema.org `about` so search and AI
   * engines tie the article to Sohar, Liwa, Saham, and so on.
   */
  places?: string[]
}

/** A post as written in the data files; `readingTime` is filled in from the content. */
export type BlogPostInput = Omit<BlogPost, "readingTime">
