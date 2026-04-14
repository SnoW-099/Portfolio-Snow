"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Code2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: "01",
    name: "Vibe",
    description: "A minimalist web terminal experience designed for deep focus and productivity. Clean, fast, distraction-free.",
    tags: ["TypeScript", "Next.js"],
    tagColors: ["text-indigo-300/80 border-indigo-500/20 bg-indigo-500/5", "text-blue-300/80 border-blue-500/20 bg-blue-500/5"],
    glow: "rgba(99,102,241,0.12)",
    borderHover: "hover:border-indigo-500/30",
    href: "https://github.com/SnoW-099/vibe",
  },
  {
    num: "02",
    name: "Rez Bot",
    description: "Comprehensive Discord automation bot with security modules, giveaways, levelling, moderation and more.",
    tags: ["Python", "Discord.py"],
    tagColors: ["text-purple-300/80 border-purple-500/20 bg-purple-500/5", "text-white/30 border-white/8 bg-white/3"],
    glow: "rgba(168,85,247,0.12)",
    borderHover: "hover:border-purple-500/30",
    href: "https://github.com/SnoW-099/Rez",
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef   = useRef<HTMLHeadingElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" })
      tl.to({}, { duration: 0.15 })

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".project-card")
        tl.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0,  scale: 1, stagger: 0.12, duration: 0.45, ease: "power2.out" },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[160px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-10">
        {/* Title */}
        <div className="mb-12 opacity-0" ref={titleRef}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Selected work.
          </h2>
          <p className="text-white/30 text-sm mt-2">
            Projects I've shipped and proud of.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`project-card relative rounded-2xl bg-white/[0.028] border border-white/8 ${project.borderHover} transition-all duration-500 group overflow-hidden`}
              style={{ "--glow": project.glow } as React.CSSProperties}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${project.glow}, transparent 60%)` }}
              />

              {/* Large decorative number */}
              <div className="absolute top-4 right-5 text-[5rem] font-black text-white/[0.03] leading-none select-none pointer-events-none tabular-nums">
                {project.num}
              </div>

              <div className="relative z-10 p-7 flex flex-col h-full min-h-[200px]">
                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="mt-7 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${project.tagColors[i]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/80 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    Repo
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon placeholder */}
          <div className="project-card relative rounded-2xl border border-dashed border-white/8 p-7 md:col-span-2">
            <p className="text-[11px] text-white/20 font-mono tracking-widest uppercase text-center">
              More projects coming soon ·&thinsp;·&thinsp;·
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
