import React, { useState } from 'react'

const TODO = () => {

    const [Tasks, setTask] = useState([])
    const [newTask, setNewTask] = useState()

    // Update State Variable on every Input
    function handleChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask([...Tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(currentTask) {
        setTask(Tasks.filter((_, allTask) =>
            currentTask !== allTask))
    }

    return (
        <div className='container'>
            <div className="input-section">
                <h1>TODO List App</h1>
                <input
                    value={newTask}
                    onChange={handleChange}
                    id='task-input-field'
                    type="text"
                    placeholder='Enter Task to do'
                />
                <button
                    id='add-btn'
                    onClick={addTask}
                >Add Task</button>
            </div>
            <div className="todos-section">

                {Tasks.map((task, index) =>
                    <li key={index}>
                        {task}
                        <button
                            id='del-btn'
                            onClick={() => deleteTask(index)}
                        >Delete</button>
                    </li>
                )}
            </div>
        </div>
    )
}

export default TODO
