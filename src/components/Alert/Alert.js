import React, {useEffect} from "react"
import classes from "./Alert.module.css"
import spinner from "./spinner.svg"

const Alert = (props) => {
    const {time, closeEvent} = props;
    
    useEffect(()=>{
        let timeout = null;
        if(time !== 0){
            timeout = setTimeout(closeEvent, time)
        }
        
        return () => {
            if(timeout != null) {
                clearTimeout(timeout)
            }
        }
    }, []) // eslint-disable-line
    
    return(
        <div className={classes.Alert}>
            <div>
                {props.children}
            </div>
            {props.loading 
                ? <img src={spinner} alt="Spin" />
                : <i onClick={props.closeEvent} className="material-icons">close</i> }
        </div>
    )
}

export default Alert