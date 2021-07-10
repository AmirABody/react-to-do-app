const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <input type="checkbox" className="form-check-input mt-0 me-2" id={`task #{task.id}`} />
      <div className="task-text">
        <label className="form-check-label task-title" htmlFor={`task #{task.id}`}>
          {task.title}
        </label>
        <label className="form-check-label task-deadline" htmlFor={`task #{task.id}`}>
          {task.deadline}
        </label>
      </div>
      <i className="bi bi-x delete-task-button" onClick={() => onDelete(task.id)}></i>
    </div>
  );
};

export default Task;
