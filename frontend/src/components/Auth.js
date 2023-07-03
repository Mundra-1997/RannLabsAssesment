import React, { createContext, useState } from 'react'

export const auth = createContext();
const Auth = (props) => {
    const [user, setUser]= useState(false);
    const [tog,setTog] = useState(false)
   
    const login = ()=> {
        setUser(true)
    }
    const logout = ()=> {
        setUser(false)
    }

    const change = ()=> {
      setTog(true)
    }

    const removeChange =()=> {
      setTog(false)
    }
  return (
    <auth.Provider value={{tog, change, user, login , logout, removeChange}}>
    {props.children}
  </auth.Provider>
  )
}

export default Auth
