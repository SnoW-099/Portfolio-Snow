# Plan de mejora: Snow Dev portfolio (2026-11-15)

Objetivo: que el portfolio sea **realista y competitivo** para conseguir (1) clientes freelance en España y (2) un puesto de desarrollador junior. Este plan está pensado para que otro agente (Fable) lo ejecute fase a fase.

## Reglas para quien ejecute el plan

1. **Nada inventado.** No inventar métricas, clientes, testimonios, años de experiencia ni resultados. Si falta un dato real, deja el hueco detrás de un flag (`if (data) …`) y apúntalo en "Pendiente del usuario". La honestidad ya es la seña de identidad de la web: badges de visibilidad, "AI-assisted" y `scope` en los servicios.
2. **Conserva el sistema visual.** Negro y blanco, Geist y Geist Mono, CSS plano en `app/globals.css` con los tokens de `:root`. Esto es refinar, no rediseñar.
3. Los datos siguen viviendo en `lib/*.ts`. No metas texto fijo en los componentes si ya existe un archivo de datos para eso.
4. Trabaja en una rama (`git switch -c mejora/mercado`). Haz un commit por fase y no hagas push sin permiso.
5. Al cerrar cada fase: `npx tsc --noEmit` y `npm run build` en verde. Revisa también a 390 px y a 1440 px.
6. No añadas dependencias si la plataforma ya lo resuelve (Next metadata, `next/image`, CSS).

## Estado actual (auditoría del 2026-11-15)

| Área | Nota | Hallazgo clave |
|---|---|---|
| Accesibilidad | 3/4 | Skip link, `aria-*` y `reduced-motion` presentes. Los dos avisos de contraste encontrados eran falsos positivos (botón blanco). Falta una prueba completa con teclado y lector de pantalla. |
| Rendimiento | 3/4 | El vídeo de 5,1 MB solo se descarga al pulsar play. Lighthouse no llegó a ejecutarse (permiso denegado): pendiente. |
| Theming | 3/4 | Hay tokens en `:root`. La web solo tiene tema oscuro (decisión de marca, no es un fallo). |
| Responsive | 3/4 | Sin scroll horizontal a 390 px. La etiqueta del hero ocupa dos líneas en móvil. |
| Integridad | 3/4 | El detector de impeccable no encontró nada. La ilustración de StarOptimizer tiene un gran hueco vacío. |
| **Total** | **15/20** | **Bueno.** La base técnica está sólida; lo que falta para competir es **contenido orientado a cliente y SEO**. |

Comprobado: `tsc` limpio, `next build` limpio, consola sin errores, detector `[]`, `scripts/verify-design.cjs` existe.

---

## Fase 0: Decisiones del usuario (CERRADA el 2026-11-15)

- [x] **Email:** `ryze0950@gmail.com` es correcto. No se toca.
- [x] **Dominio:** se queda `portfolio-snow.netlify.app`.
- [x] **Idioma:** sí, versión en español → hacer la tarea 2.8 completa (`/es` + `/en`).
- [x] **Precios:** sí, **bajos**. Usar estos valores orientativos en `lib/services.ts` (el usuario los ajusta ahí):
  - Web Development: landing page **desde 150 €**, web corporativa o portfolio **desde 300 €**
  - Web Applications: **desde 400 €**
  - Automation: bot o script **desde 80 €**
  - Creative Development: **a consultar** (sin cifra)
  - Añadir la nota: "Precio cerrado tras ver el proyecto. Sin sorpresas."
- [x] **Capturas, CV, LinkedIn y testimonios:** se deja todo **como está**. No se añaden capturas nuevas, ni CV, ni LinkedIn, ni sección de testimonios. La 2.6 se resuelve solo con CSS y la 2.7 no se hace.
- [x] **Agenda (Cal.com):** no. El CTA principal lleva a `#contact`.
- [x] **Analítica:** **Umami Cloud** (plan gratis, sin cookies, sin banner). Hacer la tarea 3.3 con Umami, cargándolo solo si existe `NEXT_PUBLIC_UMAMI_WEBSITE_ID`; si la variable falta, no se carga nada. Cuando esté hecho, el usuario crea la cuenta en cloud.umami.is y pega el ID en las variables de entorno de Netlify.

---

## Fase 1: Base técnica y SEO (sin decisiones pendientes, se puede empezar ya)

### 1.1 URL canónica en cada página: P1
- Ahora mismo no hay `<link rel="canonical">` en ninguna ruta (verificado).
- `app/layout.tsx`: `alternates: { canonical: "/" }`. `app/projects/page.tsx`: `"/projects"`. `app/projects/[slug]/page.tsx` → `generateMetadata`: `"/projects/" + slug`.
- **Aceptación:** cada ruta devuelve su canonical absoluta.

