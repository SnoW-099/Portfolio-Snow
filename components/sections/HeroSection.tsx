"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const marqueeItems = [
  "React", "·", "TypeScript", "·", "Python", "·", "Next.js", "·",
  "Node.js", "·", "Django", "·", "Tailwind", "·", "Git", "·",
]

export default function HeroSection() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const nameRef     = useRef<HTMLHeadingElement>(null)
  const badgeRef    = useRef<HTMLDivElement>(null)
  const taglineRef  = useRef<HTMLParagraphElement>(null)
  const bioRef      = useRef<HTMLParagraphElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Ensure hero starts correctly (fix the lateral-glitch bug) ──────────
      gsap.set([nameRef.current, badgeRef.current], { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" })
      gsap.set([taglineRef.current, bioRef.current, scrollRef.current], { opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
          // ← KEY: immediately render the correct state for any scroll position
          immediateRender: false,
        },
      })

      // Name: fade + scale up
      tl.to(nameRef.current, {
        opacity: 0,
        scale: 1.08,
        filter: "blur(8px)",
        duration: 0.7,
        ease: "power2.inOut",
      })
      tl.to(badgeRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: "power2.inOut",
      }, "<")

      tl.to({}, { duration: 0.1 })

      // Tagline slides in from below
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 30, filter: "blur(4px)" },
        { opacity: 1, y: 0,  filter: "blur(0px)", duration: 0.5, ease: "power2.out" },
      )
      // Bio
      tl.fromTo(
        bioRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0,  duration: 0.5, ease: "power2.out" },
        "-=0.3",
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const marquee = [...marqueeItems, ...marqueeItems]

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-200/5 blur-[200px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-300/5 blur-[160px]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-4 w-full">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200/10 border border-blue-200/25 text-xs font-medium text-blue-200/90 mb-8 tracking-wide"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-200" />
          </span>
          Available for work
        </div>

        {/* Giant name — amber-to-white gradient text */}
        <h1
          ref={nameRef}
          className="font-bold tracking-tighter leading-none text-gradient-amber select-none"
          style={{ fontSize: "clamp(4rem, 17vw, 18rem)" }}
        >
          Angel.
        </h1>

        {/* Tagline — revealed on scroll */}
        <p
          ref={taglineRef}
          className="text-xl md:text-3xl text-white/50 font-light mt-8 tracking-tight opacity-0"
        >
          Crafting digital experiences.
        </p>

        {/* Bio */}
        <p
          ref={bioRef}
          className="text-sm md:text-base text-white/35 mt-4 max-w-md mx-auto leading-relaxed opacity-0"
        >
          Full-stack engineer architecting high-performance digital ecosystems. Passionate about scalable solutions, automated workflows, and turning complex ideas into polished products.
        </p>


      </div>

      {/* Tech marquee ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-5 border-t border-white/[0.05]">
        <div className="flex animate-marquee gap-8">
          {marquee.map((item, i) => (
            <span
              key={i}
              className={`text-xs font-mono tracking-widest uppercase ${
                item === "·" ? "text-blue-200/35" : "text-white/20"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollRef}
        className="opacity-0 absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/20 animate-scroll-bounce" />
      </div>
    </section>
  )
}
