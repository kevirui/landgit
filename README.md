# 🌍 LandGit

> Monorepo de la plataforma LandGit - Una solución integral para gestión de repositorios y código con capacidades de IA.

[![pnpm](https://img.shields.io/badge/pnpm-10.15.1-orange)](https://pnpm.io/)
[![Turbo](https://img.shields.io/badge/turborepo-2.0.0-blueviolet)](https://turbo.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

---

## 📦 Estructura del Monorepo

```
landgit/
├── api/          # Backend - NestJS API
├── web/          # Frontend - Next.js App Router
├── ai-worker/    # Worker de IA - Python
├── infra/        # Infraestructura - Docker Compose
├── packages/     # Paquetes compartidos
│   ├── config/       # Configuraciones compartidas
│   ├── shared/       # Lógica de negocio compartida
│   ├── types/        # Tipos TypeScript
│   └── zod-schemas/  # Esquemas de validación Zod
└── docs/         # Documentación del proyecto
```

---

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js** >= 20.x
- **pnpm** >= 10.x
- **Docker** y **Docker Compose**
- **Python** >= 3.11 (para ai-worker)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/landgit.git
cd landgit

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp api/.env.example api/.env
```

### Levantar Servicios de Desarrollo

```bash
# Iniciar infraestructura (PostgreSQL, Redis)
cd infra && docker compose -f docker-compose.dev.yaml up -d

# Volver al root y ejecutar todos los servicios en modo desarrollo
cd ..
pnpm dev
```

Esto iniciará:
- **API** en `http://localhost:3001`
- **Web** en `http://localhost:3000`

---

## 📜 Scripts Principales

| Comando         | Descripción                                      |
|-----------------|--------------------------------------------------|
| `pnpm dev`      | Inicia todos los servicios en modo desarrollo   |
| `pnpm build`    | Compila todos los paquetes y aplicaciones       |
| `pnpm lint`     | Ejecuta linting en todo el monorepo             |
| `pnpm test`     | Ejecuta tests en todo el monorepo               |

---

## 🏗️ Arquitectura

### Aplicaciones

| App          | Tecnología       | Puerto | Descripción                              |
|--------------|------------------|--------|------------------------------------------|
| `web`        | Next.js 16       | 3000   | Frontend con App Router y React 19      |
| `api`        | NestJS 11        | 3001   | API REST backend                         |
| `ai-worker`  | Python           | -      | Worker para procesamiento con IA         |

### Paquetes Compartidos

| Paquete           | Descripción                                          |
|-------------------|------------------------------------------------------|
| `@repo/config`    | Configuraciones compartidas (ESLint, TS, etc.)       |
| `@repo/shared`    | Lógica de negocio reutilizable                       |
| `@repo/types`     | Tipos e interfaces TypeScript                        |
| `@repo/zod-schemas` | Esquemas de validación con Zod                     |

---

## 🔧 Convenciones

### Commits

Este proyecto usa **Conventional Commits** con las siguientes reglas:

```
<type>[optional scope]: <description>

Tipos permitidos:
- feat: Nueva funcionalidad
- fix: Corrección de bugs
- docs: Cambios en documentación
- style: Formato de código
- refactor: Refactorización sin cambios funcionales
- test: Añadir o modificar tests
- chore: Tareas de mantenimiento
```

### Estructura de Código

- **Nunca** importar directamente entre apps (`web` ↔ `api`)
- Usar paquetes de `packages/` para código compartido
- No duplicar tipos ni esquemas
- Toda lógica de negocio compartida va en `packages/shared`

---

## 📁 Documentación Adicional

- [Configuración de Husky](./docs/HUSKY.md)
- [Análisis de Turborepo](./docs/TURBO_SETUP_ANALYSIS.md)
- [API README](./api/README.md)
- [Web README](./web/README.md)
- [Infra README](./infra/README.md)
- [AI Worker README](./ai-worker/README.md)

---

## 🤝 Contribución

1. Crear una rama desde `main`
2. Hacer commits siguiendo Conventional Commits
3. Abrir un Pull Request
4. Esperar revisión de código

---

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados.
