# Todo Web (Frontend)

Frontend de la To-Do App usando **React**. Consume la API separada (`todo-api`).

---

## Descripción

Permite:

- Visualizar la lista de tareas.
- Crear nuevas tareas.
- Marcar tareas como completadas/desmarcadas.
- Editar tareas existentes.
- Eliminar tareas.
- UI responsive y amigable.

---

variables de entorno: . env

ejecutar en modo desarrollo:
npm run dev
La APP correrá por defecto en http://localhost:5173.

---

Tecnologías

React 18

React Hooks

CSS inline (o modular)

fetch para consumir la API

---

Buenas prácticas implementadas

Componentes separados (TaskForm, TaskList, TaskItem)

Hooks personalizados (useTasks) para manejar estado y llamadas a la API

UI responsive y limpia

Manejo de estados local

--- diagrama ASCII

        ┌──────────────┐
        │   Usuario    │
        │ (Navegador) │
        └──────┬───────┘
               │ Interacción / Clicks
               ▼
       ┌───────────────┐
       │     React     │
       │  (Components) │
       └──────┬────────┘
              │ useTasks Hook / Axios
              ▼
       ┌───────────────┐
       │   API Backend │
       │  (todo-api)   │
       └───────────────┘

## Instalación

Clonar el repositorio:

```bash
git clone 
cd todo-web
npm: 10.5.0
npm install

