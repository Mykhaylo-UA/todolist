import React, {useEffect, useState} from "react"
import classes from "./Tasks.module.css"
import Task from "../Task/Task"
import AddTask from "../AddTask/AddTask"
import {connect} from 'react-redux'
import {addTask, loadTaskAPI} from "../../redux/action-creator";
import {useParams} from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Tasks = (props) => {
    
    const {id} = useParams();
    
    useEffect(()=>
        {
            if(props.tasks[id] == null || props.tasks[id] === undefined)
            {
                props.loadTask(id)
            }
        }
        ,[id]) // eslint-disable-line
    
    const [color, setColor] = useState("white")
    const [text, setText] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")

    const changeTextHandler = text => setText(text)
    const changeColorHandler = color => setColor(color)
    const changeDateHandler = date => setDate(date)
    const changeTimeHandler = time => setTime(time)

    const addTaskHandler = () => {
        let datetime=null;
        if(date === null || date === ""){
            datetime = "0001-01-01T"
        }
        else{
            datetime = date+"T";
        }
        if(time === null || time==="")
        {
            datetime += "00:00";
        }
        else{
            datetime += time;
        }
        props.onAdd({color:color, text:text, datetime: (datetime === "0001-01-01T00:00" ? null : datetime), FolderId: id})
        setColor("white")
        setText("")
        setDate("")
        setTime("")
    }

    return(
        <div className={classes.Tasks}>
            {/*<h2>Name Folder</h2>*/}
            <div className={classes.TaskList}>

                <TransitionGroup>
                    {props.tasks[id] === undefined ? null : props.tasks[id].map((task, index) => 
                        <CSSTransition
                        key={index}
                        timeout={300}
                        classNames="item"
                        >
                            <Task task={task}/>
                        </CSSTransition>)
                    }
                </TransitionGroup>

                <AddTask 
                    text={text}
                    color={color}
                    time={time}
                    date={date}
                    changeColor={changeColorHandler}
                    changeText={changeTextHandler}
                    changeDate={changeDateHandler}
                    changeTime={changeTimeHandler}
                    addTask={addTaskHandler}
                />
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        tasks:  state.tasks
    }
}
function mapDispatchToProps(dispatch){
    return{
        onAdd: (task) => dispatch(addTask( task)),
        loadTask : id => dispatch(loadTaskAPI(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)