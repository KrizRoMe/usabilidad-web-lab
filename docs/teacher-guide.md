# 🔒 Guía del Docente — usabilidad-web-lab

> **MATERIAL PRIVADO.** No compartir con estudiantes.
> Contiene la lista completa de problemas intencionales,
> su ubicación, principio violado, evidencia, impacto,
> severidad sugerida y soluciones recomendadas.

## Información general

- **Aplicación:** CompraFácil (tienda online ficticia).
- **Total de problemas intencionales:** **12**.
- **Severidades:**
  - 4 Alta
  - 5 Media
  - 3 Baja
- **Principios cubiertos:**
  - ISO 9241-11 (efectividad, eficiencia, satisfacción)
  - 5 aspectos prácticos (aprendizaje, eficiencia, recuerdo, errores, satisfacción)
  - 10 heurísticas de Nielsen (varias)
  - Ley de Hick
  - Carga cognitiva
  - Miller y chunking
  - Gestalt: proximidad, similitud, cierre
  - Dark patterns (FTC)

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

## 💡 Sugerencias para la clase

1. **Calentamiento (10 min):** Pide a los estudiantes que exploren libremente sin anotar nada.
2. **Trabajo individual (20 min):** Cada estudiante documenta al menos 5 hallazgos usando la plantilla.
3. **Trabajo en parejas (15 min):** Comparten hallazgos y consolidan una lista de 5-7.
4. **Discusión plenaria (15 min):** El docente modera. Revelar 1-2 problemas clave y discutir.
5. **Cierre:** Resaltar que la usabilidad NO es subjetiva: hay principios medibles y citables.

## 🎯 Criterios de evaluación sugeridos

| Aspecto                          | Peso  |
|----------------------------------|-------|
| Número de hallazgos              | 20%   |
| Calidad de la justificación      | 30%   |
| Relación con principios          | 25%   |
| Viabilidad de las soluciones     | 15%   |
| Claridad de redacción            | 10%   |
