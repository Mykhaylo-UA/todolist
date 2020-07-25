import React from "react"
import classes from "./SelectColor.module.css"

const SelectColor = (props) => {
    const colors =['white','yellow','red', 'green', 'purple', 'blue']

    return(
        <div className={classes.SelectColor}>
            {colors.map((color)=><button key={color} onClick={() => props.setColor(color)} ><i style={{color: color === "white" ? "rgb(189, 189, 189)" : color}} className={"material-icons"}>color_lens</i>{color}</button>)}
        </div>
    )
}

export default SelectColor