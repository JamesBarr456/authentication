import { TOKEN_SECRET } from "../config.js"
import jwt from "jsonwebtoken"

export function creatAccessToken( payload) {
   return new Promise( (resolve, reject) => {
    jwt.sign({ // ---> se crea el token
        id : payload, // ---> es el valor que le vas a pasar "id"
    }, TOKEN_SECRET, { // ----> el token secret (aun n ose mucho de eso )
        expiresIn: "1d" //----> el tiempo que queres que dure ese token
    }, (err, token) => { //---> y lo que pasara si sale mal o bien
        if (err) reject(err)
        resolve(token)
    })
   })

}