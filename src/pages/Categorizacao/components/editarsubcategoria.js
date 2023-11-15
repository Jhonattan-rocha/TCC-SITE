import React from "react";
import { Form } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styled";
import { DivOverLay, DivPopUp } from '../../../components/styled';
import * as actions from '../../../store/modules/chamadosreducer/actions';

export function edit(close, subcategoria){
    return (
        <>
            <DivOverLay>
                <EditarSubCategoria close={close} subcategoria={subcategoria}></EditarSubCategoria>
            </DivOverLay>
        </>
    );
}

export default function EditarSubCategoria(props){

    const dispatch = useDispatch();

    const categoriasList = useSelector(state => state.chamadosreducer.categorias.result) || []
    const prioridades = [{nome: 'Baixo', id: 1},{nome: 'Médio', id: 2},{nome: 'Intermediario', id: 3},{nome: 'Alto', id: 4},{nome: "Prioridade máxima", id: 5}]
    const iduser = useSelector(state => state.authreducer.user.id);


    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.EDITAR_SUBCATEGORIAS_REQUEST({id: props.subcategoria.id, nome: nome, id_categoria: categoria, criador: iduser, prioridade: pri}))
        dispatch(actions.SUBCATEGORIAS_REQUEST());
        props.close(false);
    }

    const [nome, setNome] = React.useState(props.subcategoria.nome);
    const [pri, setPri] = React.useState(props.subcategoria.prioridade);
    const [categoria, setCategoria] = React.useState(props.subcategoria.categoria);

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
                        <div id="categoria">
                            <label>Categoria</label>
                            <select value={categoria} placeholder="Esolha a Categoria" onChange={(e) => setCategoria(e.target.value)}>
                                {categoriasList.map(categoria => (
                                    <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
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
