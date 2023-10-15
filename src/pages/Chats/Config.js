import React from "react";
import { Sidebar } from "../../components/styled";
import { DivArquivos, DivCloseConfig, DivContainerConfig, Input, ListItem, TextArea, TitleChatConfig } from "./styled";
import { GrClose } from "react-icons/gr";
import UploadPhoto from "../../components/UploadPhoto";
import { useDispatch } from "react-redux";
import * as actions from '../../store/modules/ChatsReducer/actions';
import { FaTrash } from "react-icons/fa";

export default function Config(props){

    const [open, setOpen] = React.useState(props.open);
    const chat = props.chat
    const dispatch = useDispatch();
    const [titulo, setTitulo] = React.useState(chat.titulo);
    const [descricao, setDescricao] = React.useState(chat.descricao);
    const [img, setImg] = React.useState("");

    const profile = chat.arquivos.filter(file => file.tag === 'profile_photo')[0]
    return (
        <Sidebar open={open}>
            <DivContainerConfig>
                <DivCloseConfig>
                    <GrClose size={30} style={{margin: 10, cursor: 'pointer'}} onClick={() => {
                        setOpen(false);
                        props.setClose(false);
                    }}></GrClose>
                    <p>Dados do chat</p>
                </DivCloseConfig>
                <UploadPhoto setImg={setImg} socketDownload={true} apiDownload={false} file_name={profile ? profile.file_name : ""}></UploadPhoto>
                <Input value={titulo} multiline={false} onChange={(e) => setTitulo(e.target.value)}></Input>
                <TextArea value={descricao} multiline={true} onChange={(e) => setDescricao(e.target.value)}></TextArea>
                <DivArquivos>
                    {chat.arquivos.map(file => {
                        return (
                            <ListItem  key={file.id}>
                                <p>{file.original_name}</p>
                                <FaTrash cursor={'pointer'} onClick={() => {
                                    dispatch(actions.CHATS_ARQUIVO_DELETAR_REQUEST({id: file.id}))
                                    setTimeout(() => {
                                        dispatch(actions.CHATS_BUSCAR_REQUEST());
                                    }, 2000)
                                }}></FaTrash>
                            </ListItem>
                        );
                    })}
                </DivArquivos>
                <button title="Salvar" type="button" style={{color: 'white', alignSelf: 'center'}} onClick={(e) => {
                    if(img){
                        dispatch(actions.CHATS_EDITAR_COM_FOTO_REQUEST({id: chat.id, titulo: titulo, descricao: descricao, img: img}))
                    }else{
                        dispatch(actions.CHATS_EDITAR_REQUEST({id: chat.id, titulo: titulo, descricao: descricao}))
                    }
                    
                    setOpen(false);
                    props.setClose(false);
                    setTimeout(() => {
                        dispatch(actions.CHATS_BUSCAR_REQUEST());
                    }, 2000)
                }}>Salvar</button>
            </DivContainerConfig>
        </Sidebar>
    );
}
