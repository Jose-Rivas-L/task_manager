import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext("");

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const editingTask = (id) => {
    setEditing(id);
  };

  const completeTask = (id) => {
    const taskComplete = tasks.map((task) => {
      if (task.id === id) {
        const state = task.state ? false : true;
        return {
          ...task,
          state: state,
        };
      }
      return task;
    });
    setTasks(taskComplete);
  };

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.state === false));
    console.log(completedTasks);
  },[tasks]);

  useEffect(() => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: "first task",
        description: "Description",
        state: true,
      },
    ]);
    console.log(tasks);
  }, []);

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    if (editing === id) {
      setEditing(null);
    }
  };

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task.title,
        description: task.description,
        state: true,
      },
    ]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        createTask,
        deleteTask,
        editingTask,
        editing,
        filter,
        setFilter,
        completeTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
