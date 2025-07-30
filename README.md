# RPorras - Portafolio Cyberpunk

Portafolio personal con diseño cyberpunk y efectos visuales avanzados.

## 🚀 Características

- **Diseño Cyberpunk**: Efectos visuales futuristas con animaciones
- **Responsive**: Optimizado para todos los dispositivos
- **Performance**: Lazy loading y optimizaciones de rendimiento
- **TypeScript**: Desarrollo tipado y seguro
- **Tailwind CSS**: Estilos modernos y utilitarios

## 🛠️ Tecnologías

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (Iconos)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/elrufo21/RPorras.git
cd RPorras

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🌐 Despliegue en GitHub Pages

### Configuración Automática (Recomendado)

1. **Habilitar GitHub Pages**:

   - Ve a Settings > Pages
   - En "Source", selecciona "GitHub Actions"

2. **El workflow se ejecutará automáticamente**:
   - Cada push a `main` activará el despliegue
   - El sitio estará disponible en: `https://elrufo21.github.io/RPorras/`

### Configuración Manual

Si prefieres configurar manualmente:

1. **Construir el proyecto**:

   ```bash
   npm run build
   ```

2. **Configurar GitHub Pages**:

   - Ve a Settings > Pages
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages` o `main` con carpeta `/docs`

3. **Configurar la rama de despliegue**:

   ```bash
   # Crear rama gh-pages
   git checkout -b gh-pages

   # Copiar archivos de dist
   cp -r dist/* .

   # Commit y push
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección de inicio
│   ├── About.tsx       # Sección sobre mí
│   ├── Skills.tsx      # Habilidades técnicas
│   └── Contact.tsx     # Formulario de contacto
├── hooks/
│   └── useSmoothScroll.ts  # Hook para scroll suave
├── App.tsx             # Componente principal
├── index.css           # Estilos globales
└── main.tsx           # Punto de entrada
```

## 🎨 Efectos Cyberpunk

- **Grid Animado**: Patrón de cuadrícula en movimiento
- **Líneas Animadas**: Efectos de líneas con gradientes
- **Elementos Flotantes**: Círculos con blur y animaciones
- **Scan Lines**: Líneas de escaneo que se mueven
- **Glitch Effect**: Efectos de distorsión sutil
- **Esquinas Decorativas**: Elementos en las esquinas

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción
- `npm run lint` - Linting del código

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Adaptación a tablets y desktop
- **Touch Friendly**: Interacciones optimizadas para touch

## 🚀 Performance

- **Lazy Loading**: Componentes cargados bajo demanda
- **Code Splitting**: División automática del código
- **Optimización de Imágenes**: Compresión automática
- **Caching**: Estrategias de caché optimizadas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Ruben Vasquez** - Desarrollador Fullstack

- GitHub: [@elrufo21](https://github.com/elrufo21)
- Email: contacto@rufo.dev

---

⭐ Si te gusta este proyecto, ¡dale una estrella!
