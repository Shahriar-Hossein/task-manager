import CreateTaskForm from './components/CreateTaskForm'
import Navbar from './components/navbar'
import Tasks from './components/Tasks'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <CreateTaskForm />
        <Tasks />
      </div>
    </>
  )
}

export default App
