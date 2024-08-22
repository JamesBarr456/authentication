import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(morgan("dev"))
app.use(express.json()) //middleware para pasar la req.body en json3
app.use(cookieParser())


app.use("/api" , authRoutes)
app.use("/api",taskRoutes)
export default app