### 1.2 Datos estructurados (JSON-LD): P1
- Ahora mismo no hay JSON-LD (verificado).
- En `app/layout.tsx` o `app/page.tsx`, un `<script type="application/ld+json">` con `Person` (name "Angel", alternateName "Snow", `sameAs`: GitHub y X) y `ProfessionalService` (Snow Dev, `areaServed`: España, los servicios de `lib/services.ts`).
- **Aceptación:** el Rich Results Test de Google lo valida sin errores.

### 1.3 Imagen de Open Graph por proyecto: P2
- Todos los proyectos comparten la misma `opengraph-image.png`. Añadir `app/projects/[slug]/opengraph-image.tsx` con `ImageResponse` (de `next/og`, que ya viene con Next): nombre del proyecto, categoría y la marca Snow Dev, en el mismo estilo blanco y negro.
- **Aceptación:** al compartir `/projects/snowtify` aparece su propia tarjeta.

### 1.4 Vídeo del showreel: P2
- `public/showreel/snow-dev.mp4` pesa 5,1 MB. Recodificarlo con ffmpeg (H.264, `-crf 26 -preset slow -movflags +faststart`, 1080p como máximo) y añadir una fuente WebM (VP9 o AV1) con `<source>` en `components/Showreel.tsx`.
- Cambiar `preload="auto"` por `preload="metadata"`: ya se carga solo al pulsar play, así que no rompe nada.
- **Aceptación:** menos de 2,5 MB, se ve igual y empieza a reproducirse en menos de 1 s en local.

### 1.5 Imágenes: P3
- `public/vibe.png` está fuera de la convención `public/projects/<slug>/`. Moverla a `public/projects/vibe/overview.png` y actualizar `lib/projects.ts` y `lib/project-media.ts`.
- `snowtify/overview.png` pesa 552 KB. `next/image` ya la optimiza al servirla, así que basta con comprimir el PNG del repositorio (opcional).

### 1.6 Lighthouse: P1 (medir antes y después)
- `npm run build && npx next start -p 3124`, y después Lighthouse en móvil y en escritorio sobre `/`, `/projects` y `/projects/snowtify`.
- **Objetivo:** Performance ≥ 90 en móvil, y Accessibility, Best Practices y SEO ≥ 95. Guardar las cifras en este archivo.

---

## Fase 2: Contenido que vende (necesita la Fase 0)

Esto es lo que más distancia a un portfolio "bonito" de uno que consigue clientes.

### 2.1 Hero con propuesta clara: P1
- "Building digital experiences." es genérico: lo dicen mil portfolios. Proponer al usuario 2 o 3 alternativas que digan **para quién** y **qué consigue**. Por ejemplo: "Webs y automatizaciones a medida para negocios pequeños en España."
- Hacer que el CTA principal lleve a contacto o a la llamada (si hay agenda). "Explore projects" pasa a ser el secundario.
- En móvil la etiqueta del hero ocupa dos líneas: por debajo de 480 px, quitar el prefijo "Snow Dev —" (`app/page.tsx`, `.hero-kicker`).

### 2.2 Sección "Cómo trabajo" (proceso): P1
- Nueva sección entre Services y Capabilities, con los datos en `lib/process.ts`. Cuatro o cinco pasos: llamada o email → propuesta con alcance y precio → diseño y desarrollo con avances visibles → lanzamiento → soporte.
- Cada paso con un plazo orientativo real (preguntarlo al usuario). Reutilizar el patrón visual de `.service-row` y `.skill-card`, sin inventar componentes nuevos.

### 2.3 Precios orientativos: P1 (decidido)
- Añadir `priceFrom?: string` a `Service` en `lib/services.ts` con los valores de la Fase 0 y mostrarlo en `.service-proof`. Sin cifra, no se muestra nada. Debe existir en ES y en EN.

### 2.4 FAQ: P2
- Entre 5 y 7 preguntas reales: plazos, qué necesito darte, hosting y dominio, mantenimiento, cómo cobras, si usas IA. Hacerlo con `<details>`/`<summary>` nativos, sin JavaScript.
- Añadir también el JSON-LD `FAQPage`.

### 2.5 Casos de estudio más sólidos: P1
- `lib/projects.ts` ya tiene `problem`, `approach` y `learnings`. Añadir `outcome?: string`: el resultado **real**, por ejemplo "usado a diario por X", "N estrellas en GitHub" o "N servidores de Discord". Si no hay dato, el campo no se rellena.
- Añadir **decisiones técnicas** (`decisions?: {title, body}[]`) con 2 o 3 por proyecto. Es lo que más mira un reclutador para un puesto junior.
- Estrellas, forks y última actualización de GitHub: se pueden obtener al hacer la build con `fetch` a la API pública de GitHub y `revalidate`. Si la llamada falla, no se muestra nada.

