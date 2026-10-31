import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { skillGroups } from "@/lib/profile"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

const profileTitle = "Snow Dev — Independent Digital Development"
const profileDescription = "Snow Dev: websites, applications, automations and creative digital products, built independently by Snow."

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
    siteName: "Snow Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: profileTitle,
    description: profileDescription,
    creator: "@Snow_099",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

