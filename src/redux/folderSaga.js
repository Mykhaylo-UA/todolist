import {call, put, takeEvery} from "redux-saga/effects";
import {ADD_ALL_FOLDER, ADD_FOLDER, DELETE_FOLDER} from "./action-types";
import {
    addAllFoldersSuccess,
    addFolder, folderError, addFolderSuccess, deleteFolder,
    loadingFinish,
    loadingStart, deleteFolderSuccess
} from "./action-creator";
import Axios from "axios";
import {url} from "../global"

function getFolders(){
    return Axios.get(url+"Folder", 
        {
        headers : {"Authorization": "Bearer " + window.localStorage.token }
    })
}

function foldData(action){
    return Axios.post(url+"Folder", {
        Color: action.payload.color,
        Name: action.payload.name
    }, {
        headers : {"Authorization": "Bearer " + window.localStorage.token }
    })
}
function deleteFolderAPI(action){
    return Axios.delete(url+"Folder/"+action.payload, {
        headers: {"Authorization": "Bearer " + window.localStorage.token }
    })
}

function* workerGetAllFolder(){
    try{
        const response = yield call(getFolders)
        if(!response.error)
        {
            yield put(addAllFoldersSuccess(response.data))
        }
        else{
            yield put(folderError(response))
        }
    }
    catch (e) {
        if(e.response === undefined)
        {
            yield put(folderError("Помилка на сервері"))
        }
        else{
            yield put(folderError("Помилка"))
        }
    }
}

function* workerFolder(action = addFolder) {
    try{
        yield put(loadingStart("Додається список."))
        const response = yield call(foldData, action)
        if(!response.error)
        {
            yield put(loadingFinish())
            yield put(addFolderSuccess(response.data))
        }
        else{

            yield put(loadingFinish())
            yield put(folderError(response))
        }
    }
    catch (e) {
        if(e.response === undefined)
        {
            yield put(loadingFinish())
            yield put(folderError("Помилка на сервері"))
        }
        else{
            yield put(loadingFinish())
            yield put(folderError("Помилка"))
        }
    }
}

function* workerDeleteFolder(action = deleteFolder) {
    try {
        yield put(loadingStart("Видалення списка."))
        const response = yield call(deleteFolderAPI, action)
        if (!response.error) {
            yield put(loadingFinish())
            yield put(deleteFolderSuccess(response.data))
        } else {

            yield put(loadingFinish())
            yield put(folderError(response))
        }
    } catch (e) {
        if (e.response === undefined) {
            yield put(loadingFinish())
            yield put(folderError("Помилка на сервері"))
        } else {
            yield put(loadingFinish())
            yield put(folderError("Помилка"))
        }
    }
}

export const watchFolder = [
    takeEvery(ADD_FOLDER, workerFolder),
    takeEvery(ADD_ALL_FOLDER, workerGetAllFolder),
    takeEvery(DELETE_FOLDER, workerDeleteFolder)
]