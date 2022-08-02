import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState('');
  const handleChange = (e) => {
    setNewTask(e.currentTarget.value);
  }

  return (
    <div className='App'>
        <div className='addTask'>
            <input onChange={handleChange} />
            <button>Add Task</button>
        </div>
        <div className='list'>
          {newTask}
        </div>
    </div>
  )
}

export default App