import React from "react";
import { Form } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { Container } from "./styled";
import { DivOverLay, DivPopUp } from '../../../components/styled';

import * as actions from '../../../store/modules/funcionarioreducer/actions';

export function edit(close, cargo){
    return (
        <>
            <DivOverLay>
                <EditarCargo close={close} cargo={cargo}></EditarCargo>
            </DivOverLay>
        </>
    );
}

export default function EditarCargo(props){

    const dispatch = useDispatch();


    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.EDITAR_CARGO_REQUEST({id: props.cargo.id, nome: nome}));
        dispatch(actions.CARGOS_REQUEST());
        props.close(false);
    }

    const [nome, setNome] = React.useState(props.cargo.nome);
    const [nivel, setNivel] = React.useState(props.cargo.nivel);

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
                        <button type="button" onClick={(e) => handleSubmit(e)}>Editar</button>
                    </Form>
                </Container>
            </DivPopUp>
        </>
    );
}
