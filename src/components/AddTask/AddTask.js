import React, {useState} from "react"
import classes from "./AddTask.module.css"
import Modal from "../Modal/Modal";
import SelectColor from "../SelectColor/SelectColor";
import {CSSTransition} from "react-transition-group"

const AddTask = (props) => {
    let classik = [classes.AddTask]

    switch(props.color.toLowerCase())
    {
        case "yellow":
            classik.push(classes.AddTaskYellow);
            break;
        case "blue":
            classik.push(classes.AddTaskBlue);
            break;
        case "purple":
            classik.push(classes.AddTaskPurple);
            break;
        case "white":
            classik.push(classes.AddTaskWhite);
            break;
        case "green":
            classik.push(classes.AddTaskGreen);
            break;
        case "red":
            classik.push(classes.AddTaskRed);
            break;
        default:
            classik.push(classes.AddTaskWhite);
            break;
    }
    const [modalOpen, setModal] = useState(false);

    const changeColorCloseModalHandler = (color) =>{
        props.changeColor(color);
        setModal(false)
    }

    return(
        <React.Fragment>
            <div className={classik.join(" ")}>
                <input value={props.text} onChange={(e) => props.changeText(e.target.value)} placeholder="New Task" />
                <button onClick={() => setModal(true)}><i style={{color: props.color === "white" ? "rgb(189, 189, 189)" : props.color}} className="material-icons">color_lens</i></button>
                <input value={props.date} onChange={(e) => props.changeDate(e.target.value)} type="date" />
                <input value={props.time} onChange={(e) => props.changeTime(e.target.value)} type="time" />
                <button onClick={props.addTask}><i className="material-icons">add</i></button>
            </div>
            <CSSTransition in={modalOpen} timeout={500} classNames={"modalFade"} unmountOnExit>
                <Modal modalHandler={setModal} >
                    <SelectColor setColor={changeColorCloseModalHandler}/>
                </Modal>
            </CSSTransition>
        </React.Fragment>
    )
}

export default AddTask