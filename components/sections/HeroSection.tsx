"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })

      // Name shrinks and moves up
      tl.fromTo(
        nameRef.current,
        { fontSize: "18vw", opacity: 1, y: 0 },
        { fontSize: "3.5rem", y: -50, opacity: 1, duration: 1 }
      )

      // Badge fades in
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: -50, duration: 0.5 },
        "-=0.5"
      )

      // Tagline fades in
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: -30, duration: 0.5 },
        "-=0.3"
      )

      // Bio fades in
      tl.fromTo(
        bioRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: -20, duration: 0.5 },
        "-=0.2"
      )

      // CTA buttons slide up
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: -10, duration: 0.5 },
        "-=0.2"
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Badge */}
        <div ref={badgeRef} className="opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Available for work
        </div>

        {/* Giant name */}
        <h1
          ref={nameRef}
          className="font-bold tracking-tighter leading-none text-foreground"
          style={{ fontSize: "18vw" }}
        >
          Angel.
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="opacity-0 text-xl md:text-2xl lg:text-3xl text-muted-foreground/50 font-medium mt-6"
        >
          Crafting digital experiences.
        </p>

        {/* Bio */}
        <p
          ref={bioRef}
          className="opacity-0 text-sm md:text-base text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed"
        >
          A person eager to learn new things. I have knowledge in programming, UI, web design, and more.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="opacity-0 flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform shadow-lg shadow-foreground/10"
          >
            View Projects
          </a>
          <a
            href="mailto:ryze0950@gmail.com"
            className="px-8 py-3 rounded-full border border-white/15 font-medium hover:bg-white/5 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
