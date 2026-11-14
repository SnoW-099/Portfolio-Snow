"use client"

import { useEffect } from "react"

/**
 * Progressive enhancement only: without JavaScript every element is already visible.
 * Adds the scrolled / active-section state, the staggered reveal and the hero pointer light.
 */
export default function PortfolioMotion() {
  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const animations = new Set<Animation>()
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id], footer[id]"))
    const hero = document.querySelector<HTMLElement>(".hero")
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
      let order = 0
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        reveal.unobserve(entry.target)
        entry.target.setAttribute("data-revealed", "")
        if (reducedMotion.matches || !(entry.target instanceof HTMLElement) || !entry.target.animate) continue
        // Elements that arrive together come in one after another.
        const animation = entry.target.animate([
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 700, delay: order++ * 80, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" })
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
      }
    }, { threshold: 0.08 })

    // The hero dot grid lights up under the pointer. Percentages are relative to the grid layer, which is wider than the hero.
    const onPointer = (event: PointerEvent) => {
      if (!hero || event.pointerType !== "mouse") return
      const box = hero.getBoundingClientRect()
      const bleed = window.innerWidth * 0.2
      hero.style.setProperty("--mx", (((event.clientX - box.left + bleed) / (box.width + bleed * 2)) * 100).toFixed(1) + "%")
      hero.style.setProperty("--my", (((event.clientY - box.top + 88) / (box.height + 88)) * 100).toFixed(1) + "%")
    }

    const finishAnimations = () => animations.forEach((animation) => animation.finish())
    const onMotionChange = () => { if (reducedMotion.matches) finishAnimations() }
    document.querySelectorAll("[data-reveal]").forEach((element) => reveal.observe(element))
    document.addEventListener("focusin", finishAnimations)
    reducedMotion.addEventListener("change", onMotionChange)
    hero?.addEventListener("pointermove", onPointer, { passive: true })
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate, { passive: true })
    update()

    return () => {
      reveal.disconnect()
      animations.forEach((animation) => animation.cancel())
      window.cancelAnimationFrame(frame)
      document.removeEventListener("focusin", finishAnimations)
      reducedMotion.removeEventListener("change", onMotionChange)
      hero?.removeEventListener("pointermove", onPointer)
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      root.classList.remove("page-scrolled")
      root.removeAttribute("data-active-section")
    }
  }, [])

  return null
}
