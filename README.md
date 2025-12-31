# CocinaEnApp - Shopify Hydrogen Edition

Una aplicación moderna para restaurantes construida con **Shopify Hydrogen** y React.

## 🚀 Características

- ⚡ Construido con Shopify Hydrogen (Framework React optimizado)
- 🍽️ Diseño moderno y responsivo
- 📱 Compatible con Shopify Storefront API
- 🔄 Integración completa con Shopify
- 🎨 Componentes reutilizables en React
- ✨ Animaciones y efectos visuales

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn
- Una tienda Shopify (o plan de desarrollo)

## ⚙️ Instalación Local

1. **Clona el repositorio:**
```bash
git clone https://github.com/DiegoMQP/cocinaenapp.git
cd cocinaenapp
```

2. **Instala dependencias:**
```bash
npm install
```

3. **Configura las variables de entorno:**
```bash
cp .env.example .env.local
```

4. **Edita `.env.local` con tus credenciales de Shopify:**
```
SHOPIFY_STOREFRONT_TOKEN=tu_token_aqui
SHOPIFY_STOREFRONT_ID=tu_id_aqui
SHOPIFY_STORE_URL=https://tu-tienda.myshopify.com
```

## 🔑 Obtener Credenciales de Shopify

1. Ve a tu **Admin de Shopify**
2. Navega a **Configuración > Aplicaciones y canales**
3. Haz clic en **Desarrollar aplicaciones**
4. Crea una nueva aplicación llamada "CocinaEnApp"
5. En la sección **Admin API**, habilita:
   - `read_products`
   - `read_collections`
6. En **Storefront API**, copia:
   - **Storefront access token**
   - **Storefront ID**

## 🚀 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 🔨 Construcción

Para compilar para producción:

```bash
npm run build
```

## 👀 Previsualización

Para previsualizar la compilación:

```bash
npm run preview
```

## 📦 Despliegue

### Opción 1: Cloudflare Pages (Recomendado para Hydrogen)

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist
```

### Opción 2: Vercel

```bash
npm i -g vercel
vercel
```

### Opción 3: Oxygen (Hosting de Shopify)

Si tienes acceso a Oxygen desde Shopify:

```bash
npm run build
shopify hydrogen deploy
```

## 🏗️ Estructura del Proyecto

```
cocinaenapp/
├── app/                    # Aplicación Remix/Hydrogen
│   ├── routes/            # Rutas de la aplicación
│   ├── lib/               # Utilidades y configuración
│   └── root.tsx           # Componente raíz
├── src/                   # Componentes React heredados
│   ├── components/        # Componentes reutilizables
│   ├── assets/           # Imágenes y recursos
│   ├── App.jsx           # Aplicación principal
│   └── index.css         # Estilos globales
├── hydrogen.config.ts    # Configuración de Hydrogen
├── vite.config.ts        # Configuración de Vite
└── package.json          # Dependencias
```

## 🔗 Integración con Shopify

CocinaEnApp ahora está completamente integrado con Shopify. Puedes:

- 🛍️ Listar productos desde tu tienda Shopify
- 🏪 Mostrar colecciones
- 🛒 Integrar carrito de compras
- 💳 Procesar pagos con Shopify Payments
- 📊 Acceder a datos de clientes
- 📈 Análisis y reportes

## 📚 Documentación

- [Shopify Hydrogen Docs](https://hydrogen.shopify.dev)
- [Remix Documentation](https://remix.run/docs)
- [Shopify Storefront API](https://shopify.dev/api/storefront)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Siéntete libre de abrir un issue o pull request.

## 📄 Licencia

MIT

## 📞 Soporte

Para preguntas o problemas, por favor abre un issue en GitHub.

---

**¡Construido con ❤️ para restaurantes modernos!**
