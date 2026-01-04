# 🌐 LandGit Web

> Frontend de la plataforma LandGit construido con Next.js 16 y React 19.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-cyan)](https://tailwindcss.com/)

---

## 📦 Descripción

Este módulo contiene el frontend de LandGit. Está desarrollado con **Next.js App Router** y utiliza las últimas características de React 19, incluyendo el React Compiler.

---

## 🚀 Inicio Rápido

### Requisitos

- Node.js >= 20.x
- pnpm >= 10.x

### Instalación

```bash
# Desde la raíz del monorepo
pnpm install

# O desde este directorio
cd web
pnpm install
```

---

## 📜 Scripts Disponibles

| Comando        | Descripción                                    |
|----------------|------------------------------------------------|
| `pnpm dev`     | Inicia servidor de desarrollo en puerto 3000  |
| `pnpm build`   | Genera build de producción                     |
| `pnpm start`   | Inicia servidor de producción                  |
| `pnpm lint`    | Ejecuta ESLint                                 |

---

## 🏗️ Estructura del Proyecto

```
web/
├── app/
│   ├── favicon.ico            # Favicon del sitio
│   ├── globals.css            # Estilos globales (Tailwind)
│   ├── layout.tsx             # Layout raíz de la app
│   └── page.tsx               # Página principal
├── public/
│   └── ...                    # Assets estáticos
├── Dockerfile                 # Dockerfile para producción
├── next.config.ts             # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind
├── postcss.config.mjs         # Configuración de PostCSS
├── tsconfig.json              # Configuración de TypeScript
└── package.json
```

---

## 🎨 Stack Tecnológico

| Tecnología          | Versión  | Propósito                              |
|---------------------|----------|----------------------------------------|
| Next.js             | 16.1.1   | Framework React con App Router        |
| React               | 19.2.3   | Biblioteca UI                          |
| React Compiler      | 1.0.0    | Optimización automática de React       |
| TailwindCSS         | 4.x      | Framework CSS utility-first            |
| TypeScript          | 5.x      | Tipado estático                        |
| ESLint              | 9.x      | Linting de código                      |

---

## 🔧 Configuración

### App Router

Este proyecto usa **Next.js App Router** (directorio `app/`). No mezclar con el antiguo Pages Router.

### React Compiler

El proyecto incluye `babel-plugin-react-compiler` para optimización automática de componentes React.

### Tailwind CSS 4

Configuración moderna de Tailwind con PostCSS. Los estilos globales están en `app/globals.css`.

---

## 🐳 Docker

### Producción

```bash
docker build -t landgit-web .
docker run -p 3000:3000 landgit-web
```

---

## 🔗 Dependencias del Monorepo

Este módulo puede consumir paquetes compartidos:

```typescript
import { ... } from '@repo/shared';
import { ... } from '@repo/types';
import { ... } from '@repo/zod-schemas';
```

> ⚠️ **Importante**: Nunca importar directamente desde `api/`. Usar paquetes compartidos.

---

## 📱 URLs de Desarrollo

| Entorno      | URL                        |
|--------------|----------------------------|
| Desarrollo   | http://localhost:3000      |
| Producción   | TBD                        |

---

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [React 19 Release Notes](https://react.dev/blog)
- [Volver al README principal](../README.md)
