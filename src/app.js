import authRoutes from './routes/auth.routes.js'
import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan("dev"))
app.use(express.json()) //middleware para pasar la req.body en json3

app.use("/api" , authRoutes)
export default app