import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState({});
  const handleChange = (e) => {
    setNewTask(e.currentTarget.value);
  }
  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask
    };
    setToDoList([...toDoList, task]);
  }
  const deleteTask = (id) => {
    const newToDoList = toDoList.filter((task) => task.id !== id)
    setToDoList(newToDoList);
  }

  return (
    <div className='App'>
        <div className='addTask'>
            <input onChange={handleChange} />
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {toDoList.map((task, key) => {
            return (
              <div key={key}>
                <h1>{task.taskName}</h1>
                <button onClick={() => {deleteTask(task.id)}}>X</button>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default App