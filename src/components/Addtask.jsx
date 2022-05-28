import React, { useState } from 'react';

import Button from './Button'

import './Addtask.css'


const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) =>{
        setInputData(e.target.value);
    };

    const handleTaskClick = () =>{
        handleTaskAddition(inputData);
        setInputData('');
    }

    return (
        <div>
            <div className='add-task-container'>
                <input 
                    onChange={handleInputChange}
                    value={inputData}
                    className='add-task-input' 
                    type="text"
                />;
                <div className='add-task-button-container'>
                    <Button onClick={handleTaskClick}>Adicionar</Button>
                </div>
            </div>
        </div>
        );
        
}
 
export default AddTask;
