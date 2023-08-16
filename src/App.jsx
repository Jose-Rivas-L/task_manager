import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Task from './components/Task'
import TaskList from './components/TaskList'
import FilterTask from './components/FilterTask'

function App() {
  return (
    <main className='relative mx-auto p-10'>
      <Form/>
      <FilterTask/>
      <TaskList/>
      <div className='mt-32'>
        <hr />
        <hr/>
      </div>
    </main>
  )
}

export default App
