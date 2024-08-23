import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, verityTokenRequest } from "../api/auth";

import Cookies from "js-cookie"
import PropTypes from 'prop-types';

export const AuthContext = createContext();



export const AuthProvider = ({children}) => {
    const [ user, setUser] = useState([])
    const [ isAuthenticated, setIsAuthenticated] = useState(false)
    const [ error, setError] = useState(null)
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
        setLoading(true);
        try {
            const cookies = Cookies.get()
            if(!cookies.token) throw new Error("Token not available")

            const res =  await verityTokenRequest(cookies.token)
            if(!res.data) {
                setIsAuthenticated(false)
                // setLoading(false)
                setUser(null)  
            } else {
                setIsAuthenticated(true)
                // setLoading(false)
                setUser(res.data)
            }
        } catch (error) {
            console.log(error)
        }  finally {
            setLoading(false);
        }
      }
      checkLogin()
    }, [])


    const signUp = async ( user ) => {
        try {
            const res = await registerRequest( user )
            setUser( res.data )
            setIsAuthenticated(true)
        } catch (error) {
            setError(error.response.data.errors)
        }
      
    }

    const signIn = async ( user ) => {
        try {
            const res = await loginRequest( user )
            setUser( res.data )
            setIsAuthenticated(true)
            setLoading(false)
        } catch (error) {
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