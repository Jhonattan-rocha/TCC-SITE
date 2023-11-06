import React from "react";

import { Container, ListItem, SectionOne, SectionFour, SectionThree, SectionTwo } from "./styles";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/modules/chamadosreducer/actions';
import * as actionsChats from '../../store/modules/ChatsReducer/actions';

import { toast } from "react-toastify";
import { create as status} from '../VisualizarChamados/components/criarstatus';
import { create as categoria } from "../VisualizarChamados/components/criarcategoria";
import { create as subcategoria } from "../VisualizarChamados/components/criarsubcategoria";
import { edit as categoriaEdit } from "../VisualizarChamados/components/editarcategoria";
import { edit as statusEdit } from "../VisualizarChamados/components/editarstatus";
import { edit as subcategoriaEdit } from '../VisualizarChamados/components/editarsubcategoria';

export default function CadastroFilial(){

    const dispatch = useDispatch();

    const [openStatus, setOpenStatus] = React.useState(false);
    const [openCategoria, setOpenCategoria] = React.useState(false);
    const [openSubCategoria, setOpenSubCategoria] = React.useState(false);
    const [openStatusEdit, setOpenStatusEdit] = React.useState(false);
    const [openCategoriaEdit, setOpenCategoriaEdit] = React.useState(false);
    const [openSubCategoriaEdit, setOpenSubCategoriaEdit] = React.useState(false);
    const [causa, setCausa] = React.useState("");
    const [operador, setOperador] = React.useState("");
    const [descricao, setDescricao] = React.useState("");
    const categoriasList = useSelector(state => state.chamadosreducer.categorias.result);
    const subcategoriasList = useSelector(state => state.chamadosreducer.subCategorias.result)
    const statuslist = useSelector(state => state.chamadosreducer.status.result);
    const [Status, setStatus] = React.useState(statuslist.length > 0 ? statuslist[0]: {nome: ''});
    const [categorias, setCategorias] = React.useState(categoriasList.length > 0 ? categoriasList[0]: {nome: ''});
    const [subcategorias, setSubCategorias] = React.useState(subcategoriasList.length > 0 ? subcategoriasList[0]: {nome: ''});
    const [titles, setTitles] = React.useState({status: Status.nome, categoria: categorias.nome, subcategoria: subcategorias.nome});

    const iduser = useSelector(state => {
        return state.authreducer.user.id;
    });

    const onload = () => {
        dispatch(actions.STATUS_REQUEST());
        dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+eq+${iduser}`}));
        dispatch(actions.CATEGORIAS_REQUEST());
        dispatch(actions.SUBCATEGORIAS_REQUEST());
    }

    
    function handleDeleteCategoria(e){
        e.preventDefault();
        if(titles.categoria === categorias.nome){
            let copy = {...titles};
            copy.categoria = 'Selecione uma categoria';
            setTitles(copy);
        }
        dispatch(actions.DELETAR_CATEGORIAS_REQUEST({id: categorias.id}));
        dispatch(actions.CATEGORIAS_REQUEST());
    }

    function handleDeleteSubCategoria(e){
        e.preventDefault();
        if(titles.subcategoria === subcategorias.nome){
            let copy = {...titles};
            copy.subcategoria = 'Selecione uma subcategoria';
            setTitles(copy);
        }
        dispatch(actions.DELETAR_SUBCATEGORIAS_REQUEST({id: subcategorias.id}));
        dispatch(actions.SUBCATEGORIAS_REQUEST());
    }

    function handleDeleteStatus(e){
        e.preventDefault(); 
        if(titles.status === Status.nome){
            let copy = {...titles};
            copy.status = 'Selecione um status';
            setTitles(copy);
        }
        dispatch(actions.DELETAR_STATUS_REQUEST({id: Status.id}));
        dispatch(actions.STATUS_REQUEST());
    }

    React.useEffect(() => {
        onload()
    }, []);

    return (
        <Container>
                {openStatus ? status(setOpenStatus, {nome: ""}): null}
                {openCategoria ? categoria(setOpenCategoria): null}
                {openSubCategoria ? subcategoria(setOpenSubCategoria): null}
                {openCategoriaEdit ? categoriaEdit(setOpenCategoriaEdit, categorias): null}
                {openStatusEdit ? statusEdit(setOpenStatusEdit, Status): null}
                {openSubCategoriaEdit ? subcategoriaEdit(setOpenSubCategoriaEdit, subcategorias): null}
                <SectionOne>
                    <SectionTwo>
                        <div id="categoria">
                            <FaPlus size={25} cursor={'pointer'} className="plus-icon" onClick={() => setOpenCategoria(!openCategoria)}></FaPlus>
                            <label>Categorias</label>
                            <div id="opsCategoria">
                                <p>{titles.categoria}</p>
                            </div>
                        </div>
                        <div style={{width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                            {categoriasList.map(categoria => {
                                return (
                                    <ListItem key={categoria.id} onClick={() => {
                                        setCategorias(categoria);
                                        setTitles({...titles, categoria: categoria.nome});
                                    }}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                            <p>{categoria.nome}</p>
                                        </div>
                                        <FaEdit onClick={(e) => {
                                            setCategorias(categoria)
                                            setOpenCategoriaEdit(!openCategoriaEdit)
                                        }}></FaEdit>
                                        <FaTrash onClick={(e) => {
                                            setCategorias(categoria)
                                            handleDeleteCategoria(e)}
                                        }></FaTrash>
                                    </ListItem>
                                );
                            })}
                        </div>
                    </SectionTwo>
                    <SectionThree>
                        <div id="subcategoria">
                            <FaPlus size={25} cursor={'pointer'} className="plus-icon" onClick={() => setOpenSubCategoria(!openSubCategoria)}></FaPlus>
                            <label>Subcategorias</label>
                            <div id="opsSubategoria">
                                {titles.subcategoria}
                            </div>
                        </div>
                        <div style={{width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                            {subcategoriasList.map(subcategoria => {
                                return (
                                    <ListItem key={subcategoria.id} onClick={() => {
                                        setSubCategorias(subcategoria);
                                        setTitles({...titles, subcategoria: subcategoria.nome});
                                    }}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                            <p>{subcategoria.nome}</p>
                                        </div>
                                        <FaEdit onClick={(e) => {
                                            setSubCategorias(subcategoria);
                                            setOpenSubCategoriaEdit(!openCategoriaEdit);
                                        }}></FaEdit>
                                        <FaTrash onClick={(e) => {
                                            setSubCategorias(subcategoria);
                                            handleDeleteSubCategoria(e);
                                        }}></FaTrash>
                                    </ListItem>
                                );
                            })}
                        </div>
                    </SectionThree>
                    <SectionFour>
                        <div id="status">
                            <FaPlus size={25} cursor={'pointer'} className="plus-icon" onClick={() => setOpenStatus(!openStatus)}></FaPlus>
                            <label>Status</label>
                            <div id="opsStatus">
                                {titles.status}
                            </div>
                        </div>
                        <div style={{width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                            {statuslist.map(status => {
                                return (
                                    <ListItem onClick={() => {
                                        setStatus(status)
                                        setTitles({...titles, status: status.nome});
                                    }} key={status.id}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                            <p>{status.nome}</p>
                                        </div>
                                        <FaEdit onClick={(e) => {
                                            setStatus(status);
                                            setOpenStatusEdit(!openCategoriaEdit);
                                        }}></FaEdit>
                                        <FaTrash onClick={(e) => {
                                            setStatus(status);
                                            handleDeleteStatus(e);
                                        }}></FaTrash>
                                    </ListItem>
                                );
                            })}
                        </div>    
                    </SectionFour>
                </SectionOne>
        </Container>
    );
}

