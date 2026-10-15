"use client"

import { useEffect } from "react"

export default function PortfolioMotion() {
  useEffect(() => {
    const root = document.documentElement
    const updateScroll = () => root.classList.toggle("page-scrolled", window.scrollY > 24)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) root.dataset.activeSection = entry.target.id
      })
    }, { rootMargin: "-15% 0px -65% 0px" })

    document.querySelectorAll("section[id], footer[id]").forEach((section) => observer.observe(section))
    updateScroll()
    window.addEventListener("scroll", updateScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", updateScroll)
      root.classList.remove("page-scrolled")
      root.removeAttribute("data-active-section")
    }
  }, [])

  return null
}
