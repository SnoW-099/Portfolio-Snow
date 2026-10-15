import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <main className="not-found-page shell">
      <span className="eyebrow">404 / Page not found</span>
      <h1>A little off track.</h1>
      <p>This page isn&apos;t here. Let&apos;s get you back to the projects.</p>
      <Link href="/" className="hero-primary"><ArrowLeft /> Back home</Link>
    </main>
  )
}
