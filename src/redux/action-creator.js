import {
    ADD_FOLDER,
    FOLDER_ERROR,
    ADD_FOLDER_SUCCESS,
    ADD_TASK,
    AUTHENTICATE,
    AUTHENTICATE_ERROR,
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_TOAPI,
    CLOSE_ALERT,
    DELETE_TASK,
    LOADING_FINISH,
    LOADING_START,
    LOGOUT,
    MODAL_OPEN,
    REGISTER,
    ADD_ALL_FOLDER,
    ADD_ALL_FOLDERS_SUCCESS,
    DELETE_FOLDER_SUCCESS,
    DELETE_FOLDER,
    LOAD_TASK, LOAD_TASK_SUCCESS, TASK_ERROR, ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, 
    POMODORO_FINISH, POMODORO_START, POMODORO_SHORT_BREAK_FINISH, POMODORO_SHORT_BREAK_START, POMODORO_LONG_BREAK_FINISH, POMODORO_LONG_BREAK_START, POMODORO_UPDATE_TICKS, POMODORO_NEW_STARTED, OPEN_ALERT
} from "./action-types"

export const addFolder = payload => ({type: ADD_FOLDER, payload:payload});
export const addFolderSuccess = payload => ({type:ADD_FOLDER_SUCCESS, payload:payload})
export const addAllFolder = () => ({type: ADD_ALL_FOLDER})
export const addAllFoldersSuccess = payload => ({type: ADD_ALL_FOLDERS_SUCCESS, payload:payload})
export const folderError = payload => ({type: FOLDER_ERROR, payload:payload})
export const deleteFolder = payload => ({type: DELETE_FOLDER, payload:payload})
export const deleteFolderSuccess = payload => ({type: DELETE_FOLDER_SUCCESS, payload:payload})

export const addTask = (payload) => ({type: ADD_TASK, payload: payload});
export const addTaskSuccess = (payload, folderId) => ({type: ADD_TASK_SUCCESS, payload:payload, folderId:folderId})
export const loadTaskSuccess = (payload, folderId) => ({type: LOAD_TASK_SUCCESS, payload:payload, folderId:folderId})
export const taskError = payload => ({type: TASK_ERROR, payload:payload})
export const loadTaskAPI = payload => ({type: LOAD_TASK, payload:payload})
export const deleteTask = (payload, folderId) => ({type: DELETE_TASK, payload:payload, folderId:folderId});
export const deleteTaskSuccess = (payload, folderId) => ({type:DELETE_TASK_SUCCESS, payload:payload, folderId:folderId})

export const register = payload => ({type: REGISTER, payload:payload});

export const authenticateToAPI = payload => ({type: AUTHENTICATE_TOAPI, payload:payload})
export const authenticateSuccess = payload => ({type:AUTHENTICATE_SUCCESS, payload:payload})
export const authenticateError = payload => ({type:AUTHENTICATE_ERROR, payload:payload})
export const authenticate = () => ({type: AUTHENTICATE})

export const logout = () => ({type:LOGOUT});

export const loadingStart = payload => ({type: LOADING_START, payload:payload})
export const loadingFinish = () => ({type: LOADING_FINISH})

export const modalOpen = payload => ({type:MODAL_OPEN, payload:payload});
export const closeAlert = () => ({type: CLOSE_ALERT})
export const openAlert = text => ({type: OPEN_ALERT, payload: text})

export const pomodoroStart = taskId => ({type: POMODORO_START, payload:taskId})
export const pomodoroFinish = () => ({type: POMODORO_FINISH})
export const pomodoroShortBreakStart = () => ({type: POMODORO_SHORT_BREAK_START})
export const pomodoroShortBreakFinish = () => ({type: POMODORO_SHORT_BREAK_FINISH})
export const pomodoroLongBreakStart = () => ({type: POMODORO_LONG_BREAK_START})
export const pomodoroLongBreakFinish = () => ({type: POMODORO_LONG_BREAK_FINISH})
export const pomodoroUpdateTicks = ticks => ({type: POMODORO_UPDATE_TICKS, payload:ticks})
export const pomodoroNewStarted = taskId => ({type: POMODORO_NEW_STARTED, payload: taskId})