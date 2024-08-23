import { login, loguot, profile, register, verifyToken } from "../controllers/auth.controller.js";
import { loginSchema, registerSchema } from "../validator/auth.validate.js";

import {Router} from "express" //enrutador de express
import authRequired from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validate.middleware.js";

const router = Router();

router.post('/register', validateSchema(registerSchema), register) // cuando vaya a la ruta "/register" quiero que ejecutes la siguiente funcion. Eso basicamente hacer el router

router.post('/login',validateSchema(loginSchema), login)

router.post('/loguot', loguot) //

router.get('/verify', verifyToken) 

router.get('/profile', authRequired, profile) // --> para acceder a esta ruta primero se validad si el usuario esta logueo. si es tru se ejecuta "profile"s


export default router 
// ¿Por que exporto router? Porque ya cree las rutas estas deben ser añadidas a la aplicacion.