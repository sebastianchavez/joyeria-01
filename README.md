# Aurum Joyería · E-commerce Template

Sitio web tipo e-commerce para una joyería fina, listo para desplegar en **GitHub Pages**.

## ✨ Características

- 16 páginas completas con navegación real entre sí
- HTML semántico + Tailwind CSS (CDN) + JS vanilla
- Sin build step — solo abrir `index.html`
- Responsive (mobile-first)
- Datos mockeados en cada página
- Funcionalidades interactivas: estrellas de reseña, tabs, cantidad, impresión, etc.

## 📁 Estructura

```
.
├── index.html              ← Inicio (landing)
├── nosotros.html           ← Historia + equipo
├── productos.html          ← Catálogo con filtros
├── producto.html           ← Detalle de producto
├── carrito.html            ← Carrito de compras
├── pago.html               ← Confirmación de pago
├── confirmacion.html       ← Compra exitosa
├── perfil.html             ← Mi cuenta + historial
├── pedido.html             ← Detalle de pedido
├── resena.html             ← Escribir reseña
├── privacidad.html         ← Políticas de privacidad
├── terminos.html           ← Términos y condiciones
├── registro.html           ← Crear cuenta
├── login.html              ← Iniciar sesión
├── contacto.html           ← Formulario de contacto
├── recuperar.html          ← Recuperar contraseña
├── README.md
└── assets/
    ├── css/
    │   ├── styles.css
    │   └── tailwind.config.js
    └── js/
        ├── app.js              ← menú móvil, cantidad, impresión
        ├── product-tabs.js     ← tabs en detalle de producto
        ├── star-rating.js      ← estrellas de reseña
        └── password-toggle.js  ← mostrar/ocultar contraseña
```

## 🚀 Despliegue en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona `Deploy from a branch`.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. Tu sitio quedará disponible en `https://<usuario>.github.io/<repo>/`.

## 🎨 Identidad de marca

- **Nombre**: Aurum Joyería
- **Paleta**: Oro `#D4AF37` · Crema `#FAF7F2` · Negro `#1A1A1A`
- **Tipografía**: Playfair Display (títulos) + Inter (cuerpo)
- **Idioma**: Español
- **Iconos**: Material Symbols Outlined

## 🛠 Stack técnico

- HTML5
- [Tailwind CSS](https://tailwindcss.com) (vía CDN, config personalizado en `assets/css/tailwind.config.js`)
- JavaScript vanilla (sin frameworks)
- Google Fonts: Playfair Display + Inter + Material Symbols

## 📝 Notas

- Imágenes referenciadas desde Unsplash (requieren conexión).
- El resto del sitio funciona 100% offline.
- El comprobante de la página `confirmacion.html` usa `window.print()` real con CSS `@media print`.

---

© 2026 Aurum Joyería · Template listo para personalización.
