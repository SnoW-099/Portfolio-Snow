# Siguiente proyecto: Mini Store, llevado a la web

## Qué aportaría

Convertir el ejercicio de inventario en una aplicación web desplegada permitiría mostrar un recorrido completo: interfaz, validación, servidor, base de datos, permisos y una demo utilizable. Es más fácil explicar un proyecto pequeño que entiendes que una aplicación enorme hecha con herramientas que aún no puedes defender.

## Propuesta

Un inventario para una tienda pequeña: productos, categorías, movimientos de stock, filtros y avisos de existencias bajas. El diseño puede seguir el estilo simple de Snow, con estados vacíos y formularios claros.

## Tecnología y alcance

Por tu base en Python, una opción es Django con sus plantillas HTML, CSS y una base relacional. Empieza con SQLite en desarrollo y prepara PostgreSQL para la versión publicada. No necesitas añadir React al principio: puedes practicar JavaScript con un filtro, una confirmación o una mejora pequeña una vez que el flujo principal funcione.

Supabase también puede formar parte de un proyecto web futuro aprovechando tu experiencia privada. Evita añadir Django, React, Supabase y MongoDB juntos solo para ampliar el listado de tecnologías: cada herramienta debe tener un motivo.

## Orden de trabajo

1. Boceto: lista de productos, ficha, formulario y movimientos. Definir qué puede hacer cada usuario.
2. Datos: Product (nombre, SKU, precio, stock mínimo, propietario), Category y StockMovement (producto, cantidad, tipo y fecha). Decidir cómo se calcula el stock para no duplicar fuentes de verdad.
3. Flujo principal: crear, editar, buscar y archivar productos. Validar en el servidor los campos, cantidades y SKU.
4. Usuarios: utilizar la autenticación del framework y comprobar los permisos en cada operación. Cada cuenta ve solo sus propios registros. No trasladar el ejercicio de contraseñas en JSON a la aplicación publicada.
5. Stock: registrar entradas y salidas, evitar existencias negativas y conservar historial. Las operaciones que cambian cantidades deben ser consistentes aunque haya dos peticiones a la vez.
6. Interfaz: móvil y escritorio, errores junto al campo, estados sin datos y confirmación de acciones. Primero una operación completa y útil; luego detalles visuales.
7. Verificación: probar que una cuenta no accede a los datos de otra, que las cantidades se validan y que una salida de stock no deja valores imposibles.
8. Publicación: servidor que ejecute la aplicación, base de datos persistente, HTTPS, secretos fuera del código y ajustes de producción del framework. No usar el servidor de desarrollo para servir la demo pública.
9. Portfolio: enlace a la demo, repositorio, 2–3 capturas y una explicación de una decisión técnica que puedas defender.

## Cómo demostrar que lo entiendes

Poder explicar sin IA una operación de extremo a extremo: formulario → petición → validación → permiso → modelo/base de datos → respuesta. Añadir al README qué hiciste tú, dónde usaste IA, cómo lo comprobaste y qué queda pendiente.

## Cuándo añadirlo al stack

Cuando el proyecto funcione y puedas explicarlo. Hasta entonces, mantener el nivel de aprendizaje explícito y no anunciar una demo que aún no existe.
