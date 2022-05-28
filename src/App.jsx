import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import "./App.css"

import AddTask from './components/Addtask';
import Tasks from './components/Tasks';
import Header from './Header';
import TaskDetails from './components/TaskDetails';
import Task from './components/Task';
import axios from 'axios';

const App = () =>{
  //let message = "Hello, word!";
  const [tasks, setTasks] = useState(
    [
      // {id:'1', title:'Estudar Programação',completed: false},
      // {id:'2', title:'Estudar Inglês',completed: true},
      // {id:'3', title:'Estudar Espanhol',completed: true},
    ]);

    useEffect(() => {
      const fetchTasks = async() =>{
        const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
        setTasks(data);
        console.log(data);
      }
      
      fetchTasks();
    }, [])

    const handleTaskClick = (taskId) =>{
      const newTasks = tasks.map((task) => {
        if(task.id === taskId) return  {...task, completed: !task.completed}
        return task;
      });
      setTasks(newTasks);
    };

    const handleTaskClickDelete = (taskId) =>{
      const newTasks = tasks.filter(task => task.id !== taskId);
      setTasks(newTasks);
    };
  

    const handleTaskAddition = (taskTitle) => {
      const newTask = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }];
      setTasks(newTask);
    }

  return(
    <Router forceRefresh={true}>
        <div className='container'>
          <Header />
          <Route path="/" exact render={() => 
            (
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks 
                    tasks={tasks} 
                    handleTaskClick={handleTaskClick} 
                    handleTaskClickDelete={handleTaskClickDelete} 
                />
              </>
            )
          } />
          <Route path="/:taskTitle" exact component={TaskDetails} />
        </div>
    </Router>
  )
}

export default App;