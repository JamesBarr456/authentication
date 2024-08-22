import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"
import TasksPage from "./pages/TasksPage"
import { AuthProvider } from "./context/AuthContext"

function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/> 
            <Route path="/tasks" element={<TasksPage/>}/> 
            <Route path="/tasks/:id" element={<span>Aqui va algo</span>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
