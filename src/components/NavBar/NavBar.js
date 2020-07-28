import React, {useEffect, useState} from "react"
import classes from './NavBar.module.css'
import SlideNav from "../SlideNav/SlideNav"
import Modal from "../Modal/Modal";
import Authorization from "../Authorization/Authorization";
import {connect} from "react-redux"
import Alert from "../Alert/Alert";
import {addAllFolder, authenticate, closeAlert, logout, modalOpen, pomodoroUpdateTicks, pomodoroShortBreakStart, pomodoroLongBreakStart, pomodoroStart, pomodoroFinish} from "../../redux/action-creator";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import settingIcon from "../../SVG/settings.svg"
import keyIcon from "../../SVG/key.svg"
import logoutIcon from "../../SVG/logout.svg"
import instructionIcon from "../../SVG/instruction.svg"
import menuIcon from '../../SVG/menu.svg'
import {CSSTransition} from "react-transition-group"
import Pomodoro from "../Pomodoro/Pomodoro"

const NavBar = (props) =>{

    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes
        var interval;
        function tick() {
            if(props.pomodoro.status==="new_started")
            {
                return;
            }
            var current_minutes = mins-1
            seconds--;
            props.pomodoroUpdateTicks(current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));
            
            if(current_minutes <=0 && seconds <= 0)
            {
                clearInterval(interval)
                if(props.pomodoro.status==="started")
                {
                    if(props.pomodoro.counterBreak >= 4)
                    {
                        props.pomodoroLongBreakStart()
                        return;
                    }
                    else{
                        props.pomodoroShortBreakStart()
                        return;
                    }
                }
                else
                {
                    props.pomodoroStart(props.pomodoro.taskId)
                    return;
                }
            }
            if(seconds <= 0){
                mins--;
                seconds = 60;
            }
            
            
        }
        interval = setInterval(tick,1000);
    }

    useEffect(()=>{
        if(props.pomodoro.status==="started")
        {
            countdown(25)
        }
        /*else if(props.pomodoro.status==="new_started"){
            countdown(1)
        }*/
        else if(props.pomodoro.status==="short_break")
        {
            countdown(5)
        }
        else if(props.pomodoro.status==="long_break")
        {
            countdown(30)
        }
    }, [props.pomodoro.status]) // eslint-disable-line


    const [slideNavOpen, setSlide] = useState(false);
    const [nameFolder, setNameFolder] = useState("")

    const [modalPomodoro, setModalPomodoro] = useState(false)

    let history = useHistory();
    const {id} = useParams();

    const clickHandler = () => setSlide(!slideNavOpen);
    const closeHandler = () => setSlide(false);

    useEffect(()=>{
        props.onAuth()
    }, []) // eslint-disable-line
    
    useEffect(()=>{
        if(props.isAuthenticate)
            {
                props.loadAllFolders();
            }
    }, [props.isAuthenticate]) // eslint-disable-line
    
    useEffect(()=>{
        for(let i =0; i < props.folders.length; i++)
        {
            if(props.folders[i].id===id)
            {
                setNameFolder(props.folders[i].name);
            }
        }
    }, [id, props.folders]) // eslint-disable-line

    const logout = () => {
        history.push({pathname: "/"})
        props.onLogout();
    }
    const auth = () =>{
        history.push({pathname: "/"})
        props.onModelOpen(true)
    }

    return(
        <React.Fragment>
            <CSSTransition in={props.modalAuth} timeout={500} classNames={"modalFade"} unmountOnExit>
                <Modal modalHandler={props.onModelOpen} open={props.modalAuth}>
                    <Authorization />
                </Modal>
            </CSSTransition>
            <div className={classes.NavBar}>
                <div className={classes.Container}>
                    {props.isAuthenticate 
                        ? <Button onClick={clickHandler}><img src={menuIcon} alt={"B"} /></Button>
                        : null }
                </div>
                <div>
                    <h2>{nameFolder}</h2>
                </div>
                   
                <div className={classes.Container}>
                    <Button><img src={instructionIcon} alt={"B"} /></Button>
                    <Button><img src={settingIcon} alt={"B"} /></Button>

                    {props.isAuthenticate 
                        ? <Button onClick={logout}><img src={logoutIcon} alt={"B"} /></Button>
                        : <Button onClick={auth}><img src={keyIcon} alt={"B"} /></Button>
                    }
                    
                </div>
            </div>
            {props.isAuthenticate ? <CSSTransition in={slideNavOpen} timeout={500} classNames={"slideFade"} unmountOnExit><SlideNav open={slideNavOpen} closeHandler={closeHandler}/></CSSTransition> : null }
            
            { props.alert.status ? <Alert time={props.alert.time} loading={props.alert.loading} closeEvent={props.onCloseAlert}>{props.alert.text}</Alert> : null }

            {props.pomodoro.status === "started" || props.pomodoro.status === "short_break" || props.pomodoro.status === "long_break" ? 
                <div onClick={()=>setModalPomodoro(true)} className={classes.PomodoroButton}>{props.pomodoro.ticks}</div> 
                : null}


            <CSSTransition in={modalPomodoro} timeout={500} classNames={"modalFade"} unmountOnExit>
                <Modal modalHandler={()=>setModalPomodoro(false)}>
                    <Pomodoro />
                </Modal>
            </CSSTransition>

        </React.Fragment>
    )
}

function mapStateToProps(state){
    return{
        isAuthenticate : state.isAuthenticate,
        modalAuth: state.modalAuth,
        alert: state.alert,
        folders : state.folders,
        pomodoro: state.pomodoro
    }
}
function mapDispatchToProps(dispatch){
    return{
        onLogout: () => dispatch(logout()),
        onModelOpen: (bool) => dispatch(modalOpen(bool)),
        onCloseAlert: () => dispatch(closeAlert()),
        onAuth: () => dispatch(authenticate()),
        loadAllFolders: () => dispatch(addAllFolder()),
        pomodoroUpdateTicks: ticks => dispatch(pomodoroUpdateTicks(ticks)),
        pomodoroShortBreakStart : () => dispatch(pomodoroShortBreakStart()),
        pomodoroLongBreakStart: () => dispatch(pomodoroLongBreakStart),
        pomodoroStart: taskId => dispatch(pomodoroStart(taskId)),
        pomodoroFinish: () => dispatch(pomodoroFinish())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)