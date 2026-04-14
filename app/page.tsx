"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import HeroSection     from "@/components/sections/HeroSection"
import AboutSection    from "@/components/sections/AboutSection"
import SkillsSection   from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection  from "@/components/sections/ContactSection"
import SummarySection  from "@/components/sections/SummarySection"
import ScrollProgress  from "@/components/ui/ScrollProgress"
import { Navbar }      from "@/components/Navbar"
import Preloader       from "@/components/Preloader"

// Lazy load 3D to avoid SSR issues
const BackgroundGeometry = dynamic(
  () => import("@/components/3d/BackgroundGeometry"),
  { ssr: false }
)

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <div className="bg-[#050505] text-foreground relative selection:bg-foreground selection:text-background">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Floating dock nav */}
      <Navbar />

      {/* 3D Background */}
      <BackgroundGeometry />

      {/* Noise overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-noise opacity-[0.3] bg-repeat" />

      {/* Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <SummarySection />
      </main>
    </div>
  )
}

