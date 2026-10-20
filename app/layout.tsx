import type React from "react"
import type { Metadata } from "next"
import { skillGroups } from "@/lib/profile"
import "./globals.css"
import "@/styles/spotlight.css"
import "@/styles/rez.css"

const profileTitle = "Angel / Snow | Junior Developer"
const profileDescription = "Angel, online as Snow. Junior developer from Spain building Python tools and thoughtful web interfaces, with transparent AI-assisted projects."

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-snow.netlify.app/"),
  title: profileTitle,
  description: profileDescription,
  generator: "Next.js",
  keywords: ["Angel portfolio", "junior developer", "developer Spain", ...skillGroups.flatMap((group) => group.items)],
  authors: [{ name: "Angel" }],
  creator: "Angel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-snow.netlify.app/",
    title: profileTitle,
    description: profileDescription,
    siteName: "Snow — Angel",
  },
  twitter: {
    card: "summary_large_image",
    title: profileTitle,
    description: profileDescription,
    creator: "@Snow_099",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="light"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

