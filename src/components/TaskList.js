import React from "react";
import Task from "./Task";

function TaskList( { tasks, onHandleTasks }) {
  
  const tasksElements = tasks.map((task, index) => {
    return <Task key={index} category={task.category} text={task.text} onHandleTasks={onHandleTasks}/>
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksElements}
    </div>
  );
}

export default TaskList;
