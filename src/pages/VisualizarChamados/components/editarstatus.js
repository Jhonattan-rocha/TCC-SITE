import React from "react";
import { Form } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { Container } from "./styled";
import { DivOverLay, DivPopUp } from '../../../components/styled';

import * as actions from '../../../store/modules/chamadosreducer/actions';

export function edit(close, status){
    return (
        <>
            <DivOverLay>
                <EditarStatus close={close} status={status}></EditarStatus>
            </DivOverLay>
        </>
    );
}

export default function EditarStatus(props){

    const dispatch = useDispatch();


    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.EDITAR_STATUS_REQUEST({id: props.status.id, nome: nome}));
        dispatch(actions.STATUS_REQUEST());
        props.close(false);
    }

    const [nome, setNome] = React.useState(props.status.nome);

    return (
        <>
            <DivPopUp draggable={false}>
                <Container>
                    <Form>
                        <FaWindowClose onClick={() => props.close(false)}></FaWindowClose>
                        <div id="linha1">
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                            </div>
                        </div>
                        <button type="button" onClick={(e) => handleSubmit(e)}>Editar</button>
                    </Form>
                </Container>
            </DivPopUp>
        </>
    );
}
