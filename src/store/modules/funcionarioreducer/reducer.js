import * as type from '../types';
import { toast } from 'react-toastify';

const initialState = {
  funcionarios: {result: []},
  setores: {result: []},
  comentarios: {result: []},
}
// caso precise de mais de um reducer, usar a função combineReducer

export default function recuder(state = initialState, action){
    switch (action.type) {
      case type.FUNCIONARIO_SUCCESS: {
        toast.success("Funcionario cadastrado com sucesso");
        return state;
      }
      case type.FUNCIONARIO_FALURE: {
        toast.error(action.payload.response.data.error);
        return state;
      }
      // -----------------
      case type.FUNCIONARIO_EDITAR_SUCCESS: {
        toast.success("Funcionario editado com sucesso");
        return state;
      }
      case type.FUNCIONARIO_EDITAR_FALURE: {
        toast.error(action.payload.response.data.error);
        return state;
      }
      // -----------------
      case type.FUNCIONARIO_BUSCAR_SUCCESS: {
        const newState = {...state}
        newState.funcionarios = action.payload
        return newState
      }
      case type.FUNCIONARIO_BUSCAR_FALURE: {
        toast.error(action.payload.response.data.error);
        return state;
      }
      case type.SETORES_SUCCESS: {
        toast.success("Setores buscados com sucesso");
        const newState = {...state}
        newState.setores = action.payload
        return newState
      }
      case type.SETORES_FALURE: {
        toast.error(action.payload.response.data.error);
        return state;
      }
      case type.CRIAR_SETORES_SUCCESS: {
        toast.success("Setor cadastrado com sucesso");
        return state;
      }
      case type.CRIAR_SETORES_FALURE: {
        toast.error(action.payload.response.data.error);
        return state;
      }
      case type.EDITAR_SETORES_SUCCESS: {
        toast.success("Setor editado com sucesso");
        return state;
      }
      case type.EDITAR_SETORES_FALURE: {
        toast.error(action.payload.response.data.error);
        return state;
      }
      case type.DELETAR_SETORES_SUCCESS: {
        toast.success("Setor deletado com sucesso");
        return state;
      }
      case type.DELETAR_SETORES_FALURE: {
        toast.error(action.payload.response.data.error);
        return state;
      }
      case type.COMENTARIO_BUSCAR_SUCCESS: {
        toast.success("Comentarios buscados com sucesso");
        const newState = {...state}
        newState.comentarios = action.payload;
        return newState
      }
      // aqui você pode definir suas ações e como o estado deve ser atualizado
      default:
        return state;;
    }
};

