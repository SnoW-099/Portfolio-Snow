import { existsSync } from "node:fs"
import path from "node:path"
import type { Project } from "@/lib/projects"
import type { L, Lang } from "@/lib/i18n"

export type ProjectMedia = { src: string; title: string; caption: string; kind: "image" | "video" }

/** Optional screenshots. A shot only appears when its file exists in public/projects/<slug>/ (see docs/CAPTURAS.md). */
const shots: Record<string, { file: string; title: L; caption: L }[]> = {
  staroptimizer: [
    { file: "review", title: { en: "Before a change", es: "Antes de un cambio" }, caption: { en: "The action review screen, showing the setting and its explanation.", es: "La pantalla de revisión de una acción, con el ajuste y su explicación." } },
    { file: "restore", title: { en: "The recovery workflow", es: "El flujo de recuperación" }, caption: { en: "The supported change history and restore controls.", es: "El historial de cambios compatibles y los controles para restaurarlos." } },
  ],
  snowtify: [
    { file: "doctor", title: { en: "Diagnosing a problem", es: "Diagnosticar un problema" }, caption: { en: "The diagnostic command and its actual output.", es: "El comando de diagnóstico y su salida real." } },
    { file: "repair", title: { en: "The repair workflow", es: "El flujo de reparación" }, caption: { en: "The repair command or update panel in use.", es: "El comando de reparación o el panel de actualizaciones en uso." } },
  ],
  portfolio: [
    { file: "mobile", title: { en: "On a smaller screen", es: "En una pantalla pequeña" }, caption: { en: "The mobile layout and navigation.", es: "El diseño y la navegación en móvil." } },
    { file: "projects", title: { en: "The project stories", es: "Las historias de los proyectos" }, caption: { en: "The work section and its case studies.", es: "La sección de proyectos y sus casos de estudio." } },
  ],
  vibe: [{ file: "detail", title: { en: "Inside the dashboard", es: "Dentro del panel" }, caption: { en: "A closer look at the dashboard.", es: "El panel visto más de cerca." } }],
  "rez-bot": [{ file: "commands", title: { en: "Commands in use", es: "Comandos en uso" }, caption: { en: "A real command and its response.", es: "Un comando real y su respuesta." } }],
  "py-mini-systems": [{ file: "inventory", title: { en: "The inventory workflow", es: "El flujo del inventario" }, caption: { en: "Creating, finding and updating a product from the terminal.", es: "Crear, buscar y actualizar un producto desde la terminal." } }],
}

const walkthrough = {
  title: { en: "A short walkthrough", es: "Un recorrido breve" },
  caption: { en: "A recording of the actual project in use.", es: "Una grabación del proyecto real en uso." },
}

function publicFile(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.slice(1)))
}

function findImage(base: string) {
  return ["webp", "png", "jpg", "jpeg"].map((extension) => base + "." + extension).find(publicFile)
}

export function getProjectCover(project: Project) {
  return findImage("/projects/" + project.slug + "/overview") || (project.image && publicFile(project.image) ? project.image : undefined)
}

export function getProjectMedia(project: Project, lang: Lang): ProjectMedia[] {
  const base = "/projects/" + project.slug + "/"
  const images = (shots[project.slug] || []).flatMap((shot): ProjectMedia[] => {
    const src = findImage(base + shot.file)
    return src ? [{ src, title: shot.title[lang], caption: shot.caption[lang], kind: "image" }] : []
  })
  if (publicFile(base + "demo.mp4")) images.unshift({ src: base + "demo.mp4", title: walkthrough.title[lang], caption: walkthrough.caption[lang], kind: "video" })
  return images
}
