import { tasksData } from "../data/tasks"
import TaskCard from "./TaskCard"

function ToDoTasks () {
  
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold my-4 px-4">
          To-Do
        </h3>
        { tasksData.map( (task)=>{
          return (
            <TaskCard key={task.id} task={task} />
          )
        })}

      </div>
    </>
  )
}


export default ToDoTasks