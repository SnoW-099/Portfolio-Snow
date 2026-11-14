import { localize, type L, type Lang, type Resolved } from "@/lib/i18n"

export type Visibility = "public" | "private" | "experimental" | "in-development"

type TitledSource = { title: L; body: L }

type ProjectSource = {
  slug: string
  category: L
  visibility: Visibility
  name: L
  status: L
  eyebrow: L
  role: L
  year: string
  focus: L
  shortDescription: L
  summary: L
  problem: L
  approach: L
  learnings: L
  tags: string[]
  repoUrl?: string
  image?: string
  imageAlt?: L
  imageSize?: [number, number]
  privateRepo?: boolean
  featured?: boolean
  listed?: boolean
  highlights?: L<string[]>
  aiAssisted?: boolean
  aiNote?: L
  liveUrl?: string
  cardNote?: L
  /** The real, checkable result ("used daily by X", "N Discord servers"). Leave it out until there is real data. */
  outcome?: L
  /** Two or three technical decisions and the reason behind each one. */
  decisions?: TitledSource[]
  contributions?: TitledSource[]
  upstream?: { name: string; href: string; description: L }
  safetyNotes?: TitledSource[]
}

export type Project = Resolved<ProjectSource>

const same = (text: string): L => ({ en: text, es: text })

