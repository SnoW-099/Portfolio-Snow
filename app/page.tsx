"use client"

import dynamic from "next/dynamic"
import { useEffect } from "react"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import BuildingSection from "@/components/sections/BuildingSection"
import ContactSection from "@/components/sections/ContactSection"
import SummarySection from "@/components/sections/SummarySection"
import ScrollProgress from "@/components/ui/ScrollProgress"
import { Navbar } from "@/components/Navbar"
import EasterEgg from "@/components/EasterEgg"
import SmoothScroll from "@/components/SmoothScroll"

const BackgroundGeometry = dynamic(
  () => import("@/components/3d/BackgroundGeometry"),
  { ssr: false }
)

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <SmoothScroll>
      <div className="bg-[#050505] text-foreground relative selection:bg-foreground selection:text-background">
        <ScrollProgress />
        <Navbar />
        <BackgroundGeometry />
        <div className="fixed inset-0 z-[1] pointer-events-none bg-noise opacity-[0.3] bg-repeat" />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <BuildingSection />
          <ContactSection />
          <SummarySection />
        </main>

        <EasterEgg />
      </div>
    </SmoothScroll>
  )
}
