# 🐳 LandGit Infrastructure

> Configuración de infraestructura y servicios de soporte para el proyecto LandGit.

[![Docker](https://img.shields.io/badge/Docker-24.x-blue)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7-red)](https://redis.io/)

---

## 📦 Descripción

Este directorio contiene las configuraciones de Docker Compose para levantar los servicios de infraestructura necesarios para el desarrollo y producción de LandGit.

---

## 🗂️ Archivos

| Archivo                    | Descripción                              |
|----------------------------|------------------------------------------|
| `docker-compose.dev.yaml`  | Servicios para desarrollo local          |
| `docker-compose.prod.yaml` | Servicios para entorno de producción     |

---

## 🚀 Uso en Desarrollo

### Levantar Servicios

```bash
cd infra
docker compose -f docker-compose.dev.yaml up -d
```

### Detener Servicios

```bash
docker compose -f docker-compose.dev.yaml down
```

### Ver Logs

```bash
docker compose -f docker-compose.dev.yaml logs -f
```

### Limpiar Datos (reset completo)

```bash
docker compose -f docker-compose.dev.yaml down -v
```

---

## 🛢️ Servicios de Desarrollo

### PostgreSQL

| Propiedad    | Valor                                      |
|--------------|--------------------------------------------|
| Imagen       | `postgres:16`                              |
| Container    | `plataforma_postgres`                      |
| Puerto       | `5432:5432`                                |
| Usuario      | `dev`                                      |
| Password     | `dev`                                      |
| Base de datos| `plataforma`                               |
| Volumen      | `pg_data` (persistente)                    |

**Connection String:**
```
postgresql://dev:dev@localhost:5432/plataforma
```

### Redis

| Propiedad    | Valor                    |
|--------------|--------------------------|
| Imagen       | `redis:7`                |
| Container    | `plataforma_redis`       |
| Puerto       | `6379:6379`              |

**Connection String:**
```
redis://localhost:6379
```

---

## 🔌 Conectar desde las Apps

### API (NestJS)

En el archivo `.env` de `/api`:

```env
DATABASE_URL=postgresql://dev:dev@localhost:5432/plataforma
REDIS_URL=redis://localhost:6379
```

### Verificar Conexión

```bash
# PostgreSQL
docker exec -it plataforma_postgres psql -U dev -d plataforma

# Redis
docker exec -it plataforma_redis redis-cli ping
```

---

## 🏭 Producción

Para producción, usar `docker-compose.prod.yaml` con variables de entorno seguras.

```bash
docker compose -f docker-compose.prod.yaml up -d
```

> ⚠️ **Importante**: Cambiar credenciales en producción y usar secrets de Docker.

---

## 📊 Gestión de Volúmenes

Los datos de PostgreSQL se persisten en el volumen `pg_data`. Para listar volúmenes:

```bash
docker volume ls | grep landgit
```

Para inspeccionar un volumen:

```bash
docker volume inspect infra_pg_data
```

---

## 📚 Recursos

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [PostgreSQL Docker Hub](https://hub.docker.com/_/postgres)
- [Redis Docker Hub](https://hub.docker.com/_/redis)
- [Volver al README principal](../README.md)
