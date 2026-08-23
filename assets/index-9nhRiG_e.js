(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();const v=[{id:"P001",name:"Auriculares Bluetooth ProSound X1",category:"Audio",price:159.9,oldPrice:219.9,rating:4.6,stock:14,thumb:"🎧"},{id:"P002",name:"Smartwatch FitPlus Active 3",category:"Wearables",price:349,oldPrice:null,rating:4.3,stock:7,thumb:"⌚"},{id:"P003",name:"Teclado mecánico RGB K-75",category:"Periféricos",price:89.5,oldPrice:129,rating:4.7,stock:22,thumb:"⌨️"},{id:"P004",name:"Cámara web HD StudioCam 1080",category:"Periféricos",price:64.9,oldPrice:null,rating:4.1,stock:3,thumb:"📷"},{id:"P005",name:"Mochila urbana TechCarry 22L",category:"Accesorios",price:49.9,oldPrice:69,rating:4.5,stock:35,thumb:"🎒"},{id:"P006",name:"Mouse ergonómico ErgoMouse Vertical",category:"Periféricos",price:39.9,oldPrice:null,rating:4.4,stock:18,thumb:"🖱️"},{id:"P007",name:"Lámpara LED SmartGlow con WiFi",category:"Hogar",price:28.5,oldPrice:null,rating:4,stock:50,thumb:"💡"},{id:"P008",name:"Cargador rápido GaN 65W",category:"Accesorios",price:32,oldPrice:44,rating:4.6,stock:27,thumb:"🔌"},{id:"P009",name:"Parlante portátil AquaSound Mini",category:"Audio",price:79,oldPrice:null,rating:4.2,stock:11,thumb:"🔊"}],S=["Todas","Audio","Wearables","Periféricos","Accesorios","Hogar"],C=["Cualquier precio","Menos de S/ 50","S/ 50 - S/ 100","S/ 100 - S/ 200","Más de S/ 200"],t={cart:[],discount:"",discountApplied:!1,route:"home",selectedProduct:null,cartOpen:!1,filters:{category:"Todas",price:"Cualquier precio"}},$=document.getElementById("app");function l(){var r;const a=t.cart.reduce((n,o)=>n+o.qty,0);$.innerHTML=`
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
        ${A()}
      </aside>
      <section class="main">
        ${L()}
      </section>
    </div>

    <div class="cart-overlay" id="cart-overlay">
      <div class="cart-panel" id="cart-panel">
        ${O()}
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `;const e=document.getElementById("cart-count");e&&a>0&&(e.textContent=`(${a})`,e.style.display="inline",e.style.background="#e76f51",e.style.padding="2px 6px",e.style.borderRadius="10px",e.style.fontSize="12px"),t.cartOpen&&((r=document.getElementById("cart-overlay"))==null||r.classList.add("open")),D()}function A(){return`
    <h3>Filtrar productos</h3>
    <div class="filter-group">
      <strong style="font-size:13px;">Categoría</strong>
      ${S.map(e=>`
        <label><input type="radio" name="cat" value="${e}" ${t.filters.category===e?"checked":""}/> ${e}</label>
      `).join("")}
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Precio</strong>
      ${C.map(e=>`
        <label><input type="radio" name="price" value="${e}" ${t.filters.price===e?"checked":""}/> ${e}</label>
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
  `}function L(){return t.route==="home"?f():t.route==="category"?I():t.route==="detail"?T():t.route==="checkout"?w():t.route==="ofertas"?q():t.route==="ayuda"?E("Centro de ayuda","¿Necesitas ayuda? Escríbenos a soporte@comprafacil.test o llama al (01) 555-0000 de lunes a sábado de 9:00 a 18:00."):t.route==="cuenta"?E("Mi cuenta","Inicia sesión para ver tu historial, direcciones guardadas y métodos de pago. (Función no disponible en este laboratorio.)"):f()}function f(){const a=v.slice(0,6);return`
    ${B()}
    <div class="section-title">Destacados para ti</div>
    <div class="product-grid">
      ${a.map(e=>h(e)).join("")}
    </div>
  `}function B(){return`
    <div class="promo-banner">
      <h2>¡GRAN SUPER MEGA OFERTA! 🎉</h2>
      <small>Aprovecha HOY nuestro evento EXCLUSIVO con descuentos IMPERDIBLES + envío GRATIS + 3x2 + cupón EXTRA + regalo SORPRESA + puntos DOBLES en tu próxima compra. ¡Date prisa! Tiempo limitado. Stock limitado. Aplican restricciones.</small>
      <div class="promo-grid">
        <span>3x2</span><span>Envío gratis</span><span>-30% hoy</span><span>+Puntos</span>
        <span>Regalo</span><span>Cupón extra</span><span>Sorteo</span><span>Cashback</span>
      </div>
    </div>
  `}function I(){const a=t.selectedProduct||"Audio",e=v.filter(r=>r.category===a);return`
    <div class="section-title">Categoría: ${a}</div>
    <div class="product-grid">
      ${e.map(r=>h(r)).join("")}
    </div>
  `}function q(){return`
    <div class="section-title">🔥 Ofertas</div>
    <div class="product-grid">
      ${v.filter(e=>e.oldPrice).map(e=>h(e)).join("")}
    </div>
  `}function T(){const a=t.selectedProduct;return a?`
    <div class="detail-view">
      <div class="detail-img">Imagen del producto</div>
      <div class="detail-info">
        <h1>${a.name}</h1>
        <div style="color: var(--muted); font-size: 14px;">Categoría: ${a.category} · Valoración: ${a.rating} ★ · Stock: ${a.stock}</div>
        <div class="detail-price">
          S/ ${a.price.toFixed(2)}
          ${a.oldPrice?`<span style="color:var(--muted); text-decoration:line-through; font-size:18px; font-weight:400; margin-left:8px;">S/ ${a.oldPrice.toFixed(2)}</span>`:""}
        </div>
        <p style="color: var(--muted); margin-bottom: 18px;">Producto de alta calidad. Envío a todo el país. Garantía del fabricante por 12 meses.</p>
        <button class="btn btn-primary" id="add-detail">Agregar al carrito</button>
      </div>
    </div>
  `:f()}function w(){return`
    <div class="checkout">
      <h2>Finalizar compra</h2>

      ${t.discountApplied?`
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
        <input type="text" id="f-discount" placeholder="Ej. DESC15" value="${t.discount}" />
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
  `}function E(a,e){return`
    <div class="checkout" style="text-align:center; padding: 60px 30px;">
      <h2>${a}</h2>
      <p style="color:var(--muted); margin-top:14px;">${e}</p>
    </div>
  `}function h(a){return`
    <div class="product-card" data-id="${a.id}">
      <div class="product-thumb">${a.thumb}</div>
      <div class="product-name">${a.name}</div>
      <div class="product-price">
        S/ ${a.price.toFixed(2)}
        ${a.oldPrice?`<span style="color:var(--muted); font-size:13px; font-weight:400; text-decoration:line-through; margin-left:6px;">S/ ${a.oldPrice.toFixed(2)}</span>`:""}
      </div>
      <div style="font-size:12px; color: var(--muted);">${a.rating} ★ · Stock: ${a.stock}</div>
      <div class="product-actions">
        <button class="btn btn-primary btn-tiny view-detail" data-id="${a.id}">Ver detalle</button>
        <button class="btn btn-secondary btn-tiny add-to-cart" data-id="${a.id}">Agregar</button>
      </div>
    </div>
  `}function O(){if(t.cart.length===0)return`
      <h2 style="margin-bottom: 14px;">Tu carrito</h2>
      <div class="cart-empty">Tu carrito está vacío.</div>
      <button class="btn btn-ghost" id="close-cart" style="margin-top:20px; width:100%;">Seguir comprando</button>
    `;const a=t.cart.reduce((e,r)=>e+r.price*r.qty,0);return`
    <h2 style="margin-bottom: 14px;">Tu carrito (${t.cart.length})</h2>
    ${t.cart.map(e=>`
      <div class="cart-line">
        <div>
          <div style="font-weight:600;">${e.name}</div>
          <div class="qty">
            <button class="qty-dec" data-id="${e.id}">−</button>
            <input value="${e.qty}" readonly />
            <button class="qty-inc" data-id="${e.id}">+</button>
          </div>
        </div>
        <div>
          <div style="font-weight:700;">S/ ${(e.price*e.qty).toFixed(2)}</div>
          <button class="btn btn-tiny" style="background:transparent; color: var(--danger);" data-remove="${e.id}">Quitar</button>
        </div>
      </div>
    `).join("")}
    <div class="cart-footer">
      <div class="cart-total"><span>Total:</span><span>S/ ${a.toFixed(2)}</span></div>
      <button class="btn btn-primary" id="checkout-btn" style="width:100%;">Proceder al pago</button>
      <!-- PROBLEMA #8: Prevención de errores.
           "Vaciar carrito" sin confirmación. Un click y se borra todo. -->
      <button class="btn btn-ghost" id="empty-cart" style="width:100%; margin-top:8px; color: var(--danger);">Vaciar carrito</button>
      <button class="btn btn-ghost" id="close-cart-2" style="width:100%; margin-top:8px;">Seguir comprando</button>
    </div>
  `}function D(){var a,e,r,n,o,c,s,m,p,b,x,k;(a=document.getElementById("cart-btn"))==null||a.addEventListener("click",z),(e=document.getElementById("close-cart"))==null||e.addEventListener("click",y),(r=document.getElementById("close-cart-2"))==null||r.addEventListener("click",y),(n=document.getElementById("cart-overlay"))==null||n.addEventListener("click",i=>{i.target.id==="cart-overlay"&&y()}),(o=document.getElementById("checkout-btn"))==null||o.addEventListener("click",()=>{y(),t.route="checkout",l()}),(c=document.getElementById("empty-cart"))==null||c.addEventListener("click",()=>{t.cart=[],g("Carrito vaciado."),l()}),document.querySelectorAll("[data-remove]").forEach(i=>{i.addEventListener("click",()=>{t.cart=t.cart.filter(d=>d.id!==i.dataset.remove),l()})}),document.querySelectorAll(".qty-inc").forEach(i=>{i.addEventListener("click",()=>{const d=t.cart.find(u=>u.id===i.dataset.id);d&&(d.qty+=1),l()})}),document.querySelectorAll(".qty-dec").forEach(i=>{i.addEventListener("click",()=>{const d=t.cart.find(u=>u.id===i.dataset.id);d&&d.qty>1&&(d.qty-=1),l()})}),document.querySelectorAll(".add-to-cart").forEach(i=>{i.addEventListener("click",()=>P(i.dataset.id))}),document.querySelectorAll(".view-detail").forEach(i=>{i.addEventListener("click",()=>{const d=v.find(u=>u.id===i.dataset.id);t.selectedProduct=d,t.route="detail",l()})}),(s=document.getElementById("add-detail"))==null||s.addEventListener("click",()=>{t.selectedProduct&&P(t.selectedProduct.id)}),document.querySelectorAll(".main-nav a").forEach(i=>{i.addEventListener("click",d=>{d.preventDefault();const u=i.dataset.route;t.route=u,t.selectedProduct=u==="category"?i.dataset.cat:null,l()})}),document.querySelectorAll('input[name="cat"]').forEach(i=>{i.addEventListener("change",()=>{t.filters.category=i.value,t.route=i.value==="Todas"?"home":"category",t.selectedProduct=i.value==="Todas"?null:i.value,l()})}),(m=document.getElementById("place-order"))==null||m.addEventListener("click",M),(p=document.getElementById("back-cart"))==null||p.addEventListener("click",()=>{t.route="home",l()}),(b=document.getElementById("back-cart-link"))==null||b.addEventListener("click",i=>{i.preventDefault(),t.route="home",l()}),(x=document.getElementById("f-discount"))==null||x.addEventListener("input",i=>{t.discount=i.target.value}),(k=document.getElementById("opt-decline"))==null||k.addEventListener("click",i=>{i.preventDefault(),document.getElementById("opt-marketing").checked=!1,g("Preferencias actualizadas.")})}function P(a){const e=v.find(n=>n.id===a);if(!e)return;const r=t.cart.find(n=>n.id===a);r?r.qty+=1:t.cart.push({id:e.id,name:e.name,price:e.price,qty:1}),l(),g("Producto agregado al carrito.")}function M(){const a=document.getElementById("f-name").value.trim(),e=document.getElementById("f-email").value.trim(),r=document.getElementById("f-dni").value.trim(),n=document.getElementById("err-banner"),o=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),c=[];if(a||c.push("nombre"),o||c.push("email"),r||c.push("DNI"),c.length){if(n.classList.add("show"),n.textContent="Error.",!o){const p=document.getElementById("err-email");p.classList.add("show"),p.textContent="Verifica el formato."}return}t.discount.trim()&&!t.discountApplied&&t.discount.trim().toUpperCase()==="DESC15"&&(t.discountApplied=!0);const s=t.cart.reduce((p,b)=>p+b.price*b.qty,0),m=t.discountApplied?s*.85:s;n.classList.remove("show"),n.style.background="#d4edda",n.style.color="#155724",n.textContent=`✓ Pedido confirmado. Total: S/ ${m.toFixed(2)}.`,n.classList.add("show"),t.cart=[]}function z(){t.cartOpen=!0,l()}function y(){t.cartOpen=!1,l()}function g(a){const e=document.getElementById("toast");e&&(e.textContent=a,e.classList.add("show"),clearTimeout(e._tm),e._tm=setTimeout(()=>e.classList.remove("show"),1800))}l();
