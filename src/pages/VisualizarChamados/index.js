import React from "react";

import './style.css'
import { Forms, Legend, Container,} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/modules/chamadosreducer/actions';
import CalendarComponent from "./components/Calendario";
import ColumnComponent from './components/Column';
import SubHeader from "../../components/SubHeader";

export default function VisualizarChamados(){
    // dispara eventos do redux, usa no reducer para fazer alterações no estado de acordo coma a ação
    // se a função passada ter dependentes e eu quero que ela seja executada sempre que os dependentes mudarem, passar a variável no []

    const dispatch = useDispatch();

    const [filtroChamados, setFiltroChamados] = React.useState("my")
    const iduser = useSelector(state => state.authreducer.user.id);
    const [view, setView] = React.useState("column");

    React.useEffect(() => {
        dispatch(actions.STATUS_REQUEST());
        if(filtroChamados === 'my'){
            dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+eq+${iduser}`}));
        }else if(filtroChamados === "other"){
            dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+ne+${iduser}`}));
        }else if(filtroChamados === "any"){
            dispatch(actions.CHAMADOSREQUEST());
        }
    }, [iduser, dispatch, filtroChamados])

    return (
            <Container>
                    <SubHeader></SubHeader>
                    <select id="filtro" value={filtroChamados} onChange={(e) => setFiltroChamados(e.target.value)}>
                            <option value="my">Meus Chamados</option>
                            <option value="other">Chamado dos outros</option>
                            <option value="any">Qualquer um</option>
                    </select>
                    <Forms>
                        <CalendarComponent></CalendarComponent>
                    </Forms>
            </Container>
    );
}

 