import React from "react";

function TaskList({ tasks, message }) {
  return (
    <div>
      <ul className="list-group mb-3">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            {task}
          </li>
        ))}
      </ul>
      <p className="text-muted text-center">{message}</p>
    </div>
  );
}

export default TaskList;