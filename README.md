# StudyPal - Aplicación de Acompañamiento Estudiantil - Aplicación Móvil

Esta aplicación de acompañamiento de estudio ayuda a los estudiantes a organizar sus horarios de estudio y seguir su progreso.

## Estructura del proyecto

El proyecto tiene la siguiente estructura de archivos:

- `app-nextjs`: Carpeta que contiene la aplicación Next.js.
- `app-react-native`: Carpeta que contiene la aplicación React Native.
- `.gitignore`: Archivo que especifica los archivos y carpetas que deben ser ignorados por Git.
- `README.md`: Este archivo contiene la descripción general del proyecto, las instrucciones de instalación, uso y las rutas de la aplicación.

### app-nextjs

- `pages/api/auth/[...nextauth].ts`: Este archivo define las rutas para la autenticación utilizando NextAuth.js.
- `pages/_app.tsx`: Este archivo es el punto de entrada de la aplicación Next.js. Se utiliza para envolver todos los componentes de la aplicación con proveedores y configuraciones globales.
- `pages/index.tsx`: Este archivo define la página principal de la aplicación.
- `README.md`: Este archivo contiene información sobre la carpeta `app-nextjs`.

### prisma

- `schema.prisma`: Este archivo define el esquema de la base de datos utilizando Prisma. Aquí se definen las tablas, relaciones y campos de la base de datos.
- `README.md`: Este archivo contiene información sobre la carpeta `prisma`.

### public

- `README.md`: Este archivo contiene información sobre la carpeta `public`.

### styles

- `globals.css`: Este archivo contiene estilos globales para la aplicación utilizando Tailwind CSS.
- `README.md`: Este archivo contiene información sobre la carpeta `styles`.

### trpc

- `[exampleRouter].ts`: Este archivo define un ejemplo de router utilizando tRPC. Aquí se definen los endpoints y las funciones para manejar las solicitudes.
- `README.md`: Este archivo contiene información sobre la carpeta `trpc`.

### .env.local

Este archivo contiene las variables de entorno locales para la aplicación Next.js.

### next.config.js

Este archivo es la configuración de Next.js. Aquí se pueden definir configuraciones adicionales para la compilación y el servidor.

### package.json

Este archivo es el archivo de configuración de npm. Aquí se listan las dependencias y scripts para el proyecto.

### tsconfig.json

Este archivo es la configuración de TypeScript. Aquí se especifican las opciones del compilador y los archivos a incluir en la compilación.

### app-react-native

- `src/components`: Esta carpeta contiene los componentes de la aplicación React Native.
- `src/screens`: Esta carpeta contiene las pantallas de la aplicación React Native.
- `src/App.tsx`: Este archivo es el punto de entrada de la aplicación React Native. Aquí se definen las rutas y se configuran los proveedores y configuraciones globales.
- `package.json`: Este archivo es el archivo de configuración de npm para la aplicación React Native.
- `tsconfig.json`: Este archivo es la configuración de TypeScript para la aplicación React Native.
- `README.md`: Este archivo contiene información sobre la carpeta `app-react-native`.

Espero que esta información sea útil para configurar tu proyecto. Si tienes alguna otra pregunta, no dudes en hacerla.