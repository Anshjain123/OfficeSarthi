import React, { createContext, useState, useReducer } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {


    const reducer =(state, action) => {
        // console.log(action.payload)
        return action.payload; 
    }

    const initialState = {
        id:"", 
        name:"", 
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isverified, setisverified] = useState(false);
    const [CheckIN, setCheckIN] = useState(false); 
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, state, dispatch, isverified, setisverified, CheckIN, setCheckIN }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider