import React, {useState} from "react"
import classes from "./Task.module.css"
import ContextMenu from "../ContextMenu/ContextMenu";
import ContextItem from "../ContextItem/ContextItem";
import {connect} from "react-redux"
import {deleteTask} from "../../redux/action-creator";
import {useParams} from "react-router-dom"
import { Button } from "../Button/Button";
import playButton from "../../SVG/play.svg"

const Task = (props) =>{
    let classik = [classes.Task]

    const {id} = useParams();

    switch(props.task.color.toLowerCase())
    {
        case "yellow":
            classik.push(classes.TaskYellow);
            break;
        case "blue":
            classik.push(classes.TaskBlue);
            break;
        case "purple":
            classik.push(classes.TaskPurple);
            break;
        case "white":
            classik.push(classes.TaskWhite);
            break;
        case "green":
            classik.push(classes.TaskGreen);
            break;
        case "red":
            classik.push(classes.TaskRed);
            break;
        default:
            classik.push(classes.TaskWhite);
            break;
    }

    const [contextMenu, setContextMenu] = useState(false)
    const [position, setPosition] = useState({x:0, y:0})
    const [idt, setId] = useState(-1)

    const contextMenuHandler = (e, idt) => {
        e.preventDefault();
        setContextMenu(true);
        setPosition({x: e.pageX, y: e.pageY})
        setId(idt)
    }
    
    let datetime = null;
    
    if (props.task.dateTime !== null) 
    {
        let date = props.task.dateTime.split("T")
        
        datetime = (<React.Fragment>
            {date[0] !== "0001-01-01" ? <span>{date[0]}</span> : null }
            {date[1] !== "00:00:00" ? <span>{date[1].split(":")[0] + ":" + date[1].split(":")[1]}</span> : null }
        </React.Fragment>)
    }

    const menu = (
        <ContextMenu position={position} closeEvent={() => setContextMenu(false)}>
            <ContextItem clickEvent={() => props.onDelete(idt, id)}>Delete</ContextItem>
        </ContextMenu>
    )

    return(
        <React.Fragment>
            <div onContextMenu={(e)=> contextMenuHandler(e, props.task.id)} className={classik.join(" ")}>
                    <span>{props.task.text}</span>
                    <div>
                        <Button><img src={playButton} alt={"B"} /></Button>
                        <div className={classes.TaskTime}>
                            {datetime}
                        </div>
                    </div>
            </div>

            {contextMenu ? menu : null}
            
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
    return{
        onDelete: (id, folderId) => dispatch(deleteTask(id, folderId))
    }
}

export default connect(null, mapDispatchToProps)(Task)