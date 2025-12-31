# CocinaEnApp - Shopify Theme

Este es un tema profesional de Shopify para la plataforma CocinaEnApp.

## 📁 Estructura del Tema

```
theme/
├── config/
│   ├── settings_data.json       # Configuración del tema
│   └── settings_schema.json     # Schema de configuración
├── sections/                    # Componentes reutilizables
│   ├── header.liquid
│   ├── hero.liquid
│   ├── benefits.liquid
│   ├── coverage-checker.liquid
│   ├── how-it-works.liquid
│   ├── final-cta.liquid
│   └── footer.liquid
├── templates/
│   └── index.json              # Página de inicio
├── assets/
│   └── style.css               # Estilos globales
├── snippets/                   # Componentes pequeños
└── layout/
    └── theme.liquid            # Layout principal
```

## 🚀 Instalación en Shopify

### Opción 1: Usando Shopify CLI (Recomendado)

```bash
# 1. Instala Shopify CLI
npm install -g @shopify/cli

# 2. Autentica con tu tienda
shopify auth login

# 3. Deploy el tema
shopify theme push --path ./theme

# 4. Para ver cambios en tiempo real
shopify theme dev --path ./theme
```

### Opción 2: Subir Manualmente (ZIP)

1. Comprime la carpeta `theme` como `cocinaenapp-theme.zip`
2. Ve a tu Admin de Shopify > Temas
3. Haz clic en "Subir tema"
4. Selecciona el archivo ZIP
5. Activa el tema

### Opción 3: Desde GitHub

Si publicas en GitHub:

1. Ve a Shopify Admin > Temas > "Conectar desde GitHub"
2. Autoriza Shopify a acceder a tu repositorio
3. Selecciona el repositorio y rama
4. Descarga el tema

## 🎨 Personalización

Cada sección tiene sus propios ajustes que puedes modificar desde el editor de temas de Shopify:

- **Header**: Logo, número de WhatsApp
- **Hero**: Títulos, botones, links
- **Benefits**: (por defecto, editable desde el código)
- **Coverage Checker**: Configuración de ciudades
- **How It Works**: (por defecto, editable)
- **Final CTA**: Botones, números de WhatsApp
- **Footer**: Links, redes sociales, información legal

## 🛠️ Desarrollo

Si necesitas modificar el tema:

1. Clona el repositorio
2. Edita los archivos `.liquid` en la carpeta `sections`
3. Modifica estilos en `assets/style.css`
4. Usa `shopify theme dev` para ver cambios en tiempo real

## 📱 Características

✅ Responsive (Mobile First)  
✅ Optimizado para performance  
✅ SEO friendly  
✅ Accesibilidad (A11y)  
✅ Componentes reutilizables  
✅ Fácil de personalizar  
✅ Integración con Font Awesome  

## 🔗 Integración con Shopify

El tema está completamente integrado con Shopify:

- Usa `{{ shop.name }}` para el nombre de la tienda
- Usa `{{ 'now' | date: '%Y' }}` para el año actual
- Usa `{{ section.settings }}` para acceder a configuraciones
- Usa Liquid para lógica dinámica

## 📊 Secciones Disponibles

| Sección | Descripción | Personalizable |
|---------|-------------|---|
| Header | Navegación principal | Sí |
| Hero | Banner principal | Sí |
| Benefits | Beneficios del servicio | No (editar código) |
| Coverage | Verificador de cobertura | No (editar código) |
| How It Works | Pasos del proceso | No (editar código) |
| Final CTA | Llamada a la acción | Sí |
| Footer | Pie de página | Sí |

## 🆘 Solución de Problemas

**P: No veo los cambios en Shopify**
R: Espera 2-3 minutos o recarga manualmente

**P: Los estilos no se ven correctamente**
R: Limpia la caché del navegador (Ctrl+Shift+Del)

**P: Los iconos de Font Awesome no aparecen**
R: Verifica que el CDN esté cargando correctamente en `style.css`

## 📚 Recursos

- [Shopify Liquid Documentation](https://shopify.dev/api/liquid)
- [Shopify Theme Dev Docs](https://shopify.dev/themes/getting-started)
- [Shopify CLI Reference](https://shopify.dev/themes/tools/cli)

## 📝 Notas

- Los estilos están escritos directamente en cada sección `.liquid`
- El archivo `style.css` contiene estilos globales
- Todas las secciones incluyen su propio `{% schema %}` para Shopify

## ✨ Siguientes Pasos

1. Personaliza los colores en cada sección
2. Agrega tus números de WhatsApp y redes sociales
3. Prueba en mobile y desktop
4. Publica el tema en tu tienda

---

**¡Tu tema CocinaEnApp está listo para Shopify!** 🎉
