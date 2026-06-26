import React, { useState } from 'react'

export default function Taskform({addTask}) {
    const[task, setTask] = useState("");
    const[priority, setPriority] = useState("Medium"); //default value 
    const[category, setCategory] = useState("General"); //default value

    const handlesubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority, category, complete: false});

        //reset state
        setTask(" ");
        setPriority("medium")
        setCategory('general')
    }

  return (
    <form className='task-form' onSubmit={handlesubmit}>
        <div id='inp'>
            <input type='text' placeholder='Enter your task' onChange={(e)=>setTask(e.target.value)} value={task}/>
            <span><button type='submit'>Add Task</button></span>
            {/* <h1>{task} {priority} {category}</h1> */}
        </div>

        <div id='btns'>
            <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>

            <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                <option value="general">General</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
            </select>
        </div>
    </form>
  )
}
