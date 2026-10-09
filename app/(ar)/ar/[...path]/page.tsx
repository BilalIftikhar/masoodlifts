import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { arabicPages, getArabicPage } from "@/lib/arabic"
import { ArabicRoute, arabicMetadata } from "../arabic-route"

type PageProps = { params: Promise<{ path: string[] }> }

export function generateStaticParams() {
  return arabicPages
    .filter((page) => page.path !== "/ar")
    .map((page) => ({ path: page.path.replace(/^\/ar\//, "").split("/") }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path } = await params
  const page = getArabicPage(`/ar/${path.join("/")}`)
  return page ? arabicMetadata(page) : {}
}

export default async function ArabicSubPage({ params }: PageProps) {
  const { path } = await params
  const page = getArabicPage(`/ar/${path.join("/")}`)
  if (!page) notFound()
  return <ArabicRoute page={page} />
}
