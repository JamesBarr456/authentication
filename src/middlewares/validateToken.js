import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

const authRequired = (req, res, next) => { // ---> next es otro parametro tipico de los middlewares, sirve para que en ves de retornar algo simplemente le digamos al codigo "bueno si validaste, continua el bloque"
  const { token } = req.cookie
  if(!token) return res.status(401).json( { message : "No token, authorization denied.-"}) //--> Si no hay un token, se responde con un estado 401 (Unauthorized), indicando que no se proporcionó un token y, por lo tanto, la autorización fue denegada.
  
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json( { message : "Invalid token"});//---> Si la verificación falla (por ejemplo, si el token es inválido o ha expirado), se responde con un estado 403 (Forbidden), indicando que el token no es válido.
        req.user = user // ---> Si el token es válido, la información del usuario extraída del token (como el ID) se adjunta al objeto request. Esto permite que otros controladores o middlewares accedan a los datos del usuario a lo largo de la solicitud.
        next() //--> esto hace que continue el codigo, no se retorna nada
     })


}
export default authRequired