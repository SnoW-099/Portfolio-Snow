"use client"

import { useEffect } from "react"

export default function PortfolioMotion() {
  useEffect(() => {
    const root = document.documentElement
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id], footer[id]"))
    let frame = 0

    const update = () => {
      frame = 0
      root.classList.toggle("page-scrolled", window.scrollY > 24)
      let active = "top"
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) active = section.id
      }
      root.dataset.activeSection = active
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate, { passive: true })
    update()

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      root.classList.remove("page-scrolled")
      root.removeAttribute("data-active-section")
    }
  }, [])

  return null
}
