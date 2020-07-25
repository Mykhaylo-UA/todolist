import React, { useState } from "react"
import Register from "../AuthForms/Register"
import Auth from "../AuthForms/Auth"

const Authorization = () =>{
    const [auth, setAuth] = useState(false)

    const toRegister = () => setAuth(true)

    const toAuth = () => setAuth(false)
    
    return(
        <React.Fragment>
            {auth ? <Register onToggle={toAuth}/> : <Auth onToggle={toRegister}/>}
        </React.Fragment>
    )
}

export default Authorization