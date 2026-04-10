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
          end: "+=250%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
        },
      })

      // Name shrinks and moves up — slow and cinematic
      tl.to(nameRef.current, { fontSize: "3.5rem", y: -100, duration: 1.5, ease: "power2.inOut" })

      // Badge moves up with name
      tl.to(badgeRef.current, { y: -100, duration: 1.5, ease: "power2.inOut" }, "<")

      // Pause moment
      tl.to({}, { duration: 0.3 })

      // Tagline fades in
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: -70, duration: 0.8, ease: "power2.out" },
      )

      // Bio fades in
      tl.fromTo(
        bioRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: -60, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )

      // CTA buttons slide up
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: -50, duration: 0.8, ease: "power2.out" },
        "-=0.4"
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
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Available for work
        </div>

        {/* Giant name */}
        <h1
          ref={nameRef}
          className="font-bold tracking-tighter leading-none text-white"
          style={{ fontSize: "18vw" }}
        >
          Angel.
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="opacity-0 text-xl md:text-2xl lg:text-3xl text-white/40 font-medium mt-6"
        >
          Crafting digital experiences.
        </p>

        {/* Bio */}
        <p
          ref={bioRef}
          className="opacity-0 text-sm md:text-base text-white/50 mt-4 max-w-md mx-auto leading-relaxed"
        >
          A person eager to learn new things. I have knowledge in programming, UI, web design, and more.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="opacity-0 flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/projects"
            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform shadow-lg shadow-white/10"
          >
            View Projects
          </a>
          <a
            href="mailto:ryze0950@gmail.com"
            className="px-8 py-3 rounded-full border border-white/15 font-medium text-white hover:bg-white/5 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
