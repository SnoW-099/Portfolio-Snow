"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Words that get the amber highlight when illuminated
const AMBER_WORDS = new Set(["developer", "clean", "interfaces,", "automating", "ideas", "real", "products."])

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef    = useRef<HTMLParagraphElement>(null)
  const lineRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const raw = textRef.current.innerText
    textRef.current.innerHTML = raw
      .split(" ")
      .map((word) => {
        const isAmber = AMBER_WORDS.has(word.toLowerCase())
        return `<span class="inline-block leading-snug" style="color: rgba(255,255,255,0.08)" data-amber="${isAmber}">${word}</span>`
      })
      .join(" ")

    const words = textRef.current.querySelectorAll<HTMLSpanElement>("span")

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      })

      // Line slides in
      tl.fromTo(
        lineRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.25, ease: "power2.out" },
      )

      // Words illuminate — amber words glow their special color
      words.forEach((word) => {
        const isAmber = word.dataset.amber === "true"
        tl.to(word, {
          color: isAmber ? "#BFDBFE" : "rgba(255,255,255,0.92)",
          duration: 0.02,
          ease: "none",
        }, "<0.005")
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-200/4 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-3xl px-8 md:px-12 flex gap-6 md:gap-10 items-start">
        {/* Decorative side line */}
        <div
          ref={lineRef}
          className="hidden md:block flex-shrink-0 w-px h-28 bg-gradient-to-b from-blue-200/60 to-transparent mt-3 origin-top"
        />

        <p
          ref={textRef}
          className="text-2xl md:text-4xl lg:text-[2.6rem] font-semibold leading-[1.35] tracking-tight"
        >
          I'm a developer who loves building clean interfaces, automating workflows, and learning new technologies. From Discord bots to full-stack web apps — I enjoy turning ideas into real products.
        </p>
      </div>
    </section>
  )
}
