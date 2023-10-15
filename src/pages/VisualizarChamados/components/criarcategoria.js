import React from "react";
import { Form } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styled";
import * as actions from '../../../store/modules/chamadosreducer/actions';
import { DivOverLay, DivPopUp } from '../../../components/styled';

export function create(close){
    return (
        <>
            <DivOverLay>
                <CriarCategoria close={close}></CriarCategoria>
            </DivOverLay>
        </>
    );
}

export default function CriarCategoria(props){

    const dispatch = useDispatch();

    const prioridades = [{nome: 'Baixo', id: 1},{nome: 'Médio', id: 2},{nome: 'Intermediario', id: 3},{nome: 'Alto', id: 4},{nome: "Prioridade máxima", id: 5}]
    const iduser = useSelector(state => state.authreducer.user.id);

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.CRIAR_CATEGORIAS_REQUEST({nome: nome, criador: iduser, prioridade: pri}))
        props.close(false);
    }

    const [nome, setNome] = React.useState("");
    const [pri, setPri] = React.useState(prioridades[0].id);
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
