import React,{useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import Task from '../components/Task'

const TaskList = () => {
   const {tasks, filter} = useContext(TaskContext); 
   let filterTasks = tasks;
  if(tasks.length === 0){
    return(<h1 className='text-white text-7xl font-bold'>No hay tareas</h1>)
  }
  if(filter != ""){
    filterTasks = tasks.filter((task) => task.title.toLowerCase() === filter.toLowerCase())
  }

  return (
    <div className="bg-slate-700 overflow-x-hidden w-full">
    <ul className="flex flex-wrap gap-5 justify-center items-center"> 
      {filterTasks.map((task) => (
        <Task task = {task} key={task.id}/>
      ))}
    </ul>
  </div>
  )
}

export default TaskList