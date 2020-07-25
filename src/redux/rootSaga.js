import {all} from "redux-saga/effects"
import {watchAuthenticateToAPI} from "./authSagas"
import {watchFolder} from "./folderSaga";
import {watchTask} from "./taskSaga";


export function* rootSaga() {
    yield all([...watchAuthenticateToAPI, ...watchFolder, ...watchTask])
}