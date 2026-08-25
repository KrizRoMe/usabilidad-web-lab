(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();const v=[{id:"P001",name:"Auriculares Bluetooth ProSound X1",category:"Audio",price:159.9,oldPrice:219.9,rating:4.6,stock:14,thumb:"🎧"},{id:"P002",name:"Smartwatch FitPlus Active 3",category:"Wearables",price:349,oldPrice:null,rating:4.3,stock:7,thumb:"⌚"},{id:"P003",name:"Teclado mecánico RGB K-75",category:"Periféricos",price:89.5,oldPrice:129,rating:4.7,stock:22,thumb:"⌨️"},{id:"P004",name:"Cámara web HD StudioCam 1080",category:"Periféricos",price:64.9,oldPrice:null,rating:4.1,stock:3,thumb:"📷"},{id:"P005",name:"Mochila urbana TechCarry 22L",category:"Accesorios",price:49.9,oldPrice:69,rating:4.5,stock:35,thumb:"🎒"},{id:"P006",name:"Mouse ergonómico ErgoMouse Vertical",category:"Periféricos",price:39.9,oldPrice:null,rating:4.4,stock:18,thumb:"🖱️"},{id:"P007",name:"Lámpara LED SmartGlow con WiFi",category:"Hogar",price:28.5,oldPrice:null,rating:4,stock:50,thumb:"💡"},{id:"P008",name:"Cargador rápido GaN 65W",category:"Accesorios",price:32,oldPrice:44,rating:4.6,stock:27,thumb:"🔌"},{id:"P009",name:"Parlante portátil AquaSound Mini",category:"Audio",price:79,oldPrice:null,rating:4.2,stock:11,thumb:"🔊"}],z=["Todas","Audio","Wearables","Periféricos","Accesorios","Hogar"],M=["Cualquier precio","Menos de S/ 50","S/ 50 - S/ 100","S/ 100 - S/ 200","Más de S/ 200"],w=["Dimensiones: 18 x 15 x 8 cm","Peso: 320 g","Material carcasa: Policarbonato ABS","Color: Negro mate","Conectividad: Bluetooth 5.3","Alcance inalámbrico: 10 m","Batería: Litio-ion 300 mAh","Autonomía: 20 horas de uso continuo","Tiempo de carga: 1.5 horas","Puerto de carga: USB-C","Resistencia al agua: IPX4","Frecuencia de respuesta: 20 Hz - 20 kHz","Impedancia: 32 Ohm","Sensibilidad: 105 dB","Micrófono incorporado: Sí","Cancelación de ruido: Pasiva","Compatibilidad: Android, iOS, Windows, macOS","Códec de audio: SBC, AAC","Multipunto: 2 dispositivos","Controles táctiles: Sí","Asistente de voz: Compatible","Estuche de carga incluido: Sí","Garantía: 12 meses","País de fabricación: China","Certificaciones: CE, FCC, RoHS","Contenido del paquete: producto, cable USB-C, manual","Idiomas del manual: Español, inglés, portugués","Peso del empaque: 450 g","Dimensiones del empaque: 20 x 18 x 10 cm","Conexión auxiliar: No incluida","Modo de bajo consumo: Sí","Indicador LED de batería: Sí","Botón de encendido: Lateral","Sensor de proximidad: No","Ecualizador personalizable: Vía app","Actualización de firmware: Vía app","Vida útil estimada: 3 años","Reciclable: Parcialmente","Uso recomendado: Interior y exterior","Temperatura de operación: 0°C a 40°C","Humedad relativa soportada: hasta 80%","Nivel de presión sonora máxima: 110 dB","Tipo de acolchado: Espuma viscoelástica","Ajuste regulable: Sí","Plegable: Sí","Soporte para llamadas: Sí","Cancelación de eco: Sí"],F=[{name:"Audio",icon:"🎧",subcategories:[{name:"Auriculares",icon:"🎧"},{name:"Parlantes",icon:"🔊"},{name:"Micrófonos",icon:"🎙️"},{name:"Barras de sonido",icon:"📻"},{name:"Accesorios de audio",icon:"🔌"}]},{name:"Wearables",icon:"⌚",subcategories:[{name:"Smartwatches",icon:"⌚"},{name:"Bandas fitness",icon:"📿"},{name:"Anillos inteligentes",icon:"💍"},{name:"Gafas inteligentes",icon:"🕶️"},{name:"Accesorios wearables",icon:"🔗"}]},{name:"Periféricos",icon:"🖱️",subcategories:[{name:"Teclados",icon:"⌨️"},{name:"Mouses",icon:"🖱️"},{name:"Webcams",icon:"📷"},{name:"Alfombrillas",icon:"🟫"},{name:"Hubs USB",icon:"🔌"}]},{name:"Accesorios",icon:"🎒",subcategories:[{name:"Mochilas",icon:"🎒"},{name:"Fundas",icon:"📱"},{name:"Cables",icon:"🔌"},{name:"Soportes",icon:"📐"},{name:"Organizadores",icon:"🗂️"}]},{name:"Hogar",icon:"💡",subcategories:[{name:"Iluminación",icon:"💡"},{name:"Enchufes inteligentes",icon:"🔌"},{name:"Cámaras de seguridad",icon:"📹"},{name:"Sensores",icon:"📡"},{name:"Climatización",icon:"🌡️"}]},{name:"Electrodomésticos",icon:"🔌",subcategories:[{name:"Licuadoras",icon:"🥤"},{name:"Cafeteras",icon:"☕"},{name:"Aspiradoras",icon:"🧹"},{name:"Freidoras de aire",icon:"🍟"},{name:"Microondas",icon:"📦"}]},{name:"Moda",icon:"👕",subcategories:[{name:"Ropa hombre",icon:"👔"},{name:"Ropa mujer",icon:"👗"},{name:"Calzado",icon:"👟"},{name:"Accesorios de moda",icon:"👜"},{name:"Relojes",icon:"⌚"}]},{name:"Deportes",icon:"🏀",subcategories:[{name:"Fitness",icon:"🏋️"},{name:"Ciclismo",icon:"🚴"},{name:"Camping",icon:"⛺"},{name:"Natación",icon:"🏊"},{name:"Suplementos",icon:"💊"}]},{name:"Libros",icon:"📚",subcategories:[{name:"Ficción",icon:"📖"},{name:"No ficción",icon:"📗"},{name:"Infantil",icon:"🧒"},{name:"Cómics",icon:"💥"},{name:"Académico",icon:"🎓"}]},{name:"Juguetes",icon:"🧸",subcategories:[{name:"Educativos",icon:"🧩"},{name:"Aire libre",icon:"🪁"},{name:"Muñecas",icon:"🪆"},{name:"Construcción",icon:"🧱"},{name:"Videojuegos",icon:"🎮"}]},{name:"Salud y Belleza",icon:"💊",subcategories:[{name:"Cuidado facial",icon:"🧴"},{name:"Suplementos",icon:"💊"},{name:"Equipos médicos",icon:"🩺"},{name:"Cuidado capilar",icon:"💇"},{name:"Higiene personal",icon:"🧼"}]}],T=[{title:"Introducción",body:["Esta política describe los términos y condiciones bajo los cuales CompraFácil acepta la devolución de productos adquiridos a través de este sitio.","Al realizar una compra, aceptas los términos descritos en este documento en su totalidad."]},{title:"Plazo general de devolución",body:["Dispones de 30 días calendario desde la fecha de entrega para solicitar una devolución, salvo las excepciones descritas más adelante en esta política."]},{title:"Condiciones del producto",body:["El producto debe encontrarse en su empaque original, sin señales de uso, con todos los accesorios y manuales incluidos."]},{title:"Proceso para solicitar una devolución",body:['Debes iniciar la solicitud desde la sección "Mis pedidos", seleccionar el producto y seguir las instrucciones del asistente de devolución.']},{title:"Reembolsos y tiempos de procesamiento",body:["Una vez recibido y verificado el producto, el reembolso se procesa en un plazo de 5 a 10 días hábiles al medio de pago original."]},{title:"Costos de envío de devolución",body:["El costo de envío de la devolución corre por cuenta del cliente, salvo en casos de producto defectuoso o error en el envío."]},{title:"Productos dañados o defectuosos",body:["Si el producto llega dañado o con defectos de fábrica, CompraFácil cubre el costo total de la devolución y el reemplazo."]},{title:"Cambios de producto",body:["Puedes solicitar el cambio por otra talla, color o modelo equivalente, sujeto a disponibilidad de stock."]},{title:"Devoluciones internacionales",body:["Para pedidos enviados fuera del país de origen, los tiempos de devolución pueden extenderse hasta 45 días calendario."]},{title:"Garantía extendida",body:["Los productos con garantía extendida contratada tienen condiciones de devolución adicionales detalladas en su certificado de garantía."]},{title:"Excepciones a la política de devolución",body:["Esta sección detalla los casos en los que CompraFácil no acepta devoluciones, independientemente del estado del producto o el tiempo transcurrido desde la compra.","El derecho general de devolución descrito en la sección 2 de esta política aplica a la gran mayoría de los productos de nuestro catálogo.","Recomendamos revisar siempre la ficha del producto antes de completar la compra, ya que algunas categorías incluyen condiciones particulares.","CompraFácil se reserva el derecho de rechazar una devolución si se determina que el producto no cumple con los requisitos generales de esta política.","Las excepciones descritas a continuación buscan proteger tanto la salud de nuestros clientes como los derechos de propiedad intelectual de nuestros proveedores.","Por razones de higiene y protección de la propiedad intelectual, no se aceptan devoluciones de ropa interior y trajes de baño (aunque conserven las etiquetas originales), productos personalizados o fabricados a pedido (grabados, tallas especiales, combinaciones de color únicas) ni licencias de software o contenido digital una vez descargado o activado, incluso si el medio físico se conserva sin abrir.","Cualquier duda sobre si un producto específico está sujeto a estas excepciones puede consultarse antes de la compra a través del Centro de ayuda."]},{title:"Devoluciones en promociones y descuentos",body:["Los productos adquiridos con descuento se reembolsan por el monto efectivamente pagado, no por el precio original."]},{title:"Contacto y soporte",body:["Para cualquier consulta sobre esta política, puedes escribirnos a soporte@comprafacil.test."]},{title:"Modificaciones a esta política",body:["CompraFácil puede modificar esta política en cualquier momento. La versión vigente es la publicada en este sitio al momento de tu compra."]}],e={cart:[],discount:"",discountApplied:!1,route:"home",selectedProduct:null,cartOpen:!1,filters:{category:"Todas",price:"Cualquier precio"},optPartners:!0,partnersTrapRevealed:!1,premiumTrialActive:!1,premiumTrialDay:1,checkoutStep:1},R=document.getElementById("app");function l(){var c;const t=e.cart.reduce((n,o)=>n+o.qty,0);R.innerHTML=`
    <header class="site-header">
      <div class="logo">
        <span class="logo-mark">C</span>
        <span>CompraFácil</span>
      </div>
      <div class="search-bar">
        <input id="search-input" type="text" placeholder="Buscar productos, marcas y mucho más..." aria-label="Buscar productos" />
        <button id="search-btn">Buscar</button>
      </div>
      <button class="cart-button" id="cart-btn" aria-label="Abrir carrito">
        🛒 Carrito
        <span class="cart-count" id="cart-count"></span>
      </button>
    </header>

    ${j()}

    <nav class="main-nav">
      <a href="#" data-route="home">Inicio</a>
      <a href="#" data-route="category" data-cat="Audio">Audio</a>
      <a href="#" data-route="category" data-cat="Wearables">Wearables</a>
      <a href="#" data-route="category" data-cat="Periféricos">Periféricos</a>
      <a href="#" data-route="category" data-cat="Hogar">Hogar</a>
      <a href="#" data-route="ofertas">OFERTAS 🔥</a>
      <a href="#" data-route="ayuda">Ayuda</a>
      <a href="#" data-route="cuenta">Mi cuenta</a>
    </nav>

    <div class="layout">
      <aside class="sidebar" id="sidebar">
        ${O()}
      </aside>
      <section class="main">
        ${G()}
      </section>
    </div>

    ${N()}

    <div class="cart-overlay" id="cart-overlay">
      <div class="cart-panel" id="cart-panel">
        ${Z()}
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `;const a=document.getElementById("cart-count");a&&t>0&&(a.textContent=`(${t})`,a.style.display="inline",a.style.background="#e76f51",a.style.padding="2px 6px",a.style.borderRadius="10px",a.style.fontSize="12px"),e.cartOpen&&((c=document.getElementById("cart-overlay"))==null||c.classList.add("open")),ee()}function O(){return`
    <h3>Filtrar productos</h3>
    <div class="filter-group">
      <strong style="font-size:13px;">Categoría</strong>
      ${z.map(a=>`
        <label><input type="radio" name="cat" value="${a}" ${e.filters.category===a?"checked":""}/> ${a}</label>
      `).join("")}
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Precio</strong>
      ${M.map(a=>`
        <label><input type="radio" name="price" value="${a}" ${e.filters.price===a?"checked":""}/> ${a}</label>
      `).join("")}
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Marca</strong>
      <label><input type="checkbox" name="brand" value="ProSound"/> ProSound</label>
      <label><input type="checkbox" name="brand" value="FitPlus"/> FitPlus</label>
      <label><input type="checkbox" name="brand" value="TechCarry"/> TechCarry</label>
      <label><input type="checkbox" name="brand" value="ErgoMouse"/> ErgoMouse</label>
      <label><input type="checkbox" name="brand" value="AquaSound"/> AquaSound</label>
      <label><input type="checkbox" name="brand" value="SmartGlow"/> SmartGlow</label>
      <label><input type="checkbox" name="brand" value="K-75"/> K-75</label>
      <label><input type="checkbox" name="brand" value="StudioCam"/> StudioCam</label>
      <label><input type="checkbox" name="brand" value="GaN"/> GaN</label>
      <label><input type="checkbox" name="brand" value="Generic"/> Genérico</label>
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Color</strong>
      <label><input type="checkbox"/> Negro</label>
      <label><input type="checkbox"/> Blanco</label>
      <label><input type="checkbox"/> Gris</label>
      <label><input type="checkbox"/> Rojo</label>
      <label><input type="checkbox"/> Azul</label>
      <label><input type="checkbox"/> Verde</label>
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Envío</strong>
      <label><input type="checkbox"/> Envío gratis</label>
      <label><input type="checkbox"/> Envío mismo día</label>
      <label><input type="checkbox"/> Recojo en tienda</label>
      <label><input type="checkbox"/> Envío exprés</label>
      <label><input type="checkbox"/> Envío internacional</label>
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Valoración</strong>
      <label><input type="checkbox"/> 5 estrellas</label>
      <label><input type="checkbox"/> 4 estrellas o más</label>
      <label><input type="checkbox"/> 3 estrellas o más</label>
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Descuento</strong>
      <label><input type="checkbox"/> Con descuento</label>
      <label><input type="checkbox"/> Oferta flash</label>
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Disponibilidad</strong>
      <label><input type="checkbox"/> En stock</label>
      <label><input type="checkbox"/> Preventa</label>
    </div>
    <div class="hick-zone">
      <strong style="font-size:13px;">Más opciones</strong>
      <label><input type="checkbox"/> Producto ecológico</label>
      <label><input type="checkbox"/> Hecho en Perú</label>
      <label><input type="checkbox"/> Garantía extendida</label>
    </div>
    <button class="btn btn-primary" style="width:100%; margin-top:10px;">Aplicar filtros</button>
  `}function j(){return`
    <nav class="mega-nav">
      ${F.map(t=>`
        <div class="mega-nav-item">
          <a href="#" class="mega-nav-link" data-route="category" data-cat="${t.name}">${t.icon} ${t.name}</a>
          <div class="mega-nav-dropdown">
            ${t.subcategories.map(a=>`
              <a href="#" data-route="category" data-cat="${t.name}">${a.icon} ${a.name}</a>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </nav>
  `}function N(){return`
    <footer class="site-footer">
      <div class="footer-cols">
        <div>
          <strong>CompraFácil</strong>
          <p>Tu tienda online de confianza.</p>
        </div>
        <div class="footer-links">
          <a href="#" data-route="devoluciones">Política de devoluciones</a>
          <a href="#" data-route="ayuda">Centro de ayuda</a>
          <a href="#" id="go-premium-footer">Plan Premium</a>
        </div>
        <div class="footer-search">
          <a href="#" id="footer-search-link">buscar</a>
        </div>
      </div>
      <div class="footer-legal">© 2026 CompraFácil. Todos los derechos reservados.</div>
    </footer>
  `}function G(){return e.route==="home"?h():e.route==="category"?H():e.route==="detail"?W():e.route==="checkout-steps"?Y():e.route==="checkout"?K():e.route==="ofertas"?U():e.route==="ayuda"?X("Centro de ayuda","¿Necesitas ayuda? Escríbenos a soporte@comprafacil.test o llama al (01) 555-0000 de lunes a sábado de 9:00 a 18:00."):e.route==="cuenta"?_():e.route==="premium"?J():e.route==="devoluciones"?Q():h()}function h(){const t=v.slice(0,6);return`
    ${V()}
    <div class="section-title">Destacados para ti</div>
    <div class="product-grid">
      ${t.map(a=>y(a)).join("")}
    </div>
  `}function V(){return`
    <div class="promo-banner">
      <h2>¡GRAN SUPER MEGA OFERTA! 🎉</h2>
      <small>Aprovecha HOY nuestro evento EXCLUSIVO con descuentos IMPERDIBLES + envío GRATIS + 3x2 + cupón EXTRA + regalo SORPRESA + puntos DOBLES en tu próxima compra. ¡Date prisa! Tiempo limitado. Stock limitado. Aplican restricciones.</small>
      <div class="promo-grid">
        <span>3x2</span><span>Envío gratis</span><span>-30% hoy</span><span>+Puntos</span>
        <span>Regalo</span><span>Cupón extra</span><span>Sorteo</span><span>Cashback</span>
      </div>
    </div>
  `}function H(){const t=e.selectedProduct||"Audio",a=v.filter(c=>c.category===t);return`
    <div class="section-title">Categoría: ${t}</div>
    <div class="product-grid">
      ${a.map(c=>y(c)).join("")}
    </div>
  `}function U(){return`
    <div class="section-title">🔥 Ofertas</div>
    <div class="product-grid">
      ${v.filter(a=>a.oldPrice).map(a=>y(a)).join("")}
    </div>
  `}function W(){const t=e.selectedProduct;if(!t)return h();const a=v.filter(n=>n.category===t.category&&n.id!==t.id).slice(0,3),c=["spec-bold","spec-italic","spec-underline","spec-plain"];return`
    <div class="detail-view">
      <div class="detail-img">Imagen del producto</div>
      <div class="detail-info">
        <h1>${t.name}</h1>
        <div style="color: var(--muted); font-size: 14px;">Categoría: ${t.category} · Valoración: ${t.rating} ★ · Stock: ${t.stock}</div>
        <div class="detail-price">
          S/ ${t.price.toFixed(2)}
          ${t.oldPrice?`<span style="color:var(--muted); text-decoration:line-through; font-size:18px; font-weight:400; margin-left:8px;">S/ ${t.oldPrice.toFixed(2)}</span>`:""}
        </div>
        <p style="color: var(--muted); margin-bottom: 18px;">Producto de alta calidad. Envío a todo el país. Garantía del fabricante por 12 meses.</p>
        <button class="btn btn-primary" id="add-detail">Agregar al carrito</button>
      </div>
    </div>

    <!-- PROBLEMA #20: Ley de Miller - 47 especificaciones sin agrupar,
         con estilos tipográficos aplicados sin ningún sistema. -->
    <div class="detail-specs">
      <h3>Especificaciones técnicas</h3>
      <div class="specs-wall">
        ${w.map((n,o)=>`<span class="${c[o%c.length]}">${n}.</span> `).join("")}
      </div>
    </div>

    <!-- PROBLEMA #15: Disguised ad - imita el estilo de un contenido
         editorial del propio sitio; la etiqueta "Publicidad" está casi
         invisible (opacity 0.3) y enlaza a un dominio externo. -->
    <a class="disguised-ad" href="https://ofertas-terceros.example.com/oferta-tecnologia" target="_blank" rel="noopener noreferrer">
      <div class="disguised-ad-inner">
        <div class="disguised-ad-thumb">📰</div>
        <div>
          <div class="disguised-ad-title">10 trucos para ahorrar en tecnología este mes</div>
          <div class="disguised-ad-desc">Descubre ofertas seleccionadas especialmente para ti.</div>
        </div>
      </div>
      <span class="disguised-ad-label">Publicidad</span>
    </a>

    <div class="section-title">También te puede interesar</div>
    <div class="product-grid">
      ${a.map(n=>y(n)).join("")}
    </div>
  `}function K(){return`
    <div class="checkout">
      <h2>Finalizar compra</h2>

      ${e.discountApplied?`
        <div class="discount-hint" style="background:#d4edda; border-color:#c3e6cb; color:#155724;">
          ✓ Descuento <code>DESC15</code> aplicado: 15% OFF.
        </div>
      `:`
        <div class="discount-hint" id="discount-hint">
          ¿Tienes un código de descuento? Ingrésalo abajo.
          (Pista: el código <code>DESC15</code> se mostró en la página principal).
        </div>
      `}

      <div class="form-grid">
        <div>
          <div class="label-group"><label>Nombre completo</label></div>
          <input type="text" id="f-name" placeholder="Tu nombre" />
        </div>
        <div>
          <div class="label-group"><label>Documento de identidad (DNI/CE)</label></div>
          <input type="text" id="f-dni" placeholder="12345678" />
        </div>
        <div class="form-grid-full">
          <div class="label-group"><label>Correo electrónico</label></div>
          <input type="email" id="f-email" placeholder="usuario@dominio.com" />
          <div class="field-error" id="err-email"></div>
        </div>
        <div>
          <div class="label-group"><label>Teléfono</label></div>
          <input type="tel" id="f-phone" placeholder="+51 999 999 999" />
        </div>
        <div>
          <div class="label-group"><label>Código postal</label></div>
          <input type="text" id="f-zip" placeholder="10001" />
        </div>
        <div class="form-grid-full">
          <div class="label-group far-label"><label>Dirección de envío (calle, número, referencia)</label></div>
          <input type="text" id="f-addr" placeholder="Av. Principal 123, Dpto 402" />
        </div>
        <div>
          <div class="label-group"><label>Ciudad</label></div>
          <input type="text" id="f-city" placeholder="Lima" />
        </div>
        <div>
          <div class="label-group"><label>País</label></div>
          <select id="f-country">
            <option>Perú</option>
            <option>Colombia</option>
            <option>Chile</option>
            <option>México</option>
          </select>
        </div>
      </div>

      <div style="margin-top: 14px;">
        <div class="label-group"><label>Código de descuento (opcional)</label></div>
        <input type="text" id="f-discount" placeholder="Ej. DESC15" value="${e.discount}" />
      </div>

      <!-- PROBLEMA #10: Dark pattern. Checkbox de marketing preseleccionado. -->
      <div class="marketing-optin">
        <div class="opt-positive">
          <input type="checkbox" id="opt-marketing" checked />
          <label for="opt-marketing" style="margin:0; color: var(--primary);">Sí, quiero recibir ofertas exclusivas y descuentos anticipados.</label>
        </div>
        <div class="opt-negative">
          Si prefieres no recibir estas comunicaciones, puedes <a id="opt-decline">modificar tus preferencias aquí</a>.
        </div>
      </div>

      <!-- PROBLEMA #13: Dark pattern. Opt-in de partners preseleccionado con
           "trampa legal": el primer clic en el checkbox solo revela el texto
           legal; hace falta un segundo clic en un botón aparte para
           desmarcarlo de verdad. -->
      <div class="marketing-optin partners-optin">
        <div class="opt-positive">
          <input type="checkbox" id="opt-partners" ${e.optPartners?"checked":""} />
          <label for="opt-partners" style="margin:0; color: var(--primary);">Acepto recibir ofertas de partners comerciales.</label>
        </div>
        <div class="partners-legal-trap ${e.partnersTrapRevealed?"show":""}" id="partners-legal-trap">
          <small>
            Al aceptar, tus datos personales podrán ser compartidos con partners comerciales de
            CompraFácil con fines de marketing directo. Puede retirar su consentimiento
            contactando a nuestro Delegado de Protección de Datos (DPO) en horario de oficina
            de lunes a viernes de 9:00 a 13:00, escribiendo a dpo@comprafacil.test.
          </small>
          <button type="button" class="btn btn-tiny" id="opt-partners-uncheck" style="margin-top:8px;">Retirar consentimiento</button>
        </div>
      </div>

      <div class="error-banner brief" id="err-banner"></div>

      <div class="checkout-actions">
        <button class="btn btn-primary" id="place-order" style="flex:1;">Realizar pedido</button>
        <button class="btn btn-primary" id="back-cart" style="flex:1;">Volver al catálogo</button>
      </div>

      <!-- PROBLEMA #9: Control y libertad - enlace de "volver al carrito"
           intencionalmente oculto al fondo del formulario, color casi
           imperceptible. -->
      <div style="text-align:center; margin-top: 20px;">
        <a href="#" id="back-cart-link" class="back-link">← Volver al carrito</a>
      </div>
    </div>
  `}function X(t,a){return`
    <div class="checkout" style="text-align:center; padding: 60px 30px;">
      <h2>${t}</h2>
      <p style="color:var(--muted); margin-top:14px;">${a}</p>
    </div>
  `}function _(){return`
    <div class="checkout" style="text-align:center; padding: 40px 30px;">
      <h2>Mi cuenta</h2>
      <p style="color:var(--muted); margin-top:14px;">Inicia sesión para ver tu historial, direcciones guardadas y métodos de pago. (Función no disponible en este laboratorio.)</p>

      <!-- PROBLEMA #16: Dark pattern - forced continuity. El botón para
           cancelar el trial permanece deshabilitado hasta el día 8. -->
      <div class="premium-box">
        ${e.premiumTrialActive?`
          <h3>🌟 Plan Premium — Prueba activa</h3>
          <p>Tu prueba gratuita está activa (Día ${e.premiumTrialDay} de 7).</p>
          <button class="btn" id="cancel-trial" disabled title="Disponible a partir del día 8 de prueba">Cancelar trial</button>
          <small style="display:block; margin-top:8px; color: var(--muted);">El botón se habilita el día 8, una vez iniciado el cobro mensual.</small>
        `:`
          <h3>🌟 Plan Premium</h3>
          <p>Envío exprés ilimitado, soporte prioritario y descuentos exclusivos.</p>
          <a href="#" id="go-premium" class="btn btn-primary">Probar gratis 7 días</a>
        `}
      </div>
    </div>
  `}function J(){return`
    <div class="checkout premium-page">
      <h2>Plan Premium</h2>
      <div class="premium-hero">
        <div class="premium-free-badge">¡GRATIS hoy!</div>
        <p>Disfruta envío exprés ilimitado, soporte prioritario 24/7 y descuentos exclusivos con
           tu prueba gratuita de 7 días.</p>
      </div>
      <div class="form-grid">
        <div class="form-grid-full">
          <div class="label-group"><label>Número de tarjeta</label></div>
          <input type="text" id="premium-card" placeholder="1234 5678 9012 3456" />
        </div>
      </div>
      <button class="btn btn-primary" id="activate-trial" style="margin-top:14px;">Activar prueba gratis</button>
      <p class="premium-fineprint">
        Se renueva automáticamente a $9.99/mes al finalizar el periodo de prueba de 7 días.
        Para cancelar debe hacerlo con al menos 72 horas de antelación enviando una solicitud
        por correo postal certificado a nuestras oficinas.
      </p>
    </div>
  `}function Q(){return`
    <div class="checkout policy-page">
      <h2>Política de devoluciones</h2>
      <p style="color:var(--muted); margin-bottom:14px;">Consulta las condiciones para devolver un producto adquirido en CompraFácil.</p>
      ${T.map((t,a)=>`
        <details class="policy-section">
          <summary>Sección ${a+1} de ${T.length}: ${t.title}</summary>
          <div class="policy-body">
            ${t.body.map(c=>`<p>${c}</p>`).join("")}
          </div>
        </details>
      `).join("")}
    </div>
  `}function Y(){const t=e.checkoutStep||1;return`
    <div class="checkout stepper-page">
      <div class="stepper-progress">
        <span class="${t>=1?"active":""}">1. Envío</span> →
        <span class="${t>=2?"active":""}">2. Facturación</span> →
        <span class="${t>=3?"active":""}">3. Verificación <em class="step3-optional">(Opcional)</em></span>
      </div>

      ${t===1?`
        <h2>Paso 1: Dirección de envío</h2>
        <div class="form-grid">
          <div class="form-grid-full">
            <div class="label-group"><label>Dirección</label></div>
            <input type="text" id="st-addr" placeholder="Av. Principal 123" />
          </div>
          <div>
            <div class="label-group"><label>Ciudad</label></div>
            <input type="text" id="st-city" placeholder="Lima" />
          </div>
          <div>
            <div class="label-group"><label>Código postal</label></div>
            <input type="text" id="st-zip" placeholder="10001" />
          </div>
        </div>
        <div class="checkout-actions">
          <button class="btn btn-primary" id="step-next">Siguiente</button>
        </div>
      `:""}

      ${t===2?`
        <h2>Paso 2: Dirección de facturación</h2>
        <div class="form-grid">
          <div>
            <div class="label-group"><label>Nombre en la factura</label></div>
            <input type="text" id="bill-name" />
          </div>
          <div>
            <div class="label-group"><label>RUC / DNI fiscal</label></div>
            <input type="text" id="bill-doc" />
          </div>
          <div class="form-grid-full">
            <div class="label-group"><label>Dirección fiscal</label></div>
            <input type="text" id="bill-addr" />
          </div>
          <div>
            <div class="label-group"><label>Ciudad fiscal</label></div>
            <input type="text" id="bill-city" />
          </div>
          <div>
            <div class="label-group"><label>País fiscal</label></div>
            <input type="text" id="bill-country" />
          </div>
        </div>
        <div class="checkout-actions">
          <button class="btn btn-ghost" id="step-back">Atrás</button>
          <button class="btn btn-primary" id="step-next">Siguiente</button>
        </div>
      `:""}

      ${t===3?`
        <h2>Paso 3: Verificación de identidad <span class="step3-optional">(Opcional)</span></h2>
        <div class="form-grid">
          <div>
            <div class="label-group"><label>Foto del DNI (frontal)</label></div>
            <input type="file" id="id-photo" />
          </div>
          <div>
            <div class="label-group"><label>Selfie sosteniendo el DNI</label></div>
            <input type="file" id="id-selfie" />
          </div>
          <div class="form-grid-full">
            <div class="label-group"><label>Teléfono para verificación por SMS</label></div>
            <input type="tel" id="id-phone" placeholder="+51 999 999 999" />
          </div>
        </div>
        <div class="checkout-actions">
          <button class="btn btn-ghost" id="step-back">Atrás</button>
        </div>
        <div class="fitts-zone">
          <button class="btn-cancel-huge" id="fitts-cancel">Cancelar y volver</button>
          <button class="btn-confirm-tiny" id="fitts-confirm" title="Confirmar compra" aria-label="Confirmar compra"></button>
        </div>
      `:""}
    </div>
  `}function y(t){return`
    <div class="product-card" data-id="${t.id}">
      <div class="product-thumb">${t.thumb}</div>
      <div class="product-name">${t.name}</div>
      <div class="product-price">
        S/ ${t.price.toFixed(2)}
        ${t.oldPrice?`<span style="color:var(--muted); font-size:13px; font-weight:400; text-decoration:line-through; margin-left:6px;">S/ ${t.oldPrice.toFixed(2)}</span>`:""}
      </div>
      <div style="font-size:12px; color: var(--muted);">${t.rating} ★ · Stock: ${t.stock}</div>
      <div class="product-actions">
        <button class="btn btn-primary btn-tiny view-detail" data-id="${t.id}">Ver detalle</button>
        <button class="btn btn-secondary btn-tiny add-to-cart" data-id="${t.id}">Agregar</button>
      </div>
    </div>
  `}function Z(){if(e.cart.length===0)return`
      <h2 style="margin-bottom: 14px;">Tu carrito</h2>
      <div class="cart-empty">Tu carrito está vacío.</div>
      <button class="btn btn-ghost" id="close-cart" style="margin-top:20px; width:100%;">Seguir comprando</button>
    `;const t=e.cart.reduce((a,c)=>a+c.price*c.qty,0);return`
    <h2 style="margin-bottom: 14px;">Tu carrito (${e.cart.length})</h2>
    ${e.cart.map(a=>`
      <div class="cart-line">
        <div>
          <div style="font-weight:600;">${a.name}</div>
          <div class="qty">
            <button class="qty-dec" data-id="${a.id}">−</button>
            <input value="${a.qty}" readonly />
            <button class="qty-inc" data-id="${a.id}">+</button>
          </div>
        </div>
        <div>
          <div style="font-weight:700;">S/ ${(a.price*a.qty).toFixed(2)}</div>
          <button class="btn btn-tiny" style="background:transparent; color: var(--danger);" data-remove="${a.id}">Quitar</button>
        </div>
      </div>
    `).join("")}
    <div class="cart-footer">
      <div class="cart-total"><span>Total:</span><span>S/ ${t.toFixed(2)}</span></div>
      <button class="btn btn-primary" id="checkout-btn" style="width:100%;">Proceder al pago</button>
      <!-- PROBLEMA #8: Prevención de errores.
           "Vaciar carrito" sin confirmación. Un click y se borra todo. -->
      <button class="btn btn-ghost" id="empty-cart" style="width:100%; margin-top:8px; color: var(--danger);">Vaciar carrito</button>
      <button class="btn btn-ghost" id="close-cart-2" style="width:100%; margin-top:8px;">Seguir comprando</button>
    </div>
  `}function ee(){var t,a,c,n,o,s,d,g,p,b,k,x,E,P,C,S,A,$,L,B,I,D;(t=document.getElementById("cart-btn"))==null||t.addEventListener("click",ie),(a=document.getElementById("close-cart"))==null||a.addEventListener("click",f),(c=document.getElementById("close-cart-2"))==null||c.addEventListener("click",f),(n=document.getElementById("cart-overlay"))==null||n.addEventListener("click",i=>{i.target.id==="cart-overlay"&&f()}),(o=document.getElementById("checkout-btn"))==null||o.addEventListener("click",()=>{f(),e.route="checkout-steps",e.checkoutStep=1,l()}),(s=document.getElementById("empty-cart"))==null||s.addEventListener("click",()=>{e.cart=[],m("Carrito vaciado."),l()}),document.querySelectorAll("[data-remove]").forEach(i=>{i.addEventListener("click",()=>{e.cart=e.cart.filter(r=>r.id!==i.dataset.remove),l()})}),document.querySelectorAll(".qty-inc").forEach(i=>{i.addEventListener("click",()=>{const r=e.cart.find(u=>u.id===i.dataset.id);r&&(r.qty+=1),l()})}),document.querySelectorAll(".qty-dec").forEach(i=>{i.addEventListener("click",()=>{const r=e.cart.find(u=>u.id===i.dataset.id);r&&r.qty>1&&(r.qty-=1),l()})}),document.querySelectorAll(".add-to-cart").forEach(i=>{i.addEventListener("click",()=>q(i.dataset.id))}),document.querySelectorAll(".view-detail").forEach(i=>{i.addEventListener("click",()=>{const r=v.find(u=>u.id===i.dataset.id);e.selectedProduct=r,e.route="detail",l()})}),(d=document.getElementById("add-detail"))==null||d.addEventListener("click",()=>{e.selectedProduct&&q(e.selectedProduct.id)}),document.querySelectorAll("[data-route]").forEach(i=>{i.addEventListener("click",r=>{r.preventDefault();const u=i.dataset.route;e.route=u,e.selectedProduct=u==="category"?i.dataset.cat:null,l()})}),document.querySelectorAll('input[name="cat"]').forEach(i=>{i.addEventListener("change",()=>{e.filters.category=i.value,e.route=i.value==="Todas"?"home":"category",e.selectedProduct=i.value==="Todas"?null:i.value,l()})}),(g=document.getElementById("place-order"))==null||g.addEventListener("click",ae),(p=document.getElementById("back-cart"))==null||p.addEventListener("click",()=>{e.route="home",l()}),(b=document.getElementById("back-cart-link"))==null||b.addEventListener("click",i=>{i.preventDefault(),e.route="home",l()}),(k=document.getElementById("f-discount"))==null||k.addEventListener("input",i=>{e.discount=i.target.value}),(x=document.getElementById("opt-decline"))==null||x.addEventListener("click",i=>{i.preventDefault(),document.getElementById("opt-marketing").checked=!1,m("Preferencias actualizadas.")}),(E=document.getElementById("opt-partners"))==null||E.addEventListener("click",i=>{var r;e.partnersTrapRevealed||(i.preventDefault(),i.target.checked=!0,e.partnersTrapRevealed=!0,(r=document.getElementById("partners-legal-trap"))==null||r.classList.add("show"))}),(P=document.getElementById("opt-partners-uncheck"))==null||P.addEventListener("click",()=>{var r;e.optPartners=!1,e.partnersTrapRevealed=!1;const i=document.getElementById("opt-partners");i&&(i.checked=!1),(r=document.getElementById("partners-legal-trap"))==null||r.classList.remove("show"),m("Preferencia de partners actualizada.")}),(C=document.getElementById("go-premium"))==null||C.addEventListener("click",i=>{i.preventDefault(),e.route="premium",l()}),(S=document.getElementById("go-premium-footer"))==null||S.addEventListener("click",i=>{i.preventDefault(),e.route="premium",l()}),(A=document.getElementById("activate-trial"))==null||A.addEventListener("click",()=>{e.premiumTrialActive=!0,e.premiumTrialDay=1,e.route="cuenta",l(),m("Prueba Premium activada. ¡Disfruta 7 días gratis!")}),($=document.getElementById("footer-search-link"))==null||$.addEventListener("click",i=>{i.preventDefault();const r=document.getElementById("search-input");r==null||r.scrollIntoView({behavior:"smooth",block:"center"}),r==null||r.focus()}),(L=document.getElementById("step-next"))==null||L.addEventListener("click",()=>{e.checkoutStep=(e.checkoutStep||1)+1,l()}),(B=document.getElementById("step-back"))==null||B.addEventListener("click",()=>{e.checkoutStep=Math.max(1,(e.checkoutStep||1)-1),l()}),(I=document.getElementById("fitts-cancel"))==null||I.addEventListener("click",()=>{e.route="home",e.checkoutStep=1,l()}),(D=document.getElementById("fitts-confirm"))==null||D.addEventListener("click",()=>{var r;if(!((r=document.getElementById("id-phone"))==null?void 0:r.value.trim())){m("Debes completar el teléfono de verificación para continuar.");return}e.route="checkout",l()})}function q(t){const a=v.find(n=>n.id===t);if(!a)return;const c=e.cart.find(n=>n.id===t);c?c.qty+=1:e.cart.push({id:a.id,name:a.name,price:a.price,qty:1}),l(),m("Producto agregado al carrito.")}function ae(){const t=document.getElementById("f-name").value.trim(),a=document.getElementById("f-email").value.trim(),c=document.getElementById("f-dni").value.trim(),n=document.getElementById("err-banner"),o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a),s=[];if(t||s.push("nombre"),o||s.push("email"),c||s.push("DNI"),s.length){if(n.classList.add("show"),n.textContent="Error.",!o){const p=document.getElementById("err-email");p.classList.add("show"),p.textContent="Verifica el formato."}return}e.discount.trim()&&!e.discountApplied&&e.discount.trim().toUpperCase()==="DESC15"&&(e.discountApplied=!0);const d=e.cart.reduce((p,b)=>p+b.price*b.qty,0),g=e.discountApplied?d*.85:d;n.classList.remove("show"),n.style.background="#d4edda",n.style.color="#155724",n.textContent=`✓ Pedido confirmado. Total: S/ ${g.toFixed(2)}.`,n.classList.add("show"),e.cart=[],te()}function te(){var c,n;const t=`
    <div class="friend-spam-overlay" id="friend-spam-overlay">
      <div class="friend-spam-modal">
        <h3>🎉 ¡Cuéntale a tus amigos!</h3>
        <p>Comparte CompraFácil con tus contactos y ambos reciben S/ 10 de descuento.</p>
        <div class="form-grid" style="margin: 14px 0;">
          <div class="form-grid-full">
            <div class="label-group"><label>WhatsApp</label></div>
            <input type="text" id="spam-whatsapp" value="Juan, María, Carlos, Ana, Luis, Rosa, Pedro, Sofía, Diego, Valentina" />
          </div>
          <div class="form-grid-full">
            <div class="label-group"><label>Correos</label></div>
            <input type="text" id="spam-email" value="juan@ejemplo.com, maria@ejemplo.com, carlos@ejemplo.com" />
          </div>
        </div>
        <div class="friend-spam-actions">
          <button id="friend-spam-share" class="btn-share-bait">Compartir con 10 amigos</button>
          <button id="friend-spam-decline" class="btn-decline-tiny">No, gracias</button>
        </div>
      </div>
    </div>
  `,a=document.createElement("div");a.innerHTML=t,document.body.appendChild(a.firstElementChild),(c=document.getElementById("friend-spam-share"))==null||c.addEventListener("click",()=>{var s,d;const o=((s=document.getElementById("spam-whatsapp"))==null?void 0:s.value)||"";(d=document.getElementById("friend-spam-overlay"))==null||d.remove(),m(`Compartido con: ${o}`)}),(n=document.getElementById("friend-spam-decline"))==null||n.addEventListener("click",()=>{var o;(o=document.getElementById("friend-spam-overlay"))==null||o.remove()})}function ie(){e.cartOpen=!0,l()}function f(){e.cartOpen=!1,l()}function m(t){const a=document.getElementById("toast");a&&(a.textContent=t,a.classList.add("show"),clearTimeout(a._tm),a._tm=setTimeout(()=>a.classList.remove("show"),1800))}l();
