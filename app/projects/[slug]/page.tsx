import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import { getProjectBySlug, projects } from "@/lib/projects"
import PortfolioMotion from "@/components/PortfolioMotion"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  return project
    ? { title: `${project.name} | Angel`, description: project.shortDescription }
    : { title: "Project not found | Angel" }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()
  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  const sections = [
    ["The problem", project.problem],
    ["The approach", project.approach],
    ["What I learned", project.learnings],
  ]

  return (
    <main className="site-shell case-page">
      <PortfolioMotion />
      <div className="grain" aria-hidden="true" />
      <header className="subnav shell">
        <Link href="/projects" className="back-link"><ArrowLeft /> All projects</Link>
        <span>{project.eyebrow} / {project.year}</span>
      </header>

      <section className="case-hero shell" data-reveal>
        <div className="case-meta">
          <span>{project.status}</span>
          <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <h1>{project.name}<em>.</em></h1>
        <p>{project.shortDescription}</p>
      </section>

      <section className="case-facts shell" aria-label="Project information" data-reveal>
        <div><span>Role</span><strong>{project.role}</strong></div>
        <div><span>Focus</span><strong>{project.focus}</strong></div>
        <div><span>Year</span><strong>{project.year}</strong></div>
      </section>

      <section className={`case-image case-image-${project.slug} shell`} data-reveal>
        <Image src={project.image} alt={`${project.name} interface`} width={1440} height={900} priority />
      </section>

      <section className="case-intro shell" data-reveal>
        <span className="eyebrow">Overview</span>
        <p>{project.summary}</p>
      </section>

      <section className="case-sections shell" data-reveal>
        {sections.map(([title, content], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{content}</p>
          </article>
        ))}
      </section>

      <section className="case-cta shell">
        <p>Want to inspect the code?</p>
        <a href={project.repoUrl} target="_blank" rel="noreferrer">
          <Github /> View repository <ArrowUpRight />
        </a>
      </section>

      <section id="next-project" className="next-project">
        <Link href={`/projects/${nextProject.slug}`} className="shell">
          <span>Next case study</span>
          <strong>{nextProject.name}<em>.</em></strong>
          <ArrowUpRight />
        </Link>
      </section>
    </main>
  )
}
