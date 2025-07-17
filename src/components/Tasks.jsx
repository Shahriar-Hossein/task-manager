import TaskList from "./TaskList"
import { useMemo } from "react"

function Tasks( {tasks}) {
  const todoTasks = useMemo( ()=> {
    return tasks?.filter((task)=>{
      return task.status === 'to-do';
    });
  }, tasks)
  const inprogressTasks = useMemo( ()=> {
    return tasks?.filter((task)=>{
      return task.status === 'in-progress';
    });
  }, tasks)
  const doneTasks = useMemo( ()=> {
    return tasks?.filter((task)=>{
      return task.status === 'done';
    });
  }, tasks)
  
  return (
    <>
      <div className="flex  my-2">
        <div className="min-w-md md:min-w-lg lg:min-w-xl mx-2">
          <TaskList listName={"To-Do"} tasksData={todoTasks} />
        </div>
        <div className="min-w-md md:min-w-lg lg:min-w-xl mx-2">
          <TaskList listName={"In Progress"} tasksData={inprogressTasks} />
        </div>
        <div className="min-w-md md:min-w-lg lg:min-w-xl mx-2">
          <TaskList listName={"Done"} tasksData={doneTasks} />
        </div>
      </div>
    </>
  )

}

export default Tasks