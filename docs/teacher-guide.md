# 🔒 Guía del Docente — usabilidad-web-lab

> **MATERIAL PRIVADO.** No compartir con estudiantes.
> Contiene la lista completa de problemas intencionales,
> su ubicación, principio violado, evidencia, impacto,
> severidad sugerida y soluciones recomendadas.

## Información general

- **Aplicación:** CompraFácil (tienda online ficticia).
- **Total de problemas intencionales:** **21** (H-01 a H-12 originales + H-13 a H-21 añadidos).
- **Severidades:**
  - 10 Alta
  - 10 Media
  - 1 Baja
- **Principios cubiertos:**
  - ISO 9241-11 (efectividad, eficiencia, satisfacción)
  - 5 aspectos prácticos (aprendizaje, eficiencia, recuerdo, errores, satisfacción)
  - 10 heurísticas de Nielsen (varias)
  - Ley de Hick
  - Ley de Miller y chunking
  - Ley de Fitts
  - Carga cognitiva
  - Gestalt: proximidad, similitud, cierre
  - Dark patterns (FTC): preselected opt-in, friend spam / bait and switch,
    disguised ads, forced continuity, hidden information, progressive
    disclosure manipulativa

---

## H-01 · Sobrecarga de opciones en filtros (Ley de Hick)

| Campo | Valor |
|---|---|
| **Ubicación** | Sidebar izquierdo de home/categoría |
| **Problema** | Decenas de filtros simultáneos (categoría, precio, marca, color, envío, valoración, descuento, disponibilidad, opciones extra) sin priorización visual. El usuario no sabe por dónde empezar. |
| **Principio** | **Ley de Hick** — el tiempo de decisión crece con la cantidad y complejidad de las opciones. |
| **Evidencia** | Sidebar con 9 grupos de filtros, ~50 checkboxes/radios en la misma pantalla. |
| **Impacto** | Decisión lenta, fatiga decisional, posible abandono. |
| **Severidad** | Media |
| **Solución** | Reducir filtros a los 3-4 más relevantes; usar progressive disclosure (mostrar más al expandir); aplicar valores por defecto razonables. |

## H-02 · Banner promocional sobrecargado (Carga cognitiva)

| Campo | Valor |
|---|---|
| **Ubicación** | Parte superior de la página de inicio |
| **Problema** | Banner con texto promocional denso, estilos visuales múltiples (gradiente, borde dashed, sombra anillada) y 8 micro-etiquetas con promociones. |
| **Principio** | **Carga cognitiva** — demasiada información simultánea exige esfuerzo extra de procesamiento. |
| **Evidencia** | Párrafo largo + 8 tags + 4 efectos visuales combinados. |
| **Impacto** | El usuario no retiene el mensaje principal; se distrae con elementos secundarios. |
| **Severidad** | Alta |
| **Solución** | Reducir a un mensaje principal claro; usar jerarquía visual para diferenciar info primaria de secundaria; máximo 2 estilos visuales simultáneos. |

## H-03 · Proximidad rota en formulario (Gestalt: Proximidad)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de checkout — campo "Dirección de envío" |
| **Problema** | La etiqueta `far-label` aplica `margin-top: 32px`, separando visualmente la etiqueta de su input. El resto del formulario tiene espaciado distinto. |
| **Principio** | **Gestalt — Proximidad.** Elementos cercanos se perciben como relacionados. La etiqueta queda "suelta" y no se asocia al campo. |
| **Evidencia** | La clase `.far-label` añade 32px de separación entre label y su input. |
| **Impacto** | Confusión sobre qué campo llenar; posible omisión del dato. |
| **Severidad** | Media |
| **Solución** | Mantener espaciado uniforme (4-8px) entre cada label y su input. |

## H-04 · Similitud inconsistente en navegación (Gestalt: Similitud + Nielsen #4)

| Campo | Valor |
|---|---|
| **Ubicación** | Barra de navegación principal |
| **Problema** | Los enlaces de navegación tienen colores y pesos distintos sin razón aparente (azul negrita, gris, gris cursiva, azul, negro negrita). Elementos que cumplen la misma función lucen distintos. |
| **Principio** | **Gestalt — Similitud** + **Nielsen #4 — Consistencia y estándares.** |
| **Evidencia** | Selectores `.main-nav a:nth-child(1)` a `(5)` aplican colores y pesos diferentes. |
| **Impacto** | Confusión sobre qué es importante y qué no; sensación de desorden. |
| **Severidad** | Media |
| **Solución** | Aplicar el mismo estilo a todos los enlaces de navegación; usar peso/color solo para indicar el activo. |

