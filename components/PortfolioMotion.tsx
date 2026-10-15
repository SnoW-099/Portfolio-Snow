"use client"

import { useEffect } from "react"

export default function PortfolioMotion() {
  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const animations = new Set<Animation>()
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
    const reveal = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        reveal.unobserve(entry.target)
        if (reducedMotion.matches || !(entry.target instanceof HTMLElement) || !entry.target.animate) continue
        const animation = entry.target.animate([
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 700, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" })
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
      }
    }, { threshold: 0.08 })

    const finishAnimations = () => animations.forEach((animation) => animation.finish())
    const onMotionChange = () => { if (reducedMotion.matches) finishAnimations() }
    document.querySelectorAll("[data-reveal]").forEach((element) => reveal.observe(element))
    document.addEventListener("focusin", finishAnimations)
    reducedMotion.addEventListener("change", onMotionChange)
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate, { passive: true })
    update()

    return () => {
      reveal.disconnect()
      animations.forEach((animation) => animation.cancel())
      window.cancelAnimationFrame(frame)
      document.removeEventListener("focusin", finishAnimations)
      reducedMotion.removeEventListener("change", onMotionChange)
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      root.classList.remove("page-scrolled")
      root.removeAttribute("data-active-section")
    }
  }, [])

  return null
}
