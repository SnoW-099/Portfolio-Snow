import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { fontClass } from "@/lib/fonts"
import { en } from "@/lib/i18n/en"
import { es } from "@/lib/i18n/es"

// Outside /en and /es the language is unknown, so the page says it in both.
export default function NotFound() {
  return (
    <html lang="en" className={fontClass}>
      <body className="font-sans antialiased">
        <main className="not-found-page shell">
          <span className="eyebrow">{en.notFound.eyebrow}</span>
          <h1>{en.notFound.title}</h1>
          <p>{en.notFound.text}</p>
          <p lang="es">{es.notFound.title} {es.notFound.text}</p>
          <div className="hero-actions">
            <Link href="/en" className="hero-primary"><ArrowLeft aria-hidden="true" /> {en.notFound.back}</Link>
            <Link href="/es" className="hero-secondary" lang="es"><ArrowLeft aria-hidden="true" /> {es.notFound.back}</Link>
          </div>
        </main>
      </body>
    </html>
  )
}
