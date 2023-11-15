import React from "react";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { DivOverLay, DivPopUp } from '../../../components/styled';
import { FormPopup, Container } from "./styled";

import * as actions from '../../../store/modules/funcionarioreducer/actions';

export function create(close){
    return (
        <>
            <DivOverLay>
                <CriarSetor close={close}></CriarSetor>
            </DivOverLay>
        </>
    );
}

export default function CriarSetor(props){

    const dispatch = useDispatch();
    const funcionarios = useSelector(state => {
        try{
            return state.funcionarioreducer.funcionarios.result
        }catch(err){
            return 
        }
    })

    function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.CRIAR_SETORES_REQUEST({nome: nome, responsavel: responsavel}));
        dispatch(actions.SETORES_REQUEST());
        props.close(false);
    }

    const [nome, setNome] = React.useState("");
    const [responsavel, setResponsavel] = React.useState(0);

    React.useEffect(() => {
        if(funcionarios.length > 0){
            setResponsavel(funcionarios[0].id)
        }
    }, [])

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
                                <select value={responsavel} placeholder="Responsável do setor" onLoad={(e) => setResponsavel(funcionarios[0].id)} onChange={(e) => setResponsavel(e.target.value)}>
                                    {funcionarios.map(funcionario => (
                                        <option key={funcionario.id} value={funcionario.id}>{funcionario.nome}</option>
                                    ))}
                                    {funcionarios.length === 0 ? <option>Não há funcionário</option>:null}
                                </select>
                        </div>
                        <button type="button" onClick={(e) => handleSubmit(e)}>Criar</button>
                    </FormPopup>
                </Container>
            </DivPopUp>
        </>
    );
}
