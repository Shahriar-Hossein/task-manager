import { useFormStatus } from "react-dom"

function CreateTaskForm() {
  
  const { pending } = useFormStatus();

  const createTask = (formData) => {
    console.log(formData.get('assigned_to'));
    
  }

  return (
    <>
      <div className="py-2 mx-auto min-w-2xl px-4">
        <form action={createTask} className="flex">
          <div className="flex flex-col">
            <label for="assigned_to" className="m-1 ml-4 "> Assign To</label>
            <input 
              type="text"
              name="assigned_to"
              placeholder="Enter Full Name"
              required
              className="border border-cyan-300 rounded-full px-4 py-1 ml-4 focus:border-cyan-500 focus:outline-cyan-500 focus:inset-shadow-cyan-500/50"
            />
          </div>

          <div className="flex flex-col">
            <label for="task_name" className="m-1 ml-8 "> Task Name </label>
            <input 
              type="text"
              name="task_name"
              placeholder="Enter Task Name"
              required
              className="border border-cyan-300 rounded-full px-4 py-1 ml-4 focus:border-cyan-500 focus:outline-cyan-500 focus:inset-shadow-cyan-500/50"
            />
          </div>
          <div className="flex flex-col">
            <label for="task_description" className="m-1 ml-8 "> Task Description </label>
            <textarea 
              type="textarea"
              name="task_description"
              placeholder="Enter Task Description"
              rows={3}
              cols={30}
              required
              className="border border-cyan-300 rounded-full px-4 py-1 ml-4 focus:border-cyan-500 focus:outline-cyan-500 focus:inset-shadow-cyan-500/50"
            />
          </div>
          <div className="flex flex-col">
            <label for="task_tag" className="m-1 ml-6 "> Task tag</label>
            <select 
              type="select"
              name="task_tag"
              placeholder="Select tags"
              required
              className="border border-cyan-300 rounded-full px-4 py-1 ml-4 focus:border-cyan-500 focus:outline-cyan-500 focus:inset-shadow-cyan-500/50"
            >
              <option value="" disabled selected > Select Tag</option>
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