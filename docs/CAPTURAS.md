# Capturas y vídeos para el portfolio

Las capturas deben mostrar el producto real. No hace falta añadir marcos, sombras, logos ni texto: el portfolio ya se encarga de presentarlas.

## Formato recomendado

- Capturas PNG o WebP, idealmente 1600 × 1000 px (16:10). No deformar la interfaz para alcanzar esa proporción.
- Las capturas de móvil pueden ser verticales: la galería muestra la imagen completa.
- Para demostrar un flujo: MP4 silencioso de 8–15 segundos, 1080p y preferiblemente menos de 8 MB. Mejor que un GIF por calidad, tamaño y controles de reproducción.
- Los vídeos se reproducen manualmente. No hay reproducción automática.
- Usar contenido de demostración: sin contraseñas, correos privados, tokens ni rutas personales.

## Archivos esperados

Se aceptan .webp, .png, .jpg o .jpeg para las imágenes. El ejemplo usa .webp.

| Proyecto | Ruta dentro de public/ | Qué mostrar |
| --- | --- | --- |
| StarOptimizer | projects/staroptimizer/overview.webp | Pantalla principal con un diagnóstico real de ejemplo |
| StarOptimizer | projects/staroptimizer/review.webp | Revisión de una acción y explicación del ajuste exacto |
| StarOptimizer | projects/staroptimizer/restore.webp | Historial y controles de restauración |
| StarOptimizer | projects/staroptimizer/demo.mp4 | Revisar una acción y enseñar la recuperación, si está disponible |
| Snowtify | projects/snowtify/overview.webp | Spotify con el tema Frost aplicado |
| Snowtify | projects/snowtify/doctor.webp | Comando doctor y salida real legible |
| Snowtify | projects/snowtify/repair.webp | Reparación o panel de actualizaciones |
| Snowtify | projects/snowtify/demo.mp4 | Diagnóstico y recuperación de un problema concreto |
| Portfolio | projects/portfolio/overview.webp | La web a ancho de escritorio |
| Portfolio | projects/portfolio/mobile.webp | La web y navegación a 390 px de ancho |
| Portfolio | projects/portfolio/projects.webp | Una tarjeta y/o el case study |
| Vibe | projects/vibe/overview.webp | Dashboard; si falta, se conserva public/vibe.png |
| Vibe | projects/vibe/detail.webp | Una función concreta del dashboard |
| Rez Bot | projects/rez-bot/overview.webp | Un embed o comando; si falta, se conserva public/rez.png |
| Rez Bot | projects/rez-bot/commands.webp | Una interacción real de ejemplo |
| Python Mini Systems | projects/py-mini-systems/overview.webp | La consola con un ejemplo de inventario |
| Python Mini Systems | projects/py-mini-systems/inventory.webp | Crear, buscar y actualizar un producto |

Las carpetas también admiten demo.mp4 para cualquiera de los proyectos.

## Cómo se integran

1. Colocar los archivos en las rutas anteriores.
2. En desarrollo, recargar la página. Para la web publicada, hacer una nueva compilación/despliegue.
3. overview se usa en la portada de la tarjeta y en el case study. Las otras imágenes y el vídeo forman la galería.
4. Si no existe una captura, se mantiene una portada tipográfica etiquetada como Project overview. No se muestra una imagen rota ni una captura inventada.

La detección vive en lib/project-media.ts. Los títulos y pies de foto se pueden ajustar ahí para que describan exactamente lo que se ve.

## Datos que faltan de StarOptimizer

Antes de presentar una afirmación concreta sobre seguridad, confirmar:

- Qué cambios permite la versión actual, sus permisos y límites de restauración.
- Si el instalador está firmado y con qué editor. Una captura de Propiedades → Firmas digitales y la versión del instalador ayudan a documentarlo; la ausencia de la pestaña no debe presentarse como una verificación completa.
- Qué aporta la acción de restaurar y qué no puede deshacer.

La web no promete que modificar Windows sea inocuo ni que el instalador esté firmado sin confirmar ese dato.
