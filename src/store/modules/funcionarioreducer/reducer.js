import * as type from '../types';
import { toast } from 'react-toastify';

const initialState = {
  funcionarios: {result: []},
  setores: {result: []},
  comentarios: {result: []},
  cargos: {result: []},
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
      case type.CARGOS_SUCCESS: {
        toast.success("Cargos buscados com sucesso")
        const newState = {...state};
        newState.cargos = action.payload;
        return newState;
      }
      case type.CARGOS_FALURE: {
        toast.error("Erro ao buscar os cargos");
        return state;
      }
      case type.CRIAR_CARGO_SUCCESS: {
        toast.success("Cargo cadastrado com sucesso");
        return state;
      }
      case type.CRIAR_CARGO_FALURE: {
        toast.error("Erro ao cadastrar o cargo");
        return state;
      }
      case type.EDITAR_CARGO_SUCCESS: {
        toast.success("Cargo editado com sucesso");
        return state;
      }
      case type.EDITAR_CARGO_FALURE: {
        toast.error("Erro ao editar o cargo");
        return state;
      }
      case type.DELETAR_CARGO_SUCCESS: {
        toast.success("Cargo deletado com sucesso");
        return state;
      }
      case type.DELETAR_CARGO_FALURE: {
        toast.error("Erro ao deletar o cargo");
        return state;
      }
      // aqui você pode definir suas ações e como o estado deve ser atualizado
      default:
        return state;;
    }
};

