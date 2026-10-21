import ThemeSelect from "@/components/ThemeSelect"
import SnowLogo from "@/components/SnowLogo"
import ProjectArtwork from "@/components/ProjectArtwork"
import ProjectMediaGallery from "@/components/ProjectMediaGallery"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Github, ShieldCheck, Sparkles } from "lucide-react"
import { getProjectBySlug, projects, visibleProjects } from "@/lib/projects"
import PortfolioMotion from "@/components/PortfolioMotion"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  return project ? { title: project.name + " | Angel / Snow", description: project.shortDescription } : { title: "Project not found | Snow" }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  const currentIndex = visibleProjects.findIndex((item) => item.slug === project.slug)
  const nextProject = visibleProjects[(currentIndex + 1) % visibleProjects.length]
  const sections = [["The problem", project.problem], ["The approach", project.approach], ["What I learned", project.learnings]]

  return (
    <main className="site-shell case-page">
      <a className="skip-link" href="#project-content">Skip to project</a>
      <PortfolioMotion />
      <header className="subnav shell">
        <Link href="/projects" className="back-link"><ArrowLeft aria-hidden="true" /> All projects</Link>
        <div className="subnav-actions"><ThemeSelect /><Link href="/" className="subnav-brand"><SnowLogo size={36} /> Snow<span>.</span></Link></div>
      </header>
      <section id="project-content" className="case-hero shell">
        <div className="case-meta"><span>{project.eyebrow} / {project.year}</span><span>{project.status}</span></div>
        <h1>{project.name}<em>.</em></h1>
        <p>{project.shortDescription}</p>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {project.aiAssisted && <div className="ai-disclosure"><span className="ai-badge"><Sparkles aria-hidden="true" /> Vibe-coded · AI-assisted</span><p>{project.aiNote}</p></div>}
      </section>
      <section className="case-facts shell" aria-label="Project information" data-reveal>
        <div><span>My role</span><strong>{project.role}</strong></div>
        <div><span>Focus</span><strong>{project.focus}</strong></div>
        <div><span>Project type</span><strong>{project.eyebrow}</strong></div>
      </section>
      <section className="case-image shell" aria-label={project.name + " preview"} data-reveal><ProjectArtwork project={project} priority /></section>
      <section className="case-intro shell" data-reveal><span className="eyebrow">Overview</span><p>{project.summary}</p></section>

      {project.contributions && (
        <section className="contributions-section shell" aria-labelledby="contributions-title">
          <header className="detail-heading" data-reveal><span className="eyebrow">My contribution</span><h2 id="contributions-title">What Snowtify adds.</h2><p>A fork with a specific focus: making customization easier to diagnose and recover.</p></header>
          <div className="contribution-grid">{project.contributions.map((item, index) => <article key={item.title} data-reveal><span className="index">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          {project.upstream && <aside className="upstream-note" data-reveal><span className="eyebrow">Built on upstream work</span><p>{project.upstream.description}</p><a href={project.upstream.href} target="_blank" rel="noreferrer" className="text-link">{project.upstream.name} <ArrowUpRight aria-hidden="true" /></a></aside>}
        </section>
      )}

      {project.safetyNotes && (
        <section className="safety-section shell" aria-labelledby="safety-title">
          <header className="detail-heading" data-reveal><span className="eyebrow"><ShieldCheck aria-hidden="true" /> Scope &amp; transparency</span><h2 id="safety-title">Before changing a system.</h2><p>Reversible features and public source help explain the workflow. They do not make every system change risk-free.</p></header>
          <div className="safety-grid">{project.safetyNotes.map((item) => <article key={item.title} data-reveal><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          <a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer">Read the source and release documentation <ArrowUpRight aria-hidden="true" /></a>
        </section>
      )}

      <ProjectMediaGallery project={project} />
      <section className="case-sections shell" aria-label="Project story">{sections.map(([title, content], index) => <article key={title} data-reveal><span>0{index + 1}</span><h2>{title}</h2><p>{content}</p></article>)}</section>
      <section className="case-cta shell" aria-label="Project links">
        <p>{project.privateRepo ? "A personal project, kept private." : "Curious about the details?"}</p>
        <div className="case-cta-actions">
          {project.liveUrl && <a href={project.liveUrl}>View website <ArrowUpRight aria-hidden="true" /></a>}
          {project.repoUrl && !project.privateRepo && <a href={project.repoUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> View repository <ArrowUpRight aria-hidden="true" /></a>}
        </div>
      </section>
      <section id="next-project" className="next-project"><Link href={"/projects/" + nextProject.slug} className="shell"><span>Next project</span><strong>{nextProject.name}<em>.</em></strong><ArrowUpRight aria-hidden="true" /></Link></section>
    </main>
  )
}

