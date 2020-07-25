import React, {useState} from "react"
import classes from "./FolderItem.module.css"
import ContextMenu from "../ContextMenu/ContextMenu";
import ContextItem from "../ContextItem/ContextItem";
import {deleteFolder} from "../../redux/action-creator";
import {connect} from "react-redux"
import { useHistory } from "react-router-dom";

const FolderItem =(props) =>{
    let classik = [classes.FolderItem]

    let history = useHistory();
    
    switch(props.folder.color.toLowerCase())
    {
        case "yellow": 
            classik.push(classes.FolderItemYellow);
            break;
        case "white": 
            classik.push(classes.FolderItemWhite);
            break;
        case "green": 
            classik.push(classes.FolderItemGreen);
            break;
        case "purple": 
            classik.push(classes.FolderItemPurple);
            break;
        case "blue": 
            classik.push(classes.FolderItemBlue);
            break;
        case "red": 
            classik.push(classes.FolderItemRed);
            break;
        default: 
            classik.push(classes.FolderItemWhite);
            break;
    }

    const [contextMenu, setContextMenu] = useState(false)
    const [position, setPosition] = useState({x:0, y:0})
    const [id, setId] = useState(-1)
    
    const menu = (
        <ContextMenu position={position} closeEvent={() => setContextMenu(false)}>
            <ContextItem clickEvent={() => props.onDelete(id)}>Delete</ContextItem>
        </ContextMenu>
    )

    const contextMenuHandler = (e, id) => {
        e.preventDefault();
        setContextMenu(true);
        setPosition({x: e.pageX, y: e.pageY})
        setId(id)
    }
    
    const onClickToPush = (e, id) => {
        e.preventDefault();
        history.push({pathname: '/'+id})
    }

    return(
        <React.Fragment>
            <div onContextMenu={!props.folder.required ? (e)=> contextMenuHandler(e, props.folder.id) : null} className={classik.join(" ")}>
                <a href={'/'+props.folder.id} onClick={(e) => onClickToPush(e, props.folder.id)}><i style={{color:props.folder.color.toLowerCase()==="white"? "lightgray":props.folder.color.toLowerCase(), marginRight: 10}} className={"material-icons"}>folder</i>{props.folder.name}</a>
            </div>

            {contextMenu ? menu : null}
            
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
    return{
        onDelete: (id) => dispatch(deleteFolder(id))
    }
}

export default connect(null, mapDispatchToProps)(FolderItem)