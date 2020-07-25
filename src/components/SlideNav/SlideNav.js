import React, {useState} from "react"
import classes from "./SlideNav.module.css"
import FolderItem from "../FolderItem/FolderItem";
import AddFolder from "../AddFolder/AddFolder";
import Modal from "../Modal/Modal";
import SelectColor from "../SelectColor/SelectColor";
import {connect} from "react-redux"
import {addFolder} from "../../redux/action-creator";
import {CSSTransition} from "react-transition-group"

const SlideNav = (props) => {

    const [modalOpen, setModal] = useState(false);

    const [color, setColor] = useState("white")
    const [name, setName] = useState('')
    
    const setColorCloseOpenHanlder = (color) =>{
        setColor(color);
        return setModal(false)
    }
    const AddFolderHandler = () =>{
        props.onAdd({name:name, color: color})
        setColor('white')
        setName("")
    }

    return(
        <React.Fragment>
            <div className={classes.SlideNav}>
                {props.folders.map((folder, index) => <FolderItem key={index} folder={folder} />)}
                <AddFolder color={color} addFolderClick={AddFolderHandler} value={name} openModal={() => setModal(true)} setName={setName} />
            </div>
            <div onClick={props.closeHandler} className={classes.BackgroundSlide} />
            <CSSTransition in={modalOpen} timeout={500} classNames={"modalFade"} unmountOnExit>
                <Modal modalHandler={setModal} >
                    <SelectColor setColor={setColorCloseOpenHanlder}/>
                </Modal>
            </CSSTransition>
        </React.Fragment>
    )
}

function mapStateToProps(state){
    return{
        folders : state.folders
    }
}
function mapDispatchToProps(dispatch){
    return{
        onAdd: (folder) => dispatch(addFolder(folder))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideNav)