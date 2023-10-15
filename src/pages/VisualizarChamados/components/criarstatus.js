import React from "react";
import { Form } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { Container } from "./styled";
import * as actions from '../../../store/modules/chamadosreducer/actions';
import { DivOverLay, DivPopUp } from '../../../components/styled';

export function create(close, status){
    return (
        <>
            <DivOverLay>
                <CreateStatus close={close} status={status}></CreateStatus>
            </DivOverLay>
        </>
    );
}

export default function CreateStatus(props){

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.CRIAR_STATUS_REQUEST({nome: nome}))
        props.close(false);
    }

    if(!props.status){
        props.status = {nome: ""}
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
                        <button type="button" onClick={(e) => handleSubmit(e)}>Criar</button>
                    </Form>
                </Container>
            </DivPopUp>
        </>
    );
}
