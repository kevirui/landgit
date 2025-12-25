# 🐕 Husky - Git Hooks

Este proyecto utiliza Husky para ejecutar automáticamente validaciones antes de commits y push.

## 🔧 Configuración

La configuración de Husky ya está lista y se activará automáticamente al instalar las dependencias:

```bash
pnpm install
```

## 📋 Hooks Configurados

### 1. **pre-commit**

Se ejecuta **antes** de cada commit. Valida:

- ✨ **Formateo de código** con Prettier
- 🔍 **Linting** de archivos modificados

Solo se analizan los archivos que están en el staging area (agregados con `git add`).

### 2. **commit-msg**

Valida el **formato del mensaje de commit** siguiendo [Conventional Commits](https://www.conventionalcommits.org/).

#### Formato requerido:

```
<tipo>(<alcance>): <descripción>

[cuerpo opcional]

[footer opcional]
```

#### Tipos permitidos:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan el código)
- `refactor`: Refactorización de código
- `perf`: Mejoras de rendimiento
- `test`: Añadir o corregir tests
- `build`: Cambios en el sistema de build
- `ci`: Cambios en CI/CD
- `chore`: Tareas de mantenimiento
- `revert`: Revertir commits anteriores

#### Ejemplos válidos:

```bash
git commit -m "feat: agregar autenticación con JWT"
git commit -m "fix(api): corregir error en endpoint de usuarios"
git commit -m "docs: actualizar README con instrucciones de Husky"
git commit -m "refactor(web): mejorar estructura de componentes"
```

### 3. **pre-push**

Se ejecuta **antes** de hacer push. Ejecuta:

- 🔍 **Linting completo** de todos los workspaces
- ✅ **Tests** de todos los workspaces

Esto asegura que no se suba código con errores al repositorio.

## 🚫 Omitir Hooks (No Recomendado)

En casos excepcionales, puedes omitir los hooks:

```bash
# Omitir pre-commit y commit-msg
git commit --no-verify -m "mensaje"

# Omitir pre-push
git push --no-verify
```

⚠️ **Advertencia**: Solo usa `--no-verify` cuando sea absolutamente necesario.

## 🛠️ Solución de Problemas

### El hook no se ejecuta

```bash
# Reinstalar hooks
pnpm exec husky install
```

### Error en lint-staged

```bash
# Verificar que los archivos estén agregados al staging
git status

# Agregar archivos
git add .
```

### Error en commitlint

Asegúrate de que tu mensaje de commit siga el formato de Conventional Commits.

## 📁 Archivos de Configuración

- `.husky/` - Scripts de Git hooks
- `commitlint.config.js` - Configuración de mensajes de commit
- `.lintstagedrc.js` - Configuración de lint-staged
- `.prettierrc` - Configuración de Prettier
- `.prettierignore` - Archivos ignorados por Prettier

## 🔗 Referencias

- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint](https://commitlint.js.org/)
