// Catálogo de productos (offline, sin APIs externas)
export const products = [
  {
    id: 'P001',
    name: 'Auriculares Bluetooth ProSound X1',
    category: 'Audio',
    price: 159.9,
    oldPrice: 219.9,
    rating: 4.6,
    stock: 14,
    thumb: '🎧',
  },
  {
    id: 'P002',
    name: 'Smartwatch FitPlus Active 3',
    category: 'Wearables',
    price: 349.0,
    oldPrice: null,
    rating: 4.3,
    stock: 7,
    thumb: '⌚',
  },
  {
    id: 'P003',
    name: 'Teclado mecánico RGB K-75',
    category: 'Periféricos',
    price: 89.5,
    oldPrice: 129.0,
    rating: 4.7,
    stock: 22,
    thumb: '⌨️',
  },
  {
    id: 'P004',
    name: 'Cámara web HD StudioCam 1080',
    category: 'Periféricos',
    price: 64.9,
    oldPrice: null,
    rating: 4.1,
    stock: 3,
    thumb: '📷',
  },
  {
    id: 'P005',
    name: 'Mochila urbana TechCarry 22L',
    category: 'Accesorios',
    price: 49.9,
    oldPrice: 69.0,
    rating: 4.5,
    stock: 35,
    thumb: '🎒',
  },
  {
    id: 'P006',
    name: 'Mouse ergonómico ErgoMouse Vertical',
    category: 'Periféricos',
    price: 39.9,
    oldPrice: null,
    rating: 4.4,
    stock: 18,
    thumb: '🖱️',
  },
  {
    id: 'P007',
    name: 'Lámpara LED SmartGlow con WiFi',
    category: 'Hogar',
    price: 28.5,
    oldPrice: null,
    rating: 4.0,
    stock: 50,
    thumb: '💡',
  },
  {
    id: 'P008',
    name: 'Cargador rápido GaN 65W',
    category: 'Accesorios',
    price: 32.0,
    oldPrice: 44.0,
    rating: 4.6,
    stock: 27,
    thumb: '🔌',
  },
  {
    id: 'P009',
    name: 'Parlante portátil AquaSound Mini',
    category: 'Audio',
    price: 79.0,
    oldPrice: null,
    rating: 4.2,
    stock: 11,
    thumb: '🔊',
  },
];

export const categories = ['Todas', 'Audio', 'Wearables', 'Periféricos', 'Accesorios', 'Hogar'];
export const priceRanges = ['Cualquier precio', 'Menos de S/ 50', 'S/ 50 - S/ 100', 'S/ 100 - S/ 200', 'Más de S/ 200'];

// PROBLEMA #20 (Ley de Miller): 47 especificaciones técnicas sin agrupar,
// pensadas para volcarse como un muro de texto plano en el detalle de producto.
export const productSpecs = [
  'Dimensiones: 18 x 15 x 8 cm', 'Peso: 320 g', 'Material carcasa: Policarbonato ABS',
  'Color: Negro mate', 'Conectividad: Bluetooth 5.3', 'Alcance inalámbrico: 10 m',
  'Batería: Litio-ion 300 mAh', 'Autonomía: 20 horas de uso continuo', 'Tiempo de carga: 1.5 horas',
  'Puerto de carga: USB-C', 'Resistencia al agua: IPX4', 'Frecuencia de respuesta: 20 Hz - 20 kHz',
  'Impedancia: 32 Ohm', 'Sensibilidad: 105 dB', 'Micrófono incorporado: Sí',
  'Cancelación de ruido: Pasiva', 'Compatibilidad: Android, iOS, Windows, macOS', 'Códec de audio: SBC, AAC',
  'Multipunto: 2 dispositivos', 'Controles táctiles: Sí', 'Asistente de voz: Compatible',
  'Estuche de carga incluido: Sí', 'Garantía: 12 meses', 'País de fabricación: China',
  'Certificaciones: CE, FCC, RoHS', 'Contenido del paquete: producto, cable USB-C, manual',
  'Idiomas del manual: Español, inglés, portugués', 'Peso del empaque: 450 g',
  'Dimensiones del empaque: 20 x 18 x 10 cm', 'Conexión auxiliar: No incluida',
  'Modo de bajo consumo: Sí', 'Indicador LED de batería: Sí', 'Botón de encendido: Lateral',
  'Sensor de proximidad: No', 'Ecualizador personalizable: Vía app', 'Actualización de firmware: Vía app',
  'Vida útil estimada: 3 años', 'Reciclable: Parcialmente', 'Uso recomendado: Interior y exterior',
  'Temperatura de operación: 0°C a 40°C', 'Humedad relativa soportada: hasta 80%',
  'Nivel de presión sonora máxima: 110 dB', 'Tipo de acolchado: Espuma viscoelástica',
  'Ajuste regulable: Sí', 'Plegable: Sí', 'Soporte para llamadas: Sí', 'Cancelación de eco: Sí',
];

