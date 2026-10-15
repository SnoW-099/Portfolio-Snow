import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import { getProjectCover, getProjectMedia } from "@/lib/project-media"

export default function ProjectMediaGallery({ project }: { project: Project }) {
  const media = getProjectMedia(project)
  if (media.length === 0) return null
  return (
    <section className="project-gallery shell" aria-labelledby="gallery-title">
      <header className="gallery-heading" data-reveal><span className="eyebrow">A closer look</span><h2 id="gallery-title">See it in use.</h2></header>
      <div className="gallery-grid">
        {media.map((item) => (
          <figure className={"gallery-item gallery-item-" + item.kind} key={item.src} data-reveal>
            {item.kind === "video" ? (
              <video controls playsInline preload="none" poster={getProjectCover(project)} aria-label={project.name + ": " + item.title}>
                <source src={item.src} type="video/mp4" />
                <a href={item.src}>Download the walkthrough</a>
              </video>
            ) : (
              <a className="gallery-image-link" href={item.src} target="_blank" rel="noreferrer" aria-label={"Open full-size image: " + item.title}>
                <Image src={item.src} alt={item.title + ". " + item.caption} width={1600} height={1000} sizes="(max-width: 700px) calc(100vw - 40px), 550px" />
                <span><ArrowUpRight aria-hidden="true" /> Full size</span>
              </a>
            )}
            <figcaption><strong>{item.title}</strong><p>{item.caption}</p></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
