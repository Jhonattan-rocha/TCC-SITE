import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* Empresa({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.post, "/empresa/", payload);
        console.log(response);
        yield put(actions.EMPRESA_SUCCESS({... response.data}));
    }catch(error){
        console.log(error)
        yield put(actions.EMPRESA_FALURE());
    }
}

export default all([
    takeLatest(types.EMPRESA_REQUEST, Empresa),
]);
