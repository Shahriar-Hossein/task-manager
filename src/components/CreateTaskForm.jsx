import { useState } from "react";
import { useFormStatus } from "react-dom"

function CreateTaskForm({addTask, tasks}) {
  const { pending } = useFormStatus();
  const defaultTask = {
    id: tasks.at(-1).id + 1,
    status: 'to-do',
    assigned_to: null,
    image_link: 'src/assets/GvzmgDcboAA-57z.jpg',
    name: "",
    time: Date.now(),
    description: "",
    tags: ["Good First Issue"],
    tag: 'Bug Fix',
  }

  const [task, setTask] = useState(defaultTask);
  const handleForm = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }
  const createTask = () => {
    addTask(()=>[...tasks, task]);
  }

  return (
    <>
      <div className="py-2 mx-auto min-w-2xl px-4">
        <form action={createTask} className="flex">
          <div className="flex flex-col">
            <label htmlFor="assigned_to" className="m-1 ml-4 "> Assign To</label>
            <input 
              type="text"
              name="assigned_to"
              placeholder="Enter Full Name"
              onChange={handleForm}
              className="border border-cyan-300 rounded-full px-4 py-1 ml-4 focus:border-cyan-500 focus:outline-cyan-500 focus:inset-shadow-cyan-500/50"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="m-1 ml-8 "> Task Name </label>
            <input 
              type="text"
              name="name"
              placeholder="Enter Task Name"
              onChange={handleForm}
              required
              className="border border-cyan-300 rounded-full px-4 py-1 ml-4 focus:border-cyan-500 focus:outline-cyan-500 focus:inset-shadow-cyan-500/50"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="m-1 ml-8 "> Task Description </label>
            <textarea 
              type="textarea"
              name="description"
              placeholder="Enter Task Description"
              rows={3}
              cols={30}
              onChange={handleForm}
              required
              className="border border-cyan-300 rounded-full px-4 py-1 ml-4 focus:border-cyan-500 focus:outline-cyan-500 focus:inset-shadow-cyan-500/50"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tag" className="m-1 ml-6 "> Task tag</label>
            <select 
              type="select"
              name="tag"
              placeholder="Select tag"
              onChange={handleForm}
              defaultValue={""}
              required
              className="border border-cyan-300 rounded-full px-4 py-1 ml-4 focus:border-cyan-500 focus:outline-cyan-500 focus:inset-shadow-cyan-500/50"
            >
              <option value="" disabled> Select Tag</option>
              <option value="bug fix"> Bug Fix </option>
              <option value="good first issue"> Good First Issue </option>
              <option value="ui fix"> UI Fix </option>
              <option value="new feature"> New Feature </option>
              <option value="update feature"> Update Feature </option>
            </select>
          </div>
          <div className="ml-4 self-center mb-4">
            <button 
              type="submit" 
              disabled = {pending}
              className={`bg-cyan-300 py-2 px-4 rounded-3xl hover:bg-cyan-500 hover:text-white cursor-pointer active:bg-cyan-700 active:text-white inset-ring-amber-500 ${pending ? 'bg-cyan-700' : "bg=cyan-300"}`}
            >
             {pending ? "Creating Task..." : "Create Task"} 
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateTaskForm