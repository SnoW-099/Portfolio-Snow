"use client"

import Link from "next/link"
import SnowDevMark from "@/components/SnowDevMark"
import LangSwitch from "@/components/LangSwitch"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { Dictionary, Lang } from "@/lib/i18n"

export default function SiteHeader({ lang, t }: { lang: Lang; t: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false)
  const nav = useRef<HTMLElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        button.current?.focus()
      }
    }
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onPointer)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onPointer)
    }
  }, [open])

  return (
    <nav ref={nav} className="nav-wrap" aria-label={t.label}>
      <Link href="#top" className="brand" aria-label={t.home} onClick={() => setOpen(false)}>
        <span className="brand-mark"><SnowDevMark /></span>
        Snow Dev<span className="brand-dot">.</span>
      </Link>
      <div id="main-navigation" className="nav-links" data-open={open}>
        {Object.entries(t.links).map(([key, label]) => (
          <Link key={key} data-section={key} href={"#" + key} onClick={() => setOpen(false)}>
            {label}<ArrowUpRight className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
        ))}
      </div>
      <LangSwitch lang={lang} label={t.switchTo} />
      <Link className="nav-contact" href="#contact" onClick={() => setOpen(false)}>{t.cta} <ArrowUpRight aria-hidden="true" /></Link>
      <button ref={button} className="nav-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? t.close : t.open} onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </nav>
  )
}
