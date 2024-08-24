import { Button } from "./Button"
import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const Navbar = () => {
    const { isAuthenticated, signOut } = useAuth()
    return (
        <div className="mx-auto grid grid-cols-4 items-center bg-gray-800 text-white top-0 py-3 p-5">
            <h1 className="text-lg font-semibold col-span-1">Tasks Manager</h1>
            <ul className="flex justify-center gap-10 text-m col-span-2">
                <Link to="/">Home</Link>
                {
                    isAuthenticated 
                    &&
                       (
                        <>
                        <Link to="/tasks">Tasks</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/add-task">New Task</Link>
                        </>
                       )
                } 
              
            </ul>
            <div className="flex justify-center gap-3 col-span-1">
            {
                    isAuthenticated 
                        ?
                        
                        (<Button type="button" label="Sign Out" onClick={signOut}/>)
                   
                        :
                        (
                            <>
                                <Link to="/login">Sign In</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )
                } 
               
            </div>
        </div>  
  )
}
