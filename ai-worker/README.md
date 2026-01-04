# 🤖 LandGit AI Worker

> Worker de procesamiento con Inteligencia Artificial para la plataforma LandGit.

[![Python](https://img.shields.io/badge/Python-3.11+-yellow)](https://www.python.org/)

---

## 📦 Descripción

Este módulo contiene el worker de IA de LandGit. Está desarrollado en **Python** y se encarga de procesar tareas que requieren capacidades de inteligencia artificial, como análisis de código, generación automática y otras funcionalidades de ML/AI.

---

## 🚀 Inicio Rápido

### Requisitos

- Python >= 3.11
- pip o poetry

### Instalación

```bash
cd ai-worker

# Crear entorno virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# o
.\venv\Scripts\activate   # Windows

# Instalar dependencias
pip install -r requirements.txt
```

---

## 🗂️ Estructura del Proyecto

```
ai-worker/
├── .gitignore              # Archivos ignorados por git
├── Dockerfile              # Dockerfile para producción
├── pyproject.toml          # Configuración del proyecto Python
├── requirements.txt        # Dependencias de pip
└── README.md
```

---

## 📜 Scripts Disponibles

| Comando                           | Descripción                         |
|-----------------------------------|-------------------------------------|
| `pip install -r requirements.txt` | Instala dependencias                |
| `python -m pytest`                | Ejecuta tests                       |
| `python main.py`                  | Inicia el worker (cuando exista)    |

---

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env` con las configuraciones necesarias:

```env
# API Keys para servicios de IA
OPENAI_API_KEY=sk-xxx
# o
ANTHROPIC_API_KEY=sk-ant-xxx

# Conexión a servicios
REDIS_URL=redis://localhost:6379
API_URL=http://localhost:3001
```

---

## 🐳 Docker

### Desarrollo

```bash
docker build -t landgit-ai-worker .
docker run --env-file .env landgit-ai-worker
```

### Producción

El worker se despliega como un contenedor independiente que consume tareas de la cola de Redis.

---

## 🔗 Integración con el Monorepo

### Comunicación

El AI Worker se comunica con la API principal a través de:

1. **Cola de mensajes (Redis)**: Recibe tareas a procesar
2. **HTTP API**: Envía resultados a la API de NestJS
3. **WebSockets** (opcional): Para actualizaciones en tiempo real

### Flujo de Trabajo

```
┌─────────┐     ┌─────────┐     ┌────────────┐
│   Web   │ --> │   API   │ --> │  AI Worker │
└─────────┘     └─────────┘     └────────────┘
                     │                 │
                     v                 │
                ┌─────────┐            │
                │  Redis  │ <----------┘
                └─────────┘
```

---

## 🧪 Testing

```bash
# Activar entorno virtual
source venv/bin/activate

# Ejecutar tests
python -m pytest

# Con cobertura
python -m pytest --cov=.
```

---

## 🔄 Tareas del Worker

El worker puede manejar diferentes tipos de tareas:

| Tipo de Tarea        | Descripción                                    |
|----------------------|------------------------------------------------|
| `code_analysis`      | Análisis estático de código                    |
| `code_generation`    | Generación automática de código                |
| `documentation`      | Generación de documentación                    |
| `review`             | Revisión automática de PRs                     |

---

## 📚 Recursos

- [Python Documentation](https://docs.python.org/3/)
- [Redis Queue Patterns](https://redis.io/docs/data-types/lists/)
- [Volver al README principal](../README.md)
