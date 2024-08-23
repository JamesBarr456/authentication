import { TOKEN_SECRET } from '../config.js'
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { creatAccessToken } from '../libs/jws.js'
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
   const { email, password, username } = req.body //Esto es el body que recibo de la request a traves de la peticion HTTP y ahora debemos guardarlo
  
    try {
        const userFound = await User.findOne({ email })
        if (userFound) return res.status(400).json( {errors : ["The email already exists"]})

        const passwordHash = await bcrypt.hash(password, 10) // ---> se hashea el codigo
        const newUser = new User( // - --> se crea el usuario
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
        
        const userFound = await User.findOne({ email}) //true or false

        if( !userFound )  return res.status(400).json({ errors : "User not found"})

       const isMatch = await bcrypt.compare(password, userFound.password) //true or false

       if(!isMatch) return res.status(400).json({errors : ["Password invalid"]})

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

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ errors: 'Unauthorized: No token provided' });
    }

    try {
        // Verifica el token usando una promesa
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    reject(new Error('Unauthorized: Invalid token'));
                } else {
                    resolve(decoded);
                }
            });
        });

        // Asegúrate de extraer solo el valor del id
        const userFound = await User.findById(decoded.id);

        if (!userFound) {
            return res.status(401).json({ errors: 'Unauthorized: User not found' });
        }

        // Responde con los datos del usuario
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });

    } catch (error) {
        console.error('Token verification error:', error.message);
        return res.status(401).json({ errors: error.message });
    }
};