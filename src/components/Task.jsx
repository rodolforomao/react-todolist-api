import React from 'react';
import {CgClose} from "react-icons/cg"
import {CgInfo} from "react-icons/cg"
import { useHistory } from 'react-router-dom';


import './task.css'

const Task = ({task, handleTaskClick, handleTaskClickDelete}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () =>{
        history.push(`/${task.title}`);
    }

    
    return ( 
        <div 
            className='task-container task-title'
            style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}
            >
                <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                    {task.title}
                </div>
                
                <div className='buttons-container'>
                    <button
                        className='see-task-details-button' 
                        onClick={handleTaskDetailsClick} 
                    >
                        <CgInfo/>
                    </button>
                        
                    <button className='remove-task-button' 
                        onClick={() => handleTaskClickDelete(task.id)}
                    >
                        <CgClose/>
                    </button>
                        
                </div>
        </div> 
    );
    //return ( <div className='task-container' onClick={handleTaskClick}>{task.title}</div> );
}
 
export default Task;