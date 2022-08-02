import React, { useState } from 'react';
import Task from './components/Task';
import './App.css';

const App = () => {
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState('');
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
          {toDoList.map((task) => {
            return (
              <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
            )
          })}
        </div>
    </div>
  )
}

export default App