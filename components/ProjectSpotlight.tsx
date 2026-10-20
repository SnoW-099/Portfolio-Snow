import Link from "next/link"
import { ArrowUpRight, Monitor, Snowflake, Sparkles } from "lucide-react"
import { featuredProjects } from "@/lib/projects"

const icons = { staroptimizer: Sparkles, snowtify: Snowflake, portfolio: Monitor }

export default function ProjectSpotlight() {
  return (
    <div className="spotlight" aria-label="Explore featured projects">
      <div className="spotlight-caption"><span>Built with curiosity.</span><span>Selected projects / 2026</span></div>
      <div className="spotlight-grid">
        {featuredProjects.map((project) => {
          const Icon = icons[project.slug as keyof typeof icons] || Monitor
          return (
            <Link className={"spotlight-card spotlight-" + project.slug} href={"/projects/" + project.slug} key={project.slug}>
              <div className="spotlight-top"><span>{project.eyebrow}</span><ArrowUpRight aria-hidden="true" /></div>
              <span className="spotlight-icon"><Icon aria-hidden="true" /></span>
              <div className="spotlight-bottom"><strong>{project.name}</strong><span>{project.focus}</span></div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
