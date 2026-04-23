"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Rocket } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const building = [
  {
    name: "ZyreHub",
    description: "A VS Code / IDE extension for quality-of-life improvements — automated commits, quick fixes, and streamlined workflows to speed up your dev routine.",
    stage: "MVP",
    tags: ["TypeScript", "VS Code API", "IDE Extension"],
    progress: 65,
  },
  {
    name: "Portfolio v3",
    description: "Next iteration of this portfolio — 3D interactions, blog engine with MDX, and a custom CMS for project management.",
    stage: "Design",
    tags: ["Three.js", "MDX", "React"],
    progress: 20,
  },
]

export default function BuildingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", toggleActions: "play none none reverse" },
        },
      )
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.querySelectorAll(".building-card"),
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.5, ease: "power2.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 78%", toggleActions: "play none none reverse" },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh] w-full flex items-center justify-center relative overflow-hidden py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-500/4 blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white opacity-0 mb-3"
          >
            What I'm building.
          </h2>
          <p className="text-white/30 text-sm">
            Projects currently in progress — shipping soon.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {building.map((item) => (
            <div
              key={item.name}
              className="building-card relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-amber-400/70" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <span className="ml-auto text-[10px] font-mono tracking-widest text-amber-300/60 uppercase px-2 py-0.5 rounded-md border border-amber-500/15 bg-amber-500/5">
                  🚧 {item.stage}
                </span>
              </div>

              <p className="text-sm text-white/45 leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-wide text-white/30 border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500/50 to-amber-400/30 transition-all duration-1000"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <p className="text-[10px] text-white/20 mt-1.5 text-right font-mono">
                {item.progress}% complete
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
