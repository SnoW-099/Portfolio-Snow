"use client"

import { useState, useEffect } from "react"
import {
    Bot,
    Zap,
    Code2,
    Terminal,
    ArrowLeft,
    LayoutTemplate,
    Construction,
} from "lucide-react"
import { BentoGrid } from "@/components/BentoGrid"
import { BentoCard } from "@/components/BentoCard"
import { SnippetCarousel } from "@/components/SnippetCarousel"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function ProjectsPage() {
    // Shared background logic for consistency
    useEffect(() => {
        document.documentElement.classList.add("dark")
    }, [])

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative selection:bg-foreground selection:text-background pb-20">
            {/* 
                --------------------------------------------------
                PRESERVED BACKGROUND BLOBS & NOISE (Copied from Home)
                --------------------------------------------------
            */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-blob delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] animate-blob delay-4000"></div>
            </div>

            <div className="relative z-10 px-4 pt-12 md:pt-20">
                <header className="max-w-7xl mx-auto mb-12 flex items-center gap-4">
                    <a href="/" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                    </a>
                    <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
                </header>

                <BentoGrid className="animate-fade-in">



                    {/* VIBE PROJECT */}
                    <BentoCard colSpan={6} className="min-h-[350px] p-8 group/card">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-auto">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Vibe</h3>
                                <p className="text-muted-foreground">A minimalist web terminal experience designed for focus and productivity.</p>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-indigo-300 border border-indigo-500/20">TypeScript</span>
                                    <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-blue-300 border border-blue-500/20">Next.js</span>
                                </div>
                                <a
                                    href="https://github.com/SnoW-099/vibe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground border border-white/10 transition-colors"
                                >
                                    <Code2 className="w-3.5 h-3.5" />
                                    View Repository
                                </a>
                            </div>
                        </div>
                    </BentoCard>

                    {/* REZ BOT PROJECT */}
                    <BentoCard
                        colSpan={6}
                        className="min-h-[350px] p-8 group/card"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-auto">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Rez Bot</h3>
                                <p className="text-muted-foreground">Comprehensive Discord automation bot with security and fun modules.</p>
                            </div>

                            <div className="mt-8 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-purple-300 border border-purple-500/20">Python</span>
                                    <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-muted-foreground border border-white/5">Discord.py</span>
                                </div>
                                <a
                                    href="https://github.com/SnoW-099/Rez"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground border border-white/10 transition-colors"
                                >
                                    <Code2 className="w-3.5 h-3.5" />
                                    View Repository
                                </a>
                            </div>
                        </div>
                    </BentoCard>

                    {/* FUTURE PROJECT A */}
                    <BentoCard colSpan={6} className="min-h-[250px] p-8 group/card border-dashed border-white/5 opacity-40 hover:opacity-100 transition-opacity">
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                            <Construction className="w-8 h-8 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Upcoming Project</h3>
                            <p className="text-xs text-muted-foreground">Detailed description of a new utility or web application.</p>
                        </div>
                    </BentoCard>

                    {/* FUTURE PROJECT B */}
                    <BentoCard colSpan={6} className="min-h-[250px] p-8 group/card border-dashed border-white/5 opacity-40 hover:opacity-100 transition-opacity">
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                            <Construction className="w-8 h-8 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                            <p className="text-xs text-muted-foreground">Reserved for an innovative digital experience.</p>
                        </div>
                    </BentoCard>

                </BentoGrid>
            </div>
        </div>
    )
}
