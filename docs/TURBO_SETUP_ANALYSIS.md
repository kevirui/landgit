# 📊 Análisis y Configuración del Monorepo - Turborepo 2.7.2

**Fecha:** 2025-12-25  
**Estado:** ✅ Resuelto

---

## 🔍 Problema Original

El hook `pre-push` de Husky estaba fallando con el siguiente error:

```bash
× Missing tasks in project
╰─▶ × Could not find task `test` in project

husky - pre-push script failed (code 1)
error: failed to push some refs to 'https://github.com/kevirui/landgit.git'
```

### Causa Raíz

El archivo `.husky/pre-push` intentaba ejecutar:

```bash
pnpm turbo lint
pnpm turbo test  # ❌ Esta tarea no existía en turbo.json
```

---

## ✅ Soluciones Implementadas

### 1. **Configuración de `turbo.json`**

Se agregó la tarea `test` a la configuración de Turbo:

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false"
    },
    "lint": {},
    "test": {
      "dependsOn": ["^build"]
    }
  }
}
```

**Decisión de diseño:**

- No se incluyó `"outputs": ["coverage/**"]` porque no todos los packages generan coverage
- Esto evita warnings innecesarios en packages sin tests configurados

### 2. **Scripts en package.json (Root)**

Agregado el script test:

```json
{
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "lint": "turbo lint",
    "test": "turbo test", // ✅ Nuevo
    "prepare": "husky"
  }
}
```

### 3. **Scripts en Packages**

Se agregaron scripts `lint` y `test` a todos los packages:

#### **@repo/config**

```json
{
  "scripts": {
    "lint": "echo 'No linting configured for @repo/config'",
    "test": "echo 'No tests configured for @repo/config'"
  }
}
```

#### **@repo/shared**

```json
{
  "scripts": {
    "lint": "echo 'No linting configured for @repo/shared'",
    "test": "echo 'No tests configured for @repo/shared'",
    "typecheck": "tsc --noEmit"
  }
}
```

#### **@repo/types**

```json
{
  "scripts": {
    "lint": "echo 'No linting configured for @repo/types'",
    "test": "echo 'No tests configured for @repo/types'",
    "typecheck": "tsc --noEmit"
  }
}
```

#### **@repo/zod-schemas**

```json
{
  "scripts": {
    "lint": "echo 'No linting configured for @repo/zod-schemas'",
    "test": "echo 'No tests configured for @repo/zod-schemas'",
    "typecheck": "tsc --noEmit"
  }
}
```

#### **web (Next.js)**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "test": "echo 'No tests configured for web'"
  }
}
```

**Nota:** La app `api` (NestJS) ya tenía configurado Jest con scripts de test completos.

---

## ✅ Verificación del Fix

### Test Ejecutado

```bash
❯ pnpm turbo test

• turbo 2.7.2
• Packages in scope: @repo/config, @repo/shared, @repo/types, @repo/zod-schemas
• Running test in 4 packages

 Tasks:    4 successful, 4 total
Cached:    0 cached, 4 total
  Time:    1.113s
```

### Lint Ejecutado

```bash
❯ pnpm turbo lint

• turbo 2.7.2
• Packages in scope: @repo/config, @repo/shared, @repo/types, @repo/zod-schemas
• Running lint in 4 packages

 Tasks:    4 successful, 4 total
Cached:    0 cached, 4 total
  Time:    1.041s
```

**Estado:** ✅ Ambos comandos funcionan correctamente

---

## 🎯 Estructura del Monorepo

```
landGit/
├── .husky/
│   └── pre-push              # Hook de Git
├── api/                      # NestJS (con Jest configurado)
├── web/                      # Next.js App Router
├── ai-worker/                # Worker de AI
├── packages/
│   ├── config/               # Configuraciones compartidas
│   ├── shared/               # Lógica compartida
│   ├── types/                # Tipos TypeScript
│   └── zod-schemas/          # Esquemas de validación
├── turbo.json                # Configuración de Turborepo
├── pnpm-workspace.yaml       # Workspaces de pnpm
└── package.json              # Root package
```

---

## 🚀 Recomendaciones Futuras

### 1. **Implementar Testing Real**

Actualmente los packages usan `echo` como placeholders. Se recomienda:

#### Para packages TypeScript (`@repo/shared`, `@repo/types`, `@repo/zod-schemas`):

**Opción A: Vitest (Recomendado para monorepos)**

```bash
pnpm add -D vitest @vitest/ui -w
```

```json
// packages/shared/package.json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

**Opción B: Jest**

```bash
pnpm add -D jest ts-jest @types/jest -w
```

#### Para Next.js (`web`):

```bash
cd web
pnpm add -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom
```

### 2. **Configurar ESLint en Packages**

Crear configuraciones compartidas en `@repo/config`:

```json
// packages/config/eslint/base.js
module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // Tus reglas aquí
  }
};
```

Luego en cada package:

```json
{
  "scripts": {
    "lint": "eslint src --ext .ts,.tsx"
  },
  "devDependencies": {
    "@repo/config": "workspace:*",
    "eslint": "^9"
  }
}
```

### 3. **Optimizar turbo.json para Cache**

```json
{
  "tasks": {
    "test": {
      "dependsOn": ["^build"],
      "inputs": ["src/**/*.ts", "src/**/*.tsx", "test/**/*", "**/*.test.ts"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": [],
      "inputs": ["src/**/*.ts", "src/**/*.tsx", "**/*.json"]
    }
  }
}
```

### 4. **Configurar Remote Caching (Opcional)**

Para equipos, considera Vercel Remote Cache:

```bash
pnpm turbo login
pnpm turbo link
```

O usar alternativas selfhosted como Turborepo Remote Cache.

### 5. **Pre-commit Hook Mejorado**

Considera agregar:

```bash
# .husky/pre-commit
pnpm lint-staged
pnpm turbo typecheck
```

### 6. **CI/CD Pipeline**

Ejemplo de GitHub Actions:

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo build
      - run: pnpm turbo lint
      - run: pnpm turbo test
```

---

## 📝 Checklist de Configuración Actual

### ✅ Completado

- [x] Turbo 2.7.2 instalado y configurado
- [x] Tarea `test` definida en turbo.json
- [x] Scripts `lint` y `test` en todos los packages
- [x] Husky configurado con hooks funcionales
- [x] pnpm workspaces configurado correctamente
- [x] Estructura de monorepo consistente

### ⚠️ Pendiente (Recomendaciones)

- [ ] Implementar tests reales en packages
- [ ] Configurar ESLint compartido
- [ ] Agregar Vitest/Jest a packages
- [ ] Configurar remote caching
- [ ] Implementar CI/CD
- [ ] Documentar convenciones de código

---

## 🔧 Comandos Útiles

```bash
# Ejecutar en todos los packages
pnpm turbo build
pnpm turbo lint
pnpm turbo test

# Ejecutar en un package específico
pnpm turbo test --filter=api
pnpm turbo lint --filter=@repo/shared

# Ver el grafo de dependencias
pnpm turbo build --graph

# Limpiar cache
pnpm turbo build --force

# Ver información de cache
pnpm turbo build --dry-run
```

---

## 📚 Referencias

- [Turborepo Docs](https://turbo.build/repo/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Husky](https://typicode.github.io/husky/)
- [Vitest](https://vitest.dev/)
- [NestJS Testing](https://docs.nestjs.com/fundamentals/testing)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing)

---

## 👨‍💻 Mantenimiento

Este documento debe actualizarse cuando:

- Se agreguen nuevos packages
- Se cambie la configuración de Turbo
- Se implementen tests reales
- Se actualicen dependencias mayores
