# Goodstone Watch Store

**E-commerce desarrollado con React.**  
Incluye carrito de compras funcional, autenticación, rutas protegidas y un panel de administración para gestionar productos.

## Características principales

### Carrito de Compras
- Agregar, eliminar y vaciar productos.
- Cálculo del total.
- Accesible desde cualquier parte del sitio gracias al uso de **React Context**.

### Autenticación y Rutas Protegidas
- Login de administrador con validación de credenciales.
- Acceso al **panel de administración** solo para usuarios autenticados.
- Protección de rutas mediante contexto de autenticación (`AuthContext`).

###  Panel de Administración
- Ingreso, edición y eliminación de productos.
- Modal dinámico para formularios.

###  Paginación
- Implementada con `react-bootstrap/Pagination`.

### 🌐 SEO y Meta tags
- Implementado con **react-helmet**.
- Meta tags dinámicos por página: título, descripción, keywords, y OG tags
- Mejora la visibilidad en buscadores.

##  Tecnologías Utilizadas

 Herramienta | Descripción 

 **React 18**  Framework principal para construir la SPA. 
 **React Router DOM v7**  Navegación y rutas protegidas. 
 **React Context API**  Manejo global de estados como carrito, admin y autenticación. 
 **React Helmet**  Control de la metadata para SEO. 
 **React Bootstrap**  Utilizado para la paginación. 
 **SweetAlert2**  Pop-ups para alertas personalizadas. 
 **React Toastify**  Notificaciones informativas. 
 **LocalStorage**  Persistencia de carrito y stock. 

## Estilos y Diseño
- CSS modular 
- Adaptado para **diferentes resoluciones de pantalla mediante el uso de media queries**.

##  Consideraciones adicionales

- Validacion en formulario de login.
- Uso de íconos con **react-icons**.
- Prácticas de accesibilidad.
- SEO básico en cada sección principal.
- Funcionalidades administradas con estados (`useState`, `useEffect`, `useContext`).

##  Autor

**Julián Enrique Piedrabuena**  
Desarrollado como proyecto final para **Talento Tech - Frontend React JS**.

## Créditos

Este proyecto fue realizado en el marco educativo de **Talento Tech**, utilizando tecnologías del stack frontend para simular una tienda real, con funcionalidades  de administración y navegación.

-----------------------------------------------------------------------------------


