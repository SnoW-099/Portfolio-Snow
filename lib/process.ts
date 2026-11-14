import { localize, type L, type Lang } from "@/lib/i18n"

/** How a project goes, step by step. `time` is a real, typical duration: leave it out until you know it and nothing is shown. */
type StepSource = { title: L; body: L; time?: L }

const steps: StepSource[] = [
  {
    title: { en: "First contact", es: "Primer contacto" },
    body: { en: "You tell me the idea through the form or by email. I ask whatever I need to understand it.", es: "Me cuentas la idea por el formulario o por email. Te pregunto lo que necesite para entenderla." },
  },
  {
    title: { en: "Proposal", es: "Propuesta" },
    body: { en: "You get the scope in writing: what is included, what is not, and a fixed price.", es: "Recibes el alcance por escrito: qué incluye, qué no incluye y un precio cerrado." },
  },
  {
    title: { en: "Design and build", es: "Diseño y desarrollo" },
    body: { en: "I build it in visible steps, so you can see progress and correct the course early.", es: "Lo construyo en pasos visibles, para que veas el avance y puedas corregir el rumbo pronto." },
  },
  {
    title: { en: "Launch", es: "Lanzamiento" },
    body: { en: "We check it together on phone and desktop, and I put it online.", es: "Lo revisamos juntos en móvil y en ordenador, y lo publico." },
  },
  {
    title: { en: "Support", es: "Soporte" },
    body: { en: "After the launch I'm still at the same email for fixes and questions.", es: "Después del lanzamiento sigo en el mismo email para arreglos y dudas." },
  },
]

export const getProcess = (lang: Lang) => localize(steps, lang)
