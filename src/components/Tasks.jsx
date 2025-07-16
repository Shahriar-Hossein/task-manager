import ToDoTasks from "./ToDoTasks"

function Tasks() {


  return (
    <>
      <div className="flex  my-2">
        <div className="min-w-2xl mx-2">
          <ToDoTasks  />
        </div>
        <div className="min-w-2xl bg-cyan-50 mx-2">
          In-Progress
        </div>
        <div className="min-w-2xl bg-cyan-50 mx-2">
          Done
        </div>
      </div>
    </>
  )

}

export default Tasks