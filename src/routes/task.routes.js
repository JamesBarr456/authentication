import { Router } from 'express';
import authRequired from '../middlewares/validateToken.js';
import { createTasks, deleteTask, getTask, getTasks, updateTask } from '../controllers/task.controller.js';
import { validateSchema } from '../middlewares/validate.middleware.js';
import { taskSchema } from '../validator/task.validate.js';

const router = Router()

router.get('/tasks', authRequired , getTasks)

router.get('/tasks/:id',authRequired , getTask)

router.post('/tasks',authRequired ,validateSchema(taskSchema), createTasks)

router.delete('/tasks/:id',authRequired, deleteTask)

router.put('/tasks/:id',authRequired , updateTask)

export default router