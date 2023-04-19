# Domestic Tasks

Este monorepo contiene aplicaciones frontend y backend, así como una serie de paquetes de contexto. Está organizado utilizando Nx, Lerna y TypeScript.


## Requisitos previos

- Node.js 14.x o superior
- npm 7.x o superior
- Lerna instalado globalmente (`npm install -g lerna`)
- Nx CLI instalado globalmente (`npm install -g nx`)

## Instalación

Para instalar las dependencias y vincular los paquetes locales, ejecuta:

```bash
lerna bootstrap
```

## Compilación y ejecución

Para compilar y ejecutar las aplicaciones frontend y backend, utiliza los siguientes comandos de Nx:

```bash
nx run frontend:build
nx run frontend:serve
nx run backend:build
nx run backend:serve
```