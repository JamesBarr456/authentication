import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, verityTokenRequest } from "../api/auth";

import Cookies from "js-cookie"
import PropTypes from 'prop-types';

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const [ user, setUser] = useState([])
    const [ isAuthenticated, setIsAuthenticated] = useState(false)
    const [ error, setError] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(error.length > 0) {
            const timer = setTimeout(() => {
                setError([])
            },3000)
        return () => clearTimeout(timer)
        }
    }, [error])

    useEffect(() => {
      async function checkLogin() {
        const cookies = Cookies.get()
        console.log(cookies)
        if(!cookies.token) {
           setIsAuthenticated(false)
           setLoading(false)
           return setUser(null) 
        }
        
        try {
            const res =  await verityTokenRequest(cookies.token)
            if(!res.data) {
                setIsAuthenticated(false)
                setLoading(false)
                return 
            }
            setIsAuthenticated(true)
            setUser(res.data)
            setLoading(false)
        } catch (error) {
            setIsAuthenticated(false)
            setUser(null)
            setLoading(false)
            
        }
      }

      checkLogin()
    }, [])


    const signUp = async ( user ) => {
        try {
            const res = await registerRequest( user )
            console.log(res.data)
            setUser( res.data )
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setError(error.response.data.errors)
          
        }
      
    }

    const signIn = async ( user ) => {
        try {
            const res = await loginRequest( user )
            setUser( res.data )
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            const errorMessages = Array.isArray(error.response.data.errors)
            ? error.response.data.errors
            : [error.response.data.errors];
            setError(errorMessages);
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
                loading
            }}
        >
            { children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
 
  children: PropTypes.node.isRequired,
};