import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  //let tasksArray = [...TASKS]
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All"); // Track selected category
  /*
  const categoryObjectArray = CATEGORIES.map(category => {
    return {category: category, selected: ""}
  })
  const [categories, setCategories] = useState(categoryObjectArray)
  */

  //const [form, setForm] = useState({text: "", category: "Code"})

  function handleTask(text){
    //console.log(event.target.parentElement)
    const updatedTasks = tasks.filter((task) => {
      return (task.text != text)
    })
    //tasksArray = [...updatedTasks]
    setTasks(updatedTasks)
  }
  
  /*
  function handleFilterButton(event){
    //setTasks(tasks)
    console.log(event.target)
    const updatedCategories = categories.map(category => {
      if(category.category == event.target.textContent){
        return {...category, selected: "selected"}
      }
      return {...category, selected: ""}
    })

    const tasksToShown = tasksArray.filter((task) => {
      if(event.target.textContent == "All"){
        return true
      }
      return task.category == event.target.textContent
    })
    setCategories(updatedCategories)
    setTasks(tasksToShown)
  }
  */

  function handleFilterButton(category) {
    setSelectedCategory(category); // Update the selected category

    // Filter tasks based on selected category
    const filteredTasks = (category === "All" ? TASKS : 
      TASKS.filter(task => task.category === category))
    setTasks(filteredTasks);
  }
  
  
  function handleSubmit(form){
    //event.preventDefault();
    const newTasks = [...tasks, form]
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} 
      onHandleFilterButton={handleFilterButton}/>
      <NewTaskForm  categories={CATEGORIES} 
      onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={tasks} onHandleTasks={handleTask}/>
    </div>
  );
}

export default App;
