import React from "react"
import classes from "./ContextItem.module.css"

const ContextItem = (props) =>{
    return (
        <div onClick={props.clickEvent} className={classes.ContextItem}>
            {props.children}
        </div>
    )
}

export default ContextItem