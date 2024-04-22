import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/fontawesome-free-regular";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";

const Todolist = ({ tasks, deleteTask, editTask }) => {
  let defaultTasks = [
    {
      id: Math.floor(Math.random * 127),
      text: "add a login page",
      completed: false,
      grouping: "devtask",
    },
    {
      id: Math.floor(Math.random * 127),
      text: "set unique keys",
      completed: false,
      grouping: "devtask",
    },
    {
      id: Math.floor(Math.random * 127),
      text: "deploy to netlify",
      completed: false,
      grouping: "devtask",
    },
    {
      id: Math.floor(Math.random * 127),
      text: "add a greeting for users",
      completed: false,
      grouping: "devtask",
    },
  ];

  if (
    !(tasks || (tasks.length === 0 && !defaultTasks)) ||
    defaultTasks.length === 0
  ) {
    return <div style={{ textAlign: "center" }}>No tasks found.</div>;
  }

  // index, text, completed, grouping
  const listItems = tasks.map((task) => (
    <div className="to-do">
      <ul>
        <li>{task.text} <span className={task.grouping}>{task.grouping}</span></li>
      </ul>
      <div className="modifier-buttons">
        <button
          className="trash icon"
          onClick={() => {
            deleteTask(task);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className="edit icon" onClick={() => editTask(task)}>
          <FontAwesomeIcon icon={faPencilSquare} />
        </button>
      </div>
    </div>
  ));

  const devItems = defaultTasks.map((devTask) => (
    <div className="to-do">
      <ul>
        <li key={devTask.id}>
          {devTask.text}
          <span className={devTask.grouping}>{devTask.grouping}</span>
        </li>
      </ul>
    </div>
  ));

  return (
    <div class="card-list">
      <div className="container">
        <p className="subtitle">to-do list</p>
        {listItems}
        {devItems}
      </div>
    </div>
  );
};

export default Todolist;
