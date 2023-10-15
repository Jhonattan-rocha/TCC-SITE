import * as type from '../types';
import { toast } from 'react-toastify';

const initialState = {
    isLoggedIn: false
}
// caso precise de mais de um reducer, usar a função combineReducer

export default function recuder(state = initialState, action){
    switch (action.type) {
        case type.EMPRESA_SUCCESS: {
            toast.success('Empresa cadastrada com sucesso')
            return state;
        }
        case type.EMPRESA_FALURE: {
            toast.error("Erro ao cadastrar a empresa")
            return state
        }
      // aqui você pode definir suas ações e como o estado deve ser atualizado
      default:
        return state;
    }
};

