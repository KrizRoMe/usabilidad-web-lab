import { products, categories, priceRanges } from './data.js';

// =====================================================
// Estado global de la aplicación
// =====================================================
const state = {
  cart: [],
  discount: '',
  discountApplied: false,
  route: 'home',
  selectedProduct: null,
  cartOpen: false,
  filters: { category: 'Todas', price: 'Cualquier precio' },
};

// =====================================================
// Renderizado
// =====================================================
const app = document.getElementById('app');

function render() {
  const cartCount = state.cart.reduce((s, l) => s + l.qty, 0);

  app.innerHTML = `
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
        ${renderSidebar()}
      </aside>
      <section class="main">
        ${renderMain()}
      </section>
    </div>

    <div class="cart-overlay" id="cart-overlay">
      <div class="cart-panel" id="cart-panel">
        ${renderCartPanel()}
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `;

  // Actualizar contador del carrito (PROBLEMA #7: intencionalmente sin badge numérico)
  const cnt = document.getElementById('cart-count');
  if (cnt && cartCount > 0) {
    cnt.textContent = `(${cartCount})`;
    cnt.style.display = 'inline';
    cnt.style.background = '#e76f51';
    cnt.style.padding = '2px 6px';
    cnt.style.borderRadius = '10px';
    cnt.style.fontSize = '12px';
  }

  // Mantener el panel del carrito abierto tras un re-render (p. ej. al
  // modificar cantidades) para no interrumpir el flujo del usuario.
  if (state.cartOpen) {
    document.getElementById('cart-overlay')?.classList.add('open');
  }

  attachListeners();
}

function renderSidebar() {
  // PROBLEMA #1: Ley de Hick - muchas opciones de filtro simultáneas.
  const filters = `
    <h3>Filtrar productos</h3>
    <div class="filter-group">
      <strong style="font-size:13px;">Categoría</strong>
      ${categories.map(c => `
        <label><input type="radio" name="cat" value="${c}" ${state.filters.category === c ? 'checked' : ''}/> ${c}</label>
      `).join('')}
    </div>
    <div class="filter-group">
      <strong style="font-size:13px;">Precio</strong>
      ${priceRanges.map(p => `
        <label><input type="radio" name="price" value="${p}" ${state.filters.price === p ? 'checked' : ''}/> ${p}</label>
      `).join('')}
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
  `;
  return filters;
}

function renderMain() {
  if (state.route === 'home')     return renderHome();
  if (state.route === 'category') return renderCategory();
  if (state.route === 'detail')   return renderDetail();
  if (state.route === 'checkout') return renderCheckout();
  if (state.route === 'ofertas')  return renderOfertas();
  if (state.route === 'ayuda')    return renderGenericPage('Centro de ayuda', '¿Necesitas ayuda? Escríbenos a soporte@comprafacil.test o llama al (01) 555-0000 de lunes a sábado de 9:00 a 18:00.');
  if (state.route === 'cuenta')   return renderGenericPage('Mi cuenta', 'Inicia sesión para ver tu historial, direcciones guardadas y métodos de pago. (Función no disponible en este laboratorio.)');
  return renderHome();
}

function renderHome() {
  const featured = products.slice(0, 6);
  return `
    ${renderPromoBanner()}
    <div class="section-title">Destacados para ti</div>
    <div class="product-grid">
      ${featured.map(p => productCard(p)).join('')}
    </div>
  `;
}

function renderPromoBanner() {
  // PROBLEMA #2: Carga cognitiva — banner sobrecargado con demasiada información.
  return `
    <div class="promo-banner">
      <h2>¡GRAN SUPER MEGA OFERTA! 🎉</h2>
      <small>Aprovecha HOY nuestro evento EXCLUSIVO con descuentos IMPERDIBLES + envío GRATIS + 3x2 + cupón EXTRA + regalo SORPRESA + puntos DOBLES en tu próxima compra. ¡Date prisa! Tiempo limitado. Stock limitado. Aplican restricciones.</small>
      <div class="promo-grid">
        <span>3x2</span><span>Envío gratis</span><span>-30% hoy</span><span>+Puntos</span>
        <span>Regalo</span><span>Cupón extra</span><span>Sorteo</span><span>Cashback</span>
      </div>
    </div>
  `;
}

function renderCategory() {
  const cat = state.selectedProduct || 'Audio';
  const filtered = products.filter(p => p.category === cat);
  return `
    <div class="section-title">Categoría: ${cat}</div>
    <div class="product-grid">
      ${filtered.map(p => productCard(p)).join('')}
    </div>
  `;
}

function renderOfertas() {
  const filtered = products.filter(p => p.oldPrice);
  return `
    <div class="section-title">🔥 Ofertas</div>
    <div class="product-grid">
      ${filtered.map(p => productCard(p)).join('')}
    </div>
  `;
}

