import ProjectArtwork from "@/components/ProjectArtwork"
import ProjectMediaGallery from "@/components/ProjectMediaGallery"
import GithubStats from "@/components/GithubStats"
import SubNav from "@/components/SubNav"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowUpRight, Github, ShieldCheck, Sparkles } from "lucide-react"
import { getProjectBySlug, getVisibilityLabels, getVisibleProjects, projectSlugs } from "@/lib/projects"
import { alternates, getDictionary, isLang } from "@/lib/i18n"
import PortfolioMotion from "@/components/PortfolioMotion"

type Params = { params: Promise<{ lang: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params
  const project = isLang(lang) ? getProjectBySlug(slug, lang) : undefined
  if (!project || !isLang(lang)) return {}
  const title = project.name + " | Snow Dev"
  const path = "/projects/" + slug
  return { title, description: project.shortDescription, alternates: alternates(lang, path), openGraph: { title, description: project.shortDescription, url: "/" + lang + path, type: "article" } }
}

export default async function ProjectDetailPage({ params }: Params) {
  const { lang, slug } = await params
  if (!isLang(lang)) notFound()
  const project = getProjectBySlug(slug, lang)
  if (!project) notFound()
  const dictionary = getDictionary(lang)
  const t = dictionary.caseStudy
  const visibility = getVisibilityLabels(lang)
  const visible = getVisibleProjects(lang)
  const nextProject = visible[(visible.findIndex((item) => item.slug === project.slug) + 1) % visible.length]
  const sections = [project.problem, project.approach, project.learnings]
  const base = "/" + lang + "/projects"
  const publicRepo = project.repoUrl && !project.privateRepo ? project.repoUrl : undefined

  return (
    <main className="site-shell case-page">
      <a className="skip-link" href="#project-content">{t.skip}</a>
      <PortfolioMotion />
      <SubNav lang={lang} path={"/projects/" + slug} back={base} backLabel={dictionary.nav.allProjects} switchLabel={dictionary.nav.switchTo} />
      <section id="project-content" className="case-hero shell">
        <div className="case-meta"><span>{project.category} / {project.year}</span><span className="visibility-badge" data-visibility={project.visibility}>{visibility[project.visibility]} · {project.status}</span></div>
        <h1>{project.name}<em>.</em></h1>
        <p>{project.shortDescription}</p>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {project.aiAssisted && <div className="ai-disclosure"><span className="ai-badge"><Sparkles aria-hidden="true" /> {dictionary.work.aiBadge}</span><p>{project.aiNote}</p></div>}
      </section>
      <section className="case-facts shell" aria-label={t.info} data-reveal>
        <div><span>{t.role}</span><strong>{project.role}</strong></div>
        <div><span>{t.focus}</span><strong>{project.focus}</strong></div>
        <div><span>{t.type}</span><strong>{project.eyebrow}</strong></div>
        {project.outcome && <div><span>{t.outcome}</span><strong>{project.outcome}</strong></div>}
        {publicRepo && <GithubStats repoUrl={publicRepo} lang={lang} t={t.github} />}
      </section>
      <section className="case-image shell" aria-label={project.name + ": " + t.preview} data-reveal><ProjectArtwork project={project} lang={lang} priority /></section>
      <section className="case-intro shell" data-reveal><span className="eyebrow">{t.overview}</span><p>{project.summary}</p></section>

      {project.contributions && (
        <section className="contributions-section shell" aria-labelledby="contributions-title">
          <header className="detail-heading" data-reveal><span className="eyebrow">{t.contributionEyebrow}</span><h2 id="contributions-title">{t.contributionTitle}</h2><p>{t.contributionIntro}</p></header>
          <div className="contribution-grid">{project.contributions.map((item, index) => <article key={item.title} data-reveal><span className="index">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          {project.upstream && <aside className="upstream-note" data-reveal><span className="eyebrow">{t.upstream}</span><p>{project.upstream.description}</p><a href={project.upstream.href} target="_blank" rel="noreferrer" className="text-link">{project.upstream.name} <ArrowUpRight aria-hidden="true" /></a></aside>}
        </section>
      )}

      {project.safetyNotes && (
        <section className="safety-section shell" aria-labelledby="safety-title">
          <header className="detail-heading" data-reveal><span className="eyebrow"><ShieldCheck aria-hidden="true" /> {t.safetyEyebrow}</span><h2 id="safety-title">{t.safetyTitle}</h2><p>{t.safetyIntro}</p></header>
          <div className="safety-grid">{project.safetyNotes.map((item) => <article key={item.title} data-reveal><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          {publicRepo && <a className="text-link" href={publicRepo} target="_blank" rel="noreferrer">{t.safetyLink} <ArrowUpRight aria-hidden="true" /></a>}
        </section>
      )}

      <ProjectMediaGallery project={project} lang={lang} />
      <section className="case-sections shell" aria-label={t.storyLabel}>{sections.map((content, index) => <article key={index} data-reveal><span>0{index + 1}</span><h2>{t.sections[index]}</h2><p>{content}</p></article>)}</section>

      {project.decisions && (
        <section className="decisions-section shell" aria-labelledby="decisions-title">
          <header className="detail-heading" data-reveal><span className="eyebrow">{t.decisionsEyebrow}</span><h2 id="decisions-title">{t.decisionsTitle}</h2></header>
          <div className="contribution-grid">{project.decisions.map((item, index) => <article key={item.title} data-reveal><span className="index">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </section>
      )}

      <section className="case-cta shell" aria-label={t.linksLabel}>
        <p>{project.privateRepo ? t.ctaPrivate : t.ctaPublic}</p>
        <div className="case-cta-actions">
          {project.liveUrl && <Link href={"/" + lang}>{t.viewSite} <ArrowUpRight aria-hidden="true" /></Link>}
          {publicRepo && <a href={publicRepo} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> {t.viewRepo} <ArrowUpRight aria-hidden="true" /></a>}
          <Link className="case-cta-ghost" href={"/" + lang + "#contact"}>{t.hireCta} <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
      <section id="next-project" className="next-project"><Link href={base + "/" + nextProject.slug} className="shell"><span>{t.next}</span><strong>{nextProject.name}<em>.</em></strong><ArrowUpRight aria-hidden="true" /></Link></section>
    </main>
  )
}
