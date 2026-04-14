"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: "4",   label: "Languages",  sub: "Python · JS · TS · CSS" },
  { value: "5+",  label: "Frameworks", sub: "React, Next.js, Tailwind…" },
  { value: "6+",  label: "Tools",      sub: "Git, Vercel, Supabase…"  },
  { value: "2+",  label: "Projects",   sub: "Shipped & live"          },
]

export default function SummarySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef   = useRef<HTMLHeadingElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)
  const footerRef  = useRef<HTMLDivElement>(null)

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
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.querySelectorAll(".stat-card"),
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.45, ease: "power2.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 78%", toggleActions: "play none none reverse" },
          },
        )
      }
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.5,
          scrollTrigger: { trigger: footerRef.current, start: "top 92%", toggleActions: "play none none reverse" },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-[85vh] w-full flex flex-col items-center justify-center relative overflow-hidden py-24"
    >
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/4 blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 md:px-10 text-center">
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-3 opacity-0 text-white"
        >
          At a glance.
        </h2>
        <p className="text-white/30 text-sm mb-14">
          A quick snapshot of what I bring to the table.
        </p>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-card p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/15 transition-all duration-300 group hover-glow-amber"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums">
                {s.value}
              </div>
              <div className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-2">
                {s.label}
              </div>
              <div className="text-[11px] text-white/30 leading-relaxed">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div ref={footerRef} className="relative z-10 mt-24 opacity-0 text-center">
        <div className="w-px h-10 bg-gradient-to-b from-white/10 to-transparent mx-auto mb-6" />
        <p className="text-xs text-white/20 tracking-widest uppercase font-mono">
          © {new Date().getFullYear()} Angel · Built with Next.js &amp; GSAP
        </p>
      </div>
    </section>
  )
}
