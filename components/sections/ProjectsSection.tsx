"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Code2, FileText } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: "01",
    name: "Vibe",
    slug: "vibe",
    description: "A minimalist web terminal built for deep-focus productivity — zero distractions, instant load, keyboard-first UX.",
    highlights: ["SSR with Next.js App Router", "Custom CLI parser", "< 50ms TTI"],
    tags: ["TypeScript", "Next.js"],
    tagColors: ["text-indigo-300/80 border-indigo-500/20 bg-indigo-500/5", "text-blue-300/80 border-blue-500/20 bg-blue-500/5"],
    glow: "rgba(99,102,241,0.15)",
    borderHover: "hover:border-indigo-500/40",
    href: "https://github.com/SnoW-099/vibe",
    colSpan: "md:col-span-7",
  },
  {
    num: "02",
    name: "Rez Bot",
    slug: "rez-bot",
    description: "Full-featured Discord bot with automated moderation, XP levelling, giveaways, and real-time security alerts.",
    highlights: ["Async event-driven architecture", "Slash commands + REST API", "SQLite persistence layer"],
    tags: ["Python", "Discord.py"],
    tagColors: ["text-purple-300/80 border-purple-500/20 bg-purple-500/5", "text-white/30 border-white/8 bg-white/3"],
    glow: "rgba(168,85,247,0.15)",
    borderHover: "hover:border-purple-500/40",
    href: "https://github.com/SnoW-099/Rez",
    colSpan: "md:col-span-5",
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
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0,  scale: 1, stagger: 0.15, duration: 0.6, ease: "power3.out" },
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
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[200px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-10">
        
        <div className="mb-14 opacity-0 flex flex-col items-center text-center" ref={titleRef}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Selected work.
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-lg">
            A collection of products and systems I've architected and shipped.
          </p>
        </div>

        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`project-card ${project.colSpan} relative rounded-3xl bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] box-border ${project.borderHover} transition-all duration-700 group overflow-hidden`}
              style={{ "--glow": project.glow } as React.CSSProperties}
            >
              
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen"
                style={{ background: `radial-gradient(circle at center, ${project.glow}, transparent 70%)` }}
              />

              
              <div className="absolute top-6 right-8 text-[6rem] font-black text-white/[0.02] leading-none select-none pointer-events-none tabular-nums">
                {project.num}
              </div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[280px]">
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-white/50 text-base leading-relaxed flex-1 max-w-md">
                  {project.description}
                </p>
                {project.highlights && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-mono tracking-wide text-white/40 border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                
                <div className="mt-10 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium tracking-wide px-3 py-1.5 rounded-lg border ${project.tagColors[i]} shadow-inner`}
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
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group/link"
                  >
                    <Code2 className="w-4 h-4" />
                    <span className="font-medium">Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor-hover
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group/link"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">Case Study</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          
          <div className="project-card md:col-span-12 relative rounded-2xl border border-dashed border-white/[0.05] p-8 flex items-center justify-center">
            <p className="text-xs text-white/20 font-mono tracking-widest uppercase">
              More architecture in progress ·&thinsp;·&thinsp;·
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
