import React, {useState} from "react"
import classes from "./AddTask.module.css"
import Modal from "../Modal/Modal";
import SelectColor from "../SelectColor/SelectColor";
import {CSSTransition} from "react-transition-group"
import DateFnsUtils from '@date-io/date-fns'
import {TextField} from "@material-ui/core"
import {
    DatePicker,
    MuiPickersUtilsProvider,
    TimePicker
  } from '@material-ui/pickers';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';

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
                <TextField value={props.text} onChange={e => props.changeText(e.target.value)} required className={classes.TextField}/>
                <button onClick={() => setModal(true)}><i style={{color: props.color === "white" ? "rgb(189, 189, 189)" : props.color}} className="material-icons">color_lens</i></button>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        value={props.date}
                        onChange={props.changeDate}
                        animateYearScrolling
                        format="dd-MM-yyyy"
                        autoOk
                        minDate={new Date('2020-07-01')}
                        emptyLabel="Date"
                        className={classes.Picker}
                    />
                    
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TimePicker
                        clearable
                        ampm={false}
                        value={props.time}
                        onChange={props.changeTime}
                        emptyLabel="Time"
                        className={classes.Picker}
                    />
                </MuiPickersUtilsProvider>

                <Select value={""} className={classes.Picker} displayEmpty={true} inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value="" disabled>
                        Repeat
                    </MenuItem>
                    <MenuItem value="Day">Every day</MenuItem>
                    <MenuItem value="Week">Every week</MenuItem>
                    <MenuItem value="Month">Every month</MenuItem>
                </Select>

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