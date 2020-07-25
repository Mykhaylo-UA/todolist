import {takeEvery, put, call} from "redux-saga/effects"
import {AUTHENTICATE_TOAPI, REGISTER} from "./action-types";
import {
    authenticateError,
    authenticateSuccess,
    authenticateToAPI,
    loadingFinish,
    loadingStart,
    register
} from "./action-creator"
import Axios from "axios";
import {url} from "../global"

function authData(action){
    return Axios.post(url+"Login",
        {Email: action.payload.email, Password: action.payload.password})
}
function regData(action){
    return Axios.post(url+"Register", {
        "Username": action.payload.username,
        "Email": action.payload.email,
        "Password": action.payload.password
    })
}

function* workerAuthToApi(action = authenticateToAPI){
    try{
        yield put(loadingStart("Виконується авторизація."))
        const response = yield call(authData, action)
        if(!response.error)
        {
            yield put(loadingFinish())
            yield put(authenticateSuccess(response.data))
        }
        else{
            yield put(loadingFinish())
            yield put(authenticateError(response))
        }
    }
    catch (e) {
        if(e.response === undefined)
        {
            yield put(loadingFinish())
            yield put(authenticateError("Помилка на сервері"))
        }
        else if(e.response.data.status === 401) {
            yield put(loadingFinish())
            yield put(authenticateError("Користувача з такими даними не існує"))
        }
        else{
            yield put(loadingFinish())
            yield put(authenticateError("Помилка"))
        }
    }
}

function* workerRegToApi(action = register) {
    try{
        yield put(loadingStart("Виконується реєстрація."))
        const response = yield call(regData, action)
        if(!response.error)
        {
            yield put(loadingFinish())
            yield put(authenticateSuccess(response.data))
        }
        else{
            yield put(loadingFinish())
            yield put(authenticateError(response))
        }
    }
    catch (e) {
        if(e.response === undefined)
        {
            yield put(loadingFinish())
            yield put(authenticateError("Помилка на сервері"))
        }
        if(e.response.data === "Даний користувач уже існує") {
            yield put(loadingFinish())
            yield put(authenticateError("Даний користувач уже існує"))
        }
        else{
            yield put(loadingFinish())
            yield put(authenticateError("Помилка"))
        }
    }
}

export const watchAuthenticateToAPI= [
    takeEvery(AUTHENTICATE_TOAPI, workerAuthToApi),
    takeEvery(REGISTER, workerRegToApi) 
]