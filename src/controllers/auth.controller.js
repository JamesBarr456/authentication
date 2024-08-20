import User from '../models/user.model.js'

export const register = async (req, res) => {
   const { email, password, username } = req.body //Esto es el body que recibo de la request a traves de la peticion HTTP y ahora debemos guardarlo
  
    try {
        const newUser = new User(
            {
                username,
                password,
                email
               }
           )
         const userSaved = await newUser.save() //ya me da el creadAt y updateAt
        res.json(userSaved)
    } catch (error) {
        console.log(error)
    }
  
}
export const login = (req, res) => {
    res.send("yo voy a hacer la funcion de login")
}