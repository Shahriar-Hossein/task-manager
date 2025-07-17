import ToDoTasks from "./ToDoTasks"
import { tasksData } from "../data/tasks"
import TaskList from "./TaskList"

function Tasks() {


  return (
    <>
      <div className="flex  my-2">
        <div className="min-w-md md:min-w-lg lg:min-w-xl mx-2">
          <TaskList listName={"To-Do"} tasksData={tasksData} />
        </div>
        <div className="min-w-md md:min-w-lg lg:min-w-xl mx-2">
          <TaskList listName={"In Progress"} tasksData={tasksData} />
        </div>
        <div className="min-w-md md:min-w-lg lg:min-w-xl mx-2">
          <TaskList listName={"Done"} tasksData={null} />
        </div>
      </div>
    </>
  )

}

export default Tasks