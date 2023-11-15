import React from "react";
import { Form } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { Container } from "./styled";
import { DivOverLay, DivPopUp } from '../../../components/styled';
import * as actions from '../../../store/modules/chamadosreducer/actions';
 
export function edit(close, problema){
    console.log(problema)
    return (
        <>
            <DivOverLay>
                <EditarProblema close={close} problema={problema}></EditarProblema>
            </DivOverLay>
        </>
    );
}

export default function EditarProblema(props){

    const dispatch = useDispatch();

    const prioridades = [{nome: 'Baixo', id: 1},{nome: 'Médio', id: 2},{nome: 'Intermediario', id: 3},{nome: 'Alto', id: 4},{nome: "Prioridade máxima", id: 5}]

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.EDITAR_PROBLEMAS_REQUEST({id: props.problema.id, nome: nome, prioridade: pri}));
        dispatch(actions.PROBLEMAS_REQUEST());
        props.close(false);
    }

    const [nome, setNome] = React.useState(props.problema.nome);
    const [pri, setPri] = React.useState(props.problema.prioridade);

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
                        <div>
                            <label>Prioridade</label>
                                <select value={pri} placeholder="Esolha o estágio" onChange={(e) => setPri(e.target.value)}>
                                    {prioridades.map(prioridade => (
                                        <option key={prioridade.id} value={prioridade.id}>{prioridade.nome}</option>
                                    ))}
                                </select>
                            </div>
                        <button type="button" onClick={(e) => handleSubmit(e)}>Editar</button>
                    </Form>
                </Container>
            </DivPopUp>
        </>
    );
}
