import React from "react";
import './styles.css';
import { Divhome, DivCharts } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/modules/chamadosreducer/actions';
import * as actionsFuncionario from '../../store/modules/funcionarioreducer/actions';
import * as actionsChats from '../../store/modules/ChatsReducer/actions';

import Pie from "./charts/pie";
import Line from './charts/line';
import Example from "./charts/syncronized";

export default function Home(){
    const dispatch = useDispatch()
    const iduser = useSelector(state => state.authreducer.user.id)
    const qtdchamados = useSelector(state => state.chamadosreducer.procedure.result) || [];

    let load = qtdchamados.length > 0 ? true : false;

    const onload = () => {
        dispatch(actions.STATUS_REQUEST());
        dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+eq+${iduser}`}));
        dispatch(actions.CATEGORIAS_REQUEST());
        dispatch(actions.SUBCATEGORIAS_REQUEST());
        dispatch(actions.EXEC_PROCEDURE_REQUEST({query: 'call CountChamados();'}));
        dispatch(actionsFuncionario.SETORES_REQUEST());
        dispatch(actionsFuncionario.FUNCIONARIO_BUSCARREQUEST());
        dispatch(actionsChats.CHATS_BUSCAR_REQUEST());
    }
    React.useEffect(() => {
        onload()
    }, [])
    return (
        <>
            <Divhome>
                <h1>Tela de home</h1>
                {load ? 
                <DivCharts>
                    <div id="coluna1">
                    <Pie data={qtdchamados}></Pie>
                    <Line data={qtdchamados}></Line>
                    </div>
                    <Example  data={qtdchamados}></Example>
                </DivCharts>: null}
            </Divhome>
        </>
    );
}
