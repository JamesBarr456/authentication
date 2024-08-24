import axios from "./axios";

export const registerRequest = user =>  axios.post(`/register`, user)
export const loginRequest = user =>  axios.post(`/login`, user)

export const verityTokenRequest = ( token ) => { 
    const header = { 
        headers: {
                   Authorization: `Bearer ${ token }`, 
            },
    }
    return axios.get( '/verify ', header ) 	
}