## H-05 · Similitud peligrosa en acciones del checkout (Gestalt: Similitud + Nielsen #4)

| Campo | Valor |
|---|---|
| **Ubicación** | Botones al pie del checkout ("Realizar pedido" y "Volver al catálogo") |
| **Problema** | Ambos botones tienen exactamente el mismo color azul, mismo tamaño y misma clase. Acciones con consecuencias MUY diferentes (comprar vs. descartar) se ven idénticas. |
| **Principio** | **Gestalt — Similitud** + **Nielsen #4** Consistencia. |
| **Evidencia** | Clase `.btn-primary` aplicada a ambos botones en `renderCheckout()`. |
| **Impacto** | Riesgo de clic accidental en "Realizar pedido" cuando se quería "volver". |
| **Severidad** | **Alta** |
| **Solución** | Acción primaria (Realizar pedido) en color sólido prominente; acción secundaria (Volver) en estilo ghost/secundario. |

## H-06 · Código de descuento mostrado una sola vez (Reconocimiento vs recuerdo)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista home (banner) → vista checkout |
| **Problema** | El código `DESC15` aparece en el banner de inicio y se exige en el checkout. Una vez fuera del home, el usuario debe recordar el código sin pistas contextuales. |
| **Principio** | **Nielsen #6 — Reconocimiento antes que recuerdo** + **Miller / chunking** (memoria de trabajo limitada). |
| **Evidencia** | El banner de inicio menciona el código; en el checkout se pide ingresarlo con una "pista" pequeña en amarillo. |
| **Impacto** | Usuarios olvidan el código; frustración; abandono del descuento. |
| **Severidad** | Media |
| **Solución** | Mostrar el código de manera persistente en el checkout si el usuario ya lo vio; o permitir aplicar el descuento directamente sin reescribirlo. |

## H-07 · Mensajes de error deficientes (Errores y recuperación)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista checkout — formulario |
| **Problema** | Al fallar la validación, aparece un banner rojo con texto "Error." (solo la palabra), sin indicar qué campo, qué falla, ni cómo corregirla. El único campo con pista individual es email. |
| **Principio** | **Nielsen #9 — Ayudar a reconocer, diagnosticar y recuperarse de errores.** + errores / recuperación. |
| **Evidencia** | `err-banner` con texto literal " Error." aplicado vía `::after`. |
| **Impacto** | Usuario no sabe qué corregir; tiene que probar campo por campo; abandono. |
| **Severidad** | **Alta** |
| **Solución** | Indicar el campo específico ("Email: formato no válido"), el problema concreto y un ejemplo de formato correcto. |

## H-08 · Visibilidad insuficiente del carrito (Nielsen #1)

| Campo | Valor |
|---|---|
| **Ubicación** | Botón "Carrito" en el header |
| **Problema** | El carrito no muestra un contador claro de productos. Se añade un badge improvisado inline mediante JS que aparece solo cuando hay items, pero sin destacar visualmente. |
| **Principio** | **Nielsen #1 — Visibilidad del estado del sistema.** |
| **Evidencia** | `.cart-count` con `display: none` por defecto; cuando se muestra, lo hace inline sin un badge bien definido. |
| **Impacto** | El usuario duda si el producto fue agregado; posible clic repetido o pérdida de confianza. |
| **Severidad** | Media |
| **Solución** | Badge permanente con número de items y color de acento; animación de entrada al agregar. |

## H-09 · Vaciar carrito sin confirmación (Nielsen #5)

| Campo | Valor |
|---|---|
| **Ubicación** | Panel del carrito |
| **Problema** | El botón "Vaciar carrito" elimina todos los productos con un solo clic, sin diálogo de confirmación. |
| **Principio** | **Nielsen #5 — Prevención de errores** + **Nielsen #3 — Control y libertad**. |
| **Evidencia** | Listener `empty-cart` ejecuta `state.cart = []` sin confirmación ni undo. |
| **Impacto** | Pérdida accidental del carrito; frustración alta. |
| **Severidad** | **Alta** |
| **Solución** | Confirmación "¿Vaciar el carrito? Esta acción no se puede deshacer" con botones "Cancelar" y "Vaciar"; o permitir deshacer durante unos segundos. |

