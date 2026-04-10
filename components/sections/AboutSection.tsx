"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Split text into individual words wrapped in spans
    const text = textRef.current.innerText
    textRef.current.innerHTML = text
      .split(" ")
      .map((word) => `<span class="inline-block text-white/10 transition-none">${word}</span>`)
      .join(" ")

    const words = textRef.current.querySelectorAll("span")

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      }).to(words, {
        color: "rgba(255, 255, 255, 0.95)",
        stagger: 0.05,
        duration: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-3xl px-6 md:px-8">
        <p
          ref={textRef}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight"
        >
          I'm a developer who loves building clean interfaces, automating workflows, and learning new technologies. From Discord bots to full-stack web apps — I enjoy turning ideas into real products.
        </p>
      </div>
    </section>
  )
}
