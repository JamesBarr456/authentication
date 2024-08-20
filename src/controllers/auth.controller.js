import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { creatAccessToken } from '../libs/jws.js'

export const register = async (req, res) => {
   const { email, password, username } = req.body //Esto es el body que recibo de la request a traves de la peticion HTTP y ahora debemos guardarlo
  
    try {
        const passwordHash = await bcrypt.hash(password, 10) // ---> se hashea el codigo
        const newUser = new User( // ---> se crea el usuario
            {
                username,
                password: passwordHash,
                email
               }
        )
        const userSaved = await newUser.save() //ya me da el creadAt y updateAt ---> se guarda el usuario 
        const token = await creatAccessToken({ id : userSaved._id})
   
        res.cookie("token", token) //---> se le manda el token al front por medio de la cookie
        res.json({//una buena practica es no devolver toda la informacion si no la necesaria para el front end 
            id: userSaved._id,
            username: userSaved.username,
            email : userSaved.email,
        }) 
        
    } catch (error) {
        res.status(500).json( { message : error.message } )
    }
  
}
export const login = (req, res) => {
    res.send("yo voy a hacer la funcion de login")
}