## H-10 · Volver al carrito deliberadamente oculto (Nielsen #3)

| Campo | Valor |
|---|---|
| **Ubicación** | Pie del checkout |
| **Problema** | El enlace "← Volver al carrito" usa la clase `.back-link` con `color: rgba(255,255,255,0.55)` y tamaño 11px, casi imperceptible sobre fondo blanco del checkout. |
| **Principio** | **Nielsen #3 — Control y libertad del usuario.** |
| **Evidencia** | La clase `.back-link` aplica color blanco translúcido y tamaño muy pequeño. |
| **Impacto** | Usuario atrapado en checkout; única salida clara es "Realizar pedido" (la acción opuesta). |
| **Severidad** | **Alta** |
| **Solución** | Enlace visible, prominente, en color secundario (no blanco sobre blanco). Botón "← Volver al carrito" arriba del formulario. |

## H-11 · Dark pattern: opt-in de marketing preseleccionado (FTC)

| Campo | Valor |
|---|---|
| **Ubicación** | Sección "Ofertas exclusivas" en checkout |
| **Problema** | El checkbox "Sí, quiero recibir ofertas exclusivas" viene **preseleccionado** y en estilo positivo (azul, negrita). La opción de rechazo está en texto gris pequeño con un enlace a "modificar preferencias aquí" — no como checkbox. |
| **Principio** | **Dark pattern — Preselección manipulativa.** Reportado por la **Federal Trade Commission** (Bringing Dark Patterns to Light, 2022). |
| **Evidencia** | `<input type="checkbox" id="opt-marketing" checked />` con estilo `.opt-positive` prominente vs `.opt-negative` con `font-size: 11px; color: var(--muted)`. |
| **Impacto** | El usuario acepta comunicaciones sin haber tomado una decisión informada; viola autonomía. |
| **Severidad** | Media (sutil, pedagógicamente defendible) |
| **Solución** | Checkbox NO preseleccionado; ambos estilos con igual prominencia; texto claro y verificable. |

## H-12 · Feedback genérico al agregar al carrito (Nielsen #1 + Errores)

| Campo | Valor |
|---|---|
| **Ubicación** | Toast inferior al agregar producto |
| **Problema** | El toast dice solo "Producto agregado al carrito." sin nombre del producto, cantidad ni enlace para ver el carrito. |
| **Principio** | **Nielsen #1 — Visibilidad del estado del sistema** + errores / recuperación. |
| **Evidencia** | `showToast('Producto agregado al carrito.')` — texto fijo. |
| **Impacto** | Usuario no confirma QUÉ agregó; útil solo parcialmente. |
| **Severidad** | Baja |
| **Solución** | Mensaje específico: "Auriculares Bluetooth ProSound X1 agregado" + botón "Ver carrito" en el toast. |

## H-13 · Opt-in de partners con "trampa legal" de 2 clics (Dark pattern - FTC)

| Campo | Valor |
|---|---|
| **Ubicación** | Checkout, debajo del checkbox de marketing (H-11) |
| **Problema** | Checkbox "Acepto recibir ofertas de partners comerciales" viene **preseleccionado**. El primer clic NO lo desmarca: solo revela un texto legal pequeño ("puede retirar su consentimiento contactando a nuestro DPO en horario de oficina de lunes a viernes de 9:00 a 13:00"). Hace falta un **segundo clic** en un botón aparte ("Retirar consentimiento") para desmarcarlo de verdad. |
| **Principio** | **Dark pattern — Preselected opt-in + trampa de fricción artificial (roach motel).** FTC, *Bringing Dark Patterns to Light* (2022). |
| **Evidencia** | `#opt-partners` con `checked` por defecto; el listener de clic hace `preventDefault()` la primera vez y solo revela `#partners-legal-trap`. |
| **Impacto** | El usuario cree que puede desmarcar con un clic normal; su consentimiento a compartir datos con terceros persiste más de lo esperado y el mecanismo de baja (DPO, horario de oficina) es deliberadamente poco práctico. |
| **Severidad** | **Alta** |
| **Solución** | Checkbox NO preseleccionado; un solo clic para desmarcar; canal de baja disponible en cualquier momento (no solo horario de oficina). |

