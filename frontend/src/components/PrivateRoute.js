import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

const { auth } = require("./Auth")


function PrivateRoute() {
    const {user} = useContext(auth)
 
    if(!user){       
        return <Navigate to='/'/>
        
    }else{
        return <Outlet/>
    }   
}

export default PrivateRoute