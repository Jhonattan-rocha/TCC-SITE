import {all} from 'redux-saga/effects';

import LoginSagas from './authReducer/sagas';
import ChamadosSaga from './chamadosreducer/sagas';
import FuncionarioSaga from './funcionarioreducer/sagas';
import empresasaga from './empresareducer/sagas';
import chatsagas from './ChatsReducer/sagas';

export default function* rootSaga(){
    return yield all([LoginSagas, ChamadosSaga, FuncionarioSaga, empresasaga, chatsagas]);
}
