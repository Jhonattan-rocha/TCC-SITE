import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* Funcionario({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers.Authorization = `Bearer ` + token;
        const response = yield call(axios.post, `/funcionario/`, payload);
        yield put(actions.FUNCIONARIOSUCCESS({...response.data}));
        yield put(actions.FUNCIONARIO_BUSCARREQUEST({filter: 'id_empresa+eq+'+payload.id_empresa}))
        console.log(response)
    }catch(error){
        console.log(error)
        yield put(actions.FUNCIONARIOFALURE(error));
    }
}

function* CriarFuncionarioComFoto({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type' :'multipart/form-data',
            'Authorization': `Bearer ${token}`
        };
        // arquivo
        const formData = new FormData();
        formData.append('originalname', payload.photo.originalname);
        formData.append('filename', payload.photo.filename);
        formData.append('id_dono', payload.photo.id_dono);
        formData.append('id_empresa_dona', payload.photo.id_empresa_dona);
        formData.append('mime_type', payload.photo.mime_type);
        formData.append('file', payload.photo.file);
        const responseFile = yield call(axios.post, "/arquivo/", formData);
        payload.id_foto = responseFile.data.id;

        axios.defaults.headers = {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        };

        const response = yield call(axios.post, `/funcionario/`, payload);
        yield put(actions.FUNCIONARIOSUCCESS({...response.data}));
        yield put(actions.FUNCIONARIO_BUSCARREQUEST({filter: 'id_empresa+eq+'+payload.id_empresa}));
    }catch(error){
        console.log(error)
        yield put(actions.FUNCIONARIOFALURE(error));
    }
}

function* EditarFuncionarioComFoto({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type' :'multipart/form-data',
            'Authorization': `Bearer ${token}`
        };
        // arquivo
        const formData = new FormData();
        formData.append('originalname', payload.photo.originalname);
        formData.append('filename', payload.photo.filename);
        formData.append('id_dono', payload.photo.id_dono);
        formData.append('id_empresa_dona', payload.photo.id_empresa_dona);
        formData.append('mime_type', payload.photo.mime_type);
        formData.append('file', payload.photo.file);
        const responseFile = yield call(axios.post, "/arquivo/", formData);
        payload.id_foto = responseFile.data.id;

        axios.defaults.headers = {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        };

        const response = yield call(axios.put, `/funcionario/${payload.id}`, payload);
        yield put(actions.FUNCIONARIO_EDITARSUCCESS({...response.data}));
        yield put(actions.FUNCIONARIO_BUSCARREQUEST({filter: 'id_empresa+eq+'+payload.id_empresa}));
    }catch(error){
        console.log(error)
        yield put(actions.FUNCIONARIO_EDITARFALURE(error));
    }
}

function* EditarFuncionario({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers.Authorization = `Bearer ` + token;
        const response = yield call(axios.put, `/funcionario/${payload.id}`, payload);
        yield put(actions.FUNCIONARIO_EDITARSUCCESS({...response.data}));
        yield put(actions.FUNCIONARIO_BUSCARREQUEST({filter: 'id_empresa+eq+'+payload.id_empresa}));
    }catch(error){
        yield put(actions.FUNCIONARIO_EDITARFALURE({erro: error}));
    };
};

function* BuscarFuncionario({payload = {}}){
    try{
        if(!payload.filter){
            payload.filter = ""
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers.Authorization = `Bearer ` + token;
        const response = yield call(axios.get, `/funcionarios/?filter=${encodeURIComponent(payload.filter)}`, payload);
        yield put(actions.FUNCIONARIO_BUSCARSUCCESS({...response.data}));
    }catch(error){
        yield put(actions.FUNCIONARIO_BUSCARFALURE(error));
    }
}

function* Setores({payload = {}}){
    try{
        if(!payload.filter){
            payload.filter = ""
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.get, `/setores/?filter=${encodeURIComponent(payload.filter)}`, payload);
        yield put(actions.SETORES_SUCCESS({...response.data}));
    }catch(error){
        console.log(error);
        yield  put(actions.SETORES_FALURE(error));
    }
}

function* CriarSetor({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.post, `/setor/`, payload);
        yield put(actions.CRIAR_SETORES_SUCCESS({...response.data}));
        yield put(actions.SETORES_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.CRIAR_SETORES_FALURE(error));
    }
}

