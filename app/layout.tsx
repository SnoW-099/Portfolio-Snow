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
  description: "Angel's desktop apps, web interfaces, and developer tools: StarOptimizer, Snowtify, Nivra, and Python projects.",
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
