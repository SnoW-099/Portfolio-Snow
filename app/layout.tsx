import type React from "react"
import type { Metadata } from "next"
import { siteUrl } from "@/lib/i18n"
import "./globals.css"

export const metadata: Metadata = { metadataBase: new URL(siteUrl) }

// The real layout (with <html lang>) lives in app/[lang]/layout.tsx. This one only exists so that not-found.tsx has a root.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