### 2.6 StarOptimizer sin hueco vacío: P2
- Sin captura nueva (decidido). En `.project-artwork` cambiar `justify-content: space-between` por `flex-start`, con `gap` y `min-height` menores en móvil (`app/globals.css:129`), para que no quede un hueco de unos 300 px.

### 2.7 Vía de empleo junior: NO SE HACE (decidido en la Fase 0)
- En About: botón "Descargar CV (PDF)" (`public/cv-angel.pdf`) y enlace a LinkedIn, solo si el usuario los da.
- En el pie de página: añadir LinkedIn.

### 2.8 Idioma: P1 (decidido: sí)
- Opción ligera sin dependencias: `app/[lang]/` con diccionarios en `lib/i18n/{es,en}.ts`, middleware que detecte `Accept-Language`, `alternates.languages` (hreflang) y un selector ES/EN en `SiteHeader`.
- **Aceptación:** `/es` y `/en` completos, hreflang correcto y el sitemap con las dos versiones.

---

## Fase 3: Conversión y confianza

### 3.1 Formulario: P1
- Comprobar de verdad el envío en un deploy preview de Netlify: tiene que llegar a Forms y al email.
- Revisar en `components/ContactForm.tsx` los estados de enviando, enviado y error (con alternativa por email), y los atributos `required`/`aria-invalid`.
- Cuando el usuario elige "Project type", el placeholder del textarea podría adaptarse a ese tipo (opcional, P3).

### 3.2 Disponibilidad visible: P2
- En el hero, "Disponible para proyectos desde <mes>", con el dato en `lib/profile.ts` (`availableFrom`). El usuario lo actualiza a mano.

### 3.3 Analítica sin cookies: P2 (decidido: Umami Cloud)
- Un solo `<Script defer src="https://cloud.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}>` en `layout.tsx`, renderizado solo si existe la variable. Eventos con `data-umami-event`. Eventos: envío del formulario, play del showreel, clic en el email. Al no usar cookies no hace falta banner.

### 3.4 Navegación: P3
- El menú superior no tiene "Capabilities" pero el pie de página sí. Unificarlo: o se añade arriba o se quita del pie. Recomendación: añadirlo arriba con el texto "Stack".

---

## Fase 4: Pulido visual (impeccable polish)

- Repasar con `/impeccable polish` las secciones nuevas para que encajen con las que ya existen: espaciado, tipografía, `data-reveal` y `reduced-motion`.
- Revisar la animación de aparición al hacer scroll: en capturas de página completa las secciones salen al 20–30 % de opacidad. Confirmar que con JavaScript desactivado o lento **todo se ve** (mejora progresiva en `components/PortfolioMotion.tsx`).
- Ejecutar el detector: `impeccable detect --json app components`.

---

## Fase 5: QA final y lanzamiento

- [ ] `npx tsc --noEmit` y `npm run build` en verde.
- [ ] `node scripts/verify-design.cjs` (instalando antes Playwright en `.artifacts/browser`, como hace el workflow), con las rutas nuevas añadidas a `routes`.
- [ ] Lighthouse: cifras de antes y después en la tabla de abajo.
- [ ] Navegación completa con teclado, VoiceOver o NVDA en hero, menú, formulario y showreel.
- [ ] Probar a 320, 390, 768 y 1440 px, con zoom de texto al 200 % y con `prefers-reduced-motion`.
- [ ] Probar en Safari de iOS (vídeo `playsInline`, fuentes).
- [ ] Enviar el sitemap en Search Console (la verificación ya está puesta).
- [ ] Actualizar `README.md` con las secciones y archivos de datos nuevos.

| Métrica | Antes | Después |
|---|---|---|
| Lighthouse Performance (móvil) | pendiente | |
| Lighthouse Accessibility | pendiente | |
| Lighthouse SEO | pendiente | |
| Peso del showreel | 5,1 MB | |

---

## Orden recomendado

1. Fase 1 completa.
2. Fase 2: 2.1, 2.3, 2.5, 2.2, 2.4, 2.6 y por último 2.8 (el idioma va al final para traducir todo el texto, incluido el nuevo, de una vez).
3. Fase 3, después la 4 y por último la 5.

## Fuera de alcance (a propósito)

- Rediseño completo o cambio de identidad visual.
- CMS o blog: solo merece la pena si el usuario va a escribir con regularidad.
- Modo claro: la marca es oscura. Se podría añadir más adelante, pero no aporta para captar clientes.
- Testimonios o logos de clientes ficticios.
