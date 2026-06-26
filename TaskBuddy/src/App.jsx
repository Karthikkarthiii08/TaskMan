import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'

export default function App() {

  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))  //converting data into json format
  })

  const addTask = (task) => {
    setTasks([...tasks,task])  //spread operator bcz it will not support overriding
  }

  const updateTask = (updatedTask, index) => {
    const newtasks = [...tasks];
    newtasks[index]= updatedTask;
    setTasks(newtasks)

  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

// Clear All Tasks
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <h1>Task Buddy</h1>

      <p className="subtitle">
        <i>Your Friendly Task Manager</i>
      </p>

      <Taskform addTask={addTask} />

      <Tasklist
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />

      <Progresstracker tasks={tasks} />

      {tasks.length > 0 && (
        <button onClick={clearTasks} className="clear-btn">
          🗑️ Clear All Tasks
        </button>
      )}
    </div>
  );
}