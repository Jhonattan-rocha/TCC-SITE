import * as type from '../types';

const initialState = {
    isLoggedIn: false
}
// caso precise de mais de um reducer, usar a função combineReducer

export default function recuder(state = initialState, action){
    switch (action.type) {
        case type.BOTAO_CLICADO_SUCCESS: {
            const newState = {...state}
            newState.isLoggedIn = !newState.isLoggedIn
            console.log("Sucesso")
            return newState;
        }
        case type.BOTAO_CLICADO_REQUEST: {
            console.log("estou fazendo a requisição")
            return state
        }
        case type.BOTAO_CLICADO_FAILURE: {
            console.log("a requisição falhou")
            return state
        }
      // aqui você pode definir suas ações e como o estado deve ser atualizado
      default:
        return state;
    }
};

