import type React from "react"
import type { Metadata } from "next"
import { skillGroups } from "@/lib/profile"
import "./globals.css"

const profileTitle = "Angel | Junior Developer from Spain"
const profileDescription = "Junior developer from Spain, building with Python, HTML and CSS while learning JavaScript and TypeScript. Explore my projects and get in touch."

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
    siteName: "Angel Portfolio",
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
