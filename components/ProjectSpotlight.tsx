import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { featuredProjects } from "@/lib/projects"
import SnowLogo from "@/components/SnowLogo"

export default function ProjectSpotlight() {
  return (
    <div className="spotlight" aria-label="Explore featured projects">
      <div className="spotlight-caption"><span>Built with curiosity.</span><span>Selected projects / 2026</span></div>
      <div className="spotlight-grid">
        {featuredProjects.map((project) => {
          return (
            <Link className={"spotlight-card spotlight-" + project.slug} href={"/projects/" + project.slug} key={project.slug}>
              <div className="spotlight-top"><span>{project.eyebrow}</span><ArrowUpRight aria-hidden="true" /></div>
              <span className="spotlight-icon">{project.slug === "snowtify" ? <Image className="snowtify-icon" src="/projects/snowtify/logo.png" alt="" width={35} height={35} /> : project.slug === "rez-bot" ? <Image className="rez-logo" src="/projects/rez-bot/logo.png" alt="" width={91} height={85} /> : <SnowLogo size={64} />}</span>
              <div className="spotlight-bottom"><strong>{project.name}</strong><span>{project.focus}</span></div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
