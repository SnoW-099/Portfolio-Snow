import { localize, type L, type Lang } from "@/lib/i18n"

/** Frequent questions. Answers describe how Snow Dev really works: change them here if the way of working changes. */
const faq: { q: L; a: L }[] = [
  {
    q: { en: "How long does a project take?", es: "¿Cuánto tarda un proyecto?" },
    a: { en: "It depends on the scope. Before starting, the proposal gives you a delivery date in writing, next to the price.", es: "Depende del alcance. Antes de empezar, la propuesta te da una fecha de entrega por escrito, junto al precio." },
  },
  {
    q: { en: "What do you need from me?", es: "¿Qué necesitas de mí?" },
    a: { en: "What you want to build and for whom, your texts and images if you have them, and one or two examples you like. If something is missing, we work it out together.", es: "Qué quieres hacer y para quién, tus textos e imágenes si los tienes, y uno o dos ejemplos que te gusten. Si falta algo, lo resolvemos juntos." },
  },
  {
    q: { en: "How much does it cost?", es: "¿Cuánto cuesta?" },
    a: { en: "Each service shows a starting price. Once I've seen your project you get a fixed price, with no surprises afterwards.", es: "Cada servicio muestra un precio de partida. Cuando veo tu proyecto recibes un precio cerrado, sin sorpresas después." },
  },
  {
    q: { en: "What about hosting and the domain?", es: "¿Y el hosting y el dominio?" },
    a: { en: "I help you choose and set them up, and they stay in your name. This site, for example, is hosted on Netlify.", es: "Te ayudo a elegirlos y a configurarlos, y quedan a tu nombre. Esta web, por ejemplo, está alojada en Netlify." },
  },
  {
    q: { en: "What happens after the launch?", es: "¿Qué pasa después del lanzamiento?" },
    a: { en: "I'm still at the same email for fixes and questions. New features are quoted separately, with the same fixed-price approach.", es: "Sigo en el mismo email para arreglos y dudas. Las funciones nuevas se presupuestan aparte, con el mismo sistema de precio cerrado." },
  },
  {
    q: { en: "Do you use AI?", es: "¿Usas IA?" },
    a: { en: "Yes, and openly. I use AI as a tool while I build and learn, and each project on this site says where it helped. I decide the scope, review the result and answer for it.", es: "Sí, y abiertamente. Uso la IA como herramienta mientras construyo y aprendo, y cada proyecto de esta web indica dónde ha ayudado. Yo decido el alcance, reviso el resultado y respondo por él." },
  },
]

export const getFaq = (lang: Lang) => localize(faq, lang)
