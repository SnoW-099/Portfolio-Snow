"use client"

import { useEffect, useState } from "react"

export default function PortfolioMotion() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const root = document.documentElement
    root.classList.add("motion-ready")

    const updateTime = () => {
      setTime(new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Madrid",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date()))
    }

    const updateScroll = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty("--scroll-progress", `${distance > 0 ? window.scrollY / distance : 0}`)
      root.classList.toggle("page-scrolled", window.scrollY > 90)
    }

    let frame = 0
    const updatePointer = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`)
        root.style.setProperty("--pointer-y", `${event.clientY}px`)
        root.style.setProperty("--hero-shift-x", `${(event.clientX / window.innerWidth - 0.5) * 12}px`)
        root.style.setProperty("--hero-shift-y", `${(event.clientY / window.innerHeight - 0.5) * 8}px`)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const footerObserver = new IntersectionObserver(
      ([entry]) => root.classList.toggle("footer-in-view", entry.isIntersecting),
      { threshold: 0.08 },
    )

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            root.dataset.activeSection = entry.target.id
          }
        })
      },
      { rootMargin: "-35% 0px -55% 0px" },
    )

    const tiltCleanups = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]")).map((element) => {
      const move = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        element.style.setProperty("--card-pointer-x", `${x}px`)
        element.style.setProperty("--card-pointer-y", `${y}px`)
        element.style.setProperty("--card-rotate-x", `${(0.5 - y / rect.height) * 3}deg`)
        element.style.setProperty("--card-rotate-y", `${(x / rect.width - 0.5) * 3}deg`)
      }
      const leave = () => {
        element.style.setProperty("--card-rotate-x", "0deg")
        element.style.setProperty("--card-rotate-y", "0deg")
      }
      element.addEventListener("pointermove", move)
      element.addEventListener("pointerleave", leave)
      return () => {
        element.removeEventListener("pointermove", move)
        element.removeEventListener("pointerleave", leave)
      }
    })

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element))
    document.querySelectorAll(".contact-section, .next-project").forEach((element) => footerObserver.observe(element))
    document.querySelectorAll("section[id], footer[id]").forEach((element) => activeObserver.observe(element))
    updateTime()
    updateScroll()
    const clock = window.setInterval(updateTime, 30_000)
    window.addEventListener("scroll", updateScroll, { passive: true })
    window.addEventListener("pointermove", updatePointer, { passive: true })

    return () => {
      window.clearInterval(clock)
      window.removeEventListener("scroll", updateScroll)
      window.removeEventListener("pointermove", updatePointer)
      cancelAnimationFrame(frame)
      observer.disconnect()
      footerObserver.disconnect()
      activeObserver.disconnect()
      tiltCleanups.forEach((cleanup) => cleanup())
      root.classList.remove("motion-ready")
      root.classList.remove("footer-in-view")
      root.classList.remove("page-scrolled")
      root.removeAttribute("data-active-section")
    }
  }, [])

  return (
    <>
      <div className="page-progress" aria-hidden="true" />
      <span className="local-time" aria-label={`Local time in Catalunya ${time}`}>
        CAT {time || "--:--"}
      </span>
    </>
  )
}
