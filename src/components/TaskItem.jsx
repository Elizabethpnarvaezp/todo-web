export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div
      style={{
        padding: "15px 20px",
        marginBottom: "12px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: task.completed ? "#e0ffe0" : "#fff",
        border: "1px solid #ddd",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        transition: "all 0.2s ease",
      }}
    >
      <div style={{ maxWidth: "70%" }}>
        <h3
          style={{
            margin: "0 0 5px 0",
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#888" : "#333",
            fontSize: "1.1rem",
          }}
        >
          {task.title}
        </h3>
        <p style={{ margin: 0, color: "#555", fontSize: "0.9rem" }}>
          {task.description}
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => onToggle(task._id)}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: task.completed ? "#f0ad4e" : "#28a745",
            color: "#fff",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = task.completed
              ? "#ec971f"
              : "#218838")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = task.completed
              ? "#f0ad4e"
              : "#28a745")
          }
        >
          {task.completed ? "Desmarcar tarea" : "Tarea completada"}
        </button>

        {onEdit && (
          <button
            onClick={() => onEdit(task)}
            style={{
              padding: "6px 12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#0069d9")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            Editar
          </button>
        )}

        <button
          onClick={() => onDelete(task._id)}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#dc3545",
            color: "#fff",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#c82333")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#dc3545")
          }
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
