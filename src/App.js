import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Portfolio Design",
      deadline: "15th June at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      title: "React Tutorial",
      deadline: "16th June at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      title: "Trading Tutorial",
      deadline: "17th June at 2:30pm",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="main-bg">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4 mt-4">
          <div className="to-do-list-container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            ) : (
              "No Tasks To Show"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
