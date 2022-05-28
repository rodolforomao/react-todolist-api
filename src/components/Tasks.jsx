import React from 'react'
import Task from './Task';

const Tasks = ({tasks, handleTaskClick, handleTaskClickDelete}) =>{
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} handleTaskClick={handleTaskClick} handleTaskClickDelete={handleTaskClickDelete} />
            ))}
        </>
    );;
}

export default Tasks;