
function ToDoTasks () {
  const toDoTakData = [
    {
      name: "Unassigned",
      time: "dd/mm/yyyy hh:tt",
      description: "Task Description: Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem",
      tags: ["Good First Issue", "Bug Fix"],
    },
    {
      name: "Unassigned",
      time: "Create Time",
      description: "Task Description: Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem",
      tags: ["Good First Issue", "Bug Fix"],
    },
    {
      name: "Unassigned",
      time: "Create Time",
      description: "Task Description: Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem",
      tags: ["Good First Issue", "Bug Fix"],
    },
    {
      name: "Unassigned",
      time: "Create Time",
      description: "Task Description: Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem",
      tags: ["Good First Issue", "Bug Fix"],
    },
  ];
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold my-4">
          To-Do
        </h3>
        { toDoTakData.map( (item,index)=>{
          return (
            <div
              key={index} 
              className="shadow-lg rounded-2xl bg-cyan-50 p-4 my-4">
              <div className="my-2">
                <div className="font-semibold text-2xl">
                  {item.name}
                </div>
                <div className="font-thin text-lg ">
                  {item.time}
                </div>
              </div>
              <div className="my-2 text-lg">
                {item.description}
              </div>
              <div className="my-2 flex gap-2">
                {item.tags.map( (tag,tagIndex) =>{
                  return (
                    <div key={tagIndex} className="px-2 bg-cyan-500 rounded-lg">
                      {tag}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

      </div>
    </>
  )
}


export default ToDoTasks