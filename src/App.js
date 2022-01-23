import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { TaskItem } from './MyComponents/TaskItem';
import { Tasks } from './MyComponents/Tasks';
import React, {useState} from 'react';
import { AddTask } from './MyComponents/AddTask';

function App() {
  const onDelete = (task) => {
    console.log("I am on Delete",task);
    setTasks(tasks.filter((e) => {
      return e!==task;
    }))
  }

  const addTask = (title,desc) => {
    console.log("Add Task",title,desc);
    let sno;
    if(tasks.length === 0){
      sno = 1
    }else{
      sno = tasks[tasks.length - 1].sno + 1;
    }
    const myTask = {
      sno:sno,
      title:title,
      desc:desc
    }
    setTasks([...tasks,myTask]);
    console.log(myTask);
  }
  const [tasks, setTasks] = useState([
    {
      sno :1,
      title:"Goto School",
      desc:"You must to goto school for lesving certificate"
    },
    {
      sno :2,
      title:"Drink water",
      desc:"Regular water drink"
    },
    {
      sno :3,
      title:"Play soccer",
      desc:"Time to play"
    }
  ]);
  return (
    <>
      <Header title="12" />
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} onDelete={onDelete} /> 
      <Footer />
    </>
  );
}

export default App;
