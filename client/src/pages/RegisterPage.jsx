import { Button, Input, LayoutFormAuth } from "../components"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useForm } from "react-hook-form"

function RegisterPage() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const { signUp,  isAuthenticated, error: registerError } = useAuth()
  const title = "Sing up";
  const navigate = useNavigate()

  useEffect(() => {
    if(isAuthenticated) navigate("/tasks")
  }, [isAuthenticated, navigate])


  console.log(registerError)
  return (
    <LayoutFormAuth 
      title={title}
    >
      {
        registerError.map((error, i) =>(
          <span 
            key={i} 
            className="bg-red-500 text-white text-xs p-2 mx-6 my-2  rounded-lg "
          >
            {error}
          </span>
        ))

      }
      <form 
        onSubmit={ 

          handleSubmit(async values => {
            console.log(values)
          signUp(values)
          })
        }
      
      >
        <div className="flex flex-col gap-4 p-6">
          <Input 
            {...register("username", {
              required: "Username is required", // Mensaje para campo requerido
              validate: {
                isString: (value) => {
                  // Verifica si el valor es numérico
                  return (value && isNaN(value)) ? true : "Expected string, received number";
                }
              }
            })}
            type="text" 
            name="username" 
            label="Username" 
          />
          {errors.username && (
            <p className="text-center text-xs text-red-500 font-bold w-full">
              {errors.username.message}
            </p>
          )}

          <Input 
            {...register("email", {required: true})} 
            label="Email" 
            name="email" 
            type="email"
          />
          { errors.email && ( <p className="text-center text-xs text-red-500 font-bold  w-full">Email is required</p>)}

          <Input 
            {...register("password", {required: true})} 
            label="Password" 
            name="password" 
            type="password"
          />
          { errors.password && ( <p className="text-center text-xs text-red-500 font-bold  w-full">Password is required</p>)}

        </div>
        <div className="p-6 pt-0">
          <Button 
            type="submit" 
            label="Create account"
          />
          <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
            Already have an account?
            <Link 
              to="/login"
              className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
              Sing in
            </Link>
          </p>
        </div>
      </form>
    </LayoutFormAuth>
  )
}

export default RegisterPage