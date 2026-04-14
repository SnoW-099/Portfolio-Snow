"use client"

import { useEffect } from "react"
import {
    Bot,
    Zap,
    Code2,
    ArrowLeft,
    Construction,
} from "lucide-react"
import { BentoGrid } from "@/components/BentoGrid"
import { BentoCard } from "@/components/BentoCard"
import Link from "next/link"

export default function ProjectsPage() {
    useEffect(() => {
        document.documentElement.classList.add("dark")
    }, [])

    return (
        <div className="min-h-screen bg-[#050505] text-foreground transition-colors duration-500 relative selection:bg-foreground selection:text-background pb-20">
            {/* Background Blobs & Noise */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/10 blur-[130px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/5 blur-[120px] animate-blob delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px] animate-blob delay-4000"></div>
            </div>

            <div className="relative z-10 px-4 pt-12 md:pt-20">
                <header className="max-w-7xl mx-auto mb-12 flex items-center gap-4">
                    <Link href="/" className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all text-muted-foreground hover:text-white">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight text-gradient-amber">All Projects</h1>
                </header>

                <BentoGrid className="animate-fade-in">
                    {/* Vibe */}
                    <BentoCard colSpan={6} className="min-h-[350px] p-8 group/card bg-white/[0.02] border border-white/8 hover:border-blue-200/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-auto">
                                <div className="w-12 h-12 rounded-xl bg-blue-200/5 border border-blue-200/20 flex items-center justify-center mb-4 text-blue-200">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Vibe</h3>
                                <p className="text-white/40 text-sm leading-relaxed">A minimalist web terminal experience designed for focus and productivity. Clean, fast, distraction-free.</p>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded-md text-blue-200 border border-blue-200/20">TypeScript</span>
                                    <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded-md text-white/70 border border-white/10">Next.js</span>
                                </div>
                                <a
                                    href="https://github.com/SnoW-099/vibe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-colors"
                                >
                                    <Code2 className="w-3.5 h-3.5" />
                                    View Repository
                                </a>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Rez Bot */}
                    <BentoCard
                        colSpan={6}
                        className="min-h-[350px] p-8 group/card bg-white/[0.02] border border-white/8 hover:border-indigo-400/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-auto">
                                <div className="w-12 h-12 rounded-xl bg-indigo-400/5 border border-indigo-400/20 flex items-center justify-center mb-4 text-indigo-300">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Rez Bot</h3>
                                <p className="text-white/40 text-sm leading-relaxed">Comprehensive Discord automation bot with security modules, giveaways, levelling, moderation and more.</p>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded-md text-indigo-300 border border-indigo-400/20">Python</span>
                                    <span className="text-[11px] font-mono bg-white/5 px-2.5 py-1 rounded-md text-white/50 border border-white/10">Discord.py</span>
                                </div>
                                <a
                                    href="https://github.com/SnoW-099/Rez"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-colors"
                                >
                                    <Code2 className="w-3.5 h-3.5" />
                                    View Repository
                                </a>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Placeholder A */}
                    <BentoCard colSpan={6} className="min-h-[250px] p-8 group/card bg-white/[0.01] border-dashed border-white/8 opacity-60 hover:opacity-100 hover:border-white/20 transition-all duration-300">
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                            <Construction className="w-8 h-8 text-white/20 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-white/80">Upcoming Project</h3>
                            <p className="text-xs text-white/40">Detailed description of a new utility or web application.</p>
                        </div>
                    </BentoCard>

                    {/* Placeholder B */}
                    <BentoCard colSpan={6} className="min-h-[250px] p-8 group/card bg-white/[0.01] border-dashed border-white/8 opacity-60 hover:opacity-100 hover:border-white/20 transition-all duration-300">
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                            <Construction className="w-8 h-8 text-white/20 mb-4" />
                            <h3 className="text-xl font-semibold mb-2 text-white/80">Coming Soon</h3>
                            <p className="text-xs text-white/40">Reserved for an innovative digital experience.</p>
                        </div>
                    </BentoCard>

                </BentoGrid>
            </div>
        </div>
    )
}
