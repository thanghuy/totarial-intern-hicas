import {all} from 'redux-saga/effects';
import AuthSaga from '../features/auth/authSaga';
import CartSaga from '../features/Cart/cartSaga';

export default function* RootSaga(){
    yield all([
        AuthSaga(),
        CartSaga()
    ])
}