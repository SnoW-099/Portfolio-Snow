import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { notFound } from "next/navigation"
import { fontClass } from "@/lib/fonts"
import { alternates, getDictionary, isLang, langs, siteUrl } from "@/lib/i18n"
import { technologyNames } from "@/lib/profile"

export const dynamicParams = false

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = getDictionary(lang).meta
  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    alternates: alternates(lang),
    verification: { google: "gXyGcc1kmsFovRzcNvju1MnjcbD7smCTI7dW49GcFHA" },
    generator: "Next.js",
    keywords: ["Snow Dev", "independent developer", "web development", "automation", "developer Spain", "desarrollador web España", "páginas web para negocios", ...technologyNames],
    authors: [{ name: "Angel" }],
    creator: "Angel",
    openGraph: { type: "website", locale: t.ogLocale, url: "/" + lang, title: t.title, description: t.description, siteName: "Snow Dev", images: ["/opengraph-image.png"] },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, creator: "@Ryze517182", images: ["/twitter-image.png"] },
  }
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

  return (
    <html lang={lang} suppressHydrationWarning className={fontClass}>
      <body className="font-sans antialiased">
        {children}
        {/* Cookieless analytics. Nothing is loaded until the variable exists in the Netlify environment. */}
        {umamiId && <Script defer src="https://cloud.umami.is/script.js" data-website-id={umamiId} />}
      </body>
    </html>
  )
}
