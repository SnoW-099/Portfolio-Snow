"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const HIGHLIGHT_WORDS = new Set(["developer", "discord", "dashboards,", "web", "tools", "real", "projects,", "learning", "shipping"])

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const raw = textRef.current.innerText
    textRef.current.innerHTML = raw
      .split(" ")
      .map((word) => {
        const isHighlight = HIGHLIGHT_WORDS.has(word.toLowerCase())
        const colorClass = isHighlight ? "text-[#BFDBFE]" : "text-white/90"
        return `<span class="inline-block overflow-hidden align-bottom leading-tight pb-1 -mb-1"><span class="inline-block ${colorClass} opacity-0 translate-y-full blur-sm will-change-[opacity,transform,filter]">${word}</span></span>`
      })
      .join(" ")

    const words = textRef.current.querySelectorAll<HTMLSpanElement>("span > span")

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.15,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        lineRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.25, ease: "power2.out" },
      )

      tl.to(words, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      }, "<")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-blue-200/4 blur-[180px]" />
      </div>

      <div className="relative z-10 flex max-w-3xl items-start gap-6 px-8 md:gap-10 md:px-12">
        <div
          ref={lineRef}
          className="mt-3 hidden h-28 w-px flex-shrink-0 origin-top bg-gradient-to-b from-blue-200/60 to-transparent md:block"
        />

        <p
          ref={textRef}
          className="text-2xl font-semibold leading-[1.35] tracking-tight md:text-4xl lg:text-[2.6rem]"
        >
          I&apos;m a developer building Discord bots, dashboards, and web tools. I care about real projects, learning fast, and shipping cleaner versions every time.
        </p>
      </div>
    </section>
  )
}
