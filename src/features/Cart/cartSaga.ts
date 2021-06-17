import { call, put, all, takeLatest } from "@redux-saga/core/effects";
import { updateItemCart, updateDataCart} from "./cartSlice";
import CartAPI from "../../services/CartAPI";

function* workerUpdateCart(): Generator{
    try {
        const idUser = localStorage.getItem("@idUser");
        const resp: any = yield call<any>(CartAPI.getCart, idUser);
        if(resp.status){
            yield put(updateItemCart(
                {
                    amount : resp.amount,
                    total: resp.total,
                    subTotal: resp.subTotal,
                    tax: resp.tax
                }
            ));
            yield put(updateDataCart(resp.data));
        }
    } catch (error) {
        console.log(error)
    }
}
export default function* CartSaga(){
    yield all([
        takeLatest("UPDATE_CART_SAGA",workerUpdateCart)
    ])
}