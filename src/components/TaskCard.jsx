import Avatar from "./Avatar";
import TaskTagCapsule from "./TaskTagCapsule";

function TaskCard ({ task }) {


  return (
    <>
      <div
        className="shadow-lg rounded-2xl bg-cyan-50 p-4 my-4">
        <div className="my-2 flex items-start">
          <div className="mx-2">
            <Avatar 
              assigned_to={task.assigned_to}
              image_link={task.image_link}
            />
          </div>
          <div>
            <div className="font-semibold text-2xl">
              {task.name}
            </div>
            <div className="font-thin text-lg ">
              {task.time}
            </div>
          </div>
        </div>
        <div className="my-2 text-lg">
          {task.description}
        </div>
        <div className="my-2 flex gap-2">
          {task.tags.map( (tag,tagIndex) =>{
            return (
              <TaskTagCapsule key={tagIndex} label={tag} />
            )
          })}
        </div>
      </div>

    </>
  )
}

export default TaskCard;