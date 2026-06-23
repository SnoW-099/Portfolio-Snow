"use client"

import { ArrowDown, Github } from "lucide-react"

const marqueeItems = [
  "React", "·", "TypeScript", "·", "Python", "·", "Next.js", "·",
  "Node.js", "·", "Django", "·", "Tailwind", "·", "Git", "·",
]

export default function HeroSection() {
  const marquee = [...marqueeItems, ...marqueeItems]
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/5 blur-[200px]" />
        <div className="absolute top-1/2 left-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/5 blur-[160px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl translate-y-8 px-4 text-center md:translate-y-12">
        <div className="mb-6 hidden items-center gap-2 rounded-full border border-blue-200/25 bg-blue-200/10 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-100/90 shadow-[0_0_30px_rgba(191,219,254,0.08)] sm:inline-flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-200" />
          </span>
          Available for work
        </div>

        <h1
          className="select-none font-bold leading-none tracking-tighter text-gradient-amber"
          style={{ fontSize: "clamp(4.5rem, 12vw, 11rem)" }}
        >
          Angel.
        </h1>

        <div className="mx-auto mt-5 max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-white/45">
            <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">Python</span>
            <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">React</span>
            <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">Discord bots</span>
          </div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/58 md:text-xl">
            I build Discord bots, dashboards, and web tools while learning in public.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03] active:scale-95"
            >
              See projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
            <a
              href="https://github.com/SnoW-099"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/75 transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 hidden overflow-hidden border-t border-white/[0.05] py-5 md:block">
        <div className="flex animate-marquee gap-8">
          {marquee.map((item, i) => (
            <span
              key={i}
              className={`text-xs font-mono uppercase tracking-widest ${item === "·" ? "text-blue-200/35" : "text-white/20"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
