import SnowDevMark from "@/components/SnowDevMark"
import ProjectFilter from "@/components/ProjectFilter"
import ProjectArtwork from "@/components/ProjectArtwork"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react"
import { projectCategories, visibilityLabels, visibleProjects } from "@/lib/projects"
import PortfolioMotion from "@/components/PortfolioMotion"

export default function ProjectsPage() {
  return (
    <main className="site-shell archive-page">
      <a className="skip-link" href="#archive">Skip to projects</a>
      <PortfolioMotion />
      <header className="subnav shell"><Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> Back home</Link><Link href="/" className="subnav-brand"><SnowDevMark size={28} /> Snow Dev<span>.</span></Link></header>
      <section className="archive-hero shell"><div className="archive-hero-meta"><span className="eyebrow">Projects &amp; experiments</span><span>{String(visibleProjects.length).padStart(2, "0")} projects / Public, private &amp; in progress</span></div><h1>All work.<br /><em>Sorted by what it is.</em></h1><p className="archive-intro">Software, apps, automations and experiments. Each project states its visibility, its scope and where AI helped.</p></section>
      <section id="archive" className="shell" aria-label="All projects">
        <ProjectFilter categories={projectCategories}>
        {visibleProjects.map((project, index) => (
          <article className={"archive-card archive-card-" + project.slug} key={project.slug} data-category={project.category} data-reveal>
            <Link href={"/projects/" + project.slug} className={"archive-image archive-image-" + project.slug} aria-label={"Explore " + project.name}><ProjectArtwork project={project} /><span className="archive-index">0{index + 1}</span><span className="project-open" aria-hidden="true"><ArrowUpRight /></span></Link>
            <div className="archive-card-copy"><div><span>{project.category}</span><span className="visibility-badge" data-visibility={project.visibility}>{visibilityLabels[project.visibility]}</span></div><h2><Link href={"/projects/" + project.slug}>{project.name}</Link></h2>{project.aiAssisted && <span className="ai-badge"><Sparkles aria-hidden="true" /> Vibe-coded · AI-assisted</span>}<p>{project.shortDescription}</p><Link href={"/projects/" + project.slug} className="text-link">Behind the project <ArrowUpRight aria-hidden="true" /></Link></div>
          </article>
        ))}
        </ProjectFilter>
      </section>
    </main>
  )
}

