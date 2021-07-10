import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task");
      return;
    }

    onAdd({ title, deadline, reminder });

    setTitle("");
    setDeadline("");
    setReminder(false);
  };

  return (
    <div className="add-task-section mb-1">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label forHtml="taskTitle" className="form-label">
            Task Title:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Task Title"
            id="taskTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label forHtml="taskDeadline" className="form-label">
            Task Deadline:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Task Deadline"
            id="taskDeadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="reminderCheck"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
          <label className="form-check-label" forHtml="reminderCheck">
            Set Reminder
          </label>
        </div>
        <button type="submit" className="save-btn">
          Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
