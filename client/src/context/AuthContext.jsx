import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { loginRequest, registerRequest } from "../api/auth";

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const [ user, setUser] = useState([])
    const [ isAuthenticated, setIsAuthenticated] = useState(false)
    const [ error, setError] = useState([])

    useEffect(() => {
        if(error.length > 0) {
            const timer = setTimeout(() => {
                setError([],4000)
            })
        return () => clearTimeout(timer)
        }
    }, [error])

    const signUp = async ( user ) => {
        try {
            const res = await registerRequest( user )
            setUser( res.data )
            setIsAuthenticated(true)
        } catch (error) {
            setError(error.response.data)
        }
      
    }

    const signIn = async ( user ) => {
        try {
            const res = await loginRequest( user )
           
        } catch (error) {
            if (Array.isArray(error.response.data)){
                return setError(error.response.data)
            }
            setError([error.response.data])
        }
      
    }
    return (
        <AuthContext.Provider 
            value = {{
                signUp,
                signIn,
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