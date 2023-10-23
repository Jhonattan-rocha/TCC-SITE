import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import axios from 'axios';
import { baseURL, SocketPort } from '../../../config/appConfig';


function* GET_CHAT({payload}) {
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers.Authorization = "Bearer " + token
        const response = yield call(axios.get, `http://${baseURL}:${SocketPort}/chat/${payload.id}`, payload);
        yield put(actions.GET_CHAT_SUCCESS({ idChat: payload.id, mensagens: [...response.data] }));
    }catch(err) {
        console.log(err)
        yield put(actions.GET_CHAT_SUCCESS({ idChat: payload.id, mensagens: [] }));
    }
}

function* Chats({payload = {}}){
    try{
        if(!payload.filter){
            payload.filter = ""
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.get, `http://${baseURL}:${SocketPort}/chat/`, payload);
        yield put(actions.CHATS_BUSCAR_SUCCESS({...response.data}));
    }catch(error){
        console.log(error);
        yield  put(actions.CHATS_BUSCAR_FALURE({error}));
    }
}

function* CriarChats({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.post, `http://${baseURL}:${SocketPort}/chat/`, payload);

        if(payload.id_foto){
            yield put(actions.CHATS_EDITAR_COM_FOTO_REQUEST({...payload}))
        }
        yield put(actions.CHATS_CRIAR_SUCCESS({...response.data}));
        yield put(actions.CHATS_BUSCAR_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.CHATS_CRIAR_FALURE({error}));
    }
}

function* EditarChatsComFoto({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type' :'multipart/form-data',
            'Authorization': `Bearer ${token}`
          };
        const formData = new FormData();
        formData.append('original_name', payload.img.name);
        formData.append('type', payload.img.type);
        formData.append('idchat', payload.id);
        formData.append('tag', 'profile_photo');
        formData.append('file', payload.img);
        const responseFile = yield call(axios.patch, `http://${baseURL}:${SocketPort}/chat_foto/${payload.id}`, formData);
        payload.id_foto = responseFile.data.arquivo.id

        axios.defaults.headers = {
            'Content-Type' :'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.patch, `http://${baseURL}:${SocketPort}/chat/${payload.id}`, payload);
        yield put(actions.CHATS_EDITAR_SUCCESS({...response.data}));
        yield put(actions.CHATS_BUSCAR_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.CHATS_EDITAR_FALURE({error}));
    }
}


function* EditarChats({payload}){
    try{
        if(!payload.id){
            return 
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.patch, `http://${baseURL}:${SocketPort}/chat/${payload.id}`, payload);
        yield put(actions.CHATS_EDITAR_SUCCESS({...response.data}));
        yield put(actions.CHATS_BUSCAR_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.CHATS_EDITAR_FALURE({error}));
    }
}

function* DeletarChats({payload}){
    try{
        if(!payload.id){
            return 
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.delete, `http://${baseURL}:${SocketPort}/chat/${payload.id}`, payload);
        yield put(actions.CHATS_DELETAR_SUCCESS({...response.data}));
        yield put(actions.CHATS_BUSCAR_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.CHATS_DELETAR_FALURE({error}));
    }
}

function* DeletarArquivo({payload}){
    try{
        if(!payload.id){
            return 
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.delete, `http://${baseURL}:${SocketPort}/arquivo/${payload.id}`, payload);
        yield put(actions.CHATS_ARQUIVO_DELETAR_SUCCESS({...response.data}));
        yield put(actions.CHATS_BUSCAR_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.CHATS_ARQUIVO_DELETAR_FALURE({error}));
    }
}


export default all([
    takeLatest(types.GET_CHAT, GET_CHAT),
    takeLatest(types.CHATS_BUSCAR_REQUEST, Chats),
    takeLatest(types.CHATS_CRIAR_REQUEST, CriarChats),
    takeLatest(types.CHATS_EDITAR_REQUEST, EditarChats),
    takeLatest(types.CHATS_DELETAR_REQUEST, DeletarChats),
    takeLatest(types.CHATS_EDITAR_COM_FOTO_REQUEST, EditarChatsComFoto),
    takeLatest(types.CHATS_ARQUIVO_DELETAR_REQUEST, DeletarArquivo)
]);
    