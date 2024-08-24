import { Navigate, Outlet } from "react-router-dom"

import { useAuth } from "./hooks/useAuth"

function ProtectedRoute() {
 const {loading , isAuthenticated }= useAuth()

  if ( loading ) return <h1 className="text-white text-3xl font-bold">Loading......</h1>
  
  if (!isAuthenticated) return <Navigate to = "/login" replace/>

  return <Outlet/>
    
  
}

export default ProtectedRoute