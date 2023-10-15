import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const request = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 2000);
    });
}

function* exemploRequest() {
    try{
        yield call(request);
        yield put(actions.requestClicksuccess());
    }catch {
        yield put(actions.requestClickfalure());
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exemploRequest),
]);
