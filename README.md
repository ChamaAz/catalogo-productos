# 🛍 Catálogo de Productos - Frontend

Aplicación de frontend desarrollada con **React + Vite + Tailwind CSS** para mostrar un catálogo de productos con filtros, búsqueda y ordenación por precio. Proyecto de prueba técnica de frontend.

---

## 🔧 Tecnologías

- **React**: Biblioteca principal para la interfaz.
- **Vite**: Bundler y servidor de desarrollo con HMR rápido.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y responsive.
- **Fetch API**: Para obtener los datos de productos desde `https://fakestoreapi.com/products`.
- **Node.js + Express**: Backend opcional para servir datos.
- **MongoDB**: Base de datos para almacenar productos (si aplica).
- **Git**: Control de versiones.

---

## 🚀 Funcionalidades

- Mostrar catálogo de productos con imagen, nombre, precio y categoría.
- Búsqueda por nombre y filtro por categoría.
- Ordenar productos por precio ascendente o descendente.
- Modo oscuro / modo claro (opcional).
- Interfaz responsive para móviles y escritorio.

---

**Descripción de carpetas/archivos principales:**

- `ProductCard.jsx`: Componente que renderiza cada producto (imagen, título, precio, categoría).  
- `Filters.jsx`: Componente de búsqueda y filtrado de productos.  
- `App.jsx`: Componente principal que maneja estado y lógica de filtros, búsqueda y orden.  
- `main.jsx`: Entrada de React que monta la app y gestiona modo oscuro.  
- `index.css`: Importa directivas de Tailwind.  
- `tailwind.config.js` y `postcss.config.js`: Configuración de Tailwind y PostCSS.

---

## 🏗 Badges y estado del proyecto

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

---

## ⚙️ CI/CD

Este proyecto puede integrarse con **GitHub Actions** para ejecutar tests automáticamente en cada push o pull request.  
## 💻 Cómo ejecutar la aplicación

1. Clona el repositorio:

```bash
git clone https://github.com/ChamaAz/catalogo-productos.git



