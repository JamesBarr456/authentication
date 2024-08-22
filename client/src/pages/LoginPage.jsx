import { Button, Input, LayoutFormAuth } from "../components";
import { useForm } from "react-hook-form"
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";


function LoginPage() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const { signIn, error: loginError } = useAuth()
  
  const navigate = useNavigate()
  const title = "Sign in";
  
  return (
    <LayoutFormAuth title={title}>
       {
        loginError.map((error, i) =>(
          <span key={i} className="bg-red-500 text-white p-2 my-1 rounded-xl ">{error}</span>
        ))

      }
     <form onSubmit={
          handleSubmit(async values => {
            console.log(values)
            // signIn(values)
            
          })
     }>
       <div className="flex flex-col gap-4 p-6">
        <Input 
          {...register("email", {required: true})} 
          label="Email"
          name="email" 
          type="email"
        /> 
        { errors.email && ( <p className="text-center text-red-500 font-bold  w-full">Email is required</p>)}

        <Input 
          {...register("password", {required: true})} 
          label="Password"
          name="password" 
          type="password"
        />
          { errors.password && ( <p className="text-center text-red-500 font-bold  w-full">Password is required</p>)}

      </div>

      <div className="p-6 pt-0">
        <Button 
          label="Access" 
          type="submit"
        />
        <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
          Don&apos;t have an account?
          <Link 
            to="/register"
            className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
          >
              Sign up
          </Link>
        </p>
      </div>
     </form>
    </LayoutFormAuth>
  )
}

export default LoginPage