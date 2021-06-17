import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { doLogin, setLoading } from "./authSlice";
import {updateItemCart} from '../Cart/cartSlice';
import AuthAPI from "../../services/AuthAPI";
import CartAPI from "../../services/CartAPI";

function* workerCheckLogin(): Generator {
    yield put(setLoading(true));
    let result = {};
    const idUser = localStorage.getItem("@idUser");
    if(idUser){
        try {
        
            const resp: any = yield call<any>(AuthAPI.checkExpiredToken, idUser);
            const respCart: any = yield call<any>(CartAPI.getCart, idUser);
            result = {
                isLogin : true,
                infoUser : resp.data 
            }
            yield put(doLogin(result));
            yield put(updateItemCart(
            {
                amount : respCart.amount,
                total: respCart.total,
                subTotal: respCart.subTotal,
                tax: respCart.tax
            }
            ));
        } catch (error) {
            result = {
                isLogin : false,
                infoUser : {} 
            }
            yield put(doLogin(result));
            console.log(error)
        }
    }
    else{
        result = {
            isLogin : false,
            infoUser : {} 
        }
        yield put(doLogin(result));
    }
    yield put(setLoading(false));
}
export default function* authSaga(){
    yield all([
        takeLatest("CHECK_LOGIN_USER", workerCheckLogin)
    ])
}