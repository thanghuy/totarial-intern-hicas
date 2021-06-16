import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { doLogin, setLoading } from "./authSlice";
import AuthAPI from "../../services/AuthAPI";

interface Auth{
    resp: Object;
}
// function* workerDoLogin(){
//     yield put(setLoading(true));
//     try {
//         const idUser = localStorage.getItem("@idUser");
//     } catch (error) {
//         console.log(error)
//     }
//     yield put(setLoading(false));
// }
function* workerCheckLogin(): Generator {
    yield put(setLoading(true));
    let result = {};
    try {
        const idUser = localStorage.getItem("@idUser");
        const resp: any = yield call<any>(AuthAPI.checkExpiredToken, idUser);
        result = {
            isLogin : true,
            infoUser : resp.data 
        }
        yield put(doLogin(result));
    } catch (error) {
        result = {
            isLogin : false,
            infoUser : {} 
        }
        yield put(doLogin(result));
        console.log(error)
    }
    yield put(setLoading(false));
}
export default function* authSaga(){
    yield all([
        takeLatest("CHECK_LOGIN_USER", workerCheckLogin)
    ])
}