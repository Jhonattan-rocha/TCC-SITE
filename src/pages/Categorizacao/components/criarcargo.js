import React from "react";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Container, Form } from "./styled";
import * as actions from '../../../store/modules/funcionarioreducer/actions';
import { DivOverLay, DivPopUp } from '../../../components/styled';

export function create(close, cargo){
    return (
        <>
            <DivOverLay>
                <CreateCargo close={close} cargo={cargo}></CreateCargo>
            </DivOverLay>
        </>
    );
}

export default function CreateCargo(props){

    const dispatch = useDispatch()
    const user = useSelector(state => state.authreducer);
    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.CRIAR_CARGO_REQUEST({nome: nome, criador: user.user.id, nivel: nivel}))
        props.close(false);
    }

    const [nome, setNome] = React.useState();
    const [nivel, setNivel] = React.useState();

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
                        <div id="linha2">
                            <div>
                                <label htmlFor="nome">Nível</label>
                                <input id="nome" type="number" value={nivel} onChange={(e) => setNivel(e.target.value)}></input>
                            </div>
                        </div>
                        <button type="button" onClick={(e) => handleSubmit(e)}>Criar</button>
                    </Form>
                </Container>
            </DivPopUp>
        </>
    );
}
