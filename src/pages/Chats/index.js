import React, { useState } from "react";
import Chat from "../../components/chat";
import { Divhome, DivListaDeChamados, DivDados, DivChat, DivTitleChat, DivChatTitle } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/modules/chamadosreducer/actions';
import * as actionsChats from '../../store/modules/ChatsReducer/actions';
import { IoIosExit } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import UploadPhoto from "../../components/UploadPhoto";
import Config from "./Config";

export default function Chats(props) {
  const iduser = useSelector(state => state.authreducer.user.id);
  const dispatch = useDispatch();
  const [chat, setChat] = useState(null); // Estado para armazenar os chats cadastrados
  const [filtroChamados, setFiltroChamados] = React.useState("my");
  const [openConfig, setOpenConfig] = React.useState(false);
  const chats = useSelector(state => state.chatreducer.chats_buscados) ?? [];
  const profile = chat && Object.keys(chat.arquivos).length > 0 ? chat.arquivos.filter(file => {
    return file.tag === 'profile_photo'
  })[0].file_name : ""

  React.useEffect(() => {
    if(filtroChamados === 'my'){
      dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_criador+eq+${iduser}`}));
    }else if(filtroChamados === "resp"){
      dispatch(actions.CHAMADOSREQUEST({filter: `id_funcionario_resp+eq+${iduser}`}));
    }
  }, [filtroChamados, iduser, dispatch])

  console.log(chats)
  return (
    <>
      <Divhome>
          {openConfig ? <Config open={openConfig} setClose={setOpenConfig} chat={chat}></Config>:null}
          <DivListaDeChamados>
          {chat !== null ? <></>: <>
            <h1>Lista de chats</h1>
            <select id="filtro" value={filtroChamados} onChange={(e) => setFiltroChamados(e.target.value)}>
              <option value="my">Meus Chamados</option>
              <option value="resp">Responsável</option>
            </select>
              <div id="lista">
              {chats.map(chat => (
                <div key={chat.id} style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <DivDados onClick={() => {
                    setChat(chat)
                  }} >
                      <label>Status: {chat.status}</label>
                      <label>Titulo da solicitação: {chat.titulo}</label>
                      <label>Descrição: {chat.descricao}</label>
                </DivDados>
                <FaTrash size={20} cursor={'pointer'} onClick={() => {
                  dispatch(actionsChats.CHATS_DELETAR_REQUEST({id: chat.id}));
                }}></FaTrash>
                </div>
              ))}
              </div>
              </>}
          </DivListaDeChamados>
          {chat !== null ? 
          <>
            <DivTitleChat>
                <title>{chat.causa}</title>
                <IoIosExit size={40} style={{cursor: 'pointer', alignSelf: 'flex-end'}} onClick={() => {
                    setChat(null);
                }}></IoIosExit>
            </DivTitleChat>
            <DivChat>
              <DivChatTitle onClick={() => setOpenConfig(!openConfig)}>
                <UploadPhoto small={{container: 70, img: 120}} change={false} file_name={profile} apiDownload={false} socketDownload={String(profile).length > 0}></UploadPhoto>
                <p>{chat.titulo}</p>
              </DivChatTitle>
              <Chat chat={chat} close={setChat}></Chat>
            </DivChat>
          </>: null}
      </Divhome>
    </>
  );
}
