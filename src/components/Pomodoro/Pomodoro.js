import React from "react"
import classes from "./Pomodoro.module.css"
import Button from "@material-ui/core/Button"
import {connect} from "react-redux"
import {pomodoroStart} from "../../redux/action-creator"


const Pomodoro = props =>{
    let elem=null;
    if(props.status === 'started'){
        elem=<h2>Active</h2>;
    }
    else if(props.status === 'short_break'){
        elem=<h2>Short Break</h2>;
    }
    else if(props.status === 'long_break'){
        elem=<h2>Long break</h2>;
    }

    return(
        <div className={classes.Pomodoro}>
            {elem}
            <h1>{props.ticks}</h1>
            <div>
                <Button variant="contained" color={"secondary"}>Stop</Button>
                <Button variant="contained" color={"primary"}>Complete</Button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        ticks : state.pomodoro.ticks,
        status: state.pomodoro.status
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        onStartPomodoro : () => dispatch(pomodoroStart)
    }
}

export default connect(mapStateToProps, null)(Pomodoro)