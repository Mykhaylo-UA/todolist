import React, {useState} from "react";
import classes from "./Authorization.module.css"
import image from "./16876.jpg"
import {connect} from "react-redux"
import {authenticateToAPI} from "../../redux/action-creator";

const Auth = (props) =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAuthenticate(email, password)
    }

    return (
        <React.Fragment>
            <div className={classes.Authorization}>
                <div><img alt={"img"} src={image}/></div>
                
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2>Авторизуватись</h2>
                    <input type={"email"} placeholder={'Email'} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type={"password"} placeholder={"Password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input type={"submit"} value={"Submit"}/>
                    <button onClick={props.onToggle}>Реєстрація</button>
                </form>
            </div>
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
    return{
        onAuthenticate: (email, password) => dispatch(authenticateToAPI({ email, password}))
    }
}

export default connect(null, mapDispatchToProps)(Auth);