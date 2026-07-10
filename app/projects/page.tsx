import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"
import PortfolioMotion from "@/components/PortfolioMotion"

export default function ProjectsPage() {
  return (
    <main className="site-shell archive-page">
      <PortfolioMotion />
      <div className="grain" aria-hidden="true" />
      <header className="subnav shell">
        <Link href="/" className="back-link"><ArrowLeft /> Back home</Link>
        <span>Project archive / 2026</span>
      </header>

      <section className="archive-hero shell">
        <div className="archive-hero-meta">
          <span className="eyebrow">Selected experiments and products</span>
          <span>02 projects / Always evolving</span>
        </div>
        <h1>Things I&apos;ve<br /><em>made so far.</em></h1>
      </section>

      <section className="archive-grid shell">
        {projects.map((project, index) => (
          <article className="archive-card" key={project.slug}>
            <Link href={`/projects/${project.slug}`} className={`archive-image archive-image-${project.slug}`} data-tilt>
              <Image src={project.image} alt={`${project.name} interface`} width={1000} height={650} />
              <span className="archive-index">0{index + 1}</span>
              <span className="project-open" aria-hidden="true">Open <ArrowUpRight /></span>
            </Link>
            <div className="archive-card-copy">
              <div>
                <span>{project.eyebrow}</span>
                <span>{project.year} / {project.status}</span>
              </div>
              <h2>{project.name}</h2>
              <p>{project.shortDescription}</p>
              <Link href={`/projects/${project.slug}`} className="text-link">
                Read case study <ArrowUpRight />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