## H-14 · Friend spam / bait and switch tras la compra (Dark pattern - FTC)

| Campo | Valor |
|---|---|
| **Ubicación** | Modal que aparece automáticamente tras confirmar un pedido |
| **Problema** | Modal "¡Cuéntale a tus amigos!" con campos de WhatsApp y correo **pre-llenados** con una lista de 10 contactos ficticios. El botón "Compartir con 10 amigos" es verde, grande (16px) y ocupa todo el ancho; "No, gracias" es gris clarito y minúsculo (8px). |
| **Principio** | **Dark pattern — Friend spam / Bait and switch.** Induce a compartir con contactos que el usuario nunca introdujo, aprovechando el momento de euforia post-compra. |
| **Evidencia** | `.btn-share-bait` (`font-size:16px`, verde, ancho completo) vs `.btn-decline-tiny` (`font-size:8px`, gris). Campos `#spam-whatsapp` / `#spam-email` con valores predefinidos. |
| **Impacto** | Alta probabilidad de clic accidental en "Compartir"; el usuario expone contactos sin haberlo decidido conscientemente. |
| **Severidad** | **Alta** |
| **Solución** | Ambos botones con la misma jerarquía visual; campos de contactos vacíos por defecto; opción de "compartir" claramente opt-in. |

## H-15 · Publicidad disfrazada de contenido editorial (Dark pattern - FTC)

| Campo | Valor |
|---|---|
| **Ubicación** | Página de detalle de producto, entre la descripción y "También te puede interesar" |
| **Problema** | Un bloque con la misma tarjeta, tipografía y color que el resto del sitio simula ser un "artículo recomendado" ("10 trucos para ahorrar en tecnología"), pero enlaza a un dominio externo de terceros. La etiqueta "Publicidad" está en `opacity: 0.3`, casi fundida con el fondo. |
| **Principio** | **Dark pattern — Disguised ads.** |
| **Evidencia** | `.disguised-ad` reutiliza `var(--card)`/`var(--border)` del resto de tarjetas; `.disguised-ad-label { opacity: 0.3 }`; `target="_blank"` a un dominio externo. |
| **Impacto** | El usuario hace clic pensando que es contenido propio del sitio y termina en una página externa sin saberlo. |
| **Severidad** | Media |
| **Solución** | Diferenciar visualmente los anuncios (marco distinto, fondo distinto); etiqueta "Publicidad" con contraste AA como mínimo. |

## H-16 · Forced continuity: trial "gratis" con cancelación bloqueada (Dark pattern - FTC)

| Campo | Valor |
|---|---|
| **Ubicación** | Ruta `/premium` (CTA desde "Mi cuenta") y "Mi cuenta" tras activar el trial |
| **Problema** | El "Plan Premium" se anuncia como "¡GRATIS hoy!" en grande, pero requiere ingresar un número de tarjeta. El texto pequeño indica que se renueva automáticamente a $9.99/mes y que cancelar exige una solicitud por **correo postal certificado** con 72h de antelación. Una vez activado, el botón "Cancelar trial" en Mi cuenta aparece **deshabilitado** hasta el día 8 (cuando ya se habría iniciado el cobro). |
| **Principio** | **Dark pattern — Forced continuity.** |
| **Evidencia** | `renderPremium()` con `.premium-free-badge` prominente + `.premium-fineprint` pequeño; `#cancel-trial` con atributo `disabled` mientras `state.premiumTrialDay < 8`. |
| **Impacto** | El usuario cree estar probando algo sin costo y sin poder cancelarlo a tiempo, termina siendo cobrado y con un canal de baja deliberadamente lento. |
| **Severidad** | **Alta** |
| **Solución** | Cancelación disponible en un clic desde el primer día; recordatorio antes de que finalice el trial; costos y condiciones con la misma prominencia que "gratis". |

## H-17 · Información oculta en la política de devoluciones (Dark pattern - FTC)

