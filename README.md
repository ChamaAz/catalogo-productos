# React + Vite
# Catálogo de Productos - Frontend

Este proyecto es una prueba técnica de frontend para mostrar un catálogo de productos con React, Vite y Tailwind CSS.

## 🔧 Tecnologías

- **React**: Biblioteca principal para la interfaz.
- **Vite**: Bundler y servidor de desarrollo con HMR rápido.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y responsive.
- **Fetch API**: Para obtener los datos de productos desde `https://fakestoreapi.com/products`.

Opcional:
- Modo oscuro/tema claro
- Filtros por categoría y búsqueda por nombre
- Ordenar productos por precio

---

## 🗂 Estructura del proyecto

catalogo-productos/
├─ src/
│ ├─ components/
│ │ ├─ ProductCard.jsx
│ │ └─ Filters.jsx
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md

**Descripción de carpetas/archivos principales:**

- `components/ProductCard.jsx`: Componente para mostrar cada producto (imagen, título, precio y categoría).  
- `components/Filters.jsx`: Componente con buscador, filtro por categoría y orden de precios.  
- `App.jsx`: Componente principal que controla estado de productos, filtros, orden y modo oscuro.  
- `main.jsx`: Entrada del proyecto, se encarga de montar React y pasar la clase `dark` a `<html>` para Tailwind.  
- `index.css`: Importa las directivas de Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`).  
- `tailwind.config.js` y `postcss.config.js`: Configuración de Tailwind y PostCSS.

---


