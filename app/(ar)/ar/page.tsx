import type { Metadata } from "next"
import { getArabicPage } from "@/lib/arabic"
import { ArabicRoute, arabicMetadata } from "./arabic-route"

const page = getArabicPage("/ar")!

export const metadata: Metadata = arabicMetadata(page)

export default function ArabicHome() {
  return <ArabicRoute page={page} />
}
