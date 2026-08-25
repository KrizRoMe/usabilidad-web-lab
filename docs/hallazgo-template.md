# Plantilla de Hallazgo de Usabilidad

> **Cómo usar:** copia esta plantilla por cada problema que encuentres en CompraFácil.
> Cuando termines, pégala como contenido de un nuevo Issue en GitHub usando la plantilla
> "Reporte de Hallazgo de Usabilidad" (etiqueta `hallazgo-usabilidad`).

---

## 📋 Resumen rápido

| Campo | Valor |
|---|---|
| **Título** | [Resume el hallazgo en 8-12 palabras] |
| **Pantalla** | /ruta o sección donde ocurre |
| **Categoría** | Usabilidad / Dark pattern / Accesibilidad / Otro |
| **Principio violado** | ISO 9241-11 / Nielsen / Hick / Miller / Fitts / Gestalt / Carga cognitiva / Dark pattern |
| **Severidad** | Baja / Media / Alta / Crítica |
| **Fecha** | 2026-MM-DD |

---

## 🎯 Descripción del problema

[2-4 oraciones objetivas. ¿Qué ocurre? Describe solo lo que observaste, sin interpretar todavía.]

## 🔁 Pasos para reproducir

1. [paso 1]
2. [paso 2]
3. [paso 3]
4. ...

**Resultado observado:** [qué pasa]
**Resultado esperado:** [qué debería pasar]

## 📸 Evidencia

[Capturas, ruta del elemento en la UI, código relevante]

```html
<!-- Si es un fragmento HTML el que causa el problema -->
```

```css
/* Si es un estilo el que lo causa */
```

## 🧠 Principio que viola

[Explica POR QUÉ este problema viola un principio concreto de la Sesión 5.
No basta con decir "es feo"; debes vincularlo a un concepto.]

- **Principio:** [nombre del principio]
- **Definición breve:** [cita o parafrasea la definición]
- **Cómo se viola aquí:** [explica la conexión]

## 😤 Impacto para el usuario

[¿Cómo afecta al usuario concreto? ¿Le cuesta tiempo? ¿Se confunde? ¿Toma una decisión que no quería?]

## 💡 Solución propuesta

[Cómo lo arreglarías. Sé concreto. Si es un cambio de código, muéstralo.]

```html
<!-- Antes -->
<button class="btn-confirm-tiny">Confirmar</button>

<!-- Después -->
<button class="btn-confirm-primary">Confirmar compra</button>
```

```css
/* Recomendaciones según Fitts: target ≥ 88x44 px móvil, contraste AAA */
.btn-confirm-primary {
  min-width: 200px;
  min-height: 48px;
  background: #065A82; /* IIC navy */
}
```

## 🔗 Referencias

[URLs o páginas del sílabo que respaldan tu argumento. Mínimo 1.]

---

## ✅ Checklist antes de enviar

- [ ] Reproduje el problema al menos 2 veces
- [ ] Adjunté al menos 1 captura
- [ ] Relacioné el problema con un principio concreto de la Sesión 5
- [ ] Propuse una solución concreta, no solo "mejorar el diseño"
- [ ] El título empieza con `[Hallazgo]` para que el docente lo identifique rápido
