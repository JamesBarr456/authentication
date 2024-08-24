
# Proyecto de API de Tareas

Este proyecto fue desarrollado para practicar las bases de Node.js y Express.js en la construcción de una API para la gestión de tareas. El backend incluye conexión con una base de datos MongoDB y autenticación mediante tokens JWT, con el código cifrado para mayor seguridad. Para el front end, se utilizó React junto con Vite para crear una interfaz sencilla que permite interactuar con los datos alojados en el servidor.

## Proceso de Desarrollo

### Backend Setup
- Configuración de MongoDB
- Registro de Usuarios
- Creación del Token
- Implementación del Login
- Validación del Token
- CRUD de Tareas
- Validación de Datos

### Configuración del Cliente
- Registro de Usuario
- Contexto de Usuario
- Implementación del Login
- Rutas Protegidas
- Gestión de Tareas
- Navbar
- Eliminación de Tareas
- Actualización de Tareas

## Cómo Iniciar el Proyecto

1. Instala las dependencias tanto en el backend como en el front end con el siguiente comando en cada carpeta:

    ```bash
   npm i 
   
    ```
2. Cambia el nombre del archivo config-example.js a config.js.

3. Dentro del archivo "config.js", configura las siguientes variables:
       ```bash
export const PORT = "Coloca el puerto donde quieres ejecutar el proyecto";
export const DB_HOST = "localhost";
export const TOKEN_SECRET = "Coloca tu TOKEN_SECRET para jwt";
export const DB_URL = "Coloca la URL de la base de datos MongoDB";
        ```

4. Ejecuta el proyecto, tanto el back-end como el front-end y estará listo para usar.
    ```bash
    npm run dev
    ```
   
   