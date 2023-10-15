import * as type from '../types';
import { toast } from 'react-toastify';

const initialState = {
  chamados: {result: ""},
  status: {result: ""},
  procedure: {result: ""},
  getStatus: {result: ""},
  loading: false,
  subCategorias: {result: ""},
  categorias: {result: ""},
  arquivos: {result: ""},
}
// caso precise de mais de um reducer, usar a função combineReducer

export default function recuder(state = initialState, action){
    switch (action.type) {
      case type.CHAMADO_SUCCESS:{
        toast.success("Chamdo cadastrado com sucesso")
        return state;
      }
      case type.CHAMADO_FALURE: {
        toast.error("Erro ao cadastrar chamado")
        return state
      }  
      // -----------------
      case type.EDITAR_CHAMADO_SUCCESS:{ 
        toast.success("Chamdo editado com sucesso")
        return state;
      }
      case type.EDITAR_CHAMADO_FALURE: {
        toast.error("Erro ao editar chamado")
        return state
      } 
      // -----------------
      case type.CHAMADOS_SUCCESS:{
        toast.success("Chamados encontrados")
        const newState = {...state}
        newState.chamados = action.payload
        return newState;
      } 
      case type.CHAMADOS_FALURE: {
        toast.error("Erro ao pesquisar pelos chamados")
        return state
      }
      case type.DELETAR_CHAMADO_SUCCESS: {
        toast.success("Chamados deletado com sucesso")
        return state
      } 
      case type.DELETAR_CHAMADO_FALURE: {
        toast.error("Erro ao deletar o chamado")
        return state
      }
      //-------------------------------------------------
      case type.STAUTS_SUCCESS:{
        const newState = {...state};
        newState.status = action.payload;
        toast.success("Status buscados com sucesso")
        return newState;
      }
      case type.STATUS_FALURE: {
        toast.error("Erro ao buscar o status")
        return state
      }  
      // -------------------
      case type.CRIAR_STAUTS_SUCCESS:{
        toast.success("Status cadastrado com sucesso")
        return state;
      }
      case type.CRIAR_STATUS_FALURE: {
        toast.error("Erro ao cadastrar o status")
        return state
      }  
      case type.EDITAR_STAUTS_SUCCESS:{
        toast.success("Status editado com sucesso")
        return state;
      }
      case type.EDITAR_STATUS_FALURE: {
        toast.error("Erro ao editar o status")
        return state
      } 
      case type.DELETAR_STAUTS_SUCCESS:{
        toast.success("Status deletado com sucesso")
        return state;
      }
      case type.DELETAR_STATUS_FALURE: {
        toast.error("Para deletar um status é necessário deletar seus chamados")
        return state
      }   
      case type.GET_STATUS_SUCCESS: {
        const newState = {...state}
        newState.getStatus = action.payload;
        return newState;
      }
      case type.GET_STATUS_FALURE: {
        return state;
      }
      case type.EXEC_PROCEDURE_SUCCESS: {
        const newState = {...state}
        newState.procedure = action.payload;
        return newState;
      }
      case type.EXEC_PROCEDURE_FALURE: {
        return state;
      }
      case type.ISLOADING: {
        const newState = {...state}
        newState.loading = action.payload.load
        return newState;
      }
      case type.CATEGORIAS_SUCCESS:{
        const newState = {...state};
        newState.categorias = action.payload;
        return newState;
      }
      case type.CATEGORIAS_FALURE: {
        return state
      }
      case type.CRIAR_CATEGORIAS_SUCCESS:{
        return state;
      }
      case type.CRIAR_CATEGORIAS_FALURE: {
        return state
      }
      case type.EDITAR_CATEGORIAS_SUCCESS:{
        toast.success("Categoria editado com sucesso")
        return state;
      }
      case type.EDITAR_CATEGORIAS_FALURE: {
        toast.error("Erro ao editar o Categoria")
        return state
      } 
      case type.DELETAR_CATEGORIAS_SUCCESS:{
        return state;
      }
      case type.DELETAR_CATEGORIAS_FALURE: {
        return state
      } 
      //------
      case type.SUBCATEGORIAS_SUCCESS:{
        const newState = {...state};
        newState.subCategorias = action.payload;
        return newState;
      }
      case type.SUBCATEGORIAS_FALURE: {
        return state
      }
      case type.CRIAR_SUBCATEGORIAS_SUCCESS:{
        return state;
      }
      case type.CRIAR_SUBCATEGORIAS_FALURE: {
        return state
      }
      case type.EDITAR_SUBCATEGORIAS_SUCCESS:{
        toast.success("SubCategoria editado com sucesso")
        return state;
      }
      case type.EDITAR_SUBCATEGORIAS_FALURE: {
        toast.error("Erro ao editar o SubCategoria")
        return state
      } 
      case type.DELETAR_SUBCATEGORIAS_SUCCESS:{
        return state;
      }
      case type.DELETAR_SUBCATEGORIAS_FALURE: {
        return state
      } 
      case type.ARQUIVO_BUSCAR_SUCCESS: {
        toast.success("Anexos encontrados");
        const newState = { ...state }
        newState.arquivos = action.payload;
        return newState
      }
      case type.ARQUIVO_BUSCAR_FALURE: {
        toast.error("Erro ao buscar os anexos")
        return state
      }
      // aqui você pode definir suas ações e como o estado deve ser atualizado
      default:
        return state;
    }
};

