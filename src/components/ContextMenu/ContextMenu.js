import React, { useEffect } from "react"
import classes from "./ContextMenu.module.css"

const ContextMenu = (props) => {

    const closeEvent = () => {        
        props.closeEvent()
    }
    const closeEventTightClick = (e) =>
    {
        if(e.target.parentElement === null){
            closeEvent()
            return;
        }
        for(let i=0; i < e.target.parentElement.children.length; i++ )
        {
            if(e.target.classList[0] === e.target.parentElement.children[i].classList[0])
            {
                closeEvent()
            }
        }
    }
    useEffect(()=>
    {
        document.addEventListener('click', closeEvent)
        document.addEventListener('contextmenu', closeEventTightClick)
    })
    useEffect(()=>{
        return () => {
            document.removeEventListener('click', closeEvent)
            document.removeEventListener('contextmenu', closeEventTightClick)
        }
    })

    return(
        <div style={{top: props.position.y, left: props.position.x}} className={classes.ContextMenu}>
            {props.children}
        </div>
    )
}

export default ContextMenu