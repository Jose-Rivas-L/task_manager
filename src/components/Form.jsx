import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

const Form = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const { tasks, setTasks, createTask, editing, editingTask } =
    useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim() != "" && form.description.trim() != "") {
      if (editing != null) {
        const updateTasks = tasks.map((task) => {
          if (task.id === editing) {
            return {
              ...task,
              title: form.title,
              description: form.description,
            };
          }
          return task;
        });
        setTasks(updateTasks);
        editingTask(null);
      } else {
        createTask(form);
      }
      setForm({ title: "", description: "" });
    } else {
      alert("Please fill the form");
    }
  };

  useEffect(() => {
    if (editing != null) {
      const editedTask = tasks.find((task) => task.id === editing);
      if(editedTask){
        setForm({
          title: editedTask.title,
          description: editedTask.description,
        });
      }
      console.log(editing);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="max-w-md mx-auto flex flex-col justify-center items-center gap-10">
      <h1 className="text-white sm:text-[3rem] text-[2rem] font-bold">
        Task manager
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full p-6">
        <input
          autoFocus
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="rounded-md outline-dashed outline-violet-500 border-none py-2 px-3"
        />
        <textarea
          value={form.description}
          placeholder="description"
          name="description"
          onChange={handleChange}
          className="rounded-md outline-dashed outline-violet-500 border-none py-2 px-3 resize-none"
        />
        <button className="bg-violet-500 text-white p-4 rounded-md hover:bg-violet-400 transition-all">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