| Campo | Valor |
|---|---|
| **Ubicación** | Ruta `/devoluciones` |
| **Problema** | La política tiene 14 secciones colapsables. La sección con la información realmente relevante para decidir una compra ("Excepciones a la política de devolución": ropa interior, productos personalizados y software sin devolución) es la **sección 11 de 14**, y dentro de ella el dato clave está en el **párrafo 6** de un bloque de texto largo. Requiere scroll + varios clics para llegar. |
| **Principio** | **Dark pattern — Hidden information.** |
| **Evidencia** | `returnPolicySections[10]` (índice 0-based) en `src/data.js`; se renderiza como `<details>` colapsado dentro de una lista de 14. |
| **Impacto** | El usuario compra sin saber que su producto no admite devolución; se entera solo si tiene la paciencia de abrir y leer la sección 11 completa. |
| **Severidad** | Media |
| **Solución** | Mostrar las excepciones de no-devolución en la ficha del propio producto y en el checkout, no solo enterradas en una política larga. |

## H-18 · Progressive disclosure manipulativa en el stepper de checkout (Dark pattern - FTC)

| Campo | Valor |
|---|---|
| **Ubicación** | Stepper de checkout (`/checkout-steps`, previo al checkout real) |
| **Problema** | El Paso 1 ("Dirección de envío") pide solo 3 campos, dando la impresión de un checkout corto. Al hacer clic en "Siguiente" aparece un Paso 2 no anunciado ("Dirección de facturación") con 5 campos más. El Paso 3 ("Verificación de identidad") exige foto del DNI, selfie con DNI y teléfono para SMS; la etiqueta "(Opcional)" junto a su título está en un color casi imperceptible (`rgba(108,117,125,0.15)`), pero en la práctica no se puede avanzar sin completar el teléfono. |
| **Principio** | **Dark pattern — Progressive disclosure manipulativa (bait and switch en pasos) + Hidden costs.** |
| **Evidencia** | `renderCheckoutSteps()` en `src/main.js`; clase `.step3-optional` con opacidad casi nula; validación de `#id-phone` obligatoria en el handler de `#fitts-confirm`. |
| **Impacto** | El usuario subestima el esfuerzo real del checkout y, al llegar al paso 3, siente presión a entregar datos sensibles (DNI, selfie) que no esperaba y que se le presentaron como opcionales. |
| **Severidad** | **Alta** |
| **Solución** | Mostrar de entrada el número total de pasos y los datos que se pedirán; verificación de identidad realmente opcional o justificada con un motivo claro. |

## H-19 · Mega-nav con sobrecarga de categorías (Ley de Hick)

| Campo | Valor |
|---|---|
| **Ubicación** | Barra superior de navegación (mega-nav, debajo del header) |
| **Problema** | 11 categorías principales, cada una con hasta 5 subcategorías desplegadas al pasar el mouse (con iconos). El buscador funcional no está en esta barra: queda escondido como un enlace de 10px en el footer. Encontrar un producto concreto exige como mínimo 3 clics (categoría → subcategoría → "Ver detalle"). |
| **Principio** | **Ley de Hick** — el tiempo de decisión crece con el número y complejidad de las opciones (T = log₂(n)). |
| **Evidencia** | `megaNavCategories` en `src/data.js` (11 × 5 = 55 opciones); `.footer-search a { font-size: 10px }`. |
| **Impacto** | Parálisis por análisis ante tantas opciones; el usuario que preferiría buscar directamente no encuentra el buscador con facilidad. |
| **Severidad** | Media |
| **Solución** | Reducir a 5-7 categorías principales; buscador prominente y siempre visible; mega-menús solo para catálogos que realmente los necesiten. |

## H-20 · Muro de 47 especificaciones sin agrupar (Ley de Miller)

| Campo | Valor |
|---|---|
| **Ubicación** | Página de detalle de producto, sección "Especificaciones técnicas" |
| **Problema** | 47 especificaciones técnicas en un bloque de texto corrido, sin agrupar por categoría (dimensiones, conectividad, batería, etc.), sin headings intermedios ni colores diferenciadores. Los estilos tipográficos (negrita, cursiva, subrayado, sin estilo) se aplican de forma aparentemente aleatoria. |
| **Principio** | **Ley de Miller (7±2)** — la memoria de trabajo no puede procesar 47 ítems sueltos sin chunking. |
| **Evidencia** | `productSpecs` (47 elementos) en `src/data.js`; `.specs-wall` renderiza todo en un único párrafo con clases `spec-bold/italic/underline/plain` cíclicas. |
| **Impacto** | El usuario no puede escanear ni comparar especificaciones; abandona la lectura antes de encontrar el dato que buscaba. |
| **Severidad** | Media |
| **Solución** | Agrupar en 5-7 categorías con headings (Dimensiones, Conectividad, Batería, Audio, Garantía...); un único estilo tipográfico consistente. |

