import React from "react";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { DivOverLay, DivPopUp } from '../../../components/styled';
import { FormPopup, Container } from "./styled";
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
    const funcionarios = useSelector(state => state.funcionarioreducer.funcionarios.result);

    console.log(funcionarios, props.setor);
    const resp = funcionarios.find(fun => {
        console.log(fun.setor_responsavel, props.setor.id);
        return fun.setor_responsavel === props.setor.id
    });


    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.EDITAR_SETORES_REQUEST({id: props.setor.id, nome: nome, responsavel: responsavel}));
        dispatch(actions.FUNCIONARIO_EDITARREQUEST({id: responsavel, setor_responsavel: props.setor.id}));
        dispatch(actions.SETORES_REQUEST());
        props.close(false);
    }

    const [nome, setNome] = React.useState(props.setor.nome);
    const [responsavel, setResponsavel] = React.useState(resp ? resp.id: funcionarios[0].id);

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
                                    {funcionarios.length === 0 ? <option>Não há funcionário</option>:null}
                                </select>
                        </div>
                        <button type="button" onClick={(e) => handleSubmit(e)}>Editar</button>
                    </FormPopup>
                </Container>
            </DivPopUp>
        </>
    );
}
