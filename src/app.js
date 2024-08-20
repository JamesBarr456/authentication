import express from 'express';
import morgan from 'morgan';

const app = express();
// app.use(express.json()) //middleware para pasar la req.body en json3

app.use(morgan("dev"))
export default app