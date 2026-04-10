"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code2, Bot, Zap } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: "Vibe",
    description: "A minimalist web terminal experience designed for focus and productivity.",
    tags: ["TypeScript", "Next.js"],
    tagColors: ["text-indigo-300 border-indigo-500/20", "text-blue-300 border-blue-500/20"],
    accent: "from-indigo-500/15",
    icon: Zap,
    iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    href: "https://github.com/SnoW-099/vibe",
  },
  {
    name: "Rez Bot",
    description: "Comprehensive Discord automation bot with security and fun modules.",
    tags: ["Python", "Discord.py"],
    tagColors: ["text-purple-300 border-purple-500/20", "text-muted-foreground border-white/5"],
    accent: "from-purple-500/15",
    icon: Bot,
    iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    href: "https://github.com/SnoW-099/Rez",
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })

      // Title
      tl.fromTo(titleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.3 })

      // Cards fly in with 3D rotation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".project-card")
        tl.fromTo(
          cards,
          { opacity: 0, rotateY: 35, x: 100, scale: 0.9 },
          { opacity: 1, rotateY: 0, x: 0, scale: 1, stagger: 0.15, duration: 0.5 },
          "-=0.1"
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
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-8">
        <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold tracking-tight mb-12 md:mb-16 text-center opacity-0">
          Projects
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project) => (
            <div
              key={project.name}
              className="project-card relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 hover:border-white/20 transition-colors group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-auto">
                  <div className={`w-12 h-12 rounded-xl ${project.iconColor} border flex items-center justify-center mb-5`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className={`text-xs font-mono bg-white/5 px-2.5 py-1 rounded-md ${project.tagColors[i]} border`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground border border-white/10 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