const projects: ProjectSource[] = [
  {
    slug: "py-mini-systems",
    category: { en: "Development Experiments", es: "Experimentos de desarrollo" },
    visibility: "experimental",
    name: same("Python Mini Systems"),
    status: { en: "Learning projects", es: "Proyectos de aprendizaje" },
    eyebrow: { en: "Python fundamentals", es: "Fundamentos de Python" },
    role: { en: "Python development", es: "Desarrollo en Python" },
    year: "2026",
    focus: { en: "Small, practical systems", es: "Sistemas pequeños y prácticos" },
    shortDescription: { en: "Two small Python projects: store inventory management and a registration and login flow with JSON storage.", es: "Dos proyectos pequeños en Python: gestión del inventario de una tienda y un flujo de registro e inicio de sesión con almacenamiento en JSON." },
    summary: { en: "A collection of small backend exercises that turn Python fundamentals into runnable systems. Mini Store handles products and discounts; Mini Users explores registration, login, and JSON persistence.", es: "Una colección de pequeños ejercicios de backend que convierten los fundamentos de Python en sistemas que se pueden ejecutar. Mini Store gestiona productos y descuentos; Mini Users explora el registro, el inicio de sesión y la persistencia en JSON." },
    problem: { en: "Learning syntax is only a starting point. Small complete workflows make it easier to practice data handling and program structure.", es: "Aprender la sintaxis es solo el principio. Con flujos pequeños pero completos es más fácil practicar el manejo de datos y la estructura de un programa." },
    approach: { en: "I kept each system small and runnable on its own, covering product creation, search, deletion, discounts, and a separate user flow.", es: "Mantuve cada sistema pequeño y ejecutable por separado: creación, búsqueda y borrado de productos, descuentos y un flujo de usuarios independiente." },
    learnings: { en: "These are learning exercises in Python, data structures, and persistence. The login exercise is not presented as a production authentication service.", es: "Son ejercicios de aprendizaje de Python, estructuras de datos y persistencia. El ejercicio de inicio de sesión no se presenta como un servicio de autenticación para producción." },
    tags: ["Python", "JSON", "CLI"],
    repoUrl: "https://github.com/SnoW-099/py-mini-systems",
    image: "/projects/py-mini-systems/overview.png",
    imageAlt: { en: "Python Mini Systems introduction: Python exercises for logic, file handling and simple interfaces.", es: "Introducción de Python Mini Systems: ejercicios de Python de lógica, manejo de archivos e interfaces sencillas." },
    imageSize: [840, 139],
    highlights: { en: ["Inventory", "Users", "Persistence"], es: ["Inventario", "Usuarios", "Persistencia"] },
    decisions: [
      { title: { en: "Two programs, not one", es: "Dos programas, no uno" }, body: { en: "Each system runs on its own, so every exercise can be read and tested without the other.", es: "Cada sistema se ejecuta por separado, así cada ejercicio se puede leer y probar sin el otro." } },
      { title: { en: "JSON instead of a database", es: "JSON en lugar de una base de datos" }, body: { en: "A JSON file is enough to practice saving and loading data without adding a server to a learning exercise.", es: "Un archivo JSON basta para practicar cómo guardar y cargar datos sin añadir un servidor a un ejercicio de aprendizaje." } },
      { title: { en: "A login that says what it is", es: "Un login que dice lo que es" }, body: { en: "The registration and login flow is labeled as practice, not as authentication ready for production.", es: "El flujo de registro e inicio de sesión se presenta como práctica, no como autenticación lista para producción." } },
    ],
  },
  {
    slug: "snowtify",
    category: { en: "Software / Open Source", es: "Software / Código abierto" },
    visibility: "public",
    name: same("Snowtify"),
    status: { en: "Public", es: "Público" },
    eyebrow: { en: "Spotify customization", es: "Personalización de Spotify" },
    role: { en: "Fork maintenance & custom features", es: "Mantenimiento del fork y funciones propias" },
    year: "2026",
    focus: { en: "Compatibility & recovery", es: "Compatibilidad y recuperación" },
    shortDescription: { en: "A stability-focused fork of Spicetify with diagnostic commands, repair tools, update checks, and the Snowtify Frost theme.", es: "Un fork de Spicetify centrado en la estabilidad, con comandos de diagnóstico, herramientas de reparación, comprobación de actualizaciones y el tema Snowtify Frost." },
    summary: { en: "Snowtify builds on the open-source Spicetify CLI to customize the official Spotify desktop client. My additions focus on diagnosing problems, recovering customization after updates, and making maintenance easier.", es: "Snowtify parte de Spicetify CLI, un proyecto de código abierto, para personalizar el cliente oficial de Spotify para escritorio. Mis aportaciones se centran en diagnosticar problemas, recuperar la personalización tras las actualizaciones y facilitar el mantenimiento." },
    problem: { en: "Spotify updates can disrupt customization. Users need a clear way to inspect problems and recover while keeping their existing themes and extensions.", es: "Las actualizaciones de Spotify pueden romper la personalización. Hace falta una forma clara de ver qué falla y de recuperarla sin perder los temas y extensiones que ya se tenían." },
    approach: { en: "I added doctor, repair, and logs commands, an update panel, and the Frost theme. The fork preserves Spicetify's JavaScript API and configuration layout to stay compatible with its ecosystem.", es: "Añadí los comandos doctor, repair y logs, un panel de actualizaciones y el tema Frost. El fork conserva la API de JavaScript y la estructura de configuración de Spicetify para seguir siendo compatible con su ecosistema." },
    learnings: { en: "Maintaining a fork means balancing new features with upstream compatibility. Snowtify is derived from spicetify/cli and retains its LGPL-2.1 license; the underlying customization engine is upstream work.", es: "Mantener un fork es equilibrar las funciones nuevas con la compatibilidad con el proyecto original. Snowtify deriva de spicetify/cli y conserva su licencia LGPL-2.1; el motor de personalización es trabajo del proyecto original." },
    tags: ["Go", "JavaScript", "CSS"],
    repoUrl: "https://github.com/SnoW-099/snowtify",
    image: "/projects/snowtify/overview.png",
    imageAlt: { en: "Snowtify website showing its introduction, documentation and download links, and a Spotify customization preview.", es: "Web de Snowtify con su presentación, los enlaces a la documentación y a la descarga, y una vista previa de Spotify personalizado." },
    imageSize: [1372, 963],
    featured: true,
    highlights: { en: ["Doctor", "Repair", "Frost"], es: ["Doctor", "Repair", "Frost"] },
    cardNote: { en: "Based on Spicetify. My additions focus on diagnosis, repair and the Frost theme.", es: "Basado en Spicetify. Mis aportaciones se centran en el diagnóstico, la reparación y el tema Frost." },
    decisions: [
      { title: { en: "Keep the upstream API", es: "Conservar la API original" }, body: { en: "The fork keeps Spicetify's JavaScript API and configuration layout, so existing themes and extensions keep working.", es: "El fork mantiene la API de JavaScript y la estructura de configuración de Spicetify, para que los temas y extensiones existentes sigan funcionando." } },
      { title: { en: "Diagnose before repairing", es: "Diagnosticar antes de reparar" }, body: { en: "doctor and logs only inspect; repair is a separate command, so you can see the problem before anything changes.", es: "doctor y logs solo inspeccionan; repair es un comando aparte, así puedes ver el problema antes de que cambie nada." } },
      { title: { en: "Same license as the original", es: "La misma licencia que el original" }, body: { en: "Snowtify retains the LGPL-2.1 license of spicetify/cli and credits it as the engine underneath.", es: "Snowtify conserva la licencia LGPL-2.1 de spicetify/cli y lo reconoce como el motor que hay debajo." } },
    ],
    contributions: [
      { title: { en: "Doctor & logs", es: "Doctor y logs" }, body: { en: "Diagnostic commands to inspect customization problems and collect information for troubleshooting.", es: "Comandos de diagnóstico para inspeccionar los problemas de personalización y reunir información para resolverlos." } },
      { title: { en: "Repair workflow", es: "Flujo de reparación" }, body: { en: "Repair tools aimed at recovering customization after a Spotify update disrupts it.", es: "Herramientas de reparación pensadas para recuperar la personalización cuando una actualización de Spotify la rompe." } },
      { title: { en: "Updates & Frost", es: "Actualizaciones y Frost" }, body: { en: "An update panel and the Snowtify Frost theme, while keeping the upstream API and configuration layout.", es: "Un panel de actualizaciones y el tema Snowtify Frost, manteniendo la API y la estructura de configuración originales." } },
    ],
    upstream: { name: "Spicetify CLI", href: "https://github.com/spicetify/cli", description: { en: "The underlying customization engine and JavaScript API come from Spicetify. Snowtify is a fork, not a customization engine written from scratch.", es: "El motor de personalización y la API de JavaScript vienen de Spicetify. Snowtify es un fork, no un motor de personalización escrito desde cero." } },
  },
  {
    slug: "portfolio",
    category: { en: "Websites", es: "Páginas web" },
    visibility: "public",
    name: { en: "Snow Dev website", es: "Web de Snow Dev" },
    status: { en: "This website", es: "Esta web" },
    eyebrow: { en: "Brand website", es: "Web de marca" },
    role: { en: "Visual direction & AI-assisted development", es: "Dirección visual y desarrollo con ayuda de IA" },
    year: "2026",
    focus: { en: "Responsive interfaces & clear project stories", es: "Interfaces adaptables y proyectos bien explicados" },
    shortDescription: { en: "The Snow Dev website. A black-and-white, responsive site that presents services, projects and capabilities, with an honest look at the work behind them.", es: "La web de Snow Dev. Un sitio adaptable, en blanco y negro, que presenta servicios, proyectos y capacidades, con una mirada honesta al trabajo que hay detrás." },
    summary: { en: "Snow Dev is the independent brand I build under; Snow is my online identity and Angel is my name. The site brings services and projects together and makes the level of experience behind them clear, including where I use AI to help build.", es: "Snow Dev es la marca independiente con la que trabajo; Snow es mi identidad en internet y Angel es mi nombre. La web reúne servicios y proyectos y deja claro el nivel de experiencia que hay detrás, incluido dónde uso IA para construir." },
    problem: { en: "A portfolio needs to communicate what I am building without confusing a project's technology list with independent proficiency in every tool.", es: "Un portfolio tiene que contar lo que construyo sin confundir la lista de tecnologías de un proyecto con dominar por mi cuenta cada herramienta." },
    approach: { en: "I used AI to help implement a Next.js and React site with a black-and-white palette, responsive layouts, keyboard-friendly navigation and motion that respects reduced-motion preferences.", es: "Usé IA para ayudarme a implementar un sitio en Next.js y React con una paleta en blanco y negro, diseño adaptable, navegación cómoda con teclado y animación que respeta la preferencia de movimiento reducido." },
    learnings: { en: "This is a vibe-coded project and part of my learning process. It is a place to practice reading generated code, refining layouts and explaining the choices behind the interface.", es: "Es un proyecto hecho con vibe coding y forma parte de mi aprendizaje. Me sirve para practicar la lectura de código generado, afinar los diseños y explicar las decisiones que hay detrás de la interfaz." },
    tags: ["Next.js", "React", "TypeScript", "CSS"],
    repoUrl: "https://github.com/SnoW-099/Portfolio-Snow",
    liveUrl: "/",
    listed: false,
    aiAssisted: true,
    aiNote: { en: "Vibe-coded with AI assistance. I set the visual direction, choose the content and refine the result while continuing to learn the underlying web stack.", es: "Hecho con vibe coding y ayuda de IA. Yo marco la dirección visual, elijo el contenido y afino el resultado mientras sigo aprendiendo las tecnologías web que hay debajo." },
    highlights: { en: ["Responsive", "Accessible motion", "Clear content"], es: ["Adaptable", "Animación accesible", "Contenido claro"] },
    decisions: [
      { title: { en: "One CSS file with tokens", es: "Un solo CSS con tokens" }, body: { en: "Colors, type and easing live as variables in one stylesheet, with no component library, so the black-and-white system stays consistent.", es: "Los colores, la tipografía y las curvas de animación son variables en una sola hoja de estilos, sin librería de componentes, para que el sistema en blanco y negro sea coherente." } },
      { title: { en: "Motion without a library", es: "Animación sin librerías" }, body: { en: "Animations use CSS and a small observer script. The content is visible without JavaScript and all motion stops with reduced-motion settings.", es: "Las animaciones usan CSS y un pequeño script observador. El contenido se ve sin JavaScript y todo el movimiento se detiene con la preferencia de movimiento reducido." } },
      { title: { en: "Content as data, in two languages", es: "Contenido como datos, en dos idiomas" }, body: { en: "Projects, services and prices live in data files with Spanish and English side by side, and the pages are generated from them with no translation dependency.", es: "Los proyectos, los servicios y los precios viven en archivos de datos con el español y el inglés juntos, y las páginas se generan a partir de ellos sin ninguna dependencia de traducción." } },
    ],
  },
  {
    slug: "vibe",
    category: { en: "Web Applications", es: "Aplicaciones web" },
    visibility: "private",
    name: same("Vibe"),
    status: { en: "Private project", es: "Proyecto privado" },
    privateRepo: true,
    eyebrow: { en: "Developer dashboard", es: "Panel para desarrollo" },
    role: { en: "Frontend development & UI", es: "Desarrollo frontend e interfaz" },
    year: "2025",
    focus: { en: "Personal productivity", es: "Productividad personal" },
    shortDescription: { en: "A focused dashboard for snippets, links, notes, and quick actions I use while building.", es: "Un panel para los fragmentos de código, enlaces, notas y acciones rápidas que uso mientras desarrollo." },
    summary: { en: "Vibe started as a way to stop losing useful snippets and links across tabs, chats, and random files. The goal was to keep everyday developer tools in one place and make the interface feel fast, calm, and easy to scan.", es: "Vibe empezó como una forma de dejar de perder fragmentos de código y enlaces útiles entre pestañas, chats y archivos sueltos. El objetivo era tener las herramientas de cada día en un solo sitio, con una interfaz rápida, tranquila y fácil de recorrer con la vista." },
    problem: { en: "My workflow was fragmented. Notes lived in one place, snippets in another, and useful links disappeared after a few days.", es: "Mi forma de trabajar estaba fragmentada. Las notas estaban en un sitio, los fragmentos de código en otro, y los enlaces útiles desaparecían a los pocos días." },
    approach: { en: "I designed a compact interface with clear grouping, fast access to frequent actions, and a visual hierarchy that keeps the important things visible first.", es: "Diseñé una interfaz compacta con grupos claros, acceso rápido a las acciones frecuentes y una jerarquía visual que deja a la vista primero lo importante." },
    learnings: { en: "This project pushed me to think more carefully about layout, pacing, and how a product can feel lightweight without feeling empty.", es: "Este proyecto me obligó a pensar mejor en la composición, en el ritmo y en cómo un producto puede resultar ligero sin parecer vacío." },
    tags: ["React", "Vite", "CSS"],
    image: "/projects/vibe/overview.png",
    imageAlt: { en: "Vibe dashboard with its sidebar, task list, time and weather widgets.", es: "Panel de Vibe con su barra lateral, la lista de tareas y los widgets de hora y tiempo." },
    imageSize: [2878, 1546],
    featured: true,
    decisions: [
      { title: { en: "One place instead of many", es: "Un solo sitio en lugar de muchos" }, body: { en: "Snippets, links and notes share one dashboard, because the original problem was having them scattered.", es: "Los fragmentos de código, los enlaces y las notas comparten un mismo panel, porque el problema de partida era tenerlos repartidos." } },
      { title: { en: "Frequent actions first", es: "Lo frecuente, primero" }, body: { en: "The layout gives the most used actions the shortest path and keeps the rest grouped out of the way.", es: "La composición da el camino más corto a las acciones más usadas y deja el resto agrupado sin estorbar." } },
    ],
  },
  {
    slug: "rez-bot",
    category: { en: "Automation / Development", es: "Automatización / Desarrollo" },
    visibility: "public",
    name: same("Rez Bot"),
    status: { en: "Active", es: "Activo" },
    eyebrow: { en: "Discord bot", es: "Bot de Discord" },
    role: { en: "Python development", es: "Desarrollo en Python" },
    year: "2025",
    focus: { en: "Community automation", es: "Automatización para comunidades" },
    shortDescription: { en: "A Python Discord bot with economy commands, embeds, and persistent balances.", es: "Un bot de Discord en Python con comandos de economía, mensajes enriquecidos y saldos que se conservan." },
    summary: { en: "Rez Bot is a practical bot project where I explored structure, persistence, and the day-to-day realities of keeping a community tool understandable as features grow.", es: "Rez Bot es un proyecto práctico en el que exploré la estructura, la persistencia y lo que supone en el día a día que una herramienta para comunidades siga entendiéndose cuando crecen sus funciones." },
    problem: { en: "Discord bots can become messy very quickly when new commands are added without a clear structure or reusable patterns.", es: "Un bot de Discord se desordena muy rápido cuando se añaden comandos sin una estructura clara ni patrones reutilizables." },
    approach: { en: "I separated responsibilities, kept commands easier to read, and treated persistence as a first-class concern instead of an afterthought.", es: "Separé responsabilidades, hice los comandos más fáciles de leer y traté la persistencia como algo central, no como un añadido de última hora." },
    learnings: { en: "I improved the way I think about maintainability, command flows, and building something small that can still evolve without collapsing under its own weight.", es: "Mejoré mi forma de pensar en el mantenimiento, en los flujos de comandos y en cómo construir algo pequeño que pueda crecer sin venirse abajo por su propio peso." },
    tags: ["Python", "Discord.py", "JSON"],
    repoUrl: "https://github.com/SnoW-099/Rez",
    image: "/projects/rez-bot/overview.png",
    featured: true,
    decisions: [
      { title: { en: "Commands split by responsibility", es: "Comandos separados por responsabilidad" }, body: { en: "Each kind of command is kept apart, so adding one does not mean touching the others.", es: "Cada tipo de comando va por separado, así añadir uno no obliga a tocar los demás." } },
      { title: { en: "Persistence from the start", es: "Persistencia desde el principio" }, body: { en: "Balances are saved to JSON so they survive a restart, instead of adding storage after the commands existed.", es: "Los saldos se guardan en JSON para que sobrevivan a un reinicio, en lugar de añadir el almacenamiento cuando los comandos ya existían." } },
    ],
  },
  {
    slug: "staroptimizer",
    category: { en: "Desktop Applications", es: "Aplicaciones de escritorio" },
    visibility: "in-development",
    name: same("StarOptimizer"),
    status: { en: "Active development", es: "En desarrollo activo" },
    eyebrow: { en: "Windows desktop app", es: "Aplicación de escritorio para Windows" },
    role: { en: "AI-assisted development & interface direction", es: "Desarrollo con ayuda de IA y dirección de la interfaz" },
    year: "2026",
    focus: { en: "Local diagnostics & reversible settings", es: "Diagnóstico local y ajustes reversibles" },
    shortDescription: { en: "A Windows desktop app in active development, exploring local diagnostics, CPU and RAM measurements, and reversible settings.", es: "Una aplicación de escritorio para Windows en desarrollo activo, que explora el diagnóstico local, las mediciones de CPU y RAM y los ajustes reversibles." },
    summary: { en: "StarOptimizer 2.0 is in active development. It brings local diagnostics, prioritized recommendations, and a guided tune-up workflow into one desktop interface, with measurements and a persistent history for restoring supported changes. Windows validation is still in progress.", es: "StarOptimizer 2.0 está en desarrollo activo. Reúne en una sola interfaz de escritorio el diagnóstico local, recomendaciones ordenadas por prioridad y una puesta a punto guiada, con mediciones y un historial persistente para restaurar los cambios compatibles. La validación en Windows sigue en curso." },
    problem: { en: "It is hard to assess a system tweak without a baseline, a clear explanation of what changes, and a way to restore the original settings.", es: "Es difícil valorar un ajuste del sistema sin una medición de partida, una explicación clara de qué cambia y una forma de restaurar la configuración original." },
    approach: { en: "The app separates analysis, measurement, review, and application. It saves original values before a change, verifies the result, and keeps recovery available across restarts. Nova, a small animated companion, gives the diagnostic workflow a visual identity.", es: "La aplicación separa el análisis, la medición, la revisión y la aplicación. Guarda los valores originales antes de un cambio, verifica el resultado y mantiene la recuperación disponible entre reinicios. Nova, una pequeña mascota animada, da identidad visual al proceso de diagnóstico." },
    learnings: { en: "This project brings together desktop interfaces, Windows integration, persistent recovery, and testing. Measurements describe observed CPU and RAM usage rather than promising an FPS or speed increase.", es: "Este proyecto junta interfaces de escritorio, integración con Windows, recuperación persistente y pruebas. Las mediciones describen el uso de CPU y RAM observado; no prometen más FPS ni más velocidad." },
    tags: ["Electron", "JavaScript", "PowerShell"],
    repoUrl: "https://github.com/Orvyn-Studios/StarOptimizer/tree/feature/orvyn-staroptimizer-2",
    featured: true,
    highlights: { en: ["Measure", "Review", "Restore"], es: ["Medir", "Revisar", "Restaurar"] },
    aiAssisted: true,
    aiNote: { en: "Built with AI assistance (vibe coding). I guide the scope and interface while continuing to learn JavaScript, Electron and the code behind the app.", es: "Hecho con ayuda de IA (vibe coding). Yo marco el alcance y la interfaz mientras sigo aprendiendo JavaScript, Electron y el código que hay detrás de la aplicación." },
    cardNote: { en: "Version 2.0 in development · Windows validation is still in progress.", es: "Versión 2.0 en desarrollo · La validación en Windows sigue en curso." },
    decisions: [
      { title: { en: "Four separate stages", es: "Cuatro fases separadas" }, body: { en: "Analysis, measurement, review and application are different steps, so nothing changes before you have read what it does.", es: "El análisis, la medición, la revisión y la aplicación son pasos distintos, así nada cambia antes de que hayas leído qué hace." } },
      { title: { en: "Save before changing", es: "Guardar antes de cambiar" }, body: { en: "The original value is stored before each supported change and the history survives restarts, so restoring does not depend on the same session.", es: "El valor original se guarda antes de cada cambio compatible y el historial sobrevive a los reinicios, así restaurar no depende de la misma sesión." } },
      { title: { en: "Measurements, not promises", es: "Mediciones, no promesas" }, body: { en: "The app reports observed CPU and RAM usage instead of claiming an FPS or speed gain it cannot guarantee.", es: "La aplicación muestra el uso de CPU y RAM observado en lugar de anunciar una mejora de FPS o de velocidad que no puede garantizar." } },
    ],
    safetyNotes: [
      { title: { en: "Review the source", es: "Revisa el código" }, body: { en: "The public repository lets you inspect the implementation. Source availability is not a guarantee that an action is risk-free.", es: "El repositorio público te permite inspeccionar la implementación. Que el código esté disponible no garantiza que una acción esté libre de riesgo." } },
      { title: { en: "Supported recovery", es: "Recuperación compatible" }, body: { en: "The project includes a history of supported changes and restore actions. Check the restore behavior for the specific action and release before changing your system.", es: "El proyecto incluye un historial de cambios compatibles y acciones para restaurarlos. Comprueba cómo se restaura la acción y la versión concretas antes de cambiar tu sistema." } },
      { title: { en: "What changes", es: "Qué cambia" }, body: { en: "Local diagnostics and supported Windows configuration changes. Check the repository for the exact settings and permissions of the release you install.", es: "Diagnóstico local y cambios compatibles en la configuración de Windows. Consulta en el repositorio los ajustes y permisos exactos de la versión que instales." } },
      { title: { en: "Installer publisher", es: "Editor del instalador" }, body: { en: "Installer signing has not been confirmed here. Check the Windows publisher details and the release information before running it.", es: "Aquí no se ha confirmado la firma del instalador. Comprueba los datos del editor en Windows y la información de la versión antes de ejecutarlo." } },
    ],
  },
]

const visibilityLabels: Record<Visibility, L> = {
  public: { en: "Public", es: "Público" },
  private: { en: "Private", es: "Privado" },
  experimental: { en: "Experimental", es: "Experimental" },
  "in-development": { en: "In development", es: "En desarrollo" },
}

export const projectSlugs = projects.map((project) => project.slug)
/** Slugs that may be indexed and listed in the sitemap. */
export const publicSlugs = projects.filter((project) => project.listed !== false && project.visibility !== "private").map((project) => project.slug)

export const getVisibilityLabels = (lang: Lang) => localize(visibilityLabels, lang)
export const getProjects = (lang: Lang): Project[] => localize(projects, lang)
export const getVisibleProjects = (lang: Lang) => getProjects(lang).filter((project) => project.listed !== false)
export const getFeaturedProjects = (lang: Lang) => getVisibleProjects(lang).filter((project) => project.featured)
export const getProjectBySlug = (slug: string, lang: Lang) => getProjects(lang).find((project) => project.slug === slug)
