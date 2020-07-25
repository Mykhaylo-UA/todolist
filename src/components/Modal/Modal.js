import React from "react"
import classes from "./Modal.module.css"

const Modal = (props) => {
    return(
        <React.Fragment>
            <div className={classes.Modal}>
                {props.children}
                
            </div>
            <div className={classes.backgroudModal} onClick={() => props.modalHandler(false)} />
        </React.Fragment>
    )
}

export default Modal