// PROBLEMA #19 (Ley de Hick): mega menú con 11 categorías y hasta 5
// subcategorías cada una, para forzar al menos 3 clics hasta un producto.
export const megaNavCategories = [
  { name: 'Audio', icon: '🎧', subcategories: [
    { name: 'Auriculares', icon: '🎧' }, { name: 'Parlantes', icon: '🔊' }, { name: 'Micrófonos', icon: '🎙️' },
    { name: 'Barras de sonido', icon: '📻' }, { name: 'Accesorios de audio', icon: '🔌' },
  ]},
  { name: 'Wearables', icon: '⌚', subcategories: [
    { name: 'Smartwatches', icon: '⌚' }, { name: 'Bandas fitness', icon: '📿' }, { name: 'Anillos inteligentes', icon: '💍' },
    { name: 'Gafas inteligentes', icon: '🕶️' }, { name: 'Accesorios wearables', icon: '🔗' },
  ]},
  { name: 'Periféricos', icon: '🖱️', subcategories: [
    { name: 'Teclados', icon: '⌨️' }, { name: 'Mouses', icon: '🖱️' }, { name: 'Webcams', icon: '📷' },
    { name: 'Alfombrillas', icon: '🟫' }, { name: 'Hubs USB', icon: '🔌' },
  ]},
  { name: 'Accesorios', icon: '🎒', subcategories: [
    { name: 'Mochilas', icon: '🎒' }, { name: 'Fundas', icon: '📱' }, { name: 'Cables', icon: '🔌' },
    { name: 'Soportes', icon: '📐' }, { name: 'Organizadores', icon: '🗂️' },
  ]},
  { name: 'Hogar', icon: '💡', subcategories: [
    { name: 'Iluminación', icon: '💡' }, { name: 'Enchufes inteligentes', icon: '🔌' }, { name: 'Cámaras de seguridad', icon: '📹' },
    { name: 'Sensores', icon: '📡' }, { name: 'Climatización', icon: '🌡️' },
  ]},
  { name: 'Electrodomésticos', icon: '🔌', subcategories: [
    { name: 'Licuadoras', icon: '🥤' }, { name: 'Cafeteras', icon: '☕' }, { name: 'Aspiradoras', icon: '🧹' },
    { name: 'Freidoras de aire', icon: '🍟' }, { name: 'Microondas', icon: '📦' },
  ]},
  { name: 'Moda', icon: '👕', subcategories: [
    { name: 'Ropa hombre', icon: '👔' }, { name: 'Ropa mujer', icon: '👗' }, { name: 'Calzado', icon: '👟' },
    { name: 'Accesorios de moda', icon: '👜' }, { name: 'Relojes', icon: '⌚' },
  ]},
  { name: 'Deportes', icon: '🏀', subcategories: [
    { name: 'Fitness', icon: '🏋️' }, { name: 'Ciclismo', icon: '🚴' }, { name: 'Camping', icon: '⛺' },
    { name: 'Natación', icon: '🏊' }, { name: 'Suplementos', icon: '💊' },
  ]},
  { name: 'Libros', icon: '📚', subcategories: [
    { name: 'Ficción', icon: '📖' }, { name: 'No ficción', icon: '📗' }, { name: 'Infantil', icon: '🧒' },
    { name: 'Cómics', icon: '💥' }, { name: 'Académico', icon: '🎓' },
  ]},
  { name: 'Juguetes', icon: '🧸', subcategories: [
    { name: 'Educativos', icon: '🧩' }, { name: 'Aire libre', icon: '🪁' }, { name: 'Muñecas', icon: '🪆' },
    { name: 'Construcción', icon: '🧱' }, { name: 'Videojuegos', icon: '🎮' },
  ]},
  { name: 'Salud y Belleza', icon: '💊', subcategories: [
    { name: 'Cuidado facial', icon: '🧴' }, { name: 'Suplementos', icon: '💊' }, { name: 'Equipos médicos', icon: '🩺' },
    { name: 'Cuidado capilar', icon: '💇' }, { name: 'Higiene personal', icon: '🧼' },
  ]},
];

