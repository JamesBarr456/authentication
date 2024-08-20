import { login, register } from "../controllers/auth.controller.js";

import {Router} from "express" //enrutador de express

const router = Router();

router.post('/register', register) // cuando vaya a la ruta "/register" quiero que ejecutes la siguiente funcion. Eso basicamente hacer el router

router.post('/login', login)

export default router 
// ¿Por que exporto router? Porque ya cree las rutas estas deben ser añadidas a la aplicacion.