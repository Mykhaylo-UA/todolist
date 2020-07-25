import {call, put, takeEvery} from "redux-saga/effects";
import {ADD_TASK, DELETE_TASK, LOAD_TASK} from "./action-types";
import {
    addTask, addTaskSuccess, deleteTask, deleteTaskSuccess,
    loadingFinish,
    loadingStart, loadTaskAPI, loadTaskSuccess,
    taskError
} from "./action-creator";
import Axios from "axios";
import {url} from "../global"

function loadTask(action){
    return Axios.get(url+"Task/"+action.payload, {
        headers: {"Authorization": "Bearer " + window.localStorage.token }
    })
}

function addTasktoAPI(action){
    return Axios.post(url+"Task", 
        action.payload,
        {
        headers: {"Authorization": "Bearer " + window.localStorage.token }
    })
}

function deleteTasktoAPI(action){
    return Axios.delete(url+"Task/"+action.payload,
        {
            headers: {"Authorization": "Bearer " + window.localStorage.token }
        })
}

function* workerTask(action=loadTaskAPI) {
    try{
        yield put(loadingStart("Загрузка задач."))
        const response = yield call(loadTask, action)
        const id = action.payload;
        if(!response.error)
        {
            yield put(loadingFinish())
            yield put(loadTaskSuccess(response.data, id))
        }
        else{

            yield put(loadingFinish())
            yield put(taskError(response))
        }
    }
    catch (e) {
        if(e.response === undefined)
        {
            yield put(loadingFinish())
            yield put(taskError("Помилка на сервері"))
        }
        else{
            yield put(loadingFinish())
            yield put(taskError("Помилка"))
        }
    }
}

function* workerAddTask(action=addTask) {
    try{
        yield put(loadingStart("Додавання задачі."))
        const response = yield call(addTasktoAPI, action)
        const id = action.payload.FolderId;
        if(!response.error)
        {
            yield put(loadingFinish())
            yield put(addTaskSuccess(response.data, id))
        }
        else{

            yield put(loadingFinish())
            yield put(taskError(response))
        }
    }
    catch (e) {
        if(e.response === undefined)
        {
            console.log(e)
            yield put(loadingFinish())
            yield put(taskError("Помилка на сервері"))
        }
        else{
            yield put(loadingFinish())
            yield put(taskError("Помилка"))
        }
    }
}

function* workerDeleteTask(action=deleteTask) {
    try{
        yield put(loadingStart("Видалення задачі."))
        const response = yield call(deleteTasktoAPI, action)
        const id = action.folderId;
        if(!response.error)
        {
            yield put(loadingFinish())
            yield put(deleteTaskSuccess(response.data, id))
        }
        else{

            yield put(loadingFinish())
            yield put(taskError(response))
        }
    }
    catch (e) {
        if(e.response === undefined)
        {
            yield put(loadingFinish())
            yield put(taskError("Помилка на сервері"))
        }
        else{
            yield put(loadingFinish())
            yield put(taskError("Помилка"))
        }
    }
}

export const watchTask = [
    takeEvery(LOAD_TASK, workerTask),
    takeEvery(ADD_TASK, workerAddTask),
    takeEvery(DELETE_TASK, workerDeleteTask)
]