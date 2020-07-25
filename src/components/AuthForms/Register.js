import React, {useState} from "react";
import classes from "./Authorization.module.css"
import image from "./13457.jpg"
import {connect} from "react-redux"
import {register} from "../../redux/action-creator"

const Register = (props) =>{

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        props.onRegistration(username, email, password)
    }

    return (
        <React.Fragment>
            <div className={classes.Authorization}>
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2>Реєстрація</h2>
                    <input type={"text"} placeholder={'Username'} value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type={"email"} placeholder={'Email'} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type={"password"} placeholder={"Password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input type={"submit"} value={"Registration"}/>
                    <button onClick={props.onToggle}>Авторизуватись</button>
                </form>
                <div>
                <img alt={"img"} src={image}/>
                </div>
            </div>
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
    return{
        onRegistration: (username, email, password) => dispatch(register({username, email, password}))
    }
}

export default connect(null, mapDispatchToProps)(Register);