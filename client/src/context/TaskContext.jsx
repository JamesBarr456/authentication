import { createContext, useState } from "react";
import { createTasksRequest, deleteTasksRequest, getTaskRequest, getTasksRequest, updateTasksRequest } from "../api/tasks";

import PropTypes from 'prop-types';

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
const [tasks, setTasks] = useState([])

const createTasks = async ( task ) => {
   const res = await createTasksRequest( task ) 
}

const getTasks = async ( ) => {
    try {
        const res =  await getTasksRequest()
        setTasks(res.data)
    } catch (error) {
        console.log(error)
    }
}
const deleteTasks = async ( id ) => {
    try {
        const res = await deleteTasksRequest( id )   
        if (res.status === 204) setTasks(tasks.filter( task => task._id !== id ))
    }
     catch (error) {
     
     console.log(error)
}}

const updateTask = async ( id, task ) => {
    try {
        const res = await updateTasksRequest( id , task )   
    } catch (error) {
        console.log(error)
    }
}
const getTask = async ( id ) => {
    try {
        const res =  await getTaskRequest( id )
        return res.data
    } catch (error) {
        console.log(error)
    }
}

    return (
        <TaskContext.Provider 
            value = {{
                tasks,
                createTasks,
                getTasks,
                deleteTasks,
                updateTask,
                getTask

            }}
        >
            { children}
        </TaskContext.Provider>
    )
}

TaskProvider.propTypes = {
 
  children: PropTypes.node.isRequired,
};