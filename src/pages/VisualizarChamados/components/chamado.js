import React from "react";
import {DivChamado, DraggableItemStyled } from './styled';
import { FaEdit, FaTrash } from "react-icons/fa";
import * as actions from '../../../store/modules/chamadosreducer/actions';
import { useDispatch } from "react-redux";
import { edit } from './editarchamado';

export default function Chamado(props){

    const dispatch = useDispatch()
    const [editar, setEditar] = React.useState(false);

    const handleDragStart = (event, chamado) => {
        event.dataTransfer.setData('application/json', JSON.stringify(chamado));
        // O conteúdo do elemento que está sendo arrastado é definido como texto
    };

    function handleClick(e, id){
        dispatch(actions.DELETAR_CHAMADO_REQUEST({id: id}))
    }

    return (
        <div style={{width: '100%'}}>
            {editar ? edit(setEditar, props.chamado) : null}        
            <DraggableItemStyled handleDragStart={(e) => handleDragStart(e, props.chamado)}>
                <DivChamado>
                    <div id="title">
                        <label>{props.status}</label>
                    </div>
                    <div className="contexto" >
                        <label>{props.chamado.causa}</label>  
                        <label>{props.chamado.operador}</label>
                    </div>
                    <div className="icons">
                        <FaEdit onClick={() => setEditar(!editar)}></FaEdit>
                        <FaTrash onClick={ (e) => handleClick(e, props.chamado.id)}></FaTrash>
                    </div>
                </DivChamado>
            </DraggableItemStyled>     
        </div>
    );
}
