# Frontend Plataformas

Aplicación web desarrollada con Angular y Angular Material para la gestión y visualización de libros y autenticación de usuarios.

## Requisitos previos

- Node.js (v18+)
- Backend corriendo en `http://localhost:3000`

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/X4rth4r/frontend_plataformas.git
   cd frontend_plataformas
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

## Servidor de desarrollo

Para iniciar el servidor local de desarrollo:

```bash
npm start
```
o con Angular CLI:
```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos de origen.

## Funcionalidades principales

- **Visualización por Categorías:** Tablas genéricas con paginación y ordenamiento para Terror, Ciencia Ficción, Filosofía y Romance.
- **Formulario:** Registro y gestión de datos.
- **Login:** Autenticación de administradores conectada a la API con alertas de SweetAlert2.

## Compilación para producción

```bash
npm run build
```
Los archivos compilados se guardarán en la carpeta `dist/`.
