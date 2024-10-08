import {BrowserRouter, Route, Routes} from "react-router-dom"

import { AuthProvider } from "./context/AuthContext"
import Home from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import { Navbar } from "./components"
import ProfilePage from "./pages/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"
import RegisterPage from "./pages/RegisterPage"
import TaskFormPage from "./pages/TaskFormPage"
import { TaskProvider } from "./context/TaskContext"
import TasksPage from "./pages/TasksPage"

function App() {
 
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/> 
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/> 
                <Route element={<ProtectedRoute/>}>
                  <Route path="/tasks" element={<TasksPage/>}/> 
                  <Route path="/add-task" element={<TaskFormPage/>}/>
                  <Route path="/tasks/:id" element={<TaskFormPage/>}/>
                  <Route path="/profile" element={<ProfilePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
