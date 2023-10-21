import React from "react";
import { SubHeaderContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import UploadPhoto from "./UploadPhoto";
import * as actions from "../store/modules/chamadosreducer/actions";

export default function SubHeader(props){
    const iduser = useSelector(state => state.authreducer.user.id);
    const funcionarios = useSelector(state => {
        try{
            return state.funcionarioreducer.funcionarios.result
        }catch(err){
            return []
        }
    });

    const [user, setUser] = React.useState(funcionarios.find(func => func.id === iduser));
    const [filter, setFilter] = React.useState('id+eq+'+user.id_foto);
    const dispatch = useDispatch();

    const [filtroChamados, setFiltroChamados] = React.useState("my")
    React.useEffect(() => {
        dispatch(actions.STATUS_REQUEST());
        if(filtroChamados === 'my'){
            dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+eq+${iduser}`}));
        }else if(filtroChamados === "other"){
            dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+ne+${iduser}`}));
        }else if(filtroChamados === "any"){
            dispatch(actions.CHAMADOSREQUEST());
        }
    }, [iduser, dispatch, filtroChamados]);

    React.useEffect(() => {
        setUser(funcionarios.find(func => func.id === iduser));
        setTimeout(() => {
            setFilter('id+eq+'+user.id_foto);
        }, 1);
    }, [funcionarios, iduser]);


    return (
        <SubHeaderContainer>
            <img src={require('../pages/assests/Logo.jpeg')} style={{widows: 120, height: 120}}></img>

            <select id="filtro" value={filtroChamados} onChange={(e) => setFiltroChamados(e.target.value)}>
                    <option value="my">Meus Chamados</option>
                    <option value="other">Chamado dos outros</option>
                    <option value="any">Qualquer um</option>
            </select>
            <UploadPhoto filter={filter} size={{container: 125, img: 200}} change={false}></UploadPhoto>
        </SubHeaderContainer>
    );
}