// PROBLEMA #17 (Hidden information): política de devoluciones con 14
// secciones colapsables. La sección 11 (Excepciones) esconde en su párrafo 6
// la información realmente relevante para el usuario.
export const returnPolicySections = [
  { title: 'Introducción', body: [
    'Esta política describe los términos y condiciones bajo los cuales CompraFácil acepta la devolución de productos adquiridos a través de este sitio.',
    'Al realizar una compra, aceptas los términos descritos en este documento en su totalidad.',
  ]},
  { title: 'Plazo general de devolución', body: [
    'Dispones de 30 días calendario desde la fecha de entrega para solicitar una devolución, salvo las excepciones descritas más adelante en esta política.',
  ]},
  { title: 'Condiciones del producto', body: [
    'El producto debe encontrarse en su empaque original, sin señales de uso, con todos los accesorios y manuales incluidos.',
  ]},
  { title: 'Proceso para solicitar una devolución', body: [
    'Debes iniciar la solicitud desde la sección "Mis pedidos", seleccionar el producto y seguir las instrucciones del asistente de devolución.',
  ]},
  { title: 'Reembolsos y tiempos de procesamiento', body: [
    'Una vez recibido y verificado el producto, el reembolso se procesa en un plazo de 5 a 10 días hábiles al medio de pago original.',
  ]},
  { title: 'Costos de envío de devolución', body: [
    'El costo de envío de la devolución corre por cuenta del cliente, salvo en casos de producto defectuoso o error en el envío.',
  ]},
  { title: 'Productos dañados o defectuosos', body: [
    'Si el producto llega dañado o con defectos de fábrica, CompraFácil cubre el costo total de la devolución y el reemplazo.',
  ]},
  { title: 'Cambios de producto', body: [
    'Puedes solicitar el cambio por otra talla, color o modelo equivalente, sujeto a disponibilidad de stock.',
  ]},
  { title: 'Devoluciones internacionales', body: [
    'Para pedidos enviados fuera del país de origen, los tiempos de devolución pueden extenderse hasta 45 días calendario.',
  ]},
  { title: 'Garantía extendida', body: [
    'Los productos con garantía extendida contratada tienen condiciones de devolución adicionales detalladas en su certificado de garantía.',
  ]},
  { title: 'Excepciones a la política de devolución', body: [
    'Esta sección detalla los casos en los que CompraFácil no acepta devoluciones, independientemente del estado del producto o el tiempo transcurrido desde la compra.',
    'El derecho general de devolución descrito en la sección 2 de esta política aplica a la gran mayoría de los productos de nuestro catálogo.',
    'Recomendamos revisar siempre la ficha del producto antes de completar la compra, ya que algunas categorías incluyen condiciones particulares.',
    'CompraFácil se reserva el derecho de rechazar una devolución si se determina que el producto no cumple con los requisitos generales de esta política.',
    'Las excepciones descritas a continuación buscan proteger tanto la salud de nuestros clientes como los derechos de propiedad intelectual de nuestros proveedores.',
    'Por razones de higiene y protección de la propiedad intelectual, no se aceptan devoluciones de ropa interior y trajes de baño (aunque conserven las etiquetas originales), productos personalizados o fabricados a pedido (grabados, tallas especiales, combinaciones de color únicas) ni licencias de software o contenido digital una vez descargado o activado, incluso si el medio físico se conserva sin abrir.',
    'Cualquier duda sobre si un producto específico está sujeto a estas excepciones puede consultarse antes de la compra a través del Centro de ayuda.',
  ]},
  { title: 'Devoluciones en promociones y descuentos', body: [
    'Los productos adquiridos con descuento se reembolsan por el monto efectivamente pagado, no por el precio original.',
  ]},
  { title: 'Contacto y soporte', body: [
    'Para cualquier consulta sobre esta política, puedes escribirnos a soporte@comprafacil.test.',
  ]},
  { title: 'Modificaciones a esta política', body: [
    'CompraFácil puede modificar esta política en cualquier momento. La versión vigente es la publicada en este sitio al momento de tu compra.',
  ]},
];
