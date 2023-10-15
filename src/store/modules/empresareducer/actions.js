import * as types from '../types'

export function EMPRESA_REQUEST(payload){
    return {
        type: types.EMPRESA_REQUEST,  
        payload: payload
    };
}

export function EMPRESA_SUCCESS(payload){
    return {
        type: types.EMPRESA_SUCCESS,  
        payload: payload
    };
}

export function EMPRESA_FALURE(payload){
    return {
        type: types.EMPRESA_FALURE,  
        payload: payload
    };
}
