# 🔌 LandGit API

> Backend de la plataforma LandGit construido con NestJS 11.

[![NestJS](https://img.shields.io/badge/NestJS-11.x-red)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Jest-30.x-green)](https://jestjs.io/)

---

## 📦 Descripción

Este módulo contiene la API REST del proyecto LandGit. Está desarrollado con **NestJS** siguiendo los principios SOLID y arquitectura modular.

---

## 🚀 Inicio Rápido

### Requisitos

- Node.js >= 20.x
- pnpm >= 10.x
- PostgreSQL 16 (via Docker en `infra/`)
- Redis 7 (via Docker en `infra/`)

### Instalación

```bash
# Desde la raíz del monorepo
pnpm install

# O desde este directorio
cd api
pnpm install
```

### Variables de Entorno

```bash
cp .env.example .env
```

Configurar las variables necesarias en `.env`:

```env
DATABASE_URL=postgresql://dev:dev@localhost:5432/plataforma
REDIS_URL=redis://localhost:6379
```

---

## 📜 Scripts Disponibles

| Comando              | Descripción                                |
|----------------------|--------------------------------------------|
| `pnpm start`         | Inicia el servidor en modo producción      |
| `pnpm start:dev`     | Inicia en modo desarrollo (watch mode)     |
| `pnpm start:debug`   | Inicia en modo debug con watch             |
| `pnpm start:prod`    | Ejecuta el build de producción             |
| `pnpm build`         | Compila el proyecto                        |
| `pnpm test`          | Ejecuta tests unitarios                    |
| `pnpm test:watch`    | Ejecuta tests en modo watch                |
| `pnpm test:cov`      | Ejecuta tests con cobertura                |
| `pnpm test:e2e`      | Ejecuta tests end-to-end                   |
| `pnpm lint`          | Ejecuta ESLint y corrige errores           |
| `pnpm format`        | Formatea código con Prettier               |

---

## 🏗️ Estructura del Proyecto

```
api/
├── src/
│   ├── app.controller.ts      # Controlador principal
│   ├── app.module.ts          # Módulo raíz
│   ├── app.service.ts         # Servicio principal
│   └── main.ts                # Punto de entrada
├── test/
│   └── app.e2e-spec.ts        # Tests E2E
├── .env.example               # Variables de entorno de ejemplo
├── Dockerfile                 # Dockerfile para producción
├── nest-cli.json              # Configuración de NestJS CLI
├── tsconfig.json              # Configuración de TypeScript
└── package.json
```

---

## 🔧 Configuración

### TypeScript

El proyecto usa TypeScript 5.7 con configuración estricta. Ver `tsconfig.json` para detalles.

### ESLint

Configuración moderna con ESLint 9 y flat config. Ver `eslint.config.mjs`.

### Testing

- **Unit Tests**: Jest 30 con ts-jest
- **E2E Tests**: Supertest + Jest
- **Coverage**: Generado en `/coverage`

---

## 🐳 Docker

### Desarrollo

La base de datos y Redis se levantan desde `infra/docker-compose.dev.yaml`.

### Producción

```bash
docker build -t landgit-api .
docker run -p 3001:3001 landgit-api
```

---

## 📡 API Endpoints

### Health Check

```http
GET /
```

Retorna el estado del servicio.

---

## 🔗 Dependencias del Monorepo

Este módulo puede consumir paquetes compartidos:

```typescript
import { ... } from '@repo/shared';
import { ... } from '@repo/types';
import { ... } from '@repo/zod-schemas';
```

---

## 📚 Recursos

- [Documentación de NestJS](https://docs.nestjs.com)
- [Volver al README principal](../README.md)
