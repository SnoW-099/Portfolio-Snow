import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import { getProjectCover, getProjectMedia } from "@/lib/project-media"
import { getDictionary, type Lang } from "@/lib/i18n"

export default function ProjectMediaGallery({ project, lang }: { project: Project; lang: Lang }) {
  const media = getProjectMedia(project, lang)
  const t = getDictionary(lang).caseStudy
  if (media.length === 0) return null
  return (
    <section className="project-gallery shell" aria-labelledby="gallery-title">
      <header className="gallery-heading" data-reveal><span className="eyebrow">{t.galleryEyebrow}</span><h2 id="gallery-title">{t.galleryTitle}</h2></header>
      <div className="gallery-grid">
        {media.map((item) => (
          <figure className={"gallery-item gallery-item-" + item.kind} key={item.src} data-reveal>
            {item.kind === "video" ? (
              <video controls playsInline preload="none" poster={getProjectCover(project)} aria-label={project.name + ": " + item.title}>
                <source src={item.src} type="video/mp4" />
                <a href={item.src}>{t.download}</a>
              </video>
            ) : (
              <a className="gallery-image-link" href={item.src} target="_blank" rel="noreferrer" aria-label={t.openImage + " " + item.title}>
                <Image src={item.src} alt={item.title + ". " + item.caption} width={1600} height={1000} sizes="(max-width: 700px) calc(100vw - 40px), 550px" />
                <span><ArrowUpRight aria-hidden="true" /> {t.fullSize}</span>
              </a>
            )}
            <figcaption><strong>{item.title}</strong><p>{item.caption}</p></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