## H-21 · Botón de confirmar diminuto vs. botón de cancelar enorme (Ley de Fitts)

| Campo | Valor |
|---|---|
| **Ubicación** | Paso 3 del stepper de checkout (`.fitts-zone`) |
| **Problema** | El botón real para avanzar ("Confirmar compra") mide 24×24px, color gris casi imperceptible, en la esquina inferior derecha. El botón "Cancelar y volver" mide 240×80px, rojo brillante, centrado, con animación pulsante. |
| **Principio** | **Ley de Fitts** — T = a + b·log₂(D/W + 1): el tiempo para alcanzar un objetivo aumenta con la distancia y disminuye con su tamaño. Aquí la acción deseable (avanzar) tiene el peor target posible, y la indeseable (cancelar) el mejor. |
| **Evidencia** | `.btn-confirm-tiny { width:24px; height:24px; background:#e9ecef; color:#e9ecef }` vs `.btn-cancel-huge { width:240px; height:80px; background:#ff1744; animation: fitts-pulse 1s infinite }`. |
| **Impacto** | Alta probabilidad de que el usuario cancele el proceso por accidente, o abandone por no encontrar cómo continuar. |
| **Severidad** | **Alta** |
| **Solución** | Invertir la jerarquía: botón de confirmar grande y con color de marca (mínimo 88×44px), botón de cancelar en estilo secundario/ghost, sin animaciones que atraigan la atención hacia la opción destructiva. |

---

## 📋 Resumen tabular

| ID  | Severidad | Principio                                    |
|-----|-----------|----------------------------------------------|
| H-01| Media     | Ley de Hick                                  |
| H-02| Alta      | Carga cognitiva                               |
| H-03| Media     | Gestalt: Proximidad                          |
| H-04| Media     | Gestalt: Similitud + Nielsen #4              |
| H-05| Alta      | Gestalt: Similitud + Nielsen #4              |
| H-06| Media     | Nielsen #6 + Miller / chunking               |
| H-07| Alta      | Nielsen #9 (errores y recuperación)          |
| H-08| Media     | Nielsen #1 (visibilidad del estado)          |
| H-09| Alta      | Nielsen #5 + Nielsen #3 (prevención)         |
| H-10| Alta      | Nielsen #3 (control y libertad)              |
| H-11| Media     | Dark pattern - FTC                           |
| H-12| Baja      | Nielsen #1 (feedback genérico)               |
| H-13| Alta      | Dark pattern - FTC (preselected opt-in)      |
| H-14| Alta      | Dark pattern - FTC (friend spam)             |
| H-15| Media     | Dark pattern - FTC (disguised ads)           |
| H-16| Alta      | Dark pattern - FTC (forced continuity)       |
| H-17| Media     | Dark pattern - FTC (hidden information)       |
| H-18| Alta      | Dark pattern - FTC (progressive disclosure)  |
| H-19| Media     | Ley de Hick                                  |
| H-20| Media     | Ley de Miller                                |
| H-21| Alta      | Ley de Fitts                                 |

## 💡 Sugerencias para la clase

1. **Calentamiento (10 min):** Pide a los estudiantes que exploren libremente sin anotar nada.
2. **Trabajo individual (20 min):** Cada estudiante documenta al menos 5 hallazgos usando la plantilla.
3. **Trabajo en parejas (15 min):** Comparten hallazgos y consolidan una lista de 5-7.
4. **Discusión plenaria (15 min):** El docente modera. Revelar 1-2 problemas clave y discutir.
5. **Cierre:** Resaltar que la usabilidad NO es subjetiva: hay principios medibles y citables.

## 🎯 Lo que se espera del estudiante

Esta sesión es una **práctica de aprendizaje**, no una evaluación con nota. Lo que se busca es que el estudiante:

| Aspecto | Descripción |
|---|---|
| Identificación | Encuentra problemas relevantes (al menos 4) vinculados a un principio |
| Evidencia | Demuestra claramente dónde está el problema (capturas, ruta, pasos) |
| Análisis | Relaciona el problema con un principio de la Sesión 5 (ISO, Nielsen, Hick, Miller, Fitts, Gestalt) |
| Solución | Propone soluciones técnicas y organizacionales razonables |
| Comunicación | Presenta y argumenta sus hallazgos en la puesta en común |
