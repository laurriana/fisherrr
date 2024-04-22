import React, { useState, useEffect } from "react";
import NewTask from "./newTask";
import Todolist from "./todolist";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputBar = document.querySelector(".taskInput");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (task) => {
    setInputValue(task.text);
    deleteTask(task);
    inputBar.focus();
  };

  const deleteTask = (task) => {
    const updatedTasks = tasks.filter((t) => t !== task);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <NewTask
        onAddTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Todolist
        tasks={tasks}
        setTasks={setTasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default TodoApp;
