"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const AMBER_WORDS = new Set(["developer", "passionate", "discord", "web", "real", "projects.", "learning", "building"])

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
        
        const colorClass = isAmber ? "text-[#BFDBFE]" : "text-white/90"
        return `<span class="inline-block overflow-hidden align-bottom leading-tight pb-1 -mb-1"><span class="inline-block ${colorClass} opacity-0 translate-y-full blur-sm will-change-[opacity,transform,filter]">${word}</span></span>`
      })
      .join(" ")

    const words = textRef.current.querySelectorAll<HTMLSpanElement>("span > span")

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1.5,
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
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-200/4 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-3xl px-8 md:px-12 flex gap-6 md:gap-10 items-start">
        
        <div
          ref={lineRef}
          className="hidden md:block flex-shrink-0 w-px h-28 bg-gradient-to-b from-blue-200/60 to-transparent mt-3 origin-top"
        />

        <p
          ref={textRef}
          className="text-2xl md:text-4xl lg:text-[2.6rem] font-semibold leading-[1.35] tracking-tight"
        >
          I'm a passionate developer who loves turning ideas into real projects. From Discord bots to web apps — I'm always learning new things and building something cool.
        </p>
      </div>
    </section>
  )
}
