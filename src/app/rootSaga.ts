import {all, takeLatest} from 'redux-saga/effects';

function* workerTest(){
    console.log("Susscess");
}

export default function* RootSaga(){
    yield all([
        takeLatest("ACTION_TEST", workerTest)
    ])
}