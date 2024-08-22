import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { creatAccessToken } from '../libs/jws.js'

export const register = async (req, res) => {
   const { email, password, username } = req.body //Esto es el body que recibo de la request a traves de la peticion HTTP y ahora debemos guardarlo
  
    try {
        const userFound = await User.findOne({ email })
        if (userFound) return res.status(400).json( ["The email already exists"])

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
export const login = async (req, res) => {
  const { email, password} = req.body  
  
    try {
        
        const userFound = await User.findOne({ email: email}) //true or false

        if( !userFound )  return res.status(400).json({ message : "email invalid"})

       const isMatch = bcrypt.compare(password, userFound.password) //true or false

       if(!isMatch) return res.status(400).json({ message: "password invalid"})

        const token = await creatAccessToken({ id : userFound._id}) //---> igual le creamos un token 
   
        res.cookie("token", token) //---> mandamos a la cookie
        res.json({
            id: userFound._id,
            username: userFound.username,
            email : userFound.email,
        }) 
        
    } catch (error) {
        res.status(500).json( { message : error.message } )
    }
}

export const loguot = async (req, res) => {
    //cuando vamos a hacer un loguot debemos limpiar la cookie
    res.cookie("token", "", { expires: new Date(0)} )
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (userFound) return res.status(400).json({ message: "User not found"})
    return res.json({
            id: userFound._id,
            username: userFound.username,
            email : userFound.email,
        }) 
}