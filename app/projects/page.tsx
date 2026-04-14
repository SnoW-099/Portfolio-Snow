"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Code2, ArrowLeft } from "lucide-react"
import { BentoGrid } from "@/components/BentoGrid"
import Link from "next/link"

const projects = [
  {
    num: "01",
    name: "Vibe",
    description: "A minimalist web terminal experience designed for deep focus and productivity. Clean, fast, distraction-free.",
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
    description: "Comprehensive Discord automation bot with security modules, giveaways, levelling, moderation and more.",
    tags: ["Python", "Discord.py"],
    tagColors: ["text-purple-300/80 border-purple-500/20 bg-purple-500/5", "text-white/30 border-white/8 bg-white/3"],
    glow: "rgba(168,85,247,0.15)",
    borderHover: "hover:border-purple-500/40",
    href: "https://github.com/SnoW-099/Rez",
    colSpan: "md:col-span-5",
  },
]

export default function ProjectsPage() {
    useEffect(() => {
        document.documentElement.classList.add("dark")
    }, [])

    return (
        <div className="min-h-screen bg-[#050505] text-foreground transition-colors duration-500 relative selection:bg-foreground selection:text-background pb-20">
            {}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[150px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[150px] animate-blob delay-2000"></div>
            </div>

            <div className="relative z-10 px-4 pt-12 md:pt-20">
                <header className="max-w-6xl mx-auto mb-14 flex items-center gap-5">
                    <Link href="/" className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all text-white/50 hover:text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">All Projects.</h1>
                        <p className="text-white/40 text-sm mt-1">A complete archive of my past work and experiments.</p>
                    </div>
                </header>

                <BentoGrid className="max-w-6xl mx-auto animate-fade-in grid grid-cols-1 md:grid-cols-12 gap-6">
                    {}
                    {projects.map((project) => (
                        <div
                        key={project.name}
                        className={`project-card ${project.colSpan} relative rounded-3xl bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] box-border ${project.borderHover} transition-all duration-700 group overflow-hidden`}
                        style={{ "--glow": project.glow } as React.CSSProperties}
                        >
                        {}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen"
                            style={{ background: `radial-gradient(circle at center, ${project.glow}, transparent 70%)` }}
                        />

                        {}
                        <div className="absolute top-6 right-8 text-[6rem] font-black text-white/[0.02] leading-none select-none pointer-events-none tabular-nums">
                            {project.num}
                        </div>

                        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[280px]">
                            {}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                            {project.name}
                            </h3>
                            <p className="text-white/50 text-base leading-relaxed flex-1 max-w-md">
                            {project.description}
                            </p>

                            {}
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
                                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group/link"
                            >
                                <Code2 className="w-4 h-4" />
                                <span className="font-medium">Repository</span>
                                <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                            </a>
                            </div>
                        </div>
                        </div>
                    ))}

                    {}
                    <div className="md:col-span-12 relative rounded-2xl border border-dashed border-white/[0.05] p-8 flex items-center justify-center min-h-[150px]">
                        <p className="text-xs text-white/20 font-mono tracking-widest uppercase">
                        More architecture in progress ·&thinsp;·&thinsp;·
                        </p>
                    </div>
                </BentoGrid>
            </div>
        </div>
    )
}
