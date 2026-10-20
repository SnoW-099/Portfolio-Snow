import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import SnowLogo from "@/components/SnowLogo"
import RezArtwork from "@/components/RezArtwork"
import PythonArtwork from "@/components/PythonArtwork"
import type { Project } from "@/lib/projects"
import { getProjectCover } from "@/lib/project-media"

export default function ProjectArtwork({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.slug === "rez-bot") return <RezArtwork priority={priority} />
  if (project.slug === "py-mini-systems") return <PythonArtwork />
  const cover = getProjectCover(project)
  if (cover) {
    return (
      <div className={"project-capture capture-" + project.slug}>
        <div className="capture-chrome" aria-hidden="true"><span /><span /><span /><small>{project.name}</small></div>
        <Image className="capture-image" src={cover} alt={project.imageAlt || project.name + " — actual project screenshot"} width={project.imageSize?.[0] || 1600} height={project.imageSize?.[1] || 1000} sizes="(max-width: 700px) calc(100vw - 64px), (max-width: 1200px) 52vw, 620px" priority={priority} />
      </div>
    )
  }
  return (
    <div className={"project-artwork artwork-" + project.slug} aria-label={project.name + ": project overview"}>
      <div className="artwork-top"><span className="artwork-category">{project.eyebrow}</span><ArrowUpRight aria-hidden="true" /></div>
      <div className="artwork-center"><span className="artwork-symbol"><SnowLogo size={80} /></span><strong>{project.name}</strong></div>
      <div className="artwork-bottom"><div className="artwork-highlights">{project.highlights?.map((item) => <span key={item}>{item}</span>)}</div><small>Project overview</small></div>
    </div>
  )
}

