# 🛍️ COCINAENAPP - SHOPIFY HYDROGEN EDITION

## ✅ Configuración Completada

Tu proyecto **CocinaEnApp** ahora es completamente compatible con **Shopify** usando el framework **Hydrogen**.

---

## 🚀 Próximos Pasos

### 1️⃣ Obtener Credenciales de Shopify

1. Accede a tu **Admin de Shopify**: https://admin.shopify.com
2. Ve a **Configuración > Aplicaciones y canales > Desarrollar aplicaciones**
3. Crea una nueva aplicación llamada "CocinaEnApp"
4. En la sección **Storefront API**, habilita:
   - `read_products`
   - `read_collections`
   - `read_carts`
   - `write_carts`
   - `read_customers`
5. Copia:
   - **Access Token (Storefront API)**
   - **Storefront ID** (también llamado API Identifier)

### 2️⃣ Configurar Variables de Entorno

1. Abre el archivo `.env.local`:
```bash
SHOPIFY_STOREFRONT_TOKEN=<pega_tu_token_aqui>
SHOPIFY_STOREFRONT_ID=<pega_tu_id_aqui>
SHOPIFY_STORE_URL=https://tu-tienda.myshopify.com
SESSION_SECRET=fbc1ynosmVkd7MLyjqipR2C2xp14QW8j
SHOPIFY_API_VERSION=2024-01
```

### 3️⃣ Ejecutar Localmente

```bash
npm run dev
```

Tu aplicación estará en: **http://localhost:3000**

---

## 📦 Estructura del Proyecto

```
cocinaenapp/
├── app/                      # Nueva estructura Hydrogen/Remix
│   ├── routes/
│   │   └── _index.tsx       # Página principal
│   ├── lib/
│   │   └── shopify.ts       # Cliente de Shopify
│   └── root.tsx             # Layout raíz
├── src/                      # Componentes React originales
│   ├── components/          # Todos tus componentes
│   ├── assets/             # Imágenes
│   └── index.css           # Estilos
├── hydrogen.config.ts      # Configuración de Hydrogen
├── vite.config.ts          # Configuración de Vite
├── tsconfig.json           # Configuración TypeScript
└── server.ts               # Configuración del servidor
```

---

## 🔗 Integración con Shopify

Ahora puedes:

✅ Conectar con la **Storefront API** de Shopify  
✅ Listar **productos** de tu tienda  
✅ Mostrar **colecciones**  
✅ Integrar **carrito de compras**  
✅ Procesar **pagos**  
✅ Acceder a datos de **clientes**  
✅ Usar **Shopify Analytics**  

---

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor local con hot reload

# Producción
npm run build        # Compila para producción
npm run preview      # Previsualiza la compilación

# Instalación
npm install          # Instala todas las dependencias
```

---

## 📊 Desplegar a Producción

### Opción A: Cloudflare Pages (Recomendado)
```bash
npm run build
# Sube la carpeta 'dist' a Cloudflare Pages
```

### Opción B: Vercel
```bash
npm i -g vercel
npm run build
vercel
```

### Opción C: Oxygen (Hosting de Shopify)
```bash
npm run build
shopify hydrogen deploy
```

---

## 📚 Recursos Útiles

- 🌐 [Shopify Hydrogen Documentation](https://hydrogen.shopify.dev)
- 📖 [Remix Framework Guide](https://remix.run/docs)
- 🔌 [Shopify Storefront API](https://shopify.dev/api/storefront)
- 🛒 [Shopify Developer](https://shopify.dev)

---

## 🆘 Solución de Problemas

**P: Me sale error "Missing Shopify credentials"**
R: Verifica que `.env.local` tenga los tokens correctos sin espacios.

**P: La página no se ve en desarrollo**
R: Ejecuta `npm install` primero, luego `npm run dev`

**P: Error de TypeScript**
R: Es normal, Hydrogen usa TypeScript. Puedes ignorar durante desarrollo.

---

## ✨ Características Principales

| Característica | Estado |
|---|---|
| React + Remix | ✅ |
| Shopify Storefront API | ✅ |
| TypeScript | ✅ |
| Hot Module Reload (HMR) | ✅ |
| Componentes Personalizados | ✅ |
| Optimizado para Performance | ✅ |
| SEO Friendly | ✅ |

---

## 🎯 Siguientes Pasos Recomendados

1. **Conecta tus credenciales de Shopify** en `.env.local`
2. **Ejecuta `npm run dev`** para probar localmente
3. **Modifica los componentes** según necesites
4. **Agrega productos** de Shopify a tus páginas
5. **Deploya a producción** cuando esté listo

---

## 📞 Soporte

Para más información sobre Hydrogen:
- 📖 [Documentación oficial](https://hydrogen.shopify.dev)
- 💬 [Discord Community](https://discord.gg/shopifydev)
- 🐛 [GitHub Issues](https://github.com/DiegoMQP/cocinaenapp/issues)

---

**¡Tu aplicación ahora es parte del ecosistema Shopify! 🎉**
