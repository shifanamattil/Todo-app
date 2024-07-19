import React, { useState } from "react";

function Todoapp() {
  const [TaskInput, setTaskInput] = useState("");
  const [Tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const addTask = () => {
    if (TaskInput.trim() === "") return; // Prevent adding empty Tasks
    setTasks([...Tasks, TaskInput]);
    setTaskInput(""); // Clear the input box after adding the task
  };

  return (
    <div>   
      <h1>To do List</h1>
      <div id="inputs">
        <input
          type="text"
          id="newTask"
          placeholder="Add a new Task"
          value={TaskInput}
          onChange={handleInputChange}
        />
        <button className="addBtn" onClick={addTask}>
          Add
        </button>
      </div>
      <h2>Task List</h2>
      <ul id="todoList">
        {Tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todoapp;