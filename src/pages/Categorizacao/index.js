import React, {useState, useEffect} from "react";

import { Container, ListItem, SectionOne, SectionFour, SectionThree, SectionTwo, SectionFive, SectionSix, DivListItem } from "./styles";
import { FaPlus, FaEdit, FaTrash, FaRegCheckCircle  } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/modules/chamadosreducer/actions';
import * as actionsFuncionario from '../../store/modules/funcionarioreducer/actions';

import { toast } from "react-toastify";
import { create as criarstatus} from './components/criarstatus';
import { create as criarcategoria } from "./components/criarcategoria";
import { create as criarsubcategoria } from "./components/criarsubcategoria";
import { create as criarsetores } from "./components/criarsetores";
import { create as criarcargo } from "./components/criarcargo";
import { edit as editarcargo } from "./components/editarcargo";
import { edit as editarsetores } from "./components/editarsetores";
import { edit as editarcategoria } from "./components/editarcategoria";
import { edit as editarstatus } from "./components/editarstatus";
import { edit as editarsubcategoria } from './components/editarsubcategoria';

export default function CadastroFilial(){

    const dispatch = useDispatch();

    const [open, setOpen] = useState({
        openStatus: false,
        openCategoria: false,
        openSubCategoria: false,
        openSetores: false,
        openCargos: false,
        openCargosEdit: false,
        openSetoresEdit: false,
        openStatusEdit: false,
        openCategoriaEdit: false,
        openSubCategoriaEdit: false,
    });

    const categoriasList = useSelector(state => state.chamadosreducer.categorias.result);
    const subcategoriasList = useSelector(state => state.chamadosreducer.subCategorias.result);
    const statuslist = useSelector(state => state.chamadosreducer.status.result);
    const setorlist = useSelector(state => state.funcionarioreducer.setores.result);
    const cargolist = useSelector(state => state.funcionarioreducer.cargos.result);

    const [cargos, setCargos] = useState(cargolist.length > 0 ? cargolist[0]: {nome: ''});
    const [setores, setSetores] = useState(setorlist.length > 0 ? setorlist[0]: {nome: ''});
    const [statuses, setStatus] = useState(statuslist.length > 0 ? statuslist[0]: {nome: ''});
    const [categorias, setCategorias] = useState(categoriasList.length > 0 ? categoriasList[0]: {nome: ''});
    const [subcategorias, setSubCategorias] = useState(subcategoriasList.length > 0 ? subcategoriasList[0]: {nome: ''});
    

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
        dispatch(actions.DELETAR_CATEGORIAS_REQUEST({id: categorias.id}));
        dispatch(actions.CATEGORIAS_REQUEST());
    }

    function handleDeleteSubCategoria(e){
        e.preventDefault();
        dispatch(actions.DELETAR_SUBCATEGORIAS_REQUEST({id: subcategorias.id}));
        dispatch(actions.SUBCATEGORIAS_REQUEST());
    }

    function handleDeleteStatus(e){
        e.preventDefault(); 
        dispatch(actions.DELETAR_STATUS_REQUEST({id: statuses.id}));
        dispatch(actions.STATUS_REQUEST());
    }

    function handleDeleteSetor(e){
        e.preventDefault(); 
        dispatch(actionsFuncionario.DELETAR_SETORES_REQUEST({id: setores.id}));
        dispatch(actionsFuncionario.SETORES_REQUEST());
    }

    function handleDeleteCargo(e){
        e.preventDefault(); 
        dispatch(actionsFuncionario.DELETAR_CARGO_REQUEST({id: cargos.id}));
        dispatch(actionsFuncionario.CARGOS_REQUEST());
    }

    useEffect(() => {
        onload()
    }, []);

    return (
        <Container>
                {open.openStatus ? criarstatus((close) => {setOpen({...open, openStatus: close})}, {nome: ""}): null}
                {open.openCategoria ? criarcategoria((close) => {setOpen({...open, openCategoria: close})}): null}
                {open.openSubCategoria ? criarsubcategoria((close) => {setOpen({...open, openSubCategoria: close})}): null}
                {open.openSetores ? criarsetores((close) => {setOpen({...open, openSetores: close})}): null}
                {open.openCargos ? criarcargo((close) => {setOpen({...open, openCargos: close})}): null}
                {open.openCargosEdit ? editarcargo((close) => {setOpen({...open, openCargosEdit: close})}, cargos): null}
                {open.openSetoresEdit ? editarsetores((close) => {setOpen({...open, openSetoresEdit: close})}, setores): null}
                {open.openCategoriaEdit ? editarcategoria((close) => {setOpen({...open, openCategoriaEdit: close})}, categorias): null}
                {open.openStatusEdit ? editarstatus((close) => {setOpen({...open, openStatusEdit: close})}, statuses): null}
                {open.openSubCategoriaEdit ? editarsubcategoria((close) => {setOpen({...open, openSubCategoriaEdit: close})}, subcategorias): null}
                <SectionOne>
                    <SectionTwo>
                        <div id="categoria">
                            <FaPlus size={25} cursor={'pointer'} className="plus-icon" onClick={() => setOpen({...open, openCategoria: !open.openCategoria})}></FaPlus>
                            <label>Categorias</label>
                        </div>
                        <div style={{width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                            {categoriasList.map(categoria => {
                                return (
                                    <ListItem key={categoria.id} onClick={() => {
                                        setCategorias(categoria);
                                    }}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                                            <p>{categoria.nome}</p>
                                        </div>
                                        <DivListItem>
                                            <FaEdit onClick={(e) => {
                                                setCategorias(categoria)
                                                setOpen({...open, openCategoriaEdit: !open.openCategoriaEdit});
                                            }} size={20}></FaEdit>
                                            <FaTrash onClick={(e) => {
                                                setCategorias(categoria)
                                                handleDeleteCategoria(e)}
                                            } size={20}></FaTrash>
                                        </DivListItem>
                                    </ListItem>
                                );
                            })}
                        </div>
                    </SectionTwo>
                    <SectionThree>
                        <div id="subcategoria">
                            {categoriasList.length > 0 ? 
                            <FaPlus size={25} cursor={'pointer'} className="plus-icon" onClick={() => setOpen({...open, openSubCategoria: !open.openSubCategoria})}></FaPlus>
                            :
                            null}

                            <label>Subcategorias</label>
                        </div>
                        <div style={{width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                            {subcategoriasList.map(subcategoria => {
                                return (
                                    <ListItem key={subcategoria.id} onClick={() => {
                                        setSubCategorias(subcategoria);
                                    }}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                                            <p>{subcategoria.nome}</p>
                                        </div>
                                        <DivListItem>
                                            <FaEdit onClick={(e) => {
                                                setSubCategorias(subcategoria);
                                                setOpen({...open, openSubCategoriaEdit: !open.openSubCategoriaEdit});
                                            }} size={20}></FaEdit>
                                            <FaTrash onClick={(e) => {
                                                setSubCategorias(subcategoria);
                                                handleDeleteSubCategoria(e);
                                            }} size={20}></FaTrash>
                                        </DivListItem>
                                    </ListItem>
                                );
                            })}
                        </div>
                    </SectionThree>
                    <SectionFour>
                        <div id="status">
                            <FaPlus size={25} cursor={'pointer'} className="plus-icon" onClick={() => setOpen({...open, openStatus: !open.openStatus})}></FaPlus>
                            <label>Status</label>
                        </div>
                        <div style={{width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                            {statuslist.map(status => {
                                return (
                                    <ListItem onClick={() => {
                                        setStatus(status)
                                    }} key={status.id}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                                            <p>{status.nome}</p>
                                        </div>
                                        <DivListItem>
                                            {status.default ? <FaRegCheckCircle size={20} onClick={() => {
                                                dispatch(actions.EDITAR_STATUS_REQUEST({...status, default: false}));
                                            }}></FaRegCheckCircle>
                                            :
                                            <MdRadioButtonUnchecked size={20} onClick={() => {
                                                let st = statuslist.filter(s => {
                                                    if(s.default){
                                                        return s;
                                                    }
                                                });

                                                st.map(s => {
                                                    dispatch(actions.EDITAR_STATUS_REQUEST({...s, default: false}));
                                                });

                                                dispatch(actions.EDITAR_STATUS_REQUEST({...status, default: true}));
                                            }}></MdRadioButtonUnchecked>}
                                            <FaEdit onClick={(e) => {
                                                setStatus(status);
                                                setOpen({...open, openStatusEdit: !open.openStatusEdit});
                                            }} size={20}></FaEdit>
                                            <FaTrash onClick={(e) => {
                                                setStatus(status);
                                                handleDeleteStatus(e);
                                            }} size={20}></FaTrash>
                                        </DivListItem>
                                    </ListItem>
                                );
                            })}
                        </div>    
                    </SectionFour>
                    <SectionFive>
                        <div id="setores">
                            <FaPlus size={25} cursor={'pointer'} className="plus-icon" onClick={() => setOpen({...open, openSetores: !open.openSetores})}></FaPlus>
                            <label>Setores</label>
                        </div>
                        <div style={{width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                            {setorlist.map(setor => {
                                return (
                                    <ListItem onClick={() => {
                                        setSetores(setor)
                                    }} key={setor.id}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                                            <p>{setor.nome}</p>
                                        </div>
                                        <DivListItem>
                                            <FaEdit onClick={(e) => {
                                                setSetores(setor);
                                                setOpen({...open, openSetoresEdit: !open.openSetoresEdit});
                                            }} size={20}></FaEdit>
                                            <FaTrash onClick={(e) => {
                                                setSetores(setor);
                                                handleDeleteSetor(e);
                                            }} size={20}></FaTrash>
                                        </DivListItem>
                                    </ListItem>
                                );
                            })}
                        </div>    
                    </SectionFive>
                    <SectionSix>
                        <div id="cargos">
                            <FaPlus size={25} cursor={'pointer'} className="plus-icon" onClick={() => setOpen({...open, openCargos: !open.openCargos})}></FaPlus>
                            <label>Cargos</label>
                        </div>
                        <div style={{width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden'}}>
                            {cargolist.map(cargo => {
                                return (
                                    <ListItem onClick={() => {
                                        setCargos(cargo)
                                    }} key={cargo.id}>
                                        <div style={{display: 'flex', justifyContent: 'center', width: '60%'}}>
                                            <p>{cargo.nome}</p>
                                        </div>
                                        <DivListItem>
                                            <FaEdit onClick={(e) => {
                                                setCargos(cargo);
                                                setOpen({...open, openCargosEdit: !open.openCargosEdit});
                                            }} size={20}></FaEdit>
                                            <FaTrash onClick={(e) => {
                                                setCargos(cargo);
                                                handleDeleteCargo(e);
                                            }} size={20}></FaTrash>
                                        </DivListItem>
                                    </ListItem>
                                );
                            })}
                        </div>   
                    </SectionSix>
                </SectionOne>
        </Container>
    );
}

