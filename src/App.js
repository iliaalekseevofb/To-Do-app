import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState('');
  const handleChange = (e) => {
    setNewTask(e.currentTarget.value);
  }
  const addTask = () => {
    const newToDoList = [...toDoList, newTask];
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
            return <h1 key={key}>{task}</h1>
          })}
        </div>
    </div>
  )
}

export default App