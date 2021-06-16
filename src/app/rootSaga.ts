import {all} from 'redux-saga/effects';
import AuthSaga from '../features/auth/authSaga';

export default function* RootSaga(){
    yield all([
        AuthSaga()
    ])
}