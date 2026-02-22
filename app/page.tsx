"use client"

import { useEffect } from "react"
import {
  Github,
  MessageCircle,
  Terminal,
  Cpu,
  Zap,
  Mail,
  ExternalLink,
  Cloud,
  Atom,
  Triangle,
  Wind,
  Hexagon,
  Database
} from "lucide-react"
import { BentoGrid } from "@/components/BentoGrid"
import { BentoCard } from "@/components/BentoCard"

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-background text-foreground transition-colors duration-500 relative selection:bg-foreground selection:text-background">
      {/* Background Blobs & Noise */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] animate-blob delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/20 blur-[120px] animate-blob delay-4000"></div>
      </div>

      <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
        <BentoGrid className="animate-fade-in w-full max-w-7xl max-h-full">

          {/* Hero */}
          <BentoCard colSpan={9} rowSpan={2} className="p-8 md:p-10 flex flex-col justify-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-6 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for work
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 leading-none">
                Angel.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/60 font-medium mb-6">
                Crafting digital experiences.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                A person eager to learn new things. I have knowledge in programming, UI, web design, and more.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="/projects" className="px-6 py-2.5 rounded-lg bg-foreground text-background font-medium hover:scale-105 transition-all shadow-lg shadow-foreground/20">
                  View Projects
                </a>
                <a href="mailto:ryze0950@gmail.com" className="px-6 py-2.5 rounded-lg bg-transparent border-2 border-white/10 font-medium hover:bg-white/5 hover:border-white/20 transition-all">
                  Contact Me
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Contact */}
          <BentoCard colSpan={3} rowSpan={2} className="p-6 relative">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  Contact
                </h3>
                <p className="text-sm text-muted-foreground">Get in touch</p>
              </div>

              <div className="space-y-3 mt-6">
                <a href="https://github.com/SnoW-099" target="_blank" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-sm font-medium">GitHub</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </a>
                <button onClick={() => navigator.clipboard.writeText(".snow_xd")} className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 transition-all group text-left">
                  <MessageCircle className="w-5 h-5 text-[#5865F2]" />
                  <span className="text-sm font-medium">Discord</span>
                  <span className="text-xs ml-auto opacity-50 bg-[#5865F2]/20 px-2 py-0.5 rounded">.snow_xd</span>
                </button>
                <a href="mailto:ryze0950@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Skills */}
          <BentoCard colSpan={8} rowSpan={2} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 h-full">
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-muted-foreground" />
                  Languages & Technologies
                </h3>
                <div className="space-y-4 md:space-y-5">
                  <div className="mt-4">
                    <div className="group">
                      <div className="flex justify-between items-center mb-1 md:mb-2 text-xs md:text-sm">
                        <span className="text-foreground/90 font-medium flex items-center gap-2">
                          <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-blue-400/40"></div>
                          Python
                        </span>
                        <span className="text-muted-foreground text-[10px] md:text-xs">Mid Level</span>
                      </div>
                      <div className="h-1 md:h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                          className="h-full bg-blue-400/60 transition-all duration-1000 ease-out group-hover:bg-blue-400/80"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="group mt-3 md:mt-4">
                      <div className="flex justify-between items-center mb-1 md:mb-2 text-xs md:text-sm">
                        <span className="text-foreground/90 font-medium flex items-center gap-2">
                          <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-yellow-400/40"></div>
                          JavaScript
                        </span>
                        <span className="text-muted-foreground text-[10px] md:text-xs">Junior</span>
                      </div>
                      <div className="h-1 md:h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                          className="h-full bg-yellow-400/60 transition-all duration-1000 ease-out group-hover:bg-yellow-400/80"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="group mt-3 md:mt-4">
                      <div className="flex justify-between items-center mb-1 md:mb-2 text-xs md:text-sm">
                        <span className="text-foreground/90 font-medium flex items-center gap-2">
                          <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-blue-500/40"></div>
                          TypeScript
                        </span>
                        <span className="text-muted-foreground text-[10px] md:text-xs">Junior</span>
                      </div>
                      <div className="h-1 md:h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                          className="h-full bg-blue-500/60 transition-all duration-1000 ease-out group-hover:bg-blue-500/80"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="group mt-3 md:mt-4">
                      <div className="flex justify-between items-center mb-1 md:mb-2 text-xs md:text-sm">
                        <span className="text-foreground/90 font-medium flex items-center gap-2">
                          <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-orange-400/40"></div>
                          HTML & CSS
                        </span>
                        <span className="text-muted-foreground text-[10px] md:text-xs">Junior</span>
                      </div>
                      <div className="h-1 md:h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                          className="h-full bg-orange-400/60 transition-all duration-1000 ease-out group-hover:bg-orange-400/80"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-muted-foreground" />
                    Tools & Utils
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div className="text-[10px] font-medium">Git & GitHub</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#007ACC]/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Terminal className="w-4 h-4 text-muted-foreground group-hover:text-[#007ACC] transition-colors" />
                      <div className="text-[10px] font-medium">VS Code</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Zap className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div className="text-[10px] font-medium">Vercel</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#00C7B7]/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Cloud className="w-4 h-4 text-muted-foreground group-hover:text-[#00C7B7] transition-colors" />
                      <div className="text-[10px] font-medium">Netlify</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#3FCF8E]/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <div className="w-4 h-4 rounded-full border border-muted-foreground flex items-center justify-center text-[8px] font-bold text-muted-foreground group-hover:border-[#3FCF8E] group-hover:text-[#3FCF8E] transition-colors">S</div>
                      <div className="text-[10px] font-medium">Supabase</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#47A248]/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <div className="w-4 h-4 rounded-full border border-muted-foreground flex items-center justify-center text-[8px] font-bold text-muted-foreground group-hover:border-[#47A248] group-hover:text-[#47A248] transition-colors">M</div>
                      <div className="text-[10px] font-medium">MongoDB</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-muted-foreground" />
                    Frameworks & Libraries
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#61DAFB]/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Atom className="w-4 h-4 text-muted-foreground group-hover:text-[#61DAFB] transition-colors" />
                      <div className="text-[10px] font-medium">React</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Triangle className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                      <div className="text-[10px] font-medium">Next.js</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#06B6D4]/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Wind className="w-4 h-4 text-muted-foreground group-hover:text-[#06B6D4] transition-colors" />
                      <div className="text-[10px] font-medium">Tailwind</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#339933]/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Hexagon className="w-4 h-4 text-muted-foreground group-hover:text-[#339933] transition-colors" />
                      <div className="text-[10px] font-medium">Node.js</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#44B78B]/50 transition-all flex flex-col justify-center items-center text-center gap-1.5 group">
                      <Database className="w-4 h-4 text-muted-foreground group-hover:text-[#44B78B] transition-colors" />
                      <div className="text-[10px] font-medium">Django</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Web & Automation */}
          <BentoCard colSpan={4} rowSpan={2} className="p-6 md:p-8 flex flex-col justify-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-4 md:mb-6">
              <Terminal className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">Web & Automation</h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
              I build utilities and websites using modern web technologies and Python.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-[10px] md:text-xs border border-white/10 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">Next.js 15</span>
              <span className="text-[10px] md:text-xs border border-white/10 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">Python</span>
              <span className="text-[10px] md:text-xs border border-white/10 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all">Tailwind</span>
            </div>
          </BentoCard>

        </BentoGrid>
      </div>
    </div>
  )
}
