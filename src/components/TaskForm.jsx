import { useState, useEffect } from "react";

export default function TaskForm({ onAdd, taskToEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, description });

    if (!taskToEdit) {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "0.95rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "6px 12px", 
          fontSize: "0.9rem",
          borderRadius: "6px",
          border: "none",
          backgroundColor: taskToEdit ? "#007bff" : "#28a745",
          color: "#fff",
          cursor: "pointer",
          transition: "background-color 0.2s",
          alignSelf: "center", 
          minWidth: "120px", 
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = taskToEdit
            ? "#0069d9"
            : "#218838")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = taskToEdit
            ? "#007bff"
            : "#28a745")
        }
      >
        {taskToEdit ? "Guardar cambios" : "Agregar Tarea"}
      </button>
    </form>
  );
}
