import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const [ user, setUser] = useState([])
    const [ isAuthenticated, setIsAuthenticated] = useState(false)
    const [ error, setError] = useState(null)
    
    const singUp = async ( user ) => {
        try {
            const res = await registerRequest( user )
            setUser( res.data )
            setIsAuthenticated(true)
        } catch (error) {
            setError(error.response.data)
        }
      
    }

    return (
        <AuthContext.Provider 
            value = {{
                singUp,
                user,
                isAuthenticated,
                error,
            }}
        >
            { children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
 
  children: PropTypes.node.isRequired,
};