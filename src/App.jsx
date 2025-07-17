import { useState } from 'react'
import CreateTaskForm from './components/CreateTaskForm'
import Navbar from './components/navbar'
import Tasks from './components/Tasks'
import { tasksData } from './data/tasks'

function App() {
  // console.log(tasksData);
  
  const [tasks, addTask] = useState(tasksData);
  
  return (
    <>
      <div>
        <Navbar />
        <CreateTaskForm addTask={addTask} tasks={tasks} />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
