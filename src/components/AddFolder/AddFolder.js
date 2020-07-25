import React from "react"
import classes from "./AddFolder.module.css"

const AddFolder = (props) => {
    return(
        <div className={classes.AddFolder}>
            <input value={props.value} onChange={(e)=>props.setName(e.target.value)} placeholder="New Folder" />
            <button onClick={props.openModal}><i style={{color: props.color === "white" ? "rgb(189, 189, 189)" : props.color}} className='material-icons'>color_lens</i></button>
            <button onClick={props.addFolderClick}><i className='material-icons'>add</i></button>
        </div>
    )
}

export default AddFolder