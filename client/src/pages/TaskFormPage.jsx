import { useNavigate, useParams } from "react-router-dom"

import { Button } from "../components"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useTasks } from "../hooks/useTasks"

function TaskFormPage() {
  const {register, handleSubmit, setValue, formState: {errors}} = useForm()
  const { createTasks, updateTask, getTask } = useTasks()
  const navigate = useNavigate()
  const params = useParams()

  useEffect( 
     () => {
      async function loadTask() {
        if(params.id) {
          const taks = await getTask(params.id)
          setValue('title', taks.title)
          setValue('description', taks.description)
        }
      }
      loadTask()
     }, []
  )
  return (
    <form onSubmit={

      handleSubmit( data =>  {
        if(params.id){
          updateTask(params.id , data)
        } else {
          createTasks(data)
         
        }
        navigate("/tasks")
      } )
    }>
      <div className="container pt-24 mx-auto w-screen flex justify-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 shadow-md ">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Task Form</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Complete the form below to add a new task to your list.</p>
          <div className="relative mb-4">
            <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
            <input 
              {...register("title", {required: true})} 
              autoFocus
              type="text"  
              name="title"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               { errors.title && ( <p className="my-1 text-xs text-red-500 font-bold  w-full">Title is required</p>)}
          </div>
          <div className="relative mb-4">
            <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea 
              {...register("description", {required: true})} 
              name="description" 
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
               { errors.description && ( <p className="my-1 text-xs text-red-500 font-bold  w-full">Description is required</p>)}
          </div>
          <Button label={"Add task"} type="submit"/>
          </div>
      </div>
    </form>
   
  )
}

export default TaskFormPage