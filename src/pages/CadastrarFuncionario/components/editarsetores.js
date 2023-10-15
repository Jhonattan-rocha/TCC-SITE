import React from "react";
import { FormPopup } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Container, DivOverLay, DivPopUp } from "./styled";
import * as actions from '../../../store/modules/funcionarioreducer/actions';

export function edit(close, setor){
    return (
        <>
            <DivOverLay>
                <EditarSetor setor={setor} close={close}></EditarSetor>
            </DivOverLay>
        </>
    );
}

export default function EditarSetor(props){

    const dispatch = useDispatch();
    const funcionarios = useSelector(state => state.funcionarioreducer.funcionarios.result)

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.EDITAR_SETORES_REQUEST({id: props.setor.id, nome: nome, responsavel: responsavel}))
        dispatch(actions.SETORES_REQUEST());
        props.close(false);
    }

    const [nome, setNome] = React.useState(props.setor.nome);
    const [responsavel, setResponsavel] = React.useState(props.setor.responsavel);

    return (
        <>
            <DivPopUp draggable={false}>
                <Container>
                    <FormPopup>
                        <FaWindowClose onClick={() => props.close(false)}></FaWindowClose>
                        <div id="linha1">
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                            </div>
                        </div>
                        <div>
                            <label>Responsável</label>
                                <select value={responsavel} placeholder="Responsável do setor" onChange={(e) => setResponsavel(e.target.value)}>
                                    {funcionarios.map(funcionario => (
                                        <option key={funcionario.id} value={funcionario.id}>{funcionario.nome}</option>
                                    ))}
                                </select>
                        </div>
                        <button type="button" onClick={(e) => handleSubmit(e)}>Editar</button>
                    </FormPopup>
                </Container>
            </DivPopUp>
        </>
    );
}
