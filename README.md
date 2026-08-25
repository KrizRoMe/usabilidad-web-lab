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
2. 📂 **Explorar categorías** desde la barra de navegación.
3. 🛒 **Agregar un producto al carrito**.
4. ✏️ **Modificar cantidades** en el carrito.
5. 💳 **Iniciar checkout**.
6. 📝 **Completar el formulario** de compra.
7. 🚫 **Introducir datos incorrectos** deliberadamente.
8. ↩️ **Intentar cancelar / regresar** durante el proceso.

### Cómo documentar hallazgos

Usa la plantilla en [`docs/hallazgo-template.md`](docs/hallazgo-template.md).

Para cada problema encontrado:

1. **Problema**: ¿qué ocurre?
2. **Evidencia**: ¿qué observaste?
3. **Principio**: ¿qué concepto de la Sesión 5 aplica?
4. **Impacto**: ¿cómo afecta al usuario?
5. **Severidad**: baja / media / alta.
6. **Solución propuesta**: ¿cómo lo mejorarías?

Intenta encontrar al menos **5 problemas** y ordénalos por severidad.

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
