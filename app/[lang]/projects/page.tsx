import ProjectFilter from "@/components/ProjectFilter"
import ProjectArtwork from "@/components/ProjectArtwork"
import SubNav from "@/components/SubNav"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { getVisibilityLabels, getVisibleProjects } from "@/lib/projects"
import { alternates, getDictionary, isLang } from "@/lib/i18n"
import PortfolioMotion from "@/components/PortfolioMotion"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = getDictionary(lang).meta
  return { title: t.projectsTitle, description: t.projectsDescription, alternates: alternates(lang, "/projects"), openGraph: { title: t.projectsTitle, description: t.projectsDescription, url: "/" + lang + "/projects", images: ["/opengraph-image.png"] } }
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const dictionary = getDictionary(lang)
  const t = dictionary.archive
  const projects = getVisibleProjects(lang)
  const visibility = getVisibilityLabels(lang)
  const categories = [...new Set(projects.map((project) => project.category))]
  const base = "/" + lang + "/projects/"

  return (
    <main className="site-shell archive-page">
      <a className="skip-link" href="#archive">{t.skip}</a>
      <PortfolioMotion />
      <SubNav lang={lang} path="/projects" back={"/" + lang} backLabel={dictionary.nav.backHome} switchLabel={dictionary.nav.switchTo} />
      <section className="archive-hero shell">
        <div className="archive-hero-meta"><span className="eyebrow">{t.eyebrow}</span><span>{String(projects.length).padStart(2, "0")} {t.count}</span></div>
        <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
        <p className="archive-intro">{t.intro}</p>
      </section>
      <section id="archive" className="shell" aria-label={t.label}>
        <ProjectFilter categories={categories} t={t}>
          {projects.map((project) => (
            <article className={"archive-card archive-card-" + project.slug} key={project.slug} data-category={project.category} data-reveal>
              <Link href={base + project.slug} className={"archive-image archive-image-" + project.slug} aria-label={t.exploreAria + " " + project.name}><ProjectArtwork project={project} lang={lang} /><span className="project-open" aria-hidden="true"><ArrowUpRight /></span></Link>
              <div className="archive-card-copy">
                <div><span>{project.category}</span><span className="visibility-badge" data-visibility={project.visibility}>{visibility[project.visibility]}</span></div>
                <h2><Link href={base + project.slug}>{project.name}</Link></h2>
                {project.aiAssisted && <span className="ai-badge"><Sparkles aria-hidden="true" /> {dictionary.work.aiBadge}</span>}
                <p>{project.shortDescription}</p>
                <Link href={base + project.slug} className="text-link">{t.behind} <ArrowUpRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </ProjectFilter>
      </section>
    </main>
  )
}
