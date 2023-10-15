import React from "react";
import { Form } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { Container, DivOverLay, DivPopUp } from "./styled";
import * as actions from '../../../store/modules/chamadosreducer/actions';

export function create(close){
    return (
        <>
            <DivOverLay>
                <CriarProblema close={close}></CriarProblema>
            </DivOverLay>
        </>
    );
}

export default function CriarProblema(props){

    const dispatch = useDispatch();

    const prioridades = [{nome: 'Baixo', id: 1},{nome: 'Médio', id: 2},{nome: 'Intermediario', id: 3},{nome: 'Alto', id: 4},{nome: "Prioridade máxima", id: 5}]

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.CRIAR_PROBLEMAS_REQUEST({nome: nome, prioridade: pri}))
        props.close(false);
    }

    const [nome, setNome] = React.useState("");
    const [pri, setPri] = React.useState("");
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
                        <button type="button" onClick={(e) => handleSubmit(e)}>Criar</button>
                    </Form>
                </Container>
            </DivPopUp>
        </>
    );
}
