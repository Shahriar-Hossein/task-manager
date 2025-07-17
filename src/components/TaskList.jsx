import TaskCard from "./TaskCard"

function TaskList ({listName, tasksData}) {
  
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold my-4 px-4 bg-emerald-500">
          {listName}
        </h3>
        { tasksData?.map( (task)=>{
          return (
            <TaskCard key={task.id} task={task} />
          )
        })}

      </div>
    </>
  )
}


export default TaskList