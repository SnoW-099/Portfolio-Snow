import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Angel | Portfolio",
  description: "Portfolio of Angel, a developer building web products, bots, and useful tools.",
  generator: "Next.js",
  keywords: ["Angel portfolio", "developer portfolio", "Next.js portfolio", "Python", "React", "TypeScript"],
  authors: [{ name: "Angel" }],
  creator: "Angel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portofolio-snow.netlify.app/",
    title: "Angel | Portfolio",
    description: "Projects, case studies, and contact details.",
    siteName: "Angel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel | Portfolio",
    description: "Projects, case studies, and contact details.",
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
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
