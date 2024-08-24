import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useTasks } from "../hooks/useTasks"

function TasksPage() {
  const { getTasks, tasks, deleteTasks, updateTasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])
  
  if(tasks.length === 0 ) return <p className="text-white">No hay tareas para mostrarse</p>
  return (
    <div className="flex gap-5 mx-10 my-14">
      {
        tasks.map( (task) => (
          <div key={task._id} className="flex-col space-y-2 justify-end  h-full p-4 bg-gray-800 rounded-xl">
            <p className="text-2xl font-semibold text-white">{task.title}</p>
            <p className="pb-8 text-sm tracking-wide leading-tight text-white">{task.description}</p>
            <p className="pb-8 text-sm tracking-wide leading-tight text-white">{new Date(task.date).toLocaleDateString()}</p>
            <div className="flex gap-12">
              <button
                onClick={() => {
                  deleteTasks(task._id)}
                } 
                className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              >
                DELETE
               </button>
              <button
                className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               
              >
                <Link to={`/tasks/${task._id}`}>Update</Link>
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TasksPage