function renderDetail() {
  const p = state.selectedProduct;
  if (!p) return renderHome();
  return `
    <div class="detail-view">
      <div class="detail-img">Imagen del producto</div>
      <div class="detail-info">
        <h1>${p.name}</h1>
        <div style="color: var(--muted); font-size: 14px;">Categoría: ${p.category} · Valoración: ${p.rating} ★ · Stock: ${p.stock}</div>
        <div class="detail-price">
          S/ ${p.price.toFixed(2)}
          ${p.oldPrice ? `<span style="color:var(--muted); text-decoration:line-through; font-size:18px; font-weight:400; margin-left:8px;">S/ ${p.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <p style="color: var(--muted); margin-bottom: 18px;">Producto de alta calidad. Envío a todo el país. Garantía del fabricante por 12 meses.</p>
        <button class="btn btn-primary" id="add-detail">Agregar al carrito</button>
      </div>
    </div>
  `;
}

function renderCheckout() {
  // PROBLEMA #5: Reconocimiento vs recuerdo.
  // El código se muestra en home y se exige en checkout sin conservarlo visible.
  return `
    <div class="checkout">
      <h2>Finalizar compra</h2>

      ${!state.discountApplied ? `
        <div class="discount-hint" id="discount-hint">
          ¿Tienes un código de descuento? Ingrésalo abajo.
          (Pista: el código <code>DESC15</code> se mostró en la página principal).
        </div>
      ` : `
        <div class="discount-hint" style="background:#d4edda; border-color:#c3e6cb; color:#155724;">
          ✓ Descuento <code>DESC15</code> aplicado: 15% OFF.
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
        <input type="text" id="f-discount" placeholder="Ej. DESC15" value="${state.discount}" />
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
  `;
}

function renderGenericPage(title, body) {
  return `
    <div class="checkout" style="text-align:center; padding: 60px 30px;">
      <h2>${title}</h2>
      <p style="color:var(--muted); margin-top:14px;">${body}</p>
    </div>
  `;
}

function productCard(p) {
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-thumb">${p.thumb}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price">
        S/ ${p.price.toFixed(2)}
        ${p.oldPrice ? `<span style="color:var(--muted); font-size:13px; font-weight:400; text-decoration:line-through; margin-left:6px;">S/ ${p.oldPrice.toFixed(2)}</span>` : ''}
      </div>
      <div style="font-size:12px; color: var(--muted);">${p.rating} ★ · Stock: ${p.stock}</div>
      <div class="product-actions">
        <button class="btn btn-primary btn-tiny view-detail" data-id="${p.id}">Ver detalle</button>
        <button class="btn btn-secondary btn-tiny add-to-cart" data-id="${p.id}">Agregar</button>
      </div>
    </div>
  `;
}

function renderCartPanel() {
  if (state.cart.length === 0) {
    return `
      <h2 style="margin-bottom: 14px;">Tu carrito</h2>
      <div class="cart-empty">Tu carrito está vacío.</div>
      <button class="btn btn-ghost" id="close-cart" style="margin-top:20px; width:100%;">Seguir comprando</button>
    `;
  }
  const total = state.cart.reduce((s, l) => s + l.price * l.qty, 0);
  return `
    <h2 style="margin-bottom: 14px;">Tu carrito (${state.cart.length})</h2>
    ${state.cart.map(l => `
      <div class="cart-line">
        <div>
          <div style="font-weight:600;">${l.name}</div>
          <div class="qty">
            <button class="qty-dec" data-id="${l.id}">−</button>
            <input value="${l.qty}" readonly />
            <button class="qty-inc" data-id="${l.id}">+</button>
          </div>
        </div>
        <div>
          <div style="font-weight:700;">S/ ${(l.price * l.qty).toFixed(2)}</div>
          <button class="btn btn-tiny" style="background:transparent; color: var(--danger);" data-remove="${l.id}">Quitar</button>
        </div>
      </div>
    `).join('')}
    <div class="cart-footer">
      <div class="cart-total"><span>Total:</span><span>S/ ${total.toFixed(2)}</span></div>
      <button class="btn btn-primary" id="checkout-btn" style="width:100%;">Proceder al pago</button>
      <!-- PROBLEMA #8: Prevención de errores.
           "Vaciar carrito" sin confirmación. Un click y se borra todo. -->
      <button class="btn btn-ghost" id="empty-cart" style="width:100%; margin-top:8px; color: var(--danger);">Vaciar carrito</button>
      <button class="btn btn-ghost" id="close-cart-2" style="width:100%; margin-top:8px;">Seguir comprando</button>
    </div>
  `;
}

// =====================================================
// Listeners
// =====================================================
function attachListeners() {
  // Carrito toggle
  document.getElementById('cart-btn')?.addEventListener('click', openCart);
  document.getElementById('close-cart')?.addEventListener('click', closeCart);
  document.getElementById('close-cart-2')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', e => {
    if (e.target.id === 'cart-overlay') closeCart();
  });

  // Cart actions
  document.getElementById('checkout-btn')?.addEventListener('click', () => {
    closeCart();
    state.route = 'checkout';
    render();
  });
  document.getElementById('empty-cart')?.addEventListener('click', () => {
    // PROBLEMA #8: Vaciar carrito sin confirmación
    state.cart = [];
    showToast('Carrito vaciado.');
    render();
  });
  document.querySelectorAll('[data-remove]').forEach(b => {
    b.addEventListener('click', () => {
      state.cart = state.cart.filter(l => l.id !== b.dataset.remove);
      render();
    });
  });
  document.querySelectorAll('.qty-inc').forEach(b => {
    b.addEventListener('click', () => {
      const l = state.cart.find(x => x.id === b.dataset.id);
      if (l) l.qty += 1;
      render();
    });
  });
  document.querySelectorAll('.qty-dec').forEach(b => {
    b.addEventListener('click', () => {
      const l = state.cart.find(x => x.id === b.dataset.id);
      if (l && l.qty > 1) l.qty -= 1;
      render();
    });
  });

  // Productos
  document.querySelectorAll('.add-to-cart').forEach(b => {
    b.addEventListener('click', () => addToCart(b.dataset.id));
  });
  document.querySelectorAll('.view-detail').forEach(b => {
    b.addEventListener('click', () => {
      const p = products.find(x => x.id === b.dataset.id);
      state.selectedProduct = p;
      state.route = 'detail';
      render();
    });
  });
  document.getElementById('add-detail')?.addEventListener('click', () => {
    if (state.selectedProduct) addToCart(state.selectedProduct.id);
  });

  // Nav
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const r = a.dataset.route;
      state.route = r;
      state.selectedProduct = r === 'category' ? a.dataset.cat : null;
      render();
    });
  });

  // Sidebar filters
  document.querySelectorAll('input[name="cat"]').forEach(r => {
    r.addEventListener('change', () => {
      state.filters.category = r.value;
      state.route = r.value === 'Todas' ? 'home' : 'category';
      state.selectedProduct = r.value === 'Todas' ? null : r.value;
      render();
    });
  });

  // Checkout
  document.getElementById('place-order')?.addEventListener('click', placeOrder);
  document.getElementById('back-cart')?.addEventListener('click', () => {
    state.route = 'home'; render();
  });
  document.getElementById('back-cart-link')?.addEventListener('click', e => {
    e.preventDefault(); state.route = 'home'; render();
  });
  document.getElementById('f-discount')?.addEventListener('input', e => {
    state.discount = e.target.value;
  });
  document.getElementById('opt-decline')?.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('opt-marketing').checked = false;
    showToast('Preferencias actualizadas.');
  });
}

// =====================================================
// Acciones
// =====================================================
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = state.cart.find(l => l.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
  render();
  // PROBLEMA #7: Visibilidad del estado del sistema.
  // El toast es GENÉRICO ("Producto agregado") sin nombre ni cantidad.
  showToast('Producto agregado al carrito.');
}

function placeOrder() {
  // PROBLEMA #6: Mensaje de error deficiente.
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const dni = document.getElementById('f-dni').value.trim();
  const banner = document.getElementById('err-banner');

  // Validación muy laxa + mensaje poco informativo
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const errors = [];
  if (!name) errors.push('nombre');
  if (!emailOk) errors.push('email');
  if (!dni) errors.push('DNI');

  if (errors.length) {
    // Mensaje BREVE que no indica qué campo específico ni cómo arreglarlo
    banner.classList.add('show');
    banner.textContent = 'Error.';
    // Pequeña pista en el campo email
    if (!emailOk) {
      const err = document.getElementById('err-email');
      err.classList.add('show');
      err.textContent = 'Verifica el formato.';
    }
    return;
  }

  // Validar descuento
  if (state.discount.trim() && !state.discountApplied) {
    if (state.discount.trim().toUpperCase() === 'DESC15') {
      state.discountApplied = true;
    }
  }

  // "Pedido realizado"
  const rawTotal = state.cart.reduce((s, l) => s + l.price * l.qty, 0);
  const finalTotal = state.discountApplied ? rawTotal * 0.85 : rawTotal;
  banner.classList.remove('show');
  banner.style.background = '#d4edda';
  banner.style.color = '#155724';
  banner.textContent = `✓ Pedido confirmado. Total: S/ ${finalTotal.toFixed(2)}.`;
  banner.classList.add('show');
  state.cart = [];
}

function openCart() { state.cartOpen = true; render(); }
function closeCart() { state.cartOpen = false; render(); }

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove('show'), 1800);
}

// Inicializar
// Insertar banner de descuento en home (PROBLEMA #5)
// Lo añadiremos como parte del banner existente.
render();
