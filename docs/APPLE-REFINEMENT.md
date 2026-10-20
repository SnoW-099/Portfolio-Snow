# Refinamiento visual del portfolio

## Cambios

- Portada con presentación personal y accesos a los tres proyectos destacados.
- Tarjetas con identidad cromática propia y datos de `featuredProjects`.
- StarOptimizer ocupa la primera fila de proyectos; los otros dos comparten la siguiente en escritorio.
- Navegación flotante translúcida, con menú desplegable en móvil.
- Texto de lectura más grande y una invitación concreta al contacto.
- Tarjetas de proyectos apiladas en tablet y móvil; accesos de portada compactos en móvil.

Se mantienen los enlaces, las páginas de detalle y las indicaciones de trabajo con IA. Las tarjetas de portada son identidades de proyecto, no capturas de sus interfaces.

## Identidad Snow

La cabecera, la presentación, los accesos a proyectos y las ilustraciones sin captura usan el logo original de `public/logo.jpg`, también presente en el archivo y los casos de estudio. `SnowLogo` centraliza ese recurso; no se generan monogramas ni se sustituyen por símbolos genéricos. El favicon ya apunta al mismo archivo.

## Arrancar y comprobar

Desde la carpeta del proyecto:

```bash
npm ci
npm run dev
```

Abrir `http://localhost:3000`. Para comprobar TypeScript y la compilación de producción:

```bash
npx --no-install tsc --noEmit
npm run build
```

Revisar la portada a 360, 768 y 1440 px, los enlaces de los proyectos y el correo. Usar Tab para recorrer los controles y Escape para cerrar el menú móvil. Activar la preferencia del sistema para reducir movimiento y comprobar que no se animan las tarjetas.

## Estado de verificación

Validado el 20 de octubre de 2026 antes de integrar en Main:

- `npm ci --no-audit --no-fund`: dependencias instaladas.
- `npx --no-install tsc --noEmit`: sin errores de tipos.
- `npm run build`: compilación de producción correcta; 11 páginas generadas.
- `git diff --check`: sin errores de formato.

Queda pendiente la revisión visual en navegador a los tamaños indicados arriba.

La conexión de red ya permite recuperar el historial original con Git. La copia de trabajo está en `~/Documentos/proyectos/github/Portfolio-Snow`.
