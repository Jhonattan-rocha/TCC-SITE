import React, { useState } from "react";
import { FormEditar, SectionFour, SectionOne, SectionThree, SectionTwo, ButtonAttachFile, ContainerEditar } from "./styles";
import { useDispatch, useSelector } from "react-redux";

import * as actions from '../../store/modules/chamadosreducer/actions';
import * as actionsChats from '../../store/modules/ChatsReducer/actions';
import { toast } from "react-toastify";
import { FaTrash } from 'react-icons/fa';
import { AiOutlineSend } from "react-icons/ai";
import { MdAttachFile } from "react-icons/md";

export default function CriarChamado(props){

    const dispatch = useDispatch();
    const subcategoriaslist = useSelector(state => state.chamadosreducer.subCategorias.result);
    const categoriasList = useSelector(state => state.chamadosreducer.categorias.result);
    const statuslist = useSelector(state => state.chamadosreducer.status.result);
    const user = useSelector(state => state.authreducer);
    const [comentarios, setComentarios] = useState([]);
    const [arquivos, setArquivos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        if(!causa || !operador || !descricao){
            toast.error("Valores não podem ser vazios");
            return
        }
        console.log("aaaa")
        dispatch(actions.ChamadoRequest({id_funcionario_criador: user.user.id, causa: causa, operador: operador, descricao: descricao, id_status: Status, categoria: categoria, subcategoria: subcategoria, anexos: arquivos, comentarios: comentarios}));
        dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+eq+${user.user.id}`}));
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


    const [causa, setCausa] = React.useState("");
    const [operador, setOperador] = React.useState("");
    const [descricao, setDescricao] = React.useState("");

    const defaultStatusOption = statuslist.find(status => status.default) || statuslist[0] || 0;

    const [Status, setStatus] = React.useState(defaultStatusOption.id);
    const [categoria, setCategoria] = React.useState(categoriasList.length > 0 ? categoriasList[0].id: 0);
    const [subcategoria, setSubCategoria] = React.useState(subcategoriaslist.length > 0 ? subcategoriaslist[0].id: 0);
    const [comentario, setComentario] = React.useState("");

    return (
            <ContainerEditar>
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
                                <select value={categoria} placeholder="Esolha o problema" onChange={(e) => {
                                    dispatch(actions.SUBCATEGORIAS_REQUEST({filter: "id_categoria+eq+"+categoria.id}));
                                    setCategoria(e.target.value)}
                                }>
                                    {categoriasList.map(categoria => (
                                        <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                                    ))}
                                </select>
                            </div>

                            <div id="problemas">
                                <label>SubCategoria</label>
                                <select value={subcategoria} placeholder="Esolha o problema" onChange={(e) => setSubCategoria(e.target.value)}>
                                    {subcategoriaslist.map(subcategoria => (
                                        <option key={subcategoria.id} value={subcategoria.id}>{subcategoria.nome}</option>
                                    ))}
                                </select>
                            </div>

                            <div id="problemas">
                                <label>Setor</label>
                                <select value={categoria} placeholder="Esolha o problema" onChange={(e) => setCategoria(e.target.value)}>
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
                                    setComentarios([...comentarios, comentario])
                                    setComentario("");
                                }}></AiOutlineSend>
                            </div>
                        </div>
                        <SectionThree>
                            {comentarios.map(co => {
                                return (
                                    <div className="comentario" key={co.length}>
                                        <div className="icons">
                                            <FaTrash cursor={'pointer'} onClick={() => {
                                                let cos = comentarios.filter(c => {
                                                    return c !== co;
                                                })
                                                
                                                setComentarios(cos);
                                            }}></FaTrash>
                                        </div>
                                        <div>
                                            <span style={{overflowWrap: 'anywhere'}}>{co}</span>
                                        </div>
                                    </div>  
                                );
                            })}
                        </SectionThree>
                        <SectionFour>
                            <label>Anexos</label>
                            {arquivos.map(arq => {
                                return (
                                    <div className="arquivo" key={arq.filename}>
                                        <div className="icons">
                                            <FaTrash cursor={'pointer'} onClick={() => {
                                                let arqs = arquivos.filter(ar => {
                                                    return arq.filename !== ar.filename;
                                                });

                                                setArquivos(arqs)
                                            }}></FaTrash>
                                        </div>
                                        <div>
                                            <span style={{overflowWrap: 'anywhere'}}>{arq.originalname}</span>
                                        </div>
                                    </div>  
                                );
                            })}
                        </SectionFour>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <ButtonAttachFile type="button">
                                <UploadControl onChange={(e) => {
                                    for(let file of e.target.files){
                                        let originalname = file.name;
                                        let filename = Date.now() + "_" + user.user.id + "_" + originalname;
                                        let id_dono = user.user.id;
                                        let id_empresa_dona = user.user.id_empresa;
                                        let mime_type = file.type;
                                        let id_chamado = 0;
                                        let dados = {originalname: originalname, filename: filename, id_dono: id_dono, id_empresa_dona:id_empresa_dona, mime_type: mime_type, id_chamado: id_chamado, file: file};
                                        setTimeout(() => {
                                            setArquivos([...arquivos, dados]);
                                        }, 100)
                                    }
                                }} accept=".jpeg,.jpg,.doc,.docx,.pdf,.txt,.png">
                                    <MdAttachFile size={30}></MdAttachFile>
                                </UploadControl>
                            </ButtonAttachFile>
                            <button id="submit" type="button" onClick={(e) => handleSubmit(e)}>Criar</button>
                        </div>
                    </SectionTwo>
                </FormEditar>
            </ContainerEditar>
    );
}

/**
 *     function handleSubmit(e){
        e.preventDefault();
        if(!causa || !operador || !descricao){
            toast.error("Os valores principais não podem ser vaizos");
            return;
        }
        dispatch(actions.ChamadoRequest({causa: causa, operador: operador, descricao: descricao, id_status: Status.id, id_funcionario_criador: iduser, categoria: categorias.id, subcategoria: subcategorias.id}))
        dispatch(actionsChats.CHATS_CRIAR_REQUEST({titulo: causa, descricao: descricao, status: 'em aberto'}))
        dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+eq+${iduser}`}));
    }
 * 
 */