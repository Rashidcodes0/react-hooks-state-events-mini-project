import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks } = props;

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;

