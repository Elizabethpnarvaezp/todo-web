import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useTasks } from "../hooks/useTasks";
import { useState } from "react";

export default function Home() {
  const {
    tasks,
    loading,
    addTask,
    toggleTask,
    removeTask,
    updateTask,
    loadTasks,
  } = useTasks();
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSave = async (taskData) => {
    if (editingTask) {
      await updateTask(editingTask._id, taskData);
      await loadTasks();
      setEditingTask(null);
    } else {
      await addTask(taskData);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",          
        margin: "2rem auto",         
        padding: "2.5rem",           
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>To-Do App</h1>

      <TaskForm onAdd={handleSave} taskToEdit={editingTask} />

      {loading ? <p>Cargando tareas...</p> : null}

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={removeTask}
        onEdit={handleEdit}
      />
    </div>
  );
}
