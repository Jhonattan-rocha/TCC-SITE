import React from "react";
import { FormEditar, SectionFour, SectionOne, SectionThree, SectionTwo, ButtonAttachFile } from "./styled";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { ContainerEditar } from "./styled";
import { DivOverLay, DivPopUp } from '../../../components/styled';

import * as actions from '../../../store/modules/chamadosreducer/actions';
import * as actionsFuncionarios from '../../../store/modules/funcionarioreducer/actions';
import { toast } from "react-toastify";
import { FaTrash, FaDownload } from 'react-icons/fa';
import { AiOutlineSend } from "react-icons/ai";
import { MdAttachFile } from "react-icons/md";
import axios from "axios";
import { baseURL, ApiPort } from "../../../config/appConfig";
import ModalEdit from "../../../components/ModalEdit";

export function edit(close, chamado){
    return (
        <>
            <DivOverLay>
                <EditarChamado close={close} chamado={chamado}></EditarChamado>
            </DivOverLay>
        </>
    );
}

export default function EditarChamado(props){

    const dispatch = useDispatch();
    const categoriasList = useSelector(state => state.chamadosreducer.categorias.result) || [];
    const statuslist = useSelector(state => state.chamadosreducer.status.result) || [];
    const user = useSelector(state => state.authreducer);
    const comentarios = useSelector(state => state.funcionarioreducer.comentarios.result) || [];
    const arquivos = useSelector(state => {
        try{
            return state.chamadosreducer.arquivos.result
        }catch(err){
            return state.chamadosreducer.arquivos
        }
    }) || [];
    function handleSubmit(e){
        e.preventDefault();
        if(!causa || !operador || !descricao){
            toast.error("Valores não podem ser vazios");
            return
        }

        if(funcResp){
            dispatch(actions.EDITAR_CHAMADOREQUEST({id: props.chamado.id, causa: causa, operador: operador, descricao: descricao, id_status: Status, id_funcionario_resp: funcResp, categoria: categoria}))
        }else{
            dispatch(actions.EDITAR_CHAMADOREQUEST({id: props.chamado.id, causa: causa, operador: operador, descricao: descricao, id_status: Status, categoria: categoria}))
        }
        dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+eq+${user.user.id}`}));
        props.close(false)
    }
    const UploadControl = ({ children, value, onChange, disabled, accept }) => {
        return (
          <label htmlFor="contained-button-file" style={{cursor: 'pointer'}}>
            <input
              value={value}
              accept={accept}
              disabled={disabled}
              style={{ display: 'none', cursor: 'pointer' }}
              id="contained-button-file"
              multiple
              type="file"
              onChange={disabled ? () => {} : onChange}
            />
            {children}
          </label>
        );  
      };
    const DownLoadFile = (file_name, original_name) => {
        axios.post(`http://${baseURL}:${ApiPort}/download/`, {
            originalname: original_name,
            filename: file_name
        }, {
            method: "post",
            headers: {'Content-Type':'application/json', 'Authorization': `Bearer ${user.token}`},
            responseType: 'blob',
        }).then(response => {
            const blob = new Blob([response.data], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob)
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = original_name;
            document.body.appendChild(downloadLink);
            downloadLink.click();
                        
            document.body.removeChild(downloadLink);
        })
        .catch(error => console.log(error));
    }

    const handleUpdate = () => {
        dispatch(actions.ARQUIVO_BUSCAR_REQUEST({filter: 'id_chamado+eq+'+props.chamado.id}));
        dispatch(actionsFuncionarios.COMENTARIO_BUSCAR_REQUEST({filter: 'id_chamado+eq+'+props.chamado.id}));
    }

    const [causa, setCausa] = React.useState(props.chamado.causa);
    const [operador, setOperador] = React.useState(props.chamado.operador);
    const [descricao, setDescricao] = React.useState(props.chamado.descricao);
    const [Status, setStatus] = React.useState(props.chamado.id_status);
    const [categoria, setcategoria] = React.useState(props.chamado.categoria);
    const [funcResp, setFuncResp] = React.useState(props.chamado.id_funcionario_resp)
    const [comentario, setComentario] = React.useState("");

    React.useEffect(() => {
        handleUpdate();
    }, [])

    return (
        <>
            <DivPopUp draggable={false}>
                <ContainerEditar draggable={false}>
                    <div id="closeedit">
                        <FaWindowClose onClick={() => {
                            props.close(false)
                            
                        }} size={30} cursor={'pointer'}></FaWindowClose>
                    </div>
                    <FormEditar>    
                        <SectionOne>
                            <div id="divisao">
                                <div id="causa">
                                    <label htmlFor="causa">Causa: </label>
                                    <input value={causa} onChange={(e) => setCausa(e.target.value)}></input>
                                </div>

                                <div id="operador">
                                    <label htmlFor="operador">Operador</label>
                                    <input value={operador} onChange={(e) => setOperador(e.target.value)}></input>
                                </div>
                                
                                <div id="status">
                                    <label>Status</label>
                                    <select value={Status} placeholder="Esolha o estágio" onChange={(e) => setStatus(e.target.value)}>
                                        {statuslist.map(status => (
                                            <option key={status.id} value={status.id}>{status.nome}</option>
                                        ))}
                                    </select>
                                </div>

                                <div id="problemas">
                                    <label>Categoria</label>
                                    <select value={categoria} placeholder="Esolha o problema" onChange={(e) => setcategoria(e.target.value)}>
                                        {categoriasList.map(categoria => (
                                            <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div id="area">
                                <label>Descrição do Chamado</label>
                                <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                            </div>
                        </SectionOne>
                        <SectionTwo>
                            <div id="comentar">
                                <label>Novo Comentário</label>
                                <div id="inputsubmit">
                                    <input value={comentario} onChange={(e) => setComentario(e.target.value)}></input>
                                    <AiOutlineSend size={30} cursor={'pointer'} color="black" onClick={() => {
                                        dispatch(actionsFuncionarios.COMENTARIO_CRIAR_REQUEST({conteudo: comentario, id_chamado: props.chamado.id, id_funcionario_criador: user.user.id}))
                                        setComentario("");
                                    }}></AiOutlineSend>
                                </div>
                            </div>
                            <SectionThree>
                                {comentarios.map(co => {
                                    return (
                                        <div className="comentario" key={co.id}>
                                            <div className="icons">
                                                <ModalEdit comentario={co}></ModalEdit>
                                                <FaTrash cursor={'pointer'} onClick={() => {
                                                    dispatch(actionsFuncionarios.COMENTARIO_DELETAR_REQUEST({id: co.id, id_chamado: props.chamado.id}));
                                                }}></FaTrash>
                                            </div>
                                            <div>
                                                <span style={{overflowWrap: 'anywhere'}}>{co.conteudo}</span>
                                            </div>
                                        </div>  
                                    );
                                })}
                            </SectionThree>
                            <SectionFour>
                                <label>Anexos</label>
                                {arquivos.map(arq => {
                                    return (
                                        <div className="arquivo" key={arq.id}>
                                            <div className="icons">
                                                <FaDownload cursor={'pointer'} onClick={() => {
                                                    DownLoadFile(arq.filename, arq.originalname);
                                                }}></FaDownload>
                                                <FaTrash cursor={'pointer'} onClick={() => {
                                                    dispatch(actions.ARQUIVO_DELETAR_REQUEST({id: arq.id, id_chamado: props.chamado.id}));
                                                }}></FaTrash>
                                            </div>
                                            <div>
                                                <span style={{overflowWrap: 'anywhere'}}>{arq.originalname}</span>
                                            </div>
                                        </div>  
                                    );
                                })}
                            </SectionFour>
                        </SectionTwo>
                    </FormEditar>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <ButtonAttachFile type="button">
                            <UploadControl onChange={(e) => {
                                console.log(e.target.files)
                                for(let file of e.target.files){
                                    let originalname = file.name;
                                    let filename = Date.now() + "_" + user.user.id + "_" + originalname;
                                    let id_dono = user.user.id;
                                    let id_empresa_dona = user.user.id_empresa;
                                    let mime_type = file.type;
                                    let id_chamado = props.chamado.id;
                                    let dados = {originalname: originalname, filename: filename, id_dono: id_dono, id_empresa_dona:id_empresa_dona, mime_type: mime_type, id_chamado: id_chamado, file: file};
                                    dispatch(actions.ARQUIVO_CRIAR_REQUEST(dados));
                                }
                                setTimeout(() => {
                                    dispatch(actions.ARQUIVO_BUSCAR_REQUEST({filter: 'id_chamado+eq+'+props.chamado.id}))
                                }, 2000)
                            }} accept=".jpeg,.jpg,.doc,.docx,.pdf,.txt,.png">
                                <MdAttachFile size={30}></MdAttachFile>
                            </UploadControl>
                        </ButtonAttachFile>
                        <button id="submit" type="button" onClick={(e) => handleSubmit(e)} hidden={funcResp !== user.user.id ? false: true}>Editar</button>
                        {user.user.id !== props.chamado.id_funcionario_criador ? 
                        <button id="submit-resp" type="button" onClick={() => {
                            toast.success("Sucesso");
                            setFuncResp(user.user.id);
                            dispatch(actions.EDITAR_CHAMADOREQUEST({id: props.chamado.id, causa: causa, operador: operador, descricao: descricao, id_status: Status, id_funcionario_resp: user.user.id, categoria: categoria}))
                        }}>Responsabilizar-se</button>:null
                        }
                    </div>
                </ContainerEditar>
            </DivPopUp>
        </>
    );
}
