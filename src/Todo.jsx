import React, { useState } from 'react';
import "./Todo.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addtask,deletetask,edittask } from './features/todoSlice';
function Todo() {
  const [TaskInput, setTaskInput] = useState("");
  const [Tasks, setTasks] = useState([]);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [doneTasks, setDoneTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const[editerror,setEditerror]=useState("");
  const dispatch=useDispatch()
  const todos=useSelector(state=>state.Todo)
  console.log(todos);


  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
    setErrorMessage("");
  };

  const addTask = () => {
    if (TaskInput.trim() === "") {
      setErrorMessage("Task cannot be empty");
      return;
    }

    // if (Tasks.includes(TaskInput)) {
    //   setErrorMessage("This task already exists");
    //   return;
    // }

    // setTasks([...Tasks, TaskInput]);
    dispatch(addtask(TaskInput))
    setTaskInput("");
  };

  const undoTaskCompletion = (index) => {
    const newDoneTasks = [...doneTasks];
    const task = newDoneTasks.splice(index, 1)[0];
    setDoneTasks(newDoneTasks);
    setTasks([...Tasks, task]);
  };

  const deleteTask = (id) => {
    // const newTasks = [...Tasks];
    // newTasks.splice(index, 1);
    // setTasks(newTasks);
    dispatch(deletetask(id))
  };

  const TaskCompletion = (index) => {
    const newTasks = [...Tasks];
    const task = newTasks.splice(index, 1)[0];
    setTasks(newTasks);
    setDoneTasks([...doneTasks, task]);
  };

  const handleEdit = (id) => {
    setEditMode(true);
    setEditIndex(id);
    // setEditedTask(Tasks[index]);
    // dispatch(edittask(id))
  };

  const handleSave = (id) => {
    if (editedTask.trim() === '') {
      setEditerror('no changes detected');
      return;
    }

    // const updatedTasks = [...Tasks];
    // updatedTasks[editIndex] = editedTask;
    // setTasks(updatedTasks);
    dispatch(edittask({id,edittext:editedTask}))
    setEditMode(false);
    // setEditIndex();
    setEditedTask('');
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
        <button className="button" onClick={addTask}>
          Add
        </button>
      </div>
      {ErrorMessage && <p className="error-message">{ErrorMessage}</p>}
      <h2>Task List</h2>
      <ul id="todoList">
        {todos.map((task ,index) => (
          <li key={index}>
            {editMode && editIndex === index ? (
              <>
                <input
                  type="text"
                  onChange={(e) => setEditedTask(e.target.value)}
                  defaultValue={task.text}
                />
                <button className="saveBtn" onClick={()=>handleSave(task.id)}>
                  Save
                </button>
                {editerror && <p className="error-message">{editerror}</p>}
              </>
            ) : (
              <>
                <input type="checkbox" onChange={() => TaskCompletion(index)} />
                {task.text}
                <div>
                  <button className="editBtn" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delBtn" onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <h2>Done List</h2>
      <ul id="donelist">
        {doneTasks.map((task, index) => (
          <li key={index}>
            {task}
            <div>
              <button className='undoBtn' onClick={() => undoTaskCompletion(index)}>Undo</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
