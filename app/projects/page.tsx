import SnowLogo from "@/components/SnowLogo"
import ProjectArtwork from "@/components/ProjectArtwork"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react"
import { visibleProjects } from "@/lib/projects"
import PortfolioMotion from "@/components/PortfolioMotion"

export default function ProjectsPage() {
  return (
    <main className="site-shell archive-page">
      <a className="skip-link" href="#archive">Skip to projects</a>
      <PortfolioMotion />
      <header className="subnav shell"><Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Back home</Link><Link href="/" className="subnav-brand"><SnowLogo size={36} /> Snow<span>.</span></Link></header>
      <section className="archive-hero shell"><div className="archive-hero-meta"><span className="eyebrow">Projects &amp; experiments</span><span>{String(visibleProjects.length).padStart(2, "0")} projects / Always learning</span></div><h1>Made to learn.<br /><em>Refined along the way.</em></h1><p className="archive-intro">Finished pieces, ongoing work, and small exercises. Each project makes its scope and use of AI clear.</p></section>
      <section id="archive" className="archive-grid shell" aria-label="All projects">
        {visibleProjects.map((project, index) => (
          <article className="archive-card" key={project.slug} data-reveal>
            <Link href={"/projects/" + project.slug} className={"archive-image archive-image-" + project.slug} aria-label={"Explore " + project.name}><ProjectArtwork project={project} /><span className="archive-index">0{index + 1}</span><span className="project-open" aria-hidden="true"><ArrowUpRight /></span></Link>
            <div className="archive-card-copy"><div><span>{project.eyebrow}</span><span>{project.year}</span></div><h2><Link href={"/projects/" + project.slug}>{project.name}</Link></h2>{project.aiAssisted && <span className="ai-badge"><Sparkles aria-hidden="true" /> Vibe-coded · AI-assisted</span>}<p>{project.shortDescription}</p><Link href={"/projects/" + project.slug} className="text-link">Behind the project <ArrowUpRight aria-hidden="true" /></Link></div>
          </article>
        ))}
      </section>
    </main>
  )
}

