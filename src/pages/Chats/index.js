import React, { useState } from "react";
import Chat from "../../components/chat";
import { Divhome, DivListaDeChamados, DivDados, DivChat, DivTitleChat, DivChatTitle, DivSearch, DivInputSearch } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/modules/chamadosreducer/actions';
import * as actionsChats from '../../store/modules/ChatsReducer/actions';
import { IoIosExit } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { BsFunnelFill, BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import UploadPhoto from "../../components/UploadPhoto";
import Config from "./Config";
import SubHeader from "../../components/SubHeader";

export default function Chats(props) {
  const iduser = useSelector(state => state.authreducer.user.id);
  const dispatch = useDispatch();
  const [filtroChamados, setFiltroChamados] = React.useState("my");
  const [openConfig, setOpenConfig] = React.useState(false);
  const chats = useSelector(state => state.chatreducer.chats_buscados) ?? [];
  const [chat, setChat] = useState(chats[0] ?? null);
  const [search, setSearch] = useState('');
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
      <Divhome>
          {openConfig ? <Config open={openConfig} setClose={setOpenConfig} chat={chat}></Config>:null}
          <DivListaDeChamados>
            <DivSearch>
              <DivInputSearch>  
                  <BsSearch size={20}></BsSearch>
                  <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
                  <AiOutlineClose size={20} onClick={() => setSearch('')} cursor={'pointer'}></AiOutlineClose>
              </DivInputSearch>
              <BsFunnelFill size={30}></BsFunnelFill>
              <AiOutlineBars size={30}></AiOutlineBars>
              {/* <select id="filtro" value={filtroChamados} onChange={(e) => setFiltroChamados(e.target.value)}>
                <option value="my">Meus Chamados</option>
                <option value="resp">Responsável</option>
              </select> */}
            </DivSearch>
            <div id="lista">
              {chats.map(chat => (
                  <DivDados key={chat.id} style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}} onClick={() => {
                      setChat(null);
                      setTimeout(() => {
                        setChat(chat);
                      }, 1);
                    }}>
                    <UploadPhoto size={{container: 60, img: 50}} change={false}></UploadPhoto>

                    <p>{chat.titulo}</p>
                  </DivDados>
              ))}
            </div>
          </DivListaDeChamados>
          {chat !== null ? 
            <DivChat>
              <DivChatTitle onClick={() => setOpenConfig(!openConfig)}>
                <UploadPhoto preView={false} size={{container: 70, img: 120}} change={false} file_name={profile} apiDownload={false} socketDownload={String(profile).length > 0}></UploadPhoto>
                <p>{chat.titulo}</p>
              </DivChatTitle>
              <Chat chat={chat} close={setChat}></Chat>
            </DivChat>
          : null}
      </Divhome>
  );
}
