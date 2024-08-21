import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id // ----> Le digo que busque solo las task con el id del usuario logueado.
    }).populate('user') // ---> luego que ademas como existe una relacion que me traiga toda la info de ese usuario
    res.json(tasks)
}

export const createTasks = async (req, res) => {
    const { title, description, date } = req.body
    try {
        const newTask = new Task({ title, description, date, user: req.user.id })
        const savedTask = await newTask.save()
        res.json(savedTask)
    } catch (error) {
       res.status(500).json( { message : error.message } )
    }
}

export const getTask = async (req, res) => {
    const taskFind = await Task.findById(req.params.id).populate('user')
    if (!taskFind) return    res.status(404).json( { message : "Task not found" } )
    res.json(taskFind)
}

export const updateTask = async (req, res) => {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true})
    if (!updateTask) return res.status(404).json( { message : "Error update: Task not found" } )
    res.json(updateTask)
}

export const deleteTask = async (req, res) => {
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    if(!deleteTask) return res.status(404).json( { message : "Error delete: Task not found" } )
    return res.sendStatus(204)
}