import React from "react";

function Task( { category, text, onHandleTasks }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onHandleTasks(text)}>X</button>
    </div>
  );
}

export default Task;