function* EditarSetor({payload}){
    try{
        if(!payload.id){
            return 
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.put, `/setor/${payload.id}`, payload);
        yield put(actions.EDITAR_SETORES_SUCCESS({...response.data}));
        yield put(actions.SETORES_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.EDITAR_SETORES_FALURE(error));
    }
}

function* DeletarSetor({payload}){
    try{
        if(!payload.id){
            return 
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.delete, `/setor/${payload.id}`, payload);
        yield put(actions.DELETAR_SETORES_SUCCESS({...response.data}));
        yield put(actions.SETORES_REQUEST());
    }catch(error){
        console.log(error);
        yield put(actions.DELETAR_SETORES_FALURE(error));
    }
}

function* Comentarios({payload = {}}){
    try{
        if(!payload.filter){
            payload.filter = ""
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.get, `/comentarios/?filter=${encodeURIComponent(payload.filter)}`, payload);
        yield put(actions.COMENTARIO_BUSCAR_SUCCESS({...response.data}));
    }catch(error){
        console.log(error);
        yield put(actions.COMENTARIO_BUSCAR_FALURE(error));
    }
}

function* CriarComentario({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.post, `/comentario/`, payload);
        yield put(actions.COMENTARIO_CRIAR_SUCCESS({...response.data}));
        yield put(actions.COMENTARIO_BUSCAR_REQUEST({filter: 'id_chamado+eq+'+payload.id_chamado}))
    }catch(error){
        console.log(error);
        yield put(actions.COMENTARIO_CRIAR_FALURE(error));
    }
}

function* EditarComentario({payload}){
    try{
        if(!payload.id){
            return 
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };
        const response = yield call(axios.put, `/comentario/${payload.id}`, payload);
        yield put(actions.COMENTARIO_EDITAR_SUCCESS({...response.data}));
        yield put(actions.COMENTARIO_BUSCAR_REQUEST({filter: 'id_chamado+eq+'+payload.id_chamado}));
    }catch(error){
        console.log(error);
        yield put(actions.COMENTARIO_EDITAR_FALURE(error));
    }
}

function* DeletarComentario({payload}){
    try{
        if(!payload.id){
            return 
        }
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.delete, `/comentario/${payload.id}`, payload);
        yield put(actions.COMENTARIO_DELETAR_SUCCESS({...response.data}));
        yield put(actions.COMENTARIO_BUSCAR_REQUEST({filter: 'id_chamado+eq+'+payload.id_chamado}))
    }catch(error){
        console.log(error);
        yield put(actions.COMENTARIO_DELETAR_FALURE(error));
    }
}



export default all([
    takeLatest(types.FUNCIONARIO_REQUEST, Funcionario),
    takeLatest(types.FUNCIONARIO_EDITAR_REQUEST, EditarFuncionario),
    takeLatest(types.FUNCIONARIO_BUSCAR_REQUEST, BuscarFuncionario),
    takeLatest(types.SETORES_REQUEST, Setores),
    takeLatest(types.CRIAR_SETORES_REQUEST, CriarSetor),
    takeLatest(types.EDITAR_SETORES_REQUEST, EditarSetor),
    takeLatest(types.DELETAR_SETORES_REQUEST, DeletarSetor),
    takeLatest(types.COMENTARIO_BUSCAR_REQUEST, Comentarios),
    takeLatest(types.COMENTARIO_CRIAR_REQUEST, CriarComentario),
    takeLatest(types.COMENTARIO_EDITAR_REQUEST, EditarComentario),
    takeLatest(types.COMENTARIO_DELETAR_REQUEST, DeletarComentario),
    takeLatest(types.FUNCIONARIO_CRIAR_COM_FOTO, CriarFuncionarioComFoto),
    takeLatest(types.FUNCIONARIO_EDITAR_COM_FOTO, EditarFuncionarioComFoto),
]);
