import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();// Carga las tareas cuando se monta el componente
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error cargando tareas", error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    try {
      const newTask = await createTask(task);
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error("Error creando tarea", error);
    }
  };

  const toggleTask = async (id) => {
    try {
      const task = tasks.find((t) => t._id === id);
      if (!task) return;

      const updatedTask = {
        ...task,
        completed: !task.completed,
      };

      const updated = await updateTask(id, updatedTask);

      setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
    } catch (error) {
      console.error("Error actualizando tarea", error);
    }
  };

  const updateTaskInHook = async (id, taskData) => {
  try {
    const updated = await updateTask(id, taskData); 
    setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
  } catch (error) {
    console.error("Error actualizando tarea", error);
  }
};


  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error eliminando tarea", error);
    }
  };

  return {
    tasks,
    loading,
    addTask,
    toggleTask,
    removeTask,
    loadTasks,
    updateTask: updateTaskInHook,
  };
}
