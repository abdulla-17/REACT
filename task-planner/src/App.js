import React, { useState } from "react";
import TaskList from "./TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bgColor, setBgColor] = useState("white");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    setTasks([...tasks, taskName]);
    setMessage(`Task added: ${taskName}!`);
    setTaskName("");
    setBgColor("lightblue");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: bgColor }}>
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Task Planner</h3>
        <form onSubmit={handleAddTask}>
          <input type="text" className="form-control mb-3" placeholder="Enter a task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          <button type="submit" className="btn btn-primary w-100">
            Add Task
          </button>
        </form>
        <hr />
        <TaskList tasks={tasks} message={message} />
      </div>
    </div>
  );
}

export default App;