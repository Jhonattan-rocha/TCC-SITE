import * as types from '../types'

export function click(){
    return {
        type: types.BOTAO_CLICADO,  
    };
}

export function requestClick(){
    return {
        type: types.BOTAO_CLICADO_REQUEST
    };
}

export function requestClicksuccess(){
    return {
        type: types.BOTAO_CLICADO_SUCCESS
    };
}

export function requestClickfalure(){
    return {
        type: types.BOTAO_CLICADO_FAILURE
    };
}
