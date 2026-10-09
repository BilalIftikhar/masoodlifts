import { Geist, Geist_Mono, Noto_Kufi_Arabic } from "next/font/google"

export const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
export const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
// English pages only use this for the Arabic company name and short labels;
// the Arabic section sets body text in it, so it needs a regular and a bold.
export const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-kufi-arabic",
})

export const fontVariables = `${geistSans.variable} ${geistMono.variable} ${notoKufiArabic.variable}`
