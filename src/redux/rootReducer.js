import {
    ADD_ALL_FOLDERS_SUCCESS, FOLDER_ERROR,
    ADD_FOLDER_SUCCESS,
    AUTHENTICATE,
    AUTHENTICATE_ERROR,
    AUTHENTICATE_SUCCESS,
    CLOSE_ALERT,
    LOADING_FINISH, LOADING_START,
    LOGOUT,
    MODAL_OPEN, DELETE_FOLDER_SUCCESS, TASK_ERROR, LOAD_TASK_SUCCESS, ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, POMODORO_START, POMODORO_UPDATE_TICKS, POMODORO_SHORT_BREAK_START, POMODORO_LONG_BREAK_START, POMODORO_FINISH, POMODORO_NEW_STARTED, OPEN_ALERT
} from "./action-types"

const initialState = {
    folders: [],
    tasks: {},
    isAuthenticate: false,
    modalAuth: false,
    alert:{
        status: false,
        text: "",
        loading: false,
        time: 0
    },
    pomodoro:{
        status: "stopped",
        timeout: 25, //seconds 1500 | 25 minutes
        taskId: null,
        ticks : "",
        couterBreak: 0
    }
}

export default function rootReducer(state=initialState, action){

    switch(action.type)
    {
        case ADD_ALL_FOLDERS_SUCCESS:{
            return {...state, folders: action.payload}
        }
        case ADD_FOLDER_SUCCESS:{
            return {...state, folders: state.folders.concat({id: action.payload.id, color: action.payload.color, name: action.payload.name})}
        }
        case FOLDER_ERROR:
        {
            return {...state, alert: {...state.alert, text: action.payload, status: true, time: 2000, loading: false}}
        }
        case DELETE_FOLDER_SUCCESS:{
            return {...state, folders: state.folders.filter(o => o.id !== action.payload.id)}
        }
        case LOAD_TASK_SUCCESS:
        {
            let keyId = action.folderId.toString();
            if(action.payload.length ===0)
            {
                return {...state, tasks: {...state.tasks, [keyId]: [] } }
            }

            const tasks = {...state.tasks, [keyId]: action.payload}
            return {...state, tasks: tasks}
        }
        case ADD_TASK_SUCCESS:
        {
            let keyId = action.folderId.toString();
            const tasks = {...state.tasks, [keyId]: state.tasks[keyId].concat(action.payload)}
            return { ...state,  tasks: tasks}
        }
        case TASK_ERROR:
        {
            return {...state, alert: {...state.alert, text: action.payload, status: true, time: 2000, loading: false}}
        }
        case DELETE_TASK_SUCCESS:
        {
            let keyId = action.folderId.toString();
            const tasks = {...state.tasks, [keyId]: state.tasks[keyId].filter(o => o.id !== action.payload.id)}
            return {...state, tasks: tasks}       
        }
        case AUTHENTICATE_SUCCESS:
        {
            let date = new Date();
            window.localStorage.setItem("token", action.payload.token)
            date.setMinutes(date.getMinutes() + Number(action.payload.expires));
            window.localStorage.setItem("expires", date.toString())
            return {...state, alert:{...state.alert, text: "Ви успішно авторизувались", status: true, time: 2000, loading: false}, isAuthenticate: true, modalAuth: false}
        }
        case AUTHENTICATE_ERROR:
        {
            return {...state, alert: {...state.alert, text: action.payload, status: true, time: 2000, loading: false}}
        }
        case AUTHENTICATE:
        {
            let date = new Date()
            
            if(window.localStorage.getItem("token") !== null || 
                window.localStorage.getItem("expires") !== null)
                {
                    
                    if(date <= new Date(window.localStorage.getItem("expires")))
                    {
                        return {...state, isAuthenticate: true}
                    }
                }
            return {...state, isAuthenticate: false}
        }
        case LOGOUT:
        {
            window.localStorage.removeItem("token")
            window.localStorage.removeItem("expires")
            return {...state, isAuthenticate:false, 
                alert: {...state.alert ,text:"Ви успішно вийшли з облікового запису", status: true, time: 2000, loading:false}}
        }
        case LOADING_START:{
            return {...state, alert:{...state.alert, text: action.payload, status: true, time: 0, loading: true}}
        }
        case LOADING_FINISH:{
            return {...state, alert:{...state.alert, status: false, time: 0, loading: false, text: ""}}
        }
        case MODAL_OPEN:
        {
            return {...state, modalAuth: action.payload}
        }
        case CLOSE_ALERT:
        {
            return {...state, alert:{...state.alert, status:false}}
        }
        case OPEN_ALERT:{
            return {...state, alert: {...state.alert ,text:action.payload, status: true, time: 2000, loading:false}}
        }

        case POMODORO_START:{
            return {...state, pomodoro: {...state.pomodoro, status:"started", timer: 25, taskId: action.payload}};
        }
        case POMODORO_NEW_STARTED:{
            return {...state, pomodoro: {...state.pomodoro, status:"new_started", timer: 25, taskId: action.payload}};
        }
        case POMODORO_UPDATE_TICKS:{
            return {...state, pomodoro: {...state.pomodoro, ticks: action.payload}}
        }
        case POMODORO_SHORT_BREAK_START:{
            return {...state, pomodoro: {...state.pomodoro, status:"short_break", counterBreak: state.pomodoro.counterBreak+1}}
        }
        case POMODORO_LONG_BREAK_START:{
            return {...state, pomodoro: {...state.pomodoro, status:"long_break", counterBreak: 0}}
        }
        case POMODORO_FINISH:{
            return {...state, pomodoro: {status: "stopped",
            timeout: 25, //seconds 1500 | 25 minutes
            taskId: null,
            ticks : "",
            couterBreak: 0}}
        }
        default:{
            return state;
        }
    }
}