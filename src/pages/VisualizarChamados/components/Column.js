import React from "react";

import '../style.css'
import { ButtonChamado, DropAreaStyled, DivChamadosList } from "../styles";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../../store/modules/chamadosreducer/actions';
import Chamado from '../components/chamado';


export default function ColumnComponent(){
    // dispara eventos do redux, usa no reducer para fazer alterações no estado de acordo coma a ação
    // se a função passada ter dependentes e eu quero que ela seja executada sempre que os dependentes mudarem, passar a variável no []

    const dispatch = useDispatch();

    const [listaChamados, setListaChamados] = React.useState([]);
    const statuslist = useSelector(state => state.chamadosreducer.status.result);
    const chamados = useSelector(state => state.chamadosreducer.chamados.result);

    const [listaChamadosOpen, setlistaChamadosOpen] = React.useState({});

    React.useEffect(() => {
        setListaChamados(chamados)   
    }, [chamados])

    React.useEffect(() => {
        statuslist.forEach(status => {
            listaChamadosOpen[status.id] = true
        })
    }, [statuslist])

    const handleDrop = (event, status) => {
        event.preventDefault();
        let dados = event.dataTransfer.getData("application/json");
        dados = JSON.parse(dados)
        
        dados.id_status = status
  
        dispatch(actions.EDITAR_CHAMADOREQUEST(dados))
        // Manipule os dados que foram soltos aqui
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        // O cursor do mouse mudará para indicar que a área é uma área válida de drop
    };
    
    
    return (
        <>
            <div className="row">

            {statuslist.map(status => {
                    const chamadosqtd = listaChamados.filter(
                        (chamado) => chamado.id_status === status.id
                    ).length;
                    return (
                        <DropAreaStyled key={status.id * (chamadosqtd + 1)} handleDrop={(e) => handleDrop(e, status.id)} handleDragOver={handleDragOver}>
                            <FaTrash onClick={ (e) => dispatch(actions.DELETAR_STATUS_REQUEST({id: status.id}))}></FaTrash>
                            <div className="col">
                                <ButtonChamado onClick={(e) => {
                                    e.preventDefault()
                                    let copy = {...listaChamadosOpen}
                                    copy[status.id] = !copy[status.id]
                                    setlistaChamadosOpen(copy)
                                }}>
                                <h3 className="tilt">
                                    {status.nome}:
                                </h3>
                                <p className="parag">
                                    Total de chamados
                                </p>
                                <p className="parag">
                                    {chamadosqtd}
                                </p>
                                </ButtonChamado>
                                {listaChamadosOpen[status.id] ? (
                                    <DivChamadosList>
                                        {listaChamados.map(chamado => {
                                            if(chamado.id_status === status.id){
                                                return (
                                                    <Chamado chamado={chamado} status={status.nome} key={chamado.id}></Chamado>
                                                )
                                            }
                                        })} 
                                    </DivChamadosList>
                                ): null}
                            </div>                            
                        </DropAreaStyled>
                    )
                }
            )}
            </div>
        </>
    );
}

 