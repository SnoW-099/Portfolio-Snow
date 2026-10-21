"use client"

import Link from "next/link"
import ThemeSelect from "@/components/ThemeSelect"
import SnowLogo from "@/components/SnowLogo"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const links = [
  { href: "#work", label: "Work", key: "work" },
  { href: "#about", label: "About", key: "about" },
  { href: "#skills", label: "Stack", key: "skills" },
  { href: "#contact", label: "Contact", key: "contact" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const nav = useRef<HTMLElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  const navigateToSection = (href: string) => {
    setOpen(false)
    const target = document.querySelector<HTMLElement>(href)
    if (target) {
      target.tabIndex = -1
      target.focus({ preventScroll: true })
    }
  }

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 48em)")
    const onResize = () => { if (!mobile.matches) setOpen(false) }
    mobile.addEventListener("change", onResize)
    return () => mobile.removeEventListener("change", onResize)
  }, [])

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
    <nav ref={nav} className="nav-wrap" aria-label="Main navigation" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
    }}>
      <Link href="#top" className="brand" aria-label="Snow — Angel, home" onClick={() => navigateToSection("#top")}>
        <span className="brand-mark"><SnowLogo size={40} priority /></span>
        Snow<span className="brand-dot">.</span>
      </Link>
      <div id="main-navigation" className="nav-links" data-open={open}>
        {links.map((link) => (
          <Link key={link.key} className={"nav-link-" + link.key} href={link.href} onClick={() => navigateToSection(link.href)}>
            {link.label}<ArrowUpRight className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
        ))}
      </div>
      <div className="nav-actions"><ThemeSelect /><a className="nav-contact" href="mailto:ryze0950@gmail.com">Say hello <ArrowUpRight aria-hidden="true" /></a></div>
      <button ref={button} className="nav-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </nav>
  )
}

