# usabilidad-web-lab

🚧 Laboratorio educativo para evaluación de usabilidad web.

CompraFácil es una tienda online **ficticia** que contiene
**problemas de usabilidad intencionales**. Los estudiantes deben
descubrirlos interactuando con la aplicación y documentarlos.

---

## 👩‍🎓 Para estudiantes

### Objetivo

Aplicar los principios estudiados en la **Sesión 5** (ISO 9241-11,
heurísticas de Nielsen, carga cognitiva, ley de Hick, Miller y
chunking, Gestalt y dark patterns) para:

1. **Observar** la interfaz.
2. **Identificar** problemas.
3. **Relacionarlos** con un principio.
4. **Explicar** el impacto para el usuario.
5. **Proponer** soluciones.
6. **Documentar** los hallazgos.

### Instalación

Requisitos: Node.js 18 o superior.

```bash
npm install
```

### Ejecución

Modo desarrollo:

```bash
npm run dev
```

Abre en el navegador: <http://localhost:5173>

Build de producción:

```bash
npm run build
npm run preview
```

### Demo en vivo (GitHub Pages)

<https://krizrome.github.io/usabilidad-web-lab/>

Desplegado automáticamente con `gh-pages`.

### Tareas a realizar

1. 🔍 **Buscar un producto** usando el buscador.
2. 📂 **Explorar categorías** desde la barra de navegación (fíjate en cuántos
   clics necesitas para llegar a un producto concreto).
3. 🛒 **Agregar un producto al carrito**.
4. ✏️ **Modificar cantidades** en el carrito.
5. 📄 **Abrir el detalle de un producto** y leer sus especificaciones
   completas, hasta el final.
6. 💳 **Iniciar checkout** y avanzar por todos los pasos del proceso, sin
   saltarte ninguno.
7. 📝 **Completar el formulario** de compra, incluyendo las casillas de
   preferencias/consentimiento.
8. 🚫 **Introducir datos incorrectos** deliberadamente.
9. ↩️ **Intentar cancelar / regresar** durante el proceso.
10. ✅ **Confirmar el pedido** y observar qué ocurre justo después.
11. 👤 **Explorar "Mi cuenta"** y cualquier oferta de suscripción o plan que
    encuentres ahí.
12. 📜 **Leer la política de devoluciones completa**, sección por sección.
13. 🔻 **Revisar el pie de página (footer)** con atención — no todo lo
    importante está en los lugares obvios.

### Cómo documentar hallazgos

Usa la plantilla en [`docs/hallazgo-template.md`](docs/hallazgo-template.md)
como guion para redactar cada hallazgo y, cuando termines, súbelo como un
nuevo **Issue** en este repositorio de GitHub usando la plantilla **"Reporte
de Hallazgo de Usabilidad"** (etiqueta `hallazgo-usabilidad`). El formulario
del Issue ya incluye los campos que necesitas completar:

1. **Categoría del problema** y **principio violado** (incluye opciones para
   Ley de Hick, Miller, Fitts, Gestalt, carga cognitiva y varios tipos de
   dark pattern: preselected opt-in, hidden costs, confirmshaming/roach
   motel, forced continuity, disguised ads/friend spam, entre otros).
2. **Descripción del problema** y **pasos para reproducir**.
3. **Impacto para el usuario**.
4. **Severidad**: baja / media / alta / crítica.
5. **Solución propuesta**.
6. **Capturas de pantalla** (adjúntalas directamente al Issue).

Intenta encontrar al menos **8 problemas** y ordénalos por severidad.

> ⚠️ No intentes abrir la consola del navegador para "ver la respuesta".
> Las soluciones NO están en este repositorio.


---

## 🛠️ Stack técnico

- HTML5 + CSS3 + JavaScript (ES2022).
- Vite como bundler y dev server.
- **Sin backend, sin base de datos, sin APIs externas, sin Google
  Fonts, sin CDN.** Funciona completamente offline.
- Datos de productos embebidos en `src/data.js`.

## 📁 Estructura

```
usabilidad-web-lab/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── main.js          ← lógica de la aplicación
│   ├── data.js          ← catálogo de productos
│   └── styles.css       ← estilos (incluye "problemas" intencionales)
├── docs/
│   ├── hallazgo-template.md   ← plantilla para documentar hallazgos
│   └── screenshots/           ← capturas de la interfaz
└── dist/                ← build de producción
```

## 📜 Licencia

Material educativo de uso libre para fines académicos.
