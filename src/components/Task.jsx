import React,{useContext, useState} from "react";
import {TaskContext} from '../context/TaskContext'


const Task = ({task}) => {
  const {deleteTask, editingTask, completeTask} = useContext(TaskContext);

  return (
    <li
      className={`${task.state?'no-underline' : 'underline'} flex-1 p-5 bg-violet-500 text-white flex flex-col justify-center items-center gap-2 rounded-lg`}
    >
      <h3 className="text-3xl font-bold" name="title">{task.title}</h3>
      <p>{task.description}</p>
      <div className="flex gap-2">
      <button className="bg-slate-800 mt-4 rounded-md py-1 px-2 h-12 w-16 hover:bg-slate-600" onClick={()=>deleteTask(task.id)}>Delete</button>
      <button className="bg-violet-400 mt-4 rounded-md py-1 px-2 h-12 w-16 hover:bg-violet-300" onClick={()=> editingTask(task.id)}>Edit</button>
      <button className="bg-green-300 mt-4 rounded-md py-1 px-2 h-12 w-18 hover:bg-green-200" onClick={()=> completeTask(task.id)}>Complete</button>
      </div>
    </li>
  );
};

export default